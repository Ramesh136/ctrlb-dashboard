import React, { useState, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from "react-flow-renderer";

// import "./styles.css";

const getNodeId = () => `randomnode_${+new Date()}`;

const initialNodes = [
  { id: "1",type: 'input' , data: { label: "Input Node" }, position: { x: 100, y: 100 } },
  { id: "2", data: { label: "Intermediate" }, position: { x: 100, y: 200 } },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const FlowExample = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges , setEdges] = useEdgesState(initialEdges);
  const [nodeName, setNodeName] = useState("");

  const addEdge = useCallback(({ source, target }) => {
    setEdges((edges) => {
      console.log(source, target);
      return [
        ...edges,
        {
          id: Math.random(),
          source,
          target,
        },
      ];
    });
  }, []);

  const onAdd = useCallback((e) => {
    if(nodeName==="")
        return
    console.log(e.target.innerText)
    const newNode = {
      id: getNodeId(),
      data: { label: `${nodeName}` },
      position: {
        x: 0,
        y: 0 + (nodes.length + 1) * 20,
      },
      type: e.target.innerText === "Add Source Node" ? "input" : "default",
    };
    setNodes((nds) => nds.concat(newNode));
  }, [nodes, setNodes, nodeName]);

  return (
    <div>
      <div style={{ width: "100%", height: "40vh" }} className="border-2 border-gray-400 rounded">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onConnect={addEdge}
        />
      </div>
      <div className="space-x-2 p-2 mt-2">
        
        <input
          className="w-auto border border-black px-2 py-1 rounded"
          placeholder="node name"
          type="text"
          onChange={(e) => {
            setNodeName(e.target.value);
          }}
        />
        <button
          className="rounded bg-slate-500 px-4 py-1 text-white"
          onClick={(e) => onAdd(e)}
        >
          Add Source Node
        </button>
        <button
          className="rounded bg-slate-500 px-4 py-1 text-white"
          onClick={(e) => onAdd(e)}
        >
          Add Destination Node
        </button>
      </div>
    </div>
  );
};

export default () => (
  <ReactFlowProvider>
    <FlowExample />
  </ReactFlowProvider>
);

import React, { useCallback, useRef } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
 
import 'reactflow/dist/style.css';
 
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
const minimapStyle = {
  height: 80,
  width : 140
};
  

const Graphic = () => {

    const yPos = useRef(0);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
      (params) => setEdges((eds) => addEdge(params, eds)),
      [setEdges],
    );

    const addNode = () => {
    console.log(nodes)
      yPos.current += 50;
      setNodes([
        ...nodes,
        {
          id: Math.random(),
          position: { x: 100, y: yPos.current },
          data: { label: "yo" },
          width: 150,
          height: 40,
          dragging: true,
          selected : true
        },
      ]);
    }
 
  return (
    <div>
      <h1 className="text-3xl w-full">DashBoard</h1>
      <div className="mt-9">
        <div className="border p-5" style={{ width: "100%", height: "50vh" }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
          >
            <Controls />
            <MiniMap style={minimapStyle} />
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
      <button onClick={addNode}>add</button>
    </div>
  );
}

export default Graphic
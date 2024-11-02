import { FallingBlock } from "./falling-block";
import { useBlocks } from "../context/BlocksContext";

export function TetrisGrid() {
  const { blocks } = useBlocks();
  // const [settledBlocks, setSettledBlocks] = useState([]);

  // const handleSettle = (position) => {
  //   // Quando um bloco "para", ele é movido para `settledBlocks`
  //   // setSettledBlocks((prev) => [...prev, position]);
  //   setBlocks((prev) => prev.slice(1)); // Remove o bloco atual
  // };

  return (
    <>
      {blocks.map((block) => (
        <FallingBlock
          key={block.id}
          position={block.position}
          shape={block.shape}
          variant={block.selectedFormula}
        />
      ))}
      {/* {settledBlocks.map((pos, i) => (
        <mesh key={i} position={[pos[0], pos[1], 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#fff" />
        </mesh>
      ))} */}
    </>
  );
}
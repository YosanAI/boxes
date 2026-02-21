import { Box } from './box';

export function BoxGrid({ rows = 1, columns = 1, cellSize = 220, margin = 0 }) {
  const safeRows = Math.max(1, rows);
  const safeColumns = Math.max(1, columns);
  const safeCellSize = Math.max(1, cellSize);
  const safeMargin = Math.max(0, margin);
  const totalCells = safeRows * safeColumns;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${safeColumns}, ${safeCellSize}px)`,
        gridTemplateRows: `repeat(${safeRows}, ${safeCellSize}px)`,
        gap: '0',
      }}
    >
      {Array.from({ length: totalCells }, (_, index) => (
        <Box key={index} size={safeCellSize} margin={safeMargin} />
      ))}
    </div>
  );
}

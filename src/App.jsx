import './App.css';
import { Box } from './components/box';
import { BoxGrid } from './components/BoxGrid';

export default function App() {
  return (
    <main className="app-shell">
      <BoxGrid rows = {20} columns={30} cellSize={30}/>
    </main>
  );
}

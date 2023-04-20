import { Component, createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Square from './components/Square';

const bttnClass = 'flex justify-center items-center h-5 w-5 border border-slate-500 overflow-hidden'

const App: Component = () => {
  const [columns, setColumns] = createSignal(5);
  const [rows, setRows] = createSignal(5);
  const setNumberOfColumns = (nb: Number) => {
    setColumns(Number(nb >= 1 ? nb : 1))
  }
  const setNumberOfRows = (nb: Number) => {
    setRows(Number(nb >= 1 ? nb : 1))
  }

  return (
    <div class='h-screen w-screen bg-slate-800'>
      <nav class='flex flex-row justify-center items-center h-10 fixed top-0 left-0 right-0 z-50 bg-rose-400'>
        <div class="flex w-full gap-2 justify-center">
          <label>Columns</label>
          <input class="w-14 pl-1 bg-[rgba(0,0,0,0.125)] selection:bg-rose-200 rounded-sm outline-none" type='number' min={1} max={20} value={columns()}
            onChange={e => setNumberOfColumns(Number(e.currentTarget.value))}
          />
        </div>
        
        <div class="flex w-full gap-2 justify-center">
          <label>Rows</label>
          <input class="w-14 pl-1 bg-[rgba(0,0,0,0.125)] selection:bg-rose-200 appearance-none rounded-sm outline-none" type='number' min={1} max={20} value={rows()}
            onChange={e => setNumberOfRows(Number(e.currentTarget.value))}
          />
        </div>
      </nav>

      <div class='mt-10'>
        {Array(rows()).fill(1).map((y) => (
          <div class='flex flex-row bg-slate-300'>
            {Array(columns()).fill(1).map((x) =>
              <Square></Square>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

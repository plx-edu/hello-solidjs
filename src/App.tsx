import { Component, createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Square from './components/Square';

const bttnClass = 'flex justify-center items-center h-5 w-5 border border-slate-500 overflow-hidden'

const App: Component = () => {
  const [columns, setColumns] = createSignal(5);
  const [rows, setRows] = createSignal(5);

  const PlusSign = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );

  const MinusSign = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
    </svg>
  );

  return (
    <div class='h-screen w-screen bg-slate-800'>
      <nav class='flex flex-row justify-center items-center h-10 fixed top-0 left-0 right-0 z-50 bg-rose-400'>
        <p>Columns: {columns()} </p>
        <button class={bttnClass}
          onClick={() => setColumns(columns() > 1 ? columns() - 1 : 1)}
        >
          -
        </button>
        <button class={bttnClass}
          onClick={() => setColumns(columns() + 1)}
        >
          {PlusSign()}
        </button>
        
        <p>Rows: {rows()} </p>
        <button class={bttnClass}
          onClick={() => setRows(rows() > 1 ? rows() - 1 : 1)}
        >
          -
        </button>
        <button class={bttnClass}
          onClick={() => setRows(rows() + 1)}
        >
          +
        </button>
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

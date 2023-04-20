import { createSignal } from "solid-js";

export default function Square() {
  const [isToggled, setIsToggled] = createSignal(false);
  const toggle = (e: MouseEvent) => {
    // button '1' is left click
    if((e.type === 'mousedown' || e.type === 'mouseenter') && e.buttons === 1) {
      setIsToggled(!isToggled())
    }
  };

  console.log('new square');

  return (
    <div class="sqr-outer relative w-full before:content-[''] before:block before:pt-[100%]">
      <div class="sqr-inner absolute top-0 bottom-0 left-0 right-0">
        <div class="sqr-content flex justify-center items-center h-full w-full border rounded-md border-slate-400 text-slate-400" classList={{'bg-slate-500' : isToggled() }}>
          <button class="flex justify-center items-center w-full h-full" onMouseEnter={toggle} onMouseDown={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

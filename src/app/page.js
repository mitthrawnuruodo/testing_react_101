import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { FaBeer } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Hello World, from next.js <TbBrandNextjs /> and tailwindcss <TbBrandTailwind />
        </h1>
        <p>Let's have a <FaBeer/></p>
      </main>   
    </div>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="site-container grid min-h-[65svh] place-items-center py-20 text-center">
      <div><p className="font-mono text-sm font-bold text-[#b17438]">404</p><h1 className="display mt-4 text-5xl text-[#174058]">This path does not lead anywhere.</h1><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#5d737d]">No lecture, son — just a wrong turn. The project is still right where you left it.</p><Link href="/" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#72c6ee] px-6 py-3 font-bold text-[#102f40]"><ArrowLeft className="size-4" aria-hidden="true" /> Return home</Link></div>
    </main>
  );
}

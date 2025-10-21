// app/page.tsx
"use client";

import InfoSection from "./components/InfoSection";
import LinkVerifier from "./components/LinkVerifier";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-indigo-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wide">SafeNet</h1>
          <p className="text-sm opacity-80">Protegendo vidas com tecnologia</p>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12">
        <InfoSection />
      </section>

      <section className="bg-white py-12 border-t">
        <div className="container mx-auto px-6">
          <LinkVerifier />
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} SafeNet – Unidos contra o tráfico de pessoas.
      </footer>
    </main>
  );
}






















// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <h1 className="text-4xl font-bold mb-8">Welcome to Next.js!</h1>
//     </div>
//   );
// }




//<div className="flex min-h-screen flex-col items-center justify-center p-24">
    //   <h1 className="text-4xl font-bold mb-8">Welcome to Next.js!</h1>
    //   <Image
    //     src="/next.svg"
    //     alt="Next.js Logo"
    //     width={180}
    //     height={38}
    //     priority
    //   />
    // </div>

  // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     /> 
    //   </main>
    // </div>
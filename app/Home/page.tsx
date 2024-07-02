import Hero from "@/components/Hero";



export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
      <Hero />
      </div>
    </main>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import OperationsAsService from "@/sections/Ops";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <OperationsAsService/>
    </main>
  );
}

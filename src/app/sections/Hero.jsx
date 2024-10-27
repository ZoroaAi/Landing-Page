
"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-background text-center">
        <h1 className="text-5xl font-bold text-primary mb-4">
            Transform Your Business with Automation
        </h1>
        <p className="text-lg text-secondary-foreground max-w-2xl">
            At Flow Fusion AI, we help businesses save time and increase revenue through tailored automation solutions.
        </p>
        <div className="flex space-x-4 mt-6">
            <Button className="px-8 py-4 text-lg" size="lg">
                Get Started
            </Button>
            <Button className="px-8 py-4 text-lg border" variant="outline" size="lg">
                View Pricing
            </Button>
        </div>
    </section>
  );
}

export default Hero;


// const Hero = () => {
//   const { theme } = useTheme();

//   return (
//     <section className="flex flex-col items-center justify-center h-screen bg-background text-center">
//       <h1 className="text-6xl font-extrabold text-primary mb-4">
//         Transform Your Business with Automation
//       </h1>
//       <p className="text-lg text-secondary-foreground max-w-2xl">
//         At Flow Fusion AI, we help businesses save time and increase revenue through tailored automation solutions.
//       </p>
//       <div className="flex space-x-4 mt-6">
//         <Button className="px-8 py-4 text-lg font-semibold" size="lg">
//           Get Started
//         </Button>
//         <Button className="px-8 py-4 text-lg font-semibold" variant="outline" size="lg">
//           View Pricing
//         </Button>
//       </div>
//     </section>
//   );
// };


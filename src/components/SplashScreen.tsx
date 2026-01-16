"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1117]">
        <div className="animate-pulse">
          <Image
            src="/iconwithoutbg.png"
            alt="AbabilX Logo"
            width={100}
            height={100}
            className="rounded-2xl"
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

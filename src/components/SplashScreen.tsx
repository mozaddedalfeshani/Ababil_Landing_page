"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start the zoom animation after a brief moment
    const animateTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);

    // Hide splash after animation completes
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(animateTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {children}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div
            className={`transition-all duration-[1400ms] ease-out ${
              isAnimating ? "scale-[15] opacity-0" : "scale-100 opacity-100"
            }`}>
            <Image
              src="/iconwithoutbg.png"
              alt="Ababil Studio"
              width={100}
              height={100}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}

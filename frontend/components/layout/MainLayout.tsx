"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "../common/Loading";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    // Show loading screen on route change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Brief delay for a premium feel

    return () => clearTimeout(timer);
  }, [pathname]);

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {isLoading && <Loading />}
      <Header />
      {children}
      <Footer />
    </>
  );
}

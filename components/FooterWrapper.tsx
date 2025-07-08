//using this as we don't have to make layout to client. as it's server by default and for the best
// app/components/FooterWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer"; // Your actual footer component

export default function FooterWrapper() {
  const pathname = usePathname();
  
  // List of paths where footer should hide
  const hideFooterPaths = ["/"];
  const hideFooter = hideFooterPaths.includes(pathname || "");

  return !hideFooter ? <Footer /> : null;
}
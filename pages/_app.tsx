import { AppProvider } from "@/components/providers/AppContext";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}
export default MyApp;

import Header from "@/components/Header/Header";
import { AppProvider } from "@/components/providers/AppContext";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("Title");

  const handleSearch = (term: string, category: string) => {
    console.log("Handle search in MainRoot:", term, category);
    setSearchTerm(term);
    setSearchCategory(category);
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />
      <AppProvider>
        <Header onSearch={handleSearch} />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}
export default MyApp;

import React from "react";
//components
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <section className="h-screen text-center mt-10 mb-4 text-primary flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </section>
  );
};

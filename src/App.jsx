import React from "react";
//components
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <section className="text-center  text-primary flex flex-col min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </section>
  );
};

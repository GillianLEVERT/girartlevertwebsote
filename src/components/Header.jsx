import React from 'react';
import imgHero from "../assets/imghero.jpg";
import imgBg from "../assets/bg.png"

export const Header = () => {
  return (
    <section className="">
      <div className="hero h-[600px]">
        <div className="hero-content flex-col lg:flex-row rounded-lg bg-hero">
     <img src={imgHero} alt="imgHero" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Girart LEVERT</h1>
            <p className="py-6 font-semibold">
            Conseils en systèmes et logiciel informatiques et comptabilité pour les administrateurs de biens
            </p>
         
          </div>
        </div>
      </div>
    </section>
  );
};

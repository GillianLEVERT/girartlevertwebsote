import React from 'react';
//import '../../index.css'
//import Cookies from 'js-cookie';

export const Home = () => {
  return (
    <div className="text-center mx-auto">
      {/* exemple de tailwind, retrouver la doc sur  https://tailwindcss.com/docs/configuration  */}
      <h1 className="text-4xl mt-2">Boiler plate Tailwind</h1>
      <h2 className="underline p-2">Avec cookies & Routing</h2>
      <p className="md:my-10 p-20 h-[4] bg-red-300">
        N'oubliez pas de l'adapter, Les Cookies sont préinstallés mais pas
        configuré, enlever la ligne de commentaire sur le fichier Home et/ou
        l'importer dans vos autres composants
      </p>
      <button className='ButtonSubmit  h-[400px] md:h-[100px]'>
        SUBMIT
      </button>
    </div>
  );
};
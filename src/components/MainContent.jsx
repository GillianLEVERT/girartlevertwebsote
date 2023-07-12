import React from "react";

export const MainContent = () => {
  return (
    <section className="flex flex-col h-screen items-center justify-center">


      <div className="stats shadow stats-vertical md:stats-horizontal my-4">
        <div className="stat place-items-center">
          <div className="stat-title">Interventions</div>
          <div className="stat-value">31K</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Expérience en entreprise</div>
          <div className="stat-value text-primary">plus de 30ans</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Clients satisfaits</div>
          <div className="stat-value">999+</div>
        </div>
      </div>
    </section>
  );
};

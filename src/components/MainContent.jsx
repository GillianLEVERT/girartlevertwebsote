export const MainContent = () => {
  return (
    <section className="flex flex-col items-center justify-center flex-grow">
      <div className="stats shadow stats-vertical md:stats-horizontal my-4">
        <div className="stat place-items-center">
          <div className="stat-title  text-primary text-xl">Interventions</div>
          <div className="stat-value">31K</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title text-primary text-xl">Expérience en entreprise</div>
          <div className="stat-value">+  30ans</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title  text-primary text-xl">Clients satisfaits</div>
          <div className="stat-value">999+</div>
        </div>
      </div>
    </section>
  );
};

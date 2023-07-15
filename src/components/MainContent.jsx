export const MainContent = () => {
  return (
    <section className="flex flex-col items-center justify-center flex-grow opacity-80 ">
      <div className="stats stats-vertical md:stats-horizontal my-4 shadow-md shadow-red-900 bg-gradient-to-r from-[#A6A6A6] via-gray-200 to-white">
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

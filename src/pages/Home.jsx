import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      {/* SECCIÓN 1 — Hero */}
      <section className="section section--hero">
        <div className="hero__text">
          <h2 className="hero__title">
            Cultura filipina
            <br />
            desde nuestra mirada
          </h2>
          <p className="hero__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div className="hero__image-placeholder" />
      </section>

      {/* SECCIÓN 2 — Qué es Espai Kapwa */}
      <section className="section section--about">
        <div className="about__content">
          <h2 className="about__title">¿Qué es Espai Kapwa?</h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
      </section>

      {/* SECCIÓN 3 — Sobre nosotros */}
      <section className="section section--team">
        <h2 className="team__title">Sobre nosotros</h2>
        <div className="team__cards">
          <div className="team__card">
            <div className="team__card-image" />
            <p className="team__card-name">Nombre</p>
            <p className="team__card-role">Rol</p>
          </div>
          <div className="team__card">
            <div className="team__card-image" />
            <p className="team__card-name">Nombre</p>
            <p className="team__card-role">Rol</p>
          </div>
          <div className="team__card">
            <div className="team__card-image" />
            <p className="team__card-name">Nombre</p>
            <p className="team__card-role">Rol</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

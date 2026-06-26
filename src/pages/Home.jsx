import { useState } from "react";
import logo from "../assets/logo_EK25_png-05.png";
import "./Home.css";

// 1. Array con 8 miembros - cada objeto tiene un id, name y role
const teamMembers = [
  { id: 1, name: "Nombre 1", role: "Rol 1" },
  { id: 2, name: "Nombre 2", role: "Rol 2" },
  { id: 3, name: "Nombre 3", role: "Rol 3" },
  { id: 4, name: "Nombre 4", role: "Rol 4" },
  { id: 5, name: "Nombre 5", role: "Rol 5" },
  { id: 6, name: "Nombre 6", role: "Rol 6" },
  { id: 7, name: "Nombre 7", role: "Rol 7" },
  { id: 8, name: "Nombre 8", role: "Rol 8" },
];

// 2. Divide el array en 3 grupos: [3, 3, 2]
// slice(inicio, fin) - fin incluído
const groups = [
  teamMembers.slice(0, 3), // grupo 0: miembros 1, 2, 3
  teamMembers.slice(3, 6), // grupo 1: miembros 4, 5, 6
  teamMembers.slice(6, 8), // grupo 2: miembros 7, 8
];
const Home = () => {
  // 3. useState guarda qué grupo estamos viendo ahora (empieza en 0)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  // 4. Resta 1 pero nunca baja de 0 (primer grupo)
  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // 5. Suma pero nunca sube de groups.length -1 (último grupo)
  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => Math.min(prev + 1, groups.length - 1));
  };

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
        <img src={logo} alt="Espai Kapwa logo" className="hero__image-placeholder" />
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

        <div className="carousel">
          {/* Botón anterior — desactivado si estamos en el primer grupo */}
          <button className="carousel__btn carousel__btn--prev" onClick={handlePrev} disabled={currentIndex === 0}>
            ←
          </button>

          {/* 6. Renderiza solo las cards del grupo actual
              groups[currentIndex] es el array del grupo visible
              .map() recorre cada miembro y devuelve una card */}
          <div key={currentIndex} className={`carousel__track carousel__track--${direction}`}>
            {groups[currentIndex].map((member) => (
              <div key={member.id} className="team__card">
                <div className="team__card-image" />
                <p className="team__card-name">{member.name}</p>
                <p className="team__card-role">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Botón siguiente — desactivado si estamos en el último grupo */}
          <button
            className="carousel__btn carousel__btn--next"
            onClick={handleNext}
            disabled={currentIndex === groups.length - 1}
          >
            →
          </button>
        </div>

        {/* 7. Los dots — uno por grupo
            .map() sobre groups genera un dot por cada grupo
            El dot activo tiene la clase carousel__dot--active */}
        <div className="carousel__dots">
          {groups.map((_, index) => (
            <span
              key={index}
              className={`carousel__dot ${index === currentIndex ? "carousel__dot--active" : ""}`}
              onClick={() => setCurrentIndex(index)} // click en dot va directo a ese grupo
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;

import React from 'react';
import '../css/About.css';
import ContactTeamImage from '../assets/grupo.jpg'

export function About() {
  const handleShowAlert = () => {
    Swal.fire({
        title: "Información del Grupo",
        html: `
            <div class="contact-modal-content">
                <img src="${ContactTeamImage}" alt="Equipo de Trabajo" class="contact-team-image" />
                <div class="contact-info">
                    <strong>Grupo de Trabajo:</strong> <br>
                    - Jorge Andrés Herrera Monsalve <a href="mailto:jorgherrera@utb.edu.co" target="_blank" rel="noopener noreferrer">jorgherrera@utb.edu.co</a> <br>
                    - María Alejandra Flórez Grau <a href="mailto:maflorez@utb.edu.co" target="_blank" rel="noopener noreferrer">maflorez@utb.edu.co</a> <br>
                    - Juan Camilo Barboza Martinez <a href="mailto:jubarboza@utb.edu.co" target="_blank" rel="noopener noreferrer">jubarboza@utb.edu.co</a> <br>
                    - Jorge Florez - <a href="mailto:jubarboza@utb.edu.co" target="_blank" rel="noopener noreferrer">jorflorez@utb.edu.co</a><br>
                </div>
            </div>
        `,
        icon: "info",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#28a745",
        width: '600px',
    });
  };

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <h2 className="about-title">Acerca de Nosotros</h2>
        <p className="about-description">
          Somos una startup comprometida con la innovación sostenible. Nuestro objetivo
          es transformar la manera en que se transportan y almacenan productos, ofreciendo
          soluciones ecológicas y eficientes. Creemos en un futuro más verde, donde la tecnología
          y la sostenibilidad trabajen de la mano para crear un impacto positivo en el mundo.
        </p>
        <button className="about-button" onClick={handleShowAlert}>
          Conoce a Nuestro Equipo
        </button>
      </div>
    </div>
  );
}
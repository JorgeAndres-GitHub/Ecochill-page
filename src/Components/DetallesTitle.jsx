import { useEffect, useState } from 'react';
import '../css/DetallesTitle.css';

export function DetallesTitle() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.intro-section');
            if (element) {
                const position = element.getBoundingClientRect();
                
                // Cuando el elemento esté a 100px de entrar en la ventana
                if (position.top - window.innerHeight <= -100) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Verifica la posición inicial
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`intro-section ${isVisible ? 'visible' : ''}`}>
            <div className="intro-content">
                <h1 className="intro-title">Soluciones de Embalaje Profesional</h1>
                <div className="intro-description">
                    <p>Descubre nuestra línea completa de cajas y embalajes diseñados para 
                    garantizar la máxima protección y eficiencia en el transporte de tus productos.</p>
                </div>
                <div className="intro-features">
                    <div className="feature">
                        <span className="feature-number">+</span>
                        <span className="feature-text">Años de Experiencia</span>
                    </div>
                    <div className="feature">
                        <span className="feature-number">100%</span>
                        <span className="feature-text">Satisfacción Garantizada</span>
                    </div>
                    <div className="feature">
                        <span className="feature-number">24/7</span>
                        <span className="feature-text">Soporte Técnico</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
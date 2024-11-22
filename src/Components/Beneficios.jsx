import { Link } from 'react-router-dom';
import '../css/Beneficios.css';

export function Beneficios(){
    return(
        <section id="benefits" className="section">
            <h2>Beneficios de nuestras Cajas</h2>
            <div className="benefit-cards">
                <div className="card">
                    <h3>Protección de alimentos</h3>
                    <p>Las cajas están diseñadas para evitar daños durante el transporte, manteniendo los alimentos frescos.</p>
                </div>
                <div className="card">
                    <h3>Reducción de desperdicio</h3>
                    <p>Al proteger los productos, ayudamos a reducir el desperdicio y las pérdidas económicas para los productores.</p>
                </div>
                <div className="card">
                    <h3>Material duradero</h3>
                    <p>Nuestras cajas están hechas de materiales de alta calidad, lo que asegura una larga vida útil.</p>
                </div>
            </div>
            <div className="button-container">
                <Link to='/productos'>
                    <button className="productos-button">
                        Ver Nuestros Productos
                    </button>
                </Link>
            </div>
        </section>
    )
}
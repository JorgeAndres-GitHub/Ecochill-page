import '../css/Especificaciones.css';

export function Especificaciones() {
    return (
        <>
        <div id="detalles" className="service-guarantee">
            <div className="content-wrapper">
                <div className="specifications">
                    <h2>Garantías del Producto</h2>
                    <ul>
                        <li>Garantía inicial de fábrica contra defectos de fabricación.</li>
                        <li>Opción de adquirir garantía extendida contra daños durante el transporte.</li>
                        <li>Soporte al cliente disponible 24/7.</li>
                        <li>Cuotas de reparacion en caso de no optar por alguna garantia</li>
                    </ul>
                </div>
                <div className="box-features">
                    <h2>Características de las Cajas</h2>
                    <ul>
                        <li>Material de laminas de pvc, resistente y ecológico.</li>
                        <li>Diseño modular para fácil apilamiento.</li>
                        <li>Reutilizables y reciclables.</li>
                        <li>Aislantes térmicos para productos perecederos.</li>
                        <li>Resistentes al agua y a impactos.</li>
                    </ul>
                </div>
            </div>
            <div className="image-background"></div>
        </div>
        </>
    );
}
import React from 'react';
import '../css/Productos.css';
import { Footer } from './Footer';
import { Header2 } from './Header2';
import box1 from '../assets/box1.jpg'
import garantia from '../assets/garantia.jpg'
import reparacion from '../assets/reparacion.png'

export function Productos() {
  const productos = [
    {
      id: 1,
      nombre: "Caja EcoChill",
      descripcion: "Caja ideal para transporte de frutas y verduras pequeñas.",
      precio: 1500000,
      imagen: box1,
    },
    {
      id: 2,
      nombre: "Garantia adicional",
      descripcion: "Garantia extendida para cobertura contra cualquier tipo de daño por 1 año.",
      precio: 700000,
      imagen: garantia,
    },
    {
      id: 3,
      nombre: "Cuota de reparación",
      descripcion: "Reparación de piezas dañadas, reemplazo de componentes o ajustes en la estructura de la caja.",
      precio: 200000,
      imagen: reparacion,
    }
  ];

  const handleComprar = async (producto) => {
    let mensaje = "";
    
    // Personalizar el mensaje según el ID del producto
    if (producto.id === 1) {
      mensaje = `
        <p>Este producto incluye garantía inicial por 6 meses.</p>
        <input type="email" id="swal-input-email" class="swal2-input" placeholder="Correo electrónico" />
      `;
    } else if (producto.id === 2) {
      mensaje = `
        <p>Esta garantía cubre cualquier tipo de daño por un año.</p>
        <input type="email" id="swal-input-email" class="swal2-input" placeholder="Correo electrónico" />
      `;
    } else if (producto.id === 3) {
      mensaje = `
        <p>Esta cuota incluye reparación de piezas dañadas, reemplazo o ajuste de componentes.</p>
        <input type="email" id="swal-input-email" class="swal2-input" placeholder="Correo electrónico" />
      `;
    }
  
    // Mostrar SweetAlert con el mensaje personalizado
    const { value: email } = await Swal.fire({
      title: `Comprar ${producto.nombre}`,
      html: mensaje,
      focusConfirm: false,
      preConfirm: () => {
        const email = document.getElementById("swal-input-email").value;
        if (!email) {
          Swal.showValidationMessage("Por favor, ingresa tu correo electrónico.");
          return null;
        }
        return email;
      },
    });
  
    // Mostrar mensaje final tras ingresar el correo
    if (email) {
      await Swal.fire(
        "Solicitud realizada",
        `Gracias por tu interés, ${email}. Nos comunicaremos contigo pronto.`,
        "success"
      );
    }
  };

  return (
    <div className="productos-page-container">
      <Header2 />
      <div className="animated-background">
        <div className="moving-shape shape1"></div>
        <div className="moving-shape shape2"></div>
        <div className="moving-shape shape3"></div>
      </div>
      <div className="productos-content">
        <h1>Nuestros Productos</h1>
        <div className="productos-grid-full">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card-full">
              <img src={producto.imagen} alt={producto.nombre} />
              <h2>{producto.nombre}</h2>
              <p>{producto.descripcion}</p>
              <div className="producto-footer">
                <span className="producto-precio">
                  ${producto.precio.toFixed(2)}
                </span>
                <button
                  className="producto-boton"
                  onClick={() => handleComprar(producto)}
                >
                  Realizar pedido
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
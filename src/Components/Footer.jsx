import '../css/Footer.css';

export function Footer() {
    const handleTermsClick = async () => {
      const { value: accept } = await Swal.fire({
        title: "Términos y Condiciones",
        html: `
          <p><strong>1. Aceptación de los términos</strong></p>
          <p>Al acceder y usar nuestros servicios, usted acepta cumplir con los siguientes términos...</p>
          <p><strong>2. Uso del servicio</strong></p>
          <p>Usted se compromete a utilizar el servicio de acuerdo con las políticas y normativas establecidas...</p>
          <p><strong>3. Propiedad intelectual</strong></p>
          <p>El contenido del sitio, incluyendo pero no limitado a texto, gráficos, y logotipos, está protegido por derechos de autor...</p>
          <p><strong>4. Modificación de términos</strong></p>
          <p>Nos reservamos el derecho de modificar estos términos en cualquier momento...</p>
          <br />
          <p><strong>Por favor, lea y acepte los términos antes de continuar.</strong></p>
        `,
        input: "checkbox",
        inputValue: 1,
        inputPlaceholder: `Acepto los términos y condiciones`,
        confirmButtonText: `Continuar&nbsp;<i class="fa fa-arrow-right"></i>`,
        inputValidator: (result) => {
          return !result && "Debe aceptar los Términos y Condiciones";
        }
      });
      
      if (accept) {
        Swal.fire("¡Has aceptado los Términos y Condiciones!");
      }
    };
  
    return (
      <>
        <footer className="footer">
          <p>© 2024 ECOCHILL. Todos los derechos reservados.</p>
          <p>
            <a href="#privacy">Política de Privacidad</a> | 
            <a href="#terms" onClick={handleTermsClick}> Términos de Servicio</a>
          </p>
        </footer>
      </>
    );
  }
const footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_datos">
          <h5>Horarios de atención</h5>
          <h6>Lun a Vie: 8am - 8pm</h6>
        </div>
        <div className="correo-footer">
          <h5>E-mail</h5>
          <h6>
            <a href="mailto:jesus_chiroque@hotmail.com?Subject=Solicito%20cotizacion%20del%producto">
              info@ramcode.com.pe
            </a>
          </h6>
        </div>
        <div className="datos_icon">
          <p>Redes</p>
          <div className="icons">
            <img
              src="./img/logo/whatsapp_icon-icons.com_53606.png"
              alt="icon Whatsapp"
            />
            <img
              src="./img/logo/facebook_icon-icons.com_53612.png"
              alt="icon Facebook"
            />
            <img
              src="./img/logo/Instagram_icon-icons.com_66804.png"
              alt="icon instagram"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;

import login from "../../css/login.css";

const Login = () => {
  return (
    <div className="body-login">
      <div className="login-box">
        <h2>Inicios de sesión</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Correo</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Contraseña</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Iniciar
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;

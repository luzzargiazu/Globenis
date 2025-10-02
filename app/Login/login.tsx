import React from "react";
import "./login.css"; // tu css externo

const LoginForm: React.FC = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Inicio de Sesión</h1> 
        <div className="input-box">
          <input type="text" placeholder="Usuario" required />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Contraseña" required />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Recuérdame 
          </label>
          <a href="#">Olvidaste tu contraseña?</a> 
        </div>
        <button type="submit" className="btn">
          Comenzar
        </button>
        <div className="register-link">
          <p>
            No tienes una cuenta? <a href="#">Regístrate</a> 
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
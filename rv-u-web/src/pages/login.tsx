import "../styles/login.css";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="login-back-home">
        <NavLink to="/">
          <button>
            <i className="fa-solid fa-arrow-left"></i>
            Quay lại
          </button>
        </NavLink>
      </div>
      <div className="login-container">
        <div className="logo">
          <div className="logo-icon"></div>
          <h1>Đăng Nhập</h1>
          <p className="subtitle">Chào mừng bạn trở lại!</p>
        </div>

        <form id="loginForm">
          <div className="form-group">
            <label htmlFor="email">Tên đăng nhập</label>
            <input
              type="text"
              id="tendangnhap"
              placeholder="Nhập tên đăng nhập của bạn"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <div className="forgot-password">
            <a href="#">Quên mật khẩu?</a>
          </div>

          <button type="submit" className="login-btn">
            Đăng Nhập
          </button>
        </form>

        <div className="divider">
          <span>hoặc</span>
        </div>

        <div className="signup-link">
          Chưa có tài khoản? <NavLink to="/sign-up">Đăng ký ngay</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;

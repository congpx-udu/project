import "../styles/signup.css";
import User from "../assets/logo/user.png";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className="signup-page-wrapper">
      <div className="signup-floating-shapes">
        <div className="signup-shape"></div>
        <div className="signup-shape"></div>
        <div className="signup-shape"></div>
      </div>
      <div className="singup-back-home">
        <NavLink to="/">
          <button>
            <i className="fa-solid fa-arrow-left"></i>
            Quay lại
          </button>
        </NavLink>
      </div>
      <div className="signup-container">
        <div className="signup-logo">
          <div className="signup-logo-icon">
            <img src={User} alt="" />
          </div>
          <h1>Đăng Ký</h1>
          <p className="signup-subtitle">Tạo tài khoản mới của bạn</p>
        </div>
        <form id="signupForm">
          <div className="signup-form-row">
            <div className="signup-form-group">
              <label htmlFor="firstName">Họ</label>
              <input
                type="text"
                id="firstName"
                placeholder="Nhập họ"
                required
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="lastName">Tên</label>
              <input
                type="text"
                id="lastName"
                placeholder="Nhập tên"
                required
              />
            </div>
          </div>

          <div className="signup-form-group signup-full-width">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Nhập địa chỉ email"
              required
            />
          </div>

          <div className="signup-form-group signup-full-width">
            <label htmlFor="phone">Số điện thoại</label>
            <input
              type="tel"
              id="phone"
              placeholder="Nhập số điện thoại"
              required
            />
          </div>

          <div className="signup-form-group signup-full-width">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              placeholder="Tạo mật khẩu mạnh"
              required
            />
            <div className="signup-password-strength">
              <div className="signup-strength-text">
                Độ mạnh mật khẩu: <span>Chưa nhập</span>
              </div>
              <div className="signup-strength-bar">
                <div className="signup-strength-fill"></div>
              </div>
            </div>
          </div>

          <div className="signup-form-group signup-full-width">
            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              required
            />
          </div>

          <div className="signup-form-group signup-full-width">
            <label htmlFor="birthDate">Ngày sinh</label>
            <input type="date" id="birthDate" required />
          </div>

          <div className="signup-form-group signup-full-width">
            <label htmlFor="gender">Giới tính</label>
            <select id="gender" required>
              <option value="">Chọn giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>

          <div className="signup-checkbox-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              Tôi đồng ý với <a href="#">Điều khoản sử dụng</a> và{" "}
              <a href="#">Chính sách bảo mật</a>
            </label>
          </div>
          <button type="submit" className="signup-btn">
            Tạo Tài Khoản
          </button>
        </form>

        <div className="signup-divider">
          <span>hoặc</span>
        </div>

        <div className="signup-login-link">
          Đã có tài khoản? <NavLink to="/login">Đăng nhập ngay</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Signup;

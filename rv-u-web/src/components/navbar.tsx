import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/logo/logo.png";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
        <NavLink to="/">
          <h1>Edunanra</h1>
        </NavLink>
      </div>

      <div className="navbar-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`navbar-menu ${open ? "active" : ""}`}>
        <NavLink to="/" className="nav-link">
          Trang chủ
        </NavLink>
        <NavLink to="/tim-truong" className="nav-link">
          Tìm trường
        </NavLink>
        <NavLink to="/viet-danh-gia" className="nav-link">
          Viết đánh giá
        </NavLink>
        <NavLink to="/so-sanh" className="nav-link">
          So sánh
        </NavLink>
        <NavLink to="/hoi-dap" className="nav-link">
          Hỏi đáp
        </NavLink>
        <NavLink to="/dinh-huong" className="nav-link">
          Định hướng
        </NavLink>
        <NavLink to="/ve-chung-toi" className="nav-link">
          Về chúng tôi
        </NavLink>

        <div className="navbar-btn">
          <NavLink to="/login">
            <button className="navbar-login">Đăng nhập</button>
          </NavLink>
          <NavLink to="/sign-up">
            <button className="navbar-register">Đăng ký</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

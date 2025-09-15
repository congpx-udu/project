import "../styles/footer.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-title">
          <div className="footer-logo">
            <img src={Logo} alt="" />
            <h1>Edunanra</h1>
          </div>
          <p>Nền tảng tư vấn tuyển sinh đại học hàng đầu Việt Nam</p>
        </div>
        <div className="sub-footer">
          <div className="footer-items">
            <h4>Tính năng</h4>
            <NavLink to="/tim-truong" className="nav-link">
              Tìm trường
            </NavLink>
            <NavLink to="/so-sanh" className="nav-link">
              So sánh
            </NavLink>
            <NavLink to="/danh-gia" className="nav-link">
              Đánh giá
            </NavLink>
            <NavLink to="/hoi-dap" className="nav-link">
              Hỏi đáp
            </NavLink>
            <NavLink to="/dinh-huong" className="nav-link">
              Định hướng
            </NavLink>
          </div>
          <div className="footer-items">
            <h4>Hỗ trợ</h4>
            <NavLink to="/cau-hoi-thuong-gap" className="nav-link">
              Câu hỏi thường gặp
            </NavLink>
            <NavLink to="/lien-he" className="nav-link">
              Liên hệ
            </NavLink>
            <NavLink to="/huong-dan" className="nav-link">
              Hướng dẫn
            </NavLink>
          </div>
          <div className="footer-items">
            <h4>Liên hệ</h4>
            <p>Email:</p>
            <p>Hotline</p>
            <p>Địa chỉ:</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025. Bản quyền thuộc về IU CLUB - PTIT. Tất cả quyền được bảo lưu
        </p>
      </div>
    </div>
  );
}

export default Footer;

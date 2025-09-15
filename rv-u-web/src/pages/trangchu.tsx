import { useEffect } from "react";
import "../styles/trangchu.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import User from "../assets/icon/user.png";
import Book from "../assets/icon/book.png";
import Award from "../assets/icon/award.png";

function TrangChu() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      <NavBar />

      <div className="home-content reveal">
        <h1>
          Tìm kiếm trường đại học <span>phù hợp</span> với bạn
        </h1>
        <p>
          Khám phá hàng trăm trường đại học, đọc đánh giá từ sinh viên thực tế,
          và nhận tư vấn định hướng nghề nghiệp miễn phí
        </p>
        <form className="home-search" onSubmit={(e) => e.preventDefault()}>
          <div className="search-group">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              name="search"
              placeholder="Tìm trường theo tên (VD: Bách Khoa, Kinh tế,...)"
              required
            />
          </div>
          <div className="search-group-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
            <button type="submit" name="search">
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>

      <div className="home-u-card reveal">
        <h1>Trường đại học nổi bật</h1>
        <div className="home-sub-u-card"></div>
      </div>

      <div className="home-benefits reveal">
        <h2>Tại sao chọn</h2>
        <div className="home-subbenefits">
          <div className="home-benefits-items">
            <img src={User} alt="" />
            <h3>Đánh giá thực tế</h3>
            <p>Hàng nghìn đánh giá từ sinh viên và cựu sinh viên thực tế</p>
          </div>
          <div className="home-benefits-items">
            <img src={Book} alt="" />
            <h3>Thông tin đầy đủ</h3>
            <p>
              Cơ sở dữ liệu toàn diện về trường, ngành, điểm chuẩn và học phí
            </p>
          </div>
          <div className="home-benefits-items">
            <img src={Award} alt="" />
            <h3>Tư vấn miễn phí</h3>
            <p>Bài test định hướng nghề nghiệp và tư vấn cá nhân hóa</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TrangChu;

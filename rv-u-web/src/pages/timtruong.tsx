import "../styles/timtruong.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

function TimTruong() {
  return (
    <div className="tim-truong">
      <NavBar />
      <div className="tim-truong-container">
        <div className="tim-truong-search">
          <input type="text" placeholder="Nhập trường đại học bạn muốn tìm" />
          <button>Tìm kiếm</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TimTruong;

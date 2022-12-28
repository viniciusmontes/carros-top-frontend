import MainImage from "assets/images/main-image.png";
import Navbar from "components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-image-container">
          <img src={MainImage} alt="Nome do produto" />
          </div>

          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

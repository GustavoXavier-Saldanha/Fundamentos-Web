import "./styles.css";
import img3 from "../../assets/images/adidasNmd.jpg";
import img4 from "../../assets/images/adidasNmd.jpg";
import img2 from "../../assets/images/adidasNmd.jpg";
import img5 from "../../assets/images/adidasNmd.jpg";
import img6 from "../../assets/images/adidasNmd.jpg";
import img7 from "../../assets/images/adidasNmd.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="home">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img7} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src={img4}
              alt=""
            />

            <h2>Gazzelle Sport Pack</h2>
            <p>
              The Adidas Gazelle Sport Pack felt very comfortable as per most
              wearers.
            </p>
            <Link to="/produtos" className="btn btn-dark mt-3 block">
              {" "}
              Ver mais{" "}
            </Link>
          </div>
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src={img5}
              alt=""
            />
            <h2>Nmd R1 Cinza</h2>
            <p>
              Cápsulas especiais que promovem alto retorno de energia e um
              amortecimento extremamente macio.
            </p>
            <Link to="/produtos" className="btn btn-dark mt-3 block">
              {" "}
              Ver mais
            </Link>
          </div>
          <div className="col-lg-4">
            <img
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src={img6}
              alt=""
            />

            <h2>Air Jordan 1 Mid</h2>
            <p>
              Essa nova abordagem do AJ1 apresenta uma base de couro branco com
              camadas pretas clean.
            </p>
            <Link to="/produtos" className="btn btn-dark mt-3 block">
              {" "}
              Ver mais{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

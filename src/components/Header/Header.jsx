import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "../../assets/Logo.svg";
import Hero from "../../assets/Hero.png";
import "./Header.scss";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="contianer">
      <div className="wrapper__header">
        <div className="box">
          <img className="logo" src={Logo} alt="logo" width={128} />
          <input
            className="search"
            type="search"
            placeholder="Mahsulotlarni izlash"
          />
          <div className="wrapper__navs">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <button className="categoriya__btn">Kategoriya</button>
                </li>
                <li className="nav__item">Kirish</li>
                <li className="nav__item">Qo’shish</li>
                <li className="nav__item">Sevimlilar</li>
              </ul>
            </nav>
          </div>
          <select className="lang">
            <option value="ru">ruscha</option>
            <option value="kirilcha">kirilcha</option>
            <option value="O’zbekcha">O’zbekcha</option>
          </select>
        </div>
      </div>
        <div className="wrapper__silder">

      <Slider {...settings}>
        <div>
          <img
            className="slider-img" // Corrected from "silder-img"
            src={Hero}
            alt=""
            width={1248}
            height={450}
          />
        </div>
        <div>
          <img
            className="slider-img" // Corrected from "silder-img"
            src={Hero}
            alt=""
            width={1248}
            height={450}
          />
        </div>
        <div>
          <img
            className="slider-img" // Corrected from "silder-img"
            src={Hero}
            alt=""
            width={1248}
            height={450}
          />
        </div>
      </Slider>
        </div>
    </div>
  );
};

export default Header;

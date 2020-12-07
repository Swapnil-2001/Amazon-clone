import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Items from '../Product/ProductMain/Items';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from '../../images/Banner1.jpeg';
import Banner2 from '../../images/Banner2.jpg';
import Banner3 from '../../images/Banner3.jpg';
import Banner4 from '../../images/Banner4.jpg';
import { useStateValue } from '../../StateProvider';

function Home() {
  const [{ search }] = useStateValue();
  const settings = {
      infinite: true,
      speed: 500,
      lazyLoad: 'progressive',
      slidesToShow: 1,
      adaptiveHeight: true,
      slidesToScroll: 1,
      autoplay: true
    };
  const items = [
    {
      id: "0001",
      title: "Apple MacBook Air Dual Core-10th Gen i3-1.1GHz, 8GB, 256GB SSD,33.78 cm (13.3 inch) Retina Display",
      price: 92900,
      rating: 5,
      image: "https://static.bhphoto.com/images/images2500x2500/apple_mvh52ll_a_13_3_macbook_air_with_1584567307000_1553855.jpg",
      link: "https://www.apple.com/in/macbook-air/"
    },
    {
      id: "0002",
      title: "Apple Watch Series 5 (GPS, 40mm) - Silver Aluminium Case with White Sport Band",
      price: 40900,
      rating: 5,
      image: "https://images-na.ssl-images-amazon.com/images/I/71ZDwUZWvOL._SX342_.jpg",
      link: "https://www.apple.com/in/watch/"
    },
    {
      id: "0003",
      title: "David Beckham Respect Eau De Toilette 90ml",
      price: 900,
      rating: 4,
      image: "https://images-na.ssl-images-amazon.com/images/I/61DU85Ko1ML._SX355_.jpg",
      link: "https://www.beckham-fragrances.com/en/product/respect"
    },
    {
      id: "0004",
      title: "OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)",
      price: 37999,
      rating: 5,
      image: "https://cdn.movertix.com/media/catalog/product/cache/image/1200x/o/n/oneplus-7t-dual-sim-en-plata-de-128gb-y-8gb-ram.jpg",
      link: "https://www.oneplus.in/7t"
    },
    {
      id: "0005",
      title: "Cross Classic Century Ballpoint Pen Medalist Chrome with Gold Trim",
      price: 1999,
      rating: 4,
      image: "https://res.cloudinary.com/forallpromos/image/fetch/f_auto/https://www.4allpromos.com/sites/default/files/imagecache/720x720/images/products/10851/655-3302.jpg",
      link: "https://www.cross.com/cr_en_us/writing-instruments/by-collections/classic-century"
    },
    {
      id: "0006",
      title: "Tommy Hilfiger Brown Strap Men's Watch",
      price: 10999,
      rating: 5,
      image: "https://staticimg.titan.co.in/Helios/Catalog/TH1791400_1.jpg?pView=pdp",
      link: "https://global.tommy.com/"
    },
    {
      id: "0007",
      title: "Apple iPhone 11 Pro (64GB) - Space Grey",
      price: 96990,
      rating: 5,
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188",
      link: "https://www.apple.com/in/iphone-11-pro/"
    },
    {
      id: "0008",
      title: "Cristiano Ronaldo Legacy Eau De Toilette 50ml",
      price: 2999,
      rating: 4,
      image: "https://static.chemistwarehouse.com.au/ams/media/pi/84022/F2D_800.jpg",
      link: "https://cr7fragrances.store/"
    }
  ];
  const curr = items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <Header />
      <div className="home">
        <Slider {...settings}>
          <div>
            <img
              src={Banner1}
              alt="Jack Ryan"
              className="home__image"
            />
          </div>
          <div>
            <img
              src={Banner2}
              alt="Jack Ryan"
              className="home__image"
            />
          </div>
          <div>
            <img
              src={Banner3}
              alt="banner"
              className="blue__image"
            />
          </div>
          <div>
            <img
              src={Banner4}
              alt="banner"
              className="blue__image"
            />
          </div>
        </Slider>
        <div className="home__row">
          <Items items={curr} />
        </div>
      </div>
    </div>
  )
}

export default Home;

import React from "react";
import "./SingleProduct.css";
import ReactImageMagnify from "react-image-magnify";
import Header from "../../Header/Header";
import useWindowDimensions from "../../../utils/useWindowDimensions";

function SingleProduct(props) {
  const { width } = useWindowDimensions();
  if (!props.location.state)
    return (
      <div>
        <h1 className="wrongUrl__title">Oops! Wrong page?</h1>
        <p className="wrongUrl__text">
          Please make sure that the URL you have typed in is correct.
        </p>
      </div>
    );
  const { image, rating, title, price, link } = props.location.state;
  const imageProps = {
    smallImage: {
      alt: "Product",
      isFluidWidth: true,
      src: image,
    },
    largeImage: {
      src: image,
      width: 1800,
      height: 2000,
    },
    enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
  };
  const small = {
    smallImage: {
      alt: "Product",
      isFluidWidth: true,
      src: image,
    },
    largeImage: {
      src: image,
      width: 1800,
      height: 2000,
    },
    enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
    enlargedImagePosition: "over",
  };
  return (
    <>
      <Header />
      <div className="singleProduct">
        {width > 730 ? (
          <div className="singleProduct__image">
            <ReactImageMagnify {...imageProps} />
          </div>
        ) : (
          <div className="singleProduct__image">
            <ReactImageMagnify {...small} />
          </div>
        )}

        <div className="singleProduct__info">
          <p className="singleProduct__title">{title}</p>
          <p className="singleProduct__price">
            Price :<small className="symbol">₹</small>
            <strong className="price">{price}</strong>
          </p>
          <div className="singleProduct__rating">
            {Array(rating)
              .fill()
              .map(() => (
                <span class="fa fa-star checked"></span>
              ))}
            {Array(5 - rating)
              .fill()
              .map(() => (
                <span class="fa fa-star"></span>
              ))}
          </div>
          <div className="stock">(In Stock)</div>
          <div className="button__div">
            <button className="desc__button">
              <a className="anchor" href={link}>
                Product Description
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;

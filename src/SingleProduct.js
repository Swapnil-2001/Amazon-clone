import React from 'react';
import './SingleProduct.css';
import ReactImageMagnify from 'react-image-magnify';
import Header from './Header/Header';
import useWindowDimensions from './useWindowDimensions';

function SingleProduct(props) {
  const { width } = useWindowDimensions();
  const imageProps = {
    smallImage: {
      alt: 'Product',
      isFluidWidth: true,
      src: props.location.state.image
    },
    largeImage: {
      src: props.location.state.image,
      width: 1800,
      height: 2000
    },
    enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
  };
  const small = {
    smallImage: {
      alt: 'Product',
      isFluidWidth: true,
      src: props.location.state.image
    },
    largeImage: {
      src: props.location.state.image,
      width: 1800,
      height: 2000
    },
    enlargedImageContainerStyle: { background: '#fff', zIndex: 9 },
    enlargedImagePosition: 'over'
  };
  if (props.location.state) {
    return (
      <div>
        <Header />
        <div className="singleProduct">
          {width > 730 ?
            <div className="singleProduct__image">
              <ReactImageMagnify {...imageProps} />
            </div> :
            <div className="singleProduct__image">
              <ReactImageMagnify {...small} />
            </div>
          }

          <div className="singleProduct__info">
            <p className="singleProduct__title">{props.location.state.title}</p>
            <p className="singleProduct__price">
              Price :
              <small className="symbol">₹</small>
              <strong className="price">{props.location.state.price}</strong>
            </p>
            <div className="singleProduct__rating">
              {
                Array(props.location.state.rating)
                .fill()
                .map(() => <p>⭐</p>)
              }
            </div>
            <div className="stock">(In Stock)</div>
            <div className="button__div">
              <button className="desc__button">
                <a className="anchor" href={props.location.state.link}>Product Description</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h1 className="wrongUrl__title">Oops! Wrong page?</h1>
        <p className="wrongUrl__text">Please make sure that the URL you have typed in is correct.</p>
      </div>
    )
  }
}

export default SingleProduct;

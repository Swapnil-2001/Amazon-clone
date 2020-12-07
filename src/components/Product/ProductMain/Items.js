import React from 'react';
import Product from './Product';

function Items( {items} ) {
  return (
    items.map((item, index) =>
      <Product
        key={index}
        id={item.id}
        title={item.title}
        price={item.price}
        rating={item.rating}
        image={item.image}
        link={item.link}
      />
    )
  );
}

export default Items;
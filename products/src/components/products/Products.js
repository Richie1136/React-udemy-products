import React, { useContext } from 'react';
import ProductItem from '../productitem/ProductItem'
import { ProductsContext } from '../../context/products-context';

import './Products.css';

const Products = props => {
  const proudctList = useContext(ProductsContext).products
  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;

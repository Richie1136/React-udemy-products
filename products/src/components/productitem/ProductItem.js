import React from 'react';
import { useDispatch } from 'react-redux';

import Card from '../card/Card';
import './ProductItem.css';
import { toggleFav } from '../../store/actions/products';

const ProductItem = ({ isFav, title, description, id }) => {
  const dispatch = useDispatch();

  const toggleFavHandler = () => {
    dispatch(toggleFav(id));
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={isFav ? 'is-fav' : ''}>{title}</h2>
        <p>{description}</p>
        <button
          className={!isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;

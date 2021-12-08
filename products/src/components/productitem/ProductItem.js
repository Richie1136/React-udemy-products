import React from 'react';

import Card from '../card/Card';
import { useStore } from '../../hooks-store/store';
import './ProductItem.css';

const ProductItem = React.memo(({ isFav, title, description, id }) => {
  console.log("Rendering")
  const dispatch = useStore()[1]
  const toggleFavHandler = () => {
    dispatch('TOGGLE_FAV', id)
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
});

export default ProductItem;

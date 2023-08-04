import React, { useContext } from 'react';
import noMoule from '../assets/no-image.jpg';
import style from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';
import { PropsImage } from '../interface/interfaces';

export const ProductImg = ({ img, className, styles }: PropsImage) => {
  const { product } = useContext(ProductContext);

  let imgShow: string;

  if (img) {
    imgShow = img;
  } else if (product.img) {
    imgShow = product.img;
  } else {
    imgShow = noMoule;
  }

  return (
    <img
      className={`${style.productImg} ${className}`}
      style={styles}
      src={imgShow}
      alt="Coffe mug"
    />
  );
};

export default ProductImg;

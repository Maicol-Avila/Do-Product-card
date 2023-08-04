import React, { ProductContext } from './ProductCard';
import { useContext } from 'react';
import { PropsTitle } from '../interface/interfaces';
import style from '../styles/styles.module.css';

export const ProductTitle = ({ title, className }: PropsTitle) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={` ${style.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};

export default ProductTitle;

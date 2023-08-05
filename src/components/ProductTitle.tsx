import React , { useContext } from 'react';
import { PropsTitle } from '../interface/interfaces';


import style from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export const ProductTitle = ({ title, className }: PropsTitle) => {
  const { product } = useContext(ProductContext);

  return (
    <span 
    className={` ${style.productDescription} ${className}`}
    >
      {title ? title : product.title}
    </span>
  );
};

export default ProductTitle;

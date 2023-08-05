import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {

  test('Debe mopstar el componente del titulo perzonalizado', () => {
    const wrapper = renderer.create(
    
    <ProductTitle title="Custom product" className='cusmtom-class' />
    
    );
    expect(wrapper.toJSON()).toMatchSnapshot()
  });
  
    
    test('Debe mostrarse el componente con el nombre', () => {
      const wrapper = renderer.create(
        <ProductCard  product={product1}> 
          {
            () => (
              <ProductTitle/>
            )
          }
        </ProductCard>
        
      );
      expect(wrapper.toJSON()).toMatchSnapshot()
    })

});

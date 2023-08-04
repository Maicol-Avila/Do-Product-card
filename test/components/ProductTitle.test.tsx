import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components/ProductTitle';

describe('ProductTitle', () => {
  test('Debe mopstar el componente del titulo perzonalizado', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom product" />);

    console.log(wrapper.toJSON());
  });
});

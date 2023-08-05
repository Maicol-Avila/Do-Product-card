import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard, ProductImg } from '../../src/components'
import { product2 } from '../data/products'

describe('Pruebas de imagenes', () => {


    test('Debe mostar el componente del titulo perzonalizado', () => {

        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (

                        <ProductImg  />
                    )

                }

            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})

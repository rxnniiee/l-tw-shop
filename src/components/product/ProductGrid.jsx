import React from 'react'
import styles from './ProductGrid.module.css'
import { useSelector } from 'react-redux'
import Product from './Product'

const ProductGrid = props => {
  const products = useSelector(state => state.products.list)
  return (
    <div className={styles.grid}>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductGrid

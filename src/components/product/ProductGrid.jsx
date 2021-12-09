import React from 'react'
import styles from './ProductGrid.module.css'

const ProductGrid = props => {
  return <div className={styles.grid}>{props.children}</div>
}

export default ProductGrid

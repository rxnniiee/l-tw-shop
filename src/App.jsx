import React from 'react'
import Cart from './components/cart/Cart'
import ProductGrid from './components/product/ProductGrid'
import ProductCreationForm from './components/product/ProductCreationForm'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.app}>
      <ProductCreationForm />
      <Cart />
      <ProductGrid />
    </div>
  )
}

export default App

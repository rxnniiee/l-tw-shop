import React from 'react'
import styles from './Product.module.css'
import { useDispatch } from 'react-redux'
import { productsActions } from '../../app/features/productsSlice'
import { formatAsCurrency } from '../../utils/numbers'

const Product = ({ id, name, price, image }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <button
        className={styles.delete}
        onClick={() => dispatch(productsActions.remove(id))}
      >
        ✕
      </button>
      <img
        className={styles.image}
        src={image}
        alt={`Pilt tootest "${name}"`}
      />
      <div className={styles.description}>
        <p>{name}</p>
        <h4>{formatAsCurrency(price)}</h4>
        <button className={styles.button}>Lisa ostukorvi</button>
      </div>
    </div>
  )
}

export default Product

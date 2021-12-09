import React from 'react'
import styles from './ProductCreationForm.module.css'
import { useDispatch } from 'react-redux'
import { productsActions } from '../../app/features/productsSlice'

const ProductCreationForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(
      productsActions.add({
        name: event.target.name.value,
        price: event.target.price.value,
        image: event.target.image.value,
      })
    )
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Toote lisamise vorm</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="url">Pildi link</label>
          <input required type="url" name="image" id="image" />
        </div>
        <div>
          <label htmlFor="productName">Nimi</label>
          <input required type="text" name="productName" id="name" />
        </div>
        <div>
          <label htmlFor="price">Hind</label>
          <input
            required
            type="number"
            min="0"
            step=".01"
            name="price"
            id="price"
          />
        </div>
        <button type="submit">Lisa</button>
      </form>
    </div>
  )
}

export default ProductCreationForm

import React from 'react'
import styles from './ProductCreationForm.module.css'
import { useDispatch } from 'react-redux'
import { productsActions } from '../../app/features/productsSlice'
import Container from '../container/Container'

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
    // puhasta vormi väljad
    event.target.name.value = ''
    event.target.price.value = ''
    event.target.image.value = ''
  }

  return (
    <Container
      title="Toote lisamise vorm"
      maxWidth="400px"
      className={styles.grid}
    >
      <form onSubmit={handleSubmit} className={styles.form}>
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
    </Container>
  )
}

export default ProductCreationForm

import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../container/Container'

const Cart = () => {
  const cart = useSelector(state => state.cart.list)
  return (
    <Container style={{ gridArea: 'c' }}>
      <p>Tooteid ostukorvis: {cart.length}</p>
    </Container>
  )
}

export default Cart

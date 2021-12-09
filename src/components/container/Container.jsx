import React from 'react'
import styles from './Container.module.css'

const Container = props => {
  return (
    <div
      className={styles.main}
      style={{ maxWidth: props?.maxWidth || '100%' }}
    >
      {props.title && <h4 className={styles.title}>{props.title}</h4>}
      {props.children}
    </div>
  )
}

export default Container

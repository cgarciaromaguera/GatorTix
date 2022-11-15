import React from 'react'
import { useSelector } from 'react-redux'
import styles from './buy.module.scss'

const Buy = () => {
  const { me } = useSelector((state) => state.app)

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <p>{me?.fullName || 'User'}</p>
        Buy Ticket
      </div>
    </div>
  )
}

Buy.propTypes = {}
Buy.defaultProps = {}

export default Buy

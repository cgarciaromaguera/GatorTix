import React from 'react'
import { useSelector } from 'react-redux'
import styles from './sell.module.scss'

const Sell = () => {
  const { me } = useSelector((state) => state.app)

  return (
    <div className={styles.root} style={{height:'100vh'}}>
      <div className={styles.container}>
        <p>{me?.fullName || 'User'}</p>
        Sell Ticket
      </div>
    </div>
  )
}

Sell.propTypes = {}
Sell.defaultProps = {}

export default Sell

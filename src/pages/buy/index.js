import React from 'react'
import Button from 'components/Button'
import { useSelector } from 'react-redux'
import styles from './buy.module.scss'

const Buy = () => {
  const { me } = useSelector((state) => state.app)

  return (
    <div className={styles.root} style={{ height: '100vh' }}>
      <div className="ticket-form text-center container">
        <h1>UF Ticket Buyer</h1>
        <form>
          <fieldset>
            <p>Full Name</p>
            <input name="name" />

            <p>E-mail</p>
            <input name="game" />

            <p>Phone Number</p>
            <input name="phone number" />

            <p>Enter Ticket Price</p>
            <input name="ticket price" />

            <p>Upload Ticket</p>
            <input name="upload ticket" />
          </fieldset>
          <hr />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}

Buy.propTypes = {}
Buy.defaultProps = {}

export default Buy

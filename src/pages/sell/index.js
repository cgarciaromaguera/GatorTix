import React from 'react'
import Button from 'components/Button'
import { useSelector } from 'react-redux'
import styles from './sell.module.scss'

const Sell = () => {
  const { me } = useSelector((state) => state.app)

  return (
    <div className={styles.root} style={{ height: '100vh' }}>
      <div className="ticket-form text-center container">
        {/* Ticket selling header */}
        <h1>UF Ticket Seller</h1>
        <form>
          <fieldset>
            {/* Create form with name, email, number, price, and upload input */}
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
          {/* Reset form upon submission */}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default Sell

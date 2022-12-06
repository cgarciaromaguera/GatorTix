import React from 'react'
import Button from 'components/Button'
import styles from './buy.module.scss'

const Buy = () => (
  <div className={styles.root} style={{ height: '100vh' }}>
    <div className="ticket-form text-center container">
      {/* Ticket buyer header */}
      <h1>UF Ticket Buyer</h1>
      <form>
        <fieldset>
          {/* Create form with name, email, number, and price */}
          <p>Full Name</p>
          <input name="name" />

          <p>E-mail</p>
          <input name="game" />

          <p>Phone Number</p>
          <input name="phone number" />

          <p>Enter Ticket Price</p>
          <input name="ticket price" />
        </fieldset>
        <hr />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  </div>
)

Buy.propTypes = {}
Buy.defaultProps = {}

export default Buy

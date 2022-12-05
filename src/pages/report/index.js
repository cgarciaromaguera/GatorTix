import React from 'react'
import Button from 'components/Button'
import { useSelector } from 'react-redux'
import styles from './report.module.scss'


const Sell = () => {
  const { me } = useSelector((state) => state.app)

  return (
    // report form
    <div className={styles.root} style={{ height: '100vh' }}>
      <div className="ticket-form text-center container">
        <h1>UF Ticket Report Form</h1>
        <form>
          <fieldset>
            <p>Report the issue here:</p>
            <textarea name="report" />
          </fieldset>
          <hr />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default Sell

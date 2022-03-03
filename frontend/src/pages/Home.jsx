import { Link } from 'react-router-dom'

import { FaTicketAlt, FaQuestionCircle } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className='heading'>
        <h1>Issue ticket to get support from us</h1>

        <p>Please choose from an option below</p>
      </section>

      <Link to='/new-ticket' className='btn btn-reverse btn-block'>
        <FaQuestionCircle /> Create New Ticket
      </Link>

      <Link to='/tickets' className='btn btn-block'>
        <FaTicketAlt /> View My Tickets
      </Link>
    </>
  )
}

export default Home

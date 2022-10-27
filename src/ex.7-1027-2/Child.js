import PropTypes from 'prop-types'

function Child({ firstname, lastname }) {
  return (
    <>
      <h1>
        {firstname}, {lastname}
      </h1>
    </>
  )
}

Child.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
}

export default Child

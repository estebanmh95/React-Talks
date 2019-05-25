import React from 'react'

const Pagination = () => {
  return(
    <ul className="pagination pagination-lg pull-right">
    <li>
      <a href="/">«</a>
    </li>
    <li className="active">
      <a href="/">1</a>
    </li>
    <li>
      <a href="/">2</a>
    </li>
    <li>
      <a href="/">3</a>
    </li>
    <li>
      <a href="/">»</a>
    </li>
  </ul>
  )
}

export default Pagination

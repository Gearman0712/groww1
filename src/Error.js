import React from 'react'
import { Link } from 'react-router-dom';
function Error() {
    return (
        <div>
        <h1>404 - Not Found!</h1>
        <Link to="/all-banks">
          Go Home
        </Link>
      </div>
    )
}

export default Error;

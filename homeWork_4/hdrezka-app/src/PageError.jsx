import React from 'react'
import { Link } from 'react-router-dom'

function PageError() {
    return (
        <div className="page__content">
            <h1>Fuck you!!!</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default PageError

import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"

const index = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <h1>Hello from changes</h1>
          <Link to="/about">Go to page 2</Link>
        </div>
      </div>
    </div>
  )
}

export default index

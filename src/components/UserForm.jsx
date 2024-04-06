import React from 'react'

const UserForm = () => {
  return (
    <>
      <form className="container w-50 mt-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label ">
            Name
          </label>
          <input
            type="text"
            className="form-control w-50"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control w-50"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 ">
          <label className="form-check-label mb-2" htmlFor="exampleCheck1">
            Age
          </label>

          <input type="text" className="form-control w-50" id="exampleCheck1" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  )
}

export default UserForm

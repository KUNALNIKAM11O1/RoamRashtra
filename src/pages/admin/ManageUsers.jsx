import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ManageUsers = () => {

  const nav = useNavigate()
  const [data, setData] = useState([])

  const FetchInfo = async () => {
    try {
      const result = await axios.get('http://localhost:3000/register')
      setData(result.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {

   
    const user = JSON.parse(localStorage.getItem("user"))

    if (!user || user.role !== "admin") {
      nav('/')       
      return
    }

    
    FetchInfo()

  }, [nav])

  const deleteInfo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/register/${id}`)
      setData(data.filter(val => val.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container-fluid py-4 bg-light min-vh-100">
    <div className="container">

     
      <div className="mb-4">
        <h3 className="fw-bold text-primary"> ManageUsers</h3>
        <p className="text-muted mb-0">Manage registered users</p>
      </div>

     
      <div className="card shadow border-0 rounded-4">
        <div className="card-body p-0">

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-dark text-uppercase small">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Password</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-muted">
                      No users found
                    </td>
                  </tr>
                ) : (
                  data.map((val, index) => (
                    <tr key={val.id}>
                      <td className="fw-semibold">{index + 1}</td>
                      <td>{val.name}</td>
                      <td className="text-break">{val.email}</td>
                      <td>{val.number}</td>
                      <td className="text-muted small">{val.password}</td>
                      <td className="text-center">
                        <div className="d-flex justify-content-center gap-3">
                          <i
                            className="fa fa-trash text-danger"
                            role="button"
                            onClick={() =>
                              window.confirm("Are you sure?")
                                ? deleteInfo(val.id)
                                : null
                            }
                          ></i>

                          <NavLink to={`/edit/${val.id}`}>
                            <i className="fa fa-edit text-success"></i>
                          </NavLink>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>

        </div>
      </div>

    </div>
  </div>
  )
}

export default ManageUsers

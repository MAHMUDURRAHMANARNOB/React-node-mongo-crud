import React, { useState } from "react";
import { Link } from "react-router-dom";

function Users(){
    const [users, setUsers] = useState([{
        Name: "rakib", Email: "rakib.gmail.com", Age : "27", 
    }])
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success">Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                                return <tr>
                                    <td>
                                        {user.Name}
                                    </td>
                                    <td>
                                        {user.Email}
                                    </td>
                                    <td>
                                        {user.Age}
                                    </td>
                                    <td>
                                    <Link to="/update" className="btn btn-info mx-1">Edit</Link>
                                    <Link to="/update" className="btn btn-danger mx-1">Delete</Link>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;
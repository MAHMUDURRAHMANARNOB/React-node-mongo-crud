import React, {useState,useEffect} from "react";
import axios from "axios";
import { useParams, useNavigate  } from "react-router-dom";

function UpdateUser(){
    const {id} = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {
            setName(result.data.username)
            setEmail(result.data.usermail)
            setAge(result.data.age)
        })
        .catch(err=> console.log(err))
        
    },[])

    const Update = (e) => {
        e.preventDefault();
        axios
          .put("http://localhost:3001/updateUser/"+id, { name, email, age })
          .then((result) => {
            console.log("User Updated:", result.data);
            // Clear input fields after successful submission
            setName("");
            setEmail("");
            setAge("");
            alert("User updated successfully!");
    
            navigate("/");
          })
          .catch((err) => {
            console.error("Error creating user:", err);
            alert("Failed to create user. Please try again.");
          });
      };

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor=""> Name </label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                        value = {name}
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor=""> Email </label>
                        <input type="text" placeholder="Enter Email" className="form-control"
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor=""> Age </label>
                        <input type="text" placeholder="Enter Age" className="form-control"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
            
    )
}

export default UpdateUser;
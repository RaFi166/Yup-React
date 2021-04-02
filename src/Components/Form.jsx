import React from 'react';
import UserValidation from './UserValidation';


const Form =()=>{

   const submitHandler=(e)=>{
        e.preventDefault();
        const formData = {
            name : e.target[0].value,
            email : e.target[1].value,
            password : e.target[2].value
        }
         console.log(formData);
    }
    return(
        <div className="form-com">
            <form onSubmit={submitHandler} >
                <input type="text"  placeholder="Enter Your Name Here..." />
                <input type="email"  placeholder="email@email.com" />
                <input type="text" placeholder="Enter Your Password" />
                <button className="btn">SUBMIT</button>
            </form>
        </div>
    )
}
export default Form;
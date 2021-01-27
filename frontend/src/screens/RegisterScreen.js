import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/userActions";


function userRegisterScreen(props) {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const userRegister = useSelector(state => state.userRegister)
    const {loading, userInfo, error} = userRegister
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            
            props.history.push("/")
        }
        
        return () => {};
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(register(name, email, password))
    }

  return (
    <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </li>

                <li>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </li>

                <li>
                    <button type="submit" className="button button-primary">Signin</button>
                </li>

                <li>
                    New to amazone?
                </li>

                <li>
                    <Link to="/userRegister" className="button secondary text-center">Create your amazone account</Link>
                </li>
            </ul>
        </form>
    </div>
  );
}

export default userRegisterScreen;

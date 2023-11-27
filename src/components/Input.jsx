import { useState } from "react";
import './Input.scss'

const Input = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    console.log(firstName);
    console.log(lastName);
    console.log(email);

    return (
        <section className="input_wrapper">
            <form className="form_wrapper">
                <input type="text" 
                placeholder="first name" 
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}/>
                <input type="text" 
                placeholder="last name" 
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}/>
                <input type="email" 
                placeholder="email@email.com" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
            </form>
            <div>
                <p>Vorname: {firstName}</p>
                <p>Nachname: {lastName}</p>
                <p>Email: {email}</p>
            </div>
        </section> 
    );
}

export default Input;
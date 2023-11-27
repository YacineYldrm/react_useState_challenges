import { useState } from "react";
import './DarkMode.scss'

const DarkMode = () => {

    const [dark, setDark] = useState(true);
    console.log(dark);

    return ( 
        <section className={dark ? "night" : "day"}>
            <h3>{dark ? "Night" : "Day"}</h3>
            <button className="darkModeBtn" onClick={(e) => setDark((dark) => !dark)}>Set to {dark ? "Day" : "Night"}</button>
        </section>
    );
}
 
export default DarkMode;
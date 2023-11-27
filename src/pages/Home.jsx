import Counter from "../components/Counter";
import DarkMode from "../components/DarkMode";
import Input from "../components/Input";
import './Home.scss'

const Home = () => {
    return ( 
        <>
            <header>
                <h1>React Challenges</h1>
            </header>
            <main>
                <h2>Counter</h2>
                <Counter/>
                <h2>Input</h2>
                <Input/>
                <h2>Dark mode</h2>
                <DarkMode/>
            </main>
        </>
    );
}

export default Home;
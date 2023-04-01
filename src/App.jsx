import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Blog from "./components/Blog/Blog.jsx";

function App() {
  const [count, setCount] = useState(0);

    function Title() {
        useEffect(() => {
            document.title = 'Knowledge Cafe';
        }, []);
    }

  return (
    <div className="App">
        <Title></Title>
        <Header></Header>
        <Blog></Blog>
    </div>
  )
}

export default App

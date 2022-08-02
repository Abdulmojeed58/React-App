import { useState } from "react";


function App() {
  const [joke, setJoke] = useState('')

  const fetchJoke = async () => {
const resp = await fetch('https://api.kanye.rest').catch(err, () => console.log(err))
  }
  return ( 
<h1>Hi, Welcome to react</h1>
  );
}

export default App;

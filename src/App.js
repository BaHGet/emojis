import { useEffect, useState } from 'react';
import './App.css';
import Renderemojies from './Renderemojies';



function App() {

  const [searchinput , setSearchinput] = useState('404');
  const [searchresulte , setSearchresulte] = useState([]);

  let input ;

  const onChange = (e) =>{
    input = e.target.value
    setSearchinput(e.target.value)
  } 

  const headers ="&access_key=b0cff0e3dfb18be80815ce5e0f921e0078f37897";
  useEffect(() => {
    fetch(`https://emoji-api.com/emojis?search=${searchinput}${headers}`)
      .then((response) => response.json())
          .then(data => setSearchresulte([...data]));
}, [searchinput,input])



  setTimeout(() => {
    Array.from(document.querySelectorAll('.component-emoji-result-row'))
      .map(row => row.addEventListener('click', () =>{
        navigator.clipboard.writeText(row.dataset.clipboardText)
    }))
  }, 3000);


  




  return (
    <div className="App">
      <header className="component-header">
        <img 
        src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" 
        width="32" height="32" alt=""/>
          Emoji Search
        <img src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
        width="32" height="32" alt=""/>
      </header>
      <div className="component-search-input">
        <div>
          <input onChange={onChange}/>
        </div>
      </div>
      <Renderemojies searchresulte={searchresulte} />
    </div>
  );
}

export default App;

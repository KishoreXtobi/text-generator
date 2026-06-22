import {useState} from 'react';
import data from './data'
const App = () => {
  const[count,setCount] = useState(0);
  const[text,setText] = useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    let val = parseInt(count);
    setText(data.slice(0,val));

  }
  return <section className="section-center">
    <h4>Bored of Lorem Ipsum?</h4>
    <form action="" className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount" >
        <input type="number" id="amount" min='1' max={8} step={1} value={count} onChange={(e)=>setCount(e.target.value)} />
        <button className="btn">Generate</button>
      </label>
    </form>
    <article className="lorem-text">
      {text.map((item,index)=>{
        return <p key={index}>{item}</p>
      })}
    </article>
  </section>;
};
export default App;

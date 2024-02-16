import { useState,useEffect } from "react";
import axios from 'axios'

const About = () => {
const [todos, setTodos] = useState([]);
const [todospg, setTodospg] = useState(50);

useEffect(() => {   
axios.get('https://jsonplaceholder.typicode.com/todos')
.then((res)=> res.data) // ab data second then me chala jayega yaha se
.then((data)=> setTodos(data))// data uper se get ho gaya
},[])
const numOfelements = Math.ceil(todos.length / todospg); 
const pages = [...Array(numOfelements+1).keys()].slice(1)
// const handlePages = () => {
//   setTodospg
// }
 console.log("wwwww",pages)
  return (
    <div className="Home">
      <h5>llllllllllllllllllllllllllllllll</h5>
      {todos.map(td => (
        <p key={td.id}>{td.title}</p>
      )
      )}
      {/* <button onClick={handlePages}>{pages.map(xl => (
        <p>{xl}</p>
      ))}
      </button> */}
    </div>
  );
}
export default About
import { NavItems } from "./NavItems";
import { useState,useRef,useEffect } from "react";
import logos from '../../../assets/images/enhi.jpg' 
 import './stylec.css'

function Navbar () {
  const [open, setOpen] = useState(false);
  const count = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

//   useEffect(() => {   
//     let logs = setInterval(() => {
//         count.current = count.current + 1;
//        setRenderCount(count.current);
//         console.log("PPPPPPP",count.current)
//       }, 3000);
//      return()=> clearInterval(logs)
//   },[]);
  return (
    <div class="navigation">
      <h3 className="logo">
        <i className="fab fa-react"></i>
          <img src={logos} />
        {/* <input ref={inputRef} handleOnChange={handleOnChange} placeholder={placeHol}/> */}
      </h3>
      {/* <div className="Hamburger-Cross-Icons" onClick={handleClick}>
       =menubutton
        
      </div> */}

   
          

                {/* <ul className={open ? "MenuItems active" : "MenuItems"}>
        {NavItems.map((Item, index) => {
          return (
            <li key={index}>
              <a href={Item.url} className={Item.cName}>
              
                        <span class="title">{Item.title}</span>
                
              </a>
            </li>
          );
        })}
      </ul>  */}

     
    </div>
  );
};

export default Navbar
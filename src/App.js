import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'
import './index.css'

const App=()=> {
  const[isOpen, setIsOpen]=useState(false);

  return (
    <div className='App'>
       <motion.div 
        transition={{layout: {duration:1}}}
        layout 
         style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        }}
        onClick={()=>setIsOpen(!isOpen)}
        className='card'>
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        {isOpen && (<motion.div 
        initial={{opacity : 0}}
        animate={{opacity : 1}}
        transition={{duration : 1}}
        className='expand'>
          <p>A production-ready motion library for React. Utilize the power behind Framer, the best prototyping tool for teams. Proudly open source.  
          </p>
          <p>
          A simple declarative syntax means you write less code. Less code means your codebase is easier to read and maintain.
          </p>
        </motion.div>
        )}

      </motion.div>
       </div>
    
  );
}

export default App;

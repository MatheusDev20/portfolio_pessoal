import React from 'react';
import './index.css';


const  Button = ({git}) => {
  return (
      <>
        <button className={git === true ? 'btn-git' : 'btn-acess'}>
          {git === true ?  <span>
            Github</span>:
            <span>Acessar</span>}
        </button>
      </>
  )
}

export default Button;
import React from 'react';
import './index.css';
import Button from '../Button/Button';
const Posts = ({title,description,img,git_link,techs,project_link}) => {
  return (
      <>
            <div className="post">
               <div className="side">
                    <h3>{title}</h3>
                    <hr/>
                    <p>{description}</p>
                     <p>Techs: {techs}</p>
                    <a href={project_link} target="blank">
                    <Button/>
                    </a> 
                    <a href={git_link} target="blank">
                    <Button git={true}/>
                    </a>   
               </div>
               <div className="image">
                  <img src={require(`../../assets/${img}.png`)} alt="project" className="img"/>
               </div>
               
            </div>

      </>
  )
}

export default Posts;
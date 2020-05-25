import React from 'react';
import './index.css';
import Post from '../../Components/Posts/Post';
import data from '../../data.json';
import { useState } from 'react';
const Portfolio = () =>  {

const [projects,setProjects] = useState(data);
  return (
    <>
        <div className="container">
            <div className="externa">
                <div className="posts-container">
                    {
                      projects.map(({id, ...otherProps}) => (
                        <Post key={id} {...otherProps}/>
                      ))
                      }
                </div>
            </div>

        </div>
    </>
  )
}

export default Portfolio;
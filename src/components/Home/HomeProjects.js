import React from 'react';
import './Home.css';
import pro1 from './imagetwo.jpg';
import pro2 from './img3.JPG';
import pro3 from './image.jpg';


export default function HomeProjects(){
    return(
        <div className='HomeImage'>
            <div className='img1'>
                <img className='img1'src={pro1} alt="" />
            </div>
            <div className='img1'>
                <img className='img1' src={pro2} alt="" />
            </div>
            <div className='img1'>
                <img className='img1' src={pro3} alt="" />                
            </div>
        </div>
    )
}
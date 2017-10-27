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
                {/* <p>Our employees are drug tested and guaranteed to work hard to satisfy your needs.</p> */}
            </div>
            <div className='img1'>
                <img className='img1' src={pro2} alt="" />
                {/* <p>We use only the best equipment and perform maintenance regularly to avoid breakdowns and lost time.</p> */}
            </div>
            <div className='img1'>
                <img className='img1' src={pro3} alt="" />
                {/* <p>We guarantee your satisfaction with whatever task we perform.</p>                 */}
            </div>
        </div>
    )
}
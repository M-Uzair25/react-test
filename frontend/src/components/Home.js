import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  return (
    <div className='mt-4'>
        <Fade  style={{width : '100%'}}>
            <div className="each-slide">
            <div>
                <img src={images[0]} alt="none"/>
            </div>
            <p>First Slide</p>
            </div>
            <div className="each-slide">
            <p>Second Slide</p>
            <div>
                <img src={images[1]}  alt="none"/>
            </div>
            </div>
            <div className="each-slide">
            <div>
                <img src={images[2]}  alt="none"/>
            </div>
            <p>Third Slide</p>
            </div>
        </Fade>
    </div>
  )
};

export default Home

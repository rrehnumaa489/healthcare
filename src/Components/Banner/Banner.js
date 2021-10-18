import React from 'react';
import "./Banner.css";
import Button from 'react-bootstrap/Button';
const Banner = () => {
    return (
           
               <div className="banner-img">
                   <div className="banner-title">
                   <h1>Planex Pharmacy</h1>
                   <p>Phasellus varius diam arcu, vel laoreet lorem molestie faucibus. <br /> Morbi vestibulum tempus quam vitae.</p>
                   <Button variant="primary">View More</Button>
                   </div>
               </div>
              
    );
};

export default Banner;

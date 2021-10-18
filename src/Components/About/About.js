import React from 'react';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <div className="my-5" id="about">
            <h1 className="bg-primary py-5 my-5">About Us</h1>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <p>All Bulgarian online pharmacies must be registered with the Bulgarian Drug Agency (BDA), which controls the medicine trade and reviews when there is doubt in drug quality and safety. A special BDA logo and a certificate for registration of pharmacy prove the accreditation and the legitimacy of the store. Clicking on the logo takes the consumer to the official page of the Bulgarian drug agency. The web page must deliver information about the pharmacy's name, address, registration number, and its manager.</p>
                <Button variant="primary">Read More</Button>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default About;
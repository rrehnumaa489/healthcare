import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Products></Products>
           <About></About>
           <Contact></Contact>
           <Footer></Footer>

            </div>
    );
};

export default Home;
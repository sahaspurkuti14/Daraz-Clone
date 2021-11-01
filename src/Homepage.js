import React , {useState} from 'react';
import './scss/Homepage.scss';
import Header from './Header';
import MainHeader from './MainHeader';
import Banner from './Banner';
import FlashSale from './FlashSale';
import Recommended from './Recommended';
import Footer from './Footer';


function Homepage() {
    const [open, setOpen] = useState(true);

    const close = () => {
        setOpen(false);
    }
    return (
        <div className="homepage">
            {open? 
            <div className="homepage-ad-banner">
                <img src="https://icms-image.slatic.net/images/ims-web/0d7399b5-ee7f-4f04-838f-f59aa0770d48.png" alt="#"/>
                <button onClick= {close}> X </button>
                
            </div> : "" }

            <Header/>
            <MainHeader/>
            <Banner/>
            <FlashSale/>
            <Recommended/>
            <Footer/>
        </div>
    )
}

export default Homepage

import Navbar from "../LandingPage/navbar/nav"
import ContactHeader from "./ContactHeader"
import ContactBody from "./ContactBody"
import Footer from "./Footer"
export default function Contact(){
    return(
        <>
        <div className=" bg-fixed bg-cover bg-center ... bg-[url('./images/contact.jpg')] w-full h-full"> 
        <Navbar/>
        <ContactHeader/>
        <ContactBody/>
        <Footer/>
        </div>
        
        </>
    )
};


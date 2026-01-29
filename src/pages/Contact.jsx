import Header from "../component/Header";
import Footer  from "../component/Footer";
import ContactHero from "../component/Contact/ContactHero";
import ContactSection from "../component/Contact/ContactSection";
import MapSection from "../component/Contact/MapSection";

export default function Contact(){
    return(
        <>
        <Header/>
        <ContactHero/>
        <MapSection/>
        <ContactSection/>
        <Footer/>
        </>
    )
}
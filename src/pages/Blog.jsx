import BlogHero from "../component/BLog/BlogHero";
import BlogSection from "../component/BLog/BlogSection";
import VideoBlogSection from "../component/BLog/VideoBlogSection";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function Blog(){
    return(
        <>
         <Header/>
         <BlogHero/>
         <BlogSection/>
         <VideoBlogSection/>
         <Footer/>
        </>
    )
}
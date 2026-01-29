import Footer from "../component/Footer";
import GallerySection from "../component/Gallery/GallerySection";
import ImageGalleryHero from "../component/Gallery/ImageGalleryHero";
import Header from "../component/Header";

export default function Gallery(){
    return(
        <>
         <Header/>
         <ImageGalleryHero/>
         <GallerySection/>
         <Footer/>
        </>
    )
}
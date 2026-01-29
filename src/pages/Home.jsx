import Footer from "../component/Footer";
import Header from "../component/Header";
import DonorTestimonial from "../component/Home/DonorTestimonial";
import FreshFromBlog from "../component/Home/FreshFromBlog";
import HeroSlider from "../component/Home/HeroSlider";
import HowCanYouHelp from "../component/Home/HowCanYouHelp";
import LatestDonators from "../component/Home/LatestDonators";
import RecentCauses from "../component/Home/RecentCauses";
import StatsCounter from "../component/Home/StatsCounter";
export default function Home() {
    return (
        <div>
            <Header />
            <HeroSlider />
            <RecentCauses />
            <StatsCounter/>
            <HowCanYouHelp/>
            <LatestDonators/>
            <FreshFromBlog/>
            <DonorTestimonial/>
            <Footer />
        </div>
    );
}
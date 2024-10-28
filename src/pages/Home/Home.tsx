import "@/styles/pages/Home.scss";
import HeroSection from "./HeroSection.tsx";

const Home = () => {
    return (
        <main id="Home">
            <div className="container">
                <HeroSection/>
            </div>
        </main>
    );
};

export default Home;
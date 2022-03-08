import { NextPage } from 'next';
import AboutMeSection from '../components/AboutMeSection';
import ContactSection from '../components/ContactSection';
import ProjectsSection from '../components/ProjectsSection';

const Home: NextPage = () => {
    return (
        <>
            <AboutMeSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
};

export default Home;

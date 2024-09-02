import HeroSection from './HeroSection';
import CleanSite from './CleanSite';
import LatestBlogs from './LatestBlogs';

const HomePage = ({ page }) => (
  <>
    <HeroSection page={page} />
    <CleanSite />
    <LatestBlogs />
  </>
);

export default HomePage;

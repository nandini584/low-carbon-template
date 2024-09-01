import Image from 'next/image';
import HeroSection from './Components/HomePage/HeroSection';
import CleanSite from './Components/HomePage/CleanSite';
import LatestBlogs from './Components/HomePage/LatestBlogs';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CleanSite />
      <LatestBlogs />
    </>
  );
}

// import Image from 'next/image';

const HeroSection = ({ page }) => {
  return (
    <div className="bg-light_gray md:pl-36 px-6 md:pr-96 md:py-20 py-4 flex flex-row items-center justify-between">
      <div>
        <h1 className="md:text-6xl text-2xl text-black font-semibold">
          {page.title}
        </h1>
        <div
          className="md:text-lg text-black text-sm md:mt-8 mt-4 md:w-[45vw] w-full"
          dangerouslySetInnerHTML={{ __html: page.introduction }}
        ></div>
        <ul className="text-lg text-black flex md:flex-row flex-col item-center justify-between md:mt-8 mt-6 w-[45vw] font-semibold">
          <li>
            <span className="md:text-2xl text-xl">&#x1f4af;</span>{' '}
            Sustainability
          </li>
          <li>
            <span className="md:text-2xl text-x">&#x1f4af;</span> Accessibility
          </li>
          <li>
            <span className="md:text-2xl text-x">&#x1f4af;</span> SEO
          </li>
        </ul>
      </div>
      {/* <Image
        src="/path/to/your/image.jpg"
        alt="Description of the image"
        width={500}
        height={300}
        /> */}
    </div>
  );
};

export default HeroSection;

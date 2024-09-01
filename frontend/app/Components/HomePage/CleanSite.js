const CleanSite = () => {
  return (
    <div className="bg-lavendar_gray md:pl-36 px-6 md:pr-96 md:py-20 py-10 flex flex-row items-center justify-between">
      {/* <Image
        src="/path/to/your/image.jpg"
        alt="Description of the image"
        width={500}
        height={300}
        /> */}
      <div>
        <h1 className="text-blue_violet md:text-2xl text-xl font-bold">
          Crafting Clean, Efficient <br /> Websites for a Greener Future
        </h1>
        <h4 className="md:text-lg text-black text-sm md:my-8 my-6 md:w-[31vw]">
          Our approach to web design is rooted in minimalism and sustainability,
          ensuring that every site we build is optimized for energy efficiency
          and low environmental impact.
        </h4>
        <button className="text-black bg-mint_green py-2 px-10 rounded-md border-[3px] border-black text-lg ">
          Get Access to Latest Blogs
        </button>
      </div>
    </div>
  );
};

export default CleanSite;

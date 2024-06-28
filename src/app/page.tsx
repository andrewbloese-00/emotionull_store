//next
import Image from "next/image";
import Link from "next/link";

//custom
import CategoryCard from "@/components/cards/category_card";
// import ScrollingCarousel, {iCarouselItem}  from "@/components/banners/scrolling_carousel";


// const apparelBannerItem:iCarouselItem = {
//   text: "APPAREL",
//   href: "/shop"
// }
// const accessoriesBannerItem:iCarouselItem = {
//   text: "ACCESSORIES",
//   href: "/shop"
// }
// const shirtsBannerItem:iCarouselItem = {
//   text: "SHIRTS",
//   href: "/shop"
// }
// const pantsBannerItem:iCarouselItem = {
//   text: "PANTS",
//   href: "/shop"
// }
// const hatsBannerItem:iCarouselItem = {
//   text: "HATS",
//   href: "/shop"
// }

// const bannerItems = [ apparelBannerItem, accessoriesBannerItem, shirtsBannerItem, pantsBannerItem, hatsBannerItem]


export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-start px-24">

      
      {/* Hero Section BEGIN */}
      <section className="bg-gradient-radial from-white to-transparent w-screen rounded-lg shadow-md border-gray-400 mb-5">
        <div className="relative w-full">
          {/* banner section */}
          {/* <div className="gap-x-4 z-10 absolute top-1/3 -translate-x-1/2 -rotate-45 w-screen  h-20 hidden md:flex justify-center">
              <ScrollingCarousel items={bannerItems} />
          </div> */}
          
          

          {/* hero image */}
          <Image 
            className="rounded-lg w-full z-0 md:w-screen "
            src="/static_void_hero.png" 
            alt="static void dots pattern" 

            width={0} height={0} 
            sizes="100vw"
            style={{width: "100vw", maxHeight:"600px", objectFit: "fill"}}
          />
          <h1 
            style={{fontFamily: "monospace"}}
            className=" px-4 absolute top-1/2 left-1/2 lg:text-5xl w-screen md:text-4xl text-3xl -translate-x-1/2 -translate-y-1/2 text-center shadow-md bg-gradient-radial from-black/10 to-transparent font-semibold"
          >
            INTRODUCING THE <span className="bg-gradient-radial from-violet-400 to-pink-300 bg-clip-text text-transparent">STATIC VOID</span> COLLECTION
          </h1>


          <Link 
            style={{fontFamily:"monospace"}}
            className="bg-black px-5 py-2 text-white rounded-xl absolute bottom-10 right-10 hover:bg-white/50 hover:text-black  transition-colors sm:text-3xl text-lg"            
            href="/shop">
            
            Shop Now!
          </Link>
        </div>
      </section>
      {/* Hero Section END */}


      {/* Categories Section */}
      <section className="w-full gap-x-10 gap-y-20 md:pt-24 px-5 relative mt-12 grid grid-cols-2 place-items-center md:grid-cols-2  xl:grid-cols-4 ">
        <h2 className="md:absolute md:left-5 md:top-0 text-5xl font-bold">
          Categories
        </h2>
        <span className="block md:hidden"></span>


        <CategoryCard 
          title="Shirts"
          image_url="/featuered_sweatshirt.png"
          category_id="1"
        />
        <CategoryCard 
          title="Pants"
          image_url="/featured_pants.png"
          category_id="2"
        />
        <CategoryCard 
          title="Hats"
          image_url="/white_hat.png"
          category_id="3"
        />
        <CategoryCard 
          title="Accessories"
          image_url="/sticker.png"
          category_id="4"
        />


      
      
      
      </section>
      {/* Categories Section End */}

      {/*  */}





    </main>
  );
}

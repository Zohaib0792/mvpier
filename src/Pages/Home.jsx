import { useState } from "react";
import Card from "../components/Card";
import { products } from "../data/product";


function Home() {
    const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);
return(
    <div>
    <section className="flex flex-col justify-center h-[80vh] items-center bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 gap-4">
        {/* <Hero /> */}
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-7xl text-white">Welcome to TechHub Store</h1>
            <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, quibusdam accusamus reiciendis sunt provident amet alias deserunt
            </p>
        </div>
        <div className="flex  gap-4">
            <a href="http://" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-500 py-2 px-3 rounded-lg border-2 border-blue-500">Shop Now</a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-3 rounded-lg border-2 border-white">Learn More</a>

        </div>

</section>
{/* feature products */}
<section className="bg-gray-100">
    <div className="flex flex-col p-4 gap-3 justify-center items-center">
        <h1 className="text-3xl bold">Featured Products</h1>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur </p>
    </div>
<div className="flex gap-4 m-3 ">
      <button
        onClick={() => setSelectedCategory("All")}
        className={
          selectedCategory == "All"
            ? "bg-black text-white py-2 px-3 rounded-lg"
            : "bg-white text-black py-2 px-3 rounded-lg"
            
        }
      >
        All
      </button>

      <button
        onClick={() => setSelectedCategory("Laptops")}
        className={
          selectedCategory == "Laptops"
           ? "bg-black text-white py-2 px-3 rounded-lg"
            : "bg-white text-black py-2 px-3 rounded-lg"
        }
      >
        Laptops
      </button>

      <button onClick={() => setSelectedCategory("Smartphones")}
          className={
          selectedCategory == "Smartphone"
           ? "bg-black text-white py-2 px-3 rounded-lg"
            : "bg-white text-black py-2 px-3 rounded-lg"
        }>
        Smartphones
      </button>
      <button
      onClick={() => setSelectedCategory("Headphones")}
          className={
          selectedCategory == "Headphones"
           ? "bg-black text-white py-2 px-3 rounded-lg"
            : "bg-white text-black py-2 px-3 rounded-lg"
        }>Headphones</button>
      <button
      onClick={() => setSelectedCategory("Gaming")}
          className={
          selectedCategory == "Gaming"
           ? "bg-black text-white py-2 px-3 rounded-lg"
            : "bg-white text-black py-2 px-3 rounded-lg"
        }>Gaming</button>
         <button
      onClick={() => setSelectedCategory("Watches")}
          className={
          selectedCategory == "Watches"
           ? "bg-black text-white py-2 px-3 rounded-lg"
            : "bg-white text-black py-2 px-3 rounded-lg"
        }>Watches</button>
      </div>
<div>
      <div className="grid grid-cols-4 gap-3 m-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>

</section>

{/* services */}
<section>


  <div className="flex justify-center items-center mb-10 sm:mb-12 ">
    <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-center mt-20 sm:mt-24 lg:mt-28 px-4">
      Why Choose TechHub?
    </h1>
  </div>


  {/* Features */}

  
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50 p-4 ">

    {/* Feature 1 */}
    <div className="text-center px-6 py-6 lg:py-2 border-b sm:border-b lg:border-b-0 sm:border-r border-gray-100 rounded-lg p-4">
      <div className="text-[36px] sm:text-[39px] mb-2">
        ⚡
      </div>

      <h2 className="text-base font-semibold mb-3 lg:text-2xl">
        Fast Shipping
      </h2>

      <p className="mx-auto max-w-[190px] text-xs leading-relaxed text-gray-400">
        Get your products delivered within 2-3 business days
      </p>
    </div>


    {/* Feature 2 */}
    <div className="text-center px-6 py-6 lg:py-2 border-b lg:border-b-0 lg:border-r border-gray-100">
      <div className="text-[36px] sm:text-[39px] mb-2">
        💰
      </div>

      <h2 className="text-base font-semibold mb-3">
        Best Prices
      </h2>

      <p className="mx-auto max-w-[190px] text-xs leading-relaxed text-gray-400">
        Competitive pricing with regular deals and discounts
      </p>
    </div>


    {/* Feature 3 */}
    <div className="text-center px-6 py-6 lg:py-2 border-b sm:border-b-0 sm:border-r border-gray-100">
      <div className="text-[36px] sm:text-[39px] mb-2">
        ☑️
      </div>

      <h2 className="text-base font-semibold mb-3">
        Quality Assured
      </h2>

      <p className="mx-auto max-w-[190px] text-xs leading-relaxed text-gray-400">
        Top quality products with 100% genuine guarantee
      </p>
    </div>


    {/* Feature 4 */}
    <div className="text-center px-6 py-6 lg:py-2">
      <div className="text-[36px] sm:text-[39px] mb-2">
        🎧
      </div>

      <h2 className="text-base font-semibold mb-3">
        24/7 Support
      </h2>

      <p className="mx-auto max-w-[190px] text-xs leading-relaxed text-gray-400">
        Dedicated customer support available anytime
      </p>
    </div>

  </div>

</section>
{/* Statistics  */}
  <section
    className="mt-5 min-h-[150px] grid grid-cols-1 md:grid-cols-3 items-center text-center text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-400 py-8 md:py-0"
  >

    {/*  Stat 1 */}
    <div>
      <div className="text-[30px] mb-1">
        10k+
      </div>

      <div className="text-[13px]">
        Happy Customers
      </div>
    </div>


    {/*  Stat 2 */}
    <div>
      <div className="text-[30px] mb-1">
        500+
      </div>

      <div className="text-[13px]">
        Products Available
      </div>
    </div>


    {/* Stat 3 */}
    <div>
      <div className="text-[30px] mb-1">
        98%
      </div>

      <div className="text-[13px]">
        Customers Satisfaction
      </div>
    </div>

  </section>
    </div>
)
    
}

export default Home;
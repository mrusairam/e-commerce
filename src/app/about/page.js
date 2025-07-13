import Footer from "@/Components/main/Foooter";

export default function About() {
    return (
        <>
      <section className="bg-[#F9FAFB] py-16 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">


        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6 font-serif">
          About Pasha-Store
        </h2>


        <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
          At <span className="font-semibold text-[#EE4899]">Pasha-Store</span>, we are committed to redefining your online shopping
          experience. Whether you are a tech enthusiast, fashion lover, or gamer, our store brings handpicked quality
          products at unbeatable prices — all in one place.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
          From wireless headphones and game controllers to stylish wearables and smart gadgets, we offer a variety of
          modern essentials with quick shipping and dedicated support. Every product we list is tested for quality,
          usefulness, and durability.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
          Developed by <span className="text-[#EE4899] font-semibold">Usairam</span>, Pasha-Store blends design,
          technology, and trust to give you a store that’s built for convenience and reliability.
        </p>


        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center font-serif">
            Why Choose Pasha-Store?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-[#EE4899] mb-2">Quality Products</h4>
              <p className="text-gray-700 text-base leading-relaxed">
                We list only trusted, high-quality, and tested products that ensure value for money. Say goodbye to cheap imitations.
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-[#EE4899] mb-2">Fast & Reliable Shipping</h4>
              <p className="text-gray-700 text-base leading-relaxed">
                Your orders are delivered on time with full tracking. We work with trusted logistics partners to ensure safe delivery.
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-[#EE4899] mb-2">Affordable Prices</h4>
              <p className="text-gray-700 text-base leading-relaxed">
                Get the latest tech, gadgets, and fashion at prices that won’t break the bank. We believe in affordability with quality.
              </p>
            </div>

 
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-[#EE4899] mb-2">24/7 Customer Support</h4>
              <p className="text-gray-700 text-base leading-relaxed">
                Need help? Our friendly support team is available around the clock to assist you with your queries or issues.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-[#EE4899] mb-2">Secure Checkout</h4>
              <p className="text-gray-700 text-base leading-relaxed">
                Your payments are processed using secure encryption technologies to ensure privacy and data protection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-[#EE4899] mb-2">Built by a Passionate Developer</h4>
              <p className="text-gray-700 text-base leading-relaxed">
                This store is developed and maintained by <span className="font-semibold">Usairam</span>, a tech enthusiast
                focused on delivering great user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer/>
      </>
    );
  }
  
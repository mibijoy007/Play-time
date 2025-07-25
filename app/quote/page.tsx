// import Navbar from "@/components/Navbar";

import Faq from "@/components/Faq";
import Image from "next/image";
import React from "react";


interface PricingPlan {
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
  imageUrl?: string;
}

const pricingPlans: readonly PricingPlan[] = [
  {
    title: "Exterior Visualization",
    imageUrl: "/sumit/exterior.png",
    subtitle: "Send us your rough ideas, sketches, Cad drawings, Site Photos And get High Quality Stunning 3d Visualizations starting from ",
    price: "$400",
    duration: "??? Seconds Running Time",
    features: [
      "3d Modeling in Sketchup",
      "Lighting & Texturing",
      "Environment",
      "Rendered Images (Day/Night)",
      "Flythrough Animation",
      "================",
      "Provided CAD Model",
      "Photorealistic Texture",
      "Cinematics view",
      "Photorealistic Animation",
      "Full HD animation",
    ],
  },
  {
    title: "Interior Visualization",
    imageUrl: "/sumit/interior.png",
    subtitle: "Send us your ideas, sketches, Moodboards, Cad drawings, Existing Site Photos And get High Quality Stunning Interior Visualizations starting from ",
    price: "$500",
    duration: "??? Seconds Running Time",
    features: [
      "3d Modeling in Sketchup",
      "Lighting & Texturing",
      "Customized Furniture",
      "Rendered Images",
      "Walkthrough Animation",
      "================",
      "Basic 3D Modeling",
      "Photorealistic Texture",
      "Cinematics view",
      "Photorealistic Animation",
      "Full HD animation",
    ],
  },
  {
    title: "Landscape Visuals",
    imageUrl: "/sumit/landscape.png",
    subtitle: "Send us your Back Yard/ Front Yard Photos, Your ideas & inspirations and get your landscape designed with high quality 3d visuals Starting from ",
    price: "$300",
    duration: "??? Seconds Running Time",
    features: [
      "3d Modeling in Sketchup",
      "Customised Materials",
      "Environment",
      "Rendered Images (Day/Night)",
      "Walkthrough Animation",
      "Hardscape & Softscape Plans with Dimension",
      "================",
      "Hard 3D Modeling",
      "Photorealistic Texture",
      "Water And Smoke Simulation",
      "Particles Simulation",
      "Cinematics view",
      "Photorealistic Animation",
      "Full HD animation",
    ],
    // isPopular: true,
  },
  {
    title: "Virtual Renovation",
    imageUrl: "/sumit/renovate.png",
    subtitle: "Send us Real Images of your property, Let us know what kind of modifications you need, we will do this virtually. Starting from ",
    price: "$200",
    duration: "??? Seconds Running Time",
    features: [
      "High Quality Virtually Renovated Photo",
      "Virtual Staging of Interiors",
      "================",
      "Hard 3D Modeling",
      "Photorealistic Texture",
      "Water And Smoke Simulation",
      "Particles Simulation",
      "Cinematics view",
      "VFX Integration",
      "Photorealistic Animation",
      "4k Animation",
    ],
  },
];

const page = () => {
  return (
    <div>
      {/* <div className="bg-white mb-24"><Navbar /></div> */}

      {/* Services Section */}
      <div id="services" className="bg-[#ededed] pt-5">
        <h2 className="text-center mb-6 pt-8 text-4xl font-semibold">
          Our Services
        </h2>
        <p className="text-center mb-2 text-sm text-gray-600">
          Our passion and love for the followings.
        </p>
        <section className="py-10 px-4 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl xl:max-w-7xl w-full">
           
           
           {/* Card 1 */}
            <div className="bg-white shadow-md mx-auto rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition">
              <div className="text-3xl mb-4 text-pink-600">
                {/* <FaUsers /> */}
                <Image
                              src="/sumit/exterior.png"
                              alt="Play image 3"
                              width={400}
                              height={400}
                              className="object-cover mx-auto my-auto "
                              priority
                            />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Exterior Visualization
              </h3>
              <p className="text-gray-600 text-sm">
                Send us your ideas, sketches, Moodboards, Cad drawings, 
Existing Site Photos And get High Quality Stunning 
Interior Visualizations starting from 500 USD

              </p>

             
            </div>

           
           
            {/* Card 2 */}
            <div className="bg-white shadow-md mx-auto rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition">
              <div className="text-3xl mb-4 text-blue-600">
                {/* <FaShieldAlt /> */}
                <Image
                              src="/sumit/interior.png"
                              alt="Play image 3"
                              width={400}
                              height={400}
                              className="object-cover mx-auto my-auto "
                              priority
                            />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Interior Visualization
              </h3>
              <p className="text-gray-600 text-sm">
               Send us your ideas, sketches, Moodboards, Cad drawings, 
Existing Site Photos And get High Quality Stunning 
Interior Visualizations starting from 500 USD

              </p>
            </div>

           
           
            {/* Card 3 */}
            <div className="bg-white shadow-md mx-auto rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition">
              <div className="text-3xl mb-4 text-pink-600">
                {/* <FaChartLine />*/}
                 <Image
                              src="/sumit/landscape.png"
                              alt="Play image 3"
                              width={400}
                              height={400}
                              className="object-cover mx-auto my-auto "
                              priority
                            />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Landscape Visualization
              </h3>
              <p className="text-gray-600 text-sm">
                Send us your Back Yard/ Front Yard Photos, Your ideas & inspirations and get your landscape designed with high quality 3d visuals Starting from 300 USD
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md mx-auto rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition">
              <div className="text-3xl mb-4 text-pink-600">
                {/* <FaChartLine />*/}
                 <Image
                              src="/sumit/renovate.png"
                              alt="Play image 3"
                              width={400}
                              height={400}
                              className="object-cover mx-auto my-auto "
                              priority
                            />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Virtual Renovation
              </h3>
              <p className="text-gray-600 text-sm">
                  Send us Real Images of your property, Let us know what kind of modifications you need, we will do this virtually.              </p>
            </div>


          </div>
        </section>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 pt-12 pb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-8 text-4xl font-bold text-gray-900">
            Our Pricing Plans
          </h2>
          <p className="text-center mb-12 text-sm text-gray-600">
            Choose the perfect package for your business needs
          </p>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg p-8 transition-all duration-300  hover:shadow-xl hover:scale-105 h-auto ${
                  plan.isPopular ? "ring-2 ring-red-500" : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-0 -right-0 bg-red-500 text-white px-4 py-2 rounded-bl-xl rounded-tr-xl text-sm font-bold">
                    BEST SELLER
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="quoteTitle mb-6 ">{plan.title}</h3>



                  <div className="text-3xl mb-4 text-pink-600">
                {/* <FaChartLine />*/}

                { plan.imageUrl &&
                 <Image
                              src={plan.imageUrl}
                              alt={plan.title}
                              width={400}
                              height={400}
                              className="object-cover mx-auto my-auto "
                              priority
                            />
                            }
              </div>



                  {/* <p className="text-gray-500 text-sm mb-6">{plan.subtitle}</p> */}
                  <p className="text-gray-500 text-sm mb-6">starting from</p>
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  </div>

                  {/* Duration */}
                  {/* <p className="text-gray-600 text-sm font-medium">
                    {plan.duration}
                  </p> */}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-3 h-3 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>



                {/* Buy Button */}
                {/* <button className="w-full cursor-pointer bg-teal-900 hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                  Buy Now
                </button> */}

                {/* Guarantee */}
                <p className="text-center text-gray-400 text-xs mt-4">
                  100% Satisfied Guarantee
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>



           


    
 
  <Faq/>
  
    </div>
  );
};

export default page;

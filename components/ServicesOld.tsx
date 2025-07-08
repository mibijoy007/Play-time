import React from 'react'
import { FaUsers, FaShieldAlt, FaChartLine } from "react-icons/fa";

const ServicesOld = () => {
  return (
    
      <div className="bg-[#ededed]">
              {/* Services Section */}
            <h2 className="text-center mb-10 pt-8 text-4xl font-semibold">
              Our Services
            </h2>
            <p className="text-center mb-20 text-sm text-gray-600">
              Especially favourable compliment but thoroughly unreserved saw she
              themselves.
            </p>
            <section className="py-10 px-4 flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl xl:max-w-7xl w-full">
                {/* Card 1 */}
                <div className="bg-white shadow-md mx-auto rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition">
                  <div className="text-3xl mb-4 text-pink-600">
                    <FaUsers />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    3D Modeling & Texturing
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Transform your product into precise 3D models. Ready for
                    animation, games, product showcases, AR and VR
                  </p>
                </div>
    
                {/* Card 2 */}
                <div className="bg-white shadow-md mx-auto rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition">
                  <div className="text-3xl mb-4 text-blue-600">
                    <FaShieldAlt />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Product Animation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We animate your product, highlighting its key features and
                    function in a visually engaging, dynamic and cinematic
                    presentation.
                  </p>
                </div>
    
                {/* Card 3 */}
                <div className="bg-white shadow-md mx-auto rounded-xl p-6 w-full max-w-sm hover:shadow-xl transition">
                  <div className="text-3xl mb-4 text-pink-600">
                    <FaChartLine />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Dynamic Simulation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Bring your product to life with realistic water, smoke, fire,
                    and particle effects — elevate your visuals with high-end
                    dynamic simulations.
                  </p>
                </div>
              </div>
            </section>
          </div>
  )
}

export default ServicesOld
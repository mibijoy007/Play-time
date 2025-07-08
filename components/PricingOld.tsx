import React from 'react'


interface PricingPlan {
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
}

const pricingPlans: readonly PricingPlan[] = [
  {
    title: "Basic Animation",
    subtitle: "For Startup Business",
    price: "$300",
    duration: "5-12 Seconds Running Time",
    features: [
      "Provided CAD Model",
      "Photorealistic Texture",
      "Cinematics view",
      "Photorealistic Animation",
      "Full HD animation",
    ],
  },
  {
    title: "Standard Animation",
    subtitle: "For e-Commerce Business",
    price: "$600",
    duration: "12-20 Seconds Running Time",
    features: [
      "Basic 3D Modeling",
      "Photorealistic Texture",
      "Cinematics view",
      "Photorealistic Animation",
      "Full HD animation",
    ],
  },
  {
    title: "World-Class Animation",
    subtitle: "For Commercial Business",
    price: "$2000",
    duration: "20-30 Seconds Running Time",
    features: [
      "Hard 3D Modeling",
      "Photorealistic Texture",
      "Water And Smoke Simulation",
      "Particles Simulation",
      "Cinematics view",
      "Photorealistic Animation",
      "Full HD animation",
    ],
    isPopular: true,
  },
  {
    title: "Best-Class Animation",
    subtitle: "High-End Commercial Business",
    price: "$5000",
    duration: "30-120 Seconds Running Time",
    features: [
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

const PricingOld = () => {
  return (
    <>
    {/* Pricing Section */}
      <div className="bg-gray-50 pt-12 pb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-8 text-4xl font-bold text-gray-900">
            Our Pricing Plans
          </h2>
          <p className="text-center mb-12 text-sm text-gray-600">
            Choose the perfect package for your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl h-auto ${
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
                  <h3 className="quoteTitle mb-2">{plan.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">{plan.subtitle}</p>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  </div>

                  {/* Duration */}
                  <p className="text-gray-600 text-sm font-medium">
                    {plan.duration}
                  </p>
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
                <button className="w-full cursor-pointer bg-teal-900 hover:bg-teal-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                  Buy Now
                </button>

                {/* Guarantee */}
                <p className="text-center text-gray-400 text-xs mt-4">
                  100% Satisfied Guarantee
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
  )
}
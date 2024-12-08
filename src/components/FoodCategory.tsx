import React from 'react';

const FoodCategory = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-orange-400 font-medium text-lg">Food Category</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Choose <span className="text-orange-400">Food Item</span>
          </h2>
        </div>

        {/* Food Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Food Item 1 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/image6.png"
              alt="Fast Food Dish"
              className="w-full h-56 object-cover"
            />
            <div className="absolute top-4 left-4 bg-orange-500 text-white py-1 px-3 rounded-full text-sm font-medium">
              Save 30%
            </div>
            <div className="absolute bottom-4 left-4 bg-orange-500 text-white py-1 px-3 rounded-full text-sm font-medium">
              Fast Food Dish
            </div>
          </div>

          {/* Food Item 2 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/image7.png" 
              alt="Burger Dish"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Food Item 3 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/image8.png" 
              alt="Salad Dish"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Food Item 4 */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/image9.png" // Replace with your image path
              alt="Donut Dish"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;

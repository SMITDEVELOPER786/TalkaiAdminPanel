import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white  w-[90%] cursor-pointer duration-200 p-6 rounded-lg shadow-md group hover:bg-[#55E3CB] hover:text-white">
      {icon}
      <h3 className="text-xl font-semibold text-[#FE7E29] group-hover:text-white mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;

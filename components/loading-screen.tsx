"use client"

import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#FFFAEB] flex items-center justify-center">
      {/* Minimal loading content */}
      <div className="relative flex flex-col items-center">
        {/* Creative loading animation */}
        <div className="relative w-24 h-24">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-[#FA520F] rounded-full animate-[spin_3s_linear_infinite]" />
          
          {/* Middle ring */}
          <div className="absolute inset-4 border-4 border-[#FF8205] rounded-full animate-[spin_2s_linear_infinite_reverse]" />
          
          {/* Inner ring */}
          <div className="absolute inset-8 border-4 border-[#FFAE00] rounded-full animate-[spin_1s_linear_infinite]" />
          
          {/* Center dot */}
          <div className="absolute inset-[38%] bg-[#FFD900] rounded-full animate-pulse" />
        </div>

        {/* Text content */}
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 animate-fade-in">
            8HARATH
          </h1>
          <p className="mt-2 text-sm text-gray-600 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Loading
            <span className="inline-block animate-pulse">.</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.2s' }}>.</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.4s' }}>.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

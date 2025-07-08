"use client"

import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="relative flex flex-col items-center">
        {/* AI Brain/Neural Network Visualization */}
        <div className="relative w-16 h-16 mb-8">
          {/* Central Processing Node */}
          <div className="absolute inset-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" />
          
          {/* Neural Network Nodes */}
          <div className="absolute inset-0">
            {/* Top Layer */}
            <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 bg-primary/70 rounded-full ai-loading-node" style={{ animationDelay: '0s' }} />
            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-primary/60 rounded-full ai-loading-node" style={{ animationDelay: '0.2s' }} />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary/60 rounded-full ai-loading-node" style={{ animationDelay: '0.4s' }} />
            
            {/* Middle Layer */}
            <div className="absolute left-0 top-1/2 w-2 h-2 -translate-y-1/2 bg-primary/70 rounded-full ai-loading-node" style={{ animationDelay: '0.6s' }} />
            <div className="absolute right-0 top-1/2 w-2 h-2 -translate-y-1/2 bg-primary/70 rounded-full ai-loading-node" style={{ animationDelay: '0.8s' }} />
            
            {/* Bottom Layer */}
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-primary/60 rounded-full ai-loading-node" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-primary/60 rounded-full ai-loading-node" style={{ animationDelay: '1.2s' }} />
            <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 bg-primary/70 rounded-full ai-loading-node" style={{ animationDelay: '1.4s' }} />
          </div>
          
          {/* Connection Paths */}
          <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 64 64">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            
            {/* Neural pathways */}
            <path d="M32 8 L32 32" stroke="url(#connectionGradient)" strokeWidth="1" className="ai-loading-connection" style={{ animationDelay: '0s' }} />
            <path d="M8 8 L32 32" stroke="url(#connectionGradient)" strokeWidth="1" className="ai-loading-connection" style={{ animationDelay: '0.3s' }} />
            <path d="M56 8 L32 32" stroke="url(#connectionGradient)" strokeWidth="1" className="ai-loading-connection" style={{ animationDelay: '0.6s' }} />
            <path d="M8 32 L32 32" stroke="url(#connectionGradient)" strokeWidth="1" className="ai-loading-connection" style={{ animationDelay: '0.9s' }} />
            <path d="M56 32 L32 32" stroke="url(#connectionGradient)" strokeWidth="1" className="ai-loading-connection" style={{ animationDelay: '1.2s' }} />
            <path d="M8 56 L32 32" stroke="url(#connectionGradient)" strokeWidth="1" className="ai-loading-connection" style={{ animationDelay: '1.5s' }} />
            <path d="M56 56 L32 32" stroke="url(#connectionGradient)" strokeWidth="1" className="ai-loading-connection" style={{ animationDelay: '1.8s' }} />
            <path d="M32 56 L32 32" stroke="url(#connectionGradient)" strokeWidth="1" className="ai-loading-connection" style={{ animationDelay: '2.1s' }} />
          </svg>
        </div>

        {/* Minimal Text with Subtle Animation */}
        <div className="text-center ai-loading-text">
          <h1 className="text-lg font-medium text-foreground mb-2 tracking-wider">
           Bharath
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span className="font-mono">Loading</span>
            <div className="flex gap-0.5">
              <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

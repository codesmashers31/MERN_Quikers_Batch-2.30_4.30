const ReactBasics = () => {
    return (
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-semibold">React.js Fundamentals</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Master React Development
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Everything you need to know to start building modern web applications with React
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Left Column - Getting Started */}
                    <div className="space-y-8">
                        {/* Installation */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                    <span className="text-white font-bold">1</span>
                                </div>
                                <h2 className="text-2xl font-bold">Installation & Setup</h2>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-300 mb-2">Create React App</h3>
                                    <pre className="bg-black/30 p-4 rounded-lg text-green-400 text-sm overflow-x-auto">
                                        npx create-react-app my-app
                                    </pre>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-300 mb-2">Vite (Recommended)</h3>
                                    <pre className="bg-black/30 p-4 rounded-lg text-green-400 text-sm overflow-x-auto">
                                        npm create vite@latest my-app -- --template react
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Core Concepts */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <h2 className="text-2xl font-bold">Core Concepts</h2>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Components: Building blocks of React apps",
                                    "JSX: JavaScript syntax extension",
                                    "Props: Passing data to components",
                                    "State: Managing component data",
                                    "Events: Handling user interactions"
                                ].map((concept, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        <span className="text-gray-300">{concept}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Quick Start Guide */}
                    <div className="space-y-8">
                        {/* Your First Component */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                    <span className="text-white font-bold">3</span>
                                </div>
                                <h2 className="text-2xl font-bold">Your First Component</h2>
                            </div>
                            <pre className="bg-black/30 p-4 rounded-lg text-sm overflow-x-auto">
{`// Welcome.jsx
import React from 'react';

const Welcome = ({ name }) => {
  return (
    <div className="p-4 bg-blue-500 text-white rounded-lg">
      <h1>Hello, {name}!</h1>
      <p>Welcome to React development</p>
    </div>
  );
};

export default Welcome;`}
                            </pre>
                        </div>

                        {/* State Management */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center mr-3">
                                    <span className="text-white font-bold">4</span>
                                </div>
                                <h2 className="text-2xl font-bold">State Management</h2>
                            </div>
                            <pre className="bg-black/30 p-4 rounded-lg text-sm overflow-x-auto">
{`// Counter Component
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Learning Path */}
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
                    <h2 className="text-3xl font-bold mb-6 text-center">Learning Path</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {learningPath.map((step, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">{step.icon}</span>
                                </div>
                                <h3 className="font-semibold mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-300">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Tips */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    {quickTips.map((tip, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="text-3xl mb-3">{tip.emoji}</div>
                            <h3 className="font-semibold mb-2">{tip.title}</h3>
                            <p className="text-sm text-gray-300">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Learning Path Data
const learningPath = [
    {
        icon: "📦",
        title: "Components",
        description: "Learn to build reusable UI components"
    },
    {
        icon: "⚡",
        title: "Hooks",
        description: "Master useState, useEffect, and custom hooks"
    },
    {
        icon: "🔄",
        title: "State Management",
        description: "Manage application state effectively"
    },
    {
        icon: "🚀",
        title: "Advanced Patterns",
        description: "Learn best practices and patterns"
    }
];

// Quick Tips Data
const quickTips = [
    {
        emoji: "💡",
        title: "JSX Tips",
        description: "Always return a single parent element from components"
    },
    {
        emoji: "🔧",
        title: "Developer Tools",
        description: "Use React DevTools for debugging components"
    },
    {
        emoji: "📚",
        title: "Practice",
        description: "Build small projects to reinforce learning"
    }
];

export default ReactBasics;
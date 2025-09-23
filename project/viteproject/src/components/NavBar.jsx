import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            {/* Navigation Bar */}
            <nav className="bg-gradient-to-r from-gray-900 to-purple-900 shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Logo Section */}
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <svg className="h-8 w-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="ml-2 text-xl font-bold text-white">ReactMaster</span>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Link to="/" className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Home</Link>
                            <Link to="/" className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Components</Link>
                            <Link to="/rendring" className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Rendersing</Link>
                            <Link to="/hooks" className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Hooks</Link>
                            <Link to="" className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Projects</Link>
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition duration-300 shadow-lg">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button className="text-gray-400 hover:text-white focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu (hidden by default) */}
                <div className="md:hidden hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
                        <a href="#" className="text-gray-300 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#" className="text-gray-300 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tutorials</a>
                        <a href="#" className="text-gray-300 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Components</a>
                        <a href="#" className="text-gray-300 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Examples</a>
                        <a href="#" className="text-gray-300 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Docs</a>
                    </div>
                </div>
            </nav>

            {/* Banner Section */}
            <div className="relative bg-gradient-to-r from-blue-900 to-purple-800 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <div className="pt-10 px-4 sm:px-6 lg:px-8 lg:pt-20">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                    <span className="block">Master React.js with</span>
                                    <span className="block text-cyan-400">Interactive Learning</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Dive into the world of React with our comprehensive tutorials, hands-on examples, and real-world projects. Build modern web applications with the most popular JavaScript library.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10 transition duration-300">
                                            Start Learning
                                        </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cyan-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition duration-300">
                                            View Examples
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Banner Graphic */}
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden lg:block">
                    <div className="h-56 w-full bg-gradient-to-br from-cyan-400 to-blue-500 rounded-l-full opacity-20 sm:h-72 md:h-96 lg:w-full lg:h-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-70">
                        <svg className="h-64 w-64 text-cyan-300" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
                            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
                            <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                            <circle cx="35" cy="35" r="5" fill="currentColor" />
                            <circle cx="65" cy="35" r="5" fill="currentColor" />
                            <circle cx="65" cy="65" r="5" fill="currentColor" />
                            <circle cx="35" cy="65" r="5" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
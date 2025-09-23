import { useState } from 'react';

const ObjectProcess = () => {
    const obj = [
        {name:"React", subject:"Js", description:"A JavaScript library for building user interfaces, particularly web applications.", details:"React allows developers to create large web applications that can change data, without reloading the page. Its main goal is to be fast, scalable, and simple."},
        {name:"Angular", subject:"Js", description:"A platform and framework for building single-page client applications.", details:"Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google."},
        {name:"Node", subject:"JS", description:"Yes this i sjs for reandering processs.", details:"Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient."},
        {name:"HTML 5", subject:"HTML", description:"The fifth and current major version of HTML.", details:"HTML5 includes detailed processing models to encourage more interoperable implementations."}
    ];
    
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <>
            <h1 className='text-2xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-800 to-indigo-900 text-white p-4 md:p-6 shadow-lg'>
                Modern Web Technologies
            </h1>
            
            <div className="min-h-screen bg-gradient-to-br from-amber-200 via-orange-100 to-yellow-100 py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {obj.map((e, i) => (
                            <div 
                                key={i} 
                                className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <div className="p-6 md:p-8">
                                    <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4 mx-auto">
                                        <span className="text-2xl font-bold text-indigo-600">
                                            {e.name.charAt(0)}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-center text-gray-800 mb-2">{e.name}</h2>
                                    <div className="flex justify-center mb-4">
                                        <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                                            {e.subject}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm text-center mb-6 line-clamp-3">
                                        {e.description}
                                    </p>
                                    <button 
                                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-1"
                                        onClick={() => handleClick(e)}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal for detailed view */}
            {isModalOpen && selectedItem && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 animate-scaleIn">
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{selectedItem.name}</h2>
                                <button 
                                    onClick={closeModal}
                                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            
                            <div className="flex items-center mb-6">
                                <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full">
                                    {selectedItem.subject}
                                </span>
                            </div>
                            
                            <div className="prose max-w-none">
                                <p className="text-gray-700 mb-4">{selectedItem.description}</p>
                                <p className="text-gray-600">{selectedItem.details}</p>
                            </div>
                            
                            <div className="mt-8 flex justify-end">
                                <button 
                                    onClick={closeModal}
                                    className="bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:bg-gray-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ObjectProcess;
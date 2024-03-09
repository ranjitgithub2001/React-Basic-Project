import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
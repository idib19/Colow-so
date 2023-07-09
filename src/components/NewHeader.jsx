import React, { useState } from 'react';

export default function NewHeader() {
    // Variable State pour swcither la valeur du menu a temps voulu
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <header className="sticky top-0 bg-gray-100 sm:bg-transparent sm:flex sm:items-center  sm:px-20 py-3 sm:gap-32">

                <div className="flex justify-between px-4">

                    <img src="/src/assets/logo.svg" alt="Colow So" className="h-20 w-25" />

                    <button className="sm:hidden cursor-pointer" onClick={toggleNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" >
                            {!isNavOpen ? (
                                <path
                                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                                />
                            ) : (
                                <path
                                    d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                                />
                            )}
                        </svg>
                    </button>

                </div>

                <nav className={`${isNavOpen ? 'block' : 'hidden'} sm:flex `}>

                    <a href="#" className="block text-indigo-900 text-sm font-semibold sm:rounded-full sm:hover:bg-white  sm: px-4 sm:py-4 hover:text-purple-600 mb-1">Acceuil</a>
                    <a href="#" className="block text-indigo-900 text-sm font-semibold sm:rounded-full sm:hover:bg-white  sm: px-4 sm:py-4 hover:text-purple-600 mb-1">Solutions de paiement</a>
                    <a href="#" className="block text-indigo-900 text-sm font-semibold sm:rounded-full sm:hover:bg-white  sm: px-4 sm:py-4 hover:text-purple-600 mb-1">API Colow-so</a>
                    <a href="#" className="block text-indigo-900 text-sm font-semibold sm:rounded-full sm:hover:bg-white  sm: px-4 sm:py-4 hover:text-purple-600 mb-1">Filiales</a>
                    <a href="#" className="block text-indigo-900 text-sm font-semibold sm:rounded-full sm:hover:bg-white  sm: px-4 sm:py-4 hover:text-purple-600 mb-1">Contact</a>
                    <a href="#" className="block text-indigo-900 text-sm font-semibold sm:rounded-full sm:hover:bg-white  sm: px-4 sm:py-4 hover:text-purple-600 mb-1">À propos</a>

                </nav>
            </header>
        </>
    );
}

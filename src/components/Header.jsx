function Header() {
    return (
        <>
            <header class=" font-sans p-0 sticky top-0">
                
                    <div class="container flex justify-evenly mx-auto px-8">
                        <div class="flex space-x-4 py-4 ">
                            <div>
                                <img src="/src/assets/logo.svg" alt="Colow So logo" class="h-20 w-25" />
                            </div>

                            <div class=" flex items-center">

                                <nav class="  font-semibold text-base lg:text-lg items-center">

                                    <ul class="hidden sm:flex">
                                    <li class="px-3">
                                        <button class="border rounded-full  px-2 py-2 hover:rounded-full hover:bg-white hover:shadow">
                                           
                                                <a href="#" class="text-indigo-900 text-sm font-semibold hover:text-purple-600">Acceuil</a>
                                        </button>
                                        </li>

                                        <li class="px-3">
                                        <button class="border  rounded-full  px-2 py-2 hover:rounded-full hover:bg-white hover:shadow">
                                           
                                                <a href="#" class="text-indigo-900 text-sm font-semibold hover:text-purple-600">Solutions de paiement</a>
                                        </button>
                                        </li>

                                        <li class="px-3">
                                        <button class="border  rounded-full  px-2 py-2 hover:rounded-full hover:bg-white hover:shadow">
                                           
                                                <a href="#" class="text-indigo-900 text-sm font-semibold hover:text-purple-600">API Colow so</a>
                                        </button>
                                        </li>

                                        <li class="px-3">
                                        <button class="border  rounded-full  px-2 py-2 hover:rounded-full hover:bg-white hover:shadow">
                                           
                                                <a href="#" class="text-indigo-900 text-sm font-semibold hover:text-purple-600">Filiales</a>
                                        </button>
                                        </li>

                                        <li class="px-3">
                                        <button class="border  rounded-full  px-2 py-2 hover:rounded-full hover:bg-white hover:shadow">
                                           
                                                <a href="#" class="text-indigo-900 text-sm font-semibold hover:text-purple-600">Contact</a>
                                        </button>
                                        </li>

                                        <li class="px-3">
                                        <button class="border  rounded-full  px-2 py-2 hover:rounded-full hover:bg-white hover:shadow">
                                           
                                                <a href="#" class="text-indigo-900 text-sm font-semibold hover:text-purple-600">A propos</a>
                                        </button>
                                        </li>
                                    </ul>


                                </nav>

                            </div>

                            <button class="sm:hidden cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                            </button>
                        </div>

                        <div class="block sm:hidden  border-t-2 py-2">
                            <div class="flex flex-col">
                                <nav class="flex flex-col">

                                    <ul class="">
                                        <li>
                                            <a href="#" class="text-indigo-900 text-sm font-semibold hover:text-purple-600  mb-1">Acceuil</a>
                                        </li>

                                        <li>
                                            <a href="#" class="text-indigo-900 text-sm font-semibold hover:text-purple-600  mb-1">Solutions de paiement</a>
                                        </li>

                                        <li>
                                            <a href="#" class="text-indigo-900 text-sm font-semibold hover:text-purple-600  mb-1">API Colow-so</a>
                                        </li>

                                        <li>
                                            <a href="#" class="text-indigo-900 text-sm font-semibold hover:text-purple-600  mb-1">Filiales</a>
                                        </li>

                                        <li>
                                            <a href="#" class="text-indigo-900 text-sm font-semibold hover:text-purple-600   mb-1">Contact</a>
                                        </li>

                                        <li>
                                            <a href="#" class="text-indigo-900 text-sm font-semibold hover:text-purple-600  mb-1">À Propos</a>
                                        </li>

                                    </ul>


                                </nav>

                            </div>
                        </div>
                    </div>
                
            </header>
        </>
    )
}

export default Header
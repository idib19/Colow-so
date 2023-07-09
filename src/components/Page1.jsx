function Page1() {

    return (
        <>
            <div class=" w-full h-auto ">

                <div class="w-full px-8 py-8 flex flex-col self-center sm:flex-row sm:items-center sm:justify-center  sm:py-16 sm:px-20">



                    <div class="min-w-fit">
                        <h1 className=" px-4 py-4 text-4xl sm:text-5xl text-center sm:text-left font-bold ">
                            Plus qu'une carte <br /> de paiement!
                        </h1>

                        <button type="button" class=" py-4 my-8 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 border-2 border-indigo-900">
                            <a href="" class="text-indigo-900  text-base font-bold"> Demandez votre carte</a>
                        </button>

                    </div>





                    <div class="sm:w-115 flex items-center">
                        <img src="./src/assets/Colow so cards.jpg" alt="Cartes Colow-so" class="object-cover h-111 sm:h-112" />
                    </div>


                    <div class=' h-full w-full flex  items-center'>

                        <div class="flex flex-col w-full ">
                            <img src="./src/assets/Phone 1.png" alt="Application Colow-so Pay" class="object-contain h-111 " />


                            <img src="/src/assets/both store.webp" alt="" class="object-contain h-12" />

                        </div>

                    </div>



                </div>

            </div>
        </>
    )
}

export default Page1;
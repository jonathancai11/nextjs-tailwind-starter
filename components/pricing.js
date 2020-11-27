export default function Pricing() {
    return (
        <div className="h-full antialiased bg-primary-very-light font-sans sm:mx-12 md:mx-32 lg:mx-56 xl:mx-72 mx-2">
            <header className="flex flex-col items-center mb-12">
                <h2 className="text-3xl text-primary-normal font-bold">Our Pricing</h2>
                <div className="pt-8 w-3/5 lg:w-1/5 flex justify-around ">
                    <p className="text-sm text-gray-900 font-bold mt-2">Annually</p>
                    <div>
                        <label for="toggle" className="relative">
                            <input type="checkbox" name="toggle" id="" className="hidden" />
                            <div
                                className="absolute w-16 h-8 rounded-full shadow-inner inset-y-0 bg-indigo-600"
                            ></div>
                            <div
                                className="absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 mt-1 ml-1 "
                            ></div>
                        </label>
                    </div>
                    <p className="text-sm text-gray-900 font-bold mt-2 ml-16">Monthly</p>
                </div>
            </header>

            
            <section
                className="flex flex-col lg:flex-row items-start items-center lg:justify-center w-full w-full lg:px-10 py-12 "
            >
                <article
                    className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-gray-900 rounded-lg bg-gray-200"
                >
                    <h5 className="font-bold text-base">Basic</h5>
                    <h2 className="pb-4 flex justify-center font-bold">
                        <span className="text-3xl mt-6 mr-1">$</span
                        ><span className="text-6xl"> 199.99</span>
                    </h2>
                    <ul className="text-sm font-bold">
                        <li className="pt-4 pb-4">500 GB Storage</li>
                        <li className="pt-3 pb-4">2 Users Allowed</li>
                        <li className="pt-4 pb-4">Send up to 3 GB</li>
                    </ul>
                    <button
                        className=" uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 font-bold text-primary-very-light rounded-md bg-indigo-600 text-white"
                    >
                        Learn More
        </button>
                </article>
                <article
                    className="lg:w-custom w-4/5 mb-10 px-6 py-16 lg:-mt-6 text-white text-center rounded-lg bg-indigo-600"
                >
                    <h5 className="font-bold text-base ">Professional</h5>
                    <h2
                        className="font-bold pb-4 mt-2 flex justify-center"
                    >
                        <span className="text-3xl mt-6 mr-1">$</span
                        ><span className="text-6xl "> 249.99</span>
                    </h2>
                    <ul className=" text-sm font-bold">
                        <li className="pt-4 pb-4">1 TB Storage</li>
                        <li className="pt-4 pb-4">5 Users Allowed</li>
                        <li className="pt-4 pb-4">Send up to 10 GB</li>
                    </ul>
                    <button
                        className="uppercase text-center text-sm mt-10 xl:px-24 px-12 sm:px-16 py-2 rounded-md font-bold bg-primary-very-light text-indigo-600 bg-white"
                    >
                        Learn More
        </button>
                </article>
                <article
                    className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-gray-900 rounded-lg bg-gray-200"
                >
                    <h5 className="font-bold text-base">Master</h5>
                    <h2 className="flex justify-center pb-4 font-bold">
                        <span className="text-3xl mt-6 mr-1">$</span
                        ><span className="text-6xl">399.99</span>
                    </h2>
                    <ul className="text-sm font-bold">
                        <li className="pt-4 pb-4">2 TB Storage</li>
                        <li className="pt-4 pb-4">10 Users Allowed</li>
                        <li className="pt-4 pb-4">Send up to 20 GB</li>
                    </ul>
                    <button
                        className="uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 rounded-md font-bold text-primary-very-light bg-indigo-600 text-white"
                    >
                        Learn More
        </button>
                </article>
            </section>
        </div>
    )
}
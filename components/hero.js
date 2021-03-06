import ReactCompareImage from 'react-compare-image';

export default function Hero() {
    return (
        <div className="relative bg-white overflow-hidden sm:mx-12 md:mx-32 lg:mx-56 xl:mx-72 mx-2">
            <div className="max-w-7xl mx-auto">

                <div className="relative z-10 mx-auto pb-8 bg-white sm:pb-16 md:pb-12 lg:max-w-2xl lg:w-full lg:pb-20 xl:pb-28">
                    {/* <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg> */}

                    {/*
                    Mobile menu, show/hide based on menu open state.
                    For animated transitions, wrap the next element in this <Transition> component from https://gist.github.com/adamwathan/3b9f3ad1a285a2d1b482769aeb862467:
                    <Transition
                            show={isOpen}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        ></Transition>
                    */}

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center">
                            <h1 className="text-4xl leading-tight tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Data to enrich your</span> {" "}
                                <span className="block text-indigo-600 xl:inline">online business</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                                </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
                                <div className="rounded-md shadow">
                                    <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                        Get started
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                        Live demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>

                </div>
            </div>

            {/* Hero image */}
            {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"> */}
            <div className="">
                <ReactCompareImage
                    className="m-auto rounded-3xl h-96 w-full object-cover sm:h-96 md:h-96 lg:w-3/4 lg:h-full"
                    leftImage="https://i.imgur.com/QvVqUDE.png"
                    rightImage="https://i.imgur.com/rQY4A4s.png"
                    sliderLineColor="gray"
                />
                {/* <img className="m-auto rounded-3xl h-96 w-full object-cover sm:h-96 md:h-96 lg:w-3/4 lg:h-full" src="https://i.imgur.com/rQY4A4s.png" alt="" /> */}
            </div>
        </div>
    );
}
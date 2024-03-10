export default function HeroComponent() {
    return <>
    
        <section className=" text-gray-800 bg-gradient-to-b from-violet-400  via-violet-400 via-violet-400 to-white min-h-screen ">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24  lg:flex-row  lg:justify-between max-w-400">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-3xl   lg:text-left ">
                    <h1 className="text-2xl font-bold sm:text-5xl   text-gray-50">We Create Learning Experience With Excellent Technology.
                    </h1>
                    <p className="mt-6 mb-8 text-md sm:text-xl sm:mb-12 text-gray-50">
                        Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And Job-Ready Certification Programs--
                        <br />
                        All Included in Your Subscription </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded-full bg-violet-600 text-gray-900">Book Demo Class</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold   border-gray-800">Explore More</a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
                    <img src="https://mambaui.com/assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    </>
}
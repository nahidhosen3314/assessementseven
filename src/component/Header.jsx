
import localImage from '../assets/banner.png'; // Importing the local image

const Header = () => {
    return (
        <div>
            {/* Header */}
            <div className="py-5">
                <div className="container">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="menu-bar cursor-pointer">
                                <svg className="lg:hidden block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#131318" d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"/>
                                </svg>
                            </div>
                            <a href="/">
                                <h4 className="lg:text-3xl">Recipe Calories</h4>
                            </a>
                        </div>
                        <div className="hidden lg:block">
                            <ul className="h-menu md:flex md:items-center font-secondary">
                                <li className="ml-4 text-[#150B2B70] text-base hover:text-primary"><a href="/">Home</a></li>
                                <li className="ml-4 text-[#150B2B70] text-base hover:text-primary"><a href="/">Recipes</a></li>
                                <li className="ml-4 text-[#150B2B70] text-base hover:text-primary"><a href="/">About</a></li>
                                <li className="ml-4 text-[#150B2B70] text-base hover:text-primary"><a href="/">Search</a></li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative hidden sm:block">
                                <input className="py-3 bg-[#150B2B10] pl-12" type="search" placeholder="Search"/>
                                <svg className="absolute left-6 top-4" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                                    <path fill="none" stroke="#12132D" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"/>
                                    <path fill="none" stroke="#12132D" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/>
                                </svg>
                            </div>
                            <div className="bg-primary text-white h-10 w-10 flex items-center justify-center rounded-full">
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                            <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/>
                                            <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21"/>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu-wrapper">
                        <div className="mobile-menu p-3"></div>
                    </div>
                </div>
            </div>

            {/* Banner */}
            <div className="">
                <div className="container">
                    <div className="author">
                        <div className="relative z-20">
                            <img className="absolute rounded-3xl h-full w-full left-0 top-0 object-cover -z-20" src={localImage} alt="Banner"/>
                            <div className="absolute rounded-3xl h-full w-full left-0 top-0 bg-gradient-to-b from-transparent to-[#150B2B]/90 -z-10"></div>
                            <div className="lg:py-24 py-14 text-center max-w-4xl mx-auto z-10 relative">
                                <h2 className="lg:text-5xl text-white mb-5 leading-normal lg:leading-tight">Discover an exceptional cooking class tailored for you!</h2>
                                <p className="text-white mb-8">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                                <div className="flex items-center gap-3 justify-center flex-wrap">
                                    <a href="" className="btn btn-primary">Explore Now</a>
                                    <a href="" className="btn btn-outline">Our Feedback</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

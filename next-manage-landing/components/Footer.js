const Footer = () => {
    return (
        <footer className="bg-veryDarkBlue">
            {/* <!-- Flex Container --> */}
            <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                {/* <!-- Logo and social links container --> */}
                <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    <div className="mx-auto my-6 text-center text-white md:hidden">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                    {/* <!-- Logo --> */}
                    <div>
                        <img
                            src="logo-white.svg"
                            className="h-8"
                            alt="white logo"
                        />
                    </div>
                    {/* <!-- Social Links Container --> */}
                    <div className="flex justify-center space-x-4 md:w-80 md:justify-start">
                        {/* <!-- Link 1 --> */}
                        <a href="#">
                            <img
                                src="icon-facebook.svg"
                                alt="facebook"
                                className="h-8"
                            />
                        </a>
                        {/* <!-- Link 2 --> */}
                        <a href="#">
                            <img
                                src="icon-youtube.svg"
                                alt="youtube"
                                className="h-8"
                            />
                        </a>
                        {/* <!-- Link 3 --> */}
                        <a href="#">
                            <img
                                src="icon-twitter.svg"
                                alt="twitter"
                                className="h-8"
                            />
                        </a>
                        {/* <!-- Link 4 --> */}
                        <a href="#">
                            <img
                                src="icon-pinterest.svg"
                                alt="pinterest"
                                className="h-8"
                            />
                        </a>
                        {/* <!-- Link 5 --> */}
                        <a href="#">
                            <img
                                src="icon-instagram.svg"
                                alt="instagram"
                                className="h-8"
                            />
                        </a>
                    </div>
                </div>
                {/* <!-- List Container --> */}
                <div className="flex justify-around space-x-32 md:mx-5">
                    {/* <!-- Menu #1 --> */}
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="#" className="hover:text-brightRed">
                            Home
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            Pricing
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            Products
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            About
                        </a>
                    </div>
                    {/* <!-- Menu #2 --> */}
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="#" className="hover:text-brightRed">
                            Careers
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            Community
                        </a>
                        <a href="#" className="hover:text-brightRed">
                            Privacy Policy
                        </a>
                    </div>
                </div>
                {/* <!-- Input container --> */}
                <div className="flex flex-col justify-between">
                    <form>
                        <div className="flex space-x-3">
                            <input
                                type="email"
                                className="flex-1 px-4 rounded-full focus:outline-none"
                                required
                                placeholder="Update in your inbox"
                            />
                            <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                                Go
                            </button>
                        </div>
                    </form>
                    <div className="hidden text-white md:block">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

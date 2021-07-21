import coinbase_nav from "../Resources/coinbase_nav.svg";

const Navbar = () => {
    return (
        <div className="w-full bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-3 px-10">
                    <div className="flex flex-1 justify-start">
                        <img src={coinbase_nav} className="w-28" />
                    </div>

                    <nav className="space-x-10 flex">
                        <a className="text-sm">Prices</a>
                        <a className="text-sm">Learn</a>
                        <a className="text-sm">Individual</a>
                        <a className="text-sm">Businesses</a>
                        <a className="text-sm">Developers</a>
                        <a className="text-sm">Country</a>
                    </nav>

                    <div className="flex flex-1 items-center justify-end space-x-5">
                        <a className="text-sm">Sign in</a>
                        <button className="bg-site_blue text-white px-3 py-2 rounded-md">
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;   
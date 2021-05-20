import skale from "../Resources/skl.svg";
import forth from "../Resources/forth.svg";
import grt from "../Resources/grt.svg";
import xlm from "../Resources/xlm.svg";

const Constel = () => {
    return (
        <div className="max-w-5xl py-10 mx-auto">
            <div className="grid grid-cols-2">
                <div className="max-w-sm space-y-5 my-auto">
                    <p className="text-3xl font-semibold text-black">
                        Earn up to $28 worth of crypto
                    </p>

                    <p className="text-sm text-black">
                    Discover how specific cryptocurrencies work — and get a
                    bit of each crypto to try out for yourself.
                    </p>

                    <button className="bg-site_blue text-white px-4 py-2 rounded-md">
                        Start earning
                    </button>
                </div>

                <div>
                    <div className="transition duration-500 px-6 py-5 flex space-x-5 hover:shadow-lg rounded-lg">
                        <img src={skale} className="w-10 h-10" />
                        <div className="flex">
                            <div className="my-auto flex space-x-5">
                                <p className="text-2xl font-semibold text-black">Skale</p>
                                <p className="font-semibold my-auto text-black">SKL</p>
                            </div>
                        </div>
                        <p className="text-right my-auto flex-grow text-site_green">Earn $3 SKL </p>
                    </div>

                    <div className="transition duration-500 px-6 py-5 flex space-x-5 hover:shadow-lg rounded-lg">
                        <img src={forth} className="w-10 h-10" />
                        <div className="flex">
                            <div className="my-auto flex space-x-5">
                                <p className="text-2xl font-semibold text-black">
                                    Ampleforth
                                    Governance Token
                                </p>
                                <p className="font-semibold my-auto text-black">FORTH</p>
                            </div>
                        </div>
                        <p className="text-right my-auto flex-grow text-site_green">Earn $3 FORTH </p>
                    </div>

                    <div className="transition duration-500 px-6 py-5 flex space-x-5 hover:shadow-lg rounded-lg">
                        <img src={grt} className="w-10 h-10" />
                        <div className="flex">
                            <div className="my-auto flex space-x-5">
                                <p className="text-2xl font-semibold text-black">Graph</p>
                                <p className="font-semibold my-auto text-black">GRT</p>
                            </div>
                        </div>
                        <p className="text-right my-auto flex-grow text-site_green">Earn $3 GRT </p>
                    </div>

                    <div className="transition duration-500 px-6 py-5 flex space-x-5 hover:shadow-lg rounded-lg">
                        <img src={xlm} className="w-10 h-10" />
                        <div className="flex">
                            <div className="my-auto flex space-x-5">
                                <p className="text-2xl font-semibold text-black">Stellar Lumens</p>
                                <p className="font-semibold my-auto text-black">XLM</p>
                            </div>
                        </div>
                        <p className="text-right my-auto flex-grow text-site_green">Earn $3 XLM </p>
                    </div>

                    <p className="text-site_blue ml-7">View more ></p>
                </div>
            </div>
        </div>
            );
};

export default Constel;   
import {ReactComponent as BitCoinIcon } from "../Resources/bitcoinlogo.svg";
import {ReactComponent as Arrow } from "../Resources/first_arrow.svg";
import {ReactComponent as Phoneimg } from "../Resources/phone.svg";

const Phone = () => {
    return (    
        <div className="grid grid-cols-2 max-w-5xl mx-auto">
            <div className="flex flex-col py-28 space-y-5">
                <div className="flex space-x-2">
                    <BitCoinIcon />
                    <p className="w-1/2 text-site_blue font-semibold hover:underline">
                        Jump start your portfolio

                        <div className="w-1/2 my-auto">
                        <Arrow />
                    </div>
                    </p>
                    
                </div>

                <div className="space-y-5">
                    <p className="text-7xl font-semibold text-black">
                        Jump start your crypto portfolio
                    </p>

                    <p className="text-xl font-semibold text-black">
                    Coinbase is the easiest place to buy and sell 
                    cryptocurrency. Sign up and get started today.
                    </p>

                    <div className="">
                        <input
                            type="email"
                            className="px-4  py-5 focus:outline-none border border-gray-200 rounded-md w-3/6"
                            placeholder="Email address"
                        />
                        <button className="bg-site_blue text-white px-4 py-5 rounded-md w-2/6 ml-3">
                            Get started
                        </button>
                    </div>

                    <p className="text-xs text-site_blue underline">
                        * Terms apply
                    </p>
                </div>
            </div>
            <div>
                <Phoneimg className="w-3/4 mx-auto pt-16" />
            </div>
        </div>
    );
};

export default Phone;
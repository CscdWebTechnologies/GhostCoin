import btcLogo from  "../Resources/btc.png";
import eth from  "../Resources/eth.png";
import bch from  "../Resources/bch.png";
import ltc from  "../Resources/ltc.png";
import graph from "../Resources/snipper.png";


        

const Table = () => {
    return (
        <div className="max-w-5xl flex flex-col mx-auto w-full">
            <div className="border border-gray-200 px-10 rounded-md">
                <table className="divide-y divide-gray-200 w-full">
                    <thead>
                        <tr>
                            <th className="py-5 font-normal text-gray-400 text-left">
                                #
                            </th>
                            <th className="py-5 pl-10 font-normal text-gray-400 text-left">
                                Name
                            </th>
                            <th className="py-5 font-normal text-gray-400 text-left">
                                Price
                            </th>
                            <th className="py-5 font-normal text-gray-400 text-left">
                                Change
                            </th>
                            <th className="py-5 font-normal text-gray-400 text-left">
                                Chart
                            </th>
                            <th className="py-5 font-normal text-gray-400 text-left">
                                Trade   
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    <tr>
            <td>1</td>
            <td>
                <div className="flex items-center space-x-4 ml-10">
                    <div className="flex-shrink-0">
                        <img src={btcLogo} className="h-10 w-10" />
                    </div>

                    <div>
                        <p className="text-lg text-black">Bitcoin</p>
                    </div>

                    <div>
                        <p className="text-lg text-gray-400" >BTC</p>
                    </div>
                </div>
            </td>
            <td>GHS 241,456.66</td>
            <td>
                <p className="text-site_green">+12.50%</p>
            </td>
            <td>
                <img src={graph} />
            </td>
            <td>
                <button className="bg-site_green px-3 py-2 text-white rounded-md">
                    Buy
                </button>
            </td>
        </tr>

        <tr>
            <td>2</td>
            <td>
                <div className="flex items-center space-x-4 ml-10">
                    <div className="flex-shrink-0">
                        <img src={eth} className="h-10 w-10" />
                    </div>

                    <div>
                        <p className="text-lg text-black">Ethereum</p>
                    </div>

                    <div>
                        <p className="text-lg text-gray-400">ETH</p>
                    </div>
                </div>
            </td>
            <td>GHS 16,895.12</td>
            <td>
                <p className="text-site_green">+10%</p>
            </td>
            <td>
                <img src={graph} />
            </td>
            <td>
                <button className="bg-site_green px-3 py-2 text-white rounded-md">
                    Buy
                </button>
            </td>
        </tr>

        <tr>
            <td>3</td>
            <td>
                <div className="flex items-center space-x-4 ml-10">
                    <div className="flex-shrink-0">
                        <img src={bch} className="h-10 w-10" />
                    </div>

                    <div>
                        <p className="text-lg text-black">Bitcoin Cash</p>
                    </div>

                    <div>
                        <p className="text-lg text-gray-400"p>BCH</p>
                    </div>
                </div>
            </td>
            <td>GHS 4,941.93</td>
            <td>
                <p className="text-site_green">+20.92%</p>
            </td>
            <td>
                <img src={graph} />
            </td>
            <td>
                <button className="bg-site_green px-3 py-2 text-white rounded-md">
                    Buy
                </button>
            </td>
        </tr>

        <tr>
            <td>4</td>
            <td>
                <div className="flex items-center space-x-4 ml-10">
                    <div className="flex-shrink-0">
                        <img src={ltc} className="h-10 w-10" />
                    </div>

                    <div>
                        <p className="text-lg text-black">Litecoin</p>
                    </div>

                    <div>
                        <p className="text-lg text-gray-400">LTC</p>
                    </div>
                </div>
            </td>
            <td>GHS 1,289.15</td>
            <td>
                <p className="text-site_green">+11.63%</p>
            </td>
            <td>
                <img src={graph} />
            </td>
            <td>
                <button className="bg-site_green px-3 py-2 text-white rounded-md">
                    Buy
                </button>
            </td>
        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );    
};

export default Table;
import TittleBanner from '../Components/TitleBanner/TittleBanner';

const AppliedJobs = () => {
    return (
        <div>
            <TittleBanner>Applied Job List</TittleBanner>
            <div className="container">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="flex">
                        <div className="w-1/3">
                            <img src="{imageUrl}" alt="Product" className="object-cover h-full w-full" />
                        </div>
                        <div className="p-4 flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Lorem ipsum dolor sit.</h3>
                                <p className="text-sm text-gray-500 mb-1">subheading</p>
                                <p className="text-sm text-gray-500 mb-1">subheading</p>
                                <p className="text-sm text-gray-500 mb-1">subheading</p>
                            </div>
                            <button className="py-2 px-4 rounded-lg text-white bg-gradient-to-r from-indigo-400 to-purple-500 hover:from-indigo-500 hover:to-purple-600 focus:outline-none">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;
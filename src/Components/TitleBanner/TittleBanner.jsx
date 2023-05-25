/* eslint-disable react/prop-types */

const TittleBanner = ({children}) => {
    return (
        <div>
            <div className=" w-full bg-image bg-image-bottom bg-gray-100 h-48 flex items-center justify-center">
                <div className="bg-primary-dark-op ">
                    <h2 className="text-4xl font-bold">{children}</h2>
                </div>
            </div>
        </div>
    );
};

export default TittleBanner;
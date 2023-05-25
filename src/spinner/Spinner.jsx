
const Spinner = () => {
    return (
        <div className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50 `}>
            <div className="w-12 h-12 border-4 border-white border-t-[#aaaaaa] rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;
/* eslint-disable react/prop-types */
const Faq = ({ faqs }) => {
    return (
        <div className="py-10">
            <div className="py-5">
                <h2 className="text-3xl font-bold text-center py-4">FAQ</h2>
                <hr className=" w-12 mx-auto mb-10 font-bold border-none h-1 bg-indigo-600" />
            </div>
            <div className="faq-container">
                {faqs.map((faq, index) => <FaqWedget faq={faq} key={index} />)}
            </div>
        </div>
    );
};

const FaqWedget = ({ faq }) => {
    const { question, answer } = faq
    return (
        <div className="max-w-3xl mx-auto">
            <details className="bg-white rounded-lg shadow-lg mb-4">
                <summary className="py-4 px-6 bg-indigo-200 rounded-lg cursor-pointer focus:outline-none transition duration-1000 ease-in-out">
                    <span className="font-bold">{question}</span>
                </summary>
                <div className="p-6">
                    <p>
                        {answer}
                    </p>
                </div>
            </details>
        </div>
    );
}

export default Faq;
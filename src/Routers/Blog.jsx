import Faq from '../Components/FAQ/FAQ';
import TittleBanner from '../Components/TitleBanner/TittleBanner';

const Blog = () => {
    const faqs = {
        "questions": [
            {
                "id": 1,
                "question": "When should you use context API?",
                "answer": "Context API is useful when you want to share data between components without explicitly passing props through each level of the component tree. It is commonly used for managing global state, such as user authentication, theme, or language preferences. Context API provides a way to create a context object that can be accessed by any component within its tree."
            },
            {
                "id": 2,
                "question": "What is a custom hook?",
                "answer": "A custom hook is a JavaScript function that starts with the prefix 'use' and allows you to reuse stateful logic in functional components. It enables you to extract component logic into reusable functions, making it easier to manage and share code across different components. Custom hooks can encapsulate complex logic, handle side effects, or abstract common patterns to make the code more modular and reusable."
            },
            {
                "id": 3,
                "question": "What is useRef?",
                "answer": "useRef is a hook provided by React that allows you to create a mutable value that persists across component renders. It returns a mutable ref object that can hold a value, similar to instance variables in class components. useRef is commonly used to access or store references to DOM elements, manage focus, or preserve values between renders without triggering a re-render."
            },
            {
                "id": 4,
                "question": "What is useMemo?",
                "answer": "useMemo is a hook provided by React that allows you to memoize the result of a function or an expensive computation. It helps optimize performance by avoiding unnecessary re-computations. useMemo takes a function and a dependency array as arguments. The function is only re-evaluated if any of the dependencies change. It returns the memoized value that can be used in your component."
            }
        ]
    };

    return (
        <div>
            <TittleBanner>Blog Page</TittleBanner>
            <Faq faqs={faqs.questions} />
        </div>
    );
};

export default Blog;
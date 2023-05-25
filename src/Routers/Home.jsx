import { useEffect, useState } from 'react';
import banner from '../assets/All Images/P3OLGJ1 copy 1.png'
import Category from '../Components/Category/Category';
import Feature from '../Components/Feature/Feature';

const Home = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('catgory.json')
            .then(res => res.json())
            .then(data => setCategories(data.categories))
            .catch(err => alert(err))
    }, [])

    // const detailsHandaler = (job) => {
    //     console.log(job);
    // }
    return (
        <div>
            <div className="bg-gray-50">
                <div className="container mx-auto pt-7 px-4 flex-col-reverse sm:flex-row flex items-center justify-between">
                    <div className="max-w">
                        <h1 className="text-4xl mt-4 md:mt-0 md:text-6xl font-bold text-gray-800">
                            One Step <br /> Closer To Your <br /> <span className='text-transparent bg-gradient-to-r bg-clip-text from-indigo-400 to-purple-500'>Dream Job</span>
                        </h1>
                        <p className="mt-4 text-sm md:text-lg text-gray-600">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            Get Started
                        </button>
                    </div>
                    <div className='flex flex-col'>
                        <img className="w-4/5 md:w-5/5 h-auto mx-auto" src={banner} alt="Banner Image" />
                    </div>
                </div>
            </div>
            {/* job category list */}
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold text-center text-gray-800">Job Categories</h2>
                <p className='text-sm text-gray-400 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-4 mt-10">
                    {categories.map((cate) => <Category key={Math.random()} cat={cate} />)}
                </div>
            </div>
            {/* jobs list */}
            <div id='apply'>
                <Feature />
            </div>
        </div>
    );
};

export default Home;
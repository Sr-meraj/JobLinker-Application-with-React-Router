/* eslint-disable react/prop-types */
const Category = ({cat}) => {
    return (
        <div className="bg-purple-50 hover:bg-purple-100 rounded-xl p-8 cursor-pointer">
            <img src={cat.category_logo} alt="" className="bg-purple-200 rounded p-2"/>
            <h3 className="text-2xl font-bold mt-4">{cat.category_name}</h3>
            <p>{cat.jobs_available} Jobs Available</p>
        </div>
    );
};

export default Category;
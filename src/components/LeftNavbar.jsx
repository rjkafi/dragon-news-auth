import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNavbar = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])

    // {
    //     "category_id": "02",
    //     "category_name": "Regular News"
    // }
    
    return (
        <div>
            <h3 className="text-xl font-semibold ml-3">All Category</h3>
            <div className="flex flex-col space-y-3 mt-5">
                {
                 categories.map( category => <NavLink to={`/category/${category.category_id}`}
                    className="btn bg-base-100 border-none"
                    key={category.category_id}>{category.category_name}</NavLink>)   
                }
            </div>
        </div>
    );
};

export default LeftNavbar;
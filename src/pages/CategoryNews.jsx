import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data:news} = useLoaderData();
    console.log(news);
    return (
        <div>
            <h4 className="text-xl font-semibold ml-5 mb-5">Dragon News Home</h4>
            
            <div>
                {
                 news.map(singleNews => <NewsCard key={singleNews._id}
                 news={singleNews}
                 ></NewsCard> )   
                }
            </div>
        </div>
    );
};

export default CategoryNews;
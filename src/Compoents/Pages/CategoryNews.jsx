import { useLoaderData } from "react-router";
import News from "../News/News";

const CategoryNews = () => {
    const {data} = useLoaderData();
    console.log(data);
    return (
        <div className="">
           <h2 className="font-semibold mb-3">Dragon News Home</h2>
         <p className="text-gray-400 text-sm">{data.length} News found Category</p>      
        {
            data.map((singleNews) => (<News key={singleNews._id} data={singleNews}></News>))
        }
        </div>
    );
};

export default CategoryNews;
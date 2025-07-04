import { Link, useLoaderData } from "react-router";
import Header from "../Head/Header";
import RightNavbar from "../Navbar/RightNavbar";
import Navbar from "../Navbar/Navbar";


const ReadNews = () => {
    const data = useLoaderData();
    const news = data.data[0];
    return (
        <div>
            <header>
            <Header></Header>
            </header>
            
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
            <section className="col-span-9">
              <h2 className="font-bold text-2xl ">Dragon News</h2>
              <div className="card bg-base-100 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src= {news?.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{news?.title}</h2>
    <p>{news?.details}</p>
    <div className="card-actions">
      <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back to Category</Link>
    </div>
  </div>
</div>
            </section>
            <aside className="col-span-3">
                <RightNavbar></RightNavbar>
            </aside>
            </main>

        </div>
    );
};

export default ReadNews;
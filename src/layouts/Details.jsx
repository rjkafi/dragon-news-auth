import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavBar from "../components/RightNavBar";


const Details = () => {
    const data = useLoaderData();
    const news=data.data[0];
    console.log(news)
    return (
        <div>
           <header>
           <Header></Header> 
           </header>
           <main className="w-11/12 mx-auto grid grid-cols-12 gap-3">
           <section className="col-span-9">
           <div className="card bg-base-100  border rounded-md">
  <figure>
    <img
    className="w-full bg-cover"
      src={news.image_url}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{news.title}</h2>
    <p>{news.details}</p>
    <div className="card-actions justify-start">
      <button className="btn bg-purple-600">All news in this category</button>
    </div>
  </div>
</div>
           </section>
          <aside className="col-span-3">
          <RightNavBar></RightNavBar>
          </aside>
           </main>
        </div>
    );
};

export default Details;
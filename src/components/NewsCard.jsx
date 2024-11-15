

import { FaStar, FaEye, FaRegBookmark } from 'react-icons/fa';
import { IoShareSocialSharp } from 'react-icons/io5';


const NewsCard = ({ news }) => {
  const { author, title, published_date, rating, thumbnail_url, details, total_view } = news;

  return (
    <div className="border border-gray-300 rounded-lg p-2 shadow-md w-full max-w-md mx-auto">
     <div className='bg-gray-300 p-3 rounded-md flex justify-between items-center'>
     <div className="flex items-center gap-4 ">
        <img
          src={author.img}
          alt="Author"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div >
          <h2 className="text-lg font-semibold">{author.name || 'Unknown Author'}</h2>
          <p className="text-gray-500 text-sm">{author.published_date}</p>
        </div>
      </div>
      <div className='flex gap-2'>
        <FaRegBookmark></FaRegBookmark>
        <IoShareSocialSharp></IoShareSocialSharp>

      </div>
      
     </div>
    <div className='p-3'>
    <h3 className="text-xl font-bold mt-4">{title}</h3>

<img
  src={thumbnail_url}
  alt="Thumbnail"
  className="w-full h-52 object-cover rounded-lg mt-4 "
/>

<p className="text-gray-600 mt-2 text-sm line-clamp-3">
  {details}
  <span className="text-blue-500 cursor-pointer ml-1">Read More</span>
</p>

<hr className='mt-5' />

<div className="flex justify-between items-center mt-4">
  <div className="flex items-center">
    <FaStar className="text-yellow-500" />
    <span className="ml-1 font-medium">{rating.number}</span>
  </div>
  <div className="flex items-center text-gray-500">
    <FaEye className="mr-1" />
    <span>{total_view || 'N/A'}</span>
  </div>
</div>

    </div>
      
    </div>
  );
};

export default NewsCard;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import axios from "axios";

import { FaArrowLeft, FaTrashAlt } from "react-icons/fa";
import Title from "../components/Title";


const PostDetailPage = () => {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();


  const fetchPost = () => {
    axios.get(`${baseApiUrl}/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err));
  }

  const handleDeletePost = () => {
    axios.delete(`${baseApiUrl}/posts/${id}`)
      .then(res => navigate('/posts'))
      .catch(err => console.error(err));
  }

  useEffect(fetchPost, []);

  return (
    <>
      <div className="text-3xl flex justify-between py-4">
        <FaArrowLeft
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <FaTrashAlt
          className="text-2xl cursor-pointer"
          onClick={handleDeletePost}
        />
      </div>
      <img src={post?.image} alt={post?.title} className="w-full" />
      <Title text={post?.title} />
      <p>{post?.content}</p>
      <ul className="flex gap-2 items-baseline py-2 flex-wrap">
        {post?.tags.map((tag, index) => (
          <li
            key={`tag-${index}`}
            className="bg-neutral-400 inline-block text-sm text-nowrap text-white px-2 py-1 rounded-full"
          >{tag}</li>
        ))}
      </ul>
    </>
  )
}

export default PostDetailPage
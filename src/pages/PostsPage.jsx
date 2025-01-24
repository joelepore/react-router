import { useEffect, useState } from "react";
import Title from "../components/Title"
import axios from "axios";
import PostCard from "../components/PostCard";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const PostsPage = () => {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();

  const fetchPosts = () => {
    axios.get(`${baseApiUrl}/posts`)
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }

  useEffect(fetchPosts, []);

  return (
    <section>
      <div className="flex justify-between items-center">
        <Title text="Tutti i post" />
        <Button text="Aggiungi un nuovo post" onClick={() => navigate('/nuovo-post')} />
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center">
        {posts?.map(post => (
          <PostCard
            key={post.id}
            data={post} />
        ))}
      </div>
    </section>
  )
}

export default PostsPage
import { useEffect, useState } from "react";
import Title from "../components/Title"
import axios from "axios";
import PostCard from "../components/PostCard";

const PostsPage = () => {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  const [posts, setPosts] = useState(null);

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
      <Title text="Tutti i post" />
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
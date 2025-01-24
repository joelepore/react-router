import { useNavigate } from "react-router-dom";

const PostCard = ({ data }) => {
  const { title, image, tags, id } = data;

  const navigate = useNavigate();

  return (
    <div
      className="grid grid-rows-subgrid row-span-3 max-w-72 p-4 border border-neutral-200 rounded-xl cursor-pointer hover:bg-neutral-100 transition"
      onClick={() => navigate(`/posts/${id}`)}
    >
      <h4 className="text-xl font-bold pt-4 pb-2">{title}</h4>
      <img
        className="w-full aspect-square object-cover max-w-72"
        src={image}
        alt={title}
      />
    </div>
  )
}

export default PostCard
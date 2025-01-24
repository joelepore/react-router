const PostCard = ({ data }) => {
  const { title, image, tags, slug } = data;

  return (
    <div className="grid grid-rows-subgrid row-span-3 max-w-72 p-4 border border-neutral-200 rounded-xl cursor-pointer hover:bg-neutral-100 transition">
      <h4 className="text-xl font-bold pt-4 pb-2">{title}</h4>
      <img
        className="w-full aspect-square object-cover max-w-72"
        src={image}
        alt={title}
      />
      <ul className="flex gap-2 items-baseline py-2 overflow-hidden">
        {tags.map((tag, index) => (
          <li
            key={`tag-${index}`}
            className="bg-neutral-400 inline-block text-sm text-nowrap text-white px-2 py-1 rounded-full"
          >{tag}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostCard
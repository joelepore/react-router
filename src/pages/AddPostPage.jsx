import { useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPostPage = () => {
  const initialFormData = {
    title: '',
    content: '',
    image: '',
    tags: '',
  }

  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const getSlug = (title) => {
    return title.toLowerCase().split(' ').join('-');
  }

  const getTagsArray = (tags) => {
    return tags.split(',').map(tag => tag.trim());
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const handleAddPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...formData,
      slug: getSlug(formData.title),
      tags: getTagsArray(formData.tags)
    }
    axios.post(`${baseApiUrl}/posts`, newPost)
      .then(res => navigate('/posts'))
      .catch(err => console.error(err));
  }

  return (
    <>
      <Title text="Aggiungi un nuovo post" />
      <form onSubmit={handleAddPost}>
        <div className="mb-4">
          <label htmlFor="input-title" className="block">Titolo</label>
          <input
            id="input-title"
            type="text"
            name="title"
            placeholder="inserisci il titolo"
            className="border border-neutral-200 py-2 px-4 rounded-xl w-full"
            onChange={handleChange}
            value={formData.title}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="input-content" className="block">Contenuto</label>
          <textarea
            id="input-content"
            name="content"
            placeholder="Inserisci il contenuto"
            className="border border-neutral-200 py-2 px-4 rounded-xl w-full"
            onChange={handleChange}
            value={formData.content}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="input-image" className="block">Immagine</label>
          <input
            id="input-image"
            type="text"
            name="image"
            placeholder="Inserisci l'URL dell'immagine"
            className="border border-neutral-200 py-2 px-4 rounded-xl w-full"
            onChange={handleChange}
            value={formData.image}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="input-tags" className="block">Tags (separati da virgola)</label>
          <input
            id="input-tags"
            type="text"
            name="tags"
            placeholder="Es. dolci, ricette vegetariane"
            className="border border-neutral-200 py-2 px-4 rounded-xl w-full"
            onChange={handleChange}
            value={formData.tags}
          />
        </div>
        <Button text="Aggiungi" />
      </form >
    </>
  )
}

export default AddPostPage
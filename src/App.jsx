import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import PostsPage from "./pages/PostsPage"
import AboutPage from "./pages/AboutPage"
import PostDetailPage from "./pages/PostDetailPage"
import AddPostPage from "./pages/AddPostPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/posts" Component={PostsPage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/posts/:id" Component={PostDetailPage} />
          <Route path="/nuovo-post" Component={AddPostPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
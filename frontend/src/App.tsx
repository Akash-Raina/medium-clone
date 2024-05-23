import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blog } from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
import { CreateBlog } from "./pages/CreateBlog"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/signin" element = {<Signin/>}/>
          <Route path="/blog/:id" element = {<Blog/>}/>
          <Route path= "/blogs" element = {<Blogs/>}/>
          <Route path="/create" element = {<CreateBlog/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

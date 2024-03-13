import Blogs from "./Components/blogs/blogs"
import Bookmark from "./Components/bookmark/bookmark"
import Header from "./Components/header"



function App() {

  return (
    <>
    <Header></Header>
    <div className="max-w-[1170px] mx-auto md:flex">
    <Blogs></Blogs>
    <Bookmark ></Bookmark>
    </div>
    </>
  )
}

export default App



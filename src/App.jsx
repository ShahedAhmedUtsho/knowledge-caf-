import { useState } from "react"
import Blogs from "./Components/blogs/blogs"
import Bookmark from "./Components/bookmark/bookmark"
import Header from "./Components/header"



function App() {
const [bookmarks,setBookmark] =useState([])
const handleBookmarkAdd = blog => {
  
 const newBookmarks = [...bookmarks , blog]
 setBookmark(newBookmarks)
  
}
const [readingTime,setReadingTime] =useState(0);


const handleMarkAsRead = (reading_time) =>{
 setReadingTime( parseInt(readingTime )+ parseInt(reading_time))
 console.log(readingTime)
}

  return (
    <>
    <Header></Header>
    <div className="max-w-[1170px] md:mx-auto mx-5 md:flex ">
    <Blogs handleBookmarkAdd={handleBookmarkAdd} handleMarkAsRead={handleMarkAsRead} ></Blogs>
    <Bookmark bookmarks={bookmarks} readingTime={readingTime} ></Bookmark>
    </div>
    </>
  )
}

export default App



import Bookmarkchild from '../bookmarkchild/bookmarkchild'
import PropTypes from 'prop-types'
const Bookmark = ({bookmarks,readingTime}) => {
    return (
        <div className=" md:w-1/3 ">
            
            <div className='min-h-20 border-[1px] border-[#6047EC] rounded-lg bg-[#6047EC1A] px-10 py-5 text-xl font-semibold text-[#6047EC] flex justify-center items-center'>
                <h2>Spent time on read : {readingTime} mins</h2>
            </div>
            <div className='bg-[#1111110D] p-7 mt-5 rounded-lg'>
            <h1 className='mb-5  text-2xl font-semibold text-[#111]'>bookmarked blogs: {bookmarks.length}</h1>
            
            
            {
                bookmarks.map((bookmark,index) => <Bookmarkchild key={index} bookmark={bookmark}></Bookmarkchild>)
            }

            </div>
           
        </div>
    );
};
Bookmark.propTypes={
    bookmarks:PropTypes.array
    

}
export default Bookmark;
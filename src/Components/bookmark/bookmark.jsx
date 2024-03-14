import Bookmarkchild from '../bookmarkchild/bookmarkchild'
import PropTypes from 'prop-types'
const Bookmark = ({bookmarks}) => {
    return (
        <div className="bg-[#1111110D] md:w-1/3 p-7">
            <h1 className='mb-5 text-2xl font-semibold text-[#111]'>bookmarked blogs: {bookmarks.length}</h1>
            
            
            {
                bookmarks.map((bookmark,index) => <Bookmarkchild key={index} bookmark={bookmark}></Bookmarkchild>)
            }

        </div>
    );
};
Bookmark.propTypes={
    bookmarks:PropTypes.array
    

}
export default Bookmark;
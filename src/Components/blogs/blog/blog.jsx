import PropTypes from 'prop-types';
import bookmarkSvg from '../../../img/Frame.svg'
const Blog = ({blog , handleBookmarkAdd,handleMarkAsRead}) => {
    const {title,cover_img,author_img,reading_time,author,posted_date,hashtags} = blog;
    
    
    return (
        <div className='border-b-[1px] mb-10'>
            
            <img src={cover_img} alt="" className='coverPic min-w-5 min-h-28 md:min-h-36 shadow-lg rounded-lg w-full max-h-96 object-cover' />
           
            
            <div className='min-h-24   flex justify-between items-center'>
                <div  className='flex items-center gap-3 '> 
                    <img src={author_img} alt="" className='p-1 w-14 h-14 border object-cover rounded-full' />
                <div className=''>
                    <h3 className='font-semibold text-2xl text-[#111] leading-9 '>{author}</h3>
                    <h6 className='text-base font-normal leading-6 text-[#11111199]'> {posted_date}</h6>
                </div>

                </div>
                <div  className='flex items-center  gap-2'>
                    <h3 className='text-xl font-normal text-[#11111199]'>{reading_time} read</h3>
                    
                    <button onClick={()=>{handleBookmarkAdd(blog)}}><img src={bookmarkSvg} alt="" /></button>

                </div>
            

            </div>
            <h3 className=' font-semibold text-4xl mb-6 '>{title}</h3>
           <div className="flex gap-2 mb-5" >
           

           {
            hashtags.map((tag ,index)  => <h3 key={index} className='text-xl font-normal text-[#11111199]'>{tag}</h3>)
           }

           </div>
           <button onClick={()=>{handleMarkAsRead()}}  className='border-[1px] border-black px-[1em] py-[0.5em] rounded-full mb-5 text-sm'>make as read</button>
         
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleBookmarkAdd:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;


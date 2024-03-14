import PropTypes from 'prop-types'

const Bookmarkchild = ({bookmark}) => {
    const {title} =  bookmark
    return (
        <div className='md:text-xl  min-h-20 bg-white p-5 rounded-lg my-3'>
            <h2>{title}</h2>
            
        </div>
    );
};
Bookmarkchild.propTypes ={
    bookmark: PropTypes.object
}
export default Bookmarkchild;
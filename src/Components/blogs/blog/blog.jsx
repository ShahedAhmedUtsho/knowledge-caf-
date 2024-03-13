import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title} = blog;
    
    return (
        <div>
            <h3>{title}</h3>
            
         
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired
}
export default Blog;


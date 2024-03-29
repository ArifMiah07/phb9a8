import PropTypes from 'prop-types';

const Blog = ({blogs}) => {
    return (
        <div className="blogs-container mx-auto max-w-2xl px-4 py-8">
      {/* <h2 className="text-3xl font-bold mb-8">Latest Blogs</h2> */}
        <div className="blog-card bg-white shadow-md rounded-lg mb-6 p-6">
          <h3 className="text-xl font-bold mb-2">{blogs.title}</h3>
          <p className="text-gray-600 mb-4">By {blogs.author} on {blogs.date}</p>
          <p className="mb-4">{blogs.content}</p>
          <div className="flex flex-wrap">
              <span className="flex gap-6 bg-gray-200 text-gray-700 px-4 py-3 rounded-[16px] text-sm mr-2 mb-2">{
                blogs.tags.map((tag, idx)=> <p key={idx}>#{tag}</p>)
              }</span>
          </div>
        </div>
    </div>
    );
};

Blog.propTypes = {
    blogs: PropTypes.object
}

export default Blog;
// Write your JS code here
import BlogItem from '../BlogItem/index'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="blog-list-container">
      {blogsList.map(each => (
        <BlogItem blogItem={each} key={each.id} />
      ))}
    </div>
  )
}
export default BlogList

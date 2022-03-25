// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem

  return (
    <div className="blog-item">
      <div className="title-date">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </div>
  )
}
export default BlogItem

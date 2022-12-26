import './posts.css'
import BLOGSDATA from '../../data/blogsData.js'

const Posts = () => {
  
  return (
    <div className='postsMain'>
      {BLOGSDATA.map((blogData)=>{ 
        return(       
          <div className='posts' key={blogData.id}>
            <img className='postsImg' src={blogData.image} alt="Post Image" />
            <div className="postsInfo">
                <div className="postsCats">
                    <span className="postsCat">Music</span>
                    <span className="postsCat">Life</span>
                </div>
                  <span className="postsTitle">{blogData.title}</span>
                  <hr />
                  <span className="postsDate">{blogData.time}o</span>
            </div>
            <p className='postsDesc'>{blogData.discription} </p>
          </div>
        )    
      })}        
    </div>
  )
}

export default Posts
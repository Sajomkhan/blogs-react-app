import './singlePost.css'
import singlePostImg from '../../assates/singlepost-img.jpg'

function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
          <img src={singlePostImg} alt="" />
          <h1 className='singlePostTitle'>
            Lorem insum dolor sit amet
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Ajom</b></span>
            <span className='singlePostDate'>1 hour ago</span>
          </div>
          <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque molestiae incidunt doloribus a velit. Placeat totam temporibus laborum possimus exercitationem iusto rerum, unde illo repellat repellendus, aliquam saepe sit dolorum, voluptatum magni? Eos natus saepe ipsum quaerat commodi assumenda in voluptates minus molestias. Ea voluptate, voluptas possimus sint rem soluta non accusamus magnam minus facilis laborum similique voluptates? Eum beatae corporis architecto explicabo vitae voluptatum debitis autem veniam magnam iusto molestias nostrum nemo animi, voluptate obcaecati quibusdam dolores, recusandae repellendus ex dolore repellat exercitationem placeat! Maiores, saepe architecto voluptatem minus culpa voluptatibus. Ipsam quibusdam officiis, voluptate aspernatur odio incidunt?</p>
        </div>
    </div>
  )
}

export default SinglePost
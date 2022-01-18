import { MoreVert } from '@material-ui/icons'
import './post.css'
import {Users} from '../../dummyData'

const Post = ({date,desc,photo,userId,comment,like}) => {

const user=Users.filter(u=>u.id===userId)
console.log(user);
//console.log(user[0].username);

  return (
    <div className="post">
      <div className="postWrapper">
          <div className="postTop">
              <div className="postTopLeft">
                  <img src={Users.filter(u=>u.id===userId)[0].profilePicture} alt="profile" className="postProfileImg" />
                  <span className="postUsername">{Users.filter(u=>u.id===userId)[0].username}</span>
                  <span className="postDate">{date}</span>
              </div>
              <div className="postTopRight">
                  <MoreVert/>
              </div>
          </div>
          <div className="postCenter">
              <span className="postText">
                  {desc}
              </span>
              <img src={photo} alt="" className='postImg'/>

          </div>
          <div className="postBottom">
              <div className="postBottomLeft">
                  <img className='likeIcon' src="assets/like.png" alt="" />
                  <img className='likeIcon' src="assets/heart.png" alt="" />
                  <span className="postLikeCounter">{like} people liked it</span>
              </div>
              <div className="postBottomRight">
                  <span className="postCommentText">{comment} Comments</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Post

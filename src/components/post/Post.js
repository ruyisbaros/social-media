import { MoreVert } from '@material-ui/icons'
import './post.css'
import { Users } from '../../dummyData'
import { useState } from 'react'

const Post = ({ post }) => {

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    /* const {date,desc,photo,userId,comment,like}=post */

    /* const user=Users.filter(u=>u.id===userId)
    console.log(user); */
    //console.log(user[0].username);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                            alt=""
                        />
                        <span className="postUsername">
                            {Users.filter((u) => u.id === post?.userId)[0].username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post.desc}
                    </span>
                    <img src={post.photo} alt="" className='postImg' />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="assets/like.png" alt="" onClick={likeHandler} />
                        <img className='likeIcon' src="assets/heart.png" alt="" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post

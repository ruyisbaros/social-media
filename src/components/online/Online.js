import './online.css'

const Online = ({profilePicture,username}) => {
  return (
   <li className="rightbarFriend">
           <div className="rightbarProfileImgContainer">
             <img src={profilePicture} alt="" className="rightbarProfileImg" />
             <span className='rightbarOnline'></span>
           </div>
           <span className="rightbarUsername">{username}</span>
         </li>
  )
}

export default Online

import './closeFriends.css'

const CloseFriends = ({profilePicture,username}) => {
  return (
    <li className="sidebarFriend">
            <img src={profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{username}</span>
          </li>
  )
}

export default CloseFriends

import './rightbar.css'

import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({ profile }) => {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="birthday" className='birthdayImg' />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have birtday today</span>
        </div>
        <img src="assets/ad.png" alt="reklam" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(user => (
            <Online key={user.id} {...user} />
          ))}

        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Stuttgart</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Istanbul</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/1.jpeg" alt="" />
            <span className="rightbarFollowingName">Jesica Alicie</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/2.jpeg" alt="" />
            <span className="rightbarFollowingName">Jesica Alicie</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/3.jpeg" alt="" />
            <span className="rightbarFollowingName">Jesica Alicie</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/4.jpeg" alt="" />
            <span className="rightbarFollowingName">Jesica Alicie</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/5.jpeg" alt="" />
            <span className="rightbarFollowingName">Jesica Alicie</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/6.jpeg" alt="" />
            <span className="rightbarFollowingName">Jesica Alicie</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar

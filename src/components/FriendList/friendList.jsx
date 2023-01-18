import css from "./friendList.module.css";

export const FriendList = ({ friends }) => {
  return (
  <ul className={css.friend_list}>
      {friends.map(friend => {
        return (
        <li className={css.item} key={friend.id} >
            <span className={friend.isOnline ? css.isOnline : css.status} >{friend.isOnline}</span>
  <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
  <p className={css.name}>{friend.name}</p>
</li>
          )
      })}
</ul>
    )
}
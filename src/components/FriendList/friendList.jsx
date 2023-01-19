import PropTypes from 'prop-types';
import css from "./friendList.module.css";
import { FriandsListItem } from "./FrendListItem/friandsListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriandsListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
</ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
  avatar:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired,
  id:PropTypes.number.isRequired
    })
  )
}


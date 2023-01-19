import PropTypes from 'prop-types';
import css from "./friandsListItem.module.css";

export const FriandsListItem = ({ isOnline, avatar, name }) => {
  return(<li className={css.item}>
            <span className={isOnline ? css.isOnline : css.status} >{isOnline}</span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>)

}

FriandsListItem.propTypes={
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
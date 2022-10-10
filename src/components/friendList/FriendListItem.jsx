import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item} >
      <span
        className={
          isOnline
            ? `${css.status} ${css.onLine}`
            : `${css.status} ${css.offLine}`
        }
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

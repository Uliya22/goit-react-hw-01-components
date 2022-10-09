import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.item} key={id}>
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
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

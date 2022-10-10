import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { RandomColor } from 'utilities/utilities';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}> 
      {title && <h2 className={css.title}> {title} </h2>}
      <ul className={css.statsList}>
        {stats.map(stat => (
          <li
            className={css.item}
            key={stat.id}
            style={{ backgroundColor: RandomColor() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  )
}


import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/scoreboard';

const cx = classNames.bind(styles);

const Card = ({players}) => {
  console.log(players);
  return (
    <div className={cx('scoreboard')}>
      <h3 className={cx('header')}>Vote count</h3>
      <ul className={cx('list')}>
        <PlayerSpace handholder={players.dealer} />
        <PlayerSpace handholder={players.user} />
      </ul>
    </div>
  )
}

Card.propTypes = {
  players: PropTypes.array.isRequired
};

export default Card;

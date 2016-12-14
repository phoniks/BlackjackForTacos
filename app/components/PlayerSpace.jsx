import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/scoreboard';

const cx = classNames.bind(styles);

const PlayerSpace = ({player, dealer}) => {
  const hand = (player) => {
    player.hand.cards.map( (card, key) => {
      return (
      <li className={cx('item')} key={key}>
        <span className={cx('topic')}>{card.rank}</span>
        <span className={cx('count')}>{card.suit}</span>
      </li>);
    })
  }
  return (
    <div>
      <div>Your Hand</div>
      {hand}
    </div>
  )
}


PlayerSpace.propTypes = {

}

export default PlayerSpace;

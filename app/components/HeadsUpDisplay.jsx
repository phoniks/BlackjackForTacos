import React, { PropTypes } from 'react';
import TopicItem from 'components/TopicItem';
import classNames from 'classnames/bind';
import styles from 'css/components/main-section';

const cx = classNames.bind(styles);

const HeadsUpDisplay = ({ topics, dealer, player }) => {
  const topicItems = topics.map((topic, key) => {
    return (
      <p>{topic.text}</p>
      );
  });

  return (
    <div>
      <p>You have {player.tacos} tacos!</p>
      <p>Your current bet is {player.bet} tacos.</p>
    </div>
  );
};

HeadsUpDisplay.propTypes = {
  topics: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired
};

export default HeadsUpDisplay;

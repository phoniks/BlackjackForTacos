import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import HeadsUpDisplay from 'components/HeadsUpDisplay';
import PlayerSpace from 'components/PlayerSpace'
import { createTopic, typing, incrementCount,
  decrementCount, destroyTopic } from 'actions/topics';
import { dealCards } from 'actions/players'
import styles from 'css/components/vote';

const cx = classNames.bind(styles);

class Game extends Component {

  onClick(){
    console.log('onclick dealCards');
    dealCards()
  }

  render() {

    const {newTopic, topics, players, typing, createTopic, destroyTopic,
      incrementCount, decrementCount, deck } = this.props;
    const Dealer = players.players.dealer
    const User = players.players.user
    console.log(this.props.players.players);
    return (
      <div className={cx('vote')}>
        <HeadsUpDisplay
          topics={topics}
          dealer={Dealer}
          player={User}/>
        <PlayerSpace
          player={User}
          dealer={Dealer}/>
        <Button onClick={this.onClick.bind(this)}>Default</Button>
      </div>
    );
  }
}

Game.propTypes = {
  topics: PropTypes.array.isRequired,
  typing: PropTypes.func.isRequired,
  createTopic: PropTypes.func.isRequired,
  destroyTopic: PropTypes.func.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  newTopic: PropTypes.string
};

function mapStateToProps(state) {
  return {
    topics: state.topic.topics,
    players: state.players,
    newTopic: state.topic.newTopic,
    deck: state.deck.deck.deck
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, { createTopic, typing, incrementCount, decrementCount, destroyTopic})(Game);

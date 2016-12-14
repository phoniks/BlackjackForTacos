import React, { Component, PropTypes } from 'react';
import Page from 'pages/Page';
import GameContainer from 'containers/Game';

class Play extends Component {
  render() {
    console.log('::play props::', this.props);
    return (
      <Page {...this.getMetaData()}>
        <GameContainer {...this.props} />
      </Page>
    );
  }

  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Vote | reactGo';
  }

  pageMeta() {
    return [
      { name: "description", content: "A reactGo example of a voting page" }
    ];
  }

  pageLink() {
    return [];
  }
}

export default Play;

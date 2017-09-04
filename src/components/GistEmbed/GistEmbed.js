import React, { Component } from 'react';
import PropTypes from 'prop-types';

// https://developer.zendesk.com/blog/rendering-to-iframes-in-react
function adjustHeightWhenComplete(myFrame, myDoc) {
  if (myDoc.readyState === 'complete') {
    let content_height =
      myFrame.contentWindow.document.documentElement.scrollHeight;
    myFrame.style.height = content_height + 'px';
  } else {
    // This will be continiously called until the iFrame is ready
    setTimeout(() => {
      adjustHeightWhenComplete(myFrame, myDoc);
    });
  }
}

class GistEmbed extends Component {
  static propTypes = {
    gistId: PropTypes.number.isRequired,
  };

  componentDidMount() {
    // Create an iframe, append it to this document where specified
    let gistFrame = document.createElement('iframe');
    gistFrame.setAttribute('width', '100%');
    gistFrame.id = 'gistFrame' + this.props.gistId;

    let zone = document.getElementById('gistZone' + this.props.gistId);
    zone.innerHTML = '';
    zone.appendChild(gistFrame);

    // Create the iframe's document

    let url = 'https://gist.github.com/' + this.props.gistId + '.js';
    let gistFrameHTML =
      '<html><body><script type="text/javascript" src=' +
      url +
      '></script></body></html>';

    // Set iframe's document with a trigger for this document to adjust the height
    var gistFrameDoc = gistFrame.document;

    if (gistFrame.contentDocument) {
      gistFrameDoc = gistFrame.contentDocument;
    } else if (gistFrame.contentWindow) {
      gistFrameDoc = gistFrame.contentWindow.document;
    }

    gistFrameDoc.open();
    gistFrameDoc.writeln(gistFrameHTML);
    gistFrameDoc.close();

    adjustHeightWhenComplete(gistFrame, gistFrameDoc);
  }

  render() {
    return <div id={`gistZone${this.props.gistId}`} />;
  }
}

export default GistEmbed;

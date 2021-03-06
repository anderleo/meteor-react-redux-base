import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Loading from 'client/components/common/loading';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { singlePage } = this.props;
    const { templateName, logoName, headTitle, sections } = singlePage.data;

    if (singlePage.status === 'pending') {
      return <Loading />;
    }

    return (
      <div>
        <Helmet title={headTitle} />
        {/* <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" data-target="#main-navbar" data-toggle="collapse" className="navbar-toggle collapsed">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="/">{logoName}</a>
                    </div>
                    <div className="collapse navbar-collapse" id="main-navbar">
                      <ul className="nav navbar-nav">
                        { sections.map((section) => this.renderHeader(section)) }
                      </ul>
                    </div>
                  </div>
                </nav> */}
        <div id={templateName}>
          {
            sections.length > 0 ?
            sections.map((section, index) => this.renderContent(section, index)) :
            <h3>No content...</h3>
          }
        </div>
      </div>
    );
  }

  renderHeader(section) {
    if (section.display) {
      if (section.name === 'footer') {
        return '';
      }
      return (
        <li key={section.name}><a href={`#${section.anchorName}`} style={styles.link}>{section.name}</a></li>
      );
    }
  }

  renderContent(section, index) {
    if (section.display) {
      return (
        <div id={section.anchorName} key={index}>
          <div dangerouslySetInnerHTML={{ __html: section.content }}>
          </div>
        </div>
      );
    }
  }
}

MainPage.propTypes = {
  singlePage: PropTypes.object
};

const styles = {
  section: {
    padding: '50px',
  },
  name: {
    textAlign: 'center',
  },
  link: {
    fontSize: '20px',
    textTransform: 'capitalize'
  }
};

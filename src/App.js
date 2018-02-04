import React from 'react';
import normalize from 'normalize.css/normalize.css';
import { injectGlobal } from 'styled-components';
import Container from './components/Container';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import WebView from './components/WebView';
const ipc = window.electronRequire('electron').ipcRenderer;

injectGlobal`
  ${normalize}
  body, html, #root {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
    padding: 0;
  }
`;

const DEFAULT_URL = 'https://www.google.com';

class App extends React.Component {
  /**
   * Default state.
   */
  state = {
    config: {
      menu: true,
      sites: []
    },
    title: '',
    url: DEFAULT_URL
  };

  /**
   * Listen on ipc rendered on mount.
   */
  componentDidMount() {
    ipc.on('config', (e, config) => {
      this.setState({
        config: config
      });
    });
  }

  /**
   * Render component.
   */
  render() {
    let { config, url } = this.state;
    const home = config.sites.filter(s => s.default).pop();

    if (home && url === DEFAULT_URL) {
      url = home.url;
    }

    return (
      <Container>
        <Sidebar
          items={config.sites}
          onClick={url => this.setState({ url })}
          open={config.menu}
        />
        <Topbar title={this.state.title} />
        <WebView
          url={url}
          onPageTitleUpdated={e => this.setState({ title: e.title })}
        />
      </Container>
    );
  }
}

export default App;

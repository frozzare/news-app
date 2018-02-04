import React from 'react';
import styled from 'styled-components';
import WebView from 'react-electron-web-view';

const Wrapper = styled.div`
  height: 100%;

  webview {
    margin-top: 25px;
    height: 100%;
  }
`;

export default ({ url, onPageTitleUpdated = null }) => (
  <Wrapper>
    <WebView
      style={{ height: '100%' }}
      src={url}
      plugins
      onPageTitleUpdated={onPageTitleUpdated}
    />
  </Wrapper>
);

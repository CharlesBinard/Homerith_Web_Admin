import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import App from 'next/app';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import { ApolloProvider } from 'react-apollo';
import TagManager from 'react-gtm-module';
import { ThemeProvider as SThemeProvider } from 'styled-components';
import CachePersistorContext from '../src/components/CachePersistorContext';
import theme from '../src/components/theme';
import Wrapper from '../src/components/Wrapper';
import initCachePersistor from '../src/lib/apollo/initCachePersistor';
import withApollo, { NextApolloAppProps } from '../src/lib/apollo/withApollo';
const tagManagerArgs = {
  gtmId: 'GTM-MQVMVH2',
};

class MyApp extends App<NextApolloAppProps> {
  constructor(props) {
    super(props);

    this.state = {
      persistor: null,
    };
  }

  componentDidMount(): void {
    const { apolloClient } = this.props;
    let persistor = {};
    if (apolloClient) {
      persistor = initCachePersistor(apolloClient.cache);
    }
    this.setState({ persistor });
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    TagManager.initialize(tagManagerArgs);
  }

  render(): ReactElement {
    const { Component, pageProps, apolloClient } = this.props;
    const { persistor }: any = this.state;
    return (
      <ApolloProvider client={apolloClient}>
        <Head>
          <title>Homerith</title>
        </Head>
        <SThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
              <CssBaseline />
              <CachePersistorContext.Provider value={persistor}>
                <Wrapper>
                  <Component {...pageProps} />
                </Wrapper>
              </CachePersistorContext.Provider>
            </StylesProvider>
          </ThemeProvider>
        </SThemeProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);

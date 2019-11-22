import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import App from 'next/app';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import { ApolloProvider } from 'react-apollo';
import TagManager from 'react-gtm-module';
import { ThemeProvider as SThemeProvider } from 'styled-components';
import theme from '../src/components/theme';
import Wrapper from '../src/components/Wrapper';
import withApollo, { NextApolloAppProps } from '../src/lib/apollo/withApollo';
import { AuthProvider } from '../src/lib/auth';
const tagManagerArgs = {
  gtmId: 'GTM-MQVMVH2',
};

class MyApp extends App<NextApolloAppProps> {
  public componentDidMount(): void {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    TagManager.initialize(tagManagerArgs);
  }

  public render(): ReactElement {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <Head>
            <title>Homerith</title>
          </Head>
          <SThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <StylesProvider injectFirst>
                <CssBaseline />
                <Wrapper>
                  <Component {...pageProps} />
                </Wrapper>
              </StylesProvider>
            </ThemeProvider>
          </SThemeProvider>
        </AuthProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);

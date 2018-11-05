import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';

export default function ConnectApp(store, history, theme) {
  return function ConntectedApp(App) {
    return class ProvidedApp extends Component {
      render () {
        return (
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <ConnectedRouter history={history}>
                <App />
              </ConnectedRouter>
            </Provider>
          </ThemeProvider>
        );
      }
    }
  };
}

import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Journal from './components/Journal';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <Journal />
      </MuiThemeProvider>
    );
  }
}

export default App;

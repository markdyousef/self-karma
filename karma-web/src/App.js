import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <div>Jello</div>
      </MuiThemeProvider>
    );
  }
}

export default App;

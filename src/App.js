import React, { Component } from 'react';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import globalStyles from 'styles/global';
import { theme } from 'styles/theme';
import CreditCheck from './scenes/CreditCheck';
import CardSelection from './scenes/CreditCheck/CardSelection';

injectGlobal(globalStyles);

class App extends Component {
  submit = values => console.log(values);
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <CardSelection />
          {/* <CreditCheck onSubmit={this.submit} /> */}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

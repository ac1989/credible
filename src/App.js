import React, { Component } from 'react';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import globalStyles from 'styles/global';
import { theme } from 'styles/theme';
import CreditCheck from './scenes/CreditCheck';

injectGlobal(globalStyles);

class App extends Component {
  submit = values => console.log(values);
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <CreditCheck onSubmit={this.submit} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

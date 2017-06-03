import React, { Component } from 'react';
import { Button, Container, Header, Icon} from 'semantic-ui-react'


import logo from './logo.svg';
import './App.css';




class App extends Component {





  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Titus A. John</h2>
        </div>
        <p className="App-intro">
          "Personal Website for Titus A John."
        </p>

        <div>

            <Button
              content='GitHub'
              href='https://github.com/titusaj'
              icon='github'
              labelPosition='left'
              size='medium'
            />


            <Button
              content='Email'
              href='https://react.semantic-ui.com'
              icon='mail outline'
              labelPosition='left'
              size='medium'
            />

            <Button
              content='LinkedIn'
              href='https://react.semantic-ui.com'
              icon='linkedin'
              labelPosition='left'
              size='medium'
            />

            <Button
              content='Facebook'
              href='https://react.semantic-ui.com'
              icon='facebook'
              labelPosition='left'
              size='medium'
            />

             <Icon name='home' size='small' />
        </div>


      </div>

    );
  }
}

export default App;

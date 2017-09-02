import React, { Component } from 'react';
import { Button, Container, Header, Icon, Divider, Image, Text} from 'semantic-ui-react'


import bridgePic from './BenFranklinBridge.jpg';
import profilePic from './profilePic.jpg'
import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <Container text>
            <Header as='h1' inverted>
               Hi Im Titus John

            </Header>
          </Container>

          <Image src={profilePic} size='small' shape='circular' centered/>

          <text style={{color: 'white',fontWeight: 'bold', fontSize: '20'}}>
          I live in Washington DC.
          I am intrested in deep learning and signal processing {"\n"}
          for biomedical applications
          </text>

        </div>

        <div className="App-buttons">

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
              href='https://www.linkedin.com/in/titus-a-john/'
              icon='linkedin'
              labelPosition='left'
              size='medium'
            />
          </div>

          <div className="App-bottom">
             <Divider horizontal inverted>Titus A. John 2017 </Divider>
          </div>







      </div>

    );
  }
}

export default App;

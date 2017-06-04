import React, { Component } from 'react';
import { Button, Container, Header, Icon, Divider, Image} from 'semantic-ui-react'


import bridgePic from './BenFranklinBridge.jpg';
import profilePic from './profilePic.png'
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <Image src={profilePic} size='small' shape='circular' centered/>

         <Container text>
           <Header as='h2'>
            "Hello, I'm Titus"
           </Header>




         </Container>

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
              href='https://react.semantic-ui.com'
              icon='linkedin'
              labelPosition='left'
              size='medium'
            />
          </div>



          <div className ="App-splash">
              <Image src={bridgePic} size='small' />

          </div>

          <div className="App-bottom">
             <Divider horizontal>Titus A. John 2017 </Divider>
          </div>



      </div>

    );
  }
}

export default App;

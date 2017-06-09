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
           <Header as='h2' inverted>
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

          <div className="App-bottom">
             <Divider horizontal inverted>Titus A. John 2017 </Divider>
          </div>


          <div className="App-splash">
            <Image
               style={{width: 1200,height: 500}}
              src={bridgePic}/>
          </div>





      </div>

    );
  }
}

export default App;

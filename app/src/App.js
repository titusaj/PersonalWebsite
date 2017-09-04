import React, { Component } from 'react';
import { Button, Container, Header, Icon, Divider, Image, List} from 'semantic-ui-react'


import bridgePic from './BenFranklinBridge.jpg';
import profilePic from './profilePic.jpg'
import entpMind from './entpMind.jpg'
import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <Container text>
            <Header as='h1' inverted>
               Titus A. John
            </Header>
          </Container>

          <Divider hidden />

          <Image src={profilePic} size='small' shape='circular' centered/>

          <Divider hidden/>

          <Header as='h2' inverted>About Me</Header>

          <text style={{color: 'white',fontWeight: 'bold', fontSize: '20'}}>
          <p>  I live in Washington DC.
            I am intrested in deep learning and signal processing {'\n'}
            for biomedical applications.</p>
          </text>



        </div>

        <div className="App-buttons">



            <Button
              content='GitHub'
              href='https://github.com/titusaj'
              icon='github'
              labelPosition='left'
              size='large'
            />


            <Button
              content='Email'
              href='mailto:titusaj92@gmail.com'
              icon='mail outline'
              labelPosition='left'
              size='large'
            />

            <Button
              content='LinkedIn'
              href='https://www.linkedin.com/in/titus-a-john/'
              icon='linkedin'
              labelPosition='left'
              size='large'
            />
          </div>

          <div className="App-projects">

              <Header as='h1' centered>
                  Projects
              </Header>

             <Divider clearing/>
          </div>

          <div className="App-readingList">

                <Header as='h1' centered>
                   Reading List
                </Header>

                <List size='medium'>
                  <List.Content>
                    <List.Header as='a'>Mind of a Entrepreneur</List.Header>
                  </List.Content>

                  <Image src={entpMind} size='small' centered/>
                </List>

             <Divider clearing/>
          </div>

          <div className="App-bottom">
             <Divider horizontal inverted>Titus A. John 2017 </Divider>
          </div>







      </div>

    );
  }
}

export default App;

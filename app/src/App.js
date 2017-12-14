import React, { Component } from 'react';
import { Button, Container, Header, Icon, Divider, Image, List} from 'semantic-ui-react'


import bridgePic from './BenFranklinBridge.jpg';
import profilePic from './Dubai.jpg'
import entpMind from './entpMind.jpg'
import deepLearning from './deepLearning.jpg'
import hitRefresh from './hitRefresh.jpg'
import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="App-header">


        </div>

        <div className="App-splash">

          <Container text>
            <Header as='h1'>
               Titus  John
            </Header>
          </Container>

          <Divider hidden />

          <Image src={profilePic} size='large' centered/>

          <Divider hidden/>

          <Header as='h2'>About Me</Header>

          <text style={{color: 'black',fontWeight: 'bold', fontSize: '20'}}>
          <p>  I live in Washington DC.
            I am interested in deep learning, computer vision, and signal processing {'\n'}
            for biomedical applications.</p>
          </text>



        </div>

        <div className="App-buttons">



            <Button
              content='GitHub'
              href='https://github.com/titusaj'
              icon='github'
              labelPosition='left'
              size='big'
              color = 'purple'
            />


            <Button
              content='Email'
              href='mailto:titusaj92@gmail.com'
              icon='mail outline'
              labelPosition='left'
              size='big'
              color = 'red'
            />

            <Divider hidden/>

            <Button
              content='LinkedIn'
              href='https://www.linkedin.com/in/titus-a-john/'
              icon='linkedin'
              labelPosition='left'
              size='big'
              color = 'blue'
            />

          
          </div>

          <div className="App-projects">

              <Header as='h1' centered inverted>
                  Projects
              </Header>

             <Divider clearing/>
          </div>

          <div className="App-readingList">

                <Header as='h1' centered>
                   Reading List
                </Header>

            <Divider clearing/>

                <List>
                  <List.Content>
                        <List.Item>
                          <text style={{color: 'black',fontWeight: 'bold', fontSize: '18'}}>
                            Mind of a Entrepreneur
                          </text>
                        </List.Item>


                      <Divider hidden />
                      <Image src={entpMind} size='small' centered/>

                      <Divider hidden />

                      <List.Item>
                        <text style={{color: 'black',fontWeight: 'bold', fontSize: '18'}}>
                          Deep Learning
                        </text>
                      </List.Item>


                        <Divider hidden />
                        <Image src={deepLearning} size='small' centered/>

                        <Divider hidden />

                      <List.Item>
                        <text style={{color: 'black',fontWeight: 'bold', fontSize: '18'}}>
                          Hit Refresh
                        </text>
                      </List.Item>

                      <Divider hidden />
                      <Image src={hitRefresh} size='small' centered/>
                  </List.Content>

                </List>


          </div>

          <div className="App-bottom">
             <Divider horizontal inverted>Titus A. John 2017 </Divider>
          </div>


      </div>

    );
  }
}

export default App;

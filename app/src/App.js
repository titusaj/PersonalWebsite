import React, { Component } from 'react';
import { Button, Container, Header, Icon, Divider, Image, List, Grid, Column} from 'semantic-ui-react'


import bridgePic from './BenFranklinBridge.jpg';
import profilePic from './Dubai.jpg'
import entpMind from './entpMind.jpg'
import deepLearning from './deepLearning.jpg'
import hitRefresh from './hitRefresh.jpg'
import artStart from './art_start.jpeg'
import coverImage from './purple-nebula.jpg'
import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="App-header">
            <div class="ui page grid">
                <div class="column">
                    <h1 class="ui title-header">
                    </h1>
                    <div class="centered grid slogan">
                        <div class="column">

                          <Divider hidden/>
                          <Divider hidden/>
                          <Divider hidden/>
                          <Divider hidden/>

                        <text style={{color: 'white', fontSize: '50'}}>
                            Titus  John
                         </text>
                        <Divider hidden/>

                         <text style={{color: 'white', fontSize: '30'}}>
                         <p> I work with deep learning, computer vision, {'\n'} and signal processing
                           on biomedical applications.</p>
                         </text>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="App-splash">
          <Divider hidden />



          <Divider hidden/>

          <Header as='h2'>About Me</Header>
          <Divider clearing/>


          <text style={{color: 'black', fontSize: '20'}}>
          <p> I live in Washington DC. I am from North Carolina.
          I studied engineering at NC State University (Undergraduate) and the University of Michigan (Graduate)
          </p>
          </text>

          <Divider hidden/>

          <Image src={profilePic} size='large' centered/>
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
                      <Divider hidden />

                      <List.Item>
                        <text style={{color: 'black',fontWeight: 'bold', fontSize: '18'}}>
                          Art of Start 2.0
                        </text>
                      </List.Item>

                      <Divider hidden />
                          <Image src={artStart} size='small' centered/>
                      <Divider hidden />
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

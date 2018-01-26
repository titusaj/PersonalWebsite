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

                        <text style={{color: 'white', fontSize: '70'}}>
                            Titus  John
                         </text>
                        <Divider hidden/>
                        <Divider hidden/>

                         <text style={{color: 'white', fontSize: '35'}}>
                         <p> I apply deep learning, computer vision, {'\n'} and signal processing
                           tools to biomedical problems.</p>
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

            <Button
              content='Resume'
              href='https://www.linkedin.com/in/titus-a-john/'
              icon='file pdf outline'
              labelPosition='left'
              size='big'
              color = 'green'
            />


          </div>

          <div className="App-projects">

          </div>


          <div className="App-readingList">

                <Header as='h1' centered>
                   Reading List
                </Header>

            <Divider clearing/>
                <List horizontal>

                        <List.Item>
                          <Image src={entpMind} size='small' centered/>
                        </List.Item>


                      <List.Item>
                        <Image src={deepLearning} size='small' centered/>
                      </List.Item>


                      <List.Item>
                        <Image src={hitRefresh} size='small' centered/>
                     </List.Item>


                      <List.Item>
                          <Image src={artStart} size='small' centered/>
                      </List.Item>


                </List>


          </div>





          <div className="App-bottom">
             <Divider horizontal>Titus A. John 2018 </Divider>
          </div>


      </div>

    );
  }
}

export default App;

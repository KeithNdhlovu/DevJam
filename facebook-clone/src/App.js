import React from 'react'
import logo from './logo.svg'
import './styles/style.css'

import Navigation from './components/Navigation'
import Button from './components/Button'

function App() {
  
  return (
   <div id="content">
      <Navigation />
      <div class="header-container text-center">
          
          <div class="cover-image">
              <div class="profile-image"></div>
              <Button className="gray-button" title="Edit Cover Photo" />
          </div>
          
          <h2 class="username-text">Jakub Blasczykowski <span>(Keith Ndhlovu)</span></h2>
          <a class="bio-text" href="#">Add bio</a>
          
          <hr class="ruler"/>

          <div class="tabbed-items">
              <nav>
                  <ul>
                      <a class="active">Timeline</a>
                      <a>About</a>
                      <a>Friends (693)</a>
                      <a>Photos</a>
                      <a>Archive</a>
                      <div class="pull-right-contain">
                        <Button className="button">
                          {() => "Add Friend"}
                        </Button>
                      </div>
                      <div class="pull-right-contain">
                        <Button 
                          className="button" 
                          title="Delete Friend"/>
                      </div>
                      <div class="pull-right-contain">
                        <Button className="button" title="Chatbot"></Button>
                      </div>
                  </ul>
              </nav>
          </div>
      </div>
      <div class="content-area">
          <div>
              <h1>Content will be here</h1>
              {[1, 2, 3, 4, 5, 6, 7].map(number => (
                <Button className="button" title={"Faancy Button " + number} />
              ))}
          </div>
      </div>
   </div>
  )
}

export default App

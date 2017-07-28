import React, { Component } from 'react'
import nano from 'nano-component'
import ResponsiveEmbed from 'react-responsive-embed'

const Container = nano('div')({
  display: 'flex',
  minHeight: '100vh',
  flexFirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#000',
  fontFamily: 'sans-serif'
})

const Content = nano('div')({
  display: 'block',
  margin: '1rem',
  width: '90%',
  marginWidth: '50rem',
  textAlign: 'center'
})

const Title = nano('h1')({
  color: '#fff',
  fontSize: '1.2rem',
  marginBottom: '1rem'
})

class App extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Title>Follow NXTRI 2017 Live August 5 | 04.45 CEST</Title>
          <ResponsiveEmbed
            src='https://www.youtube.com/embed/videoseries?list=PLknsxNcA2Rgih8hO1uM73z_7WMioExhZk'
            allowFullScreen
          />
        </Content>
      </Container>
    );
  }
}

export default App;

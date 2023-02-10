import React, { Component } from 'react'
import { colorPalette } from './Components/Assets/Colors'
import TextField from './Components/Element/TextField/TextField'
import Toolbar from './Components/Element/Toolbar/Toolbar'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <main id='parent_wrapper'>
        <section className='grid'>
          <Toolbar backgroundColor={colorPalette['Tea green']} foregroundColor={colorPalette['Dark green']}/>
          <TextField backgroundColor={colorPalette['']} foregroundColor={colorPalette['Dark green']}/>
        </section>
      </main>
    )
  }
}
// To design the Toolbar ->

import React, { Component } from 'react'
import { colorPalette } from './Components/Assets/Colors'
import TextField from './Components/Element/TextField/TextField'
import Toolbar from './Components/Element/Toolbar/Toolbar'
import './App.css'
import Nfile from './Components/Element/Toolbar/Dropdowns/File/NewFile/Nfile'
export default class App extends Component {
  render() {
    return (
      <main id='parent_wrapper' style={{height:"100vh"}}>
        <section className='grid' id='mainElements'>
          <Toolbar backgroundColor={colorPalette['Dark green']} foregroundColor={colorPalette['Tea green']}/>
          <TextField backgroundColor={colorPalette['Smoky black']} foregroundColor={colorPalette['Dark green']}/>
        </section>
        <Nfile backgroundColor={colorPalette['Dark green']}/>
      </main>
    )
  }
}
// To design the Toolbar ->

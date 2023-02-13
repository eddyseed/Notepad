import React, { Component } from 'react'
import { colorPalette } from './Components/Assets/Colors'
import TextField from './Components/Element/TextField/TextField'
import Toolbar from './Components/Element/Toolbar/Toolbar'
import './App.css'
import NewFileDialog from './Components/Element/Toolbar/Dropdowns/File/NewFile/NewFileDialog'
export default class App extends Component {
  render() {
    return (
      <main id='parent_wrapper' className='h-screen'>
        <section className='grid' id='mainElements'>
          <Toolbar hidden={false} backgroundColor={colorPalette['Blue-Black']} foregroundColor={colorPalette['Snow']} eID="toolBar"/>
          <TextField backgroundColor={colorPalette['Snow']} foregroundColor={colorPalette['Blue-Black']} eID="textfieldWrapper"/>
        </section>
        <NewFileDialog backgroundColor={colorPalette['Blue-Black']} foregroundColor={colorPalette.Snow} hidden={true}/>
      </main>
    )
  }
}
// To design the Toolbar ->

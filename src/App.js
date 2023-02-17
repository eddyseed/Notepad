import React, { Component } from 'react'
import { colorPalette } from './Components/Assets/Colors'
import TextField from './Components/Element/TextField/TextField'
import Toolbar from './Components/Element/Toolbar/Toolbar'
import './App.css'
import NewFileDialog from './Components/Element/Toolbar/Dropdowns/File/NewFile/NewFileDialog'
import SaveFile from './Components/Element/Toolbar/Dropdowns/File/SaveFile/SaveFile'
import OpenFile from './Components/Element/Toolbar/Dropdowns/File/OpenFile/OpenFile'
export default class App extends Component {
  render() {
    return (
      <main id='parent_wrapper' className='h-screen'>
        <section className='grid' id='mainElements'>
          <Toolbar hidden={false} backgroundColor={colorPalette['Blue-Black']} foregroundColor={colorPalette['Snow']} eID="toolBar"/>
          <TextField backgroundColor={colorPalette['Snow']} foregroundColor={colorPalette['Blue-Black']} eID="textfieldWrapper"/>
        </section>
        <NewFileDialog backgroundColor={`000`} hidden={true} title="Create New File"/>
        <SaveFile backgroundColor={'000'} hidden={true} title="Give your file a title"/>
        <OpenFile backgroundColor={'000'} hidden={true} title="Enter the title of the file"/>
      </main>
    )
  }
}
// To design the Toolbar ->

//React Elements
import React, { Component } from 'react'

//Stylesheet Imports
import './App.css'

//Custom Elements Imports
import TextField from './Components/Element/TextField/TextField'
import Toolbar from './Components/Element/Toolbar/Toolbar'
import NewFile from './Components/Element/Toolbar/Dropdowns/File/NewFile/NewFile'
import SaveFile from './Components/Element/Toolbar/Dropdowns/File/SaveFile/SaveFile'
import OpenFile from './Components/Element/Toolbar/Dropdowns/File/OpenFile/OpenFile'

export default class App extends Component {
  render() {
    return (
      <main id='parent_wrapper'>

        {/*Static Elements  */}
        <section id='mainElements'>
          <Toolbar hidden={false} eID="toolBar" />
          <TextField eID="textfieldWrapper" />
        </section>

        {/* Floating Elements */}
        <NewFile hidden={true} title="Create New File" />
        <OpenFile hidden={false} title="Choose the File" />
        <SaveFile hidden={true} title="Give your file a title" />

      </main>
    )
  }
}

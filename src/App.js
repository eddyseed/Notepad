import React, { Component } from 'react'
import Toolbar from './Elements/Toolbar/Toolbar'
import './App.css'
import TArea from './Elements/TextArea/TArea'
export default class App extends Component {
  render() {
    return (
      <div className={``} id='parent'>
        {/* <Toolbar height='16vh' background='#D6F8D6'/> */}
        <TArea height='90vh'/>
      </div>
    )   
  }
}

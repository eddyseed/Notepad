import React, { Component } from 'react'
import Editor from './Editor'
import MainMenu from './MainMenu'
import './style.css'
// const content = document.getElementById("mainMenu").innerHTML
export default class TArea extends Component {
  toggleMenu = () => {
    let menu = document.getElementById("mainMenu")
    if (menu.classList.contains("flex")) { menu.classList.remove('flex'); menu.classList.add('hidden') } else { menu.classList.remove('hidden'); menu.classList.add('flex'); }
  }
  render() {
    return (
      <>
        <MainMenu background={this.props.primaryColor} trigger={this.toggleMenu} />
        <Editor height={this.props.height} background={this.props.primaryColor} trigger={this.toggleMenu} />
      </>
    )
  }
}

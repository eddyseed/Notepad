// React Node Elements
import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class NewFileDialog extends Component {
    static propTypes = {
        hidden: PropTypes.bool,
        eID: PropTypes.string,
        title: PropTypes.string
    }    
    static defaultProps = {
        hidden: true,
        title: "A basic window"
    }
    createTextFile = () => {
        let filename = document.getElementById('nFileNameField').value;
        Array.from(filename).forEach(character => {
            if (character === '.') {
                filename = ''
                alert("Full stops not allowed! As it may create problems in saving file!")
                localStorage.removeItem('.txt')
            } else {
                localStorage.setItem(`${filename}.txt`, '')
                this.formalities(filename + ".txt")
                this.closeDialog()
            }
        })
    }
    formalities = (a) => {
        let date = new Date();
        document.getElementById('fileName').innerHTML = a;
        document.getElementById('lastSavedDate').innerHTML = date.getHours().toString() + ":" + date.getMinutes().toString();
        document.title = `${a} | VNote`
    }
    closeDialog = () => {
        document.getElementById('newFileDialog').style.display = 'none'
    }
    render() {
        return (
            <div className={`${this.props.hidden ? 'hidden' : ''} absolute top-0 w-screen h-screen items-center justify-center select-none animate__animated animate__backInLeft`} id='newFileDialog'>
                <main className={`grid grid-flow-row h-[40vh] w-[40vw] rounded-xl`} style={{
                    gridTemplateRows: "1fr 2fr 1fr"
                }} id='newFileInnerWin'>
                    <section className='flex font-semibold text-2xl items-end px-12'>
                        <header>{this.props.title}</header>
                    </section>
                    <section className='flex justify-center'>
                        <input type="text" id="nFileNameField" className='h-2/5 w-10/12 rounded-md outline-none px-3 self-center ' placeholder='e.g. index.html' autoComplete='off' />
                    </section>
                    <section className='space-x-8 flex justify-end px-12 font-[500]'>
                        <button className="btn px-8 py-2 rounded-md h-3/5" onClick={this.closeDialog}>Cancel</button>
                        <button className="btn px-8 py-2 rounded-md h-3/5" onClick={this.createTextFile}>Create</button>
                    </section>
                </main>
            </div>
        )
    }
}

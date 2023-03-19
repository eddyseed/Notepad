import React, { Component } from 'react'
import PropTypes from 'prop-types'
let date = new Date();
export default class SaveFile extends Component {
    static propTypes = {
        hidden: PropTypes.bool,
        eID: PropTypes.string,
        title: PropTypes.string
    }
    static defaultProps = {
        hidden: false,
        title: "A basic window"
    }
    saveCurrentFile = () => {
        localStorage.setItem(document.getElementById('sFileNameField').value + '.txt', document.getElementById('textfield').value)
        this.formalities(document.getElementById('sFileNameField').value + '.txt')
        this.closeDialog()
    }
    formalities = (a) => {
        let date = new Date();
        document.getElementById('fileName').innerHTML = a;
        document.getElementById('lastSavedDate').innerHTML = date.getHours().toString() + ":" + date.getMinutes().toString();
        document.title = `${a} | VNote`
    }
    closeDialog = () => {
        document.getElementById('saveFileDialog').style.display = 'none'
    }
    render() {
        return (
            <div className={`${this.props.hidden ? 'hidden' : ''} absolute top-0 w-screen h-screen items-center justify-center select-none animate__animated animate__backInLeft`} id='saveFileDialog'>
                <main className={`grid grid-flow-row h-[40vh] w-[40vw] rounded-xl`} style={{
                    gridTemplateRows: "1fr 2fr 1fr"
                }}>
                    <section className='flex font-semibold text-2xl items-end px-12'>
                        <header>{this.props.title}</header>
                    </section>
                    <section className='flex justify-center'>
                        <input type="text" id="sFileNameField" className='h-2/5 w-10/12 rounded-md outline-none px-3 self-center' placeholder='e.g. index.html' autoComplete='off' />
                    </section>
                    <section className='space-x-8 flex justify-end px-12 font-[500]'>
                        <button className="btn px-8 py-2 rounded-md h-3/5" onClick={this.closeDialog}>Cancel</button>
                        <button className="btn px-8 py-2 rounded-md h-3/5" onClick={this.saveCurrentFile}>Create</button>
                    </section>
                </main>
            </div>
        )
    }
}

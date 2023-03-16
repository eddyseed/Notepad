import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class OpenFile extends Component {
    constructor() {
        super();
        this.state = {
            fileSelected: ""
        }
    }
    static propTypes = {
        hidden: PropTypes.bool,
        eID: PropTypes.string,
        title: PropTypes.string
    }
    static defaultProps = {
        hidden: false,
        title: "A basic window"
    }
    closeDialog = () => {
        document.getElementById('openFileDialog').style.display = 'none'
    }
    openTextFile = () => {

    }
    selectFile = (e) => {
        document.getElementById(e.target.parentElement.id).style.backgroundColor = '#a6b1e16e'
        let selectedFileIndex = Number(e.target.parentElement.id.replace('file_box_', ''))
        let selectedFile = e.target.innerText
        console.log(localStorage.key(selectedFileIndex - 1))
        for (let i = 1; i < document.getElementById(e.target.parentElement.id).childElementCount; i++) {
            if(i!==selectedFileIndex)
            document.getElementById(`file_box_${i}`).style.background = 'initial'
        }
    }
    render() {
        return (
            <div className={`${this.props.hidden ? 'hidden' : ''} absolute top-0 w-screen h-screen items-center justify-center select-none animate__animated animate__backInLeft`} id='openFileDialog'>
                <main className={`grid grid-flow-row h-[90vh] w-[40vw] rounded-xl`}>
                    <section className='flex font-semibold text-2xl items-end px-12'>
                        <header>{this.props.title}</header>
                    </section>
                    <section className='flex'>
                        <section className="mx-12 py-8 file_grid">
                            <div className='file_box' id='file_box_1' onClick={this.selectFile}>
                                <i className="fa-regular fa-file"></i>
                                <span className='file_x'>open.txt</span>
                                <i className="fa-regular fa-trash-can"></i>
                            </div>
                            <div className='file_box' id='file_box_2' onClick={this.selectFile}>
                                <i className="fa-regular fa-file"></i>
                                <span className='file_x'>open.txt</span>
                                <i className="fa-regular fa-trash-can"></i>
                            </div><div className='file_box' id='file_box_3' onClick={this.selectFile}>
                                <i className="fa-regular fa-file"></i>
                                <span className='file_x'>open.txt</span>
                                <i className="fa-regular fa-trash-can"></i>
                            </div>
                        </section>
                    </section>
                    <section className='space-x-8 flex justify-end px-12 font-[500]'>
                        <button className="btn px-8 py-2 rounded-md h-3/5" onClick={this.closeDialog}>Close</button>
                        <button className="btn px-8 py-2 rounded-md h-3/5" onClick={this.openTextFile}>Open</button>
                    </section>
                </main>
            </div>
        )
    }
}

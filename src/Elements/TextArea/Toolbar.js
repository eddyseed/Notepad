import React, { Component } from 'react'

export default class Toolbar extends Component {
    cutSelection = () => {
        navigator.clipboard.writeText(window.getSelection().toString())
        let newtext = document.getElementById('textarea').value.replace(window.getSelection().toString(), '')
        document.getElementById('textarea').value = newtext
    }
    pasteSelection = () => {
        navigator.clipboard.readText().then(txt => {
            document.getElementById('textarea').value += txt
        })
    }
    copySelection = () => {
        navigator.clipboard.writeText(window.getSelection().toString())
    }
    selectAll = () => {
        document.getElementById('textarea').select()
    }
    starFile = () => {
        if (document.getElementById('starfile').classList.contains('fa-regular'))
            document.getElementById('starfile').classList.replace('fa-regular', 'fa-solid')
        else
            document.getElementById('starfile').classList.replace('fa-solid', 'fa-regular')
    }
    render() {
        return (
            <section className={`select-none bg-[${this.props.primaryColor}] rounded-tl-xl rounded-tr-xl text-white grid grid-flow-col`}>
                <section className="text-2xl h-full flex items-center space-x-6 px-6 rounded-tl-xl rounded-tr-xl" id='toolbar-wrapper'>
                    <button onClick={this.props.Trigger}><span><i className="fa-solid fa-bars"></i></span></button>
                    <button onClick={this.cutSelection}>  <span><i className="fa-solid fa-scissors"></i></span></button>
                    <button onClick={this.copySelection}><span><i className="fa-regular fa-copy"></i></span></button>
                    <button onClick={this.pasteSelection}><span><i className="fa-solid fa-paste"></i></span></button>
                    <button onClick={this.selectAll}><span><i className="fa-solid fa-check"></i></span></button>
                    <span><i className="fa-solid fa-pipe"></i></span>
                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                    <button onClick={this.starFile}><span><i className="fa-regular fa-star" id='starfile'></i></span></button>
                    <span><i className="fa-solid fa-gear"></i></span>
                </section>
                <section className='flex items-center justify-end px-6'>
                    <span className='select-none' id='estimatedTimeSpan'>{}</span>
                </section>
            </section>
        )
    }
}

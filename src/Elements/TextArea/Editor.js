import React, { Component } from 'react'
import Toolbar from './Toolbar'

export default class Editor extends Component {
    state = {
        text: "",
        length: 0 
    }
    updateText = event => {
        this.setState = {
            text: event.target.value,
            length: event.target.value.length
        }
        document.getElementById('estimatedTimeSpan').innerText = event.target.value.length+" chars & " + String(Number(event.target.value.split(" ").length)) + " words"
    }
    render() {
        return (
            <section className='flex items-center h-screen justify-center'>
                <div className={`grid h-[${this.props.height}] w-4/5`} style={{
                    gridTemplateRows: "1fr 8fr"
                }}>
                    <Toolbar primaryColor={this.props.background} Trigger={this.props.trigger} />
                    <section>
                        <textarea id='textarea' onChange={this.updateText} className={`h-full w-full outline-none px-4 py-4 resize-none rounded-br-xl rounded-bl-xl`} placeholder='Type something boi...'></textarea>
                    </section>
                </div >
            </section >
        )
    }
}

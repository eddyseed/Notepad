import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class OpenFile extends Component {
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

    render() {
        return (
            <div className={`${this.props.hidden ? 'hidden' : ''} absolute top-0 w-screen h-screen items-center justify-center select-none animate__animated animate__backInLeft`} id='openFileDialog'>
                <main className={`grid grid-flow-row h-[90vh] w-[40vw] rounded-xl`}>
                    <section className='flex font-semibold text-2xl items-end px-12'>
                        <header>{this.props.title}</header>
                    </section>
                    <section className='flex'>
                        <section className="mx-12 py-8" id="file_grid">
                        </section>
                    </section>
                    <section className='space-x-8 flex justify-end px-12 font-[500]'>
                        <button className="btn px-8 py-2 rounded-md h-3/5" onClick={this.closeDialog}>Close</button>
                    </section>
                </main>
            </div>
        )
    }
}

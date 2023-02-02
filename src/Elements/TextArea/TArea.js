import React, { Component } from 'react'

export default class TArea extends Component {
  render() {
    return (
      <section className='flex items-center h-screen justify-center'>
        <div className={`grid h-[${this.props.height}] w-4/5`} style={{
          gridTemplateRows: "1fr 6fr"
        }}>
          <section className={`bg-[#381d2a] rounded-tl-xl rounded-tr-xl`}>
            <section className="text-2xl h-full flex items-center space-x-6 px-6 rounded-tl-xl rounded-tr-xl bg-[#000000a0] text-white" id='toolbar-wrapper'>
              <span><i className="fa-solid fa-bars"></i></span>
              <span><i className="fa-solid fa-scissors"></i></span>
              <span><i className="fa-regular fa-copy"></i></span>
              <span><i className="fa-solid fa-paste"></i></span>
              <span><i className="fa-solid fa-check"></i></span>
              <span><i className="fa-solid fa-pipe"></i></span>
              <span><i className="fa-solid fa-magnifying-glass"></i></span>
              <span><i className="fa-regular fa-star"></i></span>
              <span><i className="fa-solid fa-code"></i></span>
            </section>
          </section>
          <section>
            <textarea className={`h-full w-full outline-none px-4 py-4 resize-none rounded-br-xl rounded-bl-xl`} placeholder='Type something boi...'></textarea>
          </section>
        </div>
      </section>
    )
  }
}

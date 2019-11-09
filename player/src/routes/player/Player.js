import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { findDOMNode } from 'react-dom'
import { hot } from 'react-hot-loader'
import screenfull from 'screenfull'
import Cam3DVideo from '../../assets/Cam3D.mp4'
import BlackScreen from '../../assets/BlackScreen.mp4'

//import './style.css'

//<button ref="myButton" onClick={this.handleClickFullscreen}>Fullscreen</button>

class Player extends Component {
	constructor(props)
  {
    super(props);
    this.state = {
			url: BlackScreen,
			playing: true,
			controls: true,
			start: false,
		};

	}
	componentDidMount() {
		const button = this.refs.myButton;
		setTimeout(button.click(), 2000);
		
	}
	handleClickFullscreen = () => {
		if (screenfull.isEnabled) {
			screenfull.on('error', event => {
        console.error('Failed to enable fullscreen', event);
    	});
			screenfull.request(findDOMNode(this.player));
		}
	}

	ref = player => {
    this.player = player
  }
  render () {
		const { url, controls, playing} = this.state
    return (  
			<div className='app'>
        <section className='section'>
					<div style={{
									position: 'absolute', left: '50%', top: '50%',
									transform: 'translate(-50%, -50%)'
								}} 
								className='player-wrapper'
					>
						<ReactPlayer
							ref={this.ref}
							className='react-player'
							width='auto'
							height='auto'
							url={url}
              playing={playing}
							controls={controls}
						/>
					</div>
					<button ref="myButton" onClick={this.handleClickFullscreen}>Fullscreen</button>
				</section>
			</div>
		);
  }
}

export default hot(module)(Player);
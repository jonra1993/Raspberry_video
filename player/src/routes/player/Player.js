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
		const video = document.getElementById("myvideo");
		if (this.isFullScreenCurrently()){
			//this.goInFullscreen(video);  
		} 
		video.src = Cam3DVideo;
		setTimeout(function(){
			document.getElementById('myvideo').play();
		},1000);
    video.play();
	}
	handleClickFullscreen = () => {
		if (screenfull.isEnabled) {
			screenfull.on('error', event => {
        console.error('Failed to enable fullscreen', event);
    	});
			screenfull.request(findDOMNode(this.player));
		}
	}

	goInFullscreen = (element) => {
		if(element.requestFullscreen) element.requestFullscreen(); 
		else if(element.mozRequestFullScreen) element.mozRequestFullScreen();  
		else if(element.webkitRequestFullscreen) element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		else if(element.msRequestFullscreen) element.msRequestFullscreen();
	}

	isFullScreenCurrently = () =>{
		return (document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen);
	}

  render () {
		const { url, controls, playing} = this.state
    return (  
			<video controls id="myvideo" allowfullscreen >
				<source src={url}></source>
			</video>
		);
  }
}

export default hot(module)(Player);
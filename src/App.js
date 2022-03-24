import { Player } from 'bitmovin-player';
import { UIFactory } from 'bitmovin-player/bitmovinplayer-ui';
import 'bitmovin-player/bitmovinplayer-ui.css';
import React from 'react';
// import BitmovinPlayerControls from './BitmovinPlayerControls';
class BitmovinPlayer extends React.Component {
    // accountCode: "vivakuwait"
    state = {
        player: null,
    };
    playerConfig = {
      key: 'b7ef39d2-03a7-451b-a9e1-da3266fb6d4c',
      style: {
        aspectratio: '2:1'
      },
      tweaks : {
        file_protocol : true,
        app_id : "com.intigral.webtv"
      },
     playback: {
            autoplay: true
        },
    };
    playerSource = {
      dash: "https://uselector.cdn.intigral-ott.net/Titles/M0009446/M0009446.ism/manifest.mpd",
      drm: {
        widevine: {
          LA_URL: "https://wv.drm.intigral-ott.net:8063?deviceId=OGY4MWEyNTItYmIyYS0zZWY1LThmOTEtMGZjYjc4YTMzYjcy"
        },
      }
    };
    constructor(props) {
        super(props);
        this.playerDiv = React.createRef();
    }
    componentDidMount() {
      console.log("bitmovin poc")
         console.log("this.playerDiv.current", this.playerDiv.current)
        this.setupPlayer();
    }
    componentWillUnmount() {
        this.destroyPlayer();
    }
    setupPlayer() {
        const player = new Player(this.playerDiv.current, this.playerConfig);
        console.log("player", player);
        window.bitmovinPlayer = player;
        UIFactory.buildDefaultUI(player);
        player.load(this.playerSource).then(() => {
            this.setState({
                ...this.state,
                player
            });
            console.log('Successfully loaded source');
        }, () => {
            console.log('Error while loading source');
        });
    }
    playClick (){
        window.bitmovinPlayer.play()
    }
    pauseClick (){
        window.bitmovinPlayer.pause()
    }
    destroyPlayer() {
        if (this.state.player != null) {
            this.state.player.destroy();
            this.setState({
                ...this.state,
                player: null
            });
        }
    }
    render() {
        return (
        <>
        <div id='player' ref={this.playerDiv}/>
        </>
        )
    }
}
export default BitmovinPlayer;
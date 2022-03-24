import React from 'react';

class BitmovinPlayer extends React.Component {
  componentDidMount() {
    const conf = {
      key: 'b7ef39d2-03a7-451b-a9e1-da3266fb6d4c',
      style: {
        aspectratio: '2:1',
      },
      tweaks: {
        file_protocol: true,
        app_id: 'com.intigral.webtv',
      },
      buffer: {
        video: {
          forwardduration: 20,
          backwardduration: 10,
        },
        audio: {
          forwardduration: 20,
          backwardduration: 10,
        },
      },
      playback: {
        autoplay: true,
      },
      logs: {
        level: 'debug',
      },
    };

    console.log('test playback');

    const source = {
      dash: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
    };

    const playerContainer = document.getElementById('player-container');
    const player = new window.bitmovin.player.Player(playerContainer, conf);
    player.load(source);
    const playerInstance = window.bitmovin.player.PlayerEvent;
    const onError = (e) => {
      console.log('Player Error', e.name, e.code, e.type);
    };
    player.on(playerInstance.Error, onError);
  }

  render() {
    return (
      <>
        <div id="player-container" />
      </>
    );
  }
}
export default BitmovinPlayer;

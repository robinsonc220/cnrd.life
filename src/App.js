import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import C_LogoWhite from '/Users/ravenrosa/Desktop/Flatiron School/CNRD.LIFE/cnrd.life/src/Assets/C_LogoWhite.png';
import Spotify  from '/Users/ravenrosa/Desktop/Flatiron School/CNRD.LIFE/cnrd.life/src/Assets/Spotify.png'
import AppleMusic  from '/Users/ravenrosa/Desktop/Flatiron School/CNRD.LIFE/cnrd.life/src/Assets/AppleMusic.png'
import Tidal from '/Users/ravenrosa/Desktop/Flatiron School/CNRD.LIFE/cnrd.life/src/Assets/Tidal.png'
import SoundCloud from '/Users/ravenrosa/Desktop/Flatiron School/CNRD.LIFE/cnrd.life/src/Assets/SoundCloud.png'
import Youtube from '/Users/ravenrosa/Desktop/Flatiron School/CNRD.LIFE/cnrd.life/src/Assets/Youtube.png'
// import Instagram from '/Users/ravenrosa/Desktop/Flatiron School/CNRD.LIFE/cnrd.life/src/Assets/Instagram.png'
import GooglePlay from '/Users/ravenrosa/Desktop/Flatiron School/CNRD.LIFE/cnrd.life/src/Assets/GooglePlay.png'
import Amazon from '/Users/ravenrosa/Desktop/Flatiron School/CNRD.LIFE/cnrd.life/src/Assets/Amazon.png'
import Deezer from '/Users/ravenrosa/Desktop/Flatiron School/CNRD.LIFE/cnrd.life/src/Assets/Deezer.png'
import { Image, Divider, Icon, Menu } from 'semantic-ui-react'
import ReactRotatingText from 'react-rotating-text'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Divider hidden />
        <Image src={C_LogoWhite} size='small' />
        <Divider hidden />
        <h1> Stream <u><ReactRotatingText items={["Winners Circle", "20/20", "Rumors (feat. Grand Khai)"]}/></u> Now On ALL Platforms </h1>
        <Divider hidden />
        <center>
          <Image className="hvr-float-shadow" src={Spotify}  href='https://open.spotify.com/artist/1rVLg9qEelSud7Qs9uMHYU?si=RU0vtR_CSAObNGxXnpgDlA' target="_blank"/> 
          <Divider hidden />
          <Divider hidden />
          <Image className="hvr-float-shadow" src={AppleMusic}  href='https://music.apple.com/us/artist/cnrd/1487641398' target="_blank"/> 
          <Divider hidden />
          <Divider hidden />
          <Image className="hvr-float-shadow" src={Tidal}  href='https://tidal.com/artist/7645230' target="_blank"/> 
          <Divider hidden />
          <Divider hidden />
          <Image className="hvr-float-shadow" src={SoundCloud}  href='http://soundcloud.com/cnrd_wav' target="_blank"/>
          <Divider hidden />
          <Divider hidden />
          <Image className="hvr-float-shadow" src={Youtube}  href='https://www.youtube.com/channel/UCVjuL_86AgEpfTMIy_Y3lyA' target="_blank"/>
          <Divider hidden />
          <Divider hidden />
          <Image className="hvr-float-shadow" src={GooglePlay}  href='https://play.google.com/store/music/artist?id=Atad76lawpxs37lak3so2e3j544&hl=en_US' target="_blank"/>
          <Divider hidden />
          <Divider hidden />
          <Image className="hvr-float-shadow" src={Amazon}  href='https://music.amazon.com/artists/B081CYK229?ref=dm_sh_TkCkyBuhHy7LqL5SYZSO33b36' target="_blank"/>
          <Divider hidden />
          {/* <Divider hidden /> */}
          <Image className="hvr-float-shadow" src={Deezer}  href='https://www.deezer.com/us/artist/78417382' target="_blank"/> 
          <Divider hidden />
          <Divider hidden />
          {/* <React.Fragment> */}
            <Menu icon borderless inverted compact size='massive'>
              <Menu.Item name='instagram' link href='https://instagram.com/cnrd.wav'>
                <Icon name='instagram' circular inverted color='grey'  size='large'/>
              </Menu.Item>
              <Menu.Item name='twitter' link href='https://twitter.com/cnrd_wav'>
                <Icon name='twitter' circular inverted color='grey'  size='large'/>
              </Menu.Item>
              <Menu.Item name='mail' link href='mailto:mgmt@cnrd.life'>
                <Icon name='mail' circular inverted color='grey'  size='large'/>
              </Menu.Item> 
            </Menu>
          {/* </React.Fragment> */}
          {/* <Menu icon borderless inverted>
            <Menu.Item name='instagram' link href='https://instagram.com/cnrd.wav'>
              <Icon name='instagram' circular inverted color='grey'  size='large'/>
            </Menu.Item>
            <Menu.Item name='twitter' link href='https://twitter.com/cnrd_wav'>
              <Icon name='twitter' circular inverted color='grey'  size='large'/>
            </Menu.Item><Menu.Item name='mail' link href='mailto:mgmt@cnrd.life'>
              <Icon name='mail' circular inverted color='grey'  size='large'/>
            </Menu.Item> 
      </Menu> */}
          <Divider hidden />
          <Divider hidden />
        </center>
      </header>
    </div>
  );
}

export default App;

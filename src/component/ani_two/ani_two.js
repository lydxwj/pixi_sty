import React, { Component } from 'react';
import { loader, AnimatedSprite, Sprite, TextureCache, Container, resources } from '../../pixi/pixi';
import { sizeToPx, bodyW } from '../../utils';
import './ani_two.styl';
export default class AniTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      app: this.props.pixiApp,
    }
    this.setup = this.setup.bind(this);
    this.anisp = null;
  }
  AniOne() {
    if (resources["//image.uc.cn/s/uae/g/01/pixistudy/images/bbb.json"]) {
      this.setup();
    } else {
      loader
      .add("//image.uc.cn/s/uae/g/01/pixistudy/images/bbb.json")
      .load(this.setup);
    }
    
  }
  setup() {
    const App = this.state.app;
    const sheet = resources["//image.uc.cn/s/uae/g/01/pixistudy/images/bbb.json"].spritesheet;
    this.anisp = new AnimatedSprite(sheet.animations["strat2"]);
    const spriteX = (bodyW - sizeToPx(249)) / 2;
    this.anisp.position.set(spriteX, sizeToPx(500));
    this.anisp.width = sizeToPx(260);
    this.anisp.height = sizeToPx(495);
    this.anisp.animationSpeed = 0.1;
    this.anisp.loop = false;
    this.anisp.play();
    App.stage.addChild(this.anisp);
  }
  componentDidMount() {
    this.AniOne();
  }
  componentWillUnmount() {
    this.state.app.stage.removeChild(this.anisp);
  }
  render() {
    return (
      <div></div>
    );
  }
}


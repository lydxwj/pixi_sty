import React, { Component } from 'react';
import { loader, resources, Sprite, Rectangle, TextureCache } from '../../pixi/pixi';
import { sizeToPx, bodyW } from '../../utils';
import './ani_one.styl';
export default class AniOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      app: this.props.pixiApp,
    }
    this.setup = this.setup.bind(this);
  }
  AniOne() {
    loader
    .add("//image.uc.cn/s/uae/g/01/redrains2017/start/strat2.png")
    .load(this.setup);
  }
  setup() {
    const  texture = TextureCache["//image.uc.cn/s/uae/g/01/redrains2017/start/strat2.png"];
    const rectangle = new Rectangle(0, 0, 260, 495);
    texture.frame = rectangle;
    const sprite = new Sprite(texture);
    const spriteX = (bodyW - sizeToPx(260)) / 2;
    sprite.position.set(spriteX, 0);
    sprite.width = sizeToPx(260);
    sprite.height = sizeToPx(495);

    this.state.app.stage.addChild(sprite);
  }
  componentDidMount() {
    this.AniOne();
  }
  render() {
    return (
      <div></div>
    );
  }
}


import React, { Component } from 'react';
import { loader, resources, Sprite, Rectangle, TextureCache, Container, autoDetectRenderer } from '../../pixi/pixi';
import { sizeToPx, bodyW } from '../../utils';
import './ani_one.styl';
export default class AniOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      app: this.props.pixiApp,
    }
    this.setup = this.setup.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
    this.spriteCon = new Container();
    this.sprite = null;
    this.sprite2 = null;
    this.gameState = null;
  }
  AniOne() {
    if (resources["//image.uc.cn/s/uae/g/01/pixistudy/images/aaa.json"]) {
      this.setup();
    } else {
      loader
      .add("//image.uc.cn/s/uae/g/01/pixistudy/images/aaa.json")
      .load(this.setup);
    }
  }
  setup() {
    const App = this.state.app;
    const texture = TextureCache["1.png"];
    this.sprite = new Sprite(texture);
    const texture2 = TextureCache["4.png"];
    this.sprite2 = new Sprite(texture2);
    const spriteX = (bodyW - sizeToPx(249)) / 2;
    this.sprite.position.set(spriteX, 0);
    this.sprite.width = sizeToPx(249);
    this.sprite.height = sizeToPx(235);
    this.sprite2.width = sizeToPx(239);
    this.sprite2.height = sizeToPx(291);
    this.spriteCon.vx = 0;
    this.spriteCon.vy = 0;
    this.spriteCon.addChild(this.sprite);
    this.spriteCon.addChild(this.sprite2);
    this.sprite2.interactive = true;
    this.sprite2.on('tap', data => {
      this.data = data;
      const texture3 = TextureCache["3.png"];
      const sprite3 = new Sprite(texture3);
      this.spriteCon.addChild(sprite3);
      const renderer = autoDetectRenderer();
      renderer.render(App.stage);
    });
    App.stage.addChild(this.spriteCon);
    const left = this.keyboard(37),
      up = this.keyboard(38),
      right = this.keyboard(39),
      down = this.keyboard(40);
    left.press = () => {
      this.spriteCon.vx = -5;
      this.spriteCon.vy = 0;
    };
    //Left arrow key `release` method
    left.release = () => {
      if (!right.isDown && this.spriteCon.vy === 0) {
        this.spriteCon.vx = 0;
      }
    };
    //Up
    up.press = () => {
      this.spriteCon.vy = -5;
      this.spriteCon.vx = 0;
    };
    up.release = () => {
      if (!down.isDown && this.spriteCon.vx === 0) {
        this.spriteCon.vy = 0;
      }
    };
    //Right
    right.press = () => {
      this.spriteCon.vx = 5;
      this.spriteCon.vy = 0;
    };
    right.release = () => {
      if (!left.isDown && this.spriteCon.vy === 0) {
        this.spriteCon.vx = 0;
      }
    };
      //Down
    down.press = () => {
      this.spriteCon.vy = 5;
      this.spriteCon.vx = 0;
    };
    down.release = () => {
      if (!up.isDown && this.spriteCon.vx === 0) {
        this.spriteCon.vy = 0;
      }
    };
    this.gameState = this.play;
    App.ticker.add(delta => this.gameLoop(delta));
  }
  gameLoop(delta) {
    this.gameState(delta);
  }
  play(delta) {
    this.spriteCon.x += this.spriteCon.vx;
    this.spriteCon.y += this.spriteCon.vy;
  }
  keyboard(keyCode) {
    let key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
      if (event.keyCode === key.code) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
      }
      event.preventDefault();
    };
  
    //The `upHandler`
    key.upHandler = event => {
      if (event.keyCode === key.code) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
      }
      event.preventDefault();
    };
  
    //Attach event listeners
    window.addEventListener(
      "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
      "keyup", key.upHandler.bind(key), false
    );
    return key;
  }
  componentDidMount() {
    this.AniOne();
  }
  componentWillUnmount() {
    this.state.app.stage.removeChild(this.spriteCon);
  }
  render() {
    return (
      <div></div>
    );
  }
}


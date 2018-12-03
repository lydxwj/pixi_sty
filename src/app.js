import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PIXIAPP from './pixi/pixi_app';
import AniOne from './component/ani_one/ani_one.js';
import AniTwo from './component/ani_two/ani_two.js';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pixiApp: PIXIAPP(),
      ani: 1,
    }
  }
  static propTypes = {
    /**
     * @title 文案
     * @description 填写文案
     */
    text: PropTypes.string,
  };

  static defaultProps = {
    text: 'react根组件',
  };
  componentDidMount() {
  }
  toggleAni() {
    if (this.state.ani === 1) {
      this.setState({
        ani: 2,
      });
    } else {
      this.setState({
        ani: 1,
      });
    }
  }
  render() {
    const pixiApp = this.state.pixiApp;
    const ani = this.state.ani;
    return (
      <div className="react-cmp">
        <button onClick={this.toggleAni.bind(this)}>切换</button>
        {ani === 1 ? <AniOne pixiApp={pixiApp}></AniOne> : null}
        {ani === 2 ? <AniTwo pixiApp={pixiApp}></AniTwo> : null}
      </div>
    );
  }
}

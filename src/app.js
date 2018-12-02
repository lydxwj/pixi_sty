import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PIXIAPP from './pixi/pixi_app';
import AniOne from './component/ani_one/ani_one.js';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pixiApp: PIXIAPP(),
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
  render() {
    const pixiApp = this.state.pixiApp;
    return (
      <div className="react-cmp">
        <AniOne pixiApp={pixiApp}></AniOne>
      </div>
    );
  }
}

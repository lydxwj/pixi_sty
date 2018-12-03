import { Application } from './pixi.js';
const options = {
  width: window.innerWidth,
  height: window.innerHeight,
};
function pixiApp() {
  const app = new Application(options);
  app.renderer.backgroundColor = 0xffffff;
  app.renderer.view.style.position = "absolute";
  app.renderer.view.style.left = "0";
  app.renderer.view.style.top = "0";
  app.renderer.view.style.display = "block";
  app.renderer.autoResize = true;
  app.renderer.resize(window.innerWidth, window.innerHeight);
  document.body.appendChild(app.view);
  return app;
}
export default pixiApp;
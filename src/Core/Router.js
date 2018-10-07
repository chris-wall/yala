
class Route {

}

function getRoute(config) {

}

export default class Router {
  constructor(config) {
    this.config = config;
    this.currentRoute = null;
  }

  listen(onRouteChange, onRouteReload) {
    if (window) {
      
      const historyChanged = (evt) => {
        
      };

      window.addEventListener('popstate', historyChanged);
      window.addEventListener('load', historyChanged);
    }
  }
}
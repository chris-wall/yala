import Router from './Router';

export function start(config, mountPoint) {

  const router = new Router(config);
  router.listen(() => {}, () => {});

}
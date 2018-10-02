import DashboardConfig from './config/DashboardConfig';

export function registerWith(core) {
  const $r = core.registerAs('dashboard');
  $r.includeConfiguration(DashboardConfig, { singleton: true });
  $r.useRoutingDeterminer(res => (res.resource === null && res.key === null && res.parent === null));
  $r.useRenderer(async (resource) => {
    const db = await fetch('userDashboard', resource);

  });
}

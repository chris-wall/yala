import { header } from '../../../Core/components/layouts';
import { h1 } from '../../../Core/components/headlines';

export default function renderDashboardHeader() {
  return header({ class: 'dashboard__header' }, h1({ class: 'dashboard__header__title' }, 'User Dashboard'));
}

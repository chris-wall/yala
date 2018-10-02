import { article } from '../../Core/components/layouts';
import renderDashboardHeader from './components/header';

export default function renderDashboard(context) {
  return article({ id: 'dashboard' }, renderDashboardHeader());
}

import { uuidv4 } from '../../misc/uuidv4';
import { renderNotificationItem } from './renderNotificationItem';
import { renderNotificationBadge } from './renderNotificationBadge';

export function renderNotLoggedMessage() {
  renderNotificationBadge(1);
  return renderNotificationItem({
    logoUrl: 'https://cdn.utah.gov/agency-brands/dgo-myutah.svg',
    logoDescription: 'MyUtah Logo',
    createDate: '',
    expireDate: '',
    icon: 'account',
    id: uuidv4(),
    isRead: true,
    linkText: 'MyUtah Portal',
    linkUrl: 'https://my.utah.gov',
    message: 'Access all your services from the State of Utah in one convenient place. Sign in or create your account to get started.',
    title: 'Welcome',
  });
}

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
    message: 'To get started, log in into the MyUtah portal or create an account.',
    title: 'You Are Not Logged In',
  });
}

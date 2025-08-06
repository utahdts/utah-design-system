import { uuidv4 } from '../../misc/uuidv4';
import { renderNotificationItem } from './renderNotificationItem';

export function renderNotLoggedMessage() {
  return renderNotificationItem({
    logoUrl: 'https://cdn.utah.gov/agency-brands/dgo-myutah.svg',
    logoDescription: 'MyUtah Logo',
    createDate: '',
    expireDate: '',
    icon: 'info',
    id: uuidv4(),
    isRead: true,
    linkText: 'MyUtah Portal',
    linkUrl: 'https://my.utah.gov',
    message: 'To get started, log in into the MyUtah portal or create an account.',
    title: 'You Are Not Logged In',
  });
}

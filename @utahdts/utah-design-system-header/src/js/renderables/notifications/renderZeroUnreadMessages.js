import { uuidv4 } from '../../misc/uuidv4';
import { renderNotificationItem } from './renderNotificationItem';

export function renderZeroUnreadMessages() {
  return renderNotificationItem({
    logoUrl: 'https://cdn.utah.gov/agency-brands/dgo-myutah.svg',
    logoDescription: 'MyUtah Logo',
    createDate: '',
    expireDate: '',
    icon: 'info',
    id: uuidv4(),
    isRead: true,
    linkText: 'Visit MyUtah',
    linkUrl: 'https://my.utah.gov',
    message: 'You currently have no unread notifications. Learn more about the MyUtah portal and services that are offered there.',
    title: 'No Unread Notifications',
  });
}

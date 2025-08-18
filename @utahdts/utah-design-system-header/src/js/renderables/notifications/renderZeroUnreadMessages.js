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
    message: 'Your notifications will appear here. You may also receive email and text messages. Enroll or review your preferences.',
    title: 'No Unread Notifications',
  });
}

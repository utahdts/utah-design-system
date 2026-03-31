import { uuidv4 } from '../../misc/uuidv4';
import { renderNotificationItem } from './renderNotificationItem';

/**
 * @param {boolean} [isMyUtah]
 */
export function renderZeroUnreadMessages(isMyUtah = false) {
  return renderNotificationItem({
    logoUrl: 'https://cdn.utah.gov/agency-brands/dgo-myutah.svg',
    logoDescription: 'MyUtah Logo',
    createDate: '',
    expireDate: '',
    icon: 'info',
    id: uuidv4(),
    isRead: true,
    linkText: isMyUtah ? 'Manage Settings' : 'Visit MyUtah',
    linkUrl: isMyUtah ? '/u?id=my_information&wgt=my_notifications' : 'https://my.utah.gov/u?id=my_information&wgt=my_notifications',
    message: 'Your notifications will appear here. You may also receive email and text messages. Enroll or review your preferences.',
    title: 'No Unread Notifications',
  });
}

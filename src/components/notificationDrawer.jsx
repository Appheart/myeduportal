import { useSelector } from 'react-redux';

const NotificationDrawer = ({ notifyOpen, toggleNotification }) => {
  const { notifications } = useSelector((state) => state.auth);

  return (
    <div
      className={
        notifyOpen ? 'notification-drawer open' : 'notification-drawer'
      }
    >
      <div className="cancel" onClick={toggleNotification}></div>
      {!notifications ? 'No notifications' : 'Notifications'}
    </div>
  );
};
export default NotificationDrawer;

import { notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification/interface';

type NotificationType = "success" | "info" | "warning" | "error";

interface notificationProps {
    title?: string;
    description: string;
    duration?: number;
    autoDismiss?: boolean;
    placement?: NotificationPlacement;
    type: NotificationType;
    theme?: "light" | "dark" | "colored"
}

export const OpenNotification = (props: notificationProps) => {

    const {
        description,
        duration = 0,
        placement = "topRight",
        autoDismiss = true,
        type = "success",
        theme = "dark",
        title
    } = props;

    notification[type]({
        message: title,
        description: description,
        placement: placement,
        closeIcon: true,
    });
}
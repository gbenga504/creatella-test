import { NotificationBanner } from "./NotificationBanner";
import Store from "./Store";

/**
 * The NotificationBanner component is used within the application to display an active notification
 * This component was designed such that it could be pulled out from this project in the future
 * and used for another project ... Therefore it does not rely on the context React API neither does it rely on redux
 * instead it maintains its own small immutable store which is not exposed to the Views or application using it.
 *
 *
 * This creates a minimal level of abstraction.
 *
 * E.g
 * let banner = NotificationBanner({title: "Faces Added", type: "addition"});
 * banner.show({duration: 5000})
 */
export const _Store = new Store({});

export { NotificationBanner };

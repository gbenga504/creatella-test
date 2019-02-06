import { _Store } from "./index";

/**
 * This function makes it possible to call the notification banner
 * @param {string, enum ?: "addition" | "removal"} param0
 */
function NotificationBanner({ title, type }) {
  return new NotificationBannerContext({
    title,
    type
  });
}

/**
 * This class provides the NotificationBanner with 2 methods which are exposed i.e public methods
 * The [show] method to trigger showing the banner and the [dismiss] method to hide the
 * banner
 */
class NotificationBannerContext {
  title = "";

  constructor({ title, type }) {
    this.title = title || "";
    this.type = type || "addition";
    this.show = this.show.bind(this);
    this.dismiss = this.dismiss.bind(this);
  }

  /**
   * This function is used to show the notification banner
   * A custom duration can be passed in
   * @param {duration : number}
   */
  show = params => {
    let duration = (params && params.duration) || undefined;
    _Store.dispatch("notificationBanner", {
      trigger: Date.now(),
      shouldShow: true,
      type: this.type,
      title: this.title,
      duration:
        duration === "long" || !duration
          ? 5000
          : duration === "short"
          ? 2000
          : duration
    });
  };

  /**
   * This dismisses the notification banner
   */
  dismiss = () => {
    _Store.dispatch("notificationBanner", {
      trigger: Date.now(),
      shouldShow: false
    });
  };
}

export { NotificationBanner };

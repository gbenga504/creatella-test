import { _Store } from "./index";

function NotificationBanner({ title, type }) {
  return new NotificationBannerContext({
    title,
    type
  });
}

class NotificationBannerContext {
  title = "";

  constructor({ title, type }) {
    this.title = title || "";
    this.type = type || "addition";
    this.show = this.show.bind(this);
    this.dismiss = this.dismiss.bind(this);
  }

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

  dismiss = () => {
    _Store.dispatch("notificationBanner", {
      trigger: Date.now(),
      shouldShow: false
    });
  };
}

export { NotificationBanner };

import moment from "moment";

export function getTimeDifference(date: string) {
  const newDate = new Date(date) as any;
  const delta = Math.abs(Date.now() - newDate) / 1000;
  const week = Math.floor(delta / (86400 * 7));
  const days = Math.floor(delta / 86400);
  const hours = Math.floor(delta / 3600) % 24;
  const minutes = Math.floor(delta / 60) % 60;

  if (week > 1) {
    return moment(date).format("HH:mm DD/MM/YYYY");
  } else if (week == 1) {
    return "1 week ago";
  } else if (days > 0) {
    if (days == 1) return "1 day ago";
    return days + " days ago";
  } else if (hours > 0) {
    if (hours == 1) return "1 hour ago";
    return hours + " hours ago ";
  } else {
    if (minutes == 1) return "1 minute ago";
    return minutes + " minutes ago";
  }
}

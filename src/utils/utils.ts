export function isMobileOrPc() {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
}
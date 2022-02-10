var OriginTitle = document.title;
var titleTime;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    $('[rel="icon"]').attr("href", "/images/avatar.jpeg");
    document.title = "警告！警告！";
    clearTimeout(titleTime);
  } else {
    $('[rel="icon"]').attr("href", "/images/avatar.jpeg");
    document.title = "ヾ(◍°∇°◍)欢迎回来|" + OriginTitle;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});

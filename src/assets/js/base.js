export function getStyle(el,style){
  return parseInt(window.getComputedStyle(el, false)[style])
}

export function getDeviceRatio(){
  const isAndroid = window.navigator.appVersion.match(/android/gi);
  const isIPhone = window.navigator.appVersion.match(/iphone/gi);
  const devicePixelRatio = window.devicePixelRatio;
  let dpr;
  if (isIPhone) {
    // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
    if (devicePixelRatio >= 3) {
      dpr = 3;
    } else if (devicePixelRatio >= 2){
      dpr = 2;
    } else {
      dpr = 1;
    }
  } else {
    // 其他设备下，仍旧使用1倍的方案
    dpr = 1;
  }
  return dpr
}
export function timeStamp(bool,time){ //时间戳  bool (精确度)  时间字段数组
  let obj = time;
  let newDate = new Date();
  newDate.setTime(obj * 1000);

  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let date = newDate.getDate();
  date = date < 10 ? "0" + date : date;

  let hours = newDate.getHours();
  hours = hours < 10 ? "0" + hours : hours;
  let minute = newDate.getMinutes();
  minute = minute < 10 ? "0" + minute : minute;
  let second = newDate.getSeconds();
  second = second < 10 ? "0" + second : second;

  if (bool) {
    return year + "-" + month + "-" + date + " " + hours + ":" + minute + ":" + second;
  } else {
    return year + "-" + month + "-" + date;
  }
};

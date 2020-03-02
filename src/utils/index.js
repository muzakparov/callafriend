import dd from "double-digit";
import convert from "convert-seconds";

export function convertSecs(secs) {
  const { hours, minutes } = convert(secs);

  return `${dd(hours)}:${dd(minutes)}:00`;
}

export function timezoneConvert(time, timeZone) {
  let dateTime = new Date(`01/01/2020 ${convertSecs(time)}`).toLocaleString(
    "en-US",
    {
      timeZone: timeZone
    }
  );
  dateTime = new Date(dateTime);
  return dateTime
    .toLocaleString()
    .split(" ")[1]
    .slice(0, -3);
}

export function convertToSecs(time) {
  return (
    parseInt(time.split(":")[0]) * 3600 + parseInt(time.split(":")[1]) * 60
  );
}


export function currentTimeSecs(time, timeZone){
  return convertToSecs(timezoneConvert(time, timeZone))
}

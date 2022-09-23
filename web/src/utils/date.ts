export function convertH2M(timeInHour: string) {
  var timeParts = timeInHour.split(':');
  return Number(timeParts[0]) * 60 + Number(timeParts[1]);
}

export function convertH2M(timeInHour: string) {
  var timeParts = timeInHour.split(':');
  return Number(timeParts[0]) * 60 + Number(timeParts[1]);
}

export function convertM2HM(time: number) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}:${minutes}`;
}

export function decodedValue(colorArray) {
  const colorMap: any = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  }

  let firstValue: any = colorMap[`${colorArray[1]}`];
  let secondValue: any = colorMap[`${colorArray[2]}`];
  return firstValue + secondValue
}

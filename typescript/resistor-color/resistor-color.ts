export const colorCode = (color?:string) => {
  if(color){
    return COLORS[color];
  } else {
    return COLORS;
  }
}

export const COLORS: object = {
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

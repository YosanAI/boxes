export function getRandomHexColor() {
  const colorNumber = Math.floor(Math.random() * 0xffffff);
  return `#${colorNumber.toString(16).padStart(6, '0')}`;
}

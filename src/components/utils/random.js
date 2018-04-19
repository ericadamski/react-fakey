export default function random(min = 10, max = 100) {
  return Math.max(min, Math.floor(Math.random() * (max - min) + min));
}

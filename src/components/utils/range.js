export default function range(start = 0, end = 0) {
  return Array(Math.max(0, end - start))
    .fill()
    .map((e, i) => start + i);
}

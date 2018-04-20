export default function range(start, end) {
  return Array(Math.max(0, end - start))
    .fill()
    .map((e, i) => start + i);
}

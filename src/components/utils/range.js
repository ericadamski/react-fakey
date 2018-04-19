export default function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((e, i) => start + i);
}

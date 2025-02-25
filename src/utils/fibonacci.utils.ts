export const fibonacciInRange = (start: number, end: number): number[] => {
  const fib = [0, 1];
  let result = [];

  while (true) {
    const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
    if (nextFib > end) break;
    fib.push(nextFib);
  }

  result = fib.filter((num) => num >= start && num <= end && num !== 0);

  return [...new Set(result)];
};

export const createArray = (start: number, end: number): number[] => {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
};

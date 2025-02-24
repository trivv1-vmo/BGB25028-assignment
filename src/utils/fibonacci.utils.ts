export const generateFibonacciSequence = (n: number): number[] => {
  const sequence = [1, 2];
  while (sequence.length < n) {
    const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextValue);
  }
  return sequence;
};

export const calculateLimit = (): number => {
  let totalCount = 1; // 1 phần tử đầu tiên là ảnh từ API
  let neededLimit = 0;

  while (totalCount < 9) {
    neededLimit++;
    const fibonacciIndexes = generateFibonacciSequence(neededLimit);
    totalCount = 1 + neededLimit + fibonacciIndexes.length;
  }

  return neededLimit;
};
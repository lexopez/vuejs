export const average = (arr) => {
  const result = arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  return result;
};

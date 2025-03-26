export const sleep = (ms: number = 2000) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

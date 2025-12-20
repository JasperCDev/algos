export function test(name: string, result: any, expected: any): void {
  const status = result === expected ? "PASSED" : "FAILED";
  const color = result === expected ? "\x1b[32m" : "\x1b[31m";
  const reset = "\x1b[0m";
  console.log(name + " " + color + status + reset);
}

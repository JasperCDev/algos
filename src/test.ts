export function test(name: string, result: any, expected: any): void {
  const status = result === expected ? "PASSED" : "FAILED";
  const color = result === expected ? "\x1b[32m" : "\x1b[31m";
  const reset = "\x1b[0m";
  if (status === 'FAILED') {
    console.log(name + " " + color + status + reset);
    console.log(`Expected: ${expected}, but got: ${result}\n`);
  }
}

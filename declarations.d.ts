declare module 'query' {
  export function stringify(val: object): string
  export function parse(val: string): object
}
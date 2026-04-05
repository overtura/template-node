import { pathToFileURL } from 'node:url'

export function hello(name = 'overtura') {
  return `hello, ${name}`
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(hello(process.argv[2]))
}

import { str } from '../string'
export function escape(pathPart) {
  return str(pathPart)
    .replace('.', '(P)')
    .replace('$', '(D)')
    .replace('#', '(H)')
    .replace('[', '(OB)')
    .replace(']', '(CB)')
    .replace('/', '(FS)')
}

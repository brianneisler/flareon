import chain from '../chain'

export function unescape(pathPart) {
  return chain(pathPart)
    .replace('(P)', '.')
    .replace('(D)', '$')
    .replace('(H)', '#')
    .replace('(OB)', '[')
    .replace('(CB)', ']')
    .replace('(FS)', '/')
}

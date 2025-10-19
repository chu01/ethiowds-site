export const basePath = process.env.NODE_ENV === 'production' ? '/ethiowds' : ''

export const getLink = (path) => {
  return `${basePath}${path}`
}
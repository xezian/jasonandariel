/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// You can delete this file if you're not using it
exports.onRouteUpdate = () => {
  const doc = document.documentElement
  const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
  const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
  if (typeof window !== `undefined`) {
    window.scrollTo(left, top)
  }
}

exports.shouldUpdateScroll = args => {
  return false
}

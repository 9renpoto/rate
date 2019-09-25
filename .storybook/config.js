const { configure, addParameters } = require('@storybook/preact')
const requireContext = require('require-context.macro')

addParameters({
  viewport: {
    defaultViewport: ((r = Math.random()) => {
      return r <= 0.3 ? 'iphonex' : r <= 0.6 ? 'ipad' : ''
    })()
  }
})

configure(requireContext('../', true, /story.tsx$/), module)

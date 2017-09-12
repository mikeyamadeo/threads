import { configure } from '@storybook/react'

function loadStories () {
  require('../src/App/UI/Text/story.js')
  require('../src/App/UI/Layout/story.js')
}

configure(loadStories, module)

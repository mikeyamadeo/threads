import { configure } from '@storybook/react'

function loadStories () {
  require('../src/App/UI/Text/story.js')
}

configure(loadStories, module)

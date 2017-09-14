import { configure } from '@storybook/react'
import '../src/App/style/index.css'
function loadStories () {
  require('../src/App/UI/Text/story.js')
  require('../src/App/UI/Layout/story.js')
  require('../src/App/views/Shop/components/Showcase/story.js')
}

configure(loadStories, module)

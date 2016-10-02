import { createEngine } from './engine'
import { createRender } from './render'

import { Engine, Render } from 'matter-js'

export default ({element}) => {
  const { engine, width } = createEngine()
  const render = createRender({element, engine, width})
  Engine.run(engine)
  Render.run(render)
}

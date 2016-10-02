import { createEngine } from './engine'
import { createRender } from './render'

import { Engine, Render } from 'matter-js'

export default ({element}) => {
  const engine = createEngine()
  const render = createRender({element, engine})
  Engine.run(engine)
  Render.run(render)
}

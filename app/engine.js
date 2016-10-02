import { Engine, World } from 'matter-js'

import createPlatforms from './platforms'
import { platforms } from './constants'

export const createEngine = () => {
  const engine = Engine.create()
  const world = engine.world

  World.add(world, createPlatforms(platforms))

  return engine
}

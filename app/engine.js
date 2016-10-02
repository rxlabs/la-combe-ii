import { Engine } from 'matter-js'

export const createEngine = () => {
  const engine = Engine.create()
  return engine
}

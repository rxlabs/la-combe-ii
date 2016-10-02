import { Render } from 'matter-js'

export const createRender = ({element, engine}) => (
  Render.create({
    element,
    engine,
    options: {
      width: 500,
      height: 1000
    }
  })
)

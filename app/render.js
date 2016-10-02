import { Render } from 'matter-js'

export const createRender = ({element, engine, width}) => (
  Render.create({
    element,
    engine,
    options: {
      width,
      height: 2 * width
    }
  })
)

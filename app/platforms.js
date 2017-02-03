import { Bodies, Body, Vector, Vertices } from 'matter-js'

const platformBody = Body.create({})

const createVerticies = (points) => {
  const vectors = points.map(p => Vector.create.apply(this, p))
  const vertices = Vertices.create(vectors, platformBody)
  return vertices
}

export default (platforms) => {
  const vertices = platforms.map(createVerticies)
  const bodies = Bodies.fromVertices(250, 250, vertices, {
    isStatic: true
  })
  return bodies
}

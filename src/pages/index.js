import React from 'react'
import File from '../images/gatsby-astronaut.png'

const IndexPage = () => (
  <div>
    <h1>Welcome to my website</h1>
    <p>This is a sample site for the Gatsby crash course</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={File} />
    </div>
  </div>
)

export default IndexPage

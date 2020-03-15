import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types'

const Text = ({ children }) => (
  <p className="font-sans text-lg my-2">{children}</p>
)
const H1 = ({ children }) => <h1 className="font-sans text-3xl">{children}</h1>
const H2 = ({ children }) => <h2 className="font-sans text-3xl">{children}</h2>
const H3 = ({ children }) => <h3 className="font-sans text-3xl">{children}</h3>
const H4 = ({ children }) => <h4 className="text-3xl font-sans">{children}</h4>
const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_1]: (_node, children) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (_node, children) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (_node, children) => <H3>{children}</H3>,
    [BLOCKS.HEADING_4]: (_node, children) => <H4>{children}</H4>,
  },
  renderText: text => text.replace('!', '?'),
}

export default options

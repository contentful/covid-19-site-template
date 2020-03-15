import React from 'react'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

const Text = ({ children }) => (
  <p className="my-2 font-sans text-lg">{children}</p>
)
const H1 = ({ children }) => <h1 className="font-sans text-3xl">{children}</h1>
const H2 = ({ children }) => <h2 className="font-sans text-3xl">{children}</h2>
const H3 = ({ children }) => <h3 className="font-sans text-3xl">{children}</h3>
const H4 = ({ children }) => <h4 className="font-sans text-3xl">{children}</h4>
const HYPERLINK = ({ children }) => (
  <a className="text-grey-darker hover:text-black text-sm no-underline hover:underline">
    {children}
  </a>
)
const Img = ({ node }) =>
  console.log(node) || (
    <img
      src={node.data.target.fields.file['en-US'].url}
      alt={node.data.target.fields.title['en-US']}
    />
  )
const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_1]: (_node, children) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (_node, children) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (_node, children) => <H3>{children}</H3>,
    [BLOCKS.HEADING_4]: (_node, children) => <H4>{children}</H4>,
    [BLOCKS.EMBEDDED_ASSET]: node => <Img node={node} />,
    [INLINES.HYPERLINK]: (_node, children) => <HYPERLINK>{children}</HYPERLINK>,
  },
  renderText: text => text.replace('!', '?'),
}

export default options

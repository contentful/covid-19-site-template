import React from 'react'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

const Text = ({ children }) => (
  <p className="my-2 font-sans text-lg">{children}</p>
)
const H1 = ({ children }) => (
  <h1 className="font-sans text-2xl font-semi-bold">{children}</h1>
)
const H2 = ({ children }) => (
  <h2 className="font-sans text-xl font-semi-bold">{children}</h2>
)
const H3 = ({ children }) => (
  <h3 className="font-sans text-lg font-semi-bold">{children}</h3>
)
const H4 = ({ children }) => (
  <h4 className="font-sans text-base font-semi-bold">{children}</h4>
)
const HYPERLINK = ({ children, dataUri }) => (
  <a
    className="text-blue-700 hover:text-blue-900 underline text-sm"
    href={dataUri}
  >
    {children}
  </a>
)

const Img = ({ node }) => (
  <img
    src={`https:${node.data.target.fields.file['en-US'].url}?w=630&h=310&fit=thumb`}
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
    [INLINES.HYPERLINK]: (_node, children) => (
      <HYPERLINK dataUri={_node.data && _node.data.uri}>{children}</HYPERLINK>
    ),
  },
  renderText: text => text.replace('!', '?'),
}

export default options

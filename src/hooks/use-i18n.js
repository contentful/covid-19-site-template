import { useStaticQuery, graphql } from "gatsby"

const useI18n = () => {
  const { microcopyList } = useStaticQuery(
    graphql`
      query Microcopies {
        microcopyList: allContentfulMicrocopy {
          nodes {
            key
            value
          }
        }
      }
    `
  )

  const microcopy = {}
  microcopyList.nodes.forEach(({ key, value }) => microcopy[key] = value)

  return {
    get: (key, opts = {}) => microcopy[key] || opts.default || key
  }
}

export default useI18n

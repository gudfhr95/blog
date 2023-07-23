import { TPost } from "src/types"
import { CONFIG } from "site.config"
import dynamic from "next/dynamic"

const GiscusComponent = dynamic(
  () => {
    return import("./Giscus")
  },
  { ssr: false }
)

type Props = {
  data: TPost
}

const CommentBox: React.FC<Props> = ({ data }) => {
  return <div>{CONFIG.giscus.enable && <GiscusComponent />}</div>
}

export default CommentBox

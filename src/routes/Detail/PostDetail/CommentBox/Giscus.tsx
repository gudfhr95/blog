import { CONFIG } from "site.config"
import { useEffect } from "react"
import useScheme from "src/hooks/useScheme"
import { useRouter } from "next/router"

const Giscus: React.FC = () => {
  const [scheme] = useScheme()
  const router = useRouter()

  useEffect(() => {
    const theme = scheme === "light" ? "noborder_light" : "noborder_dark"
    const script = document.createElement("script")
    const anchor = document.getElementById("comments")
    if (!anchor) return

    script.setAttribute("src", "https://giscus.app/client.js")
    script.setAttribute("crossorigin", "anonymous")
    script.setAttribute("async", `true`)
    script.setAttribute("data-theme", theme)
    const config: { [key: string]: string } = CONFIG.giscus.config
    Object.keys(config).forEach((key) => {
      script.setAttribute(`data-${key}`, config[key])
    })
    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ""
    }
  }, [scheme, router])
  return <div id="comments" />
}

export default Giscus

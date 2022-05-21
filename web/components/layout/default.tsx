import React, { ReactNode } from "react"
import useMediaQuery from "@mui/material/useMediaQuery"
import DesktopLayout from "./desktop/layout"
import TabletLayout from "./tablet/layout"
import MobileLayout from "./mobile/layout"

const DefaultLayout: React.FC<{ children: ReactNode }> = props => {
  const isDesktop = useMediaQuery("(min-width: 960px)") // 要確認
  const isTablet = useMediaQuery("(min-width: 480px)") //

  return isDesktop ? (
    <DesktopLayout {...props} />
  ) : isTablet ? (
    <TabletLayout {...props} />
  ) : (
    <MobileLayout {...props} />
  )
}

export default DefaultLayout

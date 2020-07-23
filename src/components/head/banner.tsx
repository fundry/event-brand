import React, { useState, useEffect } from "react"
import Header from "./header"

import Users from "../../pages/home/features/users"
import LargeBanner from "./largeBanner"
import SmallBanner from "./smallBanner"

const Banner = (): JSX.Element => {
  const [Width, setWidth]: any = useState<any>(null)

  setTimeout(function() {
    setWidth(window.innerWidth)
  }, 500)

  const handleResize = (value: number) => {
    setWidth(value)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize.bind(this))
    return () => window.removeEventListener("resize", handleResize.bind(this))
  }, [])

  return (
    <div style={{ overflow: "hidden" }}>
      <Header style={true} />
      {Width >= 1050 ? <Users /> : <SmallBanner />}
    </div>
  )
}

export default Banner

import { FC } from "react"
import Image from "next/image"
import Loading from "../public/images/loading.png"

const loadingCircle: FC<{width?: number, height?: number}> = ({ width, height }) => {
    return (
        <Image 
          src={Loading}
          className={"animate-spin"}
          width={(width ? width : 25)}
          height={(height ? height : 25)}
        />
    )
}

export default loadingCircle
import React from "react"
import Link from "next/link"

class Home extends React.Component {
  constructor(props: any) {
    super(props)
  }

  static props = {
    
  }

  render() {
    return (
      <div className="text-center">
        <div className="text-left bg-gradient-to-r from-green-400 to-blue-500">
          <div className="ml-8 md:ml-16">
            <p className="text-3xl xlmd:text-4xl font-bold pt-10">이름</p>
            <p className="text-lg md:text-2xl mt-2 font-bold">설명설며어설멺ㄴ엄ㅁㅅㅅㄻ럴.</p>
            <button className="mt-2 px-2 font-bold rounded bg-gray-100 text-black p-1 text-sm"><Link href="/">초대</Link></button>
            <p className="pb-8"></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
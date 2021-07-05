import React, { FC } from "react"
import Link from "next/link"

interface StockItemProps {
    code: string
    name: string
    money: number
    previous: number
}

const StockItem: FC<StockItemProps> = ({ code, name, money, previous }) => {
    return (
        <div className="relative bg-gray-700 shadow-lg h-32 md:h-36 w-auto md:w-42 rounded-lg p-4 pl-5">
            <p className="text-base md:text-lg">{name}</p>
            <p className="text-sm md:text-base">가격: {money}원</p>
            <p className="mt-1 text-sm">{(money - previous) < 0 ? `${money - previous}` : `+${money - previous}`} 원</p>
            <button className="object-none object-bottom rounded pl-2 pr-2 p-1 bg-green-700 absolute bottom-2.5 text-sm">
                <Link
                    href={{pathname: '/stock/[code]'}}
                    as={{pathname: `/stock/${code}`}}
                >
                    상세정보
                </Link>
            </button>
        </div>
    )
}

export default StockItem
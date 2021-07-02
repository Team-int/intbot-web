import React, { FC } from "react"
import Link from "next/link"

interface ItemProps {
    id: string
    name: string
    amount: number
    description: string
}

const ShopItem: FC<ItemProps> = ({ id, name, amount, description }) => {
    return (
        <div className="relative bg-gray-700 shadow-lg h-16 md:h-36 w-auto md:w-42 rounded-lg p-4 pl-5">
            <p className="text-base md:text-lg">{name}</p>
            <p className="text-sm md:text-base">가격: {amount}원</p>
            <p className="mt-1 text-sm">- {description}</p>
            <button className="object-none object-bottom rounded pl-2 pr-2 p-1 bg-green-700 absolute bottom-2.5 text-sm">
                <Link href={`대충api서버/v1/buy/${id}`} >구매</Link>
            </button>
        </div>
    )
}

export default ShopItem
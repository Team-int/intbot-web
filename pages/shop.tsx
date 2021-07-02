import React, { FC, useEffect, useState } from "react"
import ShopItem from "../components/shopItem"
import api from "../utils/api"

interface Merch {
    _id: string
    name: string
    amount: number
    description: string
}

const ShopPage: FC = () => {
    const [merches, setMerches] = useState([])
    const [isLoaded, setLoadState] = useState(false)

    useEffect(() => {
        api.get('/merches')
        .then(res => {
            setMerches(res.data)
            setLoadState(true)
        })
    })
    
    
    if (!isLoaded) {
        return (
            <div className="text-center">
                <p className="mt-2 text-base md:text-3xl">상점</p>
                <p className="mt-2 text-base md:text-lg">무슨 아이템이 있을까?</p>
                <p className="mt-10 text-xl">로딩중...</p>
            </div>
        )
    }

    return (
        <div className="text-center">
            <p className="mt-2 text-base md:text-3xl">상점</p>
            <p className="mt-2 text-base md:text-lg">무슨 아이템이 있을까?</p>
            <div className="mt-5 grid grid-cols-3 md:grid-cols-6 gap-4 auto-cols-max md:auto-cols-min mx-4 md:mx-8 text-left">
                {merches.map((v: Merch) => (
                    // eslint-disable-next-line react/jsx-key
                    <ShopItem
                        id={v._id}
                        name={v.name}
                        description={v.description}
                        amount={v.amount}
                    ></ShopItem> 
                ))}
            </div>
        </div>
    )
}

export default ShopPage
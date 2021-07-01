import React, { FC } from "react"

const ShopPage: FC = () => {
    return (
        <div className="text-center">
            <p className="mt-2 text-base md:text-3xl">상점</p>
            <p className="mt-2 text-base md:text-lg">무슨 아이템이 있을까?</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 auto-cols-max md:auto-cols-min mx-4 md:mx-8">
                <div className="bg-gray-700 shadow-lg h-12 md:h-32 w-auto md:w-42 rounded-lg ">1</div>
                
            </div>
        </div>
    )
}

export default ShopPage
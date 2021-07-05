import React, { FC, useEffect, useState } from "react"
import StockItem from "../../components/stockItem"
import LoadingCircle from "../../components/loadingCircle"
import api from "../../utils/api"

const STOCK_LIST: string[] = [
    'MCIT',
    'PGDR',
    'WRKP',
    'BBNK',
    'SJPG',
    'GGKB',
    'BTCN',
]

interface StockDataInterface {
    _id: string
    money: number
    name: string
    previous: number
    code: string
    lastStockUpdateData: [number, number[]][]
}

const StockPage: FC = () => {
    const [latestViewedStock, setlatestViewedStock] = useState('SJPG')
    const [loadState, setLoadState] = useState<boolean>(false)
    const [stockData, setStockData] = useState<StockDataInterface[]>([])

    useEffect(() => {
        const stockCode = localStorage.getItem('stockCode')
        if (stockCode && STOCK_LIST.includes(stockCode))  setlatestViewedStock(stockCode)
        
        api.get('/v1/stock')
            .then(res => res.data)
            .then(data => {
                setStockData(data)
                setLoadState(true)
            })
    })

    if (!loadState) {
        return (
            <div className="text-center">
                <div className="text-right bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    <div className="mr-8 md:mr-16">
                        <p className="text-3xl xlmd:text-4xl font-bold pt-10">주식</p>
                        <p className="text-lg md:text-2xl mt-2 font-bold">와! 주식 아시는구나!.</p>
                        <p className="pb-8"></p>
                    </div>
                </div>
                <br /><br /><br /><br />
                <LoadingCircle
                    width={35}
                    height={35}
                />
            </div>
        )
    }

    return (
        <div className="text-center">
            <div className="text-right bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                <div className="mr-8 md:mr-16">
                    <p className="text-3xl xlmd:text-4xl font-bold pt-10">주식</p>
                    <p className="text-lg md:text-2xl mt-2 font-bold">와! 주식 아시는구나!.</p>
                    <p className="pb-8"></p>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-4 auto-cols-max md:auto-cols-min mx-4 md:mx-8 text-left">
                {Object.entries(stockData).map(v => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <StockItem 
                            name={v[1].name}
                            code={v[1].code}
                            money={v[1].money}
                            previous={v[1].previous}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default StockPage
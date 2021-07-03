import React, { FC, useEffect, useState } from "react"
//import Chart from "react-apexcharts"
import LoadingCircle from "../components/loadingCircle"
import api from "../utils/api"

const STOCK_LIST: string[] = [
    'MCIT',
    'PGDR',
    'WRKP',
    'BBNK',
    'SJPG',
    'GGKB',
    'BTCN',
]

const StockPage: FC = () => {
    const [latestViewedStock, setlatestViewedStock] = useState('SJPG')
    const [loadState, setLoadState] = useState(false)
    const [stockData, setStockData] = useState({})

    useEffect(() => {
        const stockCode = localStorage.getItem('stockCode')
        if (stockCode && STOCK_LIST.includes(stockCode))  setlatestViewedStock(stockCode)
        
        for (const stock in STOCK_LIST) {
            api.get(`/v1/stock/${STOCK_LIST[stock]}`)
            .then(res => res.data)
            .then(data => {
                setStockData({
                    [data.code]: {
                        isLoaded: true,
                        name: data.name,
                        series: data.lastStockUpdateData,
                    }
                })
                if (Number(stock) >= STOCK_LIST.length - 1)
                    setLoadState(true)
            })
        }
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
            
        </div>
    )
}

export default StockPage
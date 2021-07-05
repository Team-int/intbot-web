import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import api from "../../utils/api"

const StockDetailView: NextPage = () => {
    const router = useRouter()
    const { code } = router.query
    const [loadState, setLoadState] = useState(false)

    useEffect(() => {
        api.get(`/v1/stock/${code}`)
            .then(res => res.data)
            .then((data) => {
                console.log(data)
                setLoadState(true)
            })
    }, [code])


    return (
        <div className="text-center mt-1">
            <div className="mt-10">
                <p className="text-xl md:text-3xl">Hi!</p>
            </div>
        </div>
    )
}

export default StockDetailView
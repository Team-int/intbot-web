import Link from 'next/link'
import { FC } from 'react'

const NavigationBar: FC = () => {
    return (
        <>
            <nav className="bg-gray-500 text-white shadow  transition-colors duration 200 fixed px-4 md:px-6 py-5 md:py-6 z-50 w-full h-16 md:h-20">
                <div className="max-w-8xl m-auto md:px-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center ">
                    {/* <Image alt="logo" src="" height={30} width={30} /> */}
                    <div className=" pl-2 ">
                        <Link href="/">
                        <a href="/">
                            <span className="text-xl md:text-2xl font-bold tracking-tight flex items-center flex-shrink-0  md:mr-6  text-white dark:text-white">
                                인트봇
                            </span>
                        </a>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center font-semibold text-lg  text-white  dark:text-white mx-6">
                        <Link href="/">소개</Link>
                    </div>
                    <div className="hidden md:flex items-center text-lg font-semibold text-white  dark:text-white mx-6">
                        <Link href="/shop">상점</Link>
                    </div>
                    <div className="hidden md:flex items-center  text-lg font-semibold text-white  dark:text-white mx-6">
                        <Link href={'https://discord.com/api/oauth2/authorize?client_id=798709769929621506&permissions=1077275712&redirect_uri=http%3A%2F%2F127.0.0.1%3A8000%2Fcallback&scope=bot'}>초대</Link>
                    </div>
                    </div>
                </div>
                </div>
            </nav>
        </> 
    )
}

export default NavigationBar
import { FC, ReactNode } from 'react'
import Header from './header'

const Layout: FC<ReactNode> = ({ children }) => {
    return (
        <>
            <div className="text-white transition-colors duration-200">
                <Header />
            </div>
            <main className="text-center pt-14 md:pt-16">
                {children}
            </main>
        </>
    )
}

export default Layout
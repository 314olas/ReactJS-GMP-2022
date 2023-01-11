import Footer from './Footer'
import Header from './Header/Header'

export interface ILayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
    return (
        <>
            <Header />
            <main className='content'>{children}</main>
            <Footer />
        </>
    )
}
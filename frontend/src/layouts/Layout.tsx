import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Toast from '../components/Toast';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='flex flex-col min-h-screen bg-slate-900'>
            <Toast />
            <Header />
            <Hero />
            <div className='container mx-auto py-10 flex-1'>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;

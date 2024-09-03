import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import '@/styles/global.css'
import Footer from "@/components/Footer/Footer";
import 'swiper/css';
import 'swiper/css/navigation';
export const metadata: Metadata = {
  title: "Электра — безопасность",
  description: "Полный комплекс работ по системам инженерно-технических средств охраны, пожарной сигнализации, связи.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={'font-body'}>
          <Header className='header'/>

          <div className='content'>
            {children}
          </div>

          <Footer className='footer'/>
      </body>
    </html>
  );
}


import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'portfolio Builder',
  description: 'portfolio Builder',
}
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import AppProvider from '@/hooks/Store/AppProvjder';
import RouterValidator from '@/Utils/RouterValidator';
import RouterValidatorClient from '@/Utils/RouterValidatorClient';
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="icon shortcut" href="https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" type="image/x-icon"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className} >


        <RouterValidator>
          <AppProvider>
            <RouterValidatorClient>
              {children}
            </RouterValidatorClient>
          </AppProvider>
        </RouterValidator>

      </body>
    </html>
  )
}

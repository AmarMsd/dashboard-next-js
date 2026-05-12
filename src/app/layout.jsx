import "../styles/global.css"; 
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'], 
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
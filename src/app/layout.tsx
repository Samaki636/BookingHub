import '@/app/ui/global.css';
import { roboto } from '@/app/ui/fonts';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Booking Hub</title>
      </head>
      <body className={`${roboto.className} antialiased bg-gray-900 text-white min-h-screen flex flex-col`}>
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Booking Hub</h1>
            <NavLinks />
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="login">Login</a>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="signup">Sign Up</a>
            </button>
          </div>
        </header>
        
        <main className="p-4">
          {children}
        </main>
        
        <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
          <p>&copy; 2025 Booking Hub. All rights reserved.</p>
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}

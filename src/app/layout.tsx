// app/layout.tsx
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'THE EKTA PROJECT - Building Unity Through Action',
  description: 'Empowering communities through sustainable development, education, and healthcare',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        
          {children}
        
      </body>
    </html>
  );
}
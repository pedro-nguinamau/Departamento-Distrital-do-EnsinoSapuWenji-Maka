import "./globals.css";


export const metadata = {
  title: "Departamento do ensino",
  description: "App do ensino",
  icons: {
    icon: "/images.jpeg", // Ou remove esta linha para não ter favicon
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <div id="root">
        {children}
        </div>
       
      </body>
    </html>
  );
}

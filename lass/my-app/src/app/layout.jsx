import '@/styles/globals.css'



export const metadata ={
    title:"Promptopia",
    description:"Disover & Share AI Prompts"
}
const RootLayout = ({children}) => {
  return (
    <html>
        <body>

           
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className='app'>
                {/* Gets Children from the page file. ( displays whatever u want) */}
                {children}

            </main>
        </body>
      
    </html>
  )
}

export default RootLayout;

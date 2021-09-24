import Footer from "./footer"
import Navbar from "./navbar"


export default function Layout ({children}) {
    return(
        <div style={mainContainer}>
            <Navbar/>
            <main style={mainSpace}>{children}</main>
            <Footer/>
        </div>
    )
}


const mainContainer ={
    display:'flex',
    flexDirection:'column',
    minHeight:'100vh'
}

const mainSpace ={
    flex: 1
}
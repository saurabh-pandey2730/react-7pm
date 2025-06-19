
import './App.css'
import  Element from './CreateElementsByProps'
import Footer from './Footer'
import { MultipleExports, MultipleExports2 } from './MultipleExports'
import Navbar from './Navbar'
import UseEffect from './UseEffect'
import UseStateComponent from './UseState'
import UseStateDemo from './UseStateDemo'
import { NavbarData } from './data'
function App() {

// console.log(NavbarData)

  return (
    <>
     
      <Navbar data={NavbarData} />
      {/* <Footer title ='hello from footer props' parent="App file" />
      <Element type="text"  placeholder="enter name please "  className="lg"/>
      <Element type="email"  placeholder="enter name please "  className="sm"/> */}
      {/* <UseStateComponent/> */}
      {/* <UseStateDemo/> */}
      <UseEffect/>
      
    </>
  )
}

export default App

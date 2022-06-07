import Leftside from "./components/Leftside"
import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"
import RightSide from "./components/RightSide"

function App() {


  return (
    <div className="w-full min-h-screen bg-inherit py-4 px-2">
      <Navbar />
      <MainContent />
    </div>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import NewNote from "./components/NewNote"
import Home from "./components/Home"
const App = () => {

  return (
    <div>
      <Routes>
           <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/newnote" element={<NewNote/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
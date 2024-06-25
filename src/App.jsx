import { Route, Routes } from "react-router-dom"
import Signup from "./components/Signup"
import Login from "./components/Login"

const App = () => {
  return (
      <>
          <Routes>
              <Route index element={<Login/> } />
              <Route path={"/signup" } element={ <Signup/>} />
          </Routes>
    </>
  )
}

export default App

import { useEffect } from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import GlobalStyle from "./assets/globalstyle"
import UserProvider from "./contexts/UserContext"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"
import MainScreen from "./pages/MainScreen/MainScreen"
import Ranking from "./pages/Ranking/Ranking"

export default function App() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // function goToInitialPage() {
  //   if (localStorage.getItem("token")) {
  //     navigate("/home")
  //     return
  //   }
  //   navigate("/")
  // }

  // useEffect(() => {
  //   if (pathname !== '/cadastro') {
  //     goToInitialPage()
  //   }
  // }, [pathname])

  return (
    <UserProvider>
    <GlobalStyle />
      <Routes>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/" element={<MainScreen />}/>
          <Route path="/ranking" element={<Ranking />}/>
      </Routes>
    </UserProvider>
  )
}

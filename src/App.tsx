import Layout from "components/Leyout"
import GlobalStyles from "./styles/GlobalStyles"
import { Route, Routes } from "react-router-dom"
import Home from "pages/Home"
import Users from "pages/Users"

// import Counter from "components/Counter"
// import Feedback from "components/Feedback/Feedback"

// import Homework29 from "./homeworks/Homework29"
// import Lesson30 from "lessons/Lesson30"

function App() {
  return (
    <>
      <GlobalStyles />

      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="*" element="Page is not found" />
        </Routes>
      </Layout>
    </>
  )
}

export default App

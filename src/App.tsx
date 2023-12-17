import GlobalStyles from "./styles/GlobalStyles"
import Counter from "components/Counter"
import Feedback from "components/Feedback/Feedback"

import Homework29 from "./homeworks/Homework29"
import Lesson30 from "lessons/Lesson30"

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Lesson30/> */}
       <Counter /> 
       <Feedback />
    </>
  )
}

export default App

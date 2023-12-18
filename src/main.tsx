
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "./store/store"
import App from "./App"


ReactDOM.createRoot(document.getElementById("root")!).render(
  // провайдер это компанент который оборачивает все приложение 
// следствнно все компоненты имеют возможность изменять в торе
  // соотвественно все компоненты имеют достп
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>,
  
)

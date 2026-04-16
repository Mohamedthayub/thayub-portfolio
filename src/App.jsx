import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import RootLayout from "./layout/RootLayout";
import NotFound from "./pages/NotFound";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element = {<RootLayout/>}>
        <Route index  element = {<Home/>}/>
        <Route path="about" element = {<About/>}/>
        <Route path="skills" element = {<Skills/>}/>
        <Route path="projects" element = {<Projects/>}/>
        <Route path="contact" element = {<Contact/>}/>
        <Route path="*" element = {<NotFound/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
    
  )
}
export default App;
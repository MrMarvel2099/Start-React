import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Layout from '../Layout/Layout';
import Portfolio from "../Portfolio/Portfolio";


let routers = createBrowserRouter([
  { path: '/' , element: <Layout /> , children:[
    {index:true , element:<Home/>},
    {path:'home' , element:<Home/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'about' , element:<About/>},
    {path:'contact' , element:<Contact/>},
  ] }
])
function App() {
  return <RouterProvider router={routers}/>;
}

export default App;

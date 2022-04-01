import Pages from  "./pages/Pages";
import styled from 'styled-components'
import './App.css';
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import { Link } from "react-router-dom";
import {SiCodechef} from "react-icons/si";
import {GiKnifeFork} from "react-icons/gi";
import PageState from "./context/PageState";

function App() {
  return (
    <div className="App">
      <PageState>

      <BrowserRouter>
      <Nav >
        <GiKnifeFork/><SiCodechef/>
        <Logo to={"/"}>Tried Something New</Logo>
      </Nav>
      <Search/>
      <Category/>
      <Pages/>
      </BrowserRouter>
      </PageState>
   
    
    </div>
  );
}


const Logo = styled(Link)`
text-decoration : none;
font-size:1.5rem;
font-weight:400;
font-family: 'Lobster Two',cursive;
`;

const Nav =styled.div`
padding : 1rem 0rem;
position: fixed;
display:flex;
justify-content:flex-start;
align-items:center;
svg{
  font-size:2rem;
}

`
export default App;

import { useState, React } from 'react';
import styled from 'styled-components';
import { MainLayout } from './styles/Layouts';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Income/Income';
import Expenses from './components/Expenses/Expenses';
import Navbar from './components/Navbar/Navbar';
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global)

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  return (
    <AppStyled className="App">
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
          {/* <Navbar></Navbar> */}
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}
  const AppStyled = styled.div`
  ::-webkit-scrollbar{
    display: none;
  }
    height: 100vh;
    width: 100vw;
    position: relative;
    main{
      position: absolute;
      top: 0;
      right: 0;
      width: 75vw;
      height: 100vh;
      display: grid;
      grid-template-columns: repeat(20, 1fr);
      grid-template-rows: repeat(20, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
  `


export default App;

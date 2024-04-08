import styled from 'styled-components';
import './App.css';
import { MainLayout } from './styles/Layouts';

function App() {
  const AppStyled = styled.div`
    height: 100vh;
  `
  return (
    <AppStyled className="App">
      <MainLayout/>
    </AppStyled>
  );
}


export default App;

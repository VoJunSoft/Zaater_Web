import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Zaater from './screens/Zaater';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Zaater />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

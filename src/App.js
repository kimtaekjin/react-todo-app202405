import './App.css';
import TodoTemplate from './components/todo/TodoTemplate';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/user/Login';
import Join from './components/user/join';
import { AuthContextProvider } from './utils/AuthContext';

function App() {
  //데이터를 전달하고자 하는 자식 컴포넌트를 provider로 감쌉니다.
  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path='/' element={<TodoTemplate />} />

        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
      </Routes>

      <Footer />
    </AuthContextProvider>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import WellcomPage from './pages/WellcomPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import MainPage from './pages/MainPage';
import DashboardPage from './pages/DashboardPage';
import DiaryPage from './pages/DiaryPage';
import RecommendedFoodPage from './pages/RecommendedFoodPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {false && <Route index element={<WellcomPage />}/>}
        <Route path='signup' element={<SignUpPage />}/>
        <Route path='signin' element={<SignInPage />}/>
        <Route path='forgot-password' element={<ForgotPasswordPage/>}/>

        <Route index element={<MainPage />}/>
        <Route path='dashboard' element={<DashboardPage />}/>
        <Route path='diary' element={<DiaryPage/>}/>
        <Route path='recommended-food' element={<RecommendedFoodPage/>}/>
        <Route path='settings' element={<SettingsPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;

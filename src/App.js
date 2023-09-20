import './styles/fonts.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import WellcomPage from './pages/WellcomPage/WellcomPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import MainPage from './pages/MainPage/MainPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import DiaryPage from './pages/DiaryPage/DiaryPage';
import RecommendedFoodPage from './pages/RecommendedFoodPage/RecommendedFoodPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAuthStatus } from './redux/auth/selectors';
// import { useDispatch } from 'react-redux';
// import { instance, loginThunk, refreshThunk, registrationThunk } from './redux/auth/operations';

function App() {

  let isAuth= useSelector(getAuthStatus); 

// const dispatch=useDispatch();
// useEffect(()=>{
//   dispatch(refreshThunk())
// },[dispatch])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={!isAuth ? <WellcomPage /> : <MainPage />}  />
        <Route path='signup' element={<RestrictedRoute redirectTo='/' component={<SignUpPage />}  />}/>
        <Route path='signin' element={<RestrictedRoute redirectTo='/' component={<SignInPage />}  />}/>
        <Route path='forgot-password' element={<RestrictedRoute redirectTo='/' component={<ForgotPasswordPage />} />}/>

        <Route path='dashboard' element={<PrivateRoute redirectTo='/signin' component= {<DashboardPage />} />}/>
        <Route path='diary' element={<PrivateRoute redirectTo='/signin' component= {<DiaryPage />} />} />
        <Route path='recommended-food' element={<PrivateRoute redirectTo='/signin' component= {<RecommendedFoodPage />} />} />
        <Route path='settings' element={<PrivateRoute redirectTo='/signin' component= {<SettingsPage />} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;

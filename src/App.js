import './styles/fonts.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthStatus, getIsLoadingAuth } from './redux/auth/selectors';
import { getStacticsLoading } from 'redux/statistic/selectors';
import { getFoodIntakeLoading } from 'redux/diary/selectors';
import { getWaterIntakeLoading } from 'redux/dailyWater/selectors';
import { getCaloriesGoalLoading } from 'redux/dialyGoalCalories/selectors';
import { getRecommendedFoodLoading } from 'redux/recommendedFood/selectors';
import { refreshThunk } from './redux/auth/operations';
import Loader from 'components/Loader/Loader';
// import { fetchFoodIntake, postFoodIntake, updateFoodIntake } from 'redux/diary/operations';

const WellcomPage = lazy(() => import('./pages/WellcomPage/WellcomPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const ForgotPasswordPage = lazy(() =>
  import('./pages/ForgotPasswordPage/ForgotPasswordPage')
);
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage'));
const RecommendedFoodPage = lazy(() =>
  import('./pages/RecommendedFoodPage/RecommendedFoodPage')
);
const SettingsPage = lazy(() => import('./pages/SettingsPage/SettingsPage'));

function App() {
  let isAuth = useSelector(getAuthStatus);
  const isAuthLoading = useSelector(getIsLoadingAuth);
  const isStatisticsLoading = useSelector(getStacticsLoading);
  const isFoodLoading = useSelector(getFoodIntakeLoading);
  const isWaterLoading = useSelector(getWaterIntakeLoading);
  const isCaloriesLoading = useSelector(getCaloriesGoalLoading);
  const isRecommendedLoading = useSelector(getRecommendedFoodLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
    // dispatch(fetchFoodIntake())
    // dispatch(postFoodIntake({type:"lunch", products:[{name: "Apple",carbohydrates: 23,protein:  55 ,fat: 44 ,calories: 60}]}))
    //  dispatch(updateFoodIntake({id:"650f8352565b69b1151714ea", type:"lunch", product:{name: "Mango",carbohydrates: 23,protein:  55, fat: 44, calories:60}}))
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={!isAuth ? <WellcomPage /> : <MainPage />} />
          <Route
            path="signup"
            element={
              <RestrictedRoute redirectTo="/" component={<SignUpPage />} />
            }
          />
          <Route
            path="signin"
            element={
              <RestrictedRoute redirectTo="/" component={<SignInPage />} />
            }
          />
          <Route
            path="forgot-password"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<ForgotPasswordPage />}
              />
            }
          />

          <Route
            path="dashboard"
            element={
              <PrivateRoute
                redirectTo="/signin"
                component={<DashboardPage />}
              />
            }
          />
          <Route
            path="diary"
            element={
              <PrivateRoute redirectTo="/signin" component={<DiaryPage />} />
            }
          />
          <Route
            path="recommended-food"
            element={
              <PrivateRoute
                redirectTo="/signin"
                component={<RecommendedFoodPage />}
              />
            }
          />
          <Route
            path="settings"
            element={
              <PrivateRoute redirectTo="/signin" component={<SettingsPage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      {(isAuthLoading ||
        isCaloriesLoading ||
        isStatisticsLoading ||
        isFoodLoading ||
        isWaterLoading ||
        isRecommendedLoading) && <Loader />}
    </>
  );
}

export default App;

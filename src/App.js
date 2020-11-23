import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostListPage from './pages/PostListPage';
import PostCreatePage from './pages/PostCreatePage';
import PostDetailPage from './pages/PostDetailPage';
import Navbar from './components/header/Navbar';
import { MultiLevelProvider } from './context/MultiLevelContext';
import ReplyCreatePage from './pages/ReplyCreatePage';
import ProtectedRoute from './routes/ProtectedRoute';
import LoggedInRoute from './routes/LoggedInRoute';

function App() {
  return (
    <div style={{backgroundColor:'#282c34',color:'whitesmoke'}}>
      <MultiLevelProvider>
        <Navbar />
        <div className='container'>
          <Switch>
            <ProtectedRoute path='/posts/create' component={PostCreatePage} exact />
            <ProtectedRoute path='/posts/:postId' component={PostDetailPage} exact />
            <ProtectedRoute path='/posts/:postId/reply' component={ReplyCreatePage} exact />
            <ProtectedRoute path='/posts' component={PostListPage} exact/>
            <LoggedInRoute path='/register' component={RegisterPage} exact/>
            <LoggedInRoute path='/login' component={LoginPage} exact/>
            <Route path='/' component={HomePage} exact/>
            <Route render={() => <Redirect to={{pathname: "/"}} />} />
          </Switch>
        </div>
      </MultiLevelProvider>
    </div>
  );
}

export default App;

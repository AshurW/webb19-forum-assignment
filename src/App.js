import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostListPage from './pages/PostListPage';
import PostCreatePage from './pages/PostCreatePage';
import PostDetailPage from './pages/PostDetailPage';
import Navbar from './components/header/Navbar';
import { MultiLevelProvider } from './context/MultiLevelContext';
import ReplyCreatePage from './pages/ReplyCreatePage';

function App() {
  return (
    <div style={{backgroundColor:'#282c34',color:'whitesmoke'}}>
      <MultiLevelProvider>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path='/posts/create' component={PostCreatePage} exact />
            <Route path='/posts/:postId' component={PostDetailPage} exact />
            <Route path='/posts/:postId/reply' component={ReplyCreatePage} exact />
            <Route path='/posts' component={PostListPage} exact/>
            <Route path='/register' component={RegisterPage} exact/>
            <Route path='/login' component={LoginPage} exact/>
            <Route path='/' component={HomePage} exact/>
          </Switch>
        </div>
      </MultiLevelProvider>
    </div>
  );
}

export default App;

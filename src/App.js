import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostListPage from './pages/PostListPage';
import PostCreatePage from './pages/PostCreatePage';
import PostDetailPage from './pages/PostDetailPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Switch>
        <Route path='/posts/create' component={PostCreatePage} exact />
        <Route path='/posts/:postId' component={PostDetailPage} exact />
        <Route path='/posts' component={PostListPage} exact/>
        <Route path='/register' component={RegisterPage} exact/>
        <Route path='/login' component={LoginPage} exact/>
        <Route path='/' component={HomePage} exact/>
      </Switch>
    </div>
  );
}

export default App;

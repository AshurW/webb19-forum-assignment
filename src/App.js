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
        <Route path='/posts/:postId' component={PostDetailPage} />
        <Route path='/posts/create' component={PostCreatePage} />
        <Route path='/posts' component={PostListPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './components/shared/Layout';
import PostDetail from './pages/PostDetail';
import Posts from './pages/Posts';
import UserPosts from './pages/UserPosts';
import Users from './pages/Users';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" richColors />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Posts />} /> {/* Default to posts */}
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserPosts />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={} errorElement={''}>
      <Route errorElement={}>
        <Route index element={} />

      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
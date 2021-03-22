import React from 'react';
import Navigation from '../Navigation';
import useSession from '../_shared/Session/useSession';
import AppRoutes from './AppRoutes';
import { ToastContainer } from 'react-toastify';
import { HashRouter } from 'react-router-dom';

function App() {
  const { loading, authUser } = useSession();

  return (
    <main>

      {loading
        ?
        <div style={{ height: "100%", width: "100%" }}>
          Loading..
        </div>
        :
        <HashRouter>
          <Navigation authUser={authUser} />
          <AppRoutes authUser={authUser} />
        </HashRouter>
      }
      
      <ToastContainer />
    </main>
  );
}

export default App;

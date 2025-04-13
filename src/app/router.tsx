import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/shared/layout/Layout'
import { appRoutes } from './config'

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

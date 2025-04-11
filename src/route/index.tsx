import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../component/layout/Layout'
import { routes } from './routes'

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(({ path, element }) => (
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

import { BrowserRouter, Route, RouteObject, Routes } from 'react-router-dom'
import Layout from '@layout/Layout'
import { appRoutes } from './config'

function renderRoutes(routes: RouteObject[]): React.ReactNode {
  return routes.map(({ path, element, children }, i) => (
    <Route
      key={i}
      path={path}
      element={element}>
      {children && renderRoutes(children)}
    </Route>
  ))
}

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>{renderRoutes(appRoutes)}</Routes>
      </Layout>
    </BrowserRouter>
  )
}

import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="max-w-screen-md mx-auto py-6 px-6 md:px-0">
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout
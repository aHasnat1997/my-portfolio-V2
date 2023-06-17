import './App.css'
import MainLayout from './Section/MainSection/MainLayout'
import PersonalInfo from './Section/PersonalInfo/PersonalInfo'
import MenuNav from './components/MenuNav'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <main className='grid grid-cols-1 lg:grid-cols-4 lg:gap-4 relative'>
        <aside className='h-screen py-12 px-4 w-full flex justify-center items-center lg:sticky top-0'>
          <PersonalInfo />
        </aside>
        <aside className='col-span-3'>
          <MainLayout />
        </aside>
      </main>
    </>
  )
}

export default App

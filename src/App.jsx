import './App.css'
import Cards from './Components/Cards/Cards'
import Cart from './Components/Cards/Cart/Cart'
function App() {
 

  return (
    <>
      <div className='max-w-screen-xl mx-auto mt-10'>
        <h1 className='text-4xl font-bold text-center'>Course Registration</h1>

        <div className='flex gap-5 justify-between p-5'>
          <Cards></Cards>
          <Cart></Cart>
        </div>
      </div>
      
      
    </>
  )
}

export default App

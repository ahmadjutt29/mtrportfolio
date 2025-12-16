import Home from './pages/Home'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      <main className="flex-grow pt-16">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App

import { useNavigate } from "react-router-dom"


export const  HomePage = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  const navigateuser = async () => {
    if (token) {
      alert('you are already logged in')
      navigate('/dashboard')
    } else {
      navigate('signup')
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <h1 className="text-white text-lg font-medium">Easy-Pay</h1>
          <button
            
            className="bg-white/15 border-white/25 text-white hover:bg-white/25 hover:border-white/40 px-8 py-3 rounded-full text-lg font-medium backdrop-blur-sm transition-all duration-300 shadow-lg"
           onClick={navigateuser}>
            Start
          </button>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6">
          <h2 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-8 drop-shadow-lg">
            Welcome to Easy-pay
            <br />
            <span className="text-blue-200">& make your life</span>
            <br />
            <span className="text-purple-200">easy</span>
          </h2>

          <p className="text-white/90 text-xl md:text-2xl font-medium drop-shadow-md">"Easy Pay: Tap, Pay, Done."</p>
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex gap-4 text-3xl text-white">
        <Link
          to="/TodoApp"
          className="w-fit flex items-center p-2 h-[40px] bg-sky-900"
        >
          Todo
        </Link>
        <Link
          to="/MusicStore"
          className="w-fit flex items-center p-2 h-[40px] bg-sky-900"
        >
          Music Store
        </Link>
      </div>
    </div>
  )
}

export default HomePage

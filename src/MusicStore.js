import { Link } from 'react-router-dom'
import music from './data/musicStore'

const MusicStore = () => {
  return (
    <div className="flex flex-col gap-20 bg-slate-400 h-screen">
      <nav className="max-w-full h-20 p-10 flex items-center justify-center gap-8 text-xl bg-slate-100">
        <Link to="/">HOME</Link>
        <Link to="/TodoApp">TODO</Link>
      </nav>
      <div className="w-[1480px] flex gap-x-10 self-center">
        {music.map((item, index) => {
          return (
            <div
              key={index}
              className="border border-black bg-slate-100 w-fit p-5 rounded-xl flex flex-col gap-4"
            >
              <img alt={item.name} src={item.image} className="" />
              <p className="text-lg">
                Name: {item.name}
                <br />
                Artist: {item.artist}
                <br />
                Price: {item.price}$
              </p>

              <button className="bg-black text-white rounded-md h-10 border ">
                Buy
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MusicStore

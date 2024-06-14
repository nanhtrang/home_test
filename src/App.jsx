import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import data from './assets/data/nguyen-thi-tuong.json'

function App() {
  const [request, setRequest] = useState(null)
  const [folder, setFolder] = useState([])
  const [cusId, setCusId] = useState(null)
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGWEwXpRS7z7rVaGrjIWWTdE8_TiYTGiYjA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGWEwXpRS7z7rVaGrjIWWTdE8_TiYTGiYjA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGWEwXpRS7z7rVaGrjIWWTdE8_TiYTGiYjA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGWEwXpRS7z7rVaGrjIWWTdE8_TiYTGiYjA&s',
  ]
  useEffect(() => {
    setRequest(data.request)
    setFolder(data.imageFolder)
    setCusId(data.id)
  }, [])

  function folderImage(folder) {
    const listName = []
    for (let i = folder.img[0]; i <= folder.img[1]; i++) {
      listName.push("/" + cusId + "/" + folder.name + "/" + i + ".jpg")
    }


    return (
      <>
        <div className='divider'>
          
        </div>
        <div style={{
          whiteSpace: "pre-line"
        }}>
          {folder.description}
        </div>
        <PhotoProvider>
          <div className="foo">
            {listName.map((item, index) => (
              <PhotoView key={index} src={item}>
                <img src={item} alt="" style={{
                  maxWidth: '200px',
                  minWidth: '200px',
                  minHeight: '150px',
                  margin: '10px',
                }} />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </>
    );
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* {JSON.stringify(folder)}
      <div className='request'>
        
      </div>
      <div className='toantest'>
      {testFunction()}
      </div> */}
      {folder.map((item) => folderImage(item))}
    </>
  )
}

export default App

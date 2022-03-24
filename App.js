import './App.css';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import { useEffect, useState } from 'react';

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  useEffect(() => {
    if (search == '') return
    const fetchData = async () => {
      document.title = `${search} Music`
      const query = search.split(' ').join('+')
      const response = await fetch(`https://itunes.apple.com/search?term=${query}`)
      const json = await response.json()
      console.log(json)
      if (json.results.length > 0) {
        setData(json.results)
        setMessage('Songs found')
      } else {
        setMessage('No songs found')
      }
        
    }
    fetchData()
  }, [search])

  return (
    <div className="App">
      <SearchBar setSearch={setSearch}/>
      {message}
      {data.length ? <Gallery data={data}/> : <div>No Tracks</div>}
    </div>
  );
}

export default App;

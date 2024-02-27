import { useState, useEffect } from 'react'

function useFetchInfo (url = '') {
  const [info, setInfo] = useState([])
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setInfo(data))
  }, [])

  return { info }
}

export default useFetchInfo

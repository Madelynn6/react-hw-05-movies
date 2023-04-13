import { useState, useEffect } from 'react';
import { getData } from '../../utils/fetchAPI';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const dataList = await getData();
      setData(dataList.results);
    };
    loadData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {console.log(data)}
      <ul>
        {data.map(el => (
          <li key={el.id}>
            {el.title} {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

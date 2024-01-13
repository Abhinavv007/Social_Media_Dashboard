import React, { useEffect, useState } from 'react';
import CardContainer from './CardContainer';
import axios from 'axios';
import ShowCard from './ShowCard';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get("http://localhost:9000/api/get");
        if (result.data.msg) {
          setData(result.data.msg);
        } else {
          alert("No data to show");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        alert("Error fetching data");
      }
    };

    getData();
  }, []);

  return (
    <>
      <CardContainer />
      <div className="container mt-4">
        <p className="mb-4" style={{ fontSize: '28px', textAlign: "center", fontFamily: "revert-layer", fontWeight: 700 }}>
          Your All Social Media Feeds
        </p>
        <div className="row ">
          {data && data.map((item) => {
            console.log(item);
            return (
              <div key={item._id} className="col-md-4 mb-2">
                <ShowCard postedBy={item.postedBy} imageurl={item.imageurl} description={item.description} />
              </div>
            );
          })}
        </div>
      </div>
      
    </>
  );
}

export default Home;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LinkedIn = () => {
  const [input, setInput] = useState({
    imageurl: '',
    description: '',
    postedBy:"Linked In"
  });
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:9000/api/add",input)
   if(result.data.msg==="Post uploaded successfully"){
    alert(result.data.msg)
    navigate("/")
   } else{
    alert(result.data.msg)
    
   }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-5">
      <h2 className="mb-4"><FontAwesomeIcon icon={faLinkedin} size="2x" /></h2>
      <form onSubmit={handleSubmit} className="col-md-6 mb-5">
        <div className="form-group">
          <label className='mb-2' htmlFor="imageurl">Image URL:</label>
          <input
            type="text"
            id="imageurl"
            name="imageurl"
            className="form-control"
            placeholder="Enter image URL"
            value={input.imageurl}
            onChange={(e) => setInput({ ...input, imageurl: e.target.value })}
          />
        </div>
        <div className="form-group mt-3">
          <label className='mb-2' htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            placeholder="Enter image description"
            value={input.description}
            onChange={(e) => setInput({ ...input, description: e.target.value })}
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary mt-4">
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default LinkedIn;

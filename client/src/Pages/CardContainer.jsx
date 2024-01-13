import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardContainer = () => {
  const navigate = useNavigate()
  return (
    <div className="text-center mt-5">
      <p className="font-weight-bold mb-3" style={{ fontSize: '24px' }}>
        Add Your Posts from Your Social Media Account
      </p>
      <div className="d-flex flex-row align-items-center justify-content-center mt-3">
        <div className="card mx-2" style={{ width: '20rem', height: '10rem' }}>
          <img onClick={()=>navigate("/facebook")}
            src="https://blog.42mate.com/wp-content/uploads/2016/03/fb.png"
            alt="Facebook"
            className="card-img-top"
            style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
          />
        </div>
        <div className="card mx-2" style={{ width: '20rem', height: '10rem' }}>
          <img onClick={()=>navigate("/linkedin")}
            src="https://cdn.siasat.com/wp-content/uploads/2023/04/LinkedIn.jpg"
            alt="LinkedIn"
            className="card-img-top"
            style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
          />
        </div>
        <div className="card mx-2" style={{ width: '20rem', height: '10rem' }}>
          <img
           onClick={()=>navigate("/instagram")}
            src="https://blog.ipleaders.in/wp-content/uploads/2019/01/Instagram-logo-1011468.jpg"
            alt="Instagram"
            className="card-img-top"
            style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;

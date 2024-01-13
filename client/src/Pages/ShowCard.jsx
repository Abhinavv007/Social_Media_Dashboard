import React from 'react';

const ShowCard = ({ imageurl, description, postedBy }) => {
  return (
    <div className="card mb-2" style={{ maxWidth: '400px' }}>
      <img src={imageurl} className="card-img-top" alt="Post" />
      <div className="card-body">
        <p className="card-text">{description}</p>
        {postedBy && (
          <p className="card-text">
            <strong>Posted via {postedBy}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default ShowCard;

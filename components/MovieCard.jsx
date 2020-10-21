import React from 'react'

export default function MovieCard(props) {
    return (
        
        <div className="card text-white bg-secondary mb-3">
      
        <div className="card-header">Title: {props.movie.title}</div>
        <div className="card-body">
    <h5 className="card-title">Producer: {props.movie.producer}</h5>
          <p className="card-text">Synopsis: {props.movie.description}</p>
        </div>
      </div>

    )
}

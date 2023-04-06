import React from "react";

const SongDetail = (
    {
        result = {
            "name": "Song Name",
            "icon": "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png",
            "album": "Album Name",
            "artist": "Artist Name",
            "genre": "Genre",
            "description": "xxx",
            "length": "x.xx"
        }
    }
) => {
    return (
      <>
          <div className="d-flex flex-row">
              <div className="col-6 align-items-center">
                  <div><h1>{result.name}</h1></div>
                  <div><span className="fw-bold">Artist:</span> {result.name}</div>
                  <div><span className="fw-bold">Album:</span> {result.album}</div>
                  <div><span className="fw-bold">Genre:</span> {result.genre}</div>
                  <div><span className="fw-bold">Length:</span> {result.length}</div>
                  <div className="">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                  </div>

              </div>
              <div className="col-6">
                  <img
                       className="img-fluid"
                       alt=""
                       src={result.icon}/>
              </div>
          </div>
          <br/>



      </>
    );
}
export default SongDetail;
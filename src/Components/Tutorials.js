import React from 'react'
import Axios from "axios";
import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const Tutorials = () => {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tutorial, setTutorial] = useState([]);

  //  const [newTitle, setnewTitle] = useState("");
  //   const [newDescription, setnewDescription] = useState("");

  //  const [tutorialList, setTutorialList] = useState([]);

  const addTutorial = (e) => {
    e.preventDefault();
    // console.log(title, description);
    Axios.post("http://localhost:8080/api/tutorials", {
      title: title,
      description: description,
      published: true,
    }).then(() => {
      setTutorial([
        ...tutorial,
        {
          title: title,
          description: description,
        },
      ]);
    });
  };

  const showTutorial = (e) => {
    e.preventDefault();
    Axios.get("http://localhost:8080/api/tutorials").then((response) => {
      setTutorial(response.data);
    });
  };

  const deleteTutorial = (id) => {
    Axios.delete(`http://localhost:8080/api/tutorials/${id}`).then(
      (response) => {
        setTutorial(
          tutorial.filter((val) => {
            return val.id !== id;
          })
        );
      }
    );
  };

  const updateTutorial = (id) => {
    Axios.put(`http://localhost:8080/api/tutorials/${id}`, {
      title: title,
      description: description,
      id: id,
    }).then((response) => {
      setTutorial(
        tutorial.map((val) => {
          return val.id === id
            ? {
                id: val.id,
                title: setTitle,
                description: setDescription,
              }
            : val;
        })
      );
    });
  };
  return (
<>
    <form className="container">
        <div className="mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="inputPassword3"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            cols="5"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={addTutorial}>
          Add Tutorial
        </button>
        <button className="btn btn-primary mx-3" onClick={showTutorial}>
          Show Tutorials
        </button>
      </form>
      {/* -------------------------------------------- */}
      <div className="container my-3">
        {tutorial.map((val, key) => {
          return (
            <div
              className="card text-dark bg-light mb-3 my-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header d-flex">
                {val.title}
                <FaTrash
                  className="d-flex justify-content-end"
                  role="button"
                  onClick={() => {
                    deleteTutorial(val.id);
                  }}
                />
                <FaEdit
                  className="d-flex justify-content-end"
                  role="button"
                  onClick={() => {
                    updateTutorial(val.id);
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Description</h5>
                <p className="card-text">{val.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* -------------------------------------------- */}
</>
  )
}

export default Tutorials
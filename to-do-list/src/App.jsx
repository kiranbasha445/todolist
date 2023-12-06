import { useState } from "react";

function App() {
  const [toDoList, setToDoItem] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const toDoItem = {
      todo: event.target[0].value,
      date: event.target[1].value,
    };
    setToDoItem([...toDoList, toDoItem]);

    event.target[0].value = "";
    event.target[1].value = "";
  };

  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom">
          <ul className="nav">
            <li>
              <a
                href="#"
                className="nav-link px-2 link-warning  row justify-content-center"
              >
                ToDOApp
              </a>
            </li>
          </ul>
        </header>
        <section>
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter todo here"
                  required
                />
              </div>
              <div className="col-2">
                <input
                  type="date"
                  className="form-control"
                  aria-label="Server"
                  required
                />
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-primary px-5">
                  Add
                </button>
              </div>
            </div>
          </form>
          <div>
            <table class="table mx-auto" style={{ maxWidth: "50%" }}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ToDo</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {toDoList.map((item, index) => (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{item.todo}</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

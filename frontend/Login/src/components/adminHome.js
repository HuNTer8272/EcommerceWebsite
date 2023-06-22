import React, { useEffect, useState, useRef } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from 'react-paginate';
import axios from "axios";

export default function AdminHome({ userData }) {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef(1);

  useEffect(() => {
    currentPage.current = 1;
    getPaginatedUsers();
  }, []);

  const getAllUser = () => {
    axios
      .get("http://localhost:5000/getAllUser")
      .then((response) => {
        const data = response.data;
        console.log(data, "userData");
        setData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching all users:", error);
      });
  };

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      axios
        .post("http://localhost:5000/deleteUser", {
          userid: id,
        })
        .then((response) => {
          const data = response.data;
          alert(data.data);
          getAllUser();
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };

  function handlePageClick(selectedPage) {
    currentPage.current = selectedPage.selected + 1;
    getPaginatedUsers();
  }

  function changeLimit() {
    currentPage.current = 1;
    getPaginatedUsers();
  }

  function getPaginatedUsers() {
    axios
      .get(`http://localhost:5000/paginatedUsers?page=${currentPage.current}&limit=${limit}`)
      .then((response) => {
        const data = response.data;
        console.log(data, "userData");
        setPageCount(data.pageCount);
        setData(data.result);
      })
      .catch((error) => {
        console.error("Error fetching paginated users:", error);
      });
  }

  return (
    <div className="auth-wrapper" style={{ height: "auto" }}>
      <div className="auth-inner" style={{ width: "auto" }}>
        <h3>Welcome Admin</h3>
        <table style={{ width: 500 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => {
              return (
                <tr key={i._id}>
                  <td>{i.fname}</td>
                  <td>{i.email}</td>
                  <td>{i.userType}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => deleteUser(i._id, i.fname)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          forcePage={currentPage.current - 1}
        />
        <input placeholder="Limit" onChange={(e) => setLimit(e.target.value)} />
        <button onClick={changeLimit}>Set Limit</button>
        <button onClick={logOut} className="btn btn-primary">
          Log Out
        </button>
      </div>
    </div>
  );
}

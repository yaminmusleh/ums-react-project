import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../loader/Loader";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [isloader, setLoader] = useState(true);
  const [error, setError] = useState("");
  const getUsers = async () => {
    try {
      const response = await axios.get(`https://ums12.runasp.net/api/users`);
      setUsers(response.data.users);
    } catch (error) {
      setError(`${error}`);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  if (isloader) return <Loader/>
  if (error) return <p className="alert alert-danger">{error}</p>;
  return (
    <section className="cardings py-5 text-center">
      <div className="container">
        <div className="row d-flex justify-content-center gap-4">
          {users.map((user) => (
            <div className="card py-4" style={{ width: "18rem" }}>
              <img
                src={user.imageUrl}
                className="card-img-top img-fluid"
                alt="Missed image"
              />
              <div className="card-body bg-warning ">
                <h2 className="card-title bg-danger">{user.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

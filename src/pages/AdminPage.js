/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../layouts/AdminLayout";

export default function AdminPage() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.use);
  const userAll = users.user;

  useEffect(() => {
    async function getListUser() {
      const response = await axios.get("users/login/getall", {
        headers: {
          token: users.userTokenAll,
        },
      });
      const user = response.data;
      // console.log("user", user);
      dispatch({
        type: "GET_USER_LIST",
        payload: user,
      });
    }

    getListUser();
  }, []);

  const handleDelete = async (idUser) => {
    const response = await axios.delete(`users/login/${idUser}`, {
      headers: {
        token: users.userTokenAll,
      },
    })
    alert(response.data)
    // dispatch({
    //   type: 'REMOVE_USER',
    //   payload: idUser
    // })

  }

  return (
    <div>
      <AdminLayout>
        {/* content */}
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">List User</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a className="btn btn-primary" href="/admin/user/create">
                        Create
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body table-responsive p-0">
                      <table className="table table-hover text-nowrap">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Họ Tên</th>
                            <th>Type</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Ví tiền</th>
                            <th>Cấp Vip</th>
                            <th>Chỉ Số</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userAll.map((user,index) => {
                            return (
                              <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.type}</td>
                                <td>{user.email}</td>
                                <td>{user.numberPhone}</td>
                                <td>{(user.price).toLocaleString()}</td>
                                <td>{user.vip}</td>
                                <td>{user.chiSo}</td>
                                <td>
                                  <button onClick={()=>{
                                    handleDelete(user.id)
                                  }} 
                                  className="btn btn-danger">
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
}

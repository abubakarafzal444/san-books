import React from "react";
import styles from "./ReceivedOrders.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import PasswordOverlay from "./PasswordOverlay";
import { Table } from "react-bootstrap";
const ReceivedOrders = () => {
  const show = useSelector((state) => state.password.show);

  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://sanbooks-444-default-rtdb.firebaseio.com/Orders.json")

      .then((res) => {
        let arr = res.data;
        var obj = arr;

        var arr_obj = Object.keys(obj).map((key) => ({ [key]: obj[key] }));

        let newArr = arr_obj?.map((person) => {
          for (const item in person) {
            return person[item];
          }
        });

        // let response = newArr;
        let response = newArr;
        setData(response);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  //temp
  if (data) {
    var array1 = [];
    //
    const date = new Date(data[0]?.Date).toDateString();
    console.log(date);
    array1.push(date);
    //
    const book = data[0].OrderArray[0].Name;
    console.log("order array", book);
    array1.push(book);
    //
    const author = data[0].OrderArray[0].Author;
    console.log("Authorname", author);
    array1.push(author);
    //
    const customerName = data[0].Name;
    console.log(customerName);
    array1.push(customerName);
    //
    const phone = data[0].Phone;
    console.log(phone);
    array1.push(phone);
    //
    const address1 = data[0].Address1;
    console.log(address1);
    array1.push(address1);
    //
    const address2 = data[0].Address2;
    console.log(address2);
    array1.push(address2);
    //
    const email = data[0].Email;
    console.log(email);
    array1.push(email);
    //
    const payment = data[0].Payment;
    console.log(payment);
    array1.push(payment);
  }
  console.log(array1);
  //
  return (
    <>
      {show && <PasswordOverlay />}
      {!show && (
        <>
          <div className={styles.Wrapper}>
            <h1 className={styles.heading}>Reveived Orders</h1>
            <div className={styles.table}>
              <Table bordered="true" striped="true" responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Book Name</th>
                    <th>Author Name</th>
                    <th>Customer Name</th>
                    <th>Phone no.</th>
                    <th>Address Line 1</th>
                    <th>Address Line 2</th>
                    <th>Email</th>
                    <th>Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    {array1.map((item, index) => (
                      <td key={index}>{item}</td>
                    ))}
                  </tr>

                  {/* .
                  .
                  .
                  . */}
                  <tr>
                    <td>2</td>
                    {Array.from({ length: 9 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>3</td>
                    {Array.from({ length: 9 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ReceivedOrders;

import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dataAction } from "../Store/Slices/DataControl";
import axios from "axios";
import styles from "./UploadItem.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Button from "@mui/material/Button";

const UploadItem = () => {
  const dispatch = useDispatch();

  dispatch(dataAction.newIdKey());

  const idAndKey = useSelector((state) => state.data.newIdAndKey);
  console.log(idAndKey);

  const [newBook, setNewBook] = useState({
    Name: "",
    Author: "",
    MarketPrice: "",
    ourPrice: "",
    PurchasePrice: "",
    NumPages: "",
    Genre: "",
    Categories: "",
    Description: "",
    PublishedYear: "",
    ISBN: "",
    Stock: "",
    MonthSpecial: "",
    EventSpecial: "",
    NewArrivalDays: "",
    Img: "",
    DateAdded: new Date(),
    Key: idAndKey,
    id: idAndKey,
    CopiesSold: 0,
    Reviews: 0,
    RatingsCount: 0,
    AverageRating: 0,
  });
  let name, value;
  const dataHandler = (event) => {
    let updated = { ...newBook };
    updated[event.target.name] = event.target.value;
    setNewBook(updated);
    console.log(newBook);
  };

  const submitData = async (e) => {
    e.preventDefault();
    let updated = newBook;
    axios
      .post(
        "https://sanbooks-444-default-rtdb.firebaseio.com/TestRrecord.json",
        updated
      )
      .then((res) => {
        console.log("Data Saved");
        alert("Book has been added successfuly");
      })
      .catch((err) => alert("There was an error while uploading a new book"));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <h1 className={styles.heading}>Upload a New Book</h1>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "30ch",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-basic"
              type="text"
              placeholder="Enter Book Name"
              label="Enter Book Name"
              onChange={dataHandler}
              value={newBook.Name}
              name="Name"
              variant="outlined"
              required
            />
            <TextField
              id="outlined-basic"
              label="Enter Author Name"
              variant="outlined"
              required
              type="text"
              placeholder="Enter Author Name"
              onChange={dataHandler}
              value={newBook.Author}
              name="Author"
            />
            <TextField
              id="outlined-basic"
              label="Enter Market Price"
              variant="outlined"
              required
              type="text"
              placeholder="Enter Market Price"
              onChange={dataHandler}
              value={newBook.MarketPrice}
              name="MarketPrice"
            />
            <TextField
              id="outlined-basic"
              label="Enter Your sale Price"
              variant="outlined"
              required
              type="text"
              placeholder="Enter Your sale Price"
              onChange={dataHandler}
              value={newBook.ourPrice}
              name="ourPrice"
            />

            <TextField
              id="outlined-basic"
              label="Enter your Purchase Price"
              variant="outlined"
              required
              type="text"
              placeholder="Enter your Purchase Price"
              onChange={dataHandler}
              value={newBook.PurchasePrice}
              name="PurchasePrice"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Pages in book"
              variant="outlined"
              required
              type="text"
              placeholder="Pages in book"
              onChange={dataHandler}
              value={newBook.NumPages}
              name="NumPages"
            />
            <TextField
              id="outlined-basic"
              label="Enter Genre Fiction/Non Fiction"
              variant="outlined"
              required
              type="text"
              placeholder="Enter Genre Fiction/Non Fiction"
              onChange={dataHandler}
              value={newBook.Genre}
              name="Genre"
            />

            <TextField
              id="outlined-basic"
              label="Enter Book Category"
              variant="outlined"
              required
              type="text"
              placeholder="Enter Book Category"
              onChange={dataHandler}
              value={newBook.Categories}
              name="Categories"
            />
            <TextField
              id="outlined-basic"
              label="Enter Book Description"
              variant="outlined"
              required
              type="text"
              placeholder="Enter Book Description"
              onChange={dataHandler}
              value={newBook.Description}
              name="Description"
            />
            <TextField
              id="outlined-basic"
              label="Enter Publishing Year"
              variant="outlined"
              required
              type="text"
              placeholder="Enter Publishing Year"
              onChange={dataHandler}
              value={newBook.PublishedYear}
              name="PublishedYear"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Enter Book ISBN"
              variant="outlined"
              required
              type="text"
              placeholder="Enter Book ISBN"
              onChange={dataHandler}
              value={newBook.ISBN}
              name="ISBN"
            />
            <TextField
              id="outlined-basic"
              label="Enter Stock"
              variant="outlined"
              required
              type="text"
              placeholder="Enter Stock"
              onChange={dataHandler}
              value={newBook.Stock}
              name="Stock"
            />

            <TextField
              id="outlined-basic"
              label="Month Special ? True/False"
              variant="outlined"
              required
              type="text"
              placeholder="Month Special ? True/False"
              onChange={dataHandler}
              value={newBook.MonthSpecial}
              name="MonthSpecial"
            />
            <TextField
              id="outlined-basic"
              label="Evenet Special"
              variant="outlined"
              required
              type="text"
              placeholder="Evenet Special True/False"
              onChange={dataHandler}
              value={newBook.EventSpecial}
              name="EventSpecial"
            />
            <TextField
              id="outlined-basic"
              label="For how many days, it should stay in new arrival?"
              variant="outlined"
              required
              type="text"
              placeholder="For how many days, it should stay in new arrival?"
              onChange={dataHandler}
              value={newBook.NewArrivalDays}
              name="NewArrivalDays"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Enter Book img url"
              variant="outlined"
              required
              type="text"
              placeholder="Enter Book img url"
              onChange={dataHandler}
              value={newBook.Img}
              name="Img"
            />
          </div>
        </Box>
        <Button
          style={{ margin: "10px" }}
          variant="contained"
          type="submit"
          onClick={submitData}
        >
          Upload
        </Button>
      </div>
    </div>
  );
};

export default UploadItem;

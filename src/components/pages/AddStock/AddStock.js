import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import "./AddStock.css";

const AddStock = () => {
  const [user] = useAuthState(auth);
  // const [stockInfo, setStockInfo] = useState({
  //   name: "",
  //   type: "",
  //   img: "",
  //   supplier_name: "",
  //   price: [''],
  //   quantity: 0,
  //   phone: "",
  //   description: "",
  // });

  function handelProductAdd(e) {
    e.preventDefault();

    // need to validate
    const name = e.target.name.value;
    const type = e.target.type.value;
    const img = e.target.image.value;
    const price = e.target.price.value;
    const currency = e.target.currency.value || 'tk';
    const quantity = e.target.quantity.value;
    const supplier_name = e.target.supplier.value;
    const phone = e.target.number.value;
    const description = e.target.description.value;

    // setting
    const stockInfo = {
      name: name,
      email: user?.email,
      type: type,
      img: img,
      supplier_name: supplier_name,
      price: [price, currency],
      quantity: quantity,
      phone: phone,
      description: description,
    };

    async function newStock() {
      try {
        await axios
          .post(`http://localhost:5000/stock`, { stockInfo })
          .then((response) => {
            console.log(response);
            toast.success('New stock added successfully');
            
            e.target.name.value = '';
            e.target.type.value = '';
            e.target.image.value = '';
            e.target.price.value = '';
            e.target.currency.value = '';
            e.target.quantity.value = '';
            e.target.supplier.value = '';
            e.target.number.value = '';
            e.target.description.value = '';
          });
      } catch (error) {
        console.log(error);
      }
    }
    newStock();
  }

  return (
    <div className="flex flex-col items-center my-20">
      <h1 className="text-3xl font-bold mb-4">Please fill product details</h1>
      <form
        className="product-detail-form flex flex-col bg-slate-100 py-5 justify-center"
        onSubmit={handelProductAdd}>
        <div className="w-full">
          <div>
            <label htmlFor="product name">Product title</label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Product name"
              required
            />
          </div>
          <div>
            <label htmlFor="product name">Product type</label>
            <select id="product-type" name="type">
              <option value="" disabled selected>
                Select Product type
              </option>
              <option value="fridge">Fridge</option>
              <option value="television">TV</option>
              <option value="air_condition">AC</option>
              <option value="washing_machine">Washing Machine</option>
              <option value="oven">Oven</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id=""
              placeholder="Image URL"
              required
            />
          </div>

          <div className="w-full flex justify-between">
            <label htmlFor="price">Price</label>
            <div className="">
            <input
              type="number"
              name="price"
              id=""
              placeholder="number"
              className="price-input"
              required
            />
            <input
              type="text"
              name="currency"
              id=""
              className="currency-input"
              placeholder="$"
            />
            </div>
          </div>

          <div>
            <label htmlFor="Quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              id=""
              placeholder="Quantity"
              required
            />
          </div>

          <div>
            <label htmlFor="brand-name">Supplier</label>
            <input
              type="text"
              name="supplier"
              id=""
              placeholder="Brand name"
              required
            />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="number" id="" placeholder="01700-001100" />
          </div>

          <div className="flex flex-col gap-0 mt-10">
            <p className="mb-2 font-medium text-md">Product description :</p>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="5"
              required></textarea>
          </div>
        </div>
        <button className="bg-orange px-3 py-1 rounded-sm font-primary-font text-white mx-auto">
          Add product
        </button>
      </form>
    </div>
  );
};

export default AddStock;

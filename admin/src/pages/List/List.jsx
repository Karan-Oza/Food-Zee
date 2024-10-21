import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
const List = ({url}) => {
  

  const [list, setlist] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    
    if (response.data.success) {
      setlist(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  //remoove item from db and from list item and repaint ui
  const removefood = async (foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId})
    await fetchList()
    if(response.data.success){
      toast.success("Food removed")

    }
    
   }
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All foods Lists</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className="list-table-format">
            <img src={`${url}/images/`+item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <p onClick={()=>{removefood(item._id)}} className="cursor">X</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default List;

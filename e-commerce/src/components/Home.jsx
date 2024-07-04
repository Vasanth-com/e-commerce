import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/taskActions";
import Category from "./category/Category";
import Header from "./header/Header";
import {Link} from 'react-router-dom'

const Home = () => {
  const [page,setPage] = useState(1)
  const dispatch = useDispatch();
  const {loading,products,error}= useSelector((state)=>state.product)
  const{searchTerm,brand,price} = useSelector((state)=>state.filters)

  useEffect(()=>{
      dispatch(fetchProducts());
      console.log("useEffect triggered");
  },[dispatch])

  const filteredProducts = products.filter((product)=>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  .filter((product)=>
    (brand ? product.brand === brand : true)
  )
  .filter((product)=>
    (price ? product.price <= price:true)
  )
  console.log(filteredProducts);

  const totalPages = Math.ceil(filteredProducts.length /10)

  const selectPageHandler = (selectedPage) =>{
    if(
      selectedPage >= 1&& 
      selectedPage <= filteredProducts.length / 10 && 
      selectedPage !== page
    ){
      setPage(selectedPage)
    }
  }


  useEffect(()=>{
    window.scrollTo(0,0)
  },[page])


  return (
    <>
    
    <div className="products">
      {loading ? "Loading" : ""}
      {error ? error : ""}
      {filteredProducts.length > 0 &&
        filteredProducts.slice(page  * 10 - 10,page *10).map((item, idx) => {
          return (
            <div className="card" key={idx}>
              <Link to={`/product-details/${item.id}`}>
              <div className="image">
                <img src={item.images[0]} alt="" className="image" />
              </div>
              </Link>
              <div className="content">
                <a href="#">
                  <span className="title">{item.title}</span>
                </a>

                <p className="desc">{item.description}</p>

                <p className="price">{item.price} $</p>

                <Link className="action" to={`/product-details/${item.id}`}>
                Find out more
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          );
        })
}
    </div>
  {
    filteredProducts.length > 0 && (
      <div className="pagination">
        <span onClick={()=>selectPageHandler(page -1)}>
          prev
        </span>
        {
          [...Array(totalPages)].map((_,i)=>{
            return(
              <span className={page === i +1 ? 'pageSelected':""} key={i} onClick={()=>selectPageHandler(i +1)}>
                {i + 1}
              </span>
            )
          })
        }
        <span onClick={()=>selectPageHandler(page +1)}>
          Next
          </span>
      </div>
    )
  }   
    </>
  );
};

export default Home;

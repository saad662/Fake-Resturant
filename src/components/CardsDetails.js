import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Navbar';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE } from '../redux/actions/action'
import { Link } from 'react-router-dom';

const CardsDetails = () => {
  const dispatch = useDispatch();
  const dlt = (id) => {
    dispatch(DELETE(id))
  }

  const [data, setData] = useState([])
  const { id } = useParams();
  // console.log(id);

  const getdata = useSelector((state) => state.cartReducer.carts);

  // console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    // console.log(comparedata);
    setData(comparedata);
  }


  useEffect(() => {
    compare();
  }, [id])

  return (
    <div className='details'>
      <div className='container mt-2' >
        <h2 className='text-center'>Iteam's Detail Page</h2>

        <section className='container mt-3'>
          <div className='iteamsdetails'>
            {
              data.map((item, id) => {
                return (
                  <div>
                    <div className='items_img'>
                      <img src={item.imgdata} alt="#" />
                    </div>
                    <div className='details'>
                      <Table>
                        <tr>
                          <td>
                            <p><strong>Dish</strong> : {item.rname}</p>
                            <p><strong>Price</strong> : {item.price}</p>
                            <p><strong>Address</strong> : {item.address}</p>
                            {/* <p><strong>Total</strong> : 0 pkr</p> */}
                          </td>
                          <td style={{ padding: "50px" }}>
                            <p ><strong>Ratings</strong> : <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{item.rating} ★</span></p>
                            <p><strong>Order Review</strong> : <span>{item.somedata}</span></p>
                            <p ><strong>Remove </strong> : <span><Link to="/"><i onClick={() => dlt(item.id)} className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i></Link></span></p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>
    </div>
  )
}

export default CardsDetails
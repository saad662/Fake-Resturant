import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardsData'
import './cards.css';
import "./style.css"
import { useDispatch } from 'react-redux'
import { ADD } from '../redux/actions/action'


const Cards = () => {
  const dipatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dipatch(ADD(e));
  }

  const [data] = useState(Cardsdata);
  // console.log(data);

  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Fake-Resturant-Project</h2>
      <div className='main-card--cointainer'>
        {
          data.map((item, id) => {
            return (
              <div key={id}>
                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={item.imgdata} style={{ height: "16rem" }} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{item.rname}</Card.Title>
                    <Card.Text>
                      Price : {item.price} pkr
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                      <Button variant="primary" onClick={() => send(item)} className='col-lg-12'>Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cards
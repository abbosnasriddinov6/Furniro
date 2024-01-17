import React, { useState, useEffect } from 'react'
import './Home.scss'

import { apple, bed, bedroom, chairr, chairs, dining, fat, furniture, indicator, kitchen, living, middle, right, right2, thin } from '../../assets'

const Home = () => {
const [products, setProducts] = useState([])

const fetchProducts = async () => {
  try {
    const str = await fetch(`http://localhost:3000/products`)
    const st = await str.json();
    setProducts(st)
  } catch (error) {
    console.log(error);
  }
}

const fetchAll = async () => {
  try {
    const str = await fetch(`http://localhost:3000/products?price=4.000.000`)
    const st = await str.json();
    setProducts(st)
  } catch (error) {
    console.log(error);
  }
}
const fetchHelp = async () => {
  try {
    const str = await fetch(`http://localhost:3000/products?price=1.500.000`)
    const st = await str.json();
    setProducts(st)
  } catch (error) {
    console.log(error);
  }
}

 useEffect(() => {
  fetchProducts();
 }, []);


  return (
    <div className='full'>
      <div className='home'>
      <div className="container">
        <div className='backround'>
          <div className='buy'></div>
          <div className='buy'>
            <div className='card'>
              <h4>New Arrival</h4>
              <h1>Discover Our New Collection</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</ p>
              <button>BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='range'>
      <div className="container">
        <div className='browse'>
          <div className='therange'>
            <h2>Browse The Range</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='furniture'>
            <div className='cards'>
              <div className='img'>
                <img src={dining} alt="" />
              </div>
              <div className='bedroom'>
                <h3>Dining</h3>
              </div>
            </div>
            <div className='cards'>
              <div className='img'>
                <img src={living} alt="" />
              </div>
              <div className='bedroom'>
                <h3>Living</h3>
              </div>
            </div>
            <div className='cards'>
              <div className='img'>
                <img src={bedroom} alt="" />
              </div>
              <div className='bedroom'>
                <h3>Bedroom</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='posts'>
        <div className="container">
          <div className="products">
            <div className='cardss'>
              {products.map((products) => (
                <div key={products.id} className="cardsss">
                <div className='pictures'>
                  <li><img className='rasm' src={products.image} alt="" /></li>
                </div>
                <div className='text'>
                  <h3>{products.brand}</h3>
                  <p>{products.name}</p>
                  <div className='seperate'>
                    <h4>{products.price}</h4>
                    <h3>{products.bonus}</h3>
                  </div>
                </div>
                </div>
              ))}
              
            </div>
            <div className='butttons'>
              <button onClick={()=>setProducts()} className='all'>All</button>
              <button onClick={fetchAll} className='all'>Show More</button>
              <button onClick={()=>fetchHelp()} className='all'>Show More</button>
            </div>
          </div>
        </div>
      </div>
      <div className='rooms'>
        <div className="container">
          <div className='beautiful'>
            <div className='explore1'>
              <h1>50+ Beautiful rooms inspiration</h1>
              <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
              <button>Explore More</button>
            </div>
            <div className='explore2'>
              <div className='restangle'>
                <div className='bottom'>
                  <div className='white'>
                    <h5>01---Bed Room</h5>
                    <h3>Inner Peace</h3>
                  </div>
                  <button><img src={right} alt="" /></button>
                </div>
              </div>
            </div>
            <div className='explore3'>
              <div className='div'>
                <button><img src={right2} alt="" /></button>
              </div>
              <div className='buton'>
                <img src={indicator} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='funiro'>
        <div className="container">
          <div className="furnit">
            <div className='share'>
              <h3>Share your setup with</h3>
              <h2>#FuniroFurniture</h2>
            </div>
            <div className='mixed'>
              <div className='comp'>
                <div className='kamp'>
                  <img className='thin' src={thin} alt="" />
                  <img className='fat' src={fat} alt="" />
                </div>
                <div className='chair'>
                  <img className='chairr' src={chairr} alt="" />
                  <img className='chairs' src={chairs} alt="" />
                </div>
              </div>
              <div className='middle'>
                <img src={middle} alt="" />
              </div>
              <div className='look'>
                <div className='norm'>
                  <img className='bed' src={bed} alt="" />
                  <img className='apple' src={apple} alt="" />
                </div>
                <div className='little'>
                  <img className='furniture' src={furniture} alt="" />
                  <img className='kitchen' src={kitchen} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
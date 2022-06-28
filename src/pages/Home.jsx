import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Photo from '../components/Photo'
import { allProducts } from '../data'

function Home (props) {

  const result = allProducts.filter((item) => (item.id%3===0));

  return (
    <div>
        <Announcement />
        <Navbar name={props.name} account={props.account} func={props.func} />
        <Photo />
        <Slider />
        <Categories />
        <h1 style={{marginLeft: "24px", marginTop: "30px",fontFamily: "Geograph,Helvetica,Arial,sans-serif"}}>NEW ARRIVALS</h1>
        <Products Data={result} />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home
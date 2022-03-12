import React, { useEffect, useState } from 'react'
import Banner from '../../Banner/Banner'
import Reviews from '../Reviews/Reviews'
import Service from '../Service/Service'
import './Home.css'

export default function Home() {
    const [home, setHome] = useState([])
    useEffect(()=> {
        fetch('https://tranquil-cliffs-84730.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setHome(data.slice(0, 6)));
    } ,[])
  return (
    <div>
        <Banner></Banner>
        <div className="post">
            <h1>Popular <span className="spa">Products</span></h1>
        </div>
        <div className="card-container container">
            {
                home.map(service => <Service
                    service={service}
                ></Service>)
            }
        </div>
        <div className="post">
            <h1>Featured <span className="spa">Posts</span></h1>
        </div>
        <div className="card-container container">
            <div className="card">
                <img src="https://i.ibb.co/Rpb33MG/index02-img09.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text text-center"><small className="text-muted">Posted on Sep 28, 2022 at 00:00</small></p>
                <h3 className="card-title">Air features is Ultraportable MaviCopter</h3>
                <p className="card-text">Staghorn sculpin plownose chimaera sawfish temperate perch goatfish jackfish darter scaly dragonfish king of herring . Staghorn sculpin plownose chimaera sawfish temperate perch goatfish jackfish darter scaly dragonfish king of herring...</p>
                </div>
            </div>
            <div className="card">
                <img src="https://i.ibb.co/hHsCvSL/index02-img07.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text text-center"><small className="text-muted">Posted on Sep 25, 2022 at 00:00</small></p>
                <h3 className="card-title">The ultraportable MaviCopter Air features</h3>
                <p className="card-text">Staghorn sculpin plownose chimaera sawfish temperate perch goatfish jackfish darter scaly dragonfish king of herring. Staghorn sculpin plownose chimaera sawfish temperate perch goatfish jackfish darter scaly dragonfish king of herring...</p>
                </div>
            </div>
            <div className="card">
                <img src="https://i.ibb.co/jrp08T9/index02-img08.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text text-center"><small className="text-muted">Posted on Sep 30, 2022 at 00:00</small></p>
                <h3 className="card-title">Quadrone Announces Pricing and Availability of Multilink</h3>
                <p className="card-text">Staghorn sculpin plownose chimaera sawfish temperate perch goatfish jackfish darter scaly dragonfish king of herring. Staghorn sculpin plownose chimaera sawfish temperate perch goatfish jackfish darter scaly dragonfish king of herring...</p>
                </div>
            </div>
            <div>
                <Reviews></Reviews>
            </div>
        </div>
    </div>
  )
}

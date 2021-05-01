import React from 'react'
import "./Auction.scss"

const {useState} = React;

const Auction = ({lastBid, setBid}) => {
    const [ownBid, setOwnBid] = useState(0)
    const handleBid = e => {
        setOwnBid(e.target.value.toLocaleString())
    }
    const makeBid = () => {
        if ((Number(ownBid) > Number(lastBid)) && (ownBid.length < 9))  {
            setBid(ownBid)
        }
    }
    const [openBid,setOpenBid] = useState(190000000)
    return (
        <div className="auction">
            <div className="featured-image">
                    <img src="https://cdn.discordapp.com/attachments/798129700417437716/837741065607053322/Screenshot_1285.png" className="featured-images" alt="featured-images"/>

                </div>
            <div className="card">
                <h2>Informasi Kendaraan Lelang</h2>
                <hr/>
                <h3>Estilo EG6</h3>
                <h4>Tahun: 1997</h4>
                <p className="details">Honda Civic Estilo masih menjadi idaman para pecinta mobil dan modifikator.

Desain simpel dan sporty membuatnya menarik untuk dipermak menjadi lebih keren.</p>
                <hr/>
                <h5>Batas maksimal bid: 30/04/2021</h5>
                <h6>Buka Harga</h6>
                <div className="open-price">
                    Rp. {openBid.toLocaleString()}
                </div>
                <h6>Bid Tertinggi</h6>
                <div className="close-price">
                    Rp. {Number(lastBid).toLocaleString()}
                </div>
                <h6>Masukan Bidmu</h6>
                <div className="put-bid">
                <input onChange={handleBid} type="text" className="make-price" placeholder="_ _ _ . _ _ _ . _ _ _"/>
                <button className="make-bid" onMouseDown={makeBid}>KIRIM</button>
                </div>
            </div>
        </div>
    )
}

export default Auction

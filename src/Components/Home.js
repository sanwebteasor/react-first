import React from "react";

function Home(){

    return(
        <>
        <div>
            <img src="https://www.pngmart.com/files/7/Cart-PNG-Clipart.png" style={{width:"100px",marginRight: "0px"}} />
        </div>
        <h2>Home componentssss  hhhh</h2>
        
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg" style={{width:"100px"}}/>
            </div>
            <div className="text-wrapper item">
                <span>I-phone</span>
                <span>Price : $1000.00</span>
            </div>
            <div className="btn-wrapper item">
            <button>Add To cart</button>
            </div>
        </div>
        </>
        
    )
}

export default Home
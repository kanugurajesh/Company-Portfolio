import "../css/Products.css"

function App() {
    return (
        <div id="products">
            <h1>Products</h1>
            <div id="boxes">
                <div className="box">
                    <img src="/sql.png" alt="" />
                </div>
                <div className="box">
                    <img src="/rpc.png" alt="" />
                </div>
                <div className="box">
                    <img src="/adapi.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default App
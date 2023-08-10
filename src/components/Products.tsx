import "../css/Products.css"

function App() {
    return (
        <div id="products">
            <h1>Products</h1>
            <div id="boxes">
                <div className="box">
                    <h1>SQL Access</h1>
                    <img src="/sql.png" alt="" />
                </div>
                <div className="box">
                    <h1>RPC Access</h1>
                    <img src="/rpc.png" alt="" />
                </div>
                <div className="box">
                    <h1>Advanced API</h1>
                    <img src="/adapi.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default App
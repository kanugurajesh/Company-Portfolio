import "../css/Products.css"

function App() {
    return (
        <div id="products">
            <h1>Products</h1>
            <div id="boxes">
                <div className="box">
                    <h2>SQL Access</h2>
                    <img src="/sql.png" alt="" />
                </div>
                <div className="box">
                    <h2>RPC Access</h2>
                    <img src="/rpc.png" alt="" />
                </div>
                <div className="box">
                    <h2>Advanced API</h2>
                    <img src="/adapi.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default App
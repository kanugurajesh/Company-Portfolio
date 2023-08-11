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
            <div id="boxes1">
                <div className="box1">
                    <h1>Query on-chain data</h1>
                    <p>Run SQL queries across all Cosmos chains to run analytics for your app and the whole ecosystem.</p>
                    <h4 className="orange-down">Get SQL Access →</h4>
                </div>
                <div className="box1">
                    <h1>Scalable and fast RPCs</h1>
                    <p>Distributed RPC nodes for all Cosmos chains so that you can focus on product.Scalable,reliable and fast.</p>
                    <h4 className="orange-down">Get RPC Access →</h4>
                </div>
                <div className="box1">
                    <h1>Aggregated API endpoints</h1>
                    <p>A suite of API endpoints that will save you hours of development and complex calculations.</p>
                    <h4 className="orange-down">Get API Access →</h4>
                </div>
            </div>
        </div>
    )
}

export default App
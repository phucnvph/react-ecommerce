import { Link } from "react-router-dom";
const Products = () => {
    return (
        <main>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Products</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item">
                        <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Products</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-header">
                        <svg className="svg-inline--fa fa-table me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg>{/* <i class="fas fa-table me-1"></i> Font Awesome fontawesome.com */}
                        Products Data
                    </div>
                    <div className="card-body">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>
                                        <button type="button" className="btn btn-sm">
                                            <i class="fas fa-edit text-warning"></i>
                                        </button>
                                        <button type="button" className="btn btn-sm">
                                            <i class="fa fa-trash text-danger" aria-hidden="true"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products;
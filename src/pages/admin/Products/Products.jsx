import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts, postDeleteProduct } from "../../../components/client/Products/ProductSlice";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Products = () => {

    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.products);
    let fetchMount = true;

    useEffect(() => {
        if (fetchMount) {
            dispatch(getProducts());
        }
        return () => {
            fetchMount = false;
        }
    }, []);

    const handleConfirmDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                dispatch(postDeleteProduct({ id: id }));

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    if (loading) return <div>Loading...</div>

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
                        <i className="fas fa-table me-1"></i>Products Data
                    </div>
                    <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, title, category, image, price }) =>
                                (
                                    <tr key={id}>
                                        <th scope="row">#{id}</th>
                                        <td>{title}</td>
                                        <td>{category}</td>
                                        <td>{price}$</td>
                                        <td><img src={image} width={50} /></td>
                                        <td>
                                            <Link to={'/admin/products/edit/' + id} className="btn btn-sm"><i className="fas fa-edit text-warning"></i></Link>

                                            <button type="button" className="btn btn-sm" onClick={() => { handleConfirmDelete(id) }}>
                                                <i className="fa fa-trash text-danger" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products;
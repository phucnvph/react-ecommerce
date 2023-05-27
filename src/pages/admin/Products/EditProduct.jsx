import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getProductId, postUpdateProduct } from '../../../components/client/Products/ProductSlice';
import Swal from 'sweetalert2';

const EditProduct = () => {
    const { id } = useParams();
    const storage = getStorage();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, product } = useSelector((state) => state.products);
    const [urlImage, setUrlImage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: "all"
    });

    let fetchMount = true;
    useEffect(() => {
        if (fetchMount) {
            dispatch(getProductId(id));
            setUrlImage(product.image);
        }
        return () => {
            fetchMount = false;
        }
    }, []);

    const onSubmit = async (data) => {
        data.id = id;
        data.image = urlImage;

        await dispatch(postUpdateProduct(data));
        navigate('/admin/products');

        Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        }).fire({
            icon: 'success',
            title: 'Update Product successfully!'
        });

    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        const metadata = {
            contentType: 'image/jpeg'
        };
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        uploadTask.on('state_changed',
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setUrlImage(downloadURL);
                });
            }
        );
    };

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
                    <li className="breadcrumb-item">Edit</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table me-1"></i>Product
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="title">Title (*) </label>
                                <input type="text" defaultValue={product?.title} className="form-control" id="title" {...register("title", { required: true })} />
                                {errors.title && <span className='text-danger'>This field title is required</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Price (*)</label>
                                <input type="number" defaultValue={product?.price} className="form-control" id="price" {...register("price", { required: true })} />
                                {errors.price && <span className='text-danger'>This field price is required</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <select className="form-control" value={product?.category} id="category" {...register("category", { required: true })}>
                                    <option value="women">Women</option>
                                    <option value="men">Men</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="image">Image</label>
                                <input type="file" className="form-control" onChange={(e) => handleFileInputChange(e)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control" id="description" rows={3} defaultValue={product?.description} {...register("description")} />
                            </div>
                            <button className='btn btn-success' type="submit">Edit</button>
                        </form>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default EditProduct;
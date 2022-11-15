import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getProductsSold } from "../features/products/productsSlice";

const Sales = () =>{
    const [totalPrice, setTotalPrice] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.persistedReducer.products);
    const soldProducts = products.filter((product) => product.sold > 0)

    console.log(products)
    console.log(soldProducts)
    const handleBack = () => {
        navigate('/')
      }

    const totalPriceHandler = () => {
        const totalPriceCount = soldProducts.reduce((total,item) => {
          return total+(item.price*item.sold);
        }, 0)
        setTotalPrice(totalPriceCount)
      }

    useEffect(() => {
        totalPriceHandler()
    },[soldProducts])
    return(
        <div className="main">
            <h1 className="text-center">Rekap Penjualan</h1>
            {soldProducts? (
                <table>
                <tr>
                   <td>Product</td>
                   <td>Harga</td>
                   <td>Terjual</td>
                   <td>Pendapatan</td>
                </tr>
                    {soldProducts.map((item) => {
                        return (
                            <tr>
                                <td> {item.title} </td>
                                <td> {item.price} </td>
                                <td> {item.sold} </td>
                                <td> {item.price * item.sold} </td>
                            </tr>
                        )
                    })}
                <tr>
                    <td colSpan="3"> Total Pendapatan</td>
                    <td>{totalPrice}</td>
                </tr>
            </table>
            ):(
                <h1> Belum ada barang yang terjual</h1>
            )}
            
            <button onClick={handleBack} > back </button>
        </div>

    )
}

export default Sales
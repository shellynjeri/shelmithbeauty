import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import OrderForm from './checkbox'

const Makepayment = () => {
    const{product,img_url}=useLocation().state||{}
    const [phone,setPhone]=useState("")
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    //submit function
    const submit=async (e) => {
        e.preventDefault()
        setLoading("please wait...")
        //prepare data
        const data=new FormData()
        data.append("phone",phone)
        data.append("amount",product.product_cost)

        try {
            //send to API
            const response=await axios.post("https://shellynjeri.pythonanywhere.com/api/mpesa_payment",data)
            setLoading("")
            setError("")
            setSuccess(response.data.message)


        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }
        
    }
  return (
        <div className='row mt-2'>
            <div className='col-md-6 justify-content-center text-center'>
                <span className='text-info'>{loading}</span>
                <span className='text-success'>{success}</span>
                <span className='text-danger'>{error}</span>
                <div className='card shadow'>
                    <img src={img_url+product.product_photo} alt="" />
                    <h3 className='mt-2'>{product.product_name}</h3>
                    <p className='text-muted'>{product.product_description}</p>
                    <b className='text-warning'>{product.product_cost}</b>
                    <div className='card-footer'>
                        <form onSubmit={submit}>
                            <label htmlFor="" className='fs-4'>Phone to make payment</label>
                            <input type="tel" className='form-control' required placeholder='254...' vlaue={phone} onchange={(e)=>setPhone(e.target.value)}/>
                            <br />

                            <button type='submit' className='btn btn-success'>Pay Now</button>
                            
                        </form>
                        <div>
                    
                    </div>

                    </div>
                </div>

            </div>
        <div className='col-md-6'>
            <OrderForm></OrderForm>
        </div>



        
    </div>
  )
}

export default Makepayment



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
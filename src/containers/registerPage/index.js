import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './style.css';
import ReactDatePicker from 'react-datepicker';

export default function Register() {
    const currentDate = new Date();
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [contactNumber, setcontactNumber] = useState('');
    const [age, setage] = useState(0);
    const [batch, setbatch] = useState('6-7AM');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setcvv] = useState('');
    const [expiryMonth, setExpiryMonth] = useState(currentDate);
    const [expiryYear, setExpiryYear] = useState(currentDate);

    const handleClick = (e) => {
        e.preventDefault();
        if (!firstName) {
            return toast.error('First Name required');
        }
        if (!lastName) {
            return toast.error('Last Name required');
        }
        if (contactNumber.length < 10 || contactNumber.length > 10) {
            return toast.error('Please enter valid contact number');
        }
        if (!age || age < 18 || age > 65) {
            return toast.error('Age should be between 18 and 65');
        }
        if (!cardNumber || cardNumber.length < 16 || cardNumber.length > 16) {
            return toast.error('Invalid Card Number');
        }
        if (!cvv || cvv < 100 || cvv > 999) {
            return toast.error('Invalid CVV');
        }
        axios({
            method: 'POST',
            url: 'https://flex-money-backend-fkwy6f3k1-rajpatel1508.vercel.app/register',
            data: { firstName, lastName, contactNumber, age, batch }
        })
            .then((res) => {
                console.log('register response')
                console.log(res);
                toast.success('Registered successfully');
            })
            .catch(e => {
                console.log('register error')
                console.log(e.response.data.message);
                toast.error(e.response.data.message);
            })
    }

    return (
        <div className='registerBody'>
            <ToastContainer />
            <h2 className='header'>Admission Form</h2>
            <div className='container d-flex justify-content-center align-items-center pb-5'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 col-xl-4 offset-xl-4'>
                        <div class="card shadow">
                            <img src="https://img.freepik.com/premium-vector/yoga-flat-modern-design-illustration_566886-418.jpg?w=2000"
                                alt="" class="card-img-top" />
                            <div class="card-body">
                                <form>
                                    <div className='mb-3'>
                                        <label for={'firstName'} className='form-label' >First Name</label>
                                        <input type={'text'} className='form-control' value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                                    </div>
                                    <div className='mb-3'>
                                        <label for={'lastName'} className='form-label' >Last Name</label>
                                        <input type={'text'} className='form-control' value={lastName} onChange={(e) => setlastName(e.target.value)} />
                                    </div>
                                    <div className='mb-3'>
                                        <label for={'contactNumber'} className='form-label' >Contact Number</label>
                                        <input type={'text'} className='form-control' value={contactNumber} onChange={(e) => setcontactNumber(e.target.value)} />
                                    </div>
                                    <div className='mb-3'>
                                        <label for={'age'} className='form-label'>Age</label>
                                        <input type={'number'} className='form-control' value={age} onChange={(e) => setage(e.target.value)} />
                                    </div>
                                    <div className='mb-3'>
                                        <label for={'batch'} className='form-label'>Batch</label>
                                        <select value={batch} className='form-select' onChange={(e) => setbatch(e.target.value)} >
                                            <option value={'6-7AM'}>6-7AM</option>
                                            <option value={'7-8AM'}>7-8AM</option>
                                            <option value={'8-9AM'}>8-9AM</option>
                                            <option value={'5-6PM'}>5-6PM</option>
                                        </select>
                                    </div>
                                    <h3 className='mb-3 text-center'>Payment Details</h3>
                                    <div className='mb-3'>
                                        <label className='form-label'>Card Number</label>
                                        <input type={'text'} placeholder={'XXXX XXXX XXXX XXXX'} className='form-control' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='form-label'>CVV</label>
                                        <input type={'number'} className='form-control' value={cvv} onChange={(e) => setcvv(e.target.value)} />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='form-label'>Expiry Date</label>
                                        <div className='d-flex'>
                                            <ReactDatePicker
                                                selected={expiryYear}
                                                onChange={(date) => setExpiryYear(date)}
                                                showYearPicker
                                                dateFormat="yyyy"
                                                className={'form-control'}
                                            />
                                            <ReactDatePicker
                                                selected={expiryMonth}
                                                onChange={(date) => setExpiryMonth(date)}
                                                showMonthYearPicker
                                                dateFormat="MM"
                                                className={'form-control'}
                                            />
                                        </div>
                                    </div>
                                    <div className='mb-3'>
                                        <label className='form-label'>Amount</label>
                                        <input type={'number'} placeholder={'500/-'} className='form-control' disabled />
                                    </div>
                                    <div className='d-grid gap-2'>
                                        <button className='btn btn-primary' variant='primary' onClick={handleClick}>Make Payment</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

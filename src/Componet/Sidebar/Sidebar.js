import React from 'react'
import './sidebar.css' 
import graph from '../images/graph.png'
import searchicon from '../images/d.svg'
 import SidebarLayout from '../../Layout/SidebarLayout'

export const Sidebar = () => { 
    return (
        <>
            <SidebarLayout>
                <div className='contentpart'>
                    <div className=''>
                        <div className='graphcashbox'>
                            <div className='cashbox'>
                                <div className='title'>
                                    <div className='leftpart'>
                                        <h2>Total Cash Balance </h2>
                                        <p>As of: 08/08/2023</p>
                                    </div>
                                    <div className='rightpart'>
                                        <button type='button' > + Add Bank </button>
                                    </div>
                                </div>
                                <h3>$100,000,000.00</h3>
                                <div className='bottompart'>
                                    <div className='leftpart'>
                                        <p>Operating Cash </p>
                                        <p>$80,000,000.00</p>
                                    </div>
                                    <div className='rightpart'>
                                        <p>Investments & Other</p>
                                        <p>$20,000,000.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='graphbox'>
                                <img src={graph} alt='img' />
                            </div>
                        </div>

                        <div className=''>
                            <div className='receivabletitle'>
                                <h2 className='heading'> Accounts Receivable  </h2>
                                <div className='serchbox'>
                                    <input type='search' placeholder='Search' />
                                    <button type='button'> <img src={searchicon} alt='search img' /> </button>
                                </div>
                            </div>
                            <div className='receivabletable'>
                                <table>
                                    <tr>
                                        <th>Invoice# </th>
                                        <th>Created</th>
                                        <th>Status</th>
                                        <th>Customer</th>
                                        <th>Due</th>
                                        <th>Service</th>
                                        <th>Total</th>
                                    </tr>
                                    <tr>
                                        <td> INV-024</td>
                                        <td>20 Mar 2023 </td>
                                        <td>Over due</td>
                                        <td>Gunther Beard</td>
                                        <td>20 May 2023</td>
                                        <td>Graphic Designer</td>
                                        <td>$142 000</td>
                                    </tr>
                                    <tr>
                                        <td> INV-024</td>
                                        <td>20 Mar 2023 </td>
                                        <td>Over due</td>
                                        <td>Gunther Beard</td>
                                        <td>20 May 2023</td>
                                        <td>Graphic Designer</td>
                                        <td>$142 000</td>
                                    </tr>
                                    <tr>
                                        <td> INV-024</td>
                                        <td>20 Mar 2023 </td>
                                        <td>Over due</td>
                                        <td>Gunther Beard</td>
                                        <td>20 May 2023</td>
                                        <td>Graphic Designer</td>
                                        <td>$142 000</td>
                                    </tr>

                                </table>
                            </div>
                            <div className='payabletablesection'>
                                <h2 className='heading'> Accounts Payable  </h2>

                                <div className='payabletable'>
                                    <table>
                                        <tr>
                                            <th>Invoice# </th>
                                            <th>Created</th>
                                            <th>Status</th>
                                            <th>Customer</th>
                                            <th>Due</th>
                                            <th>Service</th>
                                            <th>Total</th>
                                        </tr>
                                        <tr>
                                            <td> INV-024</td>
                                            <td>20 Mar 2023 </td>
                                            <td>Over due</td>
                                            <td>Gunther Beard</td>
                                            <td>20 May 2023</td>
                                            <td>Graphic Designer</td>
                                            <td>$142 000</td>
                                        </tr>
                                        <tr>
                                            <td> INV-024</td>
                                            <td>20 Mar 2023 </td>
                                            <td>Over due</td>
                                            <td>Gunther Beard</td>
                                            <td>20 May 2023</td>
                                            <td>Graphic Designer</td>
                                            <td>$142 000</td>
                                        </tr>
                                        <tr>
                                            <td> INV-024</td>
                                            <td>20 Mar 2023 </td>
                                            <td>Over due</td>
                                            <td>Gunther Beard</td>
                                            <td>20 May 2023</td>
                                            <td>Graphic Designer</td>
                                            <td>$142 000</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarLayout>
        </>
    )
}

import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
   <Card className='flex justify-between items-center p-5'>
    <div className='flex items-center space-x-5'>
        <img className='h-16 w-16' src="https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

   
    <div>
        <p>Biryani</p>
        <p>₹399</p>
    </div>
    </div>
    <div>
        <Button className='cursor-not-allowed'>completed</Button>
    </div>

   </Card>
  )
}

export default OrderCard

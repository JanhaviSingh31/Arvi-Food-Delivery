import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React from 'react'




const demo=[
    {
        category:"Nuts & seeds",
        ingredients:["Cashews"]
    },
    {
        category:"Protien",
        ingredients:["Ground Beef","Bacon strips"]
    }
]

const MenuCard = () => {
    const handleCheckBoxChange=(value)=>{
    console.log("value")
    }
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img
                 className='w-[7rem] h-[7rem] object-cover'
                 src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg" alt="" />
                 <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>
                        Burger
                    </p>
                    <p>₹499</p>
                    <p className='text-gray-400'>nice food</p>

                 </div>
            </div>

         </div>
        </AccordionSummary>
        <AccordionDetails>
         <form>
            <div className='flex gap-5 flex-wrap'>
              {
                
                demo.map((item)=>
                <div>
                    <p>
                        {item.category}
                    </p>
                   <FormGroup>
                {item.ingredients.map((item)=><FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}  />} label={item} /> ) }
               
              </FormGroup>
                </div>
                )
            }
              
            </div>
            <div className='pt-5'>
                <Button variant="cantained" disabled={false} type="submit">{true?"Add to Cart":"Out Of Stock"}</Button>
            </div>
         </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard

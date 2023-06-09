import React from 'react'
import SingleProduct from './SingleProduct'
import { Box, Typography } from '@mui/material'


const Products = ({ products }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: { md: '20px', xs: '10px' } }}>

            {
                products && products.map((product, index) => (

                    <SingleProduct product={product} key={index} />
                ))
            }
        </Box>
    )
}

export default Products
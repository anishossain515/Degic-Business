import React from 'react'
import { Box,Container,Grid,Typography,IconButton, Link, Grid2} from '@mui/material'
import { Facebook,Twitter,Instagram } from '@mui/icons-material'
import { FooterData } from './utilities/Data'
function Footer() {
  return ( 
    <Box sx={{bgcolor:'#000',color:'#fff',py:6,mt:10}}  >

        <Container maxWidth='lg'>

            <Grid container item  py={2}>

             <Grid item xs={12} md={3}>
             <Typography>
                <img src="/logoWhite.png" alt="WhiteLogo" style={{ width: '150px' }}  />
             </Typography>
             </Grid>

             {FooterData.map((section,index)=>(
                <Grid item xs={6} md={2} key={index} className='sm:pt-0 pt-2'>
                    <Box>
                    <Typography>
                        {section.title}
                    </Typography>
                    {section.links.map((links,linkIndex)=>(
                        <Box key={linkIndex} >
                            <Link underline='none' display='block' color='#fff' sx={{my:1,opacity:'50%'}} >{links}</Link>
                        </Box>
                    ))}
                </Box>
                </Grid>
             ))} 
 


            </Grid>

            <hr className='border-[#c4c4c4]'/>

            <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', mt:4 }}>

                <Typography>
                 © {new Date().getFullYear()} Copyright Degic 
                </Typography>
               
               <Box sx={{display:'flex',gap:1}}>

               <IconButton color='inherit'><Facebook/></IconButton>  
               <IconButton color='inherit'><Twitter/></IconButton>  
               <IconButton color='inherit'><Instagram/></IconButton> 

               </Box>


            </Box>

        </Container>

    </Box>
  )
}

export default Footer
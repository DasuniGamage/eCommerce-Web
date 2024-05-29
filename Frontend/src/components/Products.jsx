import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { Filter, SearchIcon} from '../components/icons/Icons.jsx';
import { useTheme } from '@emotion/react';
import ProductsTable from './ProductsTable.jsx';
import { useNavigate } from 'react-router-dom';


const Products = () => {
    const theme= useTheme();
    const navigate = useNavigate();
    const handleAddProduct = () => {
        navigate('/addProduct');
    };    
  return (
    <div>
      <Typography variant='h1' >Products</Typography>
      <Grid container sx={{height:'100px', justifyContent:'space-between',alignItems:'center' }}>
      <Grid item xs={6} md={6} sx={{ display: 'flex', justifyContent: 'left'}}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        InputProps={{
            endAdornment: (
            <InputAdornment position="end">
                <SearchIcon />
            </InputAdornment>
            ),
            sx: {
            backgroundColor: 'white',minWidth:'700px', height:'50px'
            },
        }}
        sx={{
            '& .MuiOutlinedInput-root': {
            border: '1px solid #D0D5DD',
            boxShadow: '0px 1px 3px 0px #606C800D',
            '& fieldset': {
                borderColor: '#D0D5DD',
            },
            '&:hover fieldset': {
                borderColor: '#D0D5DD',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#D0D5DD',
            },
            },
        }}
        />
      </Grid>
      <Grid item  xs={6} md={2} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Filter />
        <Typography sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Filters</Typography>
      </Grid>
      <Grid item  xs={6} md={2} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
      <Button variant="contained"  sx={{ width: '100%',height:'50px', borderRadius:'8px' ,textTransform: 'none'}} onClick={handleAddProduct}>Add Product</Button>
      </Grid>
      </Grid>
      <Typography >213 Products in total</Typography>
      <Grid>
        <ProductsTable/>
      </Grid>

    </div>
  )
}

export default Products

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Checkbox, IconButton, Button } from '@mui/material';
import { More } from './icons/Icons.jsx';
import { Popover, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@emotion/react';



const ProductsTable = () => {
    const theme= useTheme();
  // Sample data
  const rows = [
    { id: 1, product: 'Product 1', price: 'sssssss', height: 20, weight: 30, inStock: true, url: 'logo.png'  },
    { id: 2, product: 'Product 2', price: 'ddddd', height: 25, weight: 35, inStock: false },
  ];
  const [anchorEl, setAnchorEl] = useState(null);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

  return (
    <TableContainer component={Paper} style={{ background: "transparent" ,boxShadow: "none"}}>
      <Table style={{ border: "none" }}>
        <TableHead>
          <TableRow style={{ backgroundColor: "#ffffff" }} >
            <TableCell  align="center" style={{ width: "fit-content" }}>
            </TableCell>
            <TableCell align="center">
              <Typography>Products</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography>Category</Typography>
            </TableCell>
            <TableCell>
              <Typography>Quantity</Typography>
            </TableCell>
            <TableCell>
              <Typography>Unit Price</Typography>
            </TableCell>
            <TableCell>
              <Typography>Total Revenue</Typography>
            </TableCell>
            <TableCell>
              <Typography>Stock</Typography>
            </TableCell>
            <TableCell>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell  align="center" style={{ width: "fit-content" }}>
                <Checkbox />
              </TableCell>
              <TableCell>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={row.url} alt="Product Image" style={{ width: 64, height: 64, marginRight: 5 }} />
                <div style={{ display: 'flex', flexDirection:'column'}}>
                    <Typography>{row.product}</Typography>
                    <Typography variant='h4'>ERTEEEF</Typography>
                </div>
                </div>
              </TableCell>
              <TableCell>
              <Button sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.primary.main,borderRadius:'100px',fontSize:'14px' }}>
            {row.price}
            </Button>            
              </TableCell>
              <TableCell>
                <Typography>{row.height}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{row.weight}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{row.weight}</Typography>
              </TableCell>
              <TableCell>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: row.inStock ? 'green' : 'red', marginRight: 5 }}></div>
                  <Typography sx={{color: row.inStock ? 'green' : 'red'}}>{row.inStock ? 'In Stock' : 'Out of Stock'}</Typography>
                </div>
              </TableCell>
              <TableCell  align="center" style={{ width: "fit-content" }}>
                <IconButton onClick={handleClick}>
                  <More/>
                </IconButton>
                <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={handleClose}>View Product Details</MenuItem>
                    <MenuItem onClick={handleClose}>Edit Details</MenuItem>
                    <MenuItem onClick={handleClose}>Delete Product</MenuItem>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;

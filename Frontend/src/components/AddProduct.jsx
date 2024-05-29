import { useState } from 'react';
import { Badge, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { MenuItem, Select } from '@mui/material';
import { useTheme } from '@emotion/react';

const AddProduct = () => {
    const theme= useTheme();
  const [images, setImages] = useState([]);
  const [thumbnailIndex, setThumbnailIndex] = useState(null);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
    setImages((prevImages) => prevImages.concat(newImages.slice(0, 5 - prevImages.length)));
  };

  const handleThumbnailSelection = (index) => {
    setThumbnailIndex(index);
  };
  const handleRemoveImage = (indexToRemove) => {
    setImages((prevImages) => {
      const updatedImages = prevImages.filter((_, index) => index !== indexToRemove);
      if (thumbnailIndex === indexToRemove) {
        setThumbnailIndex(null);
      } else if (thumbnailIndex > indexToRemove) {
        setThumbnailIndex(thumbnailIndex - 1);
      }
      return updatedImages;
    });
  };
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };
  return (
    <div>
        <Typography variant="h1">Add Product</Typography>
        <Grid container mt={2} justifyContent="space-between"  columns={18} sx={{minHeight:'500px'}} >
        <Grid item xs={11} p={2} sx={{borderRadius:'12px',backgroundColor:'#ffffff'}}>
            <Typography variant='h3'>General Information</Typography>
            <Grid>
            <Typography >Product SKU</Typography>
            <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                name="productName"
                variant="outlined"
                size="small"
                sx={{
                    width: '700px',
                    '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    // borderColor: formData.firstName ? 'theme.palette.secondary.main' : '#D0D5DD',
                    '&:hover fieldset': {
                        borderColor: 'theme.palette.secondary.main',
                    },
                    },
                    
                }}
            />
            </Grid>
            </Grid>
            <Grid>
            <Typography >Product Name</Typography>
            <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                name="productName"
                variant="outlined"
                size="small"
                sx={{
                    width: '700px',
                    '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    // borderColor: formData.firstName ? 'theme.palette.secondary.main' : '#D0D5DD',
                    '&:hover fieldset': {
                        borderColor: 'theme.palette.secondary.main',
                    },
                    },
                    
                }}
            />
            </Grid>
            </Grid>
            <Grid>
            <Typography >Product Description</Typography>
            <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                name="productName"
                variant="outlined"
                size="small"
                sx={{
                    width: '700px',
                    '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    // borderColor: formData.firstName ? 'theme.palette.secondary.main' : '#D0D5DD',
                    '&:hover fieldset': {
                        borderColor: 'theme.palette.secondary.main',
                    },
                    },
                    
                }}
            />
            </Grid>
            </Grid>
            <Typography variant='h3'>Units</Typography>
            <Grid>
            <Typography >Select Unit</Typography>
            <Grid item xs={12} sm={6}>
            <Select
                fullWidth
                labelId="product-select-label"
                id="product-select"
                value={selectedProduct} 
                onChange={handleProductChange} 
                size="small"
                sx={{
                    width: '700px',
                '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '&:hover fieldset': {
                    borderColor: theme.palette.secondary.main,
                    },
                },
                }}
            >
                <MenuItem value={0}>Meter</MenuItem>
                <MenuItem value={10}>Kilogram</MenuItem>
                <MenuItem value={20}>Foot</MenuItem>
                <MenuItem value={30}>Inches</MenuItem>
                <MenuItem value={40}>Pounds</MenuItem>
                <MenuItem value={50}>Grams</MenuItem>
            </Select>
            </Grid>
            </Grid>
            <Grid>
            <Typography >Price per Unit</Typography>
            <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                name="productName"
                variant="outlined"
                size="small"
                sx={{
                    width: '700px',
                    '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    // borderColor: formData.firstName ? 'theme.palette.secondary.main' : '#D0D5DD',
                    '&:hover fieldset': {
                        borderColor: 'theme.palette.secondary.main',
                    },
                    },
                    
                }}
            />
            </Grid>
            </Grid>

            <Typography variant='h3'>Category</Typography>
            <Grid>
            <Typography >Select Category</Typography>
            <Grid item xs={12} sm={6}>
            <Select
                fullWidth
                labelId="product-select-label"
                id="product-select"
                // value={selectedProduct} 
                // onChange={handleProductChange} 
                size="small"
                sx={{
                    width: '700px',
                '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '&:hover fieldset': {
                    borderColor: theme.palette.secondary.main,
                    },
                },
                }}
            >
                <MenuItem value={10}>Utensils</MenuItem>
                <MenuItem value={10}>Fabrics</MenuItem>
                <MenuItem value={20}>Ceramics</MenuItem>
                <MenuItem value={30}>Plates and bowls</MenuItem>
                <MenuItem value={30}>Organic</MenuItem>
                <MenuItem value={30}>Decorations</MenuItem>
            </Select>
            </Grid>
            </Grid>            

        </Grid>
        <Grid item xs={6} p={2}  sx={{borderRadius:'12px',backgroundColor:'#ffffff'}}>
        <Typography variant='h3'>Product Images</Typography>
        <Typography>
        Lorem ipsum dolor sit amet consectetur. Pharetra sed arcu nunc quisque nisl vitae dolor sapien nascetur. Tellus imperdiet orci tellus enim 
        </Typography>


        <Grid>
        <Button sx={{textTransform:'none'}}>
        <label htmlFor="image-upload">
            <IconButton component="span">
            <AddIcon sx={{ color: 'primary.main' }} />
            </IconButton>
        </label>
        <Typography variant="h4">Add Images</Typography>
        <input
        accept="image/*"
        id="image-upload"
        type="file"
        multiple
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
        </Button>
        
      
        <Grid container spacing={2}>
    {images.map((imageUrl, index) => (
      <Grid item key={index}>
        <Badge>
        <IconButton onClick={() => handleRemoveImage(index)} sx={{ position: 'absolute', top: '0px', left: '10px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '50%', padding: '4px' }}>
          <ClearIcon sx={{ color: 'red' }}/>
        </IconButton>
        </Badge>
        <img src={imageUrl} alt={`Product Image ${index + 1}`} style={{ width: '50px', height: '50px', borderRadius: '8px' }} />
        <Button onClick={() => handleThumbnailSelection(index)} sx={{textTransform:'none',fontSize:'10px'}}>Set as Thumbnail</Button>
      </Grid>
    ))}
  </Grid>
      {thumbnailIndex !== null && (
        <Typography variant="body1">
          Thumbnail selected: {thumbnailIndex + 1}
        </Typography>
      )}
    </Grid>
        
            
        </Grid>
        </Grid>
        <Grid item  xs={6} md={2} mt={1} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
        <Button variant="contained"  sx={{ width: '15%',height:'50px', borderRadius:'8px' ,textTransform: 'none'}} >Add Product</Button>
        </Grid>

    </div>
  );
};

export default AddProduct;

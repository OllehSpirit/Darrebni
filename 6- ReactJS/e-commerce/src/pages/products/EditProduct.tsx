import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SyntheticEvent, useEffect, useState } from 'react';
import { getCategories, getProduct, putProduct } from '../../api/products';
import { useParams } from 'react-router-dom';

export default function EditProduct() {

    const [categories, setCategories] = useState([])
    const [warning, setWarning] = useState('')

    const { productId } = useParams()

    const [image, setImage] = useState('')
    const [data, setData] = useState({
        title: '',
        price: 0,
        description: '',
        image: {},
        category: ''
    })


    // const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            setCategories(await getCategories())
        })();

        (async () => {
            if (productId !== undefined) {
                const product = await getProduct(parseInt(productId))
                setData(product)
                setImage(product.image)
            }

        })();
    }, [productId])

    const changeHandler = (e: SyntheticEvent) => {
        const { name, value } = e.target as HTMLInputElement
        setData(prev => ({ ...prev, [name]: value }))
    }
    const handleSwitchImage = (e: SyntheticEvent) => {
        const inputTarget = e.target as HTMLInputElement;
        if (inputTarget.files !== null) {
            const pic = inputTarget.files[0]
            setData(prev => ({ ...prev, image: pic }))
            
            const reader = new FileReader();
            reader.readAsDataURL(pic);
            
            reader.onloadend = function () {
                if (typeof reader.result === 'string') {
                    const res = reader.result.toString()
                    setImage(res)
                }
            }
        }

    }

    const handleAdd = () => {
        if (data.title === '') {
            setWarning('Please enter title of the new product')
        }
        else if (data.description === '') {
            setWarning('Please enter description of the new product')
        }
        else if (data.price === 0) {
            setWarning('Please enter price of the new project')
        }
        else if (isNaN(data.price)) {
            setWarning('Invalid price')
        }
        else if (data.category === '') {
            setWarning('Please choose category of the new project')
        }
        else if (image === '') {
            setWarning('Please choose image of the new project')
        }
        else {
            if (productId !== undefined) {
                setWarning('')
                // navigate('/')
                const formData = new FormData();
                formData.append('title', data.title)
                formData.append('description', data.description)
                formData.append('price', data.price.toString())
                // formData.append('image', data.image as File)
                formData.append('image', data.image as File);
                formData.append('category', data.category)

                putProduct(parseInt(productId), formData)
            }
        }

    }

    return (
        <div className='flex justify-center'>
            <div className='my-5 bg-white rounded-2xl' style={{ width: '50vw', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <div className='text-center my-10 text-2xl'>Edit Product</div>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
                    className='flex flex-col justify-center items-center gap-5 my-5'
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="title" variant="outlined" name='title' value={data.title} onChange={changeHandler} />
                    <TextField id="outlined-basic" label="description" variant="outlined" name='description' value={data.description} onChange={changeHandler} />
                    <TextField id="outlined-basic" label="price" variant="outlined" name='price' value={data.price} onChange={changeHandler} />

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={data.category}
                            label="Category"
                            onChange={(e) => setData(prev => ({ ...prev, category: e.target.value }))}
                        >
                            {categories.map((category, index) => {
                                return <MenuItem key={index} value={category}>{category}</MenuItem>
                            })}
                        </Select>
                    </FormControl>

                    <div className='flex justify-center items-center gap-5'>

                        <img src={image} alt={data.title} style={{ height: '50px' }} />

                        <Button variant="contained" component="label" sx={{
                            backgroundColor: 'var(--primary)',
                            '&:hover': {
                                backgroundColor: 'var(--secondary)',
                            },
                        }}>
                            Upload File
                            <input type="file" accept="image/*" hidden onChange={handleSwitchImage} />
                        </Button>
                    </div>

                    <div className='text-center text-red-700' >{warning}</div>

                    <div className='flex justify-center'>
                        <Button variant='contained' onClick={handleAdd}>ADD</Button>
                    </div>

                </Box>

            </div>
        </div>
    )
}

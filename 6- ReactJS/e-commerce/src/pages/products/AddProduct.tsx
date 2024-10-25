import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { getCategories, postProduct } from '../../api/products';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {

    const title = useRef('')
    const description = useRef('')
    const price = useRef(0)
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState([])
    const [image, setImage] = useState('')
    const [warning, setWarning] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            setCategories(await getCategories())
        })()
    }, [])


    const handleSwitchImage = (e: SyntheticEvent) => {
        const inputTarget = e.target as HTMLInputElement;
        let newPic;
        if (inputTarget.files) {
            newPic = inputTarget.files[0]

            const reader = new FileReader();
            reader.readAsDataURL(newPic);

            reader.onloadend = function () {
                if (typeof reader.result === 'string')
                    setImage(reader.result)
            }
        }

    }

    const handleAdd = () => {
        if (title.current === '') {
            setWarning('Please enter title of the new product')
        }
        else if (description.current === '') {
            setWarning('Please enter description of the new product')
        }
        else if (price.current === 0) {
            setWarning('Please enter price of the new project')
        }
        else if (isNaN(price.current)) {
            setWarning('Invalid price')
        }
        else if (category === '') {
            setWarning('Please choose category of the new project')
        }
        else if (image === '') {
            setWarning('Please choose image of the new project')
        }
        else {
            setWarning('')
            postProduct({
                title: title.current,
                price: price.current,
                description: description.current,
                image: image,
                category: category
            })
            navigate('/')
        }

    }

    return (
        <div className='flex justify-center'>
            <div className='my-5 bg-white rounded-2xl' style={{ width: '50vw',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <div className='text-center my-10 text-2xl'>Add Product</div>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
                    className='flex flex-col justify-center items-center gap-5 my-5'
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="title" variant="outlined" onChange={(e) => title.current = e.target.value} />
                    <TextField id="outlined-basic" label="description" variant="outlined" onChange={(e) => description.current = e.target.value} />
                    <TextField id="outlined-basic" label="price" variant="outlined" onChange={(e) => price.current = parseInt(e.target.value)} />

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {categories.map((category, index) => {
                                return <MenuItem key={index} value={category}>{category}</MenuItem>
                            })}
                        </Select>
                    </FormControl>

                    <div className='flex justify-center items-center gap-5'>
                        {image === '' ?
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="black" d="M2048 0v2048H0V0zm-128 987l-358 357l358 357zm-256-731q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50q0 27 10 50t27 40t41 28t50 10q27 0 50-10t40-27t28-41t10-50M128 128v677l448-447l896 896l448-449V128h-162q34 58 34 128q0 53-20 99t-55 82t-81 55t-100 20q-53 0-99-20t-82-55t-55-81t-20-100q0-70 34-128zm1792 1792v-37L576 538L128 987v933z"></path></svg>
                            </> :
                            <>
                                <img src={image} alt='Product Image' style={{ height: '50px' }} />
                            </>}

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

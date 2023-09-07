import { Avatar } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required")
})


const HomeSection = () => {

    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectImage, setSelectImage] = useState("");


    const handleSubmit = (values) => {
        console.log("values", values)
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },
        onSubmit: handleSubmit,
        validationSchema,
    })

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0]
        formik.setFieldValue("image", imgUrl);
        setSelectImage(imgUrl);
        setUploadingImage(false);
    }
    return (
        <div className='space-y-5'>
            <section>
                <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
            </section >

            <section className={'pb-10'}>
                <div className='flex space-x-5'>
                    <Avatar alt="username" src="https://thumbs.dreamstime.com/b/avatar-icon-vector-male-user-person-profile-symbol-flat-color-glyph-pictogram-illustration-117610386.jpg" />
                    <div className='w-full'>
                        <form>
                            <div>
                                <input type="text" name="content" placeholder="What is happening ?"
                                    className={'border-none outline-none text-xl bg -transaparent'} {...formik.getFieldProps("content")} />
                                {/* If any error occurs in content , show it in red color*/}
                                {formik.errors.content && formik.touched.content && (
                                    <span className='text-red-500'> {formik.errors.content} </span>
                                )}
                            </div>

                            <div>

                            </div>

                            <div className='flex justify-between items-center mt-5'>
                                <div className='flex space-x-5 items-center'>
                                    <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                        <ImageIcon className='text-[#1d9bf0]' />
                                        <input type="file" name="imageFile" className='hidden' onChange={handleSelectImage} />
                                    </label>
                                    <FmdGoodIcon className='text-[#1d9bf0]' />
                                    <TagFacesIcon className='text-[#1d9bf0]' />
                                </div>
                                
                                

                            </div>
                        </form>

                    </div>
                </div>

            </section>

        </div>
    )
}

export default HomeSection
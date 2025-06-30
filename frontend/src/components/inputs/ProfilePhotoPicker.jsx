import React, { useRef, useState } from 'react'
import { LuUser , LuUpload , LuTrash } from 'react-icons/lu';


const ProfilePhotoPicker = ({image , setImage}) => {

    const inputRef = useRef(null);
    const [previewUrl , setPreviewUrl] = useState(null);

    const handleImageChange = (event)=>{
        const file = event.target.files[0];
        if(file){
            setImage(file);
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
    }

    const handleRemoveImage = () =>{
        setImage(null);
        setPreviewUrl(null);
    }

    const onChooseFile = () =>{
        inputRef.current.click()
    }
  return (
    <div className='flex justify-center mb-6 '>
        <input
            type='file'
            accept='image/*'
            ref={inputRef}
            onChange={handleImageChange}
            className='hidden'
        />

        {!image ? (
            <div className='w-20 h-20 flex items-center justify-center rounded-full relative' style={{backgroundColor:`var(--color-secondary)`}}>
                <LuUser className='text-4xl' style={{color:`var(--color-primary)`}}/>
                <button
                    type="button"
                    className='w-8 h-8 flex items-center justify-center text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer'
                    style={{backgroundColor:`var(--color-primary)`}} 
                    onClick={onChooseFile}
                >
                    <LuUpload/>
                </button>
            </div>
        ) : (
            <div className='relative'>
                <img
                    src={previewUrl}
                    alt='Profile Picture'
                    className='w-20 h-20 rounded-full object-cover'
                />
                <button
                    type="button"
                    className='w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer'
                    onClick={handleRemoveImage}
                >
                    <LuTrash/>
                </button>
            </div>
        )}
    </div>
  )
}

export default ProfilePhotoPicker
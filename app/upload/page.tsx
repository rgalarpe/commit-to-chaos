'use client';
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {

    const [publicId, setPublicId] = useState('')


    return (
        <>
            {publicId &&
                <CldImage src={publicId} width={300} height={300} alt="random upload" />}
            <CldUploadWidget
                uploadPreset="repoupld"
                options={{
                    sources: ['local'],
                    multiple: false,
                    styles: {
                        palette: {
                            window: "#5D005D",
                            sourceBg: "#3A0A3A",
                            windowBorder: "#AD5BA3",
                            tabIcon: "#ffffcc",
                            inactiveTabIcon: "#FFD1D1",
                            menuIcons: "#FFD1D1",
                            link: "#ffcc33",
                            action: "#ffcc33",
                            inProgress: "#00e6b3",
                            complete: "#a6ff6f",
                            error: "#ff1765",
                            textDark: "#3c0d68",
                            textLight: "#fcfffd"
                        }
                    }
                }}
                onSuccess={(result, widget) => {
                    if (result.event !== 'success') return;
                    const data = result.info as CloudinaryResult;
                    setPublicId(data.public_id);
                }}>
                {({ open }) => (
                    <button
                        className='btn bg-neutral text-white border-none hover:bg-pink-600 rounded-2xl px-6 py-2'
                        onClick={() => open()}>
                        Upload
                    </button>
                )}
            </CldUploadWidget>
        </>
    )
}

export default UploadPage;
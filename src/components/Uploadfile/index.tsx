"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useWalletAddress } from 'bitcoin-wallet-adapter';

export default function UploadImage() {
  const walletDetails = useWalletAddress();
  const [imageSrc, setImageSrc] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const target = event.target as FileReader;
        if (target && target.result) {
          const result = target.result as string;
          console.log("Result Output", result)
          setImageSrc(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image',imageSrc);
      formData.append('cardinal_address',walletDetails?.cardinal_address?? '');
      formData.append('cardinal_pubkey',walletDetails?.cardinal_pubkey ?? '');
      formData.append('ordinal_address',walletDetails?.ordinal_address ?? '');
      formData.append('ordinal_pubkey',walletDetails?.ordinal_pubkey ?? '');
      formData.append('wallet',walletDetails?.wallet ?? '');
      formData.append('order_id',uuidv4());
      formData.append("status","pending");

      try {
        const res = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log("Super", res.data);
        setMessage(res.data.message);
      } catch (error) {
        console.error('Error uploading image:', error);
        setMessage('Failed to upload image');
      }
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <br /><br />
        {imageSrc && <img src={imageSrc} alt="Image Preview" style={{ maxWidth: '300px' }} />}
        <br /><br />
        <button 
        className='text-white rounded-md flex items-center px-6 mx-7 h-[40px] py-1  font-light bg-accent_dark hover:bg-green-400  flex items-center mx-3 py-1 font-bold'
        type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}




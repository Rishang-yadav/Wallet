// /****update*** */
// import { NextRequest, NextResponse } from 'next/server';
// import dbConnect from '../../../lib/dbConnect';
// import Image from '../../../modals/Image';

// // Middleware to handle multipart/form-data
// const parseForm = async (req: NextRequest) => {
//   const formData = await req.formData();
//   const file = formData.get('image');
//   return file;
// };

// export async function POST(req: NextRequest) {
//   console.log("************upload api called********");
//   try {
//     // Parse form data
//     const file = await parseForm(req);
//     console.log("Parsed file:", file);

//     if (!file) {
//       console.log("No image file received");
//       return NextResponse.json({ message: 'No image file received' }, { status: 400 });
//     }

//     const buffer = await file.arrayBuffer();
//     console.log("Buffer received:", buffer);

//     const image = Buffer.from(buffer).toString('base64');
//     console.log("Base64 image string:", image);

//     await dbConnect();
//     console.log("Database connected");

//     await Image.create({ image});
//     console.log("Image saved to database");

//     return NextResponse.json({ message: 'Image uploaded successfully' });
//   } catch (error: any) {
//     console.error('Error uploading image:', error);
//     return NextResponse.json({ message: 'Failed to upload image', error: error.message }, { status: 500 });
//   }
// }



/***new*** */

import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import Image from '../../../modals/Image';

// Middleware to handle multipart/form-data
const parseForm = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get('image');
  return {file,formData};
};

export async function POST(req: NextRequest) {
  console.log("************upload api called********");
  try {
    // Parse form data
    const {file,formData} = await parseForm(req);
    console.log("Parsed file:", file);

    // if (!file) {
    //   console.log("No image file received");
    //   return NextResponse.json({ message: 'No image file received' }, { status: 400 });
    // }

    // const buffer = await file.arrayBuffer();
    // console.log("Buffer received:", buffer);

    // const image = Buffer.from(buffer).toString('base64');
    // console.log("Base64 image string:", image);

    await dbConnect();
    console.log("Database connected");
    const image = formData.get('image');
    const cardinal_address = formData.get('cardinal_address');
    const cardinal_pubkey = formData.get('cardinal_pubkey');
    const ordinal_address = formData.get('ordinal_address');
    const ordinal_pubkey = formData.get('ordinal_pubkey');
    const wallet = formData.get('wallet');
    const order_id = formData.get("order_id")
    const status = formData.get('status');

    await Image.create({
       image,
       cardinal_address,
       cardinal_pubkey,
       ordinal_address,
       ordinal_pubkey,
       wallet,
       order_id,
       status,
    });
    console.log("Image saved to database");

    return NextResponse.json({ message: 'Image uploaded successfully' });
  } catch (error: any) {
    console.error('Error uploading image:', error);
    return NextResponse.json({ message: 'Failed to upload image', error: error.message }, { status: 500 });
  }
}




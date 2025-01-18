import clientPromise from '../../../lib/mongo';
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: `${process.env.NEXT_PUBLIC_EMAIL}`, //use env vars here
    pass: `${process.env.NEXT_PUBLIC_APP_PASSWORD}`, // and here
  },
});

var mailOptions = {
  from: 'namoota.zar@gmail.com',
  to: 'axolile@anconsulting.co.za',
  subject: 'New Website Call Me back',
};
// app/api/route.js 👈🏽

import { NextResponse } from 'next/server';

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  return NextResponse.json({ message: 'Hello World' }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(req) {
  const client = await clientPromise;
  const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
  const collection = db.collection('messages');
  let data = req.body;
  data = {
    ...data,
    createdAt: new Date(),
    approved: false,
  };
  const result = await collection.insertOne(data);
  console.log('saving data', data);
  console.log(
    `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`
  );

  mailOptions.html = `<h1>Hi Axolile,</h1> <p>This is Ayabonga from Namoota, you have received a new call me back request on your website</p> <p>Name: ${data.name}</p> <p>Phone: <a href='tel:${data.cellphoneNumber}'>${data.cellphoneNumber} </a> <br/> Email: <a href="mailto:${data.email}">${data.email}</a></a></p>`;
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  // Do whatever you want
  return NextResponse.json(
    { message: 'Testimonial added successfully', data: result },
    { status: 200 }
  );
}

// Same logic to add a `PATCH`, `DELETE`...

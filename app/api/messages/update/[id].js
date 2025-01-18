import clientPromise from '@/util/mongo';
import { ObjectId } from 'mongodb';
import { omit } from 'ramda';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      //console.log('req.method', req.method, 'req.query', req.query);
      const client = await clientPromise;
      const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
      const collection = db.collection('messages');
      let data = req.body;
      data = {
        ...data,
        updatedAt: new Date().toString(),
      };
      console.log('data', data);
      const result = await collection.updateOne(
        { _id: new ObjectId(req.query.id) },
        { $set: omit(['_id'], data) }
      );

      res
        .status(200)
        .json({ message: 'callback updated successfully', data: result });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (e) {
    //console.log(e);
    res.status(405).json({ message: 'Something went wrong', error: e });
  }
}

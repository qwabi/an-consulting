import clientPromise from '@/util/mongo';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      //console.log('req.method', req.method, 'req.query', req.query);
      const client = await clientPromise;
      const db = client.db(process.env.NEXT_PUBLIC_SELECTED_DB);
      const collection = db.collection('messages');
      const data = await collection.find().sort({ createdAt: -1 }).toArray();
      res.status(200).json({ data });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (e) {
    //console.log(e);
    res.status(405).json({ message: 'Something went wrong', error: e });
  }
}

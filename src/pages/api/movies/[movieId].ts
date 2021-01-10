import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async (req, res) => {
  const { query: { movieId } } = req;
  const { db } = await connectToDatabase();
  const movie = await db
    .collection("movies")
    .findOne({ _id: ObjectId.createFromHexString(movieId) });
  res.json(movie);
};

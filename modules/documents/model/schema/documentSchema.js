import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
	title: String,
	content: String,
});

export default documentSchema;
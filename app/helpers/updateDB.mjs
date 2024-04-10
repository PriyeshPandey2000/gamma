// updateDB.js
import mongoose from 'mongoose';
import User from '../../models/userModel.js';

async function updateDatabase() {
    try {
        await mongoose.connect('mongodb+srv://priyeshpandey2000:niFj4XmEOrdqUiPC@cluster0.7yhhiap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const result = await User.updateMany({}, { $set: { purchasedCourses: [] } }, { upsert: true });
        console.log(`${result.nModified} documents updated`);

    } catch (error) {
        console.error('Error updating documents:', error);
    } finally {
        mongoose.disconnect();
    }
}

updateDatabase();

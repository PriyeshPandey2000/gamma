// updateDB.js
const mongoose = require('mongoose');
const User = require('./app/models/userModel.js');


async function updateDatabase() {
    try {
        await mongoose.connect('mongodb+srv://priyeshpandey2000:niFj4XmEOrdqUiPC@cluster0.7yhhiap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

        const result = await User.updateMany({}, { $set: { purchasedCourses: [] } }, { upsert: true });
        console.log(`${result.nModified} documents updated`);

    } catch (error) {
        console.error('Error updating documents:', error);
    } finally {
        mongoose.disconnect();
    }
}

updateDatabase();

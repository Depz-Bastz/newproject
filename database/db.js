const mongoose = require('mongoose');

const connectDB = async () => {
try { 
    await mongoose.connect(
        'mongodb+srv://myDB-user:hello123@mydb.hmrcj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
            {
            useNewUrlParser: true,
            useUnifiedToplogy: true
            }
        );
        console.log('Database connection success');
    } catch (err) {
    console.log(errr);
    }
};

module.exports = connectDB;
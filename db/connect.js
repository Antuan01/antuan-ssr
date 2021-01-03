import mongoose from 'mongoose';

const connect = () => {
    if(mongoose.connections[0].readyState !== 1){
        mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("conepto bebex")// we're connected!
});
    }
    
}

export default connect;

import mongoose from "mongoose";
export const mongoDB = () => {
    mongoose.connect("mongodb+srv://mehtasagar437:sagar@datavisualization.rwt7uyd.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("MongoDb database is connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}
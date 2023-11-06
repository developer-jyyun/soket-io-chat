// user data schema : 데이터 설계도
// 내가 받을 데이터가 어떻게 생겼는지 설명

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "User must type name"],
        unique:true,
    },
    token:{
        type:String,
    },
    online:{
        type:Boolean,
        default:false,
    },
});
module.exports = mongoose.model("User",userSchema);
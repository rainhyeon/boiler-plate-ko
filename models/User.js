const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //관리자
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {//토큰 유효기간
        type: Number
    }
})

//스키마를 모델로 감쌈
const User = mongoose.model('User', userSchema)

//모델을 다른 파일에서도 사용하기
module.exports = {User}
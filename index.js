const express = require('express') 
const app = express()
const port = 5000

//bodyparser 가져오기
const bodyParser = require('body-parser')

//User 모델 가져오기
const { User } = require("./models/User")


//bodyparser 옵션주기(application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json())



const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://rainhyeon:abcd1234@cluster0.qkfbapn.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err))









app.get('/', (req, res) => {
  res.send('Hello World!')
})


//회원가입을 위한 라우터
app.post('/register', (req, res) => {
  //회원가입 할때 필요한 정보들을 클라이언트에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err}) //실패하면 -> false, error내용
    return res.status(200).json({ //성공하면 -> success 표시
      success: true
    })
  })

  //req.body -> bodyparser덕에
  // {
  //   id:"hello",
  //   password: 1234
  // }

})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
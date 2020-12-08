const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const md5 = require('md5');

const mysql = require('mysql');
const pool = mysql.createPool({
  //MySQL数据库服务器的地址
  host:'127.0.0.1',
  //端口号
  port:3306,
  //数据库用户的用户名
  user:'root',
  //数据库用户的密码
  password:'',
  //数据库名称
  database:'xzqa',
  //最大连接数据
  connectionLimit:10
});


server.use(cors({
  origin:['http://127.0.0.1:8080','http://localhost:8080']
}));

server.use(bodyParser.urlencoded({
  extended:false
}));


server.listen(3000,()=>{
  console.log('server is running...');
});

/*
* @Author: Administrator
* @Date:   2016-09-29 17:52:02
* @Last Modified by:   Administrator
* @Last Modified time: 2016-09-30 09:43:08
*/

'use strict';

const MongoClient = require('mongodb').MongoClient;
let DB_URL = 'mongodb://localhost:27017/testdb';

//插入数据	
let insertData = function(db, callback) {  
	//连接到表  
	let collection = db.collection('mycol');
	//插入数据
	let data = [{"name":'wilson001',"age":21},{"name":'wilson002',"age":22}];
	collection.insert(data, function(err, result) { 
		if(err)
		{
		  console.log('Error:'+ err);
		  return;
		}	 
		callback(result);
	});
}
//查找数据
MongoClient.connect(DB_URL, function(err, db) {
  console.log("连接成功！");
  insertData(db, function(result) {
    console.log(result);
    db.close();
  });
});
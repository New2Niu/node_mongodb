/*
* @Author: Administrator
* @Date:   2016-09-30 09:43:58
* @Last Modified by:   Administrator
* @Last Modified time: 2016-09-30 10:32:41
*/

'use strict';

const MongoClient = require('mongodb').MongoClient;

const DB_URL = 'mongodb://127.0.0.1:27017/testdb';

//插入数据
const insertDocuments = (db,callback)=>{
	//
	let mycol = db.collection('mycol');
	let data = {
		name:'who',
		age:123
	}
	mycol.insert(data,(err,result)=>{
		callback(result);
	})
}
//删除
const delDocuments=(db,callback)=>{
	let mycol = db.collection('mycol');
	let query={
		name:'who'
	}
	mycol.deleteOne(query,(err,result)=>{
		callback(result);
	})
}
//修改
const updateDocument=(db,callback)=>{
	let mycol=db.collection('mycol');
	let query={
		name:'rayy'
	}
	mycol.updateOne(query,{$set:{name:'ray'}},(err,result)=>{
		callback(result);
	})
}
//查找数据
const findDocuments = (db,callback)=>{
	let mycol = db.collection('mycol');
	let query={
		age:{
			$gt:22
		}
	}
	mycol.find(query).toArray((err,result)=>{
		callback(result);
	})
}
//创建索引
const indexCollextion=(db,callback)=>{
	db.collection('mycol').createIndex(
		{age:1},
		null,
		(err,result)=>{
			callback(result);
		}
	)
}

MongoClient.connect(DB_URL,(err,db)=>{
	if(!err){
		// insertDocuments(db,(result)=>{
		// 	console.log(result);
		// })
		// findDocuments(db,(result)=>{
		// 	console.log(result);
		// })
		// delDocuments(db,(result)=>{
		// 	console.log(result);
		// })
		// updateDocument(db,(result)=>{
		// 	console.log(result);
		// })
		indexCollextion(db,(result)=>{
			console.log(result);
		})
	}
	db.close();
})
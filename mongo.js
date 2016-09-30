/*
* @Author: Administrator
* @Date:   2016-09-29 16:24:09
* @Last Modified by:   Administrator
* @Last Modified time: 2016-09-29 17:23:37
*/

'use strict';
const mongodb = require('mongodb');

const server = new mongodb.Server('localhost',27017,{auto_reconnect:true});

const db = new mongodb.Db('testdb',server,{safe:true});

db.open((err,db)=>{
	if(!err){
		console.log('connect db');
		db.createCollection('mycol',{safe:true},(err,collection)=>{
			if(!err){
				let temp = {name:'ray',age:12}
				collection.insert(temp,{safe:true},(err,result)=>{
					console.log(result);
				});
			}
		})
	}
})
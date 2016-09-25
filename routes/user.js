
/*
 * GET users listing.
 */
var ejs = require("ejs");
	var mysql = require('./mysql');

	
exports.getasset = function(req, res){
var getasset="select * from asset";
		console.log("Query is:"+getasset);
		mysql.fetchData(function(err,results){
			if(err){
				throw err;
			}
			else 
			{
				if(results.length > 0){
					console.log("User Info Fetched");				
					res.send(results);
				}
				else {    
					
					console.log("No Data.");
				}
			}  
		},getasset);
	};
	

	exports.getuser = function(req, res){
		var getUser="select * from user";
				console.log("Query is:"+getUser);
				mysql.fetchData(function(err,results){
					if(err){
						throw err;
					}
					else 
					{
						if(results.length > 0){
							console.log("User Info Fetched");				
							res.send(results);
						}
						else {    
							
							console.log("No Data.");
						}
					}  
				},getUser);
			};

			exports.insertUser = function(req, res){
				var insertUser="INSERT INTO user (`userID`, `username`, `assetID`, `srNo`, `userRating`, `comment`, `timestamp`) VALUES ('10', 'vivek', '1', '1', '3', 'good', '12 PM');";
				console.log("Query is:"+insertUser);
				mysql.push(function(err,results){
					if(err){
						throw err;
					}  
				},insertUser);
				res.send("New user created.");
				res.end();
			};
			
			exports.insertAsset = function(req, res){
				var insertAsset="INSERT INTO asset (`assetID`, `assetName`, `assetDescription`, `totalRatings`, `userRatings`, `Location`) VALUES ('6', 'W San Carlos St', '4 lane road', '10', '3', '(60,70)');";
				console.log("Query is:"+insertAsset);
				mysql.push(function(err,results){
					if(err){
						throw err;
					}  
				},insertAsset);
				res.send("New Asset created");
				res.end();
			};
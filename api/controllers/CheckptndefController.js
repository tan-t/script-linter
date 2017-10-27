/**
 * CheckptndefController
 *
 * @description :: Server-side logic for managing checkptndefs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new:function(req,res){
		res.view('checkptndef/new',{item:{id:0,name:'',errorMessage:'',func:'',successMessage:''}});
	},
	show:function(req,res){
		var id = req.param('id');
		Checkptndef.find({id}).exec((err,records)=>{
			console.log(records);
			res.view('checkptndef/show',{item:records[0]});
		});
	},
	create:function(req,res){
		Checkptndef.create(req.body).exec(function (err, inserted){
  		if (err) { return res.serverError(err); }
			res.redirect(`checkptndef/${inserted.id}`);
	});
	},
	index:function(req,res){
		Checkptndef.find().exec((err,records)=>{
			console.log(records);
			res.view('checkptndef/index',{items:records,cols:getColumnDef()});
		});
	},
	edit:function(req,res){
		var id = req.param('id');
		Checkptndef.find({id}).exec((err,records)=>{
			console.log(records);
			res.view('checkptndef/edit',{item:records[0]});
		});
	},
	update:function(req,res){
		Checkptndef.update({id:req.param('id')},req.body).exec(function (err, updated){
			if (err) { return res.serverError(err); }
			res.redirect(`checkptndef/${req.param('id')}`);
	});
	},
	destroy:function(req,res){
		Checkptndef.destroy({id:req.param('id')}).exec(function (err){
			if (err) { return res.serverError(err); }
			res.redirect(`/checkptndef`);
	});
	},
};

var getColumnDef = function(){
	return [{name:'id',id:'id'},{name:'名称',id:'name'},{name:'成功時のメッセージ',id:'successMessage'},{name:'エラー時のメッセージ',id:'errorMessage'},{name:'関数',id:'func'}];
}

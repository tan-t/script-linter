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
};

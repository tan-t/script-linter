/**
 * CheckptndefController
 *
 * @description :: Server-side logic for managing checkptndefs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  download:function(req,res){
    res.attachment('./resources/recv-check.zip');
    return res.send();
  }
};

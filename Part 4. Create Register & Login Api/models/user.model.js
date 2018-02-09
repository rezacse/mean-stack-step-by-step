
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
    name:{
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

var User = mongoose.model('User', userSchema);

// save user to database
User.addUser = function(user, callback){

    bcrypt.genSalt(10, (err, salt)=>{
        if(err){
            callback('server error');
        }else {
            bcrypt.hash(user.password, salt, (err, hash)=>{
                if(err){
                    callback('server error');
                }else{
                    user.password = hash;
                    user.save((err, result)=>{
                        if(err){
                            console.log(err);
                            callback('Failed to add', null);
                        } else{
                            callback(null, 'user added');
                        }
                    });
                }
            });
        }
    });    
};

// login 
User.login = function(email, password, callback){
    User.findOne({email: email}, (err, user)=>{
        if(err){
            console.log(err);
            callback('server error');
        }else if(user==undefined){
            callback('user not found');
        }else{
            bcrypt.compare(password, user.password,(err, isMatch)=>{
                if(err){
                    callback('server error');
                }else if(isMatch===true){
                    callback(null, 'login successfully');
                }else{
                    callback('login info incorrect');
                }
            });
        }
    });
}

module.exports = User;



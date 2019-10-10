const mongoose = require('mongoose');
var roomSchema = new mongoose.Schema({
    fullName:{
        type: String,
        Required: 'Enter first name'
    },
    time:{
        type: String,
        Required: 'Enter checkout'
    },
    people:{
        type: Number,
        Required: 'Enter people'
    },
    kids: {
        type: Number,
        Required: 'Enter kids'
    },
    room_type:{
        type: String,
        Required: 'Enter room Type'
    },
    room_number:{
        type: Number,
        Required: 'Enter Room Number'
    },
    Created_date:{
        type: Date,
        default: Date.now
    }, 
});
/*roomSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');*/


//module.exports = 
mongoose.model('room_model',roomSchema);
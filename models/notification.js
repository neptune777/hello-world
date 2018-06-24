const mongoose = require('mongoose')
let Schema = mongoose.Schema;

const url = require('./db-config')

mongoose.connect(url)

let not = new Schema({ name: String, id: String });
let Notification = mongoose.model('Notification', not);




Notification.format =
    not.statics.format = function (notification) {

        console.log("No niin", notification)
        return {
            name: notification.name,
            id: notification._id
        }
    };






module.exports = Notification
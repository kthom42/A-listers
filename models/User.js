var sequelize = require('sequelize');
var bcrypt = require('bcrypt');

const sequelize = new sequelize('A_listers_db','root','password',{
    host:'localhost',
    port: 3306,
    dialect:'mysql',
    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000,
    },
    operatoraliases: false
    });


    //set up user table
    var User =sequelize.ModelDefined('users',{
        id:{
           type: sequelize.INTEGER,
           unique: true,
           allowNull: false,
           primaryKey: true,
           autoIncreaments: true
        },
        username: {
            type:sequelize.String,
            unique: true,
            allowNull: false
        },
        password:{
            type: sequelize.String,
            allowNull: false,
        }
    }); 

    User.beforeCreate((user, options) =>{
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
    });
    User.prototype.validPassword = function (Password){
        return bcrypt.compareSync(password, this.password);
    };

    //create all defined tables in the specific database
    sequelize.sync()
        .then(() => console.log('user table has been successfully created if one does not exist'))
        .catch(error => console.log('This error occured',error));

        //export User module for other files
        module.exprts = User;
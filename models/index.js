const User = require('./User');
const Item = require('./Project');

User.hasMany(Item, {
	foreignKey: 'user_id',
	onDelete: 'CASCADE',
});

Project.belongsTo(User, {
	foreignKey: 'user_id',
});

module.exports = { User, Project };

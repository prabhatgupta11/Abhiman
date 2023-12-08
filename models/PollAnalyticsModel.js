const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  const PollAnalytics = Sequelize.define("pollAnalytics", {
    pollId: {
      type: DataTypes.INTEGER, // Change the data type to INTEGER if it's an integer in the database
      allowNull: false,
    },
    totalVotes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    optionCounts: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });

  return PollAnalytics;
};

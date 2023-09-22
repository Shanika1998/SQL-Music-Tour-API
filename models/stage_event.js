'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {
    
    static associate(models) {
      
    }
  }
  StageEvent.init({
    stage_event_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
      primaryKey:true,
      autoIncrement:true

  },
    stage_id: {
      type: DataTypes.INTEGER, 
      allowNull:false
    
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    
    }
  }, {
      sequelize,
      modelName: 'StageEvent',
      tableName: 'stage_events',
      timestamps: false
    });
  return StageEvent;
};
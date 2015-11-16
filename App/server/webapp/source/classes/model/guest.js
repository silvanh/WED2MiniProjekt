
define(['app/services/uuidService'], function(UUIDService){
  'use strict'

  var Guest = function(name, contribution, comment, canceled,id){
    this.id = id || UUIDService.getRandomUuid();
    this.name=name;
    this.contribution=contribution;
    this.comment=comment;
    this.canceled=canceled;
  };

  Event.createFromDTO = function(jsonData) {
    return new Guest(
      jsonData.name,
      jsonData.contribution,
      jsonData.comment,
      jsonData.canceled,
      jsonData.id
    );
  };

  return Event;
});
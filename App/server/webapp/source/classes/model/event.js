
define(['app/services/uuidService'], function(UUIDService){
    'use strict'

    var Event = function(name, description, targetGroup, contributionsDescription, location, times, id,guests){
        this.id = id || UUIDService.getRandomUuid();
        this.name=name;
        this.description=description;
        this.targetGroup=targetGroup;
        this.contributionsDescription=contributionsDescription;
        this.location=location;
        this.times=times;
        this.guests=guests || [];

        Object.defineProperties(this, {
            'begin':{
                get: function(){
                    return this.times.begin;
                },
                set: function(value){
                    this.times.begin=value;
                }
            },
            'end':{
                get: function(){
                    return this.times.end;
                },
                set: function(value){
                    this.times.end=value;
                }
            }
        });
    };

    Event.createFromDTO = function(jsonData) {
        return new Event(
            jsonData.name,
            jsonData.description,
            jsonData.targetGroup,
            jsonData.contributionsDescription,
            jsonData.location,
            jsonData.times,
            jsonData.id,
            jsonData.guests
        );
    };

    return Event;
});
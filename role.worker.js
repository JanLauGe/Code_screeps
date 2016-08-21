var roleWorker = {

    run: function(creep) {

        var operation = creep.memory.operation
        var target = creep.memory.target

        if (typeof target == 'undefined') {
            console.log('Error:', creep.name, 'has no target')
        }
        else if(target == 'none') {
            if (operation !== 'undefined' &&
            operation !== 'none') {
                if (creep.room.name !== operation) {
                    // open room
                    creep.moveTo(Game.flags['mining_'+operation])
                }
                else if (creep.room.name !== operation) {
                    creep.memory.target = creep.room.find(FIND_SOURCES)[0].id
                }
            }
        }

        if (typeof target !== 'undefined' &&
            target !== 'none') {
            var thistarget = Game.getObjectById(target)

            if (operation == creep.room.name) {
                // Go to source and harvest
                if (thistarget instanceof Source) {
                    if (creep.harvest(thistarget) == ERR_NOT_IN_RANGE ||
                        creep.harvest(thistarget) == ERR_NOT_ENOUGH_RESOURCES) {
                        creep.moveTo(thistarget);
                    }
                    else if(creep.harvest(thistarget) == OK) {
                        // do nothing
                    }
                    else {
                      console.log('Error, worker', creep.name ,'can not harvest source')
                    }
                }
                else {
                    console.log('Error, target is not a source')
                }
            }
            else if (operation !== creep.room.name &&
            typeof operation !== 'undefined' &&
            operation !== 'none') {
                creep.moveTo(Game.flags['mining_'+operation])
            }
            else {
                console.log('Worker error: no operation assigned')
            }
      	}
      	else {
      	    console.log('Error:', creep.name ,'has no target assigned')
      	}
    }
};

module.exports = roleWorker;

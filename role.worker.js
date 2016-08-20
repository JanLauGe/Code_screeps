var roleWorker = {

    run: function(creep) {
        console.log(JSON.stringify(creep.memory))

        var operation = creep.memory.operation
        var target = creep.memory.target

        if (operation == creep.room.name) {
            // Go to source and harvest
            if (target instanceof Source) {
                if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
                else {
                  console.log('Error, can not harvest source')
                }
            }
            else {
                console.log('Error, target is not a source')
            }
        }
        else if (operation !== creep.room.name &&
        typeof operation !== 'undefined' &&
        operation !== 'none') {
            if (!creep.memory.path) {
                if (typeof target !== 'undefined' &&
                target !== 'none') {
                    creep.memory.path = creep.pos.findPathTo(target);
                }
            }
            creep.moveByPath(creep.memory.path);
            //var destination = findRoute(creep.pos, Game.flags['mining' + operation].pos.roomName)
        }
        else {
            console.log('Worker error: no operation assigned')
        }
  	}
};

module.exports = roleWorker;

var roleWorker = {

    run: function(creep) {

        function isOdd(num) { return num % 2;}
        
        var serial = creep.memory.serial;
        var targets = creep.room.find(FIND_SOURCES)
        if (isOdd(serial) == 0) {
            var target = targets[0]
        }
        else if (isOdd(serial) == 1) {
            var target = targets[1]
        }
        var allSpawns = creep.room.find(FIND_MY_STRUCTURES, {
            filter: { structureType: STRUCTURE_SPAWN }});
        var closestSpawn = creep.pos.findClosestByRange(allSpawns)

        // Go to source and harvest
        if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
            creep.moveTo(target);
        }
        // In case creep is next to spawn: drop off
        if (creep.carry.energy == creep.carryCapacity){
            creep.transfer(closestSpawn, RESOURCE_ENERGY)
        }
	}
};

module.exports = roleWorker;

var runSpawns = {

    run: function(spawns) {

        var energyCapacityAvailable = spawns[0].room.energyCapacityAvailable;
        var energyAvailable = spawns[0].room.energyAvailable;
        var Mempath = Memory.byroom[spawns[0].room.name]
        var spawningQueue = Mempath.spawningQueue

        var spawn = spawns[0]
        // Workers are spawned via run.flags
        if (spawningQueue[0] == 'carrier') {
            if (spawn.spawnCarrier(energyCapacityAvailable) == ERR_NOT_ENOUGH_RESOURCES) {
                console.log('...' + spawn.room.name + ' gathering for carrier')
            }
            else {
                console.log('...' + spawn.room.name + ' spawning carrier')
            }
        }
        else if (spawningQueue[0] == 'generalist') {
            if (spawn.spawnGeneralist(energyCapacityAvailable) == ERR_NOT_ENOUGH_RESOURCES) {
                console.log('...' + spawn.room.name + ' gathering for generalist')
            }
            else {
                console.log('...' + spawn.room.name + ' spawning generalist')
            }
        }
        else if (spawningQueue[0] == 'builder') {
            if (spawn.spawnBuilder(energyCapacityAvailable) == ERR_NOT_ENOUGH_RESOURCES) {
                console.log('...' + spawn.room.name + ' gathering for builder')
            }
            else {
                console.log('...' + spawn.room.name + ' spawning builder')
            }
        }
        else if (spawningQueue[0] == 'upgrader') {
            if (spawn.spawnUpgrader(energyCapacityAvailable) == ERR_NOT_ENOUGH_RESOURCES) {
                console.log('...' + spawn.room.name + ' gathering for upgrader')
            }
            else {
                console.log('...' + spawn.room.name + ' spawning upgrader')
            }
        }

        // Call to arms means fighting creeps will be continuously spawned
        if (Memory.global.diplomacy.calltoarms) {
            console.log('CALL TO ARMS!')

            if (Memory.global.creeps.warriors < X) {
                spawn.spawnWarrior(energyCapacityAvailable)
            }
            else if (Memory.global.creeps.healers < X) {
                spawn.spawnHealer(energyCapacityAvailable)
            }
        }
    }
};

module.exports = runSpawns;

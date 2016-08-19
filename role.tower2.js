var roleTower2 = {

    run: function(tower) {

        if (tower.room == 'E46N42') {
            var towermode = 'holdfire'
        }
        else {
            var towermode = 'fireatwill'
        }
        excludedplayers = ['JanLauGe']//, 'linucc', 'MyFriends']

        var Mempath = Memory.byroom[tower.room.name]
        var jobRamps = Mempath.jobs.upkeep.ramps;
        var jobRoads = Mempath.jobs.upkeep.roads;
        var jobConts = Mempath.jobs.upkeep.conts;
        var jobWalls = Mempath.jobs.upkeep.walls;
        if (towermode == 'holdfire') {
            var hostiles = tower.room.find(FIND_HOSTILE_CREEPS, {
                filter: (hostile) => {return (
                    tower.pos.getRangeTo(hostile) <= 12
                    && !excludedplayers.includes(hostile.owner.username))}})
        }
        else if(towermode == 'fireatwill') {
            var hostiles = tower.room.find(FIND_HOSTILE_CREEPS, {
            filter: (hostile) => {return (
                !excludedplayers.includes(hostile.owner.username))}})
        }

        if (hostiles.length > 0) {
            tower.attack(tower.pos.findClosestByRange(hostiles))
        }
        else if (jobRamps.length > 0){
            tower.repair(Game.getObjectById(jobRamps[0]))
        }
        else if (jobRoads.length > 0) {
            tower.repair(Game.getObjectById(jobRoads[0]))
        }
        else if (jobConts.length > 0) {
            tower.repair(Game.getObjectById(jobConts[0]))
        }
        else if (jobWalls.length > 0) {
            tower.repair(Game.getObjectById(jobWalls[0]))
        }
        // backup fire at will just in case
        else {
            //var hostiles = tower.room.find(FIND_HOSTILE_CREEPS)
            if (hostiles) {
                tower.attack(tower.pos.findClosestByRange(hostiles))
            }
        }
	}
};

module.exports = roleTower2;

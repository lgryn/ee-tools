// TODO Need to automate this
exports.seed = function(knex) {
  return knex('reprocessing').del()
    .then(function () {
      return knex.raw("INSERT INTO reprocessing (skill,item,component,amount) VALUES\n" +
        " ('Scrap Metal','MK1 Small Rifled Railgun','Tritanium',500)\n" +
        ",('Scrap Metal','MK1 Small Rifled Railgun','Pyerite',121)\n" +
        ",('Scrap Metal','MK3 Small Rifled Railgun','Tritanium',397)\n" +
        ",('Scrap Metal','MK3 Small Rifled Railgun','Pyerite',96)\n" +
        ",('Scrap Metal','MK3 Small Rifled Railgun','Mexallon',32)\n" +
        ",('Scrap Metal','MK3 Small Rifled Railgun','Isogen',5)\n" +
        ",('Scrap Metal','MK5 Small Rifled Railgun','Tritanium',1119)\n" +
        ",('Scrap Metal','MK5 Small Rifled Railgun','Pyerite',271)\n" +
        ",('Scrap Metal','MK5 Small Rifled Railgun','Mexallon',92)\n" +
        ",('Scrap Metal','MK5 Small Rifled Railgun','Isogen',16)\n" +
        ",('Scrap Metal','MK5 Small Rifled Railgun','Nocxium',4)\n" +
        ",('Scrap Metal','MK7 Small Rifled Railgun','Tritanium',2128)\n" +
        ",('Scrap Metal','MK7 Small Rifled Railgun','Pyerite',515)\n" +
        ",('Scrap Metal','MK7 Small Rifled Railgun','Mexallon',176)\n" +
        ",('Scrap Metal','MK7 Small Rifled Railgun','Isogen',31)\n" +
        ",('Scrap Metal','MK7 Small Rifled Railgun','Nocxium',8)\n" +
        ",('Scrap Metal','MK7 Small Rifled Railgun','Zydrine',3)\n" +
        ",('Scrap Metal','MK9 Small Rifled Railgun','Tritanium',3134)\n" +
        ",('Scrap Metal','MK9 Small Rifled Railgun','Pyerite',759)\n" +
        ",('Scrap Metal','MK9 Small Rifled Railgun','Mexallon',259)\n" +
        ",('Scrap Metal','MK9 Small Rifled Railgun','Isogen',45)\n" +
        ",('Scrap Metal','MK9 Small Rifled Railgun','Nocxium',12)\n" +
        ",('Scrap Metal','MK9 Small Rifled Railgun','Zydrine',4)\n" +
        ",('Scrap Metal','MK9 Small Rifled Railgun','Megacyte',2)\n" +
        ",('Scrap Metal','MK5 Medium Rifled Railgun','Tritanium',4479)\n" +
        ",('Scrap Metal','MK5 Medium Rifled Railgun','Pyerite',1086)\n" +
        ",('Scrap Metal','MK5 Medium Rifled Railgun','Mexallon',371)\n" +
        ",('Scrap Metal','MK5 Medium Rifled Railgun','Isogen',65)\n" +
        ",('Scrap Metal','MK5 Medium Rifled Railgun','Nocxium',18)\n" +
        ",('Scrap Metal','MK7 Medium Rifled Railgun','Tritanium',8513)\n" +
        ",('Scrap Metal','MK7 Medium Rifled Railgun','Pyerite',2063)\n" +
        ",('Scrap Metal','MK7 Medium Rifled Railgun','Mexallon',705)\n" +
        ",('Scrap Metal','MK7 Medium Rifled Railgun','Isogen',124)\n" +
        ",('Scrap Metal','MK7 Medium Rifled Railgun','Nocxium',34)\n" +
        ",('Scrap Metal','MK7 Medium Rifled Railgun','Zydrine',12)\n" +
        ",('Scrap Metal','MK9 Medium Rifled Railgun','Tritanium',12537)\n" +
        ",('Scrap Metal','MK9 Medium Rifled Railgun','Pyerite',3039)\n" +
        ",('Scrap Metal','MK9 Medium Rifled Railgun','Mexallon',1039)\n" +
        ",('Scrap Metal','MK9 Medium Rifled Railgun','Isogen',183)\n" +
        ",('Scrap Metal','MK9 Medium Rifled Railgun','Nocxium',51)\n" +
        ",('Scrap Metal','MK9 Medium Rifled Railgun','Zydrine',18)\n" +
        ",('Scrap Metal','MK9 Medium Rifled Railgun','Megacyte',9)\n" +
        ",('Scrap Metal','MK7 Large Rifled Railgun','Tritanium',34053)\n" +
        ",('Scrap Metal','MK7 Large Rifled Railgun','Pyerite',8255)\n" +
        ",('Scrap Metal','MK7 Large Rifled Railgun','Mexallon',2822)\n" +
        ",('Scrap Metal','MK7 Large Rifled Railgun','Isogen',499)\n" +
        ",('Scrap Metal','MK7 Large Rifled Railgun','Nocxium',139)\n" +
        ",('Scrap Metal','MK7 Large Rifled Railgun','Zydrine',49)\n" +
        ",('Scrap Metal','MK9 Large Rifled Railgun','Tritanium',50148)\n" +
        ",('Scrap Metal','MK9 Large Rifled Railgun','Pyerite',12157)\n" +
        ",('Scrap Metal','MK9 Large Rifled Railgun','Mexallon',4156)\n" +
        ",('Scrap Metal','MK9 Large Rifled Railgun','Isogen',734)\n" +
        ",('Scrap Metal','MK9 Large Rifled Railgun','Nocxium',204)\n" +
        ",('Scrap Metal','MK9 Large Rifled Railgun','Zydrine',72)\n" +
        ",('Scrap Metal','MK9 Large Rifled Railgun','Megacyte',36)\n" +
        ",('Scrap Metal','MK1 Small Snubnosed Railgun','Tritanium',1000)\n" +
        ",('Scrap Metal','MK1 Small Snubnosed Railgun','Pyerite',242)\n" +
        ",('Scrap Metal','MK3 Small Snubnosed Railgun','Tritanium',795)\n" +
        ",('Scrap Metal','MK3 Small Snubnosed Railgun','Pyerite',192)\n" +
        ",('Scrap Metal','MK3 Small Snubnosed Railgun','Mexallon',65)\n" +
        ",('Scrap Metal','MK3 Small Snubnosed Railgun','Isogen',11)\n" +
        ",('Scrap Metal','MK5 Small Snubnosed Railgun','Tritanium',2239)\n" +
        ",('Scrap Metal','MK5 Small Snubnosed Railgun','Pyerite',543)\n" +
        ",('Scrap Metal','MK5 Small Snubnosed Railgun','Mexallon',185)\n" +
        ",('Scrap Metal','MK5 Small Snubnosed Railgun','Isogen',32)\n" +
        ",('Scrap Metal','MK5 Small Snubnosed Railgun','Nocxium',9)\n" +
        ",('Scrap Metal','MK7 Small Snubnosed Railgun','Tritanium',4256)\n" +
        ",('Scrap Metal','MK7 Small Snubnosed Railgun','Pyerite',1031)\n" +
        ",('Scrap Metal','MK7 Small Snubnosed Railgun','Mexallon',352)\n" +
        ",('Scrap Metal','MK7 Small Snubnosed Railgun','Isogen',62)\n" +
        ",('Scrap Metal','MK7 Small Snubnosed Railgun','Nocxium',17)\n" +
        ",('Scrap Metal','MK7 Small Snubnosed Railgun','Zydrine',6)\n" +
        ",('Scrap Metal','MK9 Small Snubnosed Railgun','Tritanium',6268)\n" +
        ",('Scrap Metal','MK9 Small Snubnosed Railgun','Pyerite',1519)\n" +
        ",('Scrap Metal','MK9 Small Snubnosed Railgun','Mexallon',519)\n" +
        ",('Scrap Metal','MK9 Small Snubnosed Railgun','Isogen',91)\n" +
        ",('Scrap Metal','MK9 Small Snubnosed Railgun','Nocxium',25)\n" +
        ",('Scrap Metal','MK9 Small Snubnosed Railgun','Zydrine',9)\n" +
        ",('Scrap Metal','MK9 Small Snubnosed Railgun','Megacyte',4)\n" +
        ",('Scrap Metal','MK5 Medium Snubnosed Railgun','Tritanium',8959)\n" +
        ",('Scrap Metal','MK5 Medium Snubnosed Railgun','Pyerite',2172)\n" +
        ",('Scrap Metal','MK5 Medium Snubnosed Railgun','Mexallon',742)\n" +
        ",('Scrap Metal','MK5 Medium Snubnosed Railgun','Isogen',131)\n" +
        ",('Scrap Metal','MK5 Medium Snubnosed Railgun','Nocxium',36)\n" +
        ",('Scrap Metal','MK7 Medium Snubnosed Railgun','Tritanium',17026)\n" +
        ",('Scrap Metal','MK7 Medium Snubnosed Railgun','Pyerite',4127)\n" +
        ",('Scrap Metal','MK7 Medium Snubnosed Railgun','Mexallon',1411)\n" +
        ",('Scrap Metal','MK7 Medium Snubnosed Railgun','Isogen',249)\n" +
        ",('Scrap Metal','MK7 Medium Snubnosed Railgun','Nocxium',69)\n" +
        ",('Scrap Metal','MK7 Medium Snubnosed Railgun','Zydrine',24)\n" +
        ",('Scrap Metal','MK9 Medium Snubnosed Railgun','Tritanium',25074)\n" +
        ",('Scrap Metal','MK9 Medium Snubnosed Railgun','Pyerite',6078)\n" +
        ",('Scrap Metal','MK9 Medium Snubnosed Railgun','Mexallon',2078)\n" +
        ",('Scrap Metal','MK9 Medium Snubnosed Railgun','Isogen',367)\n" +
        ",('Scrap Metal','MK9 Medium Snubnosed Railgun','Nocxium',102)\n" +
        ",('Scrap Metal','MK9 Medium Snubnosed Railgun','Zydrine',36)\n" +
        ",('Scrap Metal','MK9 Medium Snubnosed Railgun','Megacyte',18)\n" +
        ",('Scrap Metal','MK7 Large Snubnosed Railgun','Tritanium',68106)\n" +
        ",('Scrap Metal','MK7 Large Snubnosed Railgun','Pyerite',16511)\n" +
        ",('Scrap Metal','MK7 Large Snubnosed Railgun','Mexallon',5645)\n" +
        ",('Scrap Metal','MK7 Large Snubnosed Railgun','Isogen',998)\n" +
        ",('Scrap Metal','MK7 Large Snubnosed Railgun','Nocxium',278)\n" +
        ",('Scrap Metal','MK7 Large Snubnosed Railgun','Zydrine',98)\n" +
        ",('Scrap Metal','MK9 Large Snubnosed Railgun','Tritanium',100297)\n" +
        ",('Scrap Metal','MK9 Large Snubnosed Railgun','Pyerite',24315)\n" +
        ",('Scrap Metal','MK9 Large Snubnosed Railgun','Mexallon',8313)\n" +
        ",('Scrap Metal','MK9 Large Snubnosed Railgun','Isogen',1469)\n" +
        ",('Scrap Metal','MK9 Large Snubnosed Railgun','Nocxium',409)\n" +
        ",('Scrap Metal','MK9 Large Snubnosed Railgun','Zydrine',144)\n" +
        ",('Scrap Metal','MK9 Large Snubnosed Railgun','Megacyte',72)\n" +
        ",('Scrap Metal','MK1 Small Beam Laser','Tritanium',1000)\n" +
        ",('Scrap Metal','MK1 Small Beam Laser','Pyerite',242)\n" +
        ",('Scrap Metal','MK3 Small Beam Laser','Tritanium',795)\n" +
        ",('Scrap Metal','MK3 Small Beam Laser','Pyerite',192)\n" +
        ",('Scrap Metal','MK3 Small Beam Laser','Mexallon',65)\n" +
        ",('Scrap Metal','MK3 Small Beam Laser','Isogen',11)\n" +
        ",('Scrap Metal','MK5 Small Beam Laser','Tritanium',2239)\n" +
        ",('Scrap Metal','MK5 Small Beam Laser','Pyerite',543)\n" +
        ",('Scrap Metal','MK5 Small Beam Laser','Mexallon',185)\n" +
        ",('Scrap Metal','MK5 Small Beam Laser','Isogen',32)\n" +
        ",('Scrap Metal','MK5 Small Beam Laser','Nocxium',9)\n" +
        ",('Scrap Metal','MK7 Small Beam Laser','Tritanium',4256)\n" +
        ",('Scrap Metal','MK7 Small Beam Laser','Pyerite',1031)\n" +
        ",('Scrap Metal','MK7 Small Beam Laser','Mexallon',352)\n" +
        ",('Scrap Metal','MK7 Small Beam Laser','Isogen',62)\n" +
        ",('Scrap Metal','MK7 Small Beam Laser','Nocxium',17)\n" +
        ",('Scrap Metal','MK7 Small Beam Laser','Zydrine',6)\n" +
        ",('Scrap Metal','MK9 Small Beam Laser','Tritanium',6268)\n" +
        ",('Scrap Metal','MK9 Small Beam Laser','Pyerite',1519)\n" +
        ",('Scrap Metal','MK9 Small Beam Laser','Mexallon',519)\n" +
        ",('Scrap Metal','MK9 Small Beam Laser','Isogen',91)\n" +
        ",('Scrap Metal','MK9 Small Beam Laser','Nocxium',25)\n" +
        ",('Scrap Metal','MK9 Small Beam Laser','Zydrine',9)\n" +
        ",('Scrap Metal','MK9 Small Beam Laser','Megacyte',4)\n" +
        ",('Scrap Metal','MK5 Medium Beam Laser','Tritanium',8959)\n" +
        ",('Scrap Metal','MK5 Medium Beam Laser','Pyerite',2172)\n" +
        ",('Scrap Metal','MK5 Medium Beam Laser','Mexallon',742)\n" +
        ",('Scrap Metal','MK5 Medium Beam Laser','Isogen',131)\n" +
        ",('Scrap Metal','MK5 Medium Beam Laser','Nocxium',36)\n" +
        ",('Scrap Metal','MK7 Medium Beam Laser','Tritanium',17026)\n" +
        ",('Scrap Metal','MK7 Medium Beam Laser','Pyerite',4127)\n" +
        ",('Scrap Metal','MK7 Medium Beam Laser','Mexallon',1411)\n" +
        ",('Scrap Metal','MK7 Medium Beam Laser','Isogen',249)\n" +
        ",('Scrap Metal','MK7 Medium Beam Laser','Nocxium',69)\n" +
        ",('Scrap Metal','MK7 Medium Beam Laser','Zydrine',24)\n" +
        ",('Scrap Metal','MK9 Medium Beam Laser','Tritanium',25074)\n" +
        ",('Scrap Metal','MK9 Medium Beam Laser','Pyerite',6078)\n" +
        ",('Scrap Metal','MK9 Medium Beam Laser','Mexallon',2078)\n" +
        ",('Scrap Metal','MK9 Medium Beam Laser','Isogen',367)\n" +
        ",('Scrap Metal','MK9 Medium Beam Laser','Nocxium',102)\n" +
        ",('Scrap Metal','MK9 Medium Beam Laser','Zydrine',36)\n" +
        ",('Scrap Metal','MK9 Medium Beam Laser','Megacyte',18)\n" +
        ",('Scrap Metal','MK7 Large Beam Laser','Tritanium',68106)\n" +
        ",('Scrap Metal','MK7 Large Beam Laser','Pyerite',16511)\n" +
        ",('Scrap Metal','MK7 Large Beam Laser','Mexallon',5645)\n" +
        ",('Scrap Metal','MK7 Large Beam Laser','Isogen',998)\n" +
        ",('Scrap Metal','MK7 Large Beam Laser','Nocxium',278)\n" +
        ",('Scrap Metal','MK7 Large Beam Laser','Zydrine',98)\n" +
        ",('Scrap Metal','MK9 Large Beam Laser','Tritanium',100297)\n" +
        ",('Scrap Metal','MK9 Large Beam Laser','Pyerite',24315)\n" +
        ",('Scrap Metal','MK9 Large Beam Laser','Mexallon',8313)\n" +
        ",('Scrap Metal','MK9 Large Beam Laser','Isogen',1469)\n" +
        ",('Scrap Metal','MK9 Large Beam Laser','Nocxium',409)\n" +
        ",('Scrap Metal','MK9 Large Beam Laser','Zydrine',144)\n" +
        ",('Scrap Metal','MK9 Large Beam Laser','Megacyte',72)\n" +
        ",('Scrap Metal','MK1 Small Pulse Laser','Tritanium',500)\n" +
        ",('Scrap Metal','MK1 Small Pulse Laser','Pyerite',121)\n" +
        ",('Scrap Metal','MK3 Small Pulse Laser','Tritanium',397)\n" +
        ",('Scrap Metal','MK3 Small Pulse Laser','Pyerite',96)\n" +
        ",('Scrap Metal','MK3 Small Pulse Laser','Mexallon',32)\n" +
        ",('Scrap Metal','MK3 Small Pulse Laser','Isogen',5)\n" +
        ",('Scrap Metal','MK5 Small Pulse Laser','Tritanium',1119)\n" +
        ",('Scrap Metal','MK5 Small Pulse Laser','Pyerite',271)\n" +
        ",('Scrap Metal','MK5 Small Pulse Laser','Mexallon',92)\n" +
        ",('Scrap Metal','MK5 Small Pulse Laser','Isogen',16)\n" +
        ",('Scrap Metal','MK5 Small Pulse Laser','Nocxium',4)\n" +
        ",('Scrap Metal','MK7 Small Pulse Laser','Tritanium',2128)\n" +
        ",('Scrap Metal','MK7 Small Pulse Laser','Pyerite',515)\n" +
        ",('Scrap Metal','MK7 Small Pulse Laser','Mexallon',176)\n" +
        ",('Scrap Metal','MK7 Small Pulse Laser','Isogen',31)\n" +
        ",('Scrap Metal','MK7 Small Pulse Laser','Nocxium',8)\n" +
        ",('Scrap Metal','MK7 Small Pulse Laser','Zydrine',3)\n" +
        ",('Scrap Metal','MK9 Small Pulse Laser','Tritanium',3134)\n" +
        ",('Scrap Metal','MK9 Small Pulse Laser','Pyerite',759)\n" +
        ",('Scrap Metal','MK9 Small Pulse Laser','Mexallon',259)\n" +
        ",('Scrap Metal','MK9 Small Pulse Laser','Isogen',45)\n" +
        ",('Scrap Metal','MK9 Small Pulse Laser','Nocxium',12)\n" +
        ",('Scrap Metal','MK9 Small Pulse Laser','Zydrine',4)\n" +
        ",('Scrap Metal','MK9 Small Pulse Laser','Megacyte',2)\n" +
        ",('Scrap Metal','MK5 Medium Pulse Laser','Tritanium',4479)\n" +
        ",('Scrap Metal','MK5 Medium Pulse Laser','Pyerite',1086)\n" +
        ",('Scrap Metal','MK5 Medium Pulse Laser','Mexallon',371)\n" +
        ",('Scrap Metal','MK5 Medium Pulse Laser','Isogen',65)\n" +
        ",('Scrap Metal','MK5 Medium Pulse Laser','Nocxium',18)\n" +
        ",('Scrap Metal','MK7 Medium Pulse Laser','Tritanium',8513)\n" +
        ",('Scrap Metal','MK7 Medium Pulse Laser','Pyerite',2063)\n" +
        ",('Scrap Metal','MK7 Medium Pulse Laser','Mexallon',705)\n" +
        ",('Scrap Metal','MK7 Medium Pulse Laser','Isogen',124)\n" +
        ",('Scrap Metal','MK7 Medium Pulse Laser','Nocxium',34)\n" +
        ",('Scrap Metal','MK7 Medium Pulse Laser','Zydrine',12)\n" +
        ",('Scrap Metal','MK9 Medium Pulse Laser','Tritanium',12537)\n" +
        ",('Scrap Metal','MK9 Medium Pulse Laser','Pyerite',3039)\n" +
        ",('Scrap Metal','MK9 Medium Pulse Laser','Mexallon',1039)\n" +
        ",('Scrap Metal','MK9 Medium Pulse Laser','Isogen',183)\n" +
        ",('Scrap Metal','MK9 Medium Pulse Laser','Nocxium',51)\n" +
        ",('Scrap Metal','MK9 Medium Pulse Laser','Zydrine',18)\n" +
        ",('Scrap Metal','MK9 Medium Pulse Laser','Megacyte',9)\n" +
        ",('Scrap Metal','MK7 Large Pulse Laser','Tritanium',34053)\n" +
        ",('Scrap Metal','MK7 Large Pulse Laser','Pyerite',8255)\n" +
        ",('Scrap Metal','MK7 Large Pulse Laser','Mexallon',2822)\n" +
        ",('Scrap Metal','MK7 Large Pulse Laser','Isogen',499)\n" +
        ",('Scrap Metal','MK7 Large Pulse Laser','Nocxium',139)\n" +
        ",('Scrap Metal','MK7 Large Pulse Laser','Zydrine',49)\n" +
        ",('Scrap Metal','MK9 Large Pulse Laser','Tritanium',50148)\n" +
        ",('Scrap Metal','MK9 Large Pulse Laser','Pyerite',12157)\n" +
        ",('Scrap Metal','MK9 Large Pulse Laser','Mexallon',4156)\n" +
        ",('Scrap Metal','MK9 Large Pulse Laser','Isogen',734)\n" +
        ",('Scrap Metal','MK9 Large Pulse Laser','Nocxium',204)\n" +
        ",('Scrap Metal','MK9 Large Pulse Laser','Zydrine',72)\n" +
        ",('Scrap Metal','MK9 Large Pulse Laser','Megacyte',36)\n" +
        ",('Scrap Metal','MK1 Small Autocannon','Tritanium',500)\n" +
        ",('Scrap Metal','MK1 Small Autocannon','Pyerite',121)\n" +
        ",('Scrap Metal','MK3 Small Autocannon','Tritanium',397)\n" +
        ",('Scrap Metal','MK3 Small Autocannon','Pyerite',96)\n" +
        ",('Scrap Metal','MK3 Small Autocannon','Mexallon',32)\n" +
        ",('Scrap Metal','MK3 Small Autocannon','Isogen',5)\n" +
        ",('Scrap Metal','MK5 Small Autocannon','Tritanium',1119)\n" +
        ",('Scrap Metal','MK5 Small Autocannon','Pyerite',271)\n" +
        ",('Scrap Metal','MK5 Small Autocannon','Mexallon',92)\n" +
        ",('Scrap Metal','MK5 Small Autocannon','Isogen',16)\n" +
        ",('Scrap Metal','MK5 Small Autocannon','Nocxium',4)\n" +
        ",('Scrap Metal','MK7 Small Autocannon','Tritanium',2128)\n" +
        ",('Scrap Metal','MK7 Small Autocannon','Pyerite',515)\n" +
        ",('Scrap Metal','MK7 Small Autocannon','Mexallon',176)\n" +
        ",('Scrap Metal','MK7 Small Autocannon','Isogen',31)\n" +
        ",('Scrap Metal','MK7 Small Autocannon','Nocxium',8)\n" +
        ",('Scrap Metal','MK7 Small Autocannon','Zydrine',3)\n" +
        ",('Scrap Metal','MK9 Small Autocannon','Tritanium',3134)\n" +
        ",('Scrap Metal','MK9 Small Autocannon','Pyerite',759)\n" +
        ",('Scrap Metal','MK9 Small Autocannon','Mexallon',259)\n" +
        ",('Scrap Metal','MK9 Small Autocannon','Isogen',45)\n" +
        ",('Scrap Metal','MK9 Small Autocannon','Nocxium',12)\n" +
        ",('Scrap Metal','MK9 Small Autocannon','Zydrine',4)\n" +
        ",('Scrap Metal','MK9 Small Autocannon','Megacyte',2)\n" +
        ",('Scrap Metal','MK5 Medium Autocannon','Tritanium',4479)\n" +
        ",('Scrap Metal','MK5 Medium Autocannon','Pyerite',1086)\n" +
        ",('Scrap Metal','MK5 Medium Autocannon','Mexallon',371)\n" +
        ",('Scrap Metal','MK5 Medium Autocannon','Isogen',65)\n" +
        ",('Scrap Metal','MK5 Medium Autocannon','Nocxium',18)\n" +
        ",('Scrap Metal','MK7 Medium Autocannon','Tritanium',8513)\n" +
        ",('Scrap Metal','MK7 Medium Autocannon','Pyerite',2063)\n" +
        ",('Scrap Metal','MK7 Medium Autocannon','Mexallon',705)\n" +
        ",('Scrap Metal','MK7 Medium Autocannon','Isogen',124)\n" +
        ",('Scrap Metal','MK7 Medium Autocannon','Nocxium',34)\n" +
        ",('Scrap Metal','MK7 Medium Autocannon','Zydrine',12)\n" +
        ",('Scrap Metal','MK9 Medium Autocannon','Tritanium',12537)\n" +
        ",('Scrap Metal','MK9 Medium Autocannon','Pyerite',3039)\n" +
        ",('Scrap Metal','MK9 Medium Autocannon','Mexallon',1039)\n" +
        ",('Scrap Metal','MK9 Medium Autocannon','Isogen',183)\n" +
        ",('Scrap Metal','MK9 Medium Autocannon','Nocxium',51)\n" +
        ",('Scrap Metal','MK9 Medium Autocannon','Zydrine',18)\n" +
        ",('Scrap Metal','MK9 Medium Autocannon','Megacyte',9)\n" +
        ",('Scrap Metal','MK7 Large Autocannon','Tritanium',34053)\n" +
        ",('Scrap Metal','MK7 Large Autocannon','Pyerite',8255)\n" +
        ",('Scrap Metal','MK7 Large Autocannon','Mexallon',2822)\n" +
        ",('Scrap Metal','MK7 Large Autocannon','Isogen',499)\n" +
        ",('Scrap Metal','MK7 Large Autocannon','Nocxium',139)\n" +
        ",('Scrap Metal','MK7 Large Autocannon','Zydrine',49)\n" +
        ",('Scrap Metal','MK9 Large Autocannon','Tritanium',50148)\n" +
        ",('Scrap Metal','MK9 Large Autocannon','Pyerite',12157)\n" +
        ",('Scrap Metal','MK9 Large Autocannon','Mexallon',4156)\n" +
        ",('Scrap Metal','MK9 Large Autocannon','Isogen',734)\n" +
        ",('Scrap Metal','MK9 Large Autocannon','Nocxium',204)\n" +
        ",('Scrap Metal','MK9 Large Autocannon','Zydrine',72)\n" +
        ",('Scrap Metal','MK9 Large Autocannon','Megacyte',36)\n" +
        ",('Scrap Metal','MK1 Small Strike Cannon','Tritanium',1000)\n" +
        ",('Scrap Metal','MK1 Small Strike Cannon','Pyerite',242)\n" +
        ",('Scrap Metal','MK3 Small Strike Cannon','Tritanium',795)\n" +
        ",('Scrap Metal','MK3 Small Strike Cannon','Pyerite',192)\n" +
        ",('Scrap Metal','MK3 Small Strike Cannon','Mexallon',65)\n" +
        ",('Scrap Metal','MK3 Small Strike Cannon','Isogen',11)\n" +
        ",('Scrap Metal','MK5 Small Strike Cannon','Tritanium',2239)\n" +
        ",('Scrap Metal','MK5 Small Strike Cannon','Pyerite',543)\n" +
        ",('Scrap Metal','MK5 Small Strike Cannon','Mexallon',185)\n" +
        ",('Scrap Metal','MK5 Small Strike Cannon','Isogen',32)\n" +
        ",('Scrap Metal','MK5 Small Strike Cannon','Nocxium',9)\n" +
        ",('Scrap Metal','MK7 Small Strike Cannon','Tritanium',4256)\n" +
        ",('Scrap Metal','MK7 Small Strike Cannon','Pyerite',1031)\n" +
        ",('Scrap Metal','MK7 Small Strike Cannon','Mexallon',352)\n" +
        ",('Scrap Metal','MK7 Small Strike Cannon','Isogen',62)\n" +
        ",('Scrap Metal','MK7 Small Strike Cannon','Nocxium',17)\n" +
        ",('Scrap Metal','MK7 Small Strike Cannon','Zydrine',6)\n" +
        ",('Scrap Metal','MK9 Small Strike Cannon','Tritanium',6268)\n" +
        ",('Scrap Metal','MK9 Small Strike Cannon','Pyerite',1519)\n" +
        ",('Scrap Metal','MK9 Small Strike Cannon','Mexallon',519)\n" +
        ",('Scrap Metal','MK9 Small Strike Cannon','Isogen',91)\n" +
        ",('Scrap Metal','MK9 Small Strike Cannon','Nocxium',25)\n" +
        ",('Scrap Metal','MK9 Small Strike Cannon','Zydrine',9)\n" +
        ",('Scrap Metal','MK9 Small Strike Cannon','Megacyte',4)\n" +
        ",('Scrap Metal','MK5 Medium Strike Cannon','Tritanium',8959)\n" +
        ",('Scrap Metal','MK5 Medium Strike Cannon','Pyerite',2172)\n" +
        ",('Scrap Metal','MK5 Medium Strike Cannon','Mexallon',742)\n" +
        ",('Scrap Metal','MK5 Medium Strike Cannon','Isogen',131)\n" +
        ",('Scrap Metal','MK5 Medium Strike Cannon','Nocxium',36)\n" +
        ",('Scrap Metal','MK7 Medium Strike Cannon','Tritanium',17026)\n" +
        ",('Scrap Metal','MK7 Medium Strike Cannon','Pyerite',4127)\n" +
        ",('Scrap Metal','MK7 Medium Strike Cannon','Mexallon',1411)\n" +
        ",('Scrap Metal','MK7 Medium Strike Cannon','Isogen',249)\n" +
        ",('Scrap Metal','MK7 Medium Strike Cannon','Nocxium',69)\n" +
        ",('Scrap Metal','MK7 Medium Strike Cannon','Zydrine',24)\n" +
        ",('Scrap Metal','MK9 Medium Strike Cannon','Tritanium',25074)\n" +
        ",('Scrap Metal','MK9 Medium Strike Cannon','Pyerite',6078)\n" +
        ",('Scrap Metal','MK9 Medium Strike Cannon','Mexallon',2078)\n" +
        ",('Scrap Metal','MK9 Medium Strike Cannon','Isogen',367)\n" +
        ",('Scrap Metal','MK9 Medium Strike Cannon','Nocxium',102)\n" +
        ",('Scrap Metal','MK9 Medium Strike Cannon','Zydrine',36)\n" +
        ",('Scrap Metal','MK9 Medium Strike Cannon','Megacyte',18)\n" +
        ",('Scrap Metal','MK7 Large Strike Cannon','Tritanium',68106)\n" +
        ",('Scrap Metal','MK7 Large Strike Cannon','Pyerite',16511)\n" +
        ",('Scrap Metal','MK7 Large Strike Cannon','Mexallon',5645)\n" +
        ",('Scrap Metal','MK7 Large Strike Cannon','Isogen',998)\n" +
        ",('Scrap Metal','MK7 Large Strike Cannon','Nocxium',278)\n" +
        ",('Scrap Metal','MK7 Large Strike Cannon','Zydrine',98)\n" +
        ",('Scrap Metal','MK9 Large Strike Cannon','Tritanium',100297)\n" +
        ",('Scrap Metal','MK9 Large Strike Cannon','Pyerite',24315)\n" +
        ",('Scrap Metal','MK9 Large Strike Cannon','Mexallon',8313)\n" +
        ",('Scrap Metal','MK9 Large Strike Cannon','Isogen',1469)\n" +
        ",('Scrap Metal','MK9 Large Strike Cannon','Nocxium',409)\n" +
        ",('Scrap Metal','MK9 Large Strike Cannon','Zydrine',144)\n" +
        ",('Scrap Metal','MK9 Large Strike Cannon','Megacyte',72)\n" +
        ",('Scrap Metal','MK3 Miner','Tritanium',2385)\n" +
        ",('Scrap Metal','MK3 Miner','Pyerite',578)\n" +
        ",('Scrap Metal','MK3 Miner','Mexallon',197)\n" +
        ",('Scrap Metal','MK3 Miner','Isogen',34)\n" +
        ",('Scrap Metal','MK5 Miner','Tritanium',6719)\n" +
        ",('Scrap Metal','MK5 Miner','Pyerite',1629)\n" +
        ",('Scrap Metal','MK5 Miner','Mexallon',557)\n" +
        ",('Scrap Metal','MK5 Miner','Isogen',98)\n" +
        ",('Scrap Metal','MK5 Miner','Nocxium',27)\n" +
        ",('Scrap Metal','MK7 Miner','Tritanium',12770)\n" +
        ",('Scrap Metal','MK7 Miner','Pyerite',3095)\n" +
        ",('Scrap Metal','MK7 Miner','Mexallon',1058)\n" +
        ",('Scrap Metal','MK7 Miner','Isogen',187)\n" +
        ",('Scrap Metal','MK7 Miner','Nocxium',52)\n" +
        ",('Scrap Metal','MK7 Miner','Zydrine',18)\n" +
        ",('Scrap Metal','MK9 Miner','Tritanium',18805)\n" +
        ",('Scrap Metal','MK9 Miner','Pyerite',4559)\n" +
        ",('Scrap Metal','MK9 Miner','Mexallon',1558)\n" +
        ",('Scrap Metal','MK9 Miner','Isogen',275)\n" +
        ",('Scrap Metal','MK9 Miner','Nocxium',76)\n" +
        ",('Scrap Metal','MK9 Miner','Zydrine',27)\n" +
        ",('Scrap Metal','MK9 Miner','Megacyte',13)\n" +
        ",('Scrap Metal','MK5 Strip Miner','Tritanium',26879)\n" +
        ",('Scrap Metal','MK5 Strip Miner','Pyerite',6516)\n" +
        ",('Scrap Metal','MK5 Strip Miner','Mexallon',2228)\n" +
        ",('Scrap Metal','MK5 Strip Miner','Isogen',393)\n" +
        ",('Scrap Metal','MK5 Strip Miner','Nocxium',109)\n" +
        ",('Scrap Metal','MK7 Strip Miner','Tritanium',51080)\n" +
        ",('Scrap Metal','MK7 Strip Miner','Pyerite',12383)\n" +
        ",('Scrap Metal','MK7 Strip Miner','Mexallon',4234)\n" +
        ",('Scrap Metal','MK7 Strip Miner','Isogen',748)\n" +
        ",('Scrap Metal','MK7 Strip Miner','Nocxium',208)\n" +
        ",('Scrap Metal','MK7 Strip Miner','Zydrine',73)\n" +
        ",('Scrap Metal','MK9 Strip Miner','Tritanium',75222)\n" +
        ",('Scrap Metal','MK9 Strip Miner','Pyerite',18236)\n" +
        ",('Scrap Metal','MK9 Strip Miner','Mexallon',6235)\n" +
        ",('Scrap Metal','MK9 Strip Miner','Isogen',1102)\n" +
        ",('Scrap Metal','MK9 Strip Miner','Nocxium',307)\n" +
        ",('Scrap Metal','MK9 Strip Miner','Zydrine',108)\n" +
        ",('Scrap Metal','MK9 Strip Miner','Megacyte',54)\n" +
        ",('Scrap Metal','MK1 Small Missile Launcher','Tritanium',500)\n" +
        ",('Scrap Metal','MK1 Small Missile Launcher','Pyerite',121)\n" +
        ",('Scrap Metal','MK3 Small Missile Launcher','Tritanium',397)\n" +
        ",('Scrap Metal','MK3 Small Missile Launcher','Pyerite',96)\n" +
        ",('Scrap Metal','MK3 Small Missile Launcher','Mexallon',32)\n" +
        ",('Scrap Metal','MK3 Small Missile Launcher','Isogen',5)\n" +
        ",('Scrap Metal','MK5 Small Missile Launcher','Tritanium',1119)\n" +
        ",('Scrap Metal','MK5 Small Missile Launcher','Pyerite',271)\n" +
        ",('Scrap Metal','MK5 Small Missile Launcher','Mexallon',92)\n" +
        ",('Scrap Metal','MK5 Small Missile Launcher','Isogen',16)\n" +
        ",('Scrap Metal','MK5 Small Missile Launcher','Nocxium',4)\n" +
        ",('Scrap Metal','MK7 Small Missile Launcher','Tritanium',2128)\n" +
        ",('Scrap Metal','MK7 Small Missile Launcher','Pyerite',515)\n" +
        ",('Scrap Metal','MK7 Small Missile Launcher','Mexallon',176)\n" +
        ",('Scrap Metal','MK7 Small Missile Launcher','Isogen',31)\n" +
        ",('Scrap Metal','MK7 Small Missile Launcher','Nocxium',8)\n" +
        ",('Scrap Metal','MK7 Small Missile Launcher','Zydrine',3)\n" +
        ",('Scrap Metal','MK9 Small Missile Launcher','Tritanium',3134)\n" +
        ",('Scrap Metal','MK9 Small Missile Launcher','Pyerite',759)\n" +
        ",('Scrap Metal','MK9 Small Missile Launcher','Mexallon',259)\n" +
        ",('Scrap Metal','MK9 Small Missile Launcher','Isogen',45)\n" +
        ",('Scrap Metal','MK9 Small Missile Launcher','Nocxium',12)\n" +
        ",('Scrap Metal','MK9 Small Missile Launcher','Zydrine',4)\n" +
        ",('Scrap Metal','MK9 Small Missile Launcher','Megacyte',2)\n" +
        ",('Scrap Metal','MK5 Medium Missile Launcher','Tritanium',4479)\n" +
        ",('Scrap Metal','MK5 Medium Missile Launcher','Pyerite',1086)\n" +
        ",('Scrap Metal','MK5 Medium Missile Launcher','Mexallon',371)\n" +
        ",('Scrap Metal','MK5 Medium Missile Launcher','Isogen',65)\n" +
        ",('Scrap Metal','MK5 Medium Missile Launcher','Nocxium',18)\n" +
        ",('Scrap Metal','MK7 Medium Missile Launcher','Tritanium',8513)\n" +
        ",('Scrap Metal','MK7 Medium Missile Launcher','Pyerite',2063)\n" +
        ",('Scrap Metal','MK7 Medium Missile Launcher','Mexallon',705)\n" +
        ",('Scrap Metal','MK7 Medium Missile Launcher','Isogen',124)\n" +
        ",('Scrap Metal','MK7 Medium Missile Launcher','Nocxium',34)\n" +
        ",('Scrap Metal','MK7 Medium Missile Launcher','Zydrine',12)\n" +
        ",('Scrap Metal','MK9 Medium Missile Launcher','Tritanium',12537)\n" +
        ",('Scrap Metal','MK9 Medium Missile Launcher','Pyerite',3039)\n" +
        ",('Scrap Metal','MK9 Medium Missile Launcher','Mexallon',1039)\n" +
        ",('Scrap Metal','MK9 Medium Missile Launcher','Isogen',183)\n" +
        ",('Scrap Metal','MK9 Medium Missile Launcher','Nocxium',51)\n" +
        ",('Scrap Metal','MK9 Medium Missile Launcher','Zydrine',18)\n" +
        ",('Scrap Metal','MK9 Medium Missile Launcher','Megacyte',9)\n" +
        ",('Scrap Metal','MK7 Large Missile Launcher','Tritanium',34053)\n" +
        ",('Scrap Metal','MK7 Large Missile Launcher','Pyerite',8255)\n" +
        ",('Scrap Metal','MK7 Large Missile Launcher','Mexallon',2822)\n" +
        ",('Scrap Metal','MK7 Large Missile Launcher','Isogen',499)\n" +
        ",('Scrap Metal','MK7 Large Missile Launcher','Nocxium',139)\n" +
        ",('Scrap Metal','MK7 Large Missile Launcher','Zydrine',49)\n" +
        ",('Scrap Metal','MK9 Large Missile Launcher','Tritanium',50148)\n" +
        ",('Scrap Metal','MK9 Large Missile Launcher','Pyerite',12157)\n" +
        ",('Scrap Metal','MK9 Large Missile Launcher','Mexallon',4156)\n" +
        ",('Scrap Metal','MK9 Large Missile Launcher','Isogen',734)\n" +
        ",('Scrap Metal','MK9 Large Missile Launcher','Nocxium',204)\n" +
        ",('Scrap Metal','MK9 Large Missile Launcher','Zydrine',72)\n" +
        ",('Scrap Metal','MK9 Large Missile Launcher','Megacyte',36)\n" +
        ",('Scrap Metal','MK5 Medium Rapid Missile Launcher','Tritanium',6719)\n" +
        ",('Scrap Metal','MK5 Medium Rapid Missile Launcher','Pyerite',1629)\n" +
        ",('Scrap Metal','MK5 Medium Rapid Missile Launcher','Mexallon',557)\n" +
        ",('Scrap Metal','MK5 Medium Rapid Missile Launcher','Isogen',98)\n" +
        ",('Scrap Metal','MK5 Medium Rapid Missile Launcher','Nocxium',27)\n" +
        ",('Scrap Metal','MK7 Medium Rapid Missile Launcher','Tritanium',12770)\n" +
        ",('Scrap Metal','MK7 Medium Rapid Missile Launcher','Pyerite',3095)\n" +
        ",('Scrap Metal','MK7 Medium Rapid Missile Launcher','Mexallon',1058)\n" +
        ",('Scrap Metal','MK7 Medium Rapid Missile Launcher','Isogen',187)\n" +
        ",('Scrap Metal','MK7 Medium Rapid Missile Launcher','Nocxium',52)\n" +
        ",('Scrap Metal','MK7 Medium Rapid Missile Launcher','Zydrine',18)\n" +
        ",('Scrap Metal','MK9 Medium Rapid Missile Launcher','Tritanium',18805)\n" +
        ",('Scrap Metal','MK9 Medium Rapid Missile Launcher','Pyerite',4559)\n" +
        ",('Scrap Metal','MK9 Medium Rapid Missile Launcher','Mexallon',1558)\n" +
        ",('Scrap Metal','MK9 Medium Rapid Missile Launcher','Isogen',275)\n" +
        ",('Scrap Metal','MK9 Medium Rapid Missile Launcher','Nocxium',76)\n" +
        ",('Scrap Metal','MK9 Medium Rapid Missile Launcher','Zydrine',27)\n" +
        ",('Scrap Metal','MK9 Medium Rapid Missile Launcher','Megacyte',13)\n" +
        ",('Scrap Metal','MK7 Large Rapid Missile Launcher','Tritanium',51080)\n" +
        ",('Scrap Metal','MK7 Large Rapid Missile Launcher','Pyerite',12383)\n" +
        ",('Scrap Metal','MK7 Large Rapid Missile Launcher','Mexallon',4234)\n" +
        ",('Scrap Metal','MK7 Large Rapid Missile Launcher','Isogen',748)\n" +
        ",('Scrap Metal','MK7 Large Rapid Missile Launcher','Nocxium',208)\n" +
        ",('Scrap Metal','MK7 Large Rapid Missile Launcher','Zydrine',73)\n" +
        ",('Scrap Metal','MK9 Large Rapid Missile Launcher','Tritanium',75222)\n" +
        ",('Scrap Metal','MK9 Large Rapid Missile Launcher','Pyerite',18236)\n" +
        ",('Scrap Metal','MK9 Large Rapid Missile Launcher','Mexallon',6235)\n" +
        ",('Scrap Metal','MK9 Large Rapid Missile Launcher','Isogen',1102)\n" +
        ",('Scrap Metal','MK9 Large Rapid Missile Launcher','Nocxium',307)\n" +
        ",('Scrap Metal','MK9 Large Rapid Missile Launcher','Zydrine',108)\n" +
        ",('Scrap Metal','MK9 Large Rapid Missile Launcher','Megacyte',54)\n" +
        ",('Scrap Metal','MK5 Medium Torpedo Launcher','Tritanium',8959)\n" +
        ",('Scrap Metal','MK5 Medium Torpedo Launcher','Pyerite',2172)\n" +
        ",('Scrap Metal','MK5 Medium Torpedo Launcher','Mexallon',742)\n" +
        ",('Scrap Metal','MK5 Medium Torpedo Launcher','Isogen',131)\n" +
        ",('Scrap Metal','MK5 Medium Torpedo Launcher','Nocxium',36)\n" +
        ",('Scrap Metal','MK7 Medium Torpedo Launcher','Tritanium',17026)\n" +
        ",('Scrap Metal','MK7 Medium Torpedo Launcher','Pyerite',4127)\n" +
        ",('Scrap Metal','MK7 Medium Torpedo Launcher','Mexallon',1411)\n" +
        ",('Scrap Metal','MK7 Medium Torpedo Launcher','Isogen',249)\n" +
        ",('Scrap Metal','MK7 Medium Torpedo Launcher','Nocxium',69)\n" +
        ",('Scrap Metal','MK7 Medium Torpedo Launcher','Zydrine',24)\n" +
        ",('Scrap Metal','MK9 Medium Torpedo Launcher','Tritanium',25074)\n" +
        ",('Scrap Metal','MK9 Medium Torpedo Launcher','Pyerite',6078)\n" +
        ",('Scrap Metal','MK9 Medium Torpedo Launcher','Mexallon',2078)\n" +
        ",('Scrap Metal','MK9 Medium Torpedo Launcher','Isogen',367)\n" +
        ",('Scrap Metal','MK9 Medium Torpedo Launcher','Nocxium',102)\n" +
        ",('Scrap Metal','MK9 Medium Torpedo Launcher','Zydrine',36)\n" +
        ",('Scrap Metal','MK9 Medium Torpedo Launcher','Megacyte',18)\n" +
        ",('Scrap Metal','MK3 Small Torpedo Launcher','Tritanium',795)\n" +
        ",('Scrap Metal','MK3 Small Torpedo Launcher','Pyerite',192)\n" +
        ",('Scrap Metal','MK3 Small Torpedo Launcher','Mexallon',65)\n" +
        ",('Scrap Metal','MK3 Small Torpedo Launcher','Isogen',11)\n" +
        ",('Scrap Metal','MK5 Small Torpedo Launcher','Tritanium',2239)\n" +
        ",('Scrap Metal','MK5 Small Torpedo Launcher','Pyerite',543)\n" +
        ",('Scrap Metal','MK5 Small Torpedo Launcher','Mexallon',185)\n" +
        ",('Scrap Metal','MK5 Small Torpedo Launcher','Isogen',32)\n" +
        ",('Scrap Metal','MK5 Small Torpedo Launcher','Nocxium',9)\n" +
        ",('Scrap Metal','MK7 Small Torpedo Launcher','Tritanium',4256)\n" +
        ",('Scrap Metal','MK7 Small Torpedo Launcher','Pyerite',1031)\n" +
        ",('Scrap Metal','MK7 Small Torpedo Launcher','Mexallon',352)\n" +
        ",('Scrap Metal','MK7 Small Torpedo Launcher','Isogen',62)\n" +
        ",('Scrap Metal','MK7 Small Torpedo Launcher','Nocxium',17)\n" +
        ",('Scrap Metal','MK7 Small Torpedo Launcher','Zydrine',6)\n" +
        ",('Scrap Metal','MK9 Small Torpedo Launcher','Tritanium',6268)\n" +
        ",('Scrap Metal','MK9 Small Torpedo Launcher','Pyerite',1519)\n" +
        ",('Scrap Metal','MK9 Small Torpedo Launcher','Mexallon',519)\n" +
        ",('Scrap Metal','MK9 Small Torpedo Launcher','Isogen',91)\n" +
        ",('Scrap Metal','MK9 Small Torpedo Launcher','Nocxium',25)\n" +
        ",('Scrap Metal','MK9 Small Torpedo Launcher','Zydrine',9)\n" +
        ",('Scrap Metal','MK9 Small Torpedo Launcher','Megacyte',4)\n" +
        ",('Scrap Metal','MK7 Large Torpedo Launcher','Tritanium',68106)\n" +
        ",('Scrap Metal','MK7 Large Torpedo Launcher','Pyerite',16511)\n" +
        ",('Scrap Metal','MK7 Large Torpedo Launcher','Mexallon',5645)\n" +
        ",('Scrap Metal','MK7 Large Torpedo Launcher','Isogen',998)\n" +
        ",('Scrap Metal','MK7 Large Torpedo Launcher','Nocxium',278)\n" +
        ",('Scrap Metal','MK7 Large Torpedo Launcher','Zydrine',98)\n" +
        ",('Scrap Metal','MK9 Large Torpedo Launcher','Tritanium',100297)\n" +
        ",('Scrap Metal','MK9 Large Torpedo Launcher','Pyerite',24315)\n" +
        ",('Scrap Metal','MK9 Large Torpedo Launcher','Mexallon',8313)\n" +
        ",('Scrap Metal','MK9 Large Torpedo Launcher','Isogen',1469)\n" +
        ",('Scrap Metal','MK9 Large Torpedo Launcher','Nocxium',409)\n" +
        ",('Scrap Metal','MK9 Large Torpedo Launcher','Zydrine',144)\n" +
        ",('Scrap Metal','MK9 Large Torpedo Launcher','Megacyte',72)\n" +
        ",('Scrap Metal','MK3 Small Energy Nosferatu','Tritanium',2670)\n" +
        ",('Scrap Metal','MK3 Small Energy Nosferatu','Pyerite',647)\n" +
        ",('Scrap Metal','MK3 Small Energy Nosferatu','Mexallon',221)\n" +
        ",('Scrap Metal','MK3 Small Energy Nosferatu','Isogen',39)\n" +
        ",('Scrap Metal','MK5 Small Energy Nosferatu','Tritanium',6924)\n" +
        ",('Scrap Metal','MK5 Small Energy Nosferatu','Pyerite',1678)\n" +
        ",('Scrap Metal','MK5 Small Energy Nosferatu','Mexallon',573)\n" +
        ",('Scrap Metal','MK5 Small Energy Nosferatu','Isogen',101)\n" +
        ",('Scrap Metal','MK5 Small Energy Nosferatu','Nocxium',28)\n" +
        ",('Scrap Metal','MK7 Small Energy Nosferatu','Tritanium',11365)\n" +
        ",('Scrap Metal','MK7 Small Energy Nosferatu','Pyerite',2755)\n" +
        ",('Scrap Metal','MK7 Small Energy Nosferatu','Mexallon',942)\n" +
        ",('Scrap Metal','MK7 Small Energy Nosferatu','Isogen',166)\n" +
        ",('Scrap Metal','MK7 Small Energy Nosferatu','Nocxium',46)\n" +
        ",('Scrap Metal','MK7 Small Energy Nosferatu','Zydrine',16)\n" +
        ",('Scrap Metal','MK9 Small Energy Nosferatu','Tritanium',16743)\n" +
        ",('Scrap Metal','MK9 Small Energy Nosferatu','Pyerite',4059)\n" +
        ",('Scrap Metal','MK9 Small Energy Nosferatu','Mexallon',1387)\n" +
        ",('Scrap Metal','MK9 Small Energy Nosferatu','Isogen',245)\n" +
        ",('Scrap Metal','MK9 Small Energy Nosferatu','Nocxium',68)\n" +
        ",('Scrap Metal','MK9 Small Energy Nosferatu','Zydrine',24)\n" +
        ",('Scrap Metal','MK9 Small Energy Nosferatu','Megacyte',12)\n" +
        ",('Scrap Metal','MK5 Medium Energy Nosferatu','Tritanium',27696)\n" +
        ",('Scrap Metal','MK5 Medium Energy Nosferatu','Pyerite',6714)\n" +
        ",('Scrap Metal','MK5 Medium Energy Nosferatu','Mexallon',2295)\n" +
        ",('Scrap Metal','MK5 Medium Energy Nosferatu','Isogen',405)\n" +
        ",('Scrap Metal','MK5 Medium Energy Nosferatu','Nocxium',113)\n" +
        ",('Scrap Metal','MK7 Medium Energy Nosferatu','Tritanium',45460)\n" +
        ",('Scrap Metal','MK7 Medium Energy Nosferatu','Pyerite',11021)\n" +
        ",('Scrap Metal','MK7 Medium Energy Nosferatu','Mexallon',3768)\n" +
        ",('Scrap Metal','MK7 Medium Energy Nosferatu','Isogen',666)\n" +
        ",('Scrap Metal','MK7 Medium Energy Nosferatu','Nocxium',185)\n" +
        ",('Scrap Metal','MK7 Medium Energy Nosferatu','Zydrine',65)\n" +
        ",('Scrap Metal','MK9 Medium Energy Nosferatu','Tritanium',66974)\n" +
        ",('Scrap Metal','MK9 Medium Energy Nosferatu','Pyerite',16236)\n" +
        ",('Scrap Metal','MK9 Medium Energy Nosferatu','Mexallon',5551)\n" +
        ",('Scrap Metal','MK9 Medium Energy Nosferatu','Isogen',981)\n" +
        ",('Scrap Metal','MK9 Medium Energy Nosferatu','Nocxium',273)\n" +
        ",('Scrap Metal','MK9 Medium Energy Nosferatu','Zydrine',96)\n" +
        ",('Scrap Metal','MK9 Medium Energy Nosferatu','Megacyte',48)\n" +
        ",('Scrap Metal','MK9 Large Energy Nosferatu','Tritanium',267896)\n" +
        ",('Scrap Metal','MK9 Large Energy Nosferatu','Pyerite',64946)\n" +
        ",('Scrap Metal','MK9 Large Energy Nosferatu','Mexallon',22206)\n" +
        ",('Scrap Metal','MK9 Large Energy Nosferatu','Isogen',3926)\n" +
        ",('Scrap Metal','MK9 Large Energy Nosferatu','Nocxium',1094)\n" +
        ",('Scrap Metal','MK9 Large Energy Nosferatu','Zydrine',386)\n" +
        ",('Scrap Metal','MK9 Large Energy Nosferatu','Megacyte',193)\n" +
        ",('Scrap Metal','MK3 Small Energy Neutralizer','Tritanium',2670)\n" +
        ",('Scrap Metal','MK3 Small Energy Neutralizer','Pyerite',647)\n" +
        ",('Scrap Metal','MK3 Small Energy Neutralizer','Mexallon',221)\n" +
        ",('Scrap Metal','MK3 Small Energy Neutralizer','Isogen',39)\n" +
        ",('Scrap Metal','MK5 Small Energy Neutralizer','Tritanium',6924)\n" +
        ",('Scrap Metal','MK5 Small Energy Neutralizer','Pyerite',1678)\n" +
        ",('Scrap Metal','MK5 Small Energy Neutralizer','Mexallon',573)\n" +
        ",('Scrap Metal','MK5 Small Energy Neutralizer','Isogen',101)\n" +
        ",('Scrap Metal','MK5 Small Energy Neutralizer','Nocxium',28)\n" +
        ",('Scrap Metal','MK7 Small Energy Neutralizer','Tritanium',11365)\n" +
        ",('Scrap Metal','MK7 Small Energy Neutralizer','Pyerite',2755)\n" +
        ",('Scrap Metal','MK7 Small Energy Neutralizer','Mexallon',942)\n" +
        ",('Scrap Metal','MK7 Small Energy Neutralizer','Isogen',166)\n" +
        ",('Scrap Metal','MK7 Small Energy Neutralizer','Nocxium',46)\n" +
        ",('Scrap Metal','MK7 Small Energy Neutralizer','Zydrine',16)\n" +
        ",('Scrap Metal','MK9 Small Energy Neutralizer','Tritanium',16743)\n" +
        ",('Scrap Metal','MK9 Small Energy Neutralizer','Pyerite',4059)\n" +
        ",('Scrap Metal','MK9 Small Energy Neutralizer','Mexallon',1387)\n" +
        ",('Scrap Metal','MK9 Small Energy Neutralizer','Isogen',245)\n" +
        ",('Scrap Metal','MK9 Small Energy Neutralizer','Nocxium',68)\n" +
        ",('Scrap Metal','MK9 Small Energy Neutralizer','Zydrine',24)\n" +
        ",('Scrap Metal','MK9 Small Energy Neutralizer','Megacyte',12)\n" +
        ",('Scrap Metal','MK5 Medium Energy Neutralizer','Tritanium',27696)\n" +
        ",('Scrap Metal','MK5 Medium Energy Neutralizer','Pyerite',6714)\n" +
        ",('Scrap Metal','MK5 Medium Energy Neutralizer','Mexallon',2295)\n" +
        ",('Scrap Metal','MK5 Medium Energy Neutralizer','Isogen',405)\n" +
        ",('Scrap Metal','MK5 Medium Energy Neutralizer','Nocxium',113)\n" +
        ",('Scrap Metal','MK7 Medium Energy Neutralizer','Tritanium',45460)\n" +
        ",('Scrap Metal','MK7 Medium Energy Neutralizer','Pyerite',11021)\n" +
        ",('Scrap Metal','MK7 Medium Energy Neutralizer','Mexallon',3768)\n" +
        ",('Scrap Metal','MK7 Medium Energy Neutralizer','Isogen',666)\n" +
        ",('Scrap Metal','MK7 Medium Energy Neutralizer','Nocxium',185)\n" +
        ",('Scrap Metal','MK7 Medium Energy Neutralizer','Zydrine',65)\n" +
        ",('Scrap Metal','MK9 Medium Energy Neutralizer','Tritanium',66974)\n" +
        ",('Scrap Metal','MK9 Medium Energy Neutralizer','Pyerite',16236)\n" +
        ",('Scrap Metal','MK9 Medium Energy Neutralizer','Mexallon',5551)\n" +
        ",('Scrap Metal','MK9 Medium Energy Neutralizer','Isogen',981)\n" +
        ",('Scrap Metal','MK9 Medium Energy Neutralizer','Nocxium',273)\n" +
        ",('Scrap Metal','MK9 Medium Energy Neutralizer','Zydrine',96)\n" +
        ",('Scrap Metal','MK9 Medium Energy Neutralizer','Megacyte',48)\n" +
        ",('Scrap Metal','MK9 Large Energy Neutralizer','Tritanium',267896)\n" +
        ",('Scrap Metal','MK9 Large Energy Neutralizer','Pyerite',64946)\n" +
        ",('Scrap Metal','MK9 Large Energy Neutralizer','Mexallon',22206)\n" +
        ",('Scrap Metal','MK9 Large Energy Neutralizer','Isogen',3926)\n" +
        ",('Scrap Metal','MK9 Large Energy Neutralizer','Nocxium',1094)\n" +
        ",('Scrap Metal','MK9 Large Energy Neutralizer','Zydrine',386)\n" +
        ",('Scrap Metal','MK9 Large Energy Neutralizer','Megacyte',193)\n" +
        ",('Scrap Metal','MK3 Small Remote Capacitor Transmitter','Tritanium',1353)\n" +
        ",('Scrap Metal','MK3 Small Remote Capacitor Transmitter','Pyerite',328)\n" +
        ",('Scrap Metal','MK3 Small Remote Capacitor Transmitter','Mexallon',112)\n" +
        ",('Scrap Metal','MK3 Small Remote Capacitor Transmitter','Isogen',19)\n" +
        ",('Scrap Metal','MK5 Small Remote Capacitor Transmitter','Tritanium',3463)\n" +
        ",('Scrap Metal','MK5 Small Remote Capacitor Transmitter','Pyerite',839)\n" +
        ",('Scrap Metal','MK5 Small Remote Capacitor Transmitter','Mexallon',287)\n" +
        ",('Scrap Metal','MK5 Small Remote Capacitor Transmitter','Isogen',50)\n" +
        ",('Scrap Metal','MK5 Small Remote Capacitor Transmitter','Nocxium',14)\n" +
        ",('Scrap Metal','MK7 Small Remote Capacitor Transmitter','Tritanium',5914)\n" +
        ",('Scrap Metal','MK7 Small Remote Capacitor Transmitter','Pyerite',1433)\n" +
        ",('Scrap Metal','MK7 Small Remote Capacitor Transmitter','Mexallon',490)\n" +
        ",('Scrap Metal','MK7 Small Remote Capacitor Transmitter','Isogen',86)\n" +
        ",('Scrap Metal','MK7 Small Remote Capacitor Transmitter','Nocxium',24)\n" +
        ",('Scrap Metal','MK7 Small Remote Capacitor Transmitter','Zydrine',8)\n" +
        ",('Scrap Metal','MK9 Small Remote Capacitor Transmitter','Tritanium',8175)\n" +
        ",('Scrap Metal','MK9 Small Remote Capacitor Transmitter','Pyerite',1982)\n" +
        ",('Scrap Metal','MK9 Small Remote Capacitor Transmitter','Mexallon',677)\n" +
        ",('Scrap Metal','MK9 Small Remote Capacitor Transmitter','Isogen',119)\n" +
        ",('Scrap Metal','MK9 Small Remote Capacitor Transmitter','Nocxium',33)\n" +
        ",('Scrap Metal','MK9 Small Remote Capacitor Transmitter','Zydrine',11)\n" +
        ",('Scrap Metal','MK9 Small Remote Capacitor Transmitter','Megacyte',5)\n" +
        ",('Scrap Metal','MK5 Medium Remote Capacitor Transmitter','Tritanium',13852)\n" +
        ",('Scrap Metal','MK5 Medium Remote Capacitor Transmitter','Pyerite',3358)\n" +
        ",('Scrap Metal','MK5 Medium Remote Capacitor Transmitter','Mexallon',1148)\n" +
        ",('Scrap Metal','MK5 Medium Remote Capacitor Transmitter','Isogen',203)\n" +
        ",('Scrap Metal','MK5 Medium Remote Capacitor Transmitter','Nocxium',56)\n" +
        ",('Scrap Metal','MK7 Medium Remote Capacitor Transmitter','Tritanium',23656)\n" +
        ",('Scrap Metal','MK7 Medium Remote Capacitor Transmitter','Pyerite',5735)\n" +
        ",('Scrap Metal','MK7 Medium Remote Capacitor Transmitter','Mexallon',1960)\n" +
        ",('Scrap Metal','MK7 Medium Remote Capacitor Transmitter','Isogen',346)\n" +
        ",('Scrap Metal','MK7 Medium Remote Capacitor Transmitter','Nocxium',96)\n" +
        ",('Scrap Metal','MK7 Medium Remote Capacitor Transmitter','Zydrine',34)\n" +
        ",('Scrap Metal','MK9 Medium Remote Capacitor Transmitter','Tritanium',32703)\n" +
        ",('Scrap Metal','MK9 Medium Remote Capacitor Transmitter','Pyerite',7928)\n" +
        ",('Scrap Metal','MK9 Medium Remote Capacitor Transmitter','Mexallon',2710)\n" +
        ",('Scrap Metal','MK9 Medium Remote Capacitor Transmitter','Isogen',479)\n" +
        ",('Scrap Metal','MK9 Medium Remote Capacitor Transmitter','Nocxium',133)\n" +
        ",('Scrap Metal','MK9 Medium Remote Capacitor Transmitter','Zydrine',47)\n" +
        ",('Scrap Metal','MK9 Medium Remote Capacitor Transmitter','Megacyte',23)\n" +
        ",('Scrap Metal','MK9 Large Remote Capacitor Transmitter','Tritanium',130813)\n" +
        ",('Scrap Metal','MK9 Large Remote Capacitor Transmitter','Pyerite',31713)\n" +
        ",('Scrap Metal','MK9 Large Remote Capacitor Transmitter','Mexallon',10843)\n" +
        ",('Scrap Metal','MK9 Large Remote Capacitor Transmitter','Isogen',1917)\n" +
        ",('Scrap Metal','MK9 Large Remote Capacitor Transmitter','Nocxium',534)\n" +
        ",('Scrap Metal','MK9 Large Remote Capacitor Transmitter','Zydrine',188)\n" +
        ",('Scrap Metal','MK9 Large Remote Capacitor Transmitter','Megacyte',94)\n" +
        ",('Scrap Metal','MK3 Small Remote Shield Booster','Tritanium',1353)\n" +
        ",('Scrap Metal','MK3 Small Remote Shield Booster','Pyerite',328)\n" +
        ",('Scrap Metal','MK3 Small Remote Shield Booster','Mexallon',112)\n" +
        ",('Scrap Metal','MK3 Small Remote Shield Booster','Isogen',19)\n" +
        ",('Scrap Metal','MK5 Small Remote Shield Booster','Tritanium',3463)\n" +
        ",('Scrap Metal','MK5 Small Remote Shield Booster','Pyerite',839)\n" +
        ",('Scrap Metal','MK5 Small Remote Shield Booster','Mexallon',287)\n" +
        ",('Scrap Metal','MK5 Small Remote Shield Booster','Isogen',50)\n" +
        ",('Scrap Metal','MK5 Small Remote Shield Booster','Nocxium',14)\n" +
        ",('Scrap Metal','MK7 Small Remote Shield Booster','Tritanium',5914)\n" +
        ",('Scrap Metal','MK7 Small Remote Shield Booster','Pyerite',1433)\n" +
        ",('Scrap Metal','MK7 Small Remote Shield Booster','Mexallon',490)\n" +
        ",('Scrap Metal','MK7 Small Remote Shield Booster','Isogen',86)\n" +
        ",('Scrap Metal','MK7 Small Remote Shield Booster','Nocxium',24)\n" +
        ",('Scrap Metal','MK7 Small Remote Shield Booster','Zydrine',8)\n" +
        ",('Scrap Metal','MK9 Small Remote Shield Booster','Tritanium',8175)\n" +
        ",('Scrap Metal','MK9 Small Remote Shield Booster','Pyerite',1982)\n" +
        ",('Scrap Metal','MK9 Small Remote Shield Booster','Mexallon',677)\n" +
        ",('Scrap Metal','MK9 Small Remote Shield Booster','Isogen',119)\n" +
        ",('Scrap Metal','MK9 Small Remote Shield Booster','Nocxium',33)\n" +
        ",('Scrap Metal','MK9 Small Remote Shield Booster','Zydrine',11)\n" +
        ",('Scrap Metal','MK9 Small Remote Shield Booster','Megacyte',5)\n" +
        ",('Scrap Metal','MK5 Medium Remote Shield Booster','Tritanium',13852)\n" +
        ",('Scrap Metal','MK5 Medium Remote Shield Booster','Pyerite',3358)\n" +
        ",('Scrap Metal','MK5 Medium Remote Shield Booster','Mexallon',1148)\n" +
        ",('Scrap Metal','MK5 Medium Remote Shield Booster','Isogen',203)\n" +
        ",('Scrap Metal','MK5 Medium Remote Shield Booster','Nocxium',56)\n" +
        ",('Scrap Metal','MK7 Medium Remote Shield Booster','Tritanium',23656)\n" +
        ",('Scrap Metal','MK7 Medium Remote Shield Booster','Pyerite',5735)\n" +
        ",('Scrap Metal','MK7 Medium Remote Shield Booster','Mexallon',1960)\n" +
        ",('Scrap Metal','MK7 Medium Remote Shield Booster','Isogen',346)\n" +
        ",('Scrap Metal','MK7 Medium Remote Shield Booster','Nocxium',96)\n" +
        ",('Scrap Metal','MK7 Medium Remote Shield Booster','Zydrine',34)\n" +
        ",('Scrap Metal','MK9 Medium Remote Shield Booster','Tritanium',32703)\n" +
        ",('Scrap Metal','MK9 Medium Remote Shield Booster','Pyerite',7928)\n" +
        ",('Scrap Metal','MK9 Medium Remote Shield Booster','Mexallon',2710)\n" +
        ",('Scrap Metal','MK9 Medium Remote Shield Booster','Isogen',479)\n" +
        ",('Scrap Metal','MK9 Medium Remote Shield Booster','Nocxium',133)\n" +
        ",('Scrap Metal','MK9 Medium Remote Shield Booster','Zydrine',47)\n" +
        ",('Scrap Metal','MK9 Medium Remote Shield Booster','Megacyte',23)\n" +
        ",('Scrap Metal','MK9 Large Remote Shield Booster','Tritanium',130813)\n" +
        ",('Scrap Metal','MK9 Large Remote Shield Booster','Pyerite',31713)\n" +
        ",('Scrap Metal','MK9 Large Remote Shield Booster','Mexallon',10843)\n" +
        ",('Scrap Metal','MK9 Large Remote Shield Booster','Isogen',1917)\n" +
        ",('Scrap Metal','MK9 Large Remote Shield Booster','Nocxium',534)\n" +
        ",('Scrap Metal','MK9 Large Remote Shield Booster','Zydrine',188)\n" +
        ",('Scrap Metal','MK9 Large Remote Shield Booster','Megacyte',94)\n" +
        ",('Scrap Metal','MK3 Small Remote Armor Repairer','Tritanium',1353)\n" +
        ",('Scrap Metal','MK3 Small Remote Armor Repairer','Pyerite',328)\n" +
        ",('Scrap Metal','MK3 Small Remote Armor Repairer','Mexallon',112)\n" +
        ",('Scrap Metal','MK3 Small Remote Armor Repairer','Isogen',19)\n" +
        ",('Scrap Metal','MK5 Small Remote Armor Repairer','Tritanium',3463)\n" +
        ",('Scrap Metal','MK5 Small Remote Armor Repairer','Pyerite',839)\n" +
        ",('Scrap Metal','MK5 Small Remote Armor Repairer','Mexallon',287)\n" +
        ",('Scrap Metal','MK5 Small Remote Armor Repairer','Isogen',50)\n" +
        ",('Scrap Metal','MK5 Small Remote Armor Repairer','Nocxium',14)\n" +
        ",('Scrap Metal','MK7 Small Remote Armor Repairer','Tritanium',5914)\n" +
        ",('Scrap Metal','MK7 Small Remote Armor Repairer','Pyerite',1433)\n" +
        ",('Scrap Metal','MK7 Small Remote Armor Repairer','Mexallon',490)\n" +
        ",('Scrap Metal','MK7 Small Remote Armor Repairer','Isogen',86)\n" +
        ",('Scrap Metal','MK7 Small Remote Armor Repairer','Nocxium',24)\n" +
        ",('Scrap Metal','MK7 Small Remote Armor Repairer','Zydrine',8)\n" +
        ",('Scrap Metal','MK9 Small Remote Armor Repairer','Tritanium',8175)\n" +
        ",('Scrap Metal','MK9 Small Remote Armor Repairer','Pyerite',1982)\n" +
        ",('Scrap Metal','MK9 Small Remote Armor Repairer','Mexallon',677)\n" +
        ",('Scrap Metal','MK9 Small Remote Armor Repairer','Isogen',119)\n" +
        ",('Scrap Metal','MK9 Small Remote Armor Repairer','Nocxium',33)\n" +
        ",('Scrap Metal','MK9 Small Remote Armor Repairer','Zydrine',11)\n" +
        ",('Scrap Metal','MK9 Small Remote Armor Repairer','Megacyte',5)\n" +
        ",('Scrap Metal','MK5 Medium Remote Armor Repairer','Tritanium',13852)\n" +
        ",('Scrap Metal','MK5 Medium Remote Armor Repairer','Pyerite',3358)\n" +
        ",('Scrap Metal','MK5 Medium Remote Armor Repairer','Mexallon',1148)\n" +
        ",('Scrap Metal','MK5 Medium Remote Armor Repairer','Isogen',203)\n" +
        ",('Scrap Metal','MK5 Medium Remote Armor Repairer','Nocxium',56)\n" +
        ",('Scrap Metal','MK7 Medium Remote Armor Repairer','Tritanium',23656)\n" +
        ",('Scrap Metal','MK7 Medium Remote Armor Repairer','Pyerite',5735)\n" +
        ",('Scrap Metal','MK7 Medium Remote Armor Repairer','Mexallon',1960)\n" +
        ",('Scrap Metal','MK7 Medium Remote Armor Repairer','Isogen',346)\n" +
        ",('Scrap Metal','MK7 Medium Remote Armor Repairer','Nocxium',96)\n" +
        ",('Scrap Metal','MK7 Medium Remote Armor Repairer','Zydrine',34)\n" +
        ",('Scrap Metal','MK9 Medium Remote Armor Repairer','Tritanium',32703)\n" +
        ",('Scrap Metal','MK9 Medium Remote Armor Repairer','Pyerite',7928)\n" +
        ",('Scrap Metal','MK9 Medium Remote Armor Repairer','Mexallon',2710)\n" +
        ",('Scrap Metal','MK9 Medium Remote Armor Repairer','Isogen',479)\n" +
        ",('Scrap Metal','MK9 Medium Remote Armor Repairer','Nocxium',133)\n" +
        ",('Scrap Metal','MK9 Medium Remote Armor Repairer','Zydrine',47)\n" +
        ",('Scrap Metal','MK9 Medium Remote Armor Repairer','Megacyte',23)\n" +
        ",('Scrap Metal','MK9 Large Remote Armor Repairer','Tritanium',130813)\n" +
        ",('Scrap Metal','MK9 Large Remote Armor Repairer','Pyerite',31713)\n" +
        ",('Scrap Metal','MK9 Large Remote Armor Repairer','Mexallon',10843)\n" +
        ",('Scrap Metal','MK9 Large Remote Armor Repairer','Isogen',1917)\n" +
        ",('Scrap Metal','MK9 Large Remote Armor Repairer','Nocxium',534)\n" +
        ",('Scrap Metal','MK9 Large Remote Armor Repairer','Zydrine',188)\n" +
        ",('Scrap Metal','MK9 Large Remote Armor Repairer','Megacyte',94)\n" +
        ",('Scrap Metal','MK5 Cloaking Device','Tritanium',27307)\n" +
        ",('Scrap Metal','MK5 Cloaking Device','Pyerite',6620)\n" +
        ",('Scrap Metal','MK5 Cloaking Device','Mexallon',2263)\n" +
        ",('Scrap Metal','MK5 Cloaking Device','Isogen',400)\n" +
        ",('Scrap Metal','MK5 Cloaking Device','Nocxium',111)\n" +
        ",('Scrap Metal','MK7 Cloaking Device','Tritanium',45838)\n" +
        ",('Scrap Metal','MK7 Cloaking Device','Pyerite',11112)\n" +
        ",('Scrap Metal','MK7 Cloaking Device','Mexallon',3799)\n" +
        ",('Scrap Metal','MK7 Cloaking Device','Isogen',671)\n" +
        ",('Scrap Metal','MK7 Cloaking Device','Nocxium',187)\n" +
        ",('Scrap Metal','MK7 Cloaking Device','Zydrine',66)\n" +
        ",('Scrap Metal','MK9 Cloaking Device','Tritanium',61632)\n" +
        ",('Scrap Metal','MK9 Cloaking Device','Pyerite',14941)\n" +
        ",('Scrap Metal','MK9 Cloaking Device','Mexallon',5108)\n" +
        ",('Scrap Metal','MK9 Cloaking Device','Isogen',903)\n" +
        ",('Scrap Metal','MK9 Cloaking Device','Nocxium',251)\n" +
        ",('Scrap Metal','MK9 Cloaking Device','Zydrine',88)\n" +
        ",('Scrap Metal','MK9 Cloaking Device','Megacyte',44)\n" +
        ",('Scrap Metal','MK5 Covert Ops Cloaking Device','Tritanium',109229)\n" +
        ",('Scrap Metal','MK5 Covert Ops Cloaking Device','Pyerite',26480)\n" +
        ",('Scrap Metal','MK5 Covert Ops Cloaking Device','Mexallon',9054)\n" +
        ",('Scrap Metal','MK5 Covert Ops Cloaking Device','Isogen',1600)\n" +
        ",('Scrap Metal','MK5 Covert Ops Cloaking Device','Nocxium',446)\n" +
        ",('Scrap Metal','MK7 Covert Ops Cloaking Device','Tritanium',183352)\n" +
        ",('Scrap Metal','MK7 Covert Ops Cloaking Device','Pyerite',44450)\n" +
        ",('Scrap Metal','MK7 Covert Ops Cloaking Device','Mexallon',15198)\n" +
        ",('Scrap Metal','MK7 Covert Ops Cloaking Device','Isogen',2687)\n" +
        ",('Scrap Metal','MK7 Covert Ops Cloaking Device','Nocxium',748)\n" +
        ",('Scrap Metal','MK7 Covert Ops Cloaking Device','Zydrine',264)\n" +
        ",('Scrap Metal','MK9 Covert Ops Cloaking Device','Tritanium',246528)\n" +
        ",('Scrap Metal','MK9 Covert Ops Cloaking Device','Pyerite',59766)\n" +
        ",('Scrap Metal','MK9 Covert Ops Cloaking Device','Mexallon',20435)\n" +
        ",('Scrap Metal','MK9 Covert Ops Cloaking Device','Isogen',3613)\n" +
        ",('Scrap Metal','MK9 Covert Ops Cloaking Device','Nocxium',1006)\n" +
        ",('Scrap Metal','MK9 Covert Ops Cloaking Device','Zydrine',355)\n" +
        ",('Scrap Metal','MK9 Covert Ops Cloaking Device','Megacyte',177)\n" +
        ",('Scrap Metal','MK1 Small Shield Extender','Tritanium',3000)\n" +
        ",('Scrap Metal','MK1 Small Shield Extender','Pyerite',727)\n" +
        ",('Scrap Metal','MK3 Small Shield Extender','Tritanium',2915)\n" +
        ",('Scrap Metal','MK3 Small Shield Extender','Pyerite',706)\n" +
        ",('Scrap Metal','MK3 Small Shield Extender','Mexallon',241)\n" +
        ",('Scrap Metal','MK3 Small Shield Extender','Isogen',42)\n" +
        ",('Scrap Metal','MK5 Small Shield Extender','Tritanium',8192)\n" +
        ",('Scrap Metal','MK5 Small Shield Extender','Pyerite',1986)\n" +
        ",('Scrap Metal','MK5 Small Shield Extender','Mexallon',679)\n" +
        ",('Scrap Metal','MK5 Small Shield Extender','Isogen',120)\n" +
        ",('Scrap Metal','MK5 Small Shield Extender','Nocxium',33)\n" +
        ",('Scrap Metal','MK7 Small Shield Extender','Tritanium',13751)\n" +
        ",('Scrap Metal','MK7 Small Shield Extender','Pyerite',3333)\n" +
        ",('Scrap Metal','MK7 Small Shield Extender','Mexallon',1139)\n" +
        ",('Scrap Metal','MK7 Small Shield Extender','Isogen',201)\n" +
        ",('Scrap Metal','MK7 Small Shield Extender','Nocxium',56)\n" +
        ",('Scrap Metal','MK7 Small Shield Extender','Zydrine',19)\n" +
        ",('Scrap Metal','MK9 Small Shield Extender','Tritanium',18489)\n" +
        ",('Scrap Metal','MK9 Small Shield Extender','Pyerite',4482)\n" +
        ",('Scrap Metal','MK9 Small Shield Extender','Mexallon',1532)\n" +
        ",('Scrap Metal','MK9 Small Shield Extender','Isogen',270)\n" +
        ",('Scrap Metal','MK9 Small Shield Extender','Nocxium',75)\n" +
        ",('Scrap Metal','MK9 Small Shield Extender','Zydrine',26)\n" +
        ",('Scrap Metal','MK9 Small Shield Extender','Megacyte',13)\n" +
        ",('Scrap Metal','MK5 Medium Shield Extender','Tritanium',32768)\n" +
        ",('Scrap Metal','MK5 Medium Shield Extender','Pyerite',7944)\n" +
        ",('Scrap Metal','MK5 Medium Shield Extender','Mexallon',2716)\n" +
        ",('Scrap Metal','MK5 Medium Shield Extender','Isogen',480)\n" +
        ",('Scrap Metal','MK5 Medium Shield Extender','Nocxium',133)\n" +
        ",('Scrap Metal','MK7 Medium Shield Extender','Tritanium',55005)\n" +
        ",('Scrap Metal','MK7 Medium Shield Extender','Pyerite',13335)\n" +
        ",('Scrap Metal','MK7 Medium Shield Extender','Mexallon',4559)\n" +
        ",('Scrap Metal','MK7 Medium Shield Extender','Isogen',806)\n" +
        ",('Scrap Metal','MK7 Medium Shield Extender','Nocxium',224)\n" +
        ",('Scrap Metal','MK7 Medium Shield Extender','Zydrine',79)\n" +
        ",('Scrap Metal','MK9 Medium Shield Extender','Tritanium',73958)\n" +
        ",('Scrap Metal','MK9 Medium Shield Extender','Pyerite',17929)\n" +
        ",('Scrap Metal','MK9 Medium Shield Extender','Mexallon',6130)\n" +
        ",('Scrap Metal','MK9 Medium Shield Extender','Isogen',1083)\n" +
        ",('Scrap Metal','MK9 Medium Shield Extender','Nocxium',302)\n" +
        ",('Scrap Metal','MK9 Medium Shield Extender','Zydrine',106)\n" +
        ",('Scrap Metal','MK9 Medium Shield Extender','Megacyte',53)\n" +
        ",('Scrap Metal','MK9 Large Shield Extender','Tritanium',221875)\n" +
        ",('Scrap Metal','MK9 Large Shield Extender','Pyerite',53789)\n" +
        ",('Scrap Metal','MK9 Large Shield Extender','Mexallon',18391)\n" +
        ",('Scrap Metal','MK9 Large Shield Extender','Isogen',3251)\n" +
        ",('Scrap Metal','MK9 Large Shield Extender','Nocxium',906)\n" +
        ",('Scrap Metal','MK9 Large Shield Extender','Zydrine',319)\n" +
        ",('Scrap Metal','MK9 Large Shield Extender','Megacyte',159)\n" +
        ",('Scrap Metal','MK1 Small Shield Booster','Tritanium',1000)\n" +
        ",('Scrap Metal','MK1 Small Shield Booster','Pyerite',242)\n" +
        ",('Scrap Metal','MK3 Small Shield Booster','Tritanium',676)\n" +
        ",('Scrap Metal','MK3 Small Shield Booster','Pyerite',164)\n" +
        ",('Scrap Metal','MK3 Small Shield Booster','Mexallon',56)\n" +
        ",('Scrap Metal','MK3 Small Shield Booster','Isogen',9)\n" +
        ",('Scrap Metal','MK5 Small Shield Booster','Tritanium',1731)\n" +
        ",('Scrap Metal','MK5 Small Shield Booster','Pyerite',419)\n" +
        ",('Scrap Metal','MK5 Small Shield Booster','Mexallon',143)\n" +
        ",('Scrap Metal','MK5 Small Shield Booster','Isogen',25)\n" +
        ",('Scrap Metal','MK5 Small Shield Booster','Nocxium',7)\n" +
        ",('Scrap Metal','MK7 Small Shield Booster','Tritanium',2957)\n" +
        ",('Scrap Metal','MK7 Small Shield Booster','Pyerite',716)\n" +
        ",('Scrap Metal','MK7 Small Shield Booster','Mexallon',245)\n" +
        ",('Scrap Metal','MK7 Small Shield Booster','Isogen',43)\n" +
        ",('Scrap Metal','MK7 Small Shield Booster','Nocxium',12)\n" +
        ",('Scrap Metal','MK7 Small Shield Booster','Zydrine',4)\n" +
        ",('Scrap Metal','MK9 Small Shield Booster','Tritanium',4087)\n" +
        ",('Scrap Metal','MK9 Small Shield Booster','Pyerite',991)\n" +
        ",('Scrap Metal','MK9 Small Shield Booster','Mexallon',338)\n" +
        ",('Scrap Metal','MK9 Small Shield Booster','Isogen',59)\n" +
        ",('Scrap Metal','MK9 Small Shield Booster','Nocxium',16)\n" +
        ",('Scrap Metal','MK9 Small Shield Booster','Zydrine',5)\n" +
        ",('Scrap Metal','MK9 Small Shield Booster','Megacyte',2)\n" +
        ",('Scrap Metal','MK5 Medium Shield Booster','Tritanium',6926)\n" +
        ",('Scrap Metal','MK5 Medium Shield Booster','Pyerite',1679)\n" +
        ",('Scrap Metal','MK5 Medium Shield Booster','Mexallon',574)\n" +
        ",('Scrap Metal','MK5 Medium Shield Booster','Isogen',101)\n" +
        ",('Scrap Metal','MK5 Medium Shield Booster','Nocxium',28)\n" +
        ",('Scrap Metal','MK7 Medium Shield Booster','Tritanium',11828)\n" +
        ",('Scrap Metal','MK7 Medium Shield Booster','Pyerite',2867)\n" +
        ",('Scrap Metal','MK7 Medium Shield Booster','Mexallon',980)\n" +
        ",('Scrap Metal','MK7 Medium Shield Booster','Isogen',173)\n" +
        ",('Scrap Metal','MK7 Medium Shield Booster','Nocxium',48)\n" +
        ",('Scrap Metal','MK7 Medium Shield Booster','Zydrine',17)\n" +
        ",('Scrap Metal','MK9 Medium Shield Booster','Tritanium',16351)\n" +
        ",('Scrap Metal','MK9 Medium Shield Booster','Pyerite',3964)\n" +
        ",('Scrap Metal','MK9 Medium Shield Booster','Mexallon',1355)\n" +
        ",('Scrap Metal','MK9 Medium Shield Booster','Isogen',239)\n" +
        ",('Scrap Metal','MK9 Medium Shield Booster','Nocxium',66)\n" +
        ",('Scrap Metal','MK9 Medium Shield Booster','Zydrine',23)\n" +
        ",('Scrap Metal','MK9 Medium Shield Booster','Megacyte',11)\n" +
        ",('Scrap Metal','MK9 Large Shield Booster','Tritanium',65406)\n" +
        ",('Scrap Metal','MK9 Large Shield Booster','Pyerite',15856)\n" +
        ",('Scrap Metal','MK9 Large Shield Booster','Mexallon',5421)\n" +
        ",('Scrap Metal','MK9 Large Shield Booster','Isogen',958)\n" +
        ",('Scrap Metal','MK9 Large Shield Booster','Nocxium',267)\n" +
        ",('Scrap Metal','MK9 Large Shield Booster','Zydrine',94)\n" +
        ",('Scrap Metal','MK9 Large Shield Booster','Megacyte',47)\n" +
        ",('Scrap Metal','MK3 Small Microwarpdrive','Tritanium',1780)\n" +
        ",('Scrap Metal','MK3 Small Microwarpdrive','Pyerite',431)\n" +
        ",('Scrap Metal','MK3 Small Microwarpdrive','Mexallon',147)\n" +
        ",('Scrap Metal','MK3 Small Microwarpdrive','Isogen',26)\n" +
        ",('Scrap Metal','MK5 Small Microwarpdrive','Tritanium',4847)\n" +
        ",('Scrap Metal','MK5 Small Microwarpdrive','Pyerite',1175)\n" +
        ",('Scrap Metal','MK5 Small Microwarpdrive','Mexallon',401)\n" +
        ",('Scrap Metal','MK5 Small Microwarpdrive','Isogen',71)\n" +
        ",('Scrap Metal','MK5 Small Microwarpdrive','Nocxium',19)\n" +
        ",('Scrap Metal','MK7 Small Microwarpdrive','Tritanium',8376)\n" +
        ",('Scrap Metal','MK7 Small Microwarpdrive','Pyerite',2030)\n" +
        ",('Scrap Metal','MK7 Small Microwarpdrive','Mexallon',694)\n" +
        ",('Scrap Metal','MK7 Small Microwarpdrive','Isogen',122)\n" +
        ",('Scrap Metal','MK7 Small Microwarpdrive','Nocxium',34)\n" +
        ",('Scrap Metal','MK7 Small Microwarpdrive','Zydrine',12)\n" +
        ",('Scrap Metal','MK9 Small Microwarpdrive','Tritanium',11532)\n" +
        ",('Scrap Metal','MK9 Small Microwarpdrive','Pyerite',2795)\n" +
        ",('Scrap Metal','MK9 Small Microwarpdrive','Mexallon',955)\n" +
        ",('Scrap Metal','MK9 Small Microwarpdrive','Isogen',169)\n" +
        ",('Scrap Metal','MK9 Small Microwarpdrive','Nocxium',47)\n" +
        ",('Scrap Metal','MK9 Small Microwarpdrive','Zydrine',16)\n" +
        ",('Scrap Metal','MK9 Small Microwarpdrive','Megacyte',8)\n" +
        ",('Scrap Metal','MK5 Medium Microwarpdrive','Tritanium',19390)\n" +
        ",('Scrap Metal','MK5 Medium Microwarpdrive','Pyerite',4700)\n" +
        ",('Scrap Metal','MK5 Medium Microwarpdrive','Mexallon',1607)\n" +
        ",('Scrap Metal','MK5 Medium Microwarpdrive','Isogen',284)\n" +
        ",('Scrap Metal','MK5 Medium Microwarpdrive','Nocxium',79)\n" +
        ",('Scrap Metal','MK7 Medium Microwarpdrive','Tritanium',33506)\n" +
        ",('Scrap Metal','MK7 Medium Microwarpdrive','Pyerite',8122)\n" +
        ",('Scrap Metal','MK7 Medium Microwarpdrive','Mexallon',2777)\n" +
        ",('Scrap Metal','MK7 Medium Microwarpdrive','Isogen',491)\n" +
        ",('Scrap Metal','MK7 Medium Microwarpdrive','Nocxium',136)\n" +
        ",('Scrap Metal','MK7 Medium Microwarpdrive','Zydrine',48)\n" +
        ",('Scrap Metal','MK9 Medium Microwarpdrive','Tritanium',46129)\n" +
        ",('Scrap Metal','MK9 Medium Microwarpdrive','Pyerite',11183)\n" +
        ",('Scrap Metal','MK9 Medium Microwarpdrive','Mexallon',3823)\n" +
        ",('Scrap Metal','MK9 Medium Microwarpdrive','Isogen',676)\n" +
        ",('Scrap Metal','MK9 Medium Microwarpdrive','Nocxium',188)\n" +
        ",('Scrap Metal','MK9 Medium Microwarpdrive','Zydrine',66)\n" +
        ",('Scrap Metal','MK9 Medium Microwarpdrive','Megacyte',33)\n" +
        ",('Scrap Metal','MK9 Large Microwarpdrive','Tritanium',184518)\n" +
        ",('Scrap Metal','MK9 Large Microwarpdrive','Pyerite',44733)\n" +
        ",('Scrap Metal','MK9 Large Microwarpdrive','Mexallon',15295)\n" +
        ",('Scrap Metal','MK9 Large Microwarpdrive','Isogen',2704)\n" +
        ",('Scrap Metal','MK9 Large Microwarpdrive','Nocxium',753)\n" +
        ",('Scrap Metal','MK9 Large Microwarpdrive','Zydrine',266)\n" +
        ",('Scrap Metal','MK9 Large Microwarpdrive','Megacyte',133)\n" +
        ",('Scrap Metal','MK1 Small Afterburner','Tritanium',1500)\n" +
        ",('Scrap Metal','MK1 Small Afterburner','Pyerite',363)\n" +
        ",('Scrap Metal','MK3 Small Afterburner','Tritanium',1335)\n" +
        ",('Scrap Metal','MK3 Small Afterburner','Pyerite',323)\n" +
        ",('Scrap Metal','MK3 Small Afterburner','Mexallon',110)\n" +
        ",('Scrap Metal','MK3 Small Afterburner','Isogen',19)\n" +
        ",('Scrap Metal','MK5 Small Afterburner','Tritanium',3635)\n" +
        ",('Scrap Metal','MK5 Small Afterburner','Pyerite',881)\n" +
        ",('Scrap Metal','MK5 Small Afterburner','Mexallon',301)\n" +
        ",('Scrap Metal','MK5 Small Afterburner','Isogen',53)\n" +
        ",('Scrap Metal','MK5 Small Afterburner','Nocxium',14)\n" +
        ",('Scrap Metal','MK7 Small Afterburner','Tritanium',6282)\n" +
        ",('Scrap Metal','MK7 Small Afterburner','Pyerite',1523)\n" +
        ",('Scrap Metal','MK7 Small Afterburner','Mexallon',520)\n" +
        ",('Scrap Metal','MK7 Small Afterburner','Isogen',92)\n" +
        ",('Scrap Metal','MK7 Small Afterburner','Nocxium',25)\n" +
        ",('Scrap Metal','MK7 Small Afterburner','Zydrine',9)\n" +
        ",('Scrap Metal','MK9 Small Afterburner','Tritanium',8649)\n" +
        ",('Scrap Metal','MK9 Small Afterburner','Pyerite',2096)\n" +
        ",('Scrap Metal','MK9 Small Afterburner','Mexallon',716)\n" +
        ",('Scrap Metal','MK9 Small Afterburner','Isogen',126)\n" +
        ",('Scrap Metal','MK9 Small Afterburner','Nocxium',35)\n" +
        ",('Scrap Metal','MK9 Small Afterburner','Zydrine',12)\n" +
        ",('Scrap Metal','MK9 Small Afterburner','Megacyte',6)\n" +
        ",('Scrap Metal','MK5 Medium Afterburner','Tritanium',14542)\n" +
        ",('Scrap Metal','MK5 Medium Afterburner','Pyerite',3525)\n" +
        ",('Scrap Metal','MK5 Medium Afterburner','Mexallon',1205)\n" +
        ",('Scrap Metal','MK5 Medium Afterburner','Isogen',213)\n" +
        ",('Scrap Metal','MK5 Medium Afterburner','Nocxium',59)\n" +
        ",('Scrap Metal','MK7 Medium Afterburner','Tritanium',25129)\n" +
        ",('Scrap Metal','MK7 Medium Afterburner','Pyerite',6092)\n" +
        ",('Scrap Metal','MK7 Medium Afterburner','Mexallon',2083)\n" +
        ",('Scrap Metal','MK7 Medium Afterburner','Isogen',368)\n" +
        ",('Scrap Metal','MK7 Medium Afterburner','Nocxium',102)\n" +
        ",('Scrap Metal','MK7 Medium Afterburner','Zydrine',36)\n" +
        ",('Scrap Metal','MK9 Medium Afterburner','Tritanium',34597)\n" +
        ",('Scrap Metal','MK9 Medium Afterburner','Pyerite',8387)\n" +
        ",('Scrap Metal','MK9 Medium Afterburner','Mexallon',2867)\n" +
        ",('Scrap Metal','MK9 Medium Afterburner','Isogen',507)\n" +
        ",('Scrap Metal','MK9 Medium Afterburner','Nocxium',141)\n" +
        ",('Scrap Metal','MK9 Medium Afterburner','Zydrine',49)\n" +
        ",('Scrap Metal','MK9 Medium Afterburner','Megacyte',24)\n" +
        ",('Scrap Metal','MK9 Large Afterburner','Tritanium',138388)\n" +
        ",('Scrap Metal','MK9 Large Afterburner','Pyerite',33549)\n" +
        ",('Scrap Metal','MK9 Large Afterburner','Mexallon',11471)\n" +
        ",('Scrap Metal','MK9 Large Afterburner','Isogen',2028)\n" +
        ",('Scrap Metal','MK9 Large Afterburner','Nocxium',565)\n" +
        ",('Scrap Metal','MK9 Large Afterburner','Zydrine',199)\n" +
        ",('Scrap Metal','MK9 Large Afterburner','Megacyte',99)\n" +
        ",('Scrap Metal','MK3 Warp Disruptor','Tritanium',3561)\n" +
        ",('Scrap Metal','MK3 Warp Disruptor','Pyerite',863)\n" +
        ",('Scrap Metal','MK3 Warp Disruptor','Mexallon',295)\n" +
        ",('Scrap Metal','MK3 Warp Disruptor','Isogen',52)\n" +
        ",('Scrap Metal','MK5 Warp Disruptor','Tritanium',9232)\n" +
        ",('Scrap Metal','MK5 Warp Disruptor','Pyerite',2238)\n" +
        ",('Scrap Metal','MK5 Warp Disruptor','Mexallon',765)\n" +
        ",('Scrap Metal','MK5 Warp Disruptor','Isogen',135)\n" +
        ",('Scrap Metal','MK5 Warp Disruptor','Nocxium',37)\n" +
        ",('Scrap Metal','MK7 Warp Disruptor','Tritanium',15153)\n" +
        ",('Scrap Metal','MK7 Warp Disruptor','Pyerite',3673)\n" +
        ",('Scrap Metal','MK7 Warp Disruptor','Mexallon',1256)\n" +
        ",('Scrap Metal','MK7 Warp Disruptor','Isogen',222)\n" +
        ",('Scrap Metal','MK7 Warp Disruptor','Nocxium',61)\n" +
        ",('Scrap Metal','MK7 Warp Disruptor','Zydrine',21)\n" +
        ",('Scrap Metal','MK9 Warp Disruptor','Tritanium',22324)\n" +
        ",('Scrap Metal','MK9 Warp Disruptor','Pyerite',5412)\n" +
        ",('Scrap Metal','MK9 Warp Disruptor','Mexallon',1850)\n" +
        ",('Scrap Metal','MK9 Warp Disruptor','Isogen',327)\n" +
        ",('Scrap Metal','MK9 Warp Disruptor','Nocxium',91)\n" +
        ",('Scrap Metal','MK9 Warp Disruptor','Zydrine',32)\n" +
        ",('Scrap Metal','MK9 Warp Disruptor','Megacyte',16)\n" +
        ",('Scrap Metal','MK3 Small Capacitor Battery','Tritanium',1943)\n" +
        ",('Scrap Metal','MK3 Small Capacitor Battery','Pyerite',471)\n" +
        ",('Scrap Metal','MK3 Small Capacitor Battery','Mexallon',161)\n" +
        ",('Scrap Metal','MK3 Small Capacitor Battery','Isogen',28)\n" +
        ",('Scrap Metal','MK5 Small Capacitor Battery','Tritanium',5461)\n" +
        ",('Scrap Metal','MK5 Small Capacitor Battery','Pyerite',1324)\n" +
        ",('Scrap Metal','MK5 Small Capacitor Battery','Mexallon',452)\n" +
        ",('Scrap Metal','MK5 Small Capacitor Battery','Isogen',80)\n" +
        ",('Scrap Metal','MK5 Small Capacitor Battery','Nocxium',22)\n" +
        ",('Scrap Metal','MK7 Small Capacitor Battery','Tritanium',9167)\n" +
        ",('Scrap Metal','MK7 Small Capacitor Battery','Pyerite',2222)\n" +
        ",('Scrap Metal','MK7 Small Capacitor Battery','Mexallon',759)\n" +
        ",('Scrap Metal','MK7 Small Capacitor Battery','Isogen',134)\n" +
        ",('Scrap Metal','MK7 Small Capacitor Battery','Nocxium',37)\n" +
        ",('Scrap Metal','MK7 Small Capacitor Battery','Zydrine',13)\n" +
        ",('Scrap Metal','MK9 Small Capacitor Battery','Tritanium',12326)\n" +
        ",('Scrap Metal','MK9 Small Capacitor Battery','Pyerite',2988)\n" +
        ",('Scrap Metal','MK9 Small Capacitor Battery','Mexallon',1021)\n" +
        ",('Scrap Metal','MK9 Small Capacitor Battery','Isogen',180)\n" +
        ",('Scrap Metal','MK9 Small Capacitor Battery','Nocxium',50)\n" +
        ",('Scrap Metal','MK9 Small Capacitor Battery','Zydrine',17)\n" +
        ",('Scrap Metal','MK9 Small Capacitor Battery','Megacyte',8)\n" +
        ",('Scrap Metal','MK5 Medium Capacitor Battery','Tritanium',21845)\n" +
        ",('Scrap Metal','MK5 Medium Capacitor Battery','Pyerite',5296)\n" +
        ",('Scrap Metal','MK5 Medium Capacitor Battery','Mexallon',1810)\n" +
        ",('Scrap Metal','MK5 Medium Capacitor Battery','Isogen',320)\n" +
        ",('Scrap Metal','MK5 Medium Capacitor Battery','Nocxium',89)\n" +
        ",('Scrap Metal','MK7 Medium Capacitor Battery','Tritanium',36670)\n" +
        ",('Scrap Metal','MK7 Medium Capacitor Battery','Pyerite',8890)\n" +
        ",('Scrap Metal','MK7 Medium Capacitor Battery','Mexallon',3039)\n" +
        ",('Scrap Metal','MK7 Medium Capacitor Battery','Isogen',537)\n" +
        ",('Scrap Metal','MK7 Medium Capacitor Battery','Nocxium',149)\n" +
        ",('Scrap Metal','MK7 Medium Capacitor Battery','Zydrine',52)\n" +
        ",('Scrap Metal','MK9 Medium Capacitor Battery','Tritanium',49305)\n" +
        ",('Scrap Metal','MK9 Medium Capacitor Battery','Pyerite',11953)\n" +
        ",('Scrap Metal','MK9 Medium Capacitor Battery','Mexallon',4087)\n" +
        ",('Scrap Metal','MK9 Medium Capacitor Battery','Isogen',722)\n" +
        ",('Scrap Metal','MK9 Medium Capacitor Battery','Nocxium',201)\n" +
        ",('Scrap Metal','MK9 Medium Capacitor Battery','Zydrine',71)\n" +
        ",('Scrap Metal','MK9 Medium Capacitor Battery','Megacyte',35)\n" +
        ",('Scrap Metal','MK9 Large Capacitor Battery','Tritanium',197223)\n" +
        ",('Scrap Metal','MK9 Large Capacitor Battery','Pyerite',47813)\n" +
        ",('Scrap Metal','MK9 Large Capacitor Battery','Mexallon',16348)\n" +
        ",('Scrap Metal','MK9 Large Capacitor Battery','Isogen',2890)\n" +
        ",('Scrap Metal','MK9 Large Capacitor Battery','Nocxium',805)\n" +
        ",('Scrap Metal','MK9 Large Capacitor Battery','Zydrine',284)\n" +
        ",('Scrap Metal','MK9 Large Capacitor Battery','Megacyte',142)\n" +
        ",('Scrap Metal','MK3 Stasis Webifier','Tritanium',3561)\n" +
        ",('Scrap Metal','MK3 Stasis Webifier','Pyerite',863)\n" +
        ",('Scrap Metal','MK3 Stasis Webifier','Mexallon',295)\n" +
        ",('Scrap Metal','MK3 Stasis Webifier','Isogen',52)\n" +
        ",('Scrap Metal','MK5 Stasis Webifier','Tritanium',9232)\n" +
        ",('Scrap Metal','MK5 Stasis Webifier','Pyerite',2238)\n" +
        ",('Scrap Metal','MK5 Stasis Webifier','Mexallon',765)\n" +
        ",('Scrap Metal','MK5 Stasis Webifier','Isogen',135)\n" +
        ",('Scrap Metal','MK5 Stasis Webifier','Nocxium',37)\n" +
        ",('Scrap Metal','MK7 Stasis Webifier','Tritanium',15153)\n" +
        ",('Scrap Metal','MK7 Stasis Webifier','Pyerite',3673)\n" +
        ",('Scrap Metal','MK7 Stasis Webifier','Mexallon',1256)\n" +
        ",('Scrap Metal','MK7 Stasis Webifier','Isogen',222)\n" +
        ",('Scrap Metal','MK7 Stasis Webifier','Nocxium',61)\n" +
        ",('Scrap Metal','MK7 Stasis Webifier','Zydrine',21)\n" +
        ",('Scrap Metal','MK9 Stasis Webifier','Tritanium',22324)\n" +
        ",('Scrap Metal','MK9 Stasis Webifier','Pyerite',5412)\n" +
        ",('Scrap Metal','MK9 Stasis Webifier','Mexallon',1850)\n" +
        ",('Scrap Metal','MK9 Stasis Webifier','Isogen',327)\n" +
        ",('Scrap Metal','MK9 Stasis Webifier','Nocxium',91)\n" +
        ",('Scrap Metal','MK9 Stasis Webifier','Zydrine',32)\n" +
        ",('Scrap Metal','MK9 Stasis Webifier','Megacyte',16)\n" +
        ",('Scrap Metal','MK5 Adaptive Invulnerability Field','Tritanium',11540)\n" +
        ",('Scrap Metal','MK5 Adaptive Invulnerability Field','Pyerite',2797)\n" +
        ",('Scrap Metal','MK5 Adaptive Invulnerability Field','Mexallon',956)\n" +
        ",('Scrap Metal','MK5 Adaptive Invulnerability Field','Isogen',169)\n" +
        ",('Scrap Metal','MK5 Adaptive Invulnerability Field','Nocxium',47)\n" +
        ",('Scrap Metal','MK7 Adaptive Invulnerability Field','Tritanium',20196)\n" +
        ",('Scrap Metal','MK7 Adaptive Invulnerability Field','Pyerite',4896)\n" +
        ",('Scrap Metal','MK7 Adaptive Invulnerability Field','Mexallon',1674)\n" +
        ",('Scrap Metal','MK7 Adaptive Invulnerability Field','Isogen',296)\n" +
        ",('Scrap Metal','MK7 Adaptive Invulnerability Field','Nocxium',82)\n" +
        ",('Scrap Metal','MK7 Adaptive Invulnerability Field','Zydrine',29)\n" +
        ",('Scrap Metal','MK9 Adaptive Invulnerability Field','Tritanium',28362)\n" +
        ",('Scrap Metal','MK9 Adaptive Invulnerability Field','Pyerite',6875)\n" +
        ",('Scrap Metal','MK9 Adaptive Invulnerability Field','Mexallon',2351)\n" +
        ",('Scrap Metal','MK9 Adaptive Invulnerability Field','Isogen',415)\n" +
        ",('Scrap Metal','MK9 Adaptive Invulnerability Field','Nocxium',115)\n" +
        ",('Scrap Metal','MK9 Adaptive Invulnerability Field','Zydrine',40)\n" +
        ",('Scrap Metal','MK9 Adaptive Invulnerability Field','Megacyte',20)\n" +
        ",('Scrap Metal','MK5 Tracking Computer','Tritanium',27307)\n" +
        ",('Scrap Metal','MK5 Tracking Computer','Pyerite',6620)\n" +
        ",('Scrap Metal','MK5 Tracking Computer','Mexallon',2263)\n" +
        ",('Scrap Metal','MK5 Tracking Computer','Isogen',400)\n" +
        ",('Scrap Metal','MK5 Tracking Computer','Nocxium',111)\n" +
        ",('Scrap Metal','MK7 Tracking Computer','Tritanium',45838)\n" +
        ",('Scrap Metal','MK7 Tracking Computer','Pyerite',11112)\n" +
        ",('Scrap Metal','MK7 Tracking Computer','Mexallon',3799)\n" +
        ",('Scrap Metal','MK7 Tracking Computer','Isogen',671)\n" +
        ",('Scrap Metal','MK7 Tracking Computer','Nocxium',187)\n" +
        ",('Scrap Metal','MK7 Tracking Computer','Zydrine',66)\n" +
        ",('Scrap Metal','MK9 Tracking Computer','Tritanium',61632)\n" +
        ",('Scrap Metal','MK9 Tracking Computer','Pyerite',14941)\n" +
        ",('Scrap Metal','MK9 Tracking Computer','Mexallon',5108)\n" +
        ",('Scrap Metal','MK9 Tracking Computer','Isogen',903)\n" +
        ",('Scrap Metal','MK9 Tracking Computer','Nocxium',251)\n" +
        ",('Scrap Metal','MK9 Tracking Computer','Zydrine',88)\n" +
        ",('Scrap Metal','MK9 Tracking Computer','Megacyte',44)\n" +
        ",('Scrap Metal','MK5 Drone Navigation Computer','Tritanium',27307)\n" +
        ",('Scrap Metal','MK5 Drone Navigation Computer','Pyerite',6620)\n" +
        ",('Scrap Metal','MK5 Drone Navigation Computer','Mexallon',2263)\n" +
        ",('Scrap Metal','MK5 Drone Navigation Computer','Isogen',400)\n" +
        ",('Scrap Metal','MK5 Drone Navigation Computer','Nocxium',111)\n" +
        ",('Scrap Metal','MK7 Drone Navigation Computer','Tritanium',45838)\n" +
        ",('Scrap Metal','MK7 Drone Navigation Computer','Pyerite',11112)\n" +
        ",('Scrap Metal','MK7 Drone Navigation Computer','Mexallon',3799)\n" +
        ",('Scrap Metal','MK7 Drone Navigation Computer','Isogen',671)\n" +
        ",('Scrap Metal','MK7 Drone Navigation Computer','Nocxium',187)\n" +
        ",('Scrap Metal','MK7 Drone Navigation Computer','Zydrine',66)\n" +
        ",('Scrap Metal','MK9 Drone Navigation Computer','Tritanium',61632)\n" +
        ",('Scrap Metal','MK9 Drone Navigation Computer','Pyerite',14941)\n" +
        ",('Scrap Metal','MK9 Drone Navigation Computer','Mexallon',5108)\n" +
        ",('Scrap Metal','MK9 Drone Navigation Computer','Isogen',903)\n" +
        ",('Scrap Metal','MK9 Drone Navigation Computer','Nocxium',251)\n" +
        ",('Scrap Metal','MK9 Drone Navigation Computer','Zydrine',88)\n" +
        ",('Scrap Metal','MK9 Drone Navigation Computer','Megacyte',44)\n" +
        ",('Scrap Metal','MK5 Omnidirectional Tracking Link','Tritanium',27307)\n" +
        ",('Scrap Metal','MK5 Omnidirectional Tracking Link','Pyerite',6620)\n" +
        ",('Scrap Metal','MK5 Omnidirectional Tracking Link','Mexallon',2263)\n" +
        ",('Scrap Metal','MK5 Omnidirectional Tracking Link','Isogen',400)\n" +
        ",('Scrap Metal','MK5 Omnidirectional Tracking Link','Nocxium',111)\n" +
        ",('Scrap Metal','MK7 Omnidirectional Tracking Link','Tritanium',45838)\n" +
        ",('Scrap Metal','MK7 Omnidirectional Tracking Link','Pyerite',11112)\n" +
        ",('Scrap Metal','MK7 Omnidirectional Tracking Link','Mexallon',3799)\n" +
        ",('Scrap Metal','MK7 Omnidirectional Tracking Link','Isogen',671)\n" +
        ",('Scrap Metal','MK7 Omnidirectional Tracking Link','Nocxium',187)\n" +
        ",('Scrap Metal','MK7 Omnidirectional Tracking Link','Zydrine',66)\n" +
        ",('Scrap Metal','MK9 Omnidirectional Tracking Link','Tritanium',61632)\n" +
        ",('Scrap Metal','MK9 Omnidirectional Tracking Link','Pyerite',14941)\n" +
        ",('Scrap Metal','MK9 Omnidirectional Tracking Link','Mexallon',5108)\n" +
        ",('Scrap Metal','MK9 Omnidirectional Tracking Link','Isogen',903)\n" +
        ",('Scrap Metal','MK9 Omnidirectional Tracking Link','Nocxium',251)\n" +
        ",('Scrap Metal','MK9 Omnidirectional Tracking Link','Zydrine',88)\n" +
        ",('Scrap Metal','MK9 Omnidirectional Tracking Link','Megacyte',44)\n" +
        ",('Scrap Metal','MK5 Missile Guidance Computer','Tritanium',27307)\n" +
        ",('Scrap Metal','MK5 Missile Guidance Computer','Pyerite',6620)\n" +
        ",('Scrap Metal','MK5 Missile Guidance Computer','Mexallon',2263)\n" +
        ",('Scrap Metal','MK5 Missile Guidance Computer','Isogen',400)\n" +
        ",('Scrap Metal','MK5 Missile Guidance Computer','Nocxium',111)\n" +
        ",('Scrap Metal','MK7 Missile Guidance Computer','Tritanium',45838)\n" +
        ",('Scrap Metal','MK7 Missile Guidance Computer','Pyerite',11112)\n" +
        ",('Scrap Metal','MK7 Missile Guidance Computer','Mexallon',3799)\n" +
        ",('Scrap Metal','MK7 Missile Guidance Computer','Isogen',671)\n" +
        ",('Scrap Metal','MK7 Missile Guidance Computer','Nocxium',187)\n" +
        ",('Scrap Metal','MK7 Missile Guidance Computer','Zydrine',66)\n" +
        ",('Scrap Metal','MK9 Missile Guidance Computer','Tritanium',61632)\n" +
        ",('Scrap Metal','MK9 Missile Guidance Computer','Pyerite',14941)\n" +
        ",('Scrap Metal','MK9 Missile Guidance Computer','Mexallon',5108)\n" +
        ",('Scrap Metal','MK9 Missile Guidance Computer','Isogen',903)\n" +
        ",('Scrap Metal','MK9 Missile Guidance Computer','Nocxium',251)\n" +
        ",('Scrap Metal','MK9 Missile Guidance Computer','Zydrine',88)\n" +
        ",('Scrap Metal','MK9 Missile Guidance Computer','Megacyte',44)\n" +
        ",('Scrap Metal','MK1 Gyrostabilizer','Tritanium',5000)\n" +
        ",('Scrap Metal','MK1 Gyrostabilizer','Pyerite',1212)\n" +
        ",('Scrap Metal','MK3 Gyrostabilizer','Tritanium',4858)\n" +
        ",('Scrap Metal','MK3 Gyrostabilizer','Pyerite',1177)\n" +
        ",('Scrap Metal','MK3 Gyrostabilizer','Mexallon',402)\n" +
        ",('Scrap Metal','MK3 Gyrostabilizer','Isogen',71)\n" +
        ",('Scrap Metal','MK5 Gyrostabilizer','Tritanium',13653)\n" +
        ",('Scrap Metal','MK5 Gyrostabilizer','Pyerite',3310)\n" +
        ",('Scrap Metal','MK5 Gyrostabilizer','Mexallon',1131)\n" +
        ",('Scrap Metal','MK5 Gyrostabilizer','Isogen',200)\n" +
        ",('Scrap Metal','MK5 Gyrostabilizer','Nocxium',55)\n" +
        ",('Scrap Metal','MK7 Gyrostabilizer','Tritanium',22919)\n" +
        ",('Scrap Metal','MK7 Gyrostabilizer','Pyerite',5556)\n" +
        ",('Scrap Metal','MK7 Gyrostabilizer','Mexallon',1899)\n" +
        ",('Scrap Metal','MK7 Gyrostabilizer','Isogen',335)\n" +
        ",('Scrap Metal','MK7 Gyrostabilizer','Nocxium',93)\n" +
        ",('Scrap Metal','MK7 Gyrostabilizer','Zydrine',33)\n" +
        ",('Scrap Metal','MK9 Gyrostabilizer','Tritanium',30816)\n" +
        ",('Scrap Metal','MK9 Gyrostabilizer','Pyerite',7470)\n" +
        ",('Scrap Metal','MK9 Gyrostabilizer','Mexallon',2554)\n" +
        ",('Scrap Metal','MK9 Gyrostabilizer','Isogen',451)\n" +
        ",('Scrap Metal','MK9 Gyrostabilizer','Nocxium',125)\n" +
        ",('Scrap Metal','MK9 Gyrostabilizer','Zydrine',44)\n" +
        ",('Scrap Metal','MK9 Gyrostabilizer','Megacyte',22)\n" +
        ",('Scrap Metal','MK5 Damage Control','Tritanium',23080)\n" +
        ",('Scrap Metal','MK5 Damage Control','Pyerite',5595)\n" +
        ",('Scrap Metal','MK5 Damage Control','Mexallon',1913)\n" +
        ",('Scrap Metal','MK5 Damage Control','Isogen',338)\n" +
        ",('Scrap Metal','MK5 Damage Control','Nocxium',94)\n" +
        ",('Scrap Metal','MK7 Damage Control','Tritanium',40392)\n" +
        ",('Scrap Metal','MK7 Damage Control','Pyerite',9792)\n" +
        ",('Scrap Metal','MK7 Damage Control','Mexallon',3348)\n" +
        ",('Scrap Metal','MK7 Damage Control','Isogen',592)\n" +
        ",('Scrap Metal','MK7 Damage Control','Nocxium',164)\n" +
        ",('Scrap Metal','MK7 Damage Control','Zydrine',58)\n" +
        ",('Scrap Metal','MK9 Damage Control','Tritanium',56724)\n" +
        ",('Scrap Metal','MK9 Damage Control','Pyerite',13751)\n" +
        ",('Scrap Metal','MK9 Damage Control','Mexallon',4702)\n" +
        ",('Scrap Metal','MK9 Damage Control','Isogen',831)\n" +
        ",('Scrap Metal','MK9 Damage Control','Nocxium',231)\n" +
        ",('Scrap Metal','MK9 Damage Control','Zydrine',81)\n" +
        ",('Scrap Metal','MK9 Damage Control','Megacyte',40)\n" +
        ",('Scrap Metal','MK1 Small Armor Repairer','Tritanium',1000)\n" +
        ",('Scrap Metal','MK1 Small Armor Repairer','Pyerite',242)\n" +
        ",('Scrap Metal','MK3 Small Armor Repairer','Tritanium',676)\n" +
        ",('Scrap Metal','MK3 Small Armor Repairer','Pyerite',164)\n" +
        ",('Scrap Metal','MK3 Small Armor Repairer','Mexallon',56)\n" +
        ",('Scrap Metal','MK3 Small Armor Repairer','Isogen',9)\n" +
        ",('Scrap Metal','MK5 Small Armor Repairer','Tritanium',1731)\n" +
        ",('Scrap Metal','MK5 Small Armor Repairer','Pyerite',419)\n" +
        ",('Scrap Metal','MK5 Small Armor Repairer','Mexallon',143)\n" +
        ",('Scrap Metal','MK5 Small Armor Repairer','Isogen',25)\n" +
        ",('Scrap Metal','MK5 Small Armor Repairer','Nocxium',7)\n" +
        ",('Scrap Metal','MK7 Small Armor Repairer','Tritanium',2957)\n" +
        ",('Scrap Metal','MK7 Small Armor Repairer','Pyerite',716)\n" +
        ",('Scrap Metal','MK7 Small Armor Repairer','Mexallon',245)\n" +
        ",('Scrap Metal','MK7 Small Armor Repairer','Isogen',43)\n" +
        ",('Scrap Metal','MK7 Small Armor Repairer','Nocxium',12)\n" +
        ",('Scrap Metal','MK7 Small Armor Repairer','Zydrine',4)\n" +
        ",('Scrap Metal','MK9 Small Armor Repairer','Tritanium',4087)\n" +
        ",('Scrap Metal','MK9 Small Armor Repairer','Pyerite',991)\n" +
        ",('Scrap Metal','MK9 Small Armor Repairer','Mexallon',338)\n" +
        ",('Scrap Metal','MK9 Small Armor Repairer','Isogen',59)\n" +
        ",('Scrap Metal','MK9 Small Armor Repairer','Nocxium',16)\n" +
        ",('Scrap Metal','MK9 Small Armor Repairer','Zydrine',5)\n" +
        ",('Scrap Metal','MK9 Small Armor Repairer','Megacyte',2)\n" +
        ",('Scrap Metal','MK5 Medium Armor Repairer','Tritanium',6926)\n" +
        ",('Scrap Metal','MK5 Medium Armor Repairer','Pyerite',1679)\n" +
        ",('Scrap Metal','MK5 Medium Armor Repairer','Mexallon',574)\n" +
        ",('Scrap Metal','MK5 Medium Armor Repairer','Isogen',101)\n" +
        ",('Scrap Metal','MK5 Medium Armor Repairer','Nocxium',28)\n" +
        ",('Scrap Metal','MK7 Medium Armor Repairer','Tritanium',11828)\n" +
        ",('Scrap Metal','MK7 Medium Armor Repairer','Pyerite',2867)\n" +
        ",('Scrap Metal','MK7 Medium Armor Repairer','Mexallon',980)\n" +
        ",('Scrap Metal','MK7 Medium Armor Repairer','Isogen',173)\n" +
        ",('Scrap Metal','MK7 Medium Armor Repairer','Nocxium',48)\n" +
        ",('Scrap Metal','MK7 Medium Armor Repairer','Zydrine',17)\n" +
        ",('Scrap Metal','MK9 Medium Armor Repairer','Tritanium',16351)\n" +
        ",('Scrap Metal','MK9 Medium Armor Repairer','Pyerite',3964)\n" +
        ",('Scrap Metal','MK9 Medium Armor Repairer','Mexallon',1355)\n" +
        ",('Scrap Metal','MK9 Medium Armor Repairer','Isogen',239)\n" +
        ",('Scrap Metal','MK9 Medium Armor Repairer','Nocxium',66)\n" +
        ",('Scrap Metal','MK9 Medium Armor Repairer','Zydrine',23)\n" +
        ",('Scrap Metal','MK9 Medium Armor Repairer','Megacyte',11)\n" +
        ",('Scrap Metal','MK9 Large Armor Repairer','Tritanium',65406)\n" +
        ",('Scrap Metal','MK9 Large Armor Repairer','Pyerite',15856)\n" +
        ",('Scrap Metal','MK9 Large Armor Repairer','Mexallon',5421)\n" +
        ",('Scrap Metal','MK9 Large Armor Repairer','Isogen',958)\n" +
        ",('Scrap Metal','MK9 Large Armor Repairer','Nocxium',267)\n" +
        ",('Scrap Metal','MK9 Large Armor Repairer','Zydrine',94)\n" +
        ",('Scrap Metal','MK9 Large Armor Repairer','Megacyte',47)\n" +
        ",('Scrap Metal','MK1 Heat Sink','Tritanium',5000)\n" +
        ",('Scrap Metal','MK1 Heat Sink','Pyerite',1212)\n" +
        ",('Scrap Metal','MK3 Heat Sink','Tritanium',4858)\n" +
        ",('Scrap Metal','MK3 Heat Sink','Pyerite',1177)\n" +
        ",('Scrap Metal','MK3 Heat Sink','Mexallon',402)\n" +
        ",('Scrap Metal','MK3 Heat Sink','Isogen',71)\n" +
        ",('Scrap Metal','MK5 Heat Sink','Tritanium',13653)\n" +
        ",('Scrap Metal','MK5 Heat Sink','Pyerite',3310)\n" +
        ",('Scrap Metal','MK5 Heat Sink','Mexallon',1131)\n" +
        ",('Scrap Metal','MK5 Heat Sink','Isogen',200)\n" +
        ",('Scrap Metal','MK5 Heat Sink','Nocxium',55)\n" +
        ",('Scrap Metal','MK7 Heat Sink','Tritanium',22919)\n" +
        ",('Scrap Metal','MK7 Heat Sink','Pyerite',5556)\n" +
        ",('Scrap Metal','MK7 Heat Sink','Mexallon',1899)\n" +
        ",('Scrap Metal','MK7 Heat Sink','Isogen',335)\n" +
        ",('Scrap Metal','MK7 Heat Sink','Nocxium',93)\n" +
        ",('Scrap Metal','MK7 Heat Sink','Zydrine',33)\n" +
        ",('Scrap Metal','MK9 Heat Sink','Tritanium',30816)\n" +
        ",('Scrap Metal','MK9 Heat Sink','Pyerite',7470)\n" +
        ",('Scrap Metal','MK9 Heat Sink','Mexallon',2554)\n" +
        ",('Scrap Metal','MK9 Heat Sink','Isogen',451)\n" +
        ",('Scrap Metal','MK9 Heat Sink','Nocxium',125)\n" +
        ",('Scrap Metal','MK9 Heat Sink','Zydrine',44)\n" +
        ",('Scrap Metal','MK9 Heat Sink','Megacyte',22)\n" +
        ",('Scrap Metal','MK1 Magnetic Field Stabilizer','Tritanium',5000)\n" +
        ",('Scrap Metal','MK1 Magnetic Field Stabilizer','Pyerite',1212)\n" +
        ",('Scrap Metal','MK3 Magnetic Field Stabilizer','Tritanium',4858)\n" +
        ",('Scrap Metal','MK3 Magnetic Field Stabilizer','Pyerite',1177)\n" +
        ",('Scrap Metal','MK3 Magnetic Field Stabilizer','Mexallon',402)\n" +
        ",('Scrap Metal','MK3 Magnetic Field Stabilizer','Isogen',71)\n" +
        ",('Scrap Metal','MK5 Magnetic Field Stabilizer','Tritanium',13653)\n" +
        ",('Scrap Metal','MK5 Magnetic Field Stabilizer','Pyerite',3310)\n" +
        ",('Scrap Metal','MK5 Magnetic Field Stabilizer','Mexallon',1131)\n" +
        ",('Scrap Metal','MK5 Magnetic Field Stabilizer','Isogen',200)\n" +
        ",('Scrap Metal','MK5 Magnetic Field Stabilizer','Nocxium',55)\n" +
        ",('Scrap Metal','MK7 Magnetic Field Stabilizer','Tritanium',22919)\n" +
        ",('Scrap Metal','MK7 Magnetic Field Stabilizer','Pyerite',5556)\n" +
        ",('Scrap Metal','MK7 Magnetic Field Stabilizer','Mexallon',1899)\n" +
        ",('Scrap Metal','MK7 Magnetic Field Stabilizer','Isogen',335)\n" +
        ",('Scrap Metal','MK7 Magnetic Field Stabilizer','Nocxium',93)\n" +
        ",('Scrap Metal','MK7 Magnetic Field Stabilizer','Zydrine',33)\n" +
        ",('Scrap Metal','MK9 Magnetic Field Stabilizer','Tritanium',30816)\n" +
        ",('Scrap Metal','MK9 Magnetic Field Stabilizer','Pyerite',7470)\n" +
        ",('Scrap Metal','MK9 Magnetic Field Stabilizer','Mexallon',2554)\n" +
        ",('Scrap Metal','MK9 Magnetic Field Stabilizer','Isogen',451)\n" +
        ",('Scrap Metal','MK9 Magnetic Field Stabilizer','Nocxium',125)\n" +
        ",('Scrap Metal','MK9 Magnetic Field Stabilizer','Zydrine',44)\n" +
        ",('Scrap Metal','MK9 Magnetic Field Stabilizer','Megacyte',22)\n" +
        ",('Scrap Metal','MK1 Warp Core Stabilizer','Tritanium',2000)\n" +
        ",('Scrap Metal','MK1 Warp Core Stabilizer','Pyerite',484)\n" +
        ",('Scrap Metal','MK3 Warp Core Stabilizer','Tritanium',1943)\n" +
        ",('Scrap Metal','MK3 Warp Core Stabilizer','Pyerite',471)\n" +
        ",('Scrap Metal','MK3 Warp Core Stabilizer','Mexallon',161)\n" +
        ",('Scrap Metal','MK3 Warp Core Stabilizer','Isogen',28)\n" +
        ",('Scrap Metal','MK5 Warp Core Stabilizer','Tritanium',5461)\n" +
        ",('Scrap Metal','MK5 Warp Core Stabilizer','Pyerite',1324)\n" +
        ",('Scrap Metal','MK5 Warp Core Stabilizer','Mexallon',452)\n" +
        ",('Scrap Metal','MK5 Warp Core Stabilizer','Isogen',80)\n" +
        ",('Scrap Metal','MK5 Warp Core Stabilizer','Nocxium',22)\n" +
        ",('Scrap Metal','MK7 Warp Core Stabilizer','Tritanium',9167)\n" +
        ",('Scrap Metal','MK7 Warp Core Stabilizer','Pyerite',2222)\n" +
        ",('Scrap Metal','MK7 Warp Core Stabilizer','Mexallon',759)\n" +
        ",('Scrap Metal','MK7 Warp Core Stabilizer','Isogen',134)\n" +
        ",('Scrap Metal','MK7 Warp Core Stabilizer','Nocxium',37)\n" +
        ",('Scrap Metal','MK7 Warp Core Stabilizer','Zydrine',13)\n" +
        ",('Scrap Metal','MK9 Warp Core Stabilizer','Tritanium',12326)\n" +
        ",('Scrap Metal','MK9 Warp Core Stabilizer','Pyerite',2988)\n" +
        ",('Scrap Metal','MK9 Warp Core Stabilizer','Mexallon',1021)\n" +
        ",('Scrap Metal','MK9 Warp Core Stabilizer','Isogen',180)\n" +
        ",('Scrap Metal','MK9 Warp Core Stabilizer','Nocxium',50)\n" +
        ",('Scrap Metal','MK9 Warp Core Stabilizer','Zydrine',17)\n" +
        ",('Scrap Metal','MK9 Warp Core Stabilizer','Megacyte',8)\n" +
        ",('Scrap Metal','MK5 Adaptive Armor Hardener','Tritanium',11540)\n" +
        ",('Scrap Metal','MK5 Adaptive Armor Hardener','Pyerite',2797)\n" +
        ",('Scrap Metal','MK5 Adaptive Armor Hardener','Mexallon',956)\n" +
        ",('Scrap Metal','MK5 Adaptive Armor Hardener','Isogen',169)\n" +
        ",('Scrap Metal','MK5 Adaptive Armor Hardener','Nocxium',47)\n" +
        ",('Scrap Metal','MK7 Adaptive Armor Hardener','Tritanium',20196)\n" +
        ",('Scrap Metal','MK7 Adaptive Armor Hardener','Pyerite',4896)\n" +
        ",('Scrap Metal','MK7 Adaptive Armor Hardener','Mexallon',1674)\n" +
        ",('Scrap Metal','MK7 Adaptive Armor Hardener','Isogen',296)\n" +
        ",('Scrap Metal','MK7 Adaptive Armor Hardener','Nocxium',82)\n" +
        ",('Scrap Metal','MK7 Adaptive Armor Hardener','Zydrine',29)\n" +
        ",('Scrap Metal','MK9 Adaptive Armor Hardener','Tritanium',28362)\n" +
        ",('Scrap Metal','MK9 Adaptive Armor Hardener','Pyerite',6875)\n" +
        ",('Scrap Metal','MK9 Adaptive Armor Hardener','Mexallon',2351)\n" +
        ",('Scrap Metal','MK9 Adaptive Armor Hardener','Isogen',415)\n" +
        ",('Scrap Metal','MK9 Adaptive Armor Hardener','Nocxium',115)\n" +
        ",('Scrap Metal','MK9 Adaptive Armor Hardener','Zydrine',40)\n" +
        ",('Scrap Metal','MK9 Adaptive Armor Hardener','Megacyte',20)\n" +
        ",('Scrap Metal','MK1 100mm Reinforced Steel Plate','Tritanium',3000)\n" +
        ",('Scrap Metal','MK1 100mm Reinforced Steel Plate','Pyerite',727)\n" +
        ",('Scrap Metal','MK3 100mm Reinforced Steel Plate','Tritanium',2915)\n" +
        ",('Scrap Metal','MK3 100mm Reinforced Steel Plate','Pyerite',706)\n" +
        ",('Scrap Metal','MK3 100mm Reinforced Steel Plate','Mexallon',241)\n" +
        ",('Scrap Metal','MK3 100mm Reinforced Steel Plate','Isogen',42)\n" +
        ",('Scrap Metal','MK5 100mm Reinforced Steel Plate','Tritanium',8192)\n" +
        ",('Scrap Metal','MK5 100mm Reinforced Steel Plate','Pyerite',1986)\n" +
        ",('Scrap Metal','MK5 100mm Reinforced Steel Plate','Mexallon',679)\n" +
        ",('Scrap Metal','MK5 100mm Reinforced Steel Plate','Isogen',120)\n" +
        ",('Scrap Metal','MK5 100mm Reinforced Steel Plate','Nocxium',33)\n" +
        ",('Scrap Metal','MK7 100mm Reinforced Steel Plate','Tritanium',13751)\n" +
        ",('Scrap Metal','MK7 100mm Reinforced Steel Plate','Pyerite',3333)\n" +
        ",('Scrap Metal','MK7 100mm Reinforced Steel Plate','Mexallon',1139)\n" +
        ",('Scrap Metal','MK7 100mm Reinforced Steel Plate','Isogen',201)\n" +
        ",('Scrap Metal','MK7 100mm Reinforced Steel Plate','Nocxium',56)\n" +
        ",('Scrap Metal','MK7 100mm Reinforced Steel Plate','Zydrine',19)\n" +
        ",('Scrap Metal','MK9 100mm Reinforced Steel Plate','Tritanium',18489)\n" +
        ",('Scrap Metal','MK9 100mm Reinforced Steel Plate','Pyerite',4482)\n" +
        ",('Scrap Metal','MK9 100mm Reinforced Steel Plate','Mexallon',1532)\n" +
        ",('Scrap Metal','MK9 100mm Reinforced Steel Plate','Isogen',270)\n" +
        ",('Scrap Metal','MK9 100mm Reinforced Steel Plate','Nocxium',75)\n" +
        ",('Scrap Metal','MK9 100mm Reinforced Steel Plate','Zydrine',26)\n" +
        ",('Scrap Metal','MK9 100mm Reinforced Steel Plate','Megacyte',13)\n" +
        ",('Scrap Metal','MK3 200mm Reinforced Steel Plate','Tritanium',7288)\n" +
        ",('Scrap Metal','MK3 200mm Reinforced Steel Plate','Pyerite',1766)\n" +
        ",('Scrap Metal','MK3 200mm Reinforced Steel Plate','Mexallon',604)\n" +
        ",('Scrap Metal','MK3 200mm Reinforced Steel Plate','Isogen',106)\n" +
        ",('Scrap Metal','MK5 200mm Reinforced Steel Plate','Tritanium',20480)\n" +
        ",('Scrap Metal','MK5 200mm Reinforced Steel Plate','Pyerite',4965)\n" +
        ",('Scrap Metal','MK5 200mm Reinforced Steel Plate','Mexallon',1697)\n" +
        ",('Scrap Metal','MK5 200mm Reinforced Steel Plate','Isogen',300)\n" +
        ",('Scrap Metal','MK5 200mm Reinforced Steel Plate','Nocxium',83)\n" +
        ",('Scrap Metal','MK7 200mm Reinforced Steel Plate','Tritanium',34378)\n" +
        ",('Scrap Metal','MK7 200mm Reinforced Steel Plate','Pyerite',8334)\n" +
        ",('Scrap Metal','MK7 200mm Reinforced Steel Plate','Mexallon',2849)\n" +
        ",('Scrap Metal','MK7 200mm Reinforced Steel Plate','Isogen',503)\n" +
        ",('Scrap Metal','MK7 200mm Reinforced Steel Plate','Nocxium',140)\n" +
        ",('Scrap Metal','MK7 200mm Reinforced Steel Plate','Zydrine',49)\n" +
        ",('Scrap Metal','MK9 200mm Reinforced Steel Plate','Tritanium',46224)\n" +
        ",('Scrap Metal','MK9 200mm Reinforced Steel Plate','Pyerite',11206)\n" +
        ",('Scrap Metal','MK9 200mm Reinforced Steel Plate','Mexallon',3831)\n" +
        ",('Scrap Metal','MK9 200mm Reinforced Steel Plate','Isogen',677)\n" +
        ",('Scrap Metal','MK9 200mm Reinforced Steel Plate','Nocxium',188)\n" +
        ",('Scrap Metal','MK9 200mm Reinforced Steel Plate','Zydrine',66)\n" +
        ",('Scrap Metal','MK9 200mm Reinforced Steel Plate','Megacyte',33)\n" +
        ",('Scrap Metal','MK5 400mm Reinforced Steel Plate','Tritanium',32768)\n" +
        ",('Scrap Metal','MK5 400mm Reinforced Steel Plate','Pyerite',7944)\n" +
        ",('Scrap Metal','MK5 400mm Reinforced Steel Plate','Mexallon',2716)\n" +
        ",('Scrap Metal','MK5 400mm Reinforced Steel Plate','Isogen',480)\n" +
        ",('Scrap Metal','MK5 400mm Reinforced Steel Plate','Nocxium',133)\n" +
        ",('Scrap Metal','MK7 400mm Reinforced Steel Plate','Tritanium',55005)\n" +
        ",('Scrap Metal','MK7 400mm Reinforced Steel Plate','Pyerite',13335)\n" +
        ",('Scrap Metal','MK7 400mm Reinforced Steel Plate','Mexallon',4559)\n" +
        ",('Scrap Metal','MK7 400mm Reinforced Steel Plate','Isogen',806)\n" +
        ",('Scrap Metal','MK7 400mm Reinforced Steel Plate','Nocxium',224)\n" +
        ",('Scrap Metal','MK7 400mm Reinforced Steel Plate','Zydrine',79)\n" +
        ",('Scrap Metal','MK9 400mm Reinforced Steel Plate','Tritanium',73958)\n" +
        ",('Scrap Metal','MK9 400mm Reinforced Steel Plate','Pyerite',17929)\n" +
        ",('Scrap Metal','MK9 400mm Reinforced Steel Plate','Mexallon',6130)\n" +
        ",('Scrap Metal','MK9 400mm Reinforced Steel Plate','Isogen',1083)\n" +
        ",('Scrap Metal','MK9 400mm Reinforced Steel Plate','Nocxium',302)\n" +
        ",('Scrap Metal','MK9 400mm Reinforced Steel Plate','Zydrine',106)\n" +
        ",('Scrap Metal','MK9 400mm Reinforced Steel Plate','Megacyte',53)\n" +
        ",('Scrap Metal','MK5 800mm Reinforced Steel Plate','Tritanium',65537)\n" +
        ",('Scrap Metal','MK5 800mm Reinforced Steel Plate','Pyerite',15888)\n" +
        ",('Scrap Metal','MK5 800mm Reinforced Steel Plate','Mexallon',5432)\n" +
        ",('Scrap Metal','MK5 800mm Reinforced Steel Plate','Isogen',960)\n" +
        ",('Scrap Metal','MK5 800mm Reinforced Steel Plate','Nocxium',267)\n" +
        ",('Scrap Metal','MK7 800mm Reinforced Steel Plate','Tritanium',110011)\n" +
        ",('Scrap Metal','MK7 800mm Reinforced Steel Plate','Pyerite',26670)\n" +
        ",('Scrap Metal','MK7 800mm Reinforced Steel Plate','Mexallon',9119)\n" +
        ",('Scrap Metal','MK7 800mm Reinforced Steel Plate','Isogen',1612)\n" +
        ",('Scrap Metal','MK7 800mm Reinforced Steel Plate','Nocxium',449)\n" +
        ",('Scrap Metal','MK7 800mm Reinforced Steel Plate','Zydrine',158)\n" +
        ",('Scrap Metal','MK9 800mm Reinforced Steel Plate','Tritanium',147917)\n" +
        ",('Scrap Metal','MK9 800mm Reinforced Steel Plate','Pyerite',35859)\n" +
        ",('Scrap Metal','MK9 800mm Reinforced Steel Plate','Mexallon',12261)\n" +
        ",('Scrap Metal','MK9 800mm Reinforced Steel Plate','Isogen',2167)\n" +
        ",('Scrap Metal','MK9 800mm Reinforced Steel Plate','Nocxium',604)\n" +
        ",('Scrap Metal','MK9 800mm Reinforced Steel Plate','Zydrine',213)\n" +
        ",('Scrap Metal','MK9 800mm Reinforced Steel Plate','Megacyte',106)\n" +
        ",('Scrap Metal','MK9 1600mm Reinforced Steel Plate','Tritanium',221875)\n" +
        ",('Scrap Metal','MK9 1600mm Reinforced Steel Plate','Pyerite',53789)\n" +
        ",('Scrap Metal','MK9 1600mm Reinforced Steel Plate','Mexallon',18391)\n" +
        ",('Scrap Metal','MK9 1600mm Reinforced Steel Plate','Isogen',3251)\n" +
        ",('Scrap Metal','MK9 1600mm Reinforced Steel Plate','Nocxium',906)\n" +
        ",('Scrap Metal','MK9 1600mm Reinforced Steel Plate','Zydrine',319)\n" +
        ",('Scrap Metal','MK9 1600mm Reinforced Steel Plate','Megacyte',159)\n" +
        ",('Scrap Metal','MK1 Ballistic Control System','Tritanium',5000)\n" +
        ",('Scrap Metal','MK1 Ballistic Control System','Pyerite',1212)\n" +
        ",('Scrap Metal','MK3 Ballistic Control System','Tritanium',4858)\n" +
        ",('Scrap Metal','MK3 Ballistic Control System','Pyerite',1177)\n" +
        ",('Scrap Metal','MK3 Ballistic Control System','Mexallon',402)\n" +
        ",('Scrap Metal','MK3 Ballistic Control System','Isogen',71)\n" +
        ",('Scrap Metal','MK5 Ballistic Control System','Tritanium',13653)\n" +
        ",('Scrap Metal','MK5 Ballistic Control System','Pyerite',3310)\n" +
        ",('Scrap Metal','MK5 Ballistic Control System','Mexallon',1131)\n" +
        ",('Scrap Metal','MK5 Ballistic Control System','Isogen',200)\n" +
        ",('Scrap Metal','MK5 Ballistic Control System','Nocxium',55)\n" +
        ",('Scrap Metal','MK7 Ballistic Control System','Tritanium',22919)\n" +
        ",('Scrap Metal','MK7 Ballistic Control System','Pyerite',5556)\n" +
        ",('Scrap Metal','MK7 Ballistic Control System','Mexallon',1899)\n" +
        ",('Scrap Metal','MK7 Ballistic Control System','Isogen',335)\n" +
        ",('Scrap Metal','MK7 Ballistic Control System','Nocxium',93)\n" +
        ",('Scrap Metal','MK7 Ballistic Control System','Zydrine',33)\n" +
        ",('Scrap Metal','MK9 Ballistic Control System','Tritanium',30816)\n" +
        ",('Scrap Metal','MK9 Ballistic Control System','Pyerite',7470)\n" +
        ",('Scrap Metal','MK9 Ballistic Control System','Mexallon',2554)\n" +
        ",('Scrap Metal','MK9 Ballistic Control System','Isogen',451)\n" +
        ",('Scrap Metal','MK9 Ballistic Control System','Nocxium',125)\n" +
        ",('Scrap Metal','MK9 Ballistic Control System','Zydrine',44)\n" +
        ",('Scrap Metal','MK9 Ballistic Control System','Megacyte',22)\n" +
        ",('Scrap Metal','MK3 Drone Damage Amplifier','Tritanium',4858)\n" +
        ",('Scrap Metal','MK3 Drone Damage Amplifier','Pyerite',1177)\n" +
        ",('Scrap Metal','MK3 Drone Damage Amplifier','Mexallon',402)\n" +
        ",('Scrap Metal','MK3 Drone Damage Amplifier','Isogen',71)\n" +
        ",('Scrap Metal','MK5 Drone Damage Amplifier','Tritanium',13653)\n" +
        ",('Scrap Metal','MK5 Drone Damage Amplifier','Pyerite',3310)\n" +
        ",('Scrap Metal','MK5 Drone Damage Amplifier','Mexallon',1131)\n" +
        ",('Scrap Metal','MK5 Drone Damage Amplifier','Isogen',200)\n" +
        ",('Scrap Metal','MK5 Drone Damage Amplifier','Nocxium',55)\n" +
        ",('Scrap Metal','MK7 Drone Damage Amplifier','Tritanium',22919)\n" +
        ",('Scrap Metal','MK7 Drone Damage Amplifier','Pyerite',5556)\n" +
        ",('Scrap Metal','MK7 Drone Damage Amplifier','Mexallon',1899)\n" +
        ",('Scrap Metal','MK7 Drone Damage Amplifier','Isogen',335)\n" +
        ",('Scrap Metal','MK7 Drone Damage Amplifier','Nocxium',93)\n" +
        ",('Scrap Metal','MK7 Drone Damage Amplifier','Zydrine',33)\n" +
        ",('Scrap Metal','MK9 Drone Damage Amplifier','Tritanium',30816)\n" +
        ",('Scrap Metal','MK9 Drone Damage Amplifier','Pyerite',7470)\n" +
        ",('Scrap Metal','MK9 Drone Damage Amplifier','Mexallon',2554)\n" +
        ",('Scrap Metal','MK9 Drone Damage Amplifier','Isogen',451)\n" +
        ",('Scrap Metal','MK9 Drone Damage Amplifier','Nocxium',125)\n" +
        ",('Scrap Metal','MK9 Drone Damage Amplifier','Zydrine',44)\n" +
        ",('Scrap Metal','MK9 Drone Damage Amplifier','Megacyte',22)\n" +
        ",('Scrap Metal','MK3 Inertial Stabilizer','Tritanium',1943)\n" +
        ",('Scrap Metal','MK3 Inertial Stabilizer','Pyerite',471)\n" +
        ",('Scrap Metal','MK3 Inertial Stabilizer','Mexallon',161)\n" +
        ",('Scrap Metal','MK3 Inertial Stabilizer','Isogen',28)\n" +
        ",('Scrap Metal','MK5 Inertial Stabilizer','Tritanium',5461)\n" +
        ",('Scrap Metal','MK5 Inertial Stabilizer','Pyerite',1324)\n" +
        ",('Scrap Metal','MK5 Inertial Stabilizer','Mexallon',452)\n" +
        ",('Scrap Metal','MK5 Inertial Stabilizer','Isogen',80)\n" +
        ",('Scrap Metal','MK5 Inertial Stabilizer','Nocxium',22)\n" +
        ",('Scrap Metal','MK7 Inertial Stabilizer','Tritanium',9167)\n" +
        ",('Scrap Metal','MK7 Inertial Stabilizer','Pyerite',2222)\n" +
        ",('Scrap Metal','MK7 Inertial Stabilizer','Mexallon',759)\n" +
        ",('Scrap Metal','MK7 Inertial Stabilizer','Isogen',134)\n" +
        ",('Scrap Metal','MK7 Inertial Stabilizer','Nocxium',37)\n" +
        ",('Scrap Metal','MK7 Inertial Stabilizer','Zydrine',13)\n" +
        ",('Scrap Metal','MK9 Inertial Stabilizer','Tritanium',12326)\n" +
        ",('Scrap Metal','MK9 Inertial Stabilizer','Pyerite',2988)\n" +
        ",('Scrap Metal','MK9 Inertial Stabilizer','Mexallon',1021)\n" +
        ",('Scrap Metal','MK9 Inertial Stabilizer','Isogen',180)\n" +
        ",('Scrap Metal','MK9 Inertial Stabilizer','Nocxium',50)\n" +
        ",('Scrap Metal','MK9 Inertial Stabilizer','Zydrine',17)\n" +
        ",('Scrap Metal','MK9 Inertial Stabilizer','Megacyte',8)\n" +
        ",('Scrap Metal','MK1 Reactive Armor Hardener','Tritanium',2000)\n" +
        ",('Scrap Metal','MK1 Reactive Armor Hardener','Pyerite',484)\n" +
        ",('Scrap Metal','MK3 Reactive Armor Hardener','Tritanium',1780)\n" +
        ",('Scrap Metal','MK3 Reactive Armor Hardener','Pyerite',431)\n" +
        ",('Scrap Metal','MK3 Reactive Armor Hardener','Mexallon',147)\n" +
        ",('Scrap Metal','MK3 Reactive Armor Hardener','Isogen',26)\n" +
        ",('Scrap Metal','MK5 Reactive Armor Hardener','Tritanium',4616)\n" +
        ",('Scrap Metal','MK5 Reactive Armor Hardener','Pyerite',1119)\n" +
        ",('Scrap Metal','MK5 Reactive Armor Hardener','Mexallon',382)\n" +
        ",('Scrap Metal','MK5 Reactive Armor Hardener','Isogen',67)\n" +
        ",('Scrap Metal','MK5 Reactive Armor Hardener','Nocxium',18)\n" +
        ",('Scrap Metal','MK7 Reactive Armor Hardener','Tritanium',8078)\n" +
        ",('Scrap Metal','MK7 Reactive Armor Hardener','Pyerite',1958)\n" +
        ",('Scrap Metal','MK7 Reactive Armor Hardener','Mexallon',669)\n" +
        ",('Scrap Metal','MK7 Reactive Armor Hardener','Isogen',118)\n" +
        ",('Scrap Metal','MK7 Reactive Armor Hardener','Nocxium',32)\n" +
        ",('Scrap Metal','MK7 Reactive Armor Hardener','Zydrine',11)\n" +
        ",('Scrap Metal','MK9 Reactive Armor Hardener','Tritanium',11344)\n" +
        ",('Scrap Metal','MK9 Reactive Armor Hardener','Pyerite',2750)\n" +
        ",('Scrap Metal','MK9 Reactive Armor Hardener','Mexallon',940)\n" +
        ",('Scrap Metal','MK9 Reactive Armor Hardener','Isogen',166)\n" +
        ",('Scrap Metal','MK9 Reactive Armor Hardener','Nocxium',46)\n" +
        ",('Scrap Metal','MK9 Reactive Armor Hardener','Zydrine',16)\n" +
        ",('Scrap Metal','MK9 Reactive Armor Hardener','Megacyte',8)\n" +
        ",('Scrap Metal','MK1 Reactive Shield Hardener','Tritanium',2000)\n" +
        ",('Scrap Metal','MK1 Reactive Shield Hardener','Pyerite',484)\n" +
        ",('Scrap Metal','MK3 Reactive Shield Hardener','Tritanium',1780)\n" +
        ",('Scrap Metal','MK3 Reactive Shield Hardener','Pyerite',431)\n" +
        ",('Scrap Metal','MK3 Reactive Shield Hardener','Mexallon',147)\n" +
        ",('Scrap Metal','MK3 Reactive Shield Hardener','Isogen',26)\n" +
        ",('Scrap Metal','MK5 Reactive Shield Hardener','Tritanium',4616)\n" +
        ",('Scrap Metal','MK5 Reactive Shield Hardener','Pyerite',1119)\n" +
        ",('Scrap Metal','MK5 Reactive Shield Hardener','Mexallon',382)\n" +
        ",('Scrap Metal','MK5 Reactive Shield Hardener','Isogen',67)\n" +
        ",('Scrap Metal','MK5 Reactive Shield Hardener','Nocxium',18)\n" +
        ",('Scrap Metal','MK7 Reactive Shield Hardener','Tritanium',8078)\n" +
        ",('Scrap Metal','MK7 Reactive Shield Hardener','Pyerite',1958)\n" +
        ",('Scrap Metal','MK7 Reactive Shield Hardener','Mexallon',669)\n" +
        ",('Scrap Metal','MK7 Reactive Shield Hardener','Isogen',118)\n" +
        ",('Scrap Metal','MK7 Reactive Shield Hardener','Nocxium',32)\n" +
        ",('Scrap Metal','MK7 Reactive Shield Hardener','Zydrine',11)\n" +
        ",('Scrap Metal','MK9 Reactive Shield Hardener','Tritanium',11344)\n" +
        ",('Scrap Metal','MK9 Reactive Shield Hardener','Pyerite',2750)\n" +
        ",('Scrap Metal','MK9 Reactive Shield Hardener','Mexallon',940)\n" +
        ",('Scrap Metal','MK9 Reactive Shield Hardener','Isogen',166)\n" +
        ",('Scrap Metal','MK9 Reactive Shield Hardener','Nocxium',46)\n" +
        ",('Scrap Metal','MK9 Reactive Shield Hardener','Zydrine',16)\n" +
        ",('Scrap Metal','MK9 Reactive Shield Hardener','Megacyte',8)\n" +
        ",('Scrap Metal','MK5 Small Shield Field Module','Tritanium',10922)\n" +
        ",('Scrap Metal','MK5 Small Shield Field Module','Pyerite',2648)\n" +
        ",('Scrap Metal','MK5 Small Shield Field Module','Mexallon',905)\n" +
        ",('Scrap Metal','MK5 Small Shield Field Module','Isogen',160)\n" +
        ",('Scrap Metal','MK5 Small Shield Field Module','Nocxium',44)\n" +
        ",('Scrap Metal','MK7 Small Shield Field Module','Tritanium',18335)\n" +
        ",('Scrap Metal','MK7 Small Shield Field Module','Pyerite',4445)\n" +
        ",('Scrap Metal','MK7 Small Shield Field Module','Mexallon',1519)\n" +
        ",('Scrap Metal','MK7 Small Shield Field Module','Isogen',268)\n" +
        ",('Scrap Metal','MK7 Small Shield Field Module','Nocxium',74)\n" +
        ",('Scrap Metal','MK7 Small Shield Field Module','Zydrine',26)\n" +
        ",('Scrap Metal','MK9 Small Shield Field Module','Tritanium',24652)\n" +
        ",('Scrap Metal','MK9 Small Shield Field Module','Pyerite',5976)\n" +
        ",('Scrap Metal','MK9 Small Shield Field Module','Mexallon',2043)\n" +
        ",('Scrap Metal','MK9 Small Shield Field Module','Isogen',361)\n" +
        ",('Scrap Metal','MK9 Small Shield Field Module','Nocxium',100)\n" +
        ",('Scrap Metal','MK9 Small Shield Field Module','Zydrine',35)\n" +
        ",('Scrap Metal','MK9 Small Shield Field Module','Megacyte',17)\n" +
        ",('Scrap Metal','MK5 Medium Shield Field Module','Tritanium',43691)\n" +
        ",('Scrap Metal','MK5 Medium Shield Field Module','Pyerite',10592)\n" +
        ",('Scrap Metal','MK5 Medium Shield Field Module','Mexallon',3621)\n" +
        ",('Scrap Metal','MK5 Medium Shield Field Module','Isogen',640)\n" +
        ",('Scrap Metal','MK5 Medium Shield Field Module','Nocxium',178)\n" +
        ",('Scrap Metal','MK7 Medium Shield Field Module','Tritanium',73341)\n" +
        ",('Scrap Metal','MK7 Medium Shield Field Module','Pyerite',17780)\n" +
        ",('Scrap Metal','MK7 Medium Shield Field Module','Mexallon',6079)\n" +
        ",('Scrap Metal','MK7 Medium Shield Field Module','Isogen',1074)\n" +
        ",('Scrap Metal','MK7 Medium Shield Field Module','Nocxium',299)\n" +
        ",('Scrap Metal','MK7 Medium Shield Field Module','Zydrine',105)\n" +
        ",('Scrap Metal','MK9 Medium Shield Field Module','Tritanium',98611)\n" +
        ",('Scrap Metal','MK9 Medium Shield Field Module','Pyerite',23906)\n" +
        ",('Scrap Metal','MK9 Medium Shield Field Module','Mexallon',8174)\n" +
        ",('Scrap Metal','MK9 Medium Shield Field Module','Isogen',1445)\n" +
        ",('Scrap Metal','MK9 Medium Shield Field Module','Nocxium',402)\n" +
        ",('Scrap Metal','MK9 Medium Shield Field Module','Zydrine',142)\n" +
        ",('Scrap Metal','MK9 Medium Shield Field Module','Megacyte',71)\n" +
        ",('Scrap Metal','MK7 Large Shield Field Module','Tritanium',293364)\n" +
        ",('Scrap Metal','MK7 Large Shield Field Module','Pyerite',71120)\n" +
        ",('Scrap Metal','MK7 Large Shield Field Module','Mexallon',24317)\n" +
        ",('Scrap Metal','MK7 Large Shield Field Module','Isogen',4299)\n" +
        ",('Scrap Metal','MK7 Large Shield Field Module','Nocxium',1198)\n" +
        ",('Scrap Metal','MK7 Large Shield Field Module','Zydrine',422)\n" +
        ",('Scrap Metal','MK9 Large Shield Field Module','Tritanium',394446)\n" +
        ",('Scrap Metal','MK9 Large Shield Field Module','Pyerite',95626)\n" +
        ",('Scrap Metal','MK9 Large Shield Field Module','Mexallon',32696)\n" +
        ",('Scrap Metal','MK9 Large Shield Field Module','Isogen',5781)\n" +
        ",('Scrap Metal','MK9 Large Shield Field Module','Nocxium',1611)\n" +
        ",('Scrap Metal','MK9 Large Shield Field Module','Zydrine',568)\n" +
        ",('Scrap Metal','MK9 Large Shield Field Module','Megacyte',284)\n" +
        ",('Scrap Metal','MK5 Small Armor Link Module','Tritanium',10922)\n" +
        ",('Scrap Metal','MK5 Small Armor Link Module','Pyerite',2648)\n" +
        ",('Scrap Metal','MK5 Small Armor Link Module','Mexallon',905)\n" +
        ",('Scrap Metal','MK5 Small Armor Link Module','Isogen',160)\n" +
        ",('Scrap Metal','MK5 Small Armor Link Module','Nocxium',44)\n" +
        ",('Scrap Metal','MK7 Small Armor Link Module','Tritanium',18335)\n" +
        ",('Scrap Metal','MK7 Small Armor Link Module','Pyerite',4445)\n" +
        ",('Scrap Metal','MK7 Small Armor Link Module','Mexallon',1519)\n" +
        ",('Scrap Metal','MK7 Small Armor Link Module','Isogen',268)\n" +
        ",('Scrap Metal','MK7 Small Armor Link Module','Nocxium',74)\n" +
        ",('Scrap Metal','MK7 Small Armor Link Module','Zydrine',26)\n" +
        ",('Scrap Metal','MK9 Small Armor Link Module','Tritanium',24652)\n" +
        ",('Scrap Metal','MK9 Small Armor Link Module','Pyerite',5976)\n" +
        ",('Scrap Metal','MK9 Small Armor Link Module','Mexallon',2043)\n" +
        ",('Scrap Metal','MK9 Small Armor Link Module','Isogen',361)\n" +
        ",('Scrap Metal','MK9 Small Armor Link Module','Nocxium',100)\n" +
        ",('Scrap Metal','MK9 Small Armor Link Module','Zydrine',35)\n" +
        ",('Scrap Metal','MK9 Small Armor Link Module','Megacyte',17)\n" +
        ",('Scrap Metal','MK5 Medium Armor Link Module','Tritanium',43691)\n" +
        ",('Scrap Metal','MK5 Medium Armor Link Module','Pyerite',10592)\n" +
        ",('Scrap Metal','MK5 Medium Armor Link Module','Mexallon',3621)\n" +
        ",('Scrap Metal','MK5 Medium Armor Link Module','Isogen',640)\n" +
        ",('Scrap Metal','MK5 Medium Armor Link Module','Nocxium',178)\n" +
        ",('Scrap Metal','MK7 Medium Armor Link Module','Tritanium',73341)\n" +
        ",('Scrap Metal','MK7 Medium Armor Link Module','Pyerite',17780)\n" +
        ",('Scrap Metal','MK7 Medium Armor Link Module','Mexallon',6079)\n" +
        ",('Scrap Metal','MK7 Medium Armor Link Module','Isogen',1074)\n" +
        ",('Scrap Metal','MK7 Medium Armor Link Module','Nocxium',299)\n" +
        ",('Scrap Metal','MK7 Medium Armor Link Module','Zydrine',105)\n" +
        ",('Scrap Metal','MK9 Medium Armor Link Module','Tritanium',98611)\n" +
        ",('Scrap Metal','MK9 Medium Armor Link Module','Pyerite',23906)\n" +
        ",('Scrap Metal','MK9 Medium Armor Link Module','Mexallon',8174)\n" +
        ",('Scrap Metal','MK9 Medium Armor Link Module','Isogen',1445)\n" +
        ",('Scrap Metal','MK9 Medium Armor Link Module','Nocxium',402)\n" +
        ",('Scrap Metal','MK9 Medium Armor Link Module','Zydrine',142)\n" +
        ",('Scrap Metal','MK9 Medium Armor Link Module','Megacyte',71)\n" +
        ",('Scrap Metal','MK7 Large Armor Link Module','Tritanium',293364)\n" +
        ",('Scrap Metal','MK7 Large Armor Link Module','Pyerite',71120)\n" +
        ",('Scrap Metal','MK7 Large Armor Link Module','Mexallon',24317)\n" +
        ",('Scrap Metal','MK7 Large Armor Link Module','Isogen',4299)\n" +
        ",('Scrap Metal','MK7 Large Armor Link Module','Nocxium',1198)\n" +
        ",('Scrap Metal','MK7 Large Armor Link Module','Zydrine',422)\n" +
        ",('Scrap Metal','MK9 Large Armor Link Module','Tritanium',394446)\n" +
        ",('Scrap Metal','MK9 Large Armor Link Module','Pyerite',95626)\n" +
        ",('Scrap Metal','MK9 Large Armor Link Module','Mexallon',32696)\n" +
        ",('Scrap Metal','MK9 Large Armor Link Module','Isogen',5781)\n" +
        ",('Scrap Metal','MK9 Large Armor Link Module','Nocxium',1611)\n" +
        ",('Scrap Metal','MK9 Large Armor Link Module','Zydrine',568)\n" +
        ",('Scrap Metal','MK9 Large Armor Link Module','Megacyte',284)\n" +
        ",('Scrap Metal','MK5 Small Group Shield Booster','Tritanium',8657)\n" +
        ",('Scrap Metal','MK5 Small Group Shield Booster','Pyerite',2098)\n" +
        ",('Scrap Metal','MK5 Small Group Shield Booster','Mexallon',717)\n" +
        ",('Scrap Metal','MK5 Small Group Shield Booster','Isogen',126)\n" +
        ",('Scrap Metal','MK5 Small Group Shield Booster','Nocxium',35)\n" +
        ",('Scrap Metal','MK7 Small Group Shield Booster','Tritanium',14785)\n" +
        ",('Scrap Metal','MK7 Small Group Shield Booster','Pyerite',3584)\n" +
        ",('Scrap Metal','MK7 Small Group Shield Booster','Mexallon',1225)\n" +
        ",('Scrap Metal','MK7 Small Group Shield Booster','Isogen',216)\n" +
        ",('Scrap Metal','MK7 Small Group Shield Booster','Nocxium',60)\n" +
        ",('Scrap Metal','MK7 Small Group Shield Booster','Zydrine',21)\n" +
        ",('Scrap Metal','MK9 Small Group Shield Booster','Tritanium',20439)\n" +
        ",('Scrap Metal','MK9 Small Group Shield Booster','Pyerite',4955)\n" +
        ",('Scrap Metal','MK9 Small Group Shield Booster','Mexallon',1694)\n" +
        ",('Scrap Metal','MK9 Small Group Shield Booster','Isogen',299)\n" +
        ",('Scrap Metal','MK9 Small Group Shield Booster','Nocxium',83)\n" +
        ",('Scrap Metal','MK9 Small Group Shield Booster','Zydrine',29)\n" +
        ",('Scrap Metal','MK9 Small Group Shield Booster','Megacyte',14)\n" +
        ",('Scrap Metal','MK5 Medium Group Shield Booster','Tritanium',34630)\n" +
        ",('Scrap Metal','MK5 Medium Group Shield Booster','Pyerite',8395)\n" +
        ",('Scrap Metal','MK5 Medium Group Shield Booster','Mexallon',2870)\n" +
        ",('Scrap Metal','MK5 Medium Group Shield Booster','Isogen',507)\n" +
        ",('Scrap Metal','MK5 Medium Group Shield Booster','Nocxium',141)\n" +
        ",('Scrap Metal','MK7 Medium Group Shield Booster','Tritanium',59141)\n" +
        ",('Scrap Metal','MK7 Medium Group Shield Booster','Pyerite',14337)\n" +
        ",('Scrap Metal','MK7 Medium Group Shield Booster','Mexallon',4902)\n" +
        ",('Scrap Metal','MK7 Medium Group Shield Booster','Isogen',866)\n" +
        ",('Scrap Metal','MK7 Medium Group Shield Booster','Nocxium',241)\n" +
        ",('Scrap Metal','MK7 Medium Group Shield Booster','Zydrine',85)\n" +
        ",('Scrap Metal','MK9 Medium Group Shield Booster','Tritanium',81758)\n" +
        ",('Scrap Metal','MK9 Medium Group Shield Booster','Pyerite',19820)\n" +
        ",('Scrap Metal','MK9 Medium Group Shield Booster','Mexallon',6777)\n" +
        ",('Scrap Metal','MK9 Medium Group Shield Booster','Isogen',1198)\n" +
        ",('Scrap Metal','MK9 Medium Group Shield Booster','Nocxium',333)\n" +
        ",('Scrap Metal','MK9 Medium Group Shield Booster','Zydrine',117)\n" +
        ",('Scrap Metal','MK9 Medium Group Shield Booster','Megacyte',58)\n" +
        ",('Scrap Metal','MK7 Large Group Shield Booster','Tritanium',236566)\n" +
        ",('Scrap Metal','MK7 Large Group Shield Booster','Pyerite',57351)\n" +
        ",('Scrap Metal','MK7 Large Group Shield Booster','Mexallon',19609)\n" +
        ",('Scrap Metal','MK7 Large Group Shield Booster','Isogen',3467)\n" +
        ",('Scrap Metal','MK7 Large Group Shield Booster','Nocxium',966)\n" +
        ",('Scrap Metal','MK7 Large Group Shield Booster','Zydrine',341)\n" +
        ",('Scrap Metal','MK9 Large Group Shield Booster','Tritanium',327033)\n" +
        ",('Scrap Metal','MK9 Large Group Shield Booster','Pyerite',79283)\n" +
        ",('Scrap Metal','MK9 Large Group Shield Booster','Mexallon',27108)\n" +
        ",('Scrap Metal','MK9 Large Group Shield Booster','Isogen',4793)\n" +
        ",('Scrap Metal','MK9 Large Group Shield Booster','Nocxium',1335)\n" +
        ",('Scrap Metal','MK9 Large Group Shield Booster','Zydrine',471)\n" +
        ",('Scrap Metal','MK9 Large Group Shield Booster','Megacyte',235)\n" +
        ",('Scrap Metal','MK5 Small Group Armor Repairer','Tritanium',8657)\n" +
        ",('Scrap Metal','MK5 Small Group Armor Repairer','Pyerite',2098)\n" +
        ",('Scrap Metal','MK5 Small Group Armor Repairer','Mexallon',717)\n" +
        ",('Scrap Metal','MK5 Small Group Armor Repairer','Isogen',126)\n" +
        ",('Scrap Metal','MK5 Small Group Armor Repairer','Nocxium',35)\n" +
        ",('Scrap Metal','MK7 Small Group Armor Repairer','Tritanium',14785)\n" +
        ",('Scrap Metal','MK7 Small Group Armor Repairer','Pyerite',3584)\n" +
        ",('Scrap Metal','MK7 Small Group Armor Repairer','Mexallon',1225)\n" +
        ",('Scrap Metal','MK7 Small Group Armor Repairer','Isogen',216)\n" +
        ",('Scrap Metal','MK7 Small Group Armor Repairer','Nocxium',60)\n" +
        ",('Scrap Metal','MK7 Small Group Armor Repairer','Zydrine',21)\n" +
        ",('Scrap Metal','MK9 Small Group Armor Repairer','Tritanium',20439)\n" +
        ",('Scrap Metal','MK9 Small Group Armor Repairer','Pyerite',4955)\n" +
        ",('Scrap Metal','MK9 Small Group Armor Repairer','Mexallon',1694)\n" +
        ",('Scrap Metal','MK9 Small Group Armor Repairer','Isogen',299)\n" +
        ",('Scrap Metal','MK9 Small Group Armor Repairer','Nocxium',83)\n" +
        ",('Scrap Metal','MK9 Small Group Armor Repairer','Zydrine',29)\n" +
        ",('Scrap Metal','MK9 Small Group Armor Repairer','Megacyte',14)\n" +
        ",('Scrap Metal','MK5 Medium Group Armor Repairer','Tritanium',34630)\n" +
        ",('Scrap Metal','MK5 Medium Group Armor Repairer','Pyerite',8395)\n" +
        ",('Scrap Metal','MK5 Medium Group Armor Repairer','Mexallon',2870)\n" +
        ",('Scrap Metal','MK5 Medium Group Armor Repairer','Isogen',507)\n" +
        ",('Scrap Metal','MK5 Medium Group Armor Repairer','Nocxium',141)\n" +
        ",('Scrap Metal','MK7 Medium Group Armor Repairer','Tritanium',59141)\n" +
        ",('Scrap Metal','MK7 Medium Group Armor Repairer','Pyerite',14337)\n" +
        ",('Scrap Metal','MK7 Medium Group Armor Repairer','Mexallon',4902)\n" +
        ",('Scrap Metal','MK7 Medium Group Armor Repairer','Isogen',866)\n" +
        ",('Scrap Metal','MK7 Medium Group Armor Repairer','Nocxium',241)\n" +
        ",('Scrap Metal','MK7 Medium Group Armor Repairer','Zydrine',85)\n" +
        ",('Scrap Metal','MK9 Medium Group Armor Repairer','Tritanium',81758)\n" +
        ",('Scrap Metal','MK9 Medium Group Armor Repairer','Pyerite',19820)\n" +
        ",('Scrap Metal','MK9 Medium Group Armor Repairer','Mexallon',6777)\n" +
        ",('Scrap Metal','MK9 Medium Group Armor Repairer','Isogen',1198)\n" +
        ",('Scrap Metal','MK9 Medium Group Armor Repairer','Nocxium',333)\n" +
        ",('Scrap Metal','MK9 Medium Group Armor Repairer','Zydrine',117)\n" +
        ",('Scrap Metal','MK9 Medium Group Armor Repairer','Megacyte',58)\n" +
        ",('Scrap Metal','MK7 Large Group Armor Repairer','Tritanium',236566)\n" +
        ",('Scrap Metal','MK7 Large Group Armor Repairer','Pyerite',57351)\n" +
        ",('Scrap Metal','MK7 Large Group Armor Repairer','Mexallon',19609)\n" +
        ",('Scrap Metal','MK7 Large Group Armor Repairer','Isogen',3467)\n" +
        ",('Scrap Metal','MK7 Large Group Armor Repairer','Nocxium',966)\n" +
        ",('Scrap Metal','MK7 Large Group Armor Repairer','Zydrine',341)\n" +
        ",('Scrap Metal','MK9 Large Group Armor Repairer','Tritanium',327033)\n" +
        ",('Scrap Metal','MK9 Large Group Armor Repairer','Pyerite',79283)\n" +
        ",('Scrap Metal','MK9 Large Group Armor Repairer','Mexallon',27108)\n" +
        ",('Scrap Metal','MK9 Large Group Armor Repairer','Isogen',4793)\n" +
        ",('Scrap Metal','MK9 Large Group Armor Repairer','Nocxium',1335)\n" +
        ",('Scrap Metal','MK9 Large Group Armor Repairer','Zydrine',471)\n" +
        ",('Scrap Metal','MK9 Large Group Armor Repairer','Megacyte',235)\n" +
        ",('Scrap Metal','MK5 Small Group Capacitor Transmitter','Tritanium',8657)\n" +
        ",('Scrap Metal','MK5 Small Group Capacitor Transmitter','Pyerite',2098)\n" +
        ",('Scrap Metal','MK5 Small Group Capacitor Transmitter','Mexallon',717)\n" +
        ",('Scrap Metal','MK5 Small Group Capacitor Transmitter','Isogen',126)\n" +
        ",('Scrap Metal','MK5 Small Group Capacitor Transmitter','Nocxium',35)\n" +
        ",('Scrap Metal','MK7 Small Group Capacitor Transmitter','Tritanium',14785)\n" +
        ",('Scrap Metal','MK7 Small Group Capacitor Transmitter','Pyerite',3584)\n" +
        ",('Scrap Metal','MK7 Small Group Capacitor Transmitter','Mexallon',1225)\n" +
        ",('Scrap Metal','MK7 Small Group Capacitor Transmitter','Isogen',216)\n" +
        ",('Scrap Metal','MK7 Small Group Capacitor Transmitter','Nocxium',60)\n" +
        ",('Scrap Metal','MK7 Small Group Capacitor Transmitter','Zydrine',21)\n" +
        ",('Scrap Metal','MK9 Small Group Capacitor Transmitter','Tritanium',20439)\n" +
        ",('Scrap Metal','MK9 Small Group Capacitor Transmitter','Pyerite',4955)\n" +
        ",('Scrap Metal','MK9 Small Group Capacitor Transmitter','Mexallon',1694)\n" +
        ",('Scrap Metal','MK9 Small Group Capacitor Transmitter','Isogen',299)\n" +
        ",('Scrap Metal','MK9 Small Group Capacitor Transmitter','Nocxium',83)\n" +
        ",('Scrap Metal','MK9 Small Group Capacitor Transmitter','Zydrine',29)\n" +
        ",('Scrap Metal','MK9 Small Group Capacitor Transmitter','Megacyte',14)\n" +
        ",('Scrap Metal','MK5 Medium Group Capacitor Transmitter','Tritanium',34630)\n" +
        ",('Scrap Metal','MK5 Medium Group Capacitor Transmitter','Pyerite',8395)\n" +
        ",('Scrap Metal','MK5 Medium Group Capacitor Transmitter','Mexallon',2870)\n" +
        ",('Scrap Metal','MK5 Medium Group Capacitor Transmitter','Isogen',507)\n" +
        ",('Scrap Metal','MK5 Medium Group Capacitor Transmitter','Nocxium',141)\n" +
        ",('Scrap Metal','MK7 Medium Group Capacitor Transmitter','Tritanium',59141)\n" +
        ",('Scrap Metal','MK7 Medium Group Capacitor Transmitter','Pyerite',14337)\n" +
        ",('Scrap Metal','MK7 Medium Group Capacitor Transmitter','Mexallon',4902)\n" +
        ",('Scrap Metal','MK7 Medium Group Capacitor Transmitter','Isogen',866)\n" +
        ",('Scrap Metal','MK7 Medium Group Capacitor Transmitter','Nocxium',241)\n" +
        ",('Scrap Metal','MK7 Medium Group Capacitor Transmitter','Zydrine',85)\n" +
        ",('Scrap Metal','MK9 Medium Group Capacitor Transmitter','Tritanium',81758)\n" +
        ",('Scrap Metal','MK9 Medium Group Capacitor Transmitter','Pyerite',19820)\n" +
        ",('Scrap Metal','MK9 Medium Group Capacitor Transmitter','Mexallon',6777)\n" +
        ",('Scrap Metal','MK9 Medium Group Capacitor Transmitter','Isogen',1198)\n" +
        ",('Scrap Metal','MK9 Medium Group Capacitor Transmitter','Nocxium',333)\n" +
        ",('Scrap Metal','MK9 Medium Group Capacitor Transmitter','Zydrine',117)\n" +
        ",('Scrap Metal','MK9 Medium Group Capacitor Transmitter','Megacyte',58)\n" +
        ",('Scrap Metal','MK7 Large Group Capacitor Transmitter','Tritanium',236566)\n" +
        ",('Scrap Metal','MK7 Large Group Capacitor Transmitter','Pyerite',57351)\n" +
        ",('Scrap Metal','MK7 Large Group Capacitor Transmitter','Mexallon',19609)\n" +
        ",('Scrap Metal','MK7 Large Group Capacitor Transmitter','Isogen',3467)\n" +
        ",('Scrap Metal','MK7 Large Group Capacitor Transmitter','Nocxium',966)\n" +
        ",('Scrap Metal','MK7 Large Group Capacitor Transmitter','Zydrine',341)\n" +
        ",('Scrap Metal','MK9 Large Group Capacitor Transmitter','Tritanium',327033)\n" +
        ",('Scrap Metal','MK9 Large Group Capacitor Transmitter','Pyerite',79283)\n" +
        ",('Scrap Metal','MK9 Large Group Capacitor Transmitter','Mexallon',27108)\n" +
        ",('Scrap Metal','MK9 Large Group Capacitor Transmitter','Isogen',4793)\n" +
        ",('Scrap Metal','MK9 Large Group Capacitor Transmitter','Nocxium',1335)\n" +
        ",('Scrap Metal','MK9 Large Group Capacitor Transmitter','Zydrine',471)\n" +
        ",('Scrap Metal','MK9 Large Group Capacitor Transmitter','Megacyte',235)\n" +
        ",('Scrap Metal','Metal Scraps','Tritanium',1000)\n" +
        ",('Scrap Metal','Reinforced Metal Scraps','Tritanium',5000)\n" +
        ",('Scrap Metal','Lv.4 Amarr Ship Debris','Smashed Trigger Unit',10)\n" +
        ",('Scrap Metal','Lv.4 Amarr Ship Debris','Conductive Polymer',19)\n" +
        ",('Scrap Metal','Lv.5 Amarr Ship Debris','Smashed Trigger Unit',18)\n" +
        ",('Scrap Metal','Lv.5 Amarr Ship Debris','Conductive Polymer',35)\n" +
        ",('Scrap Metal','Lv.6 Amarr Ship Debris','Smashed Trigger Unit',27)\n" +
        ",('Scrap Metal','Lv.6 Amarr Ship Debris','Conductive Polymer',53)\n" +
        ",('Scrap Metal','Lv.7 Amarr Ship Debris','Damaged Close-in Weapon System',23)\n" +
        ",('Scrap Metal','Lv.7 Amarr Ship Debris','Conductive Polymer',67)\n" +
        ",('Scrap Metal','Lv.8 Amarr Ship Debris','Damaged Close-in Weapon System',27)\n" +
        ",('Scrap Metal','Lv.8 Amarr Ship Debris','Conductive Polymer',80)\n" +
        ",('Scrap Metal','Lv.9 Amarr Ship Debris','Scorched Telemetry Processor',23)\n" +
        ",('Scrap Metal','Lv.9 Amarr Ship Debris','Conductive Polymer',92)\n" +
        ",('Scrap Metal','Lv.10 Amarr Ship Debris','Scorched Telemetry Processor',26)\n" +
        ",('Scrap Metal','Lv.10 Amarr Ship Debris','Conductive Polymer',104)\n" +
        ",('Scrap Metal','Lv.4 Caldari Ship Debris','Charred Micro Circuit',19)\n" +
        ",('Scrap Metal','Lv.4 Caldari Ship Debris','Defective Current Pump',7)\n" +
        ",('Scrap Metal','Lv.5 Caldari Ship Debris','Charred Micro Circuit',35)\n" +
        ",('Scrap Metal','Lv.5 Caldari Ship Debris','Defective Current Pump',12)\n" +
        ",('Scrap Metal','Lv.6 Caldari Ship Debris','Charred Micro Circuit',53)\n" +
        ",('Scrap Metal','Lv.6 Caldari Ship Debris','Defective Current Pump',18)\n" +
        ",('Scrap Metal','Lv.7 Caldari Ship Debris','Fried Interface Circuit',45)\n" +
        ",('Scrap Metal','Lv.7 Caldari Ship Debris','Defective Current Pump',23)\n" +
        ",('Scrap Metal','Lv.8 Caldari Ship Debris','Fried Interface Circuit',53)\n" +
        ",('Scrap Metal','Lv.8 Caldari Ship Debris','Defective Current Pump',27)\n" +
        ",('Scrap Metal','Lv.9 Caldari Ship Debris','Tripped Power Circuit',46)\n" +
        ",('Scrap Metal','Lv.9 Caldari Ship Debris','Defective Current Pump',31)\n" +
        ",('Scrap Metal','Lv.10 Caldari Ship Debris','Tripped Power Circuit',52)\n" +
        ",('Scrap Metal','Lv.10 Caldari Ship Debris','Defective Current Pump',35)\n" +
        ",('Scrap Metal','Lv.4 Gallente Ship Debris','Smashed Trigger Unit',10)\n" +
        ",('Scrap Metal','Lv.4 Gallente Ship Debris','Contaminated Lorentz Fluid',4)\n" +
        ",('Scrap Metal','Lv.5 Gallente Ship Debris','Smashed Trigger Unit',18)\n" +
        ",('Scrap Metal','Lv.5 Gallente Ship Debris','Contaminated Lorentz Fluid',6)\n" +
        ",('Scrap Metal','Lv.6 Gallente Ship Debris','Smashed Trigger Unit',27)\n" +
        ",('Scrap Metal','Lv.6 Gallente Ship Debris','Contaminated Lorentz Fluid',9)\n" +
        ",('Scrap Metal','Lv.7 Gallente Ship Debris','Damaged Close-in Weapon System',23)\n" +
        ",('Scrap Metal','Lv.7 Gallente Ship Debris','Contaminated Lorentz Fluid',12)\n" +
        ",('Scrap Metal','Lv.8 Gallente Ship Debris','Damaged Close-in Weapon System',27)\n" +
        ",('Scrap Metal','Lv.8 Gallente Ship Debris','Contaminated Lorentz Fluid',14)\n" +
        ",('Scrap Metal','Lv.9 Gallente Ship Debris','Scorched Telemetry Processor',23)\n" +
        ",('Scrap Metal','Lv.9 Gallente Ship Debris','Contaminated Lorentz Fluid',16)\n" +
        ",('Scrap Metal','Lv.10 Gallente Ship Debris','Scorched Telemetry Processor',26)\n" +
        ",('Scrap Metal','Lv.10 Gallente Ship Debris','Contaminated Lorentz Fluid',18)\n" +
        ",('Scrap Metal','Lv.4 Minmatar Ship Debris','Charred Micro Circuit',19)\n" +
        ",('Scrap Metal','Lv.4 Minmatar Ship Debris','Contaminated Nanite Polymer',5)\n" +
        ",('Scrap Metal','Lv.5 Minmatar Ship Debris','Charred Micro Circuit',35)\n" +
        ",('Scrap Metal','Lv.5 Minmatar Ship Debris','Contaminated Nanite Polymer',9)\n" +
        ",('Scrap Metal','Lv.6 Minmatar Ship Debris','Charred Micro Circuit',53)\n" +
        ",('Scrap Metal','Lv.6 Minmatar Ship Debris','Contaminated Nanite Polymer',14)\n" +
        ",('Scrap Metal','Lv.7 Minmatar Ship Debris','Fried Interface Circuit',45)\n" +
        ",('Scrap Metal','Lv.7 Minmatar Ship Debris','Contaminated Nanite Polymer',17)\n" +
        ",('Scrap Metal','Lv.8 Minmatar Ship Debris','Fried Interface Circuit',53)\n" +
        ",('Scrap Metal','Lv.8 Minmatar Ship Debris','Contaminated Nanite Polymer',20)\n" +
        ",('Scrap Metal','Lv.9 Minmatar Ship Debris','Tripped Power Circuit',46)\n" +
        ",('Scrap Metal','Lv.9 Minmatar Ship Debris','Contaminated Nanite Polymer',23)\n" +
        ",('Scrap Metal','Lv.10 Minmatar Ship Debris','Tripped Power Circuit',52)\n" +
        ",('Scrap Metal','Lv.10 Minmatar Ship Debris','Contaminated Nanite Polymer',26)\n" +
        ",('Scrap Metal','Small Damaged ORE Hull','Smashed Trigger Unit',8)\n" +
        ",('Scrap Metal','Small Damaged ORE Hull','Contaminated Lorentz Fluid',3)\n" +
        ",('Scrap Metal','Medium Damaged ORE Hull','Damaged Close-in Weapon System',18)\n" +
        ",('Scrap Metal','Medium Damaged ORE Hull','Contaminated Lorentz Fluid',9)\n" +
        ",('Scrap Metal','Large Damaged ORE Hull','Scorched Telemetry Processor',26)\n" +
        ",('Scrap Metal','Large Damaged ORE Hull','Contaminated Lorentz Fluid',18)\n" +
        ",('Scrap Metal','Guristas Ship Debris','Tripped Power Circuit',51)\n" +
        ",('Scrap Metal','Guristas Ship Debris','Defective Current Pump',34)\n" +
        ",('Scrap Metal','Sansha Ship Debris','Scorched Telemetry Processor',26)\n" +
        ",('Scrap Metal','Sansha Ship Debris','Conductive Polymer',101)\n" +
        ",('Scrap Metal','Blood Raider Ship Debris','Scorched Telemetry Processor',26)\n" +
        ",('Scrap Metal','Blood Raider Ship Debris','Conductive Polymer',101)\n" +
        ",('Scrap Metal','Angel Ship Debris','Tripped Power Circuit',51)\n" +
        ",('Scrap Metal','Angel Ship Debris','Contaminated Nanite Polymer',26)\n" +
        ",('Scrap Metal','Serpentis Ship Debris','Scorched Telemetry Processor',26)\n" +
        ",('Scrap Metal','Serpentis Ship Debris','Contaminated Lorentz Fluid',17)\n" +
        ",('Scrap Metal','SOE Ship Debris','Scorched Telemetry Processor',26)\n" +
        ",('Scrap Metal','SOE Ship Debris','Conductive Polymer',101)\n" +
        ",('Scrap Metal','Mordu''s Legion Ship Debris','Tripped Power Circuit',51)\n" +
        ",('Scrap Metal','Mordu''s Legion Ship Debris','Defective Current Pump',34)\n" +
        ",('Scrap Metal','Small Damaged InterBus Hull','Smashed Trigger Unit',8)\n" +
        ",('Scrap Metal','Small Damaged InterBus Hull','Contaminated Lorentz Fluid',3)\n" +
        ",('Scrap Metal','Medium Damaged InterBus Hull','Damaged Close-in Weapon System',18)\n" +
        ",('Scrap Metal','Medium Damaged InterBus Hull','Contaminated Lorentz Fluid',9)\n" +
        ",('Scrap Metal','Large Damaged InterBus Hull','Scorched Telemetry Processor',26)\n" +
        ",('Scrap Metal','Large Damaged InterBus Hull','Contaminated Lorentz Fluid',18)\n" +
        ",('Common Ore','Veldspar','Tritanium',4.15)\n" +
        ",('Common Ore','Compressed Veldspar','Tritanium',41.5)\n" +
        ",('Common Ore','Scordite','Tritanium',1.62)\n" +
        ",('Common Ore','Scordite','Pyerite',1.15)\n" +
        ",('Common Ore','Compressed Scordite','Tritanium',16.2)\n" +
        ",('Common Ore','Compressed Scordite','Pyerite',11.5)\n" +
        ",('Uncommon Ore','Pyroxeres','Tritanium',17.54)\n" +
        ",('Uncommon Ore','Pyroxeres','Pyerite',5.6)\n" +
        ",('Uncommon Ore','Pyroxeres','Mexallon',2.5)\n" +
        ",('Uncommon Ore','Pyroxeres','Nocxium',0.3)\n" +
        ",('Uncommon Ore','Compressed Pyroxeres','Tritanium',175.4)\n" +
        ",('Uncommon Ore','Compressed Pyroxeres','Pyerite',56)\n" +
        ",('Uncommon Ore','Compressed Pyroxeres','Mexallon',25)\n" +
        ",('Uncommon Ore','Compressed Pyroxeres','Nocxium',3)\n" +
        ",('Common Ore','Plagioclase','Tritanium',0.51)\n" +
        ",('Common Ore','Plagioclase','Pyerite',0.65)\n" +
        ",('Common Ore','Plagioclase','Mexallon',0.97)\n" +
        ",('Common Ore','Compressed Plagioclase','Tritanium',5.1)\n" +
        ",('Common Ore','Compressed Plagioclase','Pyerite',6.5)\n" +
        ",('Common Ore','Compressed Plagioclase','Mexallon',9.7)\n" +
        ",('Uncommon Ore','Omber','Tritanium',6)\n" +
        ",('Uncommon Ore','Omber','Pyerite',0.76)\n" +
        ",('Uncommon Ore','Omber','Isogen',0.55)\n" +
        ",('Uncommon Ore','Compressed Omber','Tritanium',60)\n" +
        ",('Uncommon Ore','Compressed Omber','Pyerite',7.6)\n" +
        ",('Uncommon Ore','Compressed Omber','Isogen',5.5)\n" +
        ",('Uncommon Ore','Kernite','Tritanium',2.66)\n" +
        ",('Uncommon Ore','Kernite','Mexallon',4.8)\n" +
        ",('Uncommon Ore','Kernite','Isogen',0.48)\n" +
        ",('Uncommon Ore','Compressed Kernite','Tritanium',26.6)\n" +
        ",('Uncommon Ore','Compressed Kernite','Mexallon',48)\n" +
        ",('Uncommon Ore','Compressed Kernite','Isogen',4.8)\n" +
        ",('Rare Ore','Jaspet','Mexallon',24.6)\n" +
        ",('Rare Ore','Jaspet','Nocxium',0.48)\n" +
        ",('Rare Ore','Jaspet','Zydrine',0.56)\n" +
        ",('Rare Ore','Compressed Jaspet','Mexallon',246)\n" +
        ",('Rare Ore','Compressed Jaspet','Nocxium',4.8)\n" +
        ",('Rare Ore','Compressed Jaspet','Zydrine',5.6)\n" +
        ",('Special Ore','Hemorphite','Tritanium',55)\n" +
        ",('Special Ore','Hemorphite','Isogen',1.6)\n" +
        ",('Special Ore','Hemorphite','Nocxium',0.13)\n" +
        ",('Special Ore','Hemorphite','Zydrine',0.5)\n" +
        ",('Special Ore','Compressed Hemorphite','Tritanium',550)\n" +
        ",('Special Ore','Compressed Hemorphite','Isogen',16)\n" +
        ",('Special Ore','Compressed Hemorphite','Nocxium',1.3)\n" +
        ",('Special Ore','Compressed Hemorphite','Zydrine',5)\n" +
        ",('Rare Ore','Hedbergite','Pyerite',27.3)\n" +
        ",('Rare Ore','Hedbergite','Isogen',4.59)\n" +
        ",('Rare Ore','Hedbergite','Nocxium',0.09)\n" +
        ",('Rare Ore','Hedbergite','Zydrine',0.14)\n" +
        ",('Rare Ore','Compressed Hedbergite','Pyerite',273)\n" +
        ",('Rare Ore','Compressed Hedbergite','Isogen',45.9)\n" +
        ",('Rare Ore','Compressed Hedbergite','Nocxium',0.9)\n" +
        ",('Rare Ore','Compressed Hedbergite','Zydrine',1.4)\n" +
        ",('Special Ore','Spodumain','Tritanium',197)\n" +
        ",('Special Ore','Spodumain','Pyerite',37.4)\n" +
        ",('Special Ore','Spodumain','Mexallon',3.6)\n" +
        ",('Special Ore','Spodumain','Isogen',0.6)\n" +
        ",('Special Ore','Compressed Spodumain','Tritanium',1970)\n" +
        ",('Special Ore','Compressed Spodumain','Pyerite',374)\n" +
        ",('Special Ore','Compressed Spodumain','Mexallon',36)\n" +
        ",('Special Ore','Compressed Spodumain','Isogen',6)\n" +
        ",('Uncommon Ore','Dark Ochre','Tritanium',9.6)\n" +
        ",('Uncommon Ore','Dark Ochre','Isogen',0.56)\n" +
        ",('Uncommon Ore','Dark Ochre','Nocxium',0.43)\n" +
        ",('Uncommon Ore','Compressed Dark Ochre','Tritanium',96)\n" +
        ",('Uncommon Ore','Compressed Dark Ochre','Isogen',5.6)\n" +
        ",('Uncommon Ore','Compressed Dark Ochre','Nocxium',4.3)\n" +
        ",('Special Ore','Gneiss','Pyerite',8.8)\n" +
        ",('Special Ore','Gneiss','Mexallon',9.19)\n" +
        ",('Special Ore','Gneiss','Isogen',1.84)\n" +
        ",('Special Ore','Compressed Gneiss','Pyerite',88)\n" +
        ",('Special Ore','Compressed Gneiss','Mexallon',91.9)\n" +
        ",('Special Ore','Compressed Gneiss','Isogen',18.4)\n" +
        ",('Rare Ore','Crokite','Tritanium',388)\n" +
        ",('Rare Ore','Crokite','Nocxium',0.94)\n" +
        ",('Rare Ore','Crokite','Zydrine',0.96)\n" +
        ",('Rare Ore','Compressed Crokite','Tritanium',3880)\n" +
        ",('Rare Ore','Compressed Crokite','Nocxium',9.4)\n" +
        ",('Rare Ore','Compressed Crokite','Zydrine',9.6)\n" +
        ",('Precious Ore','Bistot','Pyerite',61.2)\n" +
        ",('Precious Ore','Bistot','Zydrine',0.36)\n" +
        ",('Precious Ore','Bistot','Megacyte',0.79)\n" +
        ",('Precious Ore','Compressed Bistot','Pyerite',612)\n" +
        ",('Precious Ore','Compressed Bistot','Zydrine',3.6)\n" +
        ",('Precious Ore','Compressed Bistot','Megacyte',7.9)\n" +
        ",('Precious Ore','Arkonor','Tritanium',88)\n" +
        ",('Precious Ore','Arkonor','Mexallon',10)\n" +
        ",('Precious Ore','Arkonor','Megacyte',1.04)\n" +
        ",('Precious Ore','Compressed Arkonor','Tritanium',880)\n" +
        ",('Precious Ore','Compressed Arkonor','Mexallon',100)\n" +
        ",('Precious Ore','Compressed Arkonor','Megacyte',10.4)\n" +
        ",('Precious Ore','Mercoxit','Morphite',0.6)\n" +
        ",('Precious Ore','Compressed Mercoxit','Morphite',6);\n")
    });
};


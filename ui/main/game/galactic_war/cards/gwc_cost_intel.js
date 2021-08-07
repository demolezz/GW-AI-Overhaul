define(["shared/gw_common"], function (GW) {
  return {
    visible: _.constant(true),
    describe: _.constant(
      "!LOC:Intelligence Fabrication Tech reduces metal build costs of all intelligence structures and mobile units by 50%"
    ),
    summarize: _.constant("!LOC:Intelligence Fabrication Tech"),
    icon: _.constant(
      "coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_intelligence_fabrication.png"
    ),
    audio: function () {
      return {
        found: "/VO/Computer/gw/board_tech_available_cost_reduction",
      };
    },
    getContext: function (galaxy) {
      return {
        totalSize: galaxy.stars().length,
      };
    },
    deal: function (system, context) {
      var chance = 0;
      var dist = system.distance();
      if (dist > 0) {
        if (context.totalSize <= GW.balance.numberOfSystems[0]) {
          chance = 100;
          if (dist > 4) chance = 50;
        } else if (context.totalSize <= GW.balance.numberOfSystems[1]) {
          chance = 100;
          if (dist > 5) chance = 50;
        } else if (context.totalSize <= GW.balance.numberOfSystems[2]) {
          chance = 100;
          if (dist > 9) chance = 50;
        } else if (context.totalSize <= GW.balance.numberOfSystems[3]) {
          chance = 100;
          if (dist > 11) chance = 50;
        } else {
          chance = 100;
          if (dist > 13) chance = 100;
        }
      }

      return { chance: chance };
    },
    buff: function (inventory) {
      var units = [
        "/pa/units/land/radar/radar.json",
        "/pa/units/land/radar_adv/radar_adv.json",
        "/pa/units/orbital/deep_space_radar/deep_space_radar.json",
        "/pa/units/orbital/radar_satellite/radar_satellite.json",
        "/pa/units/orbital/radar_satellite_adv/radar_satellite_adv.json",
        "/pa/units/orbital/orbital_probe/orbital_probe.json",
      ];
      var mods = [];
      var modUnit = function (unit) {
        mods.push({
          file: unit,
          path: "build_metal_cost",
          op: "multiply",
          value: 0.5,
        });
      };
      _.forEach(units, modUnit);
      inventory.addMods(mods);
    },
    dull: function () {},
  };
});

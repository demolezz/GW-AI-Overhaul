define({
  visible: _.constant(true),
  describe: _.constant("!LOC: Reduces the cost of all Titans by 50%."),
  summarize: _.constant("!LOC:Titan Cost Reduction"),
  icon: _.constant(
    "coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_cost_titans.png"
  ),
  audio: function () {
    return {
      found: "/VO/Computer/gw/board_tech_available_titan_cost_reduction",
    };
  },
  getContext: function (galaxy) {
    return {
      totalSize: galaxy.stars().length,
    };
  },
  deal: function (system, context, inventory) {
    var chance = 0;
    if (
      inventory.hasCard("gwc_enable_titans") ||
      inventory.hasCard("gwc_start_titans")
    )
      chance = 80;
    return { chance: chance };
  },
  buff: function (inventory) {
    var units = [
      "/pa/units/land/titan_bot/titan_bot.json",
      "/pa/units/land/titan_vehicle/titan_vehicle.json",
      "/pa/units/orbital/titan_orbital/titan_orbital.json",
      "/pa/units/land/titan_structure/titan_structure.json",
      "/pa/units/air/titan_air/titan_air.json",
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
});

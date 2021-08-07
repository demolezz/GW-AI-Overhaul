define({
  visible: _.constant(true),
  describe: _.constant(
    "!LOC:Naval Fabrication Tech reduces metal build costs of all naval vessels by 25%"
  ),
  summarize: _.constant("!LOC:Naval Fabrication Tech"),
  icon: _.constant(
    "coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_naval.png"
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
  deal: function () {
    var chance = 0;
    chance = 40;

    return { chance: chance };
  },
  buff: function (inventory) {
    var units = [
      "/pa/units/sea/fabrication_ship/fabrication_ship.json",
      "/pa/units/sea/frigate/frigate.json",
      "/pa/units/sea/destroyer/destroyer.json",
      "/pa/units/sea/sea_scout/sea_scout.json",
      "/pa/units/sea/attack_sub/attack_sub.json",
      "/pa/units/sea/fabrication_ship_adv/fabrication_ship_adv.json",
      "/pa/units/sea/missile_ship/missile_ship.json",
      "/pa/units/sea/battleship/battleship.json",
      "/pa/units/sea/nuclear_sub/nuclear_sub.json",
      "/pa/units/sea/fabrication_barge/fabrication_barge.json",
      "/pa/units/sea/hover_ship/hover_ship.json",
      "/pa/units/sea/drone_carrier/carrier/carrier.json",
      "/pa/units/sea/drone_carrier/drone/drone.json",
    ];
    var mods = [];
    var modUnit = function (unit) {
      mods.push({
        file: unit,
        path: "build_metal_cost",
        op: "multiply",
        value: 0.75,
      });
    };
    _.forEach(units, modUnit);
    inventory.addMods(mods);
  },
  dull: function () {},
});

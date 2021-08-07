define({
  visible: _.constant(true),
  describe: _.constant(
    "!LOC:Activates the Tech to build artillery structures."
  ),
  summarize: _.constant("!LOC:Artillery Tech"),
  icon: _.constant(
    "coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_artillery.png"
  ),
  audio: function () {
    return {
      found: "/VO/Computer/gw/board_tech_available_artillery",
    };
  },
  getContext: function (galaxy) {
    return {
      totalSize: galaxy.stars().length,
    };
  },
  deal: function (system, context, inventory) {
    var chance = 0;
    if (!inventory.hasCard("gwc_start_artillery")) chance = 100;

    return { chance: chance };
  },
  buff: function (inventory) {
    inventory.addUnits([
      "/pa/units/land/artillery_long/artillery_long.json",
      "/pa/units/land/artillery_short/artillery_short.json",
      "/pa/units/land/artillery_unit_launcher/artillery_unit_launcher.json",
    ]);
  },
  dull: function () {},
});

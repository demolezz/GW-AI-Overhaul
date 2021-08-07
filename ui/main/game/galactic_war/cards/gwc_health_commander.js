define(["shared/gw_common"], function (GW) {
  return {
    visible: _.constant(true),
    describe: _.constant(
      "!LOC:Commander Armor Tech increases the health of your commanders by 100%."
    ),
    summarize: _.constant("!LOC:Commander Armor Tech"),
    icon: _.constant(
      "coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_commander_armor.png"
    ),
    audio: function () {
      return {
        found: "/VO/Computer/gw/board_tech_available_armor",
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
        if (context.totalSize <= GW.balance.numberOfSystems[0]) chance = 14;
        else if (context.totalSize <= GW.balance.numberOfSystems[1])
          chance = 14;
        else if (context.totalSize <= GW.balance.numberOfSystems[2]) {
          chance = 28;
          if (dist > 6) chance = 142;
        } else if (context.totalSize <= GW.balance.numberOfSystems[3]) {
          chance = 28;
          if (dist > 9) chance = 142;
        } else {
          chance = 28;
          if (dist > 12) chance = 142;
        }
      }
      return { chance: chance };
    },
    buff: function (inventory) {
      var units = ["/pa/units/commanders/base_commander/base_commander.json"];
      var mods = [];
      var modUnit = function (unit) {
        mods.push({
          file: unit,
          path: "max_health",
          op: "multiply",
          value: 2.0,
        });
      };
      _.forEach(units, modUnit);
      inventory.addMods(mods);
    },
    dull: function () {},
  };
});

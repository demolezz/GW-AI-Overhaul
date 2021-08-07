define(["shared/gw_common"], function (GW) {
  return {
    visible: _.constant(true),
    describe: _.constant(
      "!LOC:Commander Ammunition Tech increases damage of your commanders by 25%"
    ),
    summarize: _.constant("!LOC:Commander Ammunition Tech"),
    icon: _.constant(
      "coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_commander_speed.png"
    ),
    audio: function () {
      return {
        found: "/VO/Computer/gw/board_tech_available_ammunition",
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
        if (context.totalSize <= GW.balance.numberOfSystems[0]) chance = 12;
        else if (context.totalSize <= GW.balance.numberOfSystems[1])
          chance = 12;
        else if (context.totalSize <= GW.balance.numberOfSystems[2]) {
          chance = 24;
          if (dist > 6) chance = 120;
        } else if (context.totalSize <= GW.balance.numberOfSystems[3]) {
          chance = 24;
          if (dist > 9) chance = 120;
        } else {
          chance = 24;
          if (dist > 12) chance = 120;
        }
      }

      return { chance: chance };
    },
    buff: function (inventory) {
      var units = [
        "/pa/units/commanders/base_commander/base_commander_ammo.json",
        "/pa/ammo/cannon_uber/cannon_uber.json",
        "/pa/units/commanders/base_commander/base_commander_aa_ammo.json",
        "/pa/units/commanders/base_commander/base_commander_torpedo_ammo.json",
      ];
      var mods = [];
      var modUnit = function (unit) {
        mods.push({
          file: unit,
          path: "damage",
          op: "multiply",
          value: 1.25,
        });
        mods.push({
          file: unit,
          path: "splash_damage",
          op: "multiply",
          value: 1.25,
        });
      };
      _.forEach(units, modUnit);
      inventory.addMods(mods);
    },
    dull: function () {},
  };
});

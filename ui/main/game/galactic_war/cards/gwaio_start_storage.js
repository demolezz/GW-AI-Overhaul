// !LOCNS:galactic_war
define([
  "module",
  "cards/gwc_start",
  "cards/gwc_storage_and_buff",
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/js/bank.js",
], function (module, GWCStart, GWCStorage, gwaioBank) {
  var CARD = { id: /[^/]+$/.exec(module.id).pop() };

  return {
    visible: _.constant(false),
    summarize: _.constant("!LOC:Storage Commander"),
    icon: _.constant(
      "coui://ui/main/game/galactic_war/shared/img/red-commander.png"
    ),
    describe: _.constant("!LOC:Trades flame tanks for storage"),
    hint: function () {
      return {
        icon:
          "coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_commander_locked.png",
        description: "!LOC:Storage Commander.",
      };
    },
    deal: function () {
      return {
        params: {
          allowOverflow: true,
        },
        chance: 0,
      };
    },
    buff: function (inventory) {
      if (inventory.lookupCard(CARD) === 0) {
        // Make sure we only do the start buff/dull once
        var buffCount = inventory.getTag("", "buffCount", 0);
        if (!buffCount) {
          GWCStart.buff(inventory);
          GWCStorage.buff(inventory);
        } else {
          // Don't clog up a slot.
          inventory.maxCards(inventory.maxCards() + 1);
        }
        ++buffCount;
        inventory.setTag("", "buffCount", buffCount);
      } else {
        // Don't clog up a slot.
        inventory.maxCards(inventory.maxCards() + 1);
        gwaioBank.addStartCard(CARD);
      }
    },
    dull: function (inventory) {
      if (inventory.lookupCard(CARD) === 0) {
        var buffCount = inventory.getTag("", "buffCount", 0);
        if (buffCount) {
          // Perform dulls here
          inventory.removeUnits([
            "/pa/units/land/tank_armor/tank_armor.json",
            "/pa/units/land/tank_heavy_armor/tank_heavy_armor.json",
          ]);

          inventory.setTag("", "buffCount", undefined);
        }
      }
    },
  };
});

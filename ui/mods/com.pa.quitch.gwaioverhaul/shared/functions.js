define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/gw_play/unit_names.js",
], function (gwaioUnitsToNames) {
  return {
    validatePaths: function (path) {
      var index = _.findIndex(gwaioUnitsToNames.units, { path: path });
      if (index === -1)
        console.error(path, "is invalid or missing from GWO unit_names.js");
    },
    hasUnit: function (path) {
      this.validatePaths(path);
      return _.some(model.game().inventory().units(), function (unit) {
        return path === unit;
      });
    },
    loadoutIcon: function (loadoutId) {
      var highestDifficultyDefeated = ko
        .observable()
        .extend({ local: "gwaio_victory_" + loadoutId });
      if (highestDifficultyDefeated() === 0) {
        return "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/img/0_casual.png";
      }
      if (highestDifficultyDefeated() === 1) {
        return "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/img/1_iron.png";
      }
      if (highestDifficultyDefeated() === 2) {
        return "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/img/2_bronze.png";
      }
      if (highestDifficultyDefeated() === 3) {
        return "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/img/3_silver.png";
      }
      if (highestDifficultyDefeated() === 4) {
        return "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/img/4_gold.png";
      }
      if (highestDifficultyDefeated() === 5) {
        return "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/img/5_platinum.png";
      }
      if (highestDifficultyDefeated() === 6) {
        return "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/img/6_diamond.png";
      }
      if (highestDifficultyDefeated() === 7) {
        return "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/img/7_uber.png";
      } else
        return "coui://ui/main/game/galactic_war/shared/img/red-commander.png";
    },
    aiEnabled: function () {
      var galaxy = model.game().galaxy();
      var originSystem = galaxy.stars()[galaxy.origin()].system();
      if (originSystem.gwaio) {
        return originSystem.gwaio.ai;
      }
    },
    aiPath: function (type) {
      var game = model.game();
      var ai = game.galaxy().stars()[game.currentStar()].ai();
      var inventory = game.inventory();
      if (type === "all" && this.aiEnabled() === "Queller")
        return "/pa/ai_personalities/queller/";
      else if (type === "enemy" && this.aiEnabled() === "Queller")
        return "/pa/ai_personalities/queller/q_uber/";
      // the order of path assignments must match .player unit_map assignments in referee.js
      else if (type === "subcommander" && this.aiEnabled() === "Queller")
        return "/pa/ai_personalities/queller/q_gold/";
      else if (
        type === "subcommander" &&
        !_.isEmpty(inventory.aiMods()) &&
        ai.mirrorMode !== true
      )
        return "/pa/ai_tech/";
      else if (this.aiEnabled() === "Penchant")
        return "/pa/ai_personalities/penchant/";
      else return "/pa/ai/";
    },
  };
});

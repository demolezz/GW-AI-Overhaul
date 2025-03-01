define([
  "coui://ui/mods/com.pa.quitch.gwaioverhaul/shared/functions.js",
], function (gwaioFunctions) {
  return {
    visible: _.constant(true),
    describe: _.constant(
      "!LOC:Angel Upgrade Tech enables the targeting of enemy units and structures by the support platform's interception beam."
    ),
    summarize: _.constant("!LOC:Angel Upgrade Tech"),
    icon: _.constant(
      "coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_combat_air.png"
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
    deal: function (system, context, inventory) {
      var chance = 0;
      if (
        gwaioFunctions.hasUnit(
          "/pa/units/air/support_platform/support_platform.json"
        ) &&
        (gwaioFunctions.hasUnit(
          "/pa/units/air/air_factory_adv/air_factory_adv.json"
        ) ||
          inventory.hasCard("gwaio_upgrade_airfactory"))
      )
        chance = 60;

      return { chance: chance };
    },
    buff: function (inventory) {
      inventory.addMods([
        {
          file: "/pa/units/air/support_platform/support_platform.json",
          path: "command_caps",
          op: "push",
          value: ["ORDER_Attack"],
        },
        {
          file: "/pa/units/air/support_platform/support_platform.json",
          path: "unit_types",
          op: "push",
          value: ["UNITTYPE_Gunship", "UNITTYPE_Offense"],
        },
        {
          file: "/pa/units/air/support_platform/support_platform_tool_interception.json",
          path: "target_layers",
          op: "pull",
          value: ["WL_Orbital"],
        },
        {
          file: "/pa/units/air/support_platform/support_platform_tool_interception.json",
          path: "target_layers",
          op: "push",
          value: ["WL_LandHorizontal", "WL_WaterSurface"],
        },
        {
          file: "/pa/units/air/support_platform/support_platform_tool_interception.json",
          path: "auto_task_type",
          op: "replace",
          value: null,
        },
        {
          file: "/pa/units/air/support_platform/support_platform_tool_interception.json",
          path: "manual_fire",
          op: "replace",
          value: false,
        },
        {
          file: "/pa/units/air/support_platform/support_platform_interception_ammo.json",
          path: "collision_check",
          op: "replace",
          value: "enemies",
        },
        {
          file: "/pa/units/air/support_platform/support_platform_interception_ammo.json",
          path: "collision_response",
          op: "replace",
          value: "impact",
        },
      ]);
    },
    dull: function () {},
  };
});

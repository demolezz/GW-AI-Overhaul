define([], function () {
  return {
    name: "Hive",
    color: [
      [139, 69, 19],
      [192, 192, 192],
    ],
    teams: [
      {
        name: "Alenquer - Hive",
        boss: {
          name: "Queen",
          icon: "//ui/mods/com.pa.quitch.gwaioverhaul/shared/faction_hive.png",
          character: "!LOC:Boss",
          econ_rate: 1,
          personality: {
            percent_open_vehicle: 0.5,
            percent_open_bot: 0.5,
            percent_open_air: 0,
            percent_open_naval: 0,
            percent_open_orbital: 0,
            percent_land: 0.05,
            percent_air: 0,
            percent_naval: 0,
            percent_orbital: 0.95,
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1,
            adv_eco_mod: 1,
            adv_eco_mod_alone: 0.85,
            fabber_to_factory_ratio_basic: 2,
            fabber_to_factory_ratio_advanced: 2,
            fabber_alone_on_planet_mod: 3,
            basic_to_advanced_factory_ratio: 0,
            factory_alone_on_planet_mod: 0.5,
            min_basic_fabbers: 5,
            min_advanced_fabbers: 1,
          },
          commander: "/pa/units/commanders/quad_pumpkin/quad_pumpkin.json",
        },
        systemDescription:
          "!LOC:Osiris has always lead a solitary existence. He was always more interested in the parts of his fellow commanders than the commanders themselves. With every battle won he would take the best pieces left of the broken adversary and integrate them into his form. Osiris is considered one of the most dangerous forces in the galaxy.",
        systemTemplate: {
          name: "Alenquer - Hive",
          Planets: [
            {
              name: "Alenquer Prime",
              starting_planet: true,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [600, 800],
              Height: [20, 25],
              Water: [0, 10],
              Temp: [0, 100],
              MetalDensity: [100, 100],
              MetalClusters: [24, 49],
              BiomeScale: [100, 100],
              Position: [40000, 0],
              Velocity: [0, 111.803],
              Biomes: ["metal"],
            },
            {
              name: "Alenquer Beta",
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [225, 225],
              Height: [0, 10],
              Water: [0, 10],
              Temp: [0, 100],
              MetalDensity: [100, 100],
              MetalClusters: [100, 100],
              BiomeScale: [100, 100],
              Position: [40000, -5000],
              Velocity: [-223.6067, 111.80299],
              Biomes: ["moon"],
            },
            {
              name: "Alenquer Gamma",
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [225, 225],
              Height: [0, 10],
              Water: [0, 10],
              Temp: [0, 100],
              MetalDensity: [100, 100],
              MetalClusters: [100, 100],
              BiomeScale: [100, 100],
              Position: [35700, 2500],
              Velocity: [112.683, 305.6186],
              Biomes: ["moon"],
            },
            {
              name: "Alenquer Delta",
              starting_planet: true,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [225, 225],
              Height: [0, 10],
              Water: [0, 10],
              Temp: [0, 100],
              MetalDensity: [100, 100],
              MetalClusters: [100, 100],
              BiomeScale: [100, 100],
              Position: [44300, 2500],
              Velocity: [112.683, -82.0126],
              Biomes: ["moon"],
            },
          ],
        },
      },
    ], // teams
    minions: [
      {
        // Absurd
        name: "Worker",
        character: "!LOC:Absurd",
        color: [
          [165, 42, 42],
          [192, 192, 192],
        ],
        econ_rate: 1,
        personality: {
          percent_open_vehicle: 0.45,
          percent_open_bot: 0.35,
          percent_open_air: 0.1,
          percent_open_naval: 0.1,
          percent_open_orbital: 0,
          percent_vehicle: 0.25,
          percent_bot: 0.2,
          percent_air: 0.05,
          percent_naval: 0.05,
          percent_orbital: 0.45,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1,
          personality_tags: ["Default", "GWAlly", "SlowerExpansion"],
          adv_eco_mod: 1.3,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 5,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 5,
        },
        commander:
          "/pa/units/land/bot_support_commander/bot_support_commander.json",
      },
      {
        // Absurd
        name: "Soldier",
        character: "!LOC:Absurd",
        color: [
          [128, 128, 128],
          [192, 192, 192],
        ],
        econ_rate: 1,
        personality: {
          percent_open_vehicle: 0.45,
          percent_open_bot: 0.35,
          percent_open_air: 0.1,
          percent_open_naval: 0.1,
          percent_open_orbital: 0,
          percent_vehicle: 0.25,
          percent_bot: 0.2,
          percent_air: 0.05,
          percent_naval: 0.05,
          percent_orbital: 0.45,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 0,
          go_for_the_kill: false,
          neural_data_mod: 1,
          personality_tags: ["Default", "GWAlly", "SlowerExpansion"],
          adv_eco_mod: 1.3,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: false,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: false,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 5,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 5,
        },
        commander:
          "/pa/units/land/bot_support_commander/bot_support_commander.json",
      },
    ], // minions
  };
});

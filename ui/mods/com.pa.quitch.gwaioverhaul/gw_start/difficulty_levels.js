define({
  difficulties: [
    {
      // Casual
      customDifficulty: false,
      difficultyName: "!LOC:Casual",
      goForKill: false,
      microType: 0,
      mandatoryMinions: 0,
      minionMod: 0,
      priority_scout_metal_spots: false,
      useEasierSystemTemplate: true,
      factory_build_delay_min: 0,
      factory_build_delay_max: 12,
      unable_to_expand_delay: 0,
      enable_commander_danger_responses: false,
      per_expansion_delay: 0,
      personality_tags: ["Default", "SlowerExpansion", "queller"],
      econBase: 0.35,
      econRatePerDist: 0.05,
      max_basic_fabbers: 10,
      max_advanced_fabbers: 5,
      ffa_chance: 25,
      bossCommanders: 1,
      landAnywhereChance: 15,
      suddenDeathChance: 10,
      bountyModeChance: 25,
      bountyModeValue: 0.5,
      factionTechHandicap: 2,
    },
    {
      // Iron
      customDifficulty: false,
      difficultyName: "!LOC:Iron",
      goForKill: false,
      microType: 1,
      mandatoryMinions: 0,
      minionMod: 0.16,
      priority_scout_metal_spots: true,
      useEasierSystemTemplate: false,
      factory_build_delay_min: 0,
      factory_build_delay_max: 0,
      unable_to_expand_delay: 0,
      enable_commander_danger_responses: true,
      per_expansion_delay: 0,
      personality_tags: ["Default", "SlowerExpansion", "queller"],
      econBase: 0.425,
      econRatePerDist: 0.075,
      max_basic_fabbers: 10,
      max_advanced_fabbers: 10,
      ffa_chance: 25,
      bossCommanders: 1,
      landAnywhereChance: 15,
      suddenDeathChance: 10,
      bountyModeChance: 25,
      bountyModeValue: 0.45,
      factionTechHandicap: 1.5,
      starting_location_evaluation_radius: 100,
    },
    {
      // Bronze
      customDifficulty: false,
      difficultyName: "!LOC:Bronze",
      goForKill: true,
      microType: 2,
      mandatoryMinions: 0,
      minionMod: 0.19,
      priority_scout_metal_spots: true,
      useEasierSystemTemplate: false,
      factory_build_delay_min: 0,
      factory_build_delay_max: 0,
      unable_to_expand_delay: 0,
      enable_commander_danger_responses: true,
      per_expansion_delay: 0,
      personality_tags: ["Default", "queller"],
      econBase: 0.5,
      econRatePerDist: 0.1,
      max_basic_fabbers: 15,
      max_advanced_fabbers: 10,
      ffa_chance: 25,
      bossCommanders: 2,
      landAnywhereChance: 15,
      suddenDeathChance: 10,
      bountyModeChance: 20,
      bountyModeValue: 0.4,
      factionTechHandicap: 1,
      starting_location_evaluation_radius: 150,
    },
    {
      // Silver
      customDifficulty: false,
      difficultyName: "!LOC:Silver",
      goForKill: true,
      microType: 2,
      mandatoryMinions: 0,
      minionMod: 0.24,
      priority_scout_metal_spots: true,
      useEasierSystemTemplate: false,
      factory_build_delay_min: 0,
      factory_build_delay_max: 0,
      unable_to_expand_delay: 0,
      enable_commander_danger_responses: true,
      per_expansion_delay: 0,
      personality_tags: ["Default", "queller"],
      econBase: 0.6,
      econRatePerDist: 0.1,
      max_basic_fabbers: 15,
      max_advanced_fabbers: 15,
      ffa_chance: 25,
      bossCommanders: 2,
      landAnywhereChance: 15,
      suddenDeathChance: 10,
      bountyModeChance: 20,
      bountyModeValue: 0.35,
      factionTechHandicap: 0.5,
      starting_location_evaluation_radius: 200,
    },
    {
      // Gold
      customDifficulty: false,
      difficultyName: "!LOC:Gold",
      goForKill: true,
      microType: 2,
      mandatoryMinions: 0,
      minionMod: 0.28,
      priority_scout_metal_spots: true,
      useEasierSystemTemplate: false,
      factory_build_delay_min: 0,
      factory_build_delay_max: 0,
      unable_to_expand_delay: 0,
      enable_commander_danger_responses: true,
      per_expansion_delay: 0,
      personality_tags: ["Default", "queller"],
      econBase: 0.7,
      econRatePerDist: 0.15,
      max_basic_fabbers: 20,
      max_advanced_fabbers: 15,
      ffa_chance: 25,
      bossCommanders: 3,
      landAnywhereChance: 15,
      suddenDeathChance: 10,
      bountyModeChance: 15,
      bountyModeValue: 0.3,
      factionTechHandicap: 0,
      starting_location_evaluation_radius: 250,
    },
    {
      // Platinum
      customDifficulty: false,
      difficultyName: "!LOC:Platinum",
      goForKill: true,
      microType: 2,
      mandatoryMinions: 0,
      minionMod: 0.39,
      priority_scout_metal_spots: true,
      useEasierSystemTemplate: false,
      factory_build_delay_min: 0,
      factory_build_delay_max: 0,
      unable_to_expand_delay: 0,
      enable_commander_danger_responses: true,
      per_expansion_delay: 0,
      personality_tags: ["Default", "PreventsWaste", "queller"],
      econBase: 1,
      econRatePerDist: 0.175,
      max_basic_fabbers: 20,
      max_advanced_fabbers: 20,
      ffa_chance: 25,
      bossCommanders: 3,
      landAnywhereChance: 15,
      suddenDeathChance: 10,
      bountyModeChance: 15,
      bountyModeValue: 0.25,
      factionTechHandicap: -0.5,
      starting_location_evaluation_radius: 300,
    },
    {
      // Diamond
      customDifficulty: false,
      difficultyName: "!LOC:Diamond",
      goForKill: true,
      microType: 2,
      mandatoryMinions: 0,
      minionMod: 0.5,
      priority_scout_metal_spots: true,
      useEasierSystemTemplate: false,
      factory_build_delay_min: 0,
      factory_build_delay_max: 0,
      unable_to_expand_delay: 0,
      enable_commander_danger_responses: true,
      per_expansion_delay: 0,
      personality_tags: ["Default", "PreventsWaste", "queller"],
      econBase: 1.2,
      econRatePerDist: 0.2,
      max_basic_fabbers: 25,
      max_advanced_fabbers: 20,
      ffa_chance: 25,
      bossCommanders: 4,
      landAnywhereChance: 15,
      suddenDeathChance: 10,
      bountyModeChance: 10,
      bountyModeValue: 0.2,
      factionTechHandicap: -0.5,
      starting_location_evaluation_radius: 400,
    },
    {
      // Uber
      customDifficulty: false,
      difficultyName: "!LOC:Uber",
      goForKill: true,
      microType: 2,
      mandatoryMinions: -1,
      minionMod: 0.74,
      priority_scout_metal_spots: true,
      useEasierSystemTemplate: false,
      factory_build_delay_min: 0,
      factory_build_delay_max: 0,
      unable_to_expand_delay: 0,
      enable_commander_danger_responses: true,
      per_expansion_delay: 0,
      personality_tags: ["Default", "PreventsWaste", "queller"],
      econBase: 10,
      econRatePerDist: 0,
      max_basic_fabbers: 25,
      max_advanced_fabbers: 25,
      ffa_chance: 25,
      bossCommanders: 4,
      landAnywhereChance: 15,
      suddenDeathChance: 10,
      bountyModeChance: 10,
      bountyModeValue: 0.2,
      factionTechHandicap: -0.5,
      starting_location_evaluation_radius: 400,
    },
    {
      // Custom
      customDifficulty: true,
      difficultyName: "!LOC:Custom",
    },
  ],
});

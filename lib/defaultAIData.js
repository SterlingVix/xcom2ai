// TODO: Programatically translate from INI syntax to JSON...
// This was converted manually.

window.defaultAIData = {} //  Core behavior object.

window.defaultAIData.GenericAIRoot = {
    NodeType: "Selector",
    Child0: "TryNonAggressiveBehavior",
    Child1: "TryMindControlledRoot",
    Child2: "::CharacterRoot",
    Child3: "SkipMove"
};
window.defaultAIData.TryNonAggressiveBehavior = {
    NodeType: "Sequence",
    Child0: "HasHitAttackLimit",
    Child1: "NonAggressiveBehavior"

};
window.defaultAIData.HasHitAttackLimit = {
    NodeType: "Condition"
        //  Uses values defined above for MaxEngagedEnemies", per difficulty level.
};
window.defaultAIData.NonAggressiveBehavior = {
    NodeType: "Selector",
    Child0: "TryNonAggressiveBehaviorFirstAction",
    Child1: "MoveFlanking",
    Child2: "SkipMove"

};
window.defaultAIData.TryNonAggressiveBehaviorFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "NonAggressiveBehaviorFirstAction"

};
window.defaultAIData.NonAggressiveBehaviorFirstAction = {
    NodeType: "RandSelector",
    Child0: "TryOverwatch",
    Param0: "33",
    Child1: "MoveFlankingOrDefensive",
    Param1: "67"

};
window.defaultAIData.MoveFlankingOrDefensive = {
    NodeType: "Selector",
    Child0: "MoveFlanking",
    Child1: "MoveDefensive",
    Child2: "SkipMove"

};
window.defaultAIData.TryMindControlledRoot = {
    NodeType: "Sequence",
    Child0: "AffectedByEffect-MindControl",
    Child1: "MindControlledRoot"

};
window.defaultAIData.NotRedAlert = {
    NodeType: "Inverter",
    Child0: "IsRedAlert"

};
window.defaultAIData.IsInFirstCombatTurn = {
    NodeType: "Condition"

};
window.defaultAIData.IsFlanked = {
    NodeType: "Condition"

};
window.defaultAIData.NotFlanked = {
    NodeType: "Inverter",
    Child0: "IsFlanked"

};
window.defaultAIData.IsVisibleToPlayer = {
    NodeType: "Condition"

};
window.defaultAIData.TargetIsVisibleToPlayer = {
    NodeType: "Condition"

};
window.defaultAIData.DidNotMoveLastTurn = {
    NodeType: "Condition"

};
window.defaultAIData.HighPopularSupport = {
    NodeType: "Condition",
    Param0: "PopularSupport",
    Param1: ">",
    Param2: "50%"

};
window.defaultAIData.LowPopularSupport = {
    NodeType: "Inverter",
    Child0: "HighPopularSupport"

};
window.defaultAIData.IsGroupLeader = {
    NodeType: "Condition"

};
window.defaultAIData.IsFollower = {
    NodeType: "Inverter",
    Child0: "IsGroupLeader"

};
window.defaultAIData.HasAmmo = {
    NodeType: "Condition"

};
window.defaultAIData.OutOfAmmo = {
    NodeType: "Inverter",
    Child0: "HasAmmo"

};
window.defaultAIData.IsLastActionPoint = {
    NodeType: "Condition"

};
window.defaultAIData.NotLastActionPoint = {
    NodeType: "Inverter",
    Child0: "IsLastActionPoint"

};
window.defaultAIData.HasThreeActionPoints = {
    NodeType: "Condition"

};
window.defaultAIData.HasGoodShotTarget = {
    NodeType: "Condition"

};
window.defaultAIData.IsInDangerousArea = {
    NodeType: "Condition"

};
window.defaultAIData.NotInDangerousArea = {
    NodeType: "Inverter",
    Child0: "IsInDangerousArea"

};
window.defaultAIData.HasKillShot = {
    NodeType: "Condition"
        //  only functional for StandardShot
};
window.defaultAIData.HasNoKillShot = {
    NodeType: "Inverter",
    Child0: "HasKillShot"

};
window.defaultAIData.TargetIsVulnerable = {
    NodeType: "Selector",
    Child0: "TargetIsKillable",
    Child1: "TargetHasLowHP"

};
window.defaultAIData.HasHighHP = {
    NodeType: "StatCondition",
    Param0: "eStat_HP",
    Param1: ">: ",
    Param2: "70%"

};
window.defaultAIData.HasLowHP = {
    NodeType: "StatCondition",
    Param0: "eStat_HP",
    Param1: "<: ",
    Param2: "30%"

};
window.defaultAIData.NotLowHP = {
    NodeType: "StatCondition",
    Param0: "eStat_HP",
    Param1: ">",
    Param2: "30%"

};
window.defaultAIData.IsBloodied = {
    NodeType: "StatCondition",
    Param0: "eStat_HP",
    Param1: "<: ",
    Param2: "50%"

};
window.defaultAIData.HasWounds = {
    NodeType: "StatCondition",
    Param0: "eStat_HP",
    Param1: "<",
    Param2: "100%"

};
window.defaultAIData.IsRedAlert = {
    NodeType: "StatCondition",
    Param0: "eStat_AlertLevel",
    Param1: "::",
    Param2: "2"

};
window.defaultAIData.IsOrangeAlert = {
    NodeType: "Condition"

};
window.defaultAIData.IsYellowAlert = {
    NodeType: "StatCondition",
    Param0: "eStat_AlertLevel",
    Param1: "::",
    Param2: "1"

};
window.defaultAIData.IsGreenAlert = {
    NodeType: "StatCondition",
    Param0: "eStat_AlertLevel",
    Param1: "::",
    Param2: "0"

};
window.defaultAIData.HasRevealed = {
    NodeType: "Condition "

};
window.defaultAIData.NotYetRevealed = {
    NodeType: "Inverter",
    Child0: "HasRevealed "

};
window.defaultAIData.HasCombatOccured = {
    NodeType: "StatCondition",
    Param0: "CombatCount",
    Param1: ">",
    Param2: "0"

};
window.defaultAIData.HasMoreThanOneOverwatcher = {
    NodeType: "StatCondition",
    Param0: "OverwatcherCount",
    Param1: ">",
    Param2: "1"

};
window.defaultAIData.NoOverwatchingTeammates = {
    NodeType: "StatCondition",
    Param0: "OverwatcherCount",
    Param1: "::",
    Param2: "0",
    Param3: "1"

};
window.defaultAIData.OneOverwatchingTeammate = {
    NodeType: "StatCondition",
    Param0: "OverwatcherCount",
    Param1: "::",
    Param2: "1",
    Param3: "1"

};
window.defaultAIData.MultipleOverwatchingTeammates = {
    NodeType: "StatCondition",
    Param0: "OverwatcherCount",
    Param1: ">",
    Param2: "1",
    Param3: "1"

};
window.defaultAIData.TargetHasBeenAttackedTwice = {
    NodeType: "StatCondition",
    Param0: "TargetSelectedThisTurnCount",
    Param1: ">: ",
    Param2: "2"

};
window.defaultAIData.TargetHasBeenAttackedOnce = {
    NodeType: "StatCondition",
    Param0: "TargetSelectedThisTurnCount",
    Param1: ": ",
    Param2: "1"

};
window.defaultAIData.TargetHasNotBeenAttacked = {
    NodeType: "StatCondition",
    Param0: "TargetSelectedThisTurnCount",
    Param1: ": ",
    Param2: "0"

};
window.defaultAIData.NoVisibleOverwatchers = {
    NodeType: "StatCondition",
    Param0: "OverwatcherCount",
    Param1: "::",
    Param2: "0"

};
window.defaultAIData.NoVisibleSuppressors = {
    NodeType: "StatCondition",
    Param0: "SuppressorCount",
    Param1: "::",
    Param2: "0"

};
window.defaultAIData["HasBTVar-SafeToMove"] = {
    NodeType: "Condition"

};
window.defaultAIData.SetSafeToMoveTrue = {
    NodeType: "Action",
    Param0: "SetBTVar",
    Param1: "SafeToMove",
    Param2: "1"

};
window.defaultAIData.SetSafeToMoveFalse = {
    NodeType: "Action",
    Param0: "SetBTVar",
    Param1: "SafeToMove",
    Param2: "0"

};
window.defaultAIData.IsSafeToMove = {
    NodeType: "StatCondition",
    Param0: "BTVar",
    Param1: "!: ",
    Param2: "0",
    Param3: "SafeToMove"

};
window.defaultAIData.InitSafeToMoveVar = {
    NodeType: "Selector",
    Child0: "HasBTVar-SafeToMove",
    Child1: "UpdateSafeToMoveVar"

};
window.defaultAIData.UpdateSafeToMoveVar = {
    NodeType: "Selector",
    Child0: "TrySetSafeToMoveTrue",
    Child1: "SetSafeToMoveFalse"

};
window.defaultAIData.TrySetSafeToMoveTrue = {
    NodeType: "Sequence",
    Child0: "AreConditionsSafeForMove",
    Child1: "SetSafeToMoveTrue"

};
window.defaultAIData.AreConditionsSafeForMove = {
    NodeType: "Selector",
    Child0: "IsFlanked",
    Child1: "PassesOverwatchSuppressMoveChecks"

};
window.defaultAIData.PassesOverwatchSuppressMoveChecks = {
    NodeType: "Sequence",
    Child0: "PassesSuppressMoveChecks",
    Child1: "PassesOverwatchMoveChecks"

};
window.defaultAIData.PassesOverwatchMoveChecks = {
    NodeType: "Selector",
    Child0: "NoVisibleOverwatchers",
    Child1: "RollToNotMoveAgainstOverwatchersFails"

};
window.defaultAIData.PassesSuppressMoveChecks = {
    NodeType: "Selector",
    Child0: "NoVisibleSuppressors",
    Child1: "RollToNotMoveAgainstSuppressorsFails"

};
window.defaultAIData.RollToNotMoveAgainstOverwatchersFails = {
    NodeType: "Sequence",
    Child0: "SetNoMoveFalse",
    Child1: "SetOverwatcherStack",
    Child2: "RepeatRollNoMoveOnOverwatcherUntilPass",
    Child3: "RollToNotMoveFailed"

};
window.defaultAIData.RollToNotMoveAgainstSuppressorsFails = {
    NodeType: "Sequence",
    Child0: "SetNoMoveFalse",
    Child1: "SetSuppressorStack",
    Child2: "RepeatRollNoMoveOnSuppressorUntilPass",
    Child3: "RollToNotMoveFailed"

};
window.defaultAIData.RepeatRollNoMoveOnOverwatcherUntilPass = {
    NodeType: "RepeatUntilFail",
    Child0: "IterateRollOnNoMoveToOverwatcher"

};
window.defaultAIData.RepeatRollNoMoveOnSuppressorUntilPass = {
    NodeType: "RepeatUntilFail",
    Child0: "IterateRollOnNoMoveToSuppressor"

};
window.defaultAIData.IterateRollOnNoMoveToOverwatcher = {
    NodeType: "Sequence",
    Child0: "SetNextOverwatcher",
    Child1: "Roll50ToNotMove",
    Child2: "RollToNotMoveFailed"
        //  If RollToNotMove failed", keep rolling until it passes or we run out of overwatchers.
};
window.defaultAIData.IterateRollOnNoMoveToSuppressor = {
    NodeType: "Sequence",
    Child0: "SetNextSuppressor",
    Child1: "Roll75ToNotMove",
    Child2: "RollToNotMoveFailed"
        //  If RollToNotMove failed", keep rolling until it passes or we run out of suppressors.
};
window.defaultAIData.SetNextOverwatcher = {
    NodeType: "Action"

};
window.defaultAIData.SetOverwatcherStack = {
    NodeType: "Action"

};
window.defaultAIData.SetNextSuppressor = {
    NodeType: "Action"

};
window.defaultAIData.SetSuppressorStack = {
    NodeType: "Action"

};
window.defaultAIData.Roll50ToNotMove = {
    NodeType: "RandSelector",
    Child0: "SetNoMoveTrue",
    Param0: "50",
    Child1: "SetNoMoveFalse",
    Param1: "50"

};
window.defaultAIData.Roll75ToNotMove = {
    NodeType: "RandSelector",
    Child0: "SetNoMoveTrue",
    Param0: "75",
    Child1: "SetNoMoveFalse",
    Param1: "25"

};
window.defaultAIData.SetNoMoveTrue = {
    NodeType: "Action",
    Param0: "SetBTVar",
    Param1: "NoMove",
    Param2: "1"

};
window.defaultAIData.SetNoMoveFalse = {
    NodeType: "Action",
    Param0: "SetBTVar",
    Param1: "NoMove",
    Param2: "0"

};
window.defaultAIData.RollToNotMoveFailed = {
    NodeType: "StatCondition",
    Param0: "BTVar",
    Param1: "::",
    Param2: "0",
    Param3: "NoMove"

};
window.defaultAIData.RollToNotMovePassed = {
    NodeType: "StatCondition",
    Param0: "BTVar",
    Param1: "!: ",
    Param2: "0",
    Param3: "NoMove"

};
window.defaultAIData.SafeToMove = {
    NodeType: "Sequence",
    Child0: "InitSafeToMoveVar",
    Child1: "IsSafeToMove"

};
window.defaultAIData.IsDifficultyEasy = {
    NodeType: "StatCondition",
    Param0: "Difficulty",
    Param1: "::",
    Param2: "0"

};
window.defaultAIData.IsDifficultyNormal = {
    NodeType: "StatCondition",
    Param0: "Difficulty",
    Param1: "::",
    Param2: "1"

};
window.defaultAIData.IsDifficultyHard = {
    NodeType: "StatCondition",
    Param0: "Difficulty",
    Param1: "::",
    Param2: "2"

};
window.defaultAIData.IsDifficultyClassic = {
    NodeType: "StatCondition",
    Param0: "Difficulty",
    Param1: "::",
    Param2: "3"

};
window.defaultAIData.IsDifficultyAboveNormal = {
    NodeType: "StatCondition",
    Param0: "Difficulty",
    Param1: ">",
    Param2: "1"

};
window.defaultAIData.IsDifficultyLow = {
    NodeType: "StatCondition",
    Param0: "Difficulty",
    Param1: "<: ",
    Param2: "1"

};
window.defaultAIData.UseDashMovement = {
    NodeType: "Action"

};
window.defaultAIData.SetCiviliansAsEnemiesInMoveCalculation = {
    NodeType: "Action"

};
window.defaultAIData.SetNoCoverMovement = {
    NodeType: "Action"

};
window.defaultAIData.HasPriorityTargetUnit = {
    NodeType: "Condition"

};
window.defaultAIData.HasPriorityTargetObject = {
    NodeType: "Condition"

};
window.defaultAIData.HasPriorityTarget = {
    NodeType: "Selector",
    Child0: "HasPriorityTargetUnit",
    Child1: "HasValidProtectDeviceTarget"

};
window.defaultAIData.HasValidProtectDeviceTarget = {
    NodeType: "Sequence",
    Child0: "HasPriorityTargetObject",
    Child1: "PriorityTargetNotAttackedThisTurn "

};
window.defaultAIData.PriorityTargetNotAttackedThisTurn = {
    NodeType: "StatCondition",
    Param0: "PriorityObjectAttackCount",
    Param1: "::",
    Param2: "0"

};
window.defaultAIData.HasEnemyVIP = {
    NodeType: "Condition"
        //  Slightly different from HasPriorityTargetUnit in that the Enemy VIP is not always the priority target.
};
window.defaultAIData.TargetIsPriorityUnit = {
    NodeType: "Condition"

};
window.defaultAIData.TargetIsPriorityObject = {
    NodeType: "Condition"

};
window.defaultAIData.TargetIsEnemyVIP = {
    NodeType: "Condition"

};
window.defaultAIData["AffectedByEffect-MindControl"] = {
    NodeType: "Condition"

};
window.defaultAIData["AffectedByEffect-RageTriggered"] = {
    NodeType: "Condition"

};
window.defaultAIData["AffectedByEffect-PsychosisTriggered"] = {
    NodeType: "Condition"

};
window.defaultAIData["AffectedByEffect-GatekeeperClosedEffect"] = {
    NodeType: "Condition"

};
window.defaultAIData["AffectedByEffect-WrathCannonStage1Effect"] = {
    NodeType: "Condition"

};
window.defaultAIData["AffectedByEffect-FrenzyEffect"] = {
    NodeType: "Condition"

};
window.defaultAIData["AffectedByEffect-Burrowed"] = {
    NodeType: "Condition"

};
window.defaultAIData["TargetAffectedByEffect-MarkedTarget"] = {
    NodeType: "Condition"

};
window.defaultAIData["AffectedByEffect-Poisoned"] = {
    NodeType: "Condition"

};
window.defaultAIData["TargetAffectedByEffect-Disoriented"] = {
    NodeType: "Condition"

};
window.defaultAIData["TargetAffectedByEffect-Confused"] = {
    NodeType: "Condition"

};
window.defaultAIData["TargetAffectedByEffect-Panicked"] = {
    NodeType: "Condition"

};
window.defaultAIData["TargetAffectedByEffect-Suppression"] = {
    NodeType: "Condition"

};
window.defaultAIData["TargetIsApplyingEffect-Suppression"] = {
    NodeType: "Condition"

};
window.defaultAIData.TargetWillWeakened = {
    NodeType: "Selector",
    Child0: "TargetAffectedByEffect-Disoriented",
    Child1: "TargetAffectedByEffect-Confused",
    Child2: "TargetAffectedByEffect-Panicked",
    Child3: "TargetNotAffectedByDominated"
};

window.defaultAIData.TargetWillunWeakened = {
    NodeType: "Inverter",
    Child0: "TargetWillWeakened"

};
window.defaultAIData["IsMissionOfType-Terror"] = {
    NodeType: "Condition"

};
window.defaultAIData.IsAIInCivilianRadius = {
    NodeType: "Condition"

};
window.defaultAIData.HasMultipleEnergyShieldTargets = {
    NodeType: "StatCondition",
    Param0: "AbilityTargetUnitCount-EnergyShield",
    Param1: ">: ",
    Param2: "3"
        //  Param2 count includes self.
};
window.defaultAIData.HasAnyEnergyShieldTargets = {
    NodeType: "StatCondition",
    Param0: "AbilityTargetUnitCount-EnergyShield",
    Param1: ">: ",
    Param2: "2"

};
window.defaultAIData.TargetHasLowHP = {
    NodeType: "TargetStatCondition",
    Param0: "eStat_HP",
    Param1: "<: ",
    Param2: "40%"

};
window.defaultAIData.TargetHasHighHP = {
    NodeType: "TargetStatCondition",
    Param0: "eStat_HP",
    Param1: ">: ",
    Param2: "75%"

};
window.defaultAIData.TargetHasMaxHP = {
    NodeType: "TargetStatCondition",
    Param0: "eStat_HP",
    Param1: ">: ",
    Param2: "100%"

};
window.defaultAIData.TargetWounded = {
    NodeType: "Inverter",
    Child0: "TargetHasMaxHP"

};
window.defaultAIData.TargetIsKillable = {
    NodeType: "Condition"

};
window.defaultAIData.TargetHitChanceLow = {
    NodeType: "Condition"

};
window.defaultAIData.TargetHitChanceHigh = {
    NodeType: "Condition"

};
window.defaultAIData.IsFlankingTarget = {
    NodeType: "Condition"

};
window.defaultAIData.TargetIsCivilian = {
    NodeType: "Condition"

};
window.defaultAIData.TargetIsNotCivilian = {
    NodeType: "Inverter",
    Child0: "TargetIsCivilian"

};
window.defaultAIData.TargetIsEnemy = {
    NodeType: "Condition"

};
window.defaultAIData.TargetIsAlly = {
    NodeType: "Condition"

};
window.defaultAIData.TargetIsAdvent = {
    NodeType: "Condition"

};
window.defaultAIData.TargetIsAlien = {
    NodeType: "Condition"

};
window.defaultAIData.TargetIsNotAlien = {
    NodeType: "Inverter",
    Child0: "TargetIsAlien"

};
window.defaultAIData.TargetIsRobotic = {
    NodeType: "Condition"

};
window.defaultAIData.TargetIsClosestValidTarget = {
    NodeType: "Condition"

};
window.defaultAIData.TargetIsNotAttackable = {
    NodeType: "Condition"
        //  Dead", or incapacitated.
};
window.defaultAIData["FindDestination-FallBack"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestination-Defensive"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestination-Standard"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestination-Aggressive"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestination-Fanatic"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestination-AdvanceCover"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestination-Flanking"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestination-Hunting"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestination-Melee"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestination-MeleeDefensive"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestination-MeleeAggressive"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestination-MeleeFanatic"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestination-CivilianGreen"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestination-CivilianRed"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestination-RandomNoCover"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestinationWithLoS-Teleport"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestinationWithLoS-IsoTeleport"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestinationWithLoS-FallBack"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestinationWithLoS-Defensive"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestinationWithLoS-Standard"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestinationWithLoS-Aggressive"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestinationWithLoS-Fanatic"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestinationWithLoS-AdvanceCover"] = {
    NodeType: "Action"

};
window.defaultAIData["FindDestinationWithLoS-Flanking"] = {
    NodeType: "Action"

};
window.defaultAIData["FindRestrictedDestination-FallBack"] = {
    NodeType: "Action"

};
window.defaultAIData["FindRestrictedDestination-Defensive"] = {
    NodeType: "Action"

};
window.defaultAIData["FindRestrictedDestination-Standard"] = {
    NodeType: "Action"

};
window.defaultAIData["FindRestrictedDestination-Aggressive"] = {
    NodeType: "Action"

};
window.defaultAIData["FindRestrictedDestination-Fanatic"] = {
    NodeType: "Action"

};
window.defaultAIData["FindRestrictedDestination-AdvanceCover"] = {
    NodeType: "Action"

};
window.defaultAIData["FindRestrictedDestination-Melee"] = {
    NodeType: "Action"

};
window.defaultAIData["FindRestrictedDestination-MeleeDefensive"] = {
    NodeType: "Action"

};
window.defaultAIData["FindRestrictedDestination-MeleeFanatic"] = {
    NodeType: "Action"

};
window.defaultAIData["FindRestrictedDestination-Teleport"] = {
    NodeType: "Action"

};
window.defaultAIData["FindRestrictedDestination-IsoTeleport"] = {
    NodeType: "Action"

};
window.defaultAIData["FindRestrictedDestination-MimicBeacon"] = {
    NodeType: "Action"

};
window.defaultAIData["FindRestrictedDestination-Burrow"] = {
    NodeType: "Action"

};
window.defaultAIData.ResetDestinationSearch = {
    NodeType: "Action"

};
window.defaultAIData.RestrictToEnemyLoS = {
    NodeType: "Action"

};
window.defaultAIData.RestrictToAllyLoS = {
    NodeType: "Action"

};
window.defaultAIData.RestrictToFlanking = {
    NodeType: "Action"

};
window.defaultAIData["RestrictToAbilityRange-ThrowGrenade"] = {
    NodeType: "Action"

};
window.defaultAIData["RestrictToAbilityRange-PoisonSpit"] = {
    NodeType: "Action"

};
window.defaultAIData["RestrictToAbilityRange-AcidBlob"] = {
    NodeType: "Action"

};
window.defaultAIData["RestrictToAbilityRange-MicroMissiles"] = {
    NodeType: "Action"

};
window.defaultAIData["RestrictToAbilityRange-BlazingPinionsStage1"] = {
    NodeType: "Action"

};
window.defaultAIData["RestrictToAbilityRange-PsiDimensionalRiftStage1"] = {
    NodeType: "Action"

};
window.defaultAIData["RestrictToAbilityRange-NullLance"] = {
    NodeType: "Action"

};
window.defaultAIData["RestrictToAbilityRange-PsiMindControl"] = {
    NodeType: "Action"

};
window.defaultAIData["RestrictToAbilityRange-AnimaInversion"] = {
    NodeType: "Action"

};
window.defaultAIData["RestrictToAbilityRange-PsiBombStage1"] = {
    NodeType: "Action"

};
window.defaultAIData["RestrictToAbilityRange-StandardShot"] = {
    NodeType: "Action"

};
window.defaultAIData["RestrictToAbilityRange-Suppression"] = {
    NodeType: "Action"

};
window.defaultAIData["RestrictToPotentialTargetRange-EnergyShield"] = {
    NodeType: "Action"
        //  Requires a potential target.  Used for finding a destination to shield our 'best' unit.
};
window.defaultAIData["RestrictToAlliedAbilityRange-EnergyShield"] = {
    NodeType: "Action",
    Param0: "2"
        // Param0 is the minimum number of Allied Targets in range for each tile to be considered.
};
window.defaultAIData["RestrictToPotentialTargetRange-StandardMelee"] = {
    NodeType: "Action"
        //  StandardMelee has aliases in equivalentAbilities list.
};
window.defaultAIData["RestrictToPotentialTargetRange-NullLance"] = {
    NodeType: "Action"

};
window.defaultAIData["AddAbilityRangeWeight-EnergyShield"] = {
    NodeType: "Action",
    Param0: "5.5"

};
window.defaultAIData.FindGrenadeDestination = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-ThrowGrenade",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Standard"

};
window.defaultAIData.FindPoisonSpitDestination = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-PoisonSpit",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Standard"

};
window.defaultAIData.FindAcidBlobDestination = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-AcidBlob",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Standard"

};
window.defaultAIData.FindMicroMissilesDestination = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-MicroMissiles",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Fanatic"

};
window.defaultAIData.FindBlazingPinionsDestination = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-BlazingPinionsStage1",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Fanatic"

};
window.defaultAIData.FindShieldDestinationDefensive = {
    NodeType: "Selector",
    Child0: "FindShieldDestinationDefensive_MultipleUnits",
    Child1: "FindShieldDestinationDefensive_BestUnit"

};
window.defaultAIData.FindShieldDestinationDefensive_MultipleUnits = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAlliedAbilityRange-EnergyShield",
    Child2: "AddAbilityRangeWeight-EnergyShield",
    Child3: "FindRestrictedDestination-Defensive"

};
window.defaultAIData.FindShieldDestinationDefensive_BestUnit = {
    NodeType: "Sequence",
    Child0: "SelectPotentialTargetForEnergyShield",
    Child1: "ResetDestinationSearch",
    Child2: "RestrictToPotentialTargetRange-EnergyShield",
    Child3: "FindRestrictedDestination-Defensive"

};
window.defaultAIData.FindDimensionalRiftDestination = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-PsiDimensionalRiftStage1",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Defensive"

};
window.defaultAIData.FindMindControlDestinationDefensive = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-PsiMindControl",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Defensive"

};
window.defaultAIData.FindAnimaInversionDestination = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-AnimaInversion",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Fanatic"

};
window.defaultAIData.FindPsiBombDestination = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-PsiBombStage1",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Standard"

};
window.defaultAIData.FindNullLanceDestination = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-NullLance",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Standard"

};
window.defaultAIData.FindPsiBombTeleportDestination = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-PsiBombStage1",
    Child2: "RestrictToEnemyLoS",
    Child3: "UseDashMovement",
    Child4: "FindRestrictedDestination-Teleport"

};
window.defaultAIData.FindPsiMindControlTeleportDestination = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-PsiMindControl",
    Child2: "RestrictToEnemyLoS",
    Child3: "UseDashMovement",
    Child4: "FindRestrictedDestination-Teleport"

};
window.defaultAIData.FindPsiDimensionalRiftTeleportDestination = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-PsiDimensionalRiftStage1",
    Child2: "RestrictToEnemyLoS",
    Child3: "UseDashMovement",
    Child4: "FindRestrictedDestination-Teleport"

};
window.defaultAIData.FindNullLanceTeleportDestination = {
    NodeType: "Sequence",
    Child0: "RestrictToPotentialTargetRange-NullLance",
    Child1: "UseDashMovement",
    Child2: "FindRestrictedDestination-Teleport"

};
window.defaultAIData.FindSuppressionDestination = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-Suppression",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Standard"

};
window.defaultAIData["SetAbilityForFindDestination-StunLance"] = {
    NodeType: "Action"

};
window.defaultAIData["SetAbilityForFindDestination-DevastatingPunch"] = {
    NodeType: "Action"

};
window.defaultAIData.SkipMove = {
    NodeType: "Action"

};
window.defaultAIData.SelectMoveStandard = {
    NodeType: "Selector",
    Child0: "SelectMoveProfileByJob",
    Child1: "MoveStandard"

};
window.defaultAIData.SelectMove_JobOrDefensive = {
    NodeType: "Selector",
    Child0: "SelectMoveProfileByJob",
    Child1: "MoveDefensive"

};
window.defaultAIData.SelectMove_JobOrAggressive = {
    NodeType: "Selector",
    Child0: "SelectMoveProfileByJob",
    Child1: "MoveAggressive"

};
window.defaultAIData.SelectNCMove_JobOrFanatic = {
    NodeType: "Selector",
    Child0: "SelectNCMoveProfileByJob",
    Child1: "MoveNoCover"

};
window.defaultAIData.SelectMove_JobOrHunter = {
    NodeType: "Selector",
    Child0: "SelectMoveProfileByJob",
    Child1: "MoveHunting"

};
window.defaultAIData.SelectMove_JobOrFlanking = {
    NodeType: "Selector",
    Child0: "SelectMoveProfileByJob",
    Child1: "MoveFlanking"

};
window.defaultAIData.SelectMove_JobOrMelee = {
    NodeType: "Selector",
    Child0: "SelectMoveProfileByJob",
    Child1: "MoveMelee"

};
window.defaultAIData.SelectUnsafeMove_JobOrMelee = {
    NodeType: "Selector",
    Child0: "SelectMoveProfileByJobUnsafe",
    Child1: "MoveMeleeUnsafe"

};
window.defaultAIData.FallBack = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "FallBackUnsafe"

};
window.defaultAIData.FallBackUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindBestFallbackDestination",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.FindBestFallbackDestination = {
    NodeType: "Selector",
    Child0: "FindDestinationWithLoS-Defensive",
    Child1: "FindDestinationWithLoS-FallBack",
    Child2: "FindDestination-Defensive",
    Child3: "FindDestination-FallBack"

};
window.defaultAIData.FallBackWithLoS = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "FallBackWithLoSUnsafe"

};
window.defaultAIData.FallBackWithLoSUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindDestinationWithLoS-FallBack",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.NCFallBackWithLoS = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "NCFallBackWithLoSUnsafe"

};
window.defaultAIData.NCFallBackWithLoSUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "SetNoCoverMovement",
    Child3: "FindDestinationWithLoS-FallBack",
    Child4: "SelectAbility-StandardMove"

};
window.defaultAIData.FindFriendlyFallbackDestination = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAllyLoS",
    Child2: "FindRestrictedDestination-FallBack"

};
window.defaultAIData.FallBackIfFirstAbility = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "FallBack"

};
window.defaultAIData.FallBackIfFirstAbilityUnsafe = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "FallBackUnsafe"

};
window.defaultAIData.FallBackWithLoSIfFirstAbility = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "FallBackWithLoS"

};
window.defaultAIData.FallBackWithLoSIfFirstAbilityUnsafe = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "FallBackWithLoSUnsafe"

};
window.defaultAIData.MoveDefensive = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveDefensiveUnsafe"

};
window.defaultAIData.MoveDefensiveUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindDestination-Defensive",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.NCMoveDefensive = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "NCMoveDefensiveUnsafe"

};
window.defaultAIData.NCMoveDefensiveUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "SetNoCoverMovement",
    Child3: "FindDestination-Defensive",
    Child4: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveDefensiveIfFirstAbility = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveDefensive"

};
window.defaultAIData.MoveDefensiveIfFirstAbilityUnsafe = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveDefensiveUnsafe"

};
window.defaultAIData.MoveDefensiveWithLoS = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveDefensiveWithLoSUnsafe"

};
window.defaultAIData.MoveDefensiveWithLoSUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindDestinationWithLoS-Defensive",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveDefensiveWithLoSIfFirstAbility = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveDefensiveWithLoS"

};
window.defaultAIData.MoveDefensiveWithLoSIfFirstAbilityUnsafe = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveDefensiveWithLoSUnsafe"

};
window.defaultAIData.MoveStandard = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveStandardUnsafe"

};
window.defaultAIData.MoveStandardUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "FindDestination-Standard",
    Child2: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveStandardIfFirstAbility = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveStandard"

};
window.defaultAIData.MoveStandardWithLoS = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveStandardWithLoSUnsafe"

};
window.defaultAIData.MoveStandardWithLoSUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindDestinationWithLoS-Standard",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveStandardWithLoSIfFirstAbility = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveStandardWithLoS"

};
window.defaultAIData.MoveStandardWithLoSIfFirstAbilityUnsafe = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveStandardWithLoSUnsafe"

};
window.defaultAIData.MoveAggressiveUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindDestinationWithLoS-Aggressive",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveAggressive = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveAggressiveUnsafe"

};
window.defaultAIData.MoveAggressiveIfFirstAbility = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveAggressive"

};
window.defaultAIData.MoveAggressiveIfFirstAbilityUnsafe = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveAggressiveUnsafe"

};
window.defaultAIData.NCMoveAggressiveUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "SetNoCoverMovement",
    Child3: "FindDestinationWithLoS-Aggressive",
    Child4: "SelectAbility-StandardMove"

};
window.defaultAIData.NCMoveAggressive = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "NCMoveAggressiveUnsafe"

};
window.defaultAIData.MoveNoCoverUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "SetNoCoverMovement",
    Child3: "FindDestination-Fanatic",
    Child4: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveNoCover = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveNoCoverUnsafe"

};
window.defaultAIData.MoveNoCoverIfFirstAbility = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveNoCover"

};
window.defaultAIData.MoveNoCoverIfFirstAbilityUnsafe = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveNoCoverUnsafe"

};
window.defaultAIData.MoveHuntingUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "FindDestinationForHunter",
    Child2: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveHunting = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveHuntingUnsafe"

};
window.defaultAIData.FindDestinationForHunter = {
    NodeType: "Selector",
    Child0: "HuntWithLoS",
    Child1: "BestHuntDestinationWithoutLoS"

};
window.defaultAIData.HuntWithLoS = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToEnemyLoS",
    Child2: "FindDestination-Hunting"

};
window.defaultAIData.BestHuntDestinationWithoutLoS = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "FindDestination-Hunting"

};
window.defaultAIData.MoveAdvanceToCover = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveAdvanceToCoverUnsafe"

};
window.defaultAIData.MoveAdvanceToCoverUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindDestination-AdvanceCover",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.NCMoveAdvanceToCover = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "NCMoveAdvanceToCoverUnsafe"

};
window.defaultAIData.NCMoveAdvanceToCoverUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "SetNoCoverMovement",
    Child3: "FindDestination-AdvanceCover",
    Child4: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveFlanking = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveFlankingUnsafe"

};
window.defaultAIData.MoveFlankingUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindDestinationWithLoS-Flanking",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveFlankingIfFirstAbility = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveFlanking"

};
window.defaultAIData.MoveFlankingIfFirstAbilityUnsafe = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveFlankingUnsafe"

};
window.defaultAIData.NCMoveFlanking = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "NCMoveFlankingUnsafe"

};
window.defaultAIData.NCMoveFlankingUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "SetNoCoverMovement",
    Child3: "FindDestinationWithLoS-Flanking",
    Child4: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveMelee = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveMeleeUnsafe"

};
window.defaultAIData.MoveMeleeUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindMeleeDestination",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveMeleeDefensive = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveMeleeDefensiveUnsafe"

};
window.defaultAIData.MoveMeleeDefensiveUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindMeleeDestinationDefensive",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveMeleeFANATIC = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveMeleeFANATICUnsafe"

};
window.defaultAIData.MoveMeleeFANATICUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindMeleeDestinationFANATIC",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveToPotentialMeleeFANATIC = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveToPotentialMeleeFANATICUnsafe"

};
window.defaultAIData.MoveToPotentialMeleeFANATICUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "FindPotentialMeleeDestinationFANATIC",
    Child2: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveMeleeIfFirstAbility = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveMelee"

};
window.defaultAIData.MoveMeleeDefensiveIfFirstAbility = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveMeleeDefensive"

};
window.defaultAIData.MoveMeleeIfFirstAbilityFANATIC = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveMeleeFANATIC"

};
window.defaultAIData.MoveToPotentialMeleeIfFirstAbilityFANATIC = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "IncludeAlliesAsMeleeTargets",
    Child2: "MoveToPotentialMeleeFANATIC"

};
window.defaultAIData.MoveMeleeIfFirstAbilityUnsafe = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveMeleeUnsafe"

};
window.defaultAIData.MoveMeleeDefensiveIfFirstAbilityUnsafe = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveMeleeDefensiveUnsafe"

};
window.defaultAIData.MoveMeleeIfFirstAbilityFANATICUnsafe = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveMeleeFANATICUnsafe"

};
window.defaultAIData.MoveMeleeDash = {
    NodeType: "Selector",
    Child0: "IfFirstActionMoveMeleeDash",
    Child1: "MoveMelee"

};
window.defaultAIData.MoveMeleeDashUnsafe = {
    NodeType: "Selector",
    Child0: "IfFirstActionMoveMeleeDashUnsafe",
    Child1: "MoveMeleeUnsafe"

};
window.defaultAIData.IfFirstActionMoveMeleeDash = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AttemptMoveMeleeDash"

};
window.defaultAIData.IfFirstActionMoveMeleeDashUnsafe = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AttemptMoveMeleeDashUnsafe"

};
window.defaultAIData.AttemptMoveMeleeDash = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "AttemptMoveMeleeDashUnsafe"

};
window.defaultAIData.AttemptMoveMeleeDashUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "UseDashMovement",
    Child3: "FindMeleeDestination",
    Child4: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveMeleeDashFANATIC = {
    NodeType: "Selector",
    Child0: "IfFirstActionMoveMeleeDashFANATIC",
    Child1: "MoveMeleeFANATIC"

};
window.defaultAIData.MoveMeleeDashFANATICUnsafe = {
    NodeType: "Selector",
    Child0: "IfFirstActionMoveMeleeDashFANATICUnsafe",
    Child1: "MoveMeleeFANATICUnsafe"

};
window.defaultAIData.IfFirstActionMoveMeleeDashFANATIC = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AttemptMoveMeleeDashFANATIC"

};
window.defaultAIData.IfFirstActionMoveMeleeDashFANATICUnsafe = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AttemptMoveMeleeDashFANATICUnsafe"

};
window.defaultAIData.AttemptMoveMeleeDashFANATIC = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "AttemptMoveMeleeDashFANATICUnsafe"

};
window.defaultAIData.AttemptMoveMeleeDashFANATICUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "UseDashMovement",
    Child3: "FindMeleeDestinationFANATIC",
    Child4: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveMeleePriorityTarget = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveMeleePriorityTargetUnsafe"

};
window.defaultAIData.MoveMeleePriorityTargetUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "UseDashMovement",
    Child3: "FindPriorityMeleeDestination",
    Child4: "SelectAbility-StandardMove"

};
window.defaultAIData.FindMeleeDestination = {
    NodeType: "Sequence",
    Child0: "IncludeCiviliansIfTerrorist",
    Child1: "SelectPotentialMeleeTarget",
    Child2: "RestrictToPotentialTargetRange-StandardMelee",
    Child3: "FindRestrictedDestination-Melee"

};
window.defaultAIData.FindMeleeDestinationDefensive = {
    NodeType: "Sequence",
    Child0: "IncludeCiviliansIfTerrorist",
    Child1: "SelectPotentialMeleeTarget",
    Child2: "RestrictToPotentialTargetRange-StandardMelee",
    Child3: "FindRestrictedDestination-MeleeDefensive"

};
window.defaultAIData.FindMeleeDestinationFANATIC = {
    NodeType: "Sequence",
    Child0: "IncludeCiviliansIfTerrorist",
    Child1: "SelectPotentialMeleeTarget",
    Child2: "RestrictToPotentialTargetRange-StandardMelee",
    Child3: "FindRestrictedDestination-MeleeFanatic"

};
window.defaultAIData.FindPriorityMeleeDestination = {
    NodeType: "Sequence",
    Child0: "SelectPotentialMeleePriorityTarget",
    Child1: "RestrictToPotentialTargetRange-StandardMelee",
    Child2: "FindRestrictedDestination-MeleeFanatic"

};
window.defaultAIData.FindPotentialMeleeDestinationFANATIC = {
    NodeType: "Sequence",
    Child0: "IncludeCiviliansIfTerrorist",
    Child1: "RestrictToPotentialTargetRange-StandardMelee",
    Child2: "FindRestrictedDestination-MeleeFanatic"

};
window.defaultAIData.TryTerroristMoveMeleeFANATICUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "IncludeCiviliansIfTerrorist",
    Child3: "FindMeleeDestinationFANATIC",
    Child4: "SelectAbility-StandardMove"

};
window.defaultAIData.TryTerroristMoveMeleeFANATIC = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "TryTerroristMoveMeleeFANATICUnsafe"

};
window.defaultAIData.MoveRandomUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "FindDestination-RandomNoCover",
    Child2: "SelectAbility-StandardMove"

};
window.defaultAIData.MoveRandom = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveRandomUnsafe"

};
window.defaultAIData.MoveStandardWithDestination = {
    NodeType: "Selector",
    Child0: "MoveStandardWithDestinationUnsafe",
    Child1: "DeleteTopAlertAndHeatSeek"

};
window.defaultAIData.MoveStandardWithDestinationUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "HasValidAlertDataLocation",
    Child2: "FindAlertDataMovementDestination",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.DeleteTopAlertAndHeatSeek = {
    NodeType: "Sequence",
    Child0: "SSDeleteAlertDataIfValid",
    Child1: "SelectHeatSeekMove"

};
window.defaultAIData.SSDeleteAlertDataIfValid = {
    NodeType: "Successor",
    Child0: "DeleteAlertDataIfValid"

};
window.defaultAIData.DeleteAlertDataIfValid = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "HasValidAlertDataLocation",
    Child2: "DeleteCurrentAlertData"

};
window.defaultAIData.HeatSeekNearestUnconcealed = {
    NodeType: "Action"

};
window.defaultAIData.SelectHeatSeekMove = {
    NodeType: "Sequence",
    Child0: "UseDashMovement",
    Child1: "HeatSeekNearestUnconcealed",
    Child2: "SelectAbility-StandardMove"

};
window.defaultAIData.SetAlertDataStack = {
    NodeType: "Action"

};
window.defaultAIData.SetNextAlertData = {
    NodeType: "Action"

};
window.defaultAIData.DeleteCurrentAlertData = {
    NodeType: "Action"

};
window.defaultAIData.UpdateBestAlertData = {
    NodeType: "Action"

};
window.defaultAIData.AlertDataMovementUseCover = {
    NodeType: "Action"

};
window.defaultAIData.AlertDataMovementIgnoreCover = {
    NodeType: "Action"

};
window.defaultAIData.FindAlertDataMovementDestination = {
    NodeType: "Action"

};
window.defaultAIData.AlertDataIsAbsoluteKnowledge = {
    NodeType: "Condition"

};
window.defaultAIData.AlertDataWasSoundMade = {
    NodeType: "Condition"

};
window.defaultAIData.AlertDataWasEnemyThere = {
    NodeType: "Condition"

};
window.defaultAIData.AlertDataIsCorpseThere = {
    NodeType: "Condition"

};
window.defaultAIData.AlertDataIsAggressive = {
    NodeType: "Condition"

};
window.defaultAIData.AlertDataTileIsVisible = {
    NodeType: "Condition"

};
window.defaultAIData.AlertDataTileNotVisible = {
    NodeType: "Inverter",
    Child0: "AlertDataTileIsVisible"

};
window.defaultAIData["AlertDataHasTag-Defend"] = {
    NodeType: "Condition"

};
window.defaultAIData["AlertDataHasTag-Advance"] = {
    NodeType: "Condition"

};
window.defaultAIData["AlertDataIsType-SeesSpottedUnit"] = {
    NodeType: "Condition"
        //  red alert trigger
};
window.defaultAIData["AlertDataIsType-ThrottlingBeacon"] = {
    NodeType: "Condition"
        //  group-specific trigger to influence activity-balancing from the FightManager.
};
window.defaultAIData["AlertDataIsType-MapwideAlert"] = {
    NodeType: "Condition"
        //  Red alert trigger", kicked off by Kismet", with lower priority than visible enemies.
};
window.defaultAIData["AlertDataIsType-TookDamage"] = {
    NodeType: "Condition"
        //  Conditional red alert trigger (with LOS to damage instigator"

};
window.defaultAIData["AlertDataIsType-TakingFire"] = {
    NodeType: "Condition"
        //  Conditional red alert trigger (with LOS to shot instigator and within sound range"

};
window.defaultAIData["AlertDataIsType-DetectedNewCorpse"] = {
    NodeType: "Condition"
        //  Yellow alert ...
};
window.defaultAIData["AlertDataIsType-DetectedAllyTakingDamage"] = {
    NodeType: "Condition"
        //  Yellow alert ...
};
window.defaultAIData["AlertDataIsType-DetectedSound"] = {
    NodeType: "Condition"
        //  Yellow alert ...
};
window.defaultAIData["AlertDataIsType-AlertedByYell"] = {
    NodeType: "Condition"
        // 
};
window.defaultAIData["AlertDataIsType-AlertedByCommLink"] = {
    NodeType: "Condition"
        // 
};
window.defaultAIData["AlertDataIsType-CivilianRaisedAlarm"] = {
    NodeType: "Condition"
        // 
};
window.defaultAIData["AlertDataIsType-XCOMAchievedObjective"] = {
    NodeType: "Condition"
        // 
};
window.defaultAIData["AlertDataIsType-SeesExplosion"] = {
    NodeType: "Condition"
        // 
};
window.defaultAIData["AlertDataIsType-SeesSmoke"] = {
    NodeType: "Condition"
        // 
};
window.defaultAIData["AlertDataIsType-SeesFire"] = {
    NodeType: "Condition"
        // 
};
window.defaultAIData["AlertDataIsType-SeesAlertedAllies"] = {
    NodeType: "Condition"
        // 
};
window.defaultAIData.AlertDataWasSoundScary = {
    NodeType: "StatCondition",
    Param0: "AlertDataRadius",
    Param1: ">: ",
    Param2: "10"

};
window.defaultAIData.IsAlertDataKismet = {
    NodeType: "Selector",
    Child0: "AlertDataHasTag-Defend",
    Child1: "AlertDataHasTag-Advance"

};
window.defaultAIData.IsAlertDataNotKismet = {
    NodeType: "Inverter",
    Child0: "IsAlertDataKismet"

};
window.defaultAIData.IsAlertDataScary = {
    NodeType: "Selector",
    Child0: "AlertDataIsType-TakingFire",
    Child1: "AlertDataIsType-DetectedAllyTakingDamage",
    Child2: "AlertDataIsType-SeesExplosion",
    Child3: "AlertDataIsType-SeesAlertedAllies"

};
window.defaultAIData.IsAlertDataNOTScary = {
    NodeType: "Inverter",
    Child0: "IsAlertDataScary"

};
window.defaultAIData.IfAlertDataIsScary = {
    NodeType: "Selector",
    Child0: "ScoreIfAlertDataScary",
    Child1: "AddToAlertDataScore_0"

};
window.defaultAIData.ScoreIfAlertDataScary = {
    NodeType: "Sequence",
    Child0: "IsAlertDataScary",
    Child1: "AddToAlertDataScore_50"

};
window.defaultAIData.PurgeAlertDataIfNotScary = {
    NodeType: "Sequence",
    Child0: "IsAlertDataNOTScary",
    Child1: "DeleteCurrentAlertData"

};
window.defaultAIData.HasValidAlertDataLocation = {
    NodeType: "Condition"

};
window.defaultAIData.IterateAlertDataForVisibility = {
    NodeType: "RepeatUntilFail",
    Child0: "CheckVisibilityOnAlert"

};
window.defaultAIData.CheckVisibilityOnAlert = {
    NodeType: "Sequence",
    Child0: "SetNextAlertData",
    Child1: "SSScoreAlertDataVisibility",
    Child2: "UpdateBestAlertData",
    Child3: "EarlyExitIfFoundValidAlert"

};
window.defaultAIData.SSScoreAlertDataVisibility = {
    NodeType: "Successor",
    Child0: "ScoreAlertDataVisibility"

};
window.defaultAIData.ScoreAlertDataVisibility = {
    NodeType: "Sequence",
    Child0: "AlertDataTileIsVisible",
    Child1: "AddToAlertDataScore_100"

};
window.defaultAIData.EarlyExitIfFoundValidAlert = {
    NodeType: "Inverter",
    Child0: "HasValidAlertDataLocation"
        //  return false if we have a alert data score > 0.
};
window.defaultAIData.GenericAlertHandler = {
    NodeType: "Selector",
    Child0: "GenericOrangeMovement",
    Child1: "GenericYellowMovement",
    Child2: "SelectHeatSeekMove"

};
window.defaultAIData.GenericOrangeMovement = {
    NodeType: "Sequence",
    Child0: "IsOrangeAlert",
    Child1: "TrySelectOrangeAlertAction"

};
window.defaultAIData.GenericYellowMovement = {
    NodeType: "Sequence",
    Child0: "IsYellowAlert",
    Child1: "TrySelectYellowAlertAction"

};
window.defaultAIData.NoEnemySpotted = {
    NodeType: "Inverter",
    Child0: "AlertDataIsAbsoluteKnowledge"

};
window.defaultAIData.IsEnemySpotted = {
    NodeType: "Selector",
    Child0: "IsRedAlert",
    Child1: "IsOrangeAlert"

};
window.defaultAIData.TrySelectOrangeAlertAction = {
    NodeType: "Sequence",
    Child0: "SelectAlertData",
    Child1: "HandleAlertData"

};
window.defaultAIData.SelectAlertData = {
    NodeType: "Sequence",
    Child0: "SetAlertDataStack",
    Child1: "GenericSelectBestAlert",
    Child2: "HasValidAlertDataLocation"

};
window.defaultAIData.HandleAlertData = {
    NodeType: "Selector",
    Child0: "TryAttackPriorityTarget",
    Child1: "MoveToAlertData"

};
window.defaultAIData.MoveToAlertData = {
    NodeType: "Sequence",
    Child0: "SetAlertDataStack",
    Child1: "GenericSelectBestAlert",
    Child2: "HasValidAlertDataLocation",
    Child3: "AlertDataMovementUseCover",
    Child4: "MoveStandardWithDestination"

};
window.defaultAIData.TrySelectYellowAlertAction = {
    NodeType: "Selector",
    Child0: "TryAttackPriorityTarget",
    Child1: "YellowAlertMove"

};
window.defaultAIData.YellowAlertMove = {
    NodeType: "Sequence",
    Child0: "SetAlertDataStack",
    Child1: "GenericSelectBestAlert",
    Child2: "HasValidAlertDataLocation",
    Child3: "MoveStandardWithDestination"

};
window.defaultAIData.HuntEnemy = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "NotLastActionPoint",
    Child2: "SetAlertDataStack",
    Child3: "GenericSelectBestAlert",
    Child4: "HasValidAlertDataLocation",
    Child5: "MoveStandardWithDestination"

};
window.defaultAIData.HuntEnemyWithCover = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "SetAlertDataStack",
    Child2: "GenericSelectBestAlert",
    Child3: "HasValidAlertDataLocation",
    Child4: "AlertDataMovementUseCover",
    Child5: "MoveStandardWithDestination"

};
window.defaultAIData.HuntEnemyUnsafe = {
    NodeType: "Sequence",
    Child0: "SetAlertDataStack",
    Child1: "GenericSelectBestAlert",
    Child2: "HasValidAlertDataLocation",
    Child3: "MoveStandardWithDestinationUnsafe"

};
window.defaultAIData.MoveToAlertIfNotVisible = {
    NodeType: "Sequence",
    Child0: "HasValidAlertDataLocation",
    Child1: "AlertDataTileNotVisible",
    Child2: "AlertDataMovementUseCover",
    Child3: "MoveStandardWithDestination"

};
window.defaultAIData.MoveToAlert = {
    NodeType: "Selector",
    Child0: "TryAlertMoveWithCover",
    Child1: "TakeAlertMoveWithoutCover"

};
window.defaultAIData.TryAlertMoveWithCover = {
    NodeType: "Sequence",
    Child0: "AlertDataMovementUseCover",
    Child1: "MoveStandardWithDestination"

};
window.defaultAIData.TakeAlertMoveWithoutCover = {
    NodeType: "Sequence",
    Child0: "AlertDataMovementIgnoreCover",
    Child1: "MoveStandardWithDestination"

};
window.defaultAIData.MoveToAlertUnsafe = {
    NodeType: "Selector",
    Child0: "TryAlertMoveWithCoverUnsafe",
    Child1: "TakeAlertMoveWithoutCoverUnsafe"

};
window.defaultAIData.TryAlertMoveWithCoverUnsafe = {
    NodeType: "Sequence",
    Child0: "AlertDataMovementUseCover",
    Child1: "MoveStandardWithDestinationUnsafe"

};
window.defaultAIData.TakeAlertMoveWithoutCoverUnsafe = {
    NodeType: "Sequence",
    Child0: "AlertDataMovementIgnoreCover",
    Child1: "MoveStandardWithDestinationUnsafe"

};
window.defaultAIData.GenericSelectBestAlert = {
    NodeType: "RepeatUntilFail",
    Child0: "GenericEvaluateAlertData"

};
window.defaultAIData.GenericEvaluateAlertData = {
    NodeType: "Sequence",
    Child0: "SetNextAlertData",
    Child1: "GenericScoreAlertData",
    Child2: "UpdateBestAlertData"

};
window.defaultAIData.GenericScoreAlertData = {
    NodeType: "Sequence",
    Child0: "SSScoreInvalidAlertData",
    Child1: "IfAlertIsSpottedTarget",
    Child2: "IfAlertDataIsScary",
    Child3: "IfAlertIsSpottedCorpse",
    Child4: "IfAlertIsHeardNoise",
    Child5: "IfAlertIsDangerous",
    Child6: "ScoreAlertDataAge",
    Child7: "ScoreAlertDataDistance"

};
window.defaultAIData.IfAlertIsSpottedTarget = {
    NodeType: "Selector",
    Child0: "ScoreAlert_AbsoluteKnowledge",
    Child1: "ScoreAlert_FormerKnowledge",
    Child2: "AddToAlertDataScore_0"

};
window.defaultAIData.ScoreAlert_AbsoluteKnowledge = {
    NodeType: "Sequence",
    Child0: "AlertDataIsAbsoluteKnowledge",
    Child1: "AddToAlertDataScore_100"

};
window.defaultAIData.ScoreAlert_FormerKnowledge = {
    NodeType: "Sequence",
    Child0: "AlertDataWasEnemyThere",
    Child1: "AddToAlertDataScore_50"

};
window.defaultAIData.IfAlertIsSpottedCorpse = {
    NodeType: "Selector",
    Child0: "ScoreAlert_SpottedCorpse",
    Child1: "AddToAlertDataScore_0"

};
window.defaultAIData.ScoreAlert_SpottedCorpse = {
    NodeType: "Sequence",
    Child0: "AlertDataIsCorpseThere",
    Child1: "AddToAlertDataScore_30"

};
window.defaultAIData.IfAlertIsHeardNoise = {
    NodeType: "Selector",
    Child0: "ScoreAlert_HeardNoise",
    Child1: "AddToAlertDataScore_0"

};
window.defaultAIData.ScoreAlert_HeardNoise = {
    NodeType: "Sequence",
    Child0: "AlertDataWasSoundMade",
    Child1: "AddToAlertDataScore_15",
    Child2: "IfAlertNoiseIsScary"

};
window.defaultAIData.IfAlertNoiseIsScary = {
    NodeType: "Selector",
    Child0: "ScoreAlert_NoiseScary",
    Child1: "AddToAlertDataScore_0"

};
window.defaultAIData.ScoreAlert_NoiseScary = {
    NodeType: "Sequence",
    Child0: "AlertDataWasSoundScary",
    Child1: "AddToAlertDataScore_10"

};
window.defaultAIData.IfAlertIsDangerous = {
    NodeType: "Selector",
    Child0: "ScoreAlert_Dangerous",
    Child1: "AddToAlertDataScore_0"

};
window.defaultAIData.ScoreAlert_Dangerous = {
    NodeType: "Sequence",
    Child0: "AlertDataIsAggressive",
    Child1: "AddToAlertDataScore_25"

};
window.defaultAIData.ScoreAlertDataAge = {
    NodeType: "Selector",
    Child0: "IsAlertDataKismet",
    Child1: "IfAlertDataOld",
    Child2: "IfAlertDataStale",
    Child3: "IfAlertDataRecent",
    Child4: "IfAlertDataFresh",
    Child5: "AddToAlertDataScore_0"

};
window.defaultAIData.IfAlertDataFresh = {
    NodeType: "Sequence",
    Child0: "IsAlertDataFresh",
    Child1: "AddToAlertDataScore_-5"

};
window.defaultAIData.IsAlertDataFresh = {
    NodeType: "StatCondition",
    Param0: "AlertDataAge",
    Param1: ">: ",
    Param2: "1"

};
window.defaultAIData.IfAlertDataRecent = {
    NodeType: "Sequence",
    Child0: "IsAlertDataRecent",
    Child1: "AddToAlertDataScore_-10"

};
window.defaultAIData.IsAlertDataRecent = {
    NodeType: "StatCondition",
    Param0: "AlertDataAge",
    Param1: ">: ",
    Param2: "2"

};
window.defaultAIData.IfAlertDataStale = {
    NodeType: "Sequence",
    Child0: "IsAlertDataStale",
    Child1: "PurgeAlertDataIfNotScary",
    Child2: "AddToAlertDataScore_-15"

};
window.defaultAIData.IsAlertDataStale = {
    NodeType: "StatCondition",
    Param0: "AlertDataAge",
    Param1: ">: ",
    Param2: "4"

};
window.defaultAIData.IfAlertDataOld = {
    NodeType: "Sequence",
    Child0: "IsAlertDataOld",
    Child1: "DeleteCurrentAlertData",
    Child2: "AddToAlertDataScore_-100"

};
window.defaultAIData.IsAlertDataOld = {
    NodeType: "StatCondition",
    Param0: "AlertDataAge",
    Param1: ">: ",
    Param2: "6"

};
window.defaultAIData.SSScoreInvalidAlertData = {
    NodeType: "Successor",
    Child0: "ScoreInvalidAlertData"

};
window.defaultAIData.ScoreInvalidAlertData = {
    NodeType: "Sequence",
    Child0: "IsAlertNotValidTarget",
    Child1: "AddToAlertDataScore_-500"

};
window.defaultAIData.IsAlertNotValidTarget = {
    NodeType: "Selector",
    Child0: "IsAlertNotValidTarget_UnitIsNotAttackable",
    Child1: "IsAlertNotValidTarget_LastResortUnit"

};
window.defaultAIData.IsAlertNotValidTarget_UnitIsNotAttackable = {
    NodeType: "Sequence",
    Child0: "TargetIsNotAttackable",
    Child1: "DeleteCurrentAlertData"

};
window.defaultAIData.IsAlertNotValidTarget_LastResortUnit = {
    NodeType: "Sequence",
    Child0: "HasNonLastResortEnemies",
    Child1: "IsLastResortTarget"

};
window.defaultAIData.ScoreAlertDataDistance = {
    NodeType: "Selector",
    Child0: "IfAlertDataFar",
    Child1: "IfAlertDataThreeMoves",
    Child2: "IfAlertDataTwoMoves",
    Child3: "AddToAlertDataScore_20"

};
window.defaultAIData.IfAlertDataTwoMoves = {
    NodeType: "Sequence",
    Child0: "IsAlertDataTwoMoves",
    Child1: "AddToAlertDataScore_15"

};
window.defaultAIData.IsAlertDataTwoMoves = {
    NodeType: "StatCondition",
    Param0: "AlertDataDistance",
    Param1: ">",
    Param2: "12"

};
window.defaultAIData.IfAlertDataThreeMoves = {
    NodeType: "Sequence",
    Child0: "IsAlertDataThreeMoves",
    Child1: "AddToAlertDataScore_10"

};
window.defaultAIData.IsAlertDataThreeMoves = {
    NodeType: "StatCondition",
    Param0: "AlertDataDistance",
    Param1: ">",
    Param2: "24"

};
window.defaultAIData.IfAlertDataFar = {
    NodeType: "Sequence",
    Child0: "IsAlertDataFar",
    Child1: "AddToAlertDataScore_5"

};
window.defaultAIData.IsAlertDataFar = {
    NodeType: "StatCondition",
    Param0: "AlertDataDistance",
    Param1: ">",
    Param2: "36"

};
window.defaultAIData.AlertScoreRandom = {
    NodeType: "RandSelector",
    Child0: "AddToAlertDataScore_10",
    Child1: "AddToAlertDataScore_20",
    Child2: "AddToAlertDataScore_30",
    Child3: "AddToAlertDataScore_40",
    Child4: "AddToAlertDataScore_50",
    Child5: "AddToAlertDataScore_60 "

};
window.defaultAIData.ScoreAlertFor_Defend = {
    NodeType: "Selector",
    Child0: "ScoreAlertIfDefend",
    Child1: "AddToAlertDataScore_0"

};
window.defaultAIData.ScoreAlertIfDefend = {
    NodeType: "Sequence",
    Child0: "AlertDataHasTag-Defend",
    Child1: "AddToAlertDataScore_50"

};
window.defaultAIData.ScoreAlertFor_Advance = {
    NodeType: "Selector",
    Child0: "ScoreAlertIfAdvance",
    Child1: "AddToAlertDataScore_0"

};
window.defaultAIData.ScoreAlertIfAdvance = {
    NodeType: "Sequence",
    Child0: "AlertDataHasTag-Advance",
    Child1: "AddToAlertDataScore_50"

};
window.defaultAIData.SetNextTarget = {
    NodeType: "Action"

};
window.defaultAIData.HasUnconcealedEnemies = {
    NodeType: "Condition"

};
window.defaultAIData.UpdateBestTarget = {
    NodeType: "Action"

};
window.defaultAIData.TargetHasHighestShotHitChance = {
    NodeType: "Condition"

};
window.defaultAIData.GenericSelectBestTarget = {
    NodeType: "RepeatUntilFail",
    Child0: "GenericEvaluateTarget"

};
window.defaultAIData.GenericEvaluateTarget = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "GenericTargetEvaluations",
    Child2: "UpdateBestTarget"
        // 
};
window.defaultAIData.GenericTargetEvaluations = {
    NodeType: "Sequence",
    Child0: "TargetScoreHitChance",
    Child1: "TargetScoreHealth",
    Child2: "TargetScoreFlanking",
    Child3: "TargetScoreMarked",
    Child4: "ApplyDifficultyModifiers",
    Child5: "TargetScoreCivilian",
    Child6: "AvoidBoundAndPanickedTargets"

};
window.defaultAIData.SelectPriorityTarget = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePriorityTarget"

};
window.defaultAIData.EvaluatePriorityTarget = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "ScoreIfTarget_HighestShotHitChance",
    Child2: "TargetScorePriority",
    Child3: "TargetScoreCivilian",
    Child4: "UpdateBestTarget"

};
window.defaultAIData.SelectTarget_Favorable = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTargetFavorable"

};
window.defaultAIData.EvaluateTargetFavorable = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreHitChanceFavorable",
    Child2: "TargetScoreHealth",
    Child3: "ApplyDifficultyModifiers",
    Child4: "TargetScoreCivilian",
    Child5: "UpdateBestTarget"

};
window.defaultAIData.SelectTarget_Opportunist = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTargetOPPORTUNIST"

};
window.defaultAIData.EvaluateTargetOPPORTUNIST = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreHitChanceOPPORTUNIST",
    Child2: "TargetScoreHealth",
    Child3: "TargetScoreFlanking",
    Child4: "ApplyDifficultyModifiers",
    Child5: "TargetScoreCivilian",
    Child6: "UpdateBestTarget"

};
window.defaultAIData.GenericSelectTargetSomewhatRandomly = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTargetSomewhatRandomly"

};
window.defaultAIData.EvaluateTargetSomewhatRandomly = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "GenericScoreTargetRandomly",
    Child2: "TargetScoreMarked",
    Child3: "ApplyDifficultyModifiers",
    Child4: "UpdateBestTarget"

};
window.defaultAIData.GenericSelectTargetRandomly = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTargetRandomly"

};
window.defaultAIData.EvaluateTargetRandomly = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "GenericScoreTargetRandomly",
    Child2: "UpdateBestTarget"

};
window.defaultAIData.GenericScoreTargetRandomly = {
    NodeType: "Successor",
    Child0: "GenericScoreTargetRandomlySequence "

};
window.defaultAIData.GenericScoreTargetRandomlySequence = {
    NodeType: "RandSelector",
    Child0: "AddToTargetScore_1",
    Child1: "AddToTargetScore_10",
    Child2: "AddToTargetScore_20",
    Child3: "AddToTargetScore_30",
    Child4: "AddToTargetScore_40",
    Child5: "AddToTargetScore_50 "

};
window.defaultAIData.SelectAnyTargetRandomly_PreferEnemies = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTargetRandomly_PreferEnemies"

};
window.defaultAIData.EvaluateTargetRandomly_PreferEnemies = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "GenericScoreTargetRandomly",
    Child2: "TargetScorePreferEnemies",
    Child3: "TargetScoreFlanking",
    Child4: "UpdateBestTarget"

};
window.defaultAIData.TargetScorePreferEnemies = {
    NodeType: "Selector",
    Child0: "ScoreIfEnemy",
    Child1: "AddToTargetScore_0"

};
window.defaultAIData.ScoreIfEnemy = {
    NodeType: "Sequence",
    Child0: "TargetIsEnemy",
    Child1: "AddToTargetScore_10"

};
window.defaultAIData.NoTargetsAvailable = {
    NodeType: "Inverter",
    Child0: "HaveAnyTargets"

};
window.defaultAIData.HaveAnyTargets = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "FindAnyTarget",
    Child2: "HasValidTarget-StandardShot"

};
window.defaultAIData.FindAnyTarget = {
    NodeType: "RepeatUntilFail",
    Child0: "SimpleEvaluateTarget"

};
window.defaultAIData.SimpleEvaluateTarget = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScorePreferEnemies",
    Child2: "UpdateBestTarget"

};
window.defaultAIData.IsTargetValidBasedOnLastResortEffects = {
    NodeType: "Condition"

};
window.defaultAIData.HasNonLastResortEnemies = {
    NodeType: "Condition"

};
window.defaultAIData.IsTargetLastResortWithOtherOptionsAvailable = {
    NodeType: "Sequence",
    Child0: "IsLastResortTarget",
    Child1: "HasNonLastResortEnemies"

};
window.defaultAIData.IsLastResortTarget = {
    NodeType: "Condition"

};
window.defaultAIData.SelectBestSuppressionTarget = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateSuppressionTarget"

};
window.defaultAIData.EvaluateSuppressionTarget = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreUnsuppressedByClosestDistance",
    Child2: "TargetScoreInvalidateCivilians",
    Child3: "UpdateBestTarget"

};
window.defaultAIData.SelectClosestPotentialSuppressionTarget = {
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "SelectClosestUnsuppressedTarget",
    Child2: "HasValidTarget-Potential"

};
window.defaultAIData.SelectClosestUnsuppressedTarget = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialSuppressionTarget"

};
window.defaultAIData.EvaluatePotentialSuppressionTarget = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreUnsuppressedByClosestDistance",
    Child2: "AvoidBoundAndPanickedTargets",
    Child3: "TargetScoreInvalidateCivilians",
    Child4: "UpdateBestTarget"

};
window.defaultAIData.TargetScoreUnsuppressedByClosestDistance = {
    NodeType: "Successor",
    Child0: "ScoreUnsuppressedByClosestDistance"

};
window.defaultAIData.ScoreUnsuppressedByClosestDistance = {
    NodeType: "Sequence",
    Child0: "TargetIsNotSuppressed",
    Child1: "TargetIsEnemy",
    Child2: "TargetScoreByScaledDistance-1",
    Child3: "AvoidBoundAndPanickedTargets",
    Child4: "AddToTargetScore_100"

};
window.defaultAIData.TargetIsNotSuppressed = {
    NodeType: "Inverter",
    Child0: "TargetAffectedByEffect-Suppression"

};
window.defaultAIData["TargetScoreByScaledDistance-1"] = {
    NodeType: "Action",
    Param0: "-1"
        //  Distance in Meters", Negated to favor closer units.
};
window.defaultAIData.ShootOrSuppressIfNoGoodShot = {
    NodeType: "Selector",
    Child0: "ConsiderSuppression",
    Child1: "TryShootOrReloadOrOverwatch"

};
window.defaultAIData.ConsiderSuppression = {
    NodeType: "Sequence",
    Child0: "AllShotPercentagesBelow50",
    Child1: "SuppressIfAvailable"

};
window.defaultAIData.PsiEvaluateTargetsGeneric = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScorePsiAttack",
    Child2: "TargetScoreHighestSoldierRank",
    Child3: "TargetScoreHealth_HighFirst",
    Child4: "SometimesRandomizeTarget",
    Child5: "ApplyDifficultyModifiers",
    Child6: "AvoidBoundAndPanickedTargets",
    Child7: "TargetScoreInvalidateCivilians",
    Child8: "UpdateBestTarget"

};
window.defaultAIData.PsiEvaluateTargetsMindControl = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreMindControl",
    Child2: "TargetScoreHighestSoldierRank",
    Child3: "TargetScoreHealth_HighFirst",
    Child4: "TargetScoreInvalidateCivilians",
    Child5: "AvoidBoundAndPanickedTargets",
    Child6: "UpdateBestTarget"

};
window.defaultAIData.TargetScorePsiAttack = {
    NodeType: "Selector",
    Child0: "ScoreIfConfused",
    Child1: "ScoreIfPanicked",
    Child2: "ScoreIfDisoriented",
    Child3: "AddToTargetScore_0"

};
window.defaultAIData.ScoreIfConfused = {
    NodeType: "Sequence",
    Child0: "TargetAffectedByEffect-Confused",
    Child1: "AddToTargetScore_30"

};
window.defaultAIData.ScoreIfPanicked = {
    NodeType: "Sequence",
    Child0: "TargetAffectedByEffect-Panicked",
    Child1: "AddToTargetScore_20"

};
window.defaultAIData.ScoreIfDisoriented = {
    NodeType: "Sequence",
    Child0: "TargetAffectedByEffect-Disoriented",
    Child1: "AddToTargetScore_10"

};
window.defaultAIData.TargetScoreMindControl = {
    NodeType: "Selector",
    Child0: "ScoreIfTargetWillWeakened",
    Child1: "AddToTargetScore_-10"

};
window.defaultAIData.ScoreIfTargetWillWeakened = {
    NodeType: "Sequence",
    Child0: "TargetWillWeakened",
    Child1: "AddToTargetScore_50"

};
window.defaultAIData.SometimesRandomizeTarget = {
    NodeType: "RandSelector",
    Child0: "AddToTargetScore_0",
    Param0: "1",
    Child1: "AddToTargetScore_10",
    Param1: "2",
    Child2: "AddToTargetScore_20",
    Param2: "6",
    Child3: "AddToTargetScore_30",
    Param3: "2",
    Child4: "AddToTargetScore_40",
    Param4: "1 "

};
window.defaultAIData["TargetScoreByHitChanceValue-1"] = {
    NodeType: "Action",
    Param0: "1",
    Param1: "StandardShot "

};
window.defaultAIData.TargetScoreHitChance = {
    NodeType: "Selector",
    Child0: "TargetScoreHitChanceUnlikely",
    Child1: "TargetScoreHitChanceProbable",
    Child2: "AddToTargetScore_40"

};
window.defaultAIData.TargetScoreHitChanceUnlikely = {
    NodeType: "Sequence",
    Child0: "TargetHitChanceLow",
    Child1: "AddToTargetScore_10"
        //  30 points under mid rank shot
};
window.defaultAIData.TargetScoreHitChanceProbable = {
    NodeType: "Sequence",
    Child0: "TargetHitChanceHigh",
    Child1: "AddToTargetScore_70"
        //  30 points over mid rank shot
};
window.defaultAIData.TargetScoreHitChanceOPPORTUNIST = {
    NodeType: "Selector",
    Child0: "TargetScoreHitChanceUnlikelyOPPORTUNIST",
    Child1: "TargetScoreHitChanceProbableOPPORTUNIST",
    Child2: "AddToTargetScore_-20"

};
window.defaultAIData.TargetScoreHitChanceUnlikelyOPPORTUNIST = {
    NodeType: "Sequence",
    Child0: "TargetHitChanceLow",
    Child1: "AddToTargetScore_-100"

};
window.defaultAIData.TargetScoreHitChanceProbableOPPORTUNIST = {
    NodeType: "Sequence",
    Child0: "TargetHitChanceHigh",
    Child1: "AddToTargetScore_0"
        //  valid shot if any other paramater is positive.
};
window.defaultAIData.TargetScoreHitChanceFavorable = {
    NodeType: "Selector",
    Child0: "TargetScoreHitChanceUnlikelyFavorable",
    Child1: "TargetScoreHitChanceProbableFavorable",
    Child2: "AddToTargetScore_40"

};
window.defaultAIData.TargetScoreHitChanceUnlikelyFavorable = {
    NodeType: "Sequence",
    Child0: "TargetHitChanceLow",
    Child1: "AddToTargetScore_-10" //  50 points under mid rank shot", negative
};
window.defaultAIData.TargetScoreHitChanceProbableFavorable = {
    NodeType: "Sequence",
    Child0: "TargetHitChanceHigh",
    Child1: "AddToTargetScore_70" //  30 points over mid rank shot
};
window.defaultAIData.TargetScoreHealth = {
    NodeType: "Selector",
    Child0: "ScoreIfKillShot",
    Child1: "ScoreIfTargetLowHP",
    Child2: "ScoreIfTargetWounded",
    Child3: "AddToTargetScore_0"

};
window.defaultAIData.ScoreIfKillShot = {
    NodeType: "Sequence",
    Child0: "TargetIsKillable",
    Child1: "AddToTargetScore_15" //  bump a kill shot up to the next aim tier with a bonus
};
window.defaultAIData.ScoreIfTargetLowHP = {
    NodeType: "Sequence",
    Child0: "TargetHasLowHP",
    Child1: "AddToTargetScore_10" //  low hp but not kill shot is valued target", but not more than much better hit chance
};
window.defaultAIData.ScoreIfTargetWounded = {
    NodeType: "Sequence",
    Child0: "TargetWounded",
    Child1: "AddToTargetScore_5" //  in case of aim quality tie", shoot wounded target
};
window.defaultAIData.ApplyDifficultyModifiers = {
    NodeType: "Successor",
    Child0: "ApplyDifficultyModifiersBase"

};
window.defaultAIData.ApplyDifficultyModifiersBase = {
    NodeType: "Sequence",
    Child0: "IsDifficultyLow",
    Child1: "AddToTargetScore_20",
    Child2: "::DistributeAttacks"

};
window.defaultAIData.AvoidBoundAndPanickedTargets = {
    NodeType: "Selector",
    Child0: "ScoreIfTargetBoundOrPanicked",
    Child1: "AddToTargetScore_1"

};
window.defaultAIData.ScoreIfTargetBoundOrPanicked = {
    NodeType: "Sequence",
    Child0: "IsTargetLastResortWithOtherOptionsAvailable",
    Child1: "AddToTargetScore_-1000"

};
window.defaultAIData["::DistributeAttacks"] = {
    NodeType: "Selector",
    Child0: "ScoreTargetIfMarked",
    Child1: "AddToTargetScore_20", // ScoreIfTargetHasBeenAttackedTwice",
    Child2: "ScoreIfTargetHasBeenAttackedOnce",
    Child3: "AddToTargetScore_30"

};
window.defaultAIData["Sectopod::DistributeAttacks"] = {
    NodeType: "Selector",
    Child0: "ScoreIfTargetHasBeenAttackedTwice",
    Child1: "ScoreIfTargetHasBeenAttackedOnce",
    Child2: "AddToTargetScore_30"

};
window.defaultAIData.ScoreIfTargetHasBeenAttackedTwice = {
    NodeType: "Sequence",
    Child0: "TargetHasBeenAttackedTwice",
    Child1: "AddToTargetScore_0"
        // 
};
window.defaultAIData.ScoreIfTargetHasBeenAttackedOnce = {
    NodeType: "Sequence",
    Child0: "TargetHasBeenAttackedOnce",
    Child1: "AddToTargetScore_5"
        // 
};
window.defaultAIData.TargetScoreHealth_HighFirst = {
    NodeType: "Selector",
    Child0: "PenalizeIfKillShot",
    Child1: "ScoreIfTarget_MaxHP",
    Child2: "ScoreIfTarget_HighHP",
    Child3: "AddToTargetScore_5"

};
window.defaultAIData.PenalizeIfKillShot = {
    NodeType: "Sequence",
    Child0: "TargetIsKillable",
    Child1: "AddToTargetScore_0"
        //  If the attack would kill the target", deemphasize (but don't ignore"
};
window.defaultAIData.ScoreIfTarget_MaxHP = {
    NodeType: "Sequence",
    Child0: "TargetHasMaxHP",
    Child1: "AddToTargetScore_20"
        //  bump a max health target to the next aim tier with a bonus
};
window.defaultAIData.ScoreIfTarget_HighHP = {
    NodeType: "Sequence",
    Child0: "TargetHasHighHP",
    Child1: "AddToTargetScore_10"
        //  high hp is valued target", but not more than much better hit chance
};
window.defaultAIData.TargetScoreFlanking = {
    NodeType: "Selector",
    Child0: "ScoreTargetIfFlanked",
    Child1: "AddToTargetScore_0"

};
window.defaultAIData.ScoreTargetIfFlanked = {
    NodeType: "Sequence",
    Child0: "IsFlankingTarget",
    Child1: "TargetIsEnemy",
    Child2: "AddToTargetScore_50"

};
window.defaultAIData.TargetScoreHighestSoldierRank = {
    NodeType: "Selector",
    Child0: "ScoreIfTarget_HasHighestRank",
    Child1: "AddToTargetScore_0"

};
window.defaultAIData.ScoreIfTarget_HasHighestRank = {
    NodeType: "Sequence",
    Child0: "TargetHasHighestSoldierRank",
    Child1: "AddToTargetScore_5"
        //  Just a tie breaker
};
window.defaultAIData.TargetHasHighestSoldierRank = {
    NodeType: "Condition"

};
window.defaultAIData.TargetScoreHighestShotHitChance = {
    NodeType: "Successor",
    Child0: "ScoreIfTarget_HighestShotHitChance"

};
window.defaultAIData.ScoreIfTarget_HighestShotHitChance = {
    NodeType: "Sequence",
    Child0: "TargetHasHighestShotHitChance",
    Child1: "AddToTargetScore_10"
        //  tie breaker
};
window.defaultAIData.TargetScoreHighestShotHitChance_50 = {
    NodeType: "Successor",
    Child0: "ScoreIfTarget_HighestShotHitChance_50"

};
window.defaultAIData.ScoreIfTarget_HighestShotHitChance_50 = {
    NodeType: "Sequence",
    Child0: "TargetHasHighestShotHitChance",
    Child1: "AddToTargetScore_50"

};
window.defaultAIData.TargetScoreMarked = {
    NodeType: "Selector",
    Child0: "ScoreTargetIfMarked",
    Child1: "AddToTargetScore_0"

};
window.defaultAIData.ScoreTargetIfMarked = {
    NodeType: "Sequence",
    Child0: "TargetAffectedByEffect-MarkedTarget",
    Child1: "AddToTargetScore_45"
        //  bump a marked target up to the next aim tier with a bonus", over even a killshot
};
window.defaultAIData.TargetScorePriority = {
    NodeType: "Selector",
    Child0: "ScoreTargetIfPriority",
    Child1: "AddToTargetScore_0"
        //  If I'm looking for a priority target", then if the target isn't priority", it should be very negative.
};
window.defaultAIData.ScoreTargetIfPriority = {
    NodeType: "Sequence",
    Child0: "TargetIsPriorityUnit",
    Child1: "AddToTargetScore_60"
        //  set a priority target for very high
};
window.defaultAIData.TargetScoreCivilian = {
    NodeType: "Successor",
    Child0: "ScoreTargetIfCivilianByJob"

};
window.defaultAIData.TargetScoreInvalidateCivilians = {
    NodeType: "Selector",
    Child0: "ScoreTargetOutIfCivilian",
    Child1: "AddToTargetScore_0"

};
window.defaultAIData.ScoreTargetOutIfCivilian = {
    NodeType: "Sequence",
    Child0: "TargetIsCivilian",
    Child1: "AddToTargetScore_-1000"

};
window.defaultAIData.ScoreTargetIfCivilianByJob = {
    NodeType: "Sequence",
    Child0: "TargetIsCivilian",
    Child1: "ScoreCivilianByJob"

};
window.defaultAIData.ScoreCivilianByJob = {
    NodeType: "Selector",
    Child0: "ScoreCivilianIfLimitHit",
    Child1: "ScoreCivilianIfActuallyFaceless",
    Child2: "ScoreCivilianIfTerrorist",
    Child3: "AddToTargetScore_-10"

};
window.defaultAIData.ScoreCivilianIfActuallyFaceless = {
    NodeType: "Sequence",
    Child0: "TargetIsAlien",
    Child1: "AddToTargetScore_-1000"

};
window.defaultAIData.ScoreCivilianIfTerrorist = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Terrorist",
    Child1: "AddToTargetScore_40"

};
window.defaultAIData.ScoreCivilianIfLimitHit = {
    NodeType: "Sequence",
    Child0: "CivilianKillLimitReached",
    Child1: "AddToTargetScore_-1000"

};
window.defaultAIData.CivilianKillLimitReached = {
    NodeType: "Inverter",
    Child0: "NumKilledCiviliansIsLessThanTurnCount"

};
window.defaultAIData.TargetScoreKillAdventNotAliens = {
    NodeType: "Selector",
    Child0: "ScoreTargetIfAllyAndAdvent",
    Child1: "ScoreTargetIfAllyAndNotAdvent",
    Child2: "AddToTargetScore_0"

};
window.defaultAIData.ScoreTargetIfAllyAndAdvent = {
    NodeType: "Sequence",
    Child0: "TargetIsAlly",
    Child1: "TargetIsAdvent",
    Child2: "AddToTargetScore_1"

};
window.defaultAIData.ScoreTargetIfAllyAndNotAdvent = {
    NodeType: "Sequence",
    Child0: "TargetIsAlly",
    Child1: "AddToTargetScore_-100"

};
window.defaultAIData.TargetScoreTeamVisibility = {
    NodeType: "Selector",
    Child0: "ScoreIfTarget_HasHighestVisibility",
    Child1: "AddToTargetScore_0"

};
window.defaultAIData.ScoreIfTarget_HasHighestVisibility = {
    NodeType: "Sequence",
    Child0: "TargetHasHighestTeamVisibility",
    Child1: "AddToTargetScore_5"
        //  tie breaker
};
window.defaultAIData.TargetHasHighestTeamVisibility = {
    NodeType: "Condition"

};
window.defaultAIData.TargetScoreReachableForMelee = {
    NodeType: "Selector",
    Child0: "ScoreUnReachable",
    Child1: "AddToTargetScore_1"

};
window.defaultAIData.TargetIsNotAlly = {
    NodeType: "Inverter",
    Child0: "TargetIsAlly"

};
window.defaultAIData.TargetCanBecomeZombie = {
    NodeType: "Condition"

};
window.defaultAIData.TargetCanNotBecomeZombie = {
    NodeType: "Inverter",
    Child0: "TargetCanBecomeZombie"

};
window.defaultAIData.TargetScoreReachableAllyAnimaConsume = {
    NodeType: "Selector",
    Child0: "TargetIsNotAlly",
    Child1: "TargetCanNotBecomeZombie",
    Child2: "TargetIsVisibleToPlayer",
    Child3: "ScoreForAnimaConsumeAlly"

};
window.defaultAIData.ScoreForAnimaConsumeAlly = {
    NodeType: "Sequence",
    Child0: "ScoreAnimaConsumeForRange",
    Child1: "ScoreIfTargetLowHP",
    Child2: "AddToTargetScore_1"

};
window.defaultAIData.ScoreAnimaConsumeForRange = {
    NodeType: "Selector",
    Child0: "ScoreInAttackRange",
    Child1: "ScoreUnreachable",
    Child2: "AddToTargetScore_1"

};
window.defaultAIData.ScoreInAttackRange = {
    NodeType: "Sequence",
    Child0: "IsTargetInAttackRange-StandardMelee",
    Child1: "AddToTargetScore_100"

};
window.defaultAIData.ScoreUnReachable = {
    NodeType: "Sequence",
    Child0: "TargetNotInMovementRange",
    Child1: "AddToTargetScore_-100"

};
window.defaultAIData.TargetScoreClosestIfInRange = {
    NodeType: "Successor",
    Child0: "ScoreClosestIfInRange"

};
window.defaultAIData.ScoreClosestIfInRange = {
    NodeType: "Sequence",
    Child0: "TargetIsClosestValidTarget",
    Child1: "IsTargetInMovementRange-StandardMelee",
    Child2: "AddToTargetScore_100"

};
window.defaultAIData.SelectScoreHitChanceByJob = {
    NodeType: "Selector",
    Child0: "ScoreHitIfSoldier",
    Child1: "ScoreHitIfFlanker",
    Child2: "ScoreHitIfLeader",
    Child3: "ScoreHitIfSupport",
    Child4: "TargetScoreHitChance"

};
window.defaultAIData.ScoreHitIfSoldier = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Soldier",
    Child1: "TargetScoreHitChanceUnlikely"

};
window.defaultAIData.ScoreHitIfFlanker = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Flanker",
    Child1: "TargetScoreHitChanceOPPORTUNIST"

};
window.defaultAIData.ScoreHitIfLeader = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Leader",
    Child1: "TargetScoreHitChance"

};
window.defaultAIData.ScoreHitIfSupport = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Support",
    Child1: "TargetScoreHitChanceProbable"

};
window.defaultAIData["IsAbilityAvailable-Reload"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-StandardShot"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-StandardMove"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-Overwatch"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-ThrowGrenade"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-FragGrenade"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-Yell"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-CallReinforcements"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-Suppression"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-HunkerDown"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-StandardMelee"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-StandardMelee"] = {
    NodeType: "Condition"

};
window.defaultAIData["SelectAbility-Reload"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-StandardShot"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-StandardMove"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-Overwatch"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-ThrowGrenade"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-Yell"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-CallReinforcements"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-StandardMelee"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-Suppression"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-HunkerDown"] = {
    NodeType: "Action"

};
window.defaultAIData.ShouldPatrol = {
    NodeType: "Selector",
    Child0: "IsGreenAlert",
    Child1: "NotYetRevealed"

};
window.defaultAIData.GenericGreenMovement = {
    NodeType: "Sequence",
    Child0: "ShouldPatrol",
    Child1: "GreenAlertActionSelector"

};
window.defaultAIData.GreenAlertActionSelector = {
    NodeType: "Selector",
    Child0: "TryAttackPriorityTarget",
    Child1: "SSSelectGreenAlertAction"

};
window.defaultAIData.SSSelectGreenAlertAction = {
    NodeType: "Successor",
    Child0: "SelectGreenAlertAction "

};
window.defaultAIData.SelectGreenAlertAction = {
    NodeType: "Action"

};
window.defaultAIData.IgnoreHazards = {
    NodeType: "Action"

};
window.defaultAIData.SkipTurnifGreenAlert = {
    NodeType: "Sequence",
    Child0: "IsGreenAlert",
    Child1: "SkipMove"

};
window.defaultAIData.DoCower = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-HunkerDown",
    Child1: "SelectAbility-HunkerDown"

};
window.defaultAIData.MoveBackWithLOSIfFlanked = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "IsFlanked",
    Child2: "IsAbilityAvailable-StandardMove",
    Child3: "FindDestinationWithLoS-Defensive",
    Child4: "SelectAbility-StandardMove"
        // 
};
window.defaultAIData.MoveBackWithLOSIfFlankedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "IsFlanked",
    Child2: "IsAbilityAvailable-StandardMove",
    Child3: "FindDestinationWithLoS-Defensive",
    Child4: "SelectAbility-StandardMove"
        // 
};
window.defaultAIData.MoveForwardWithLOSIfFlanked = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "IsFlanked",
    Child2: "IsAbilityAvailable-StandardMove",
    Child3: "FindDestinationWithLoS-AdvanceCover",
    Child4: "SelectAbility-StandardMove"
        // 
};
window.defaultAIData.MoveForwardWithLOSIfFlankedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "IsFlanked",
    Child2: "IsAbilityAvailable-StandardMove",
    Child3: "FindDestinationWithLoS-AdvanceCover",
    Child4: "SelectAbility-StandardMove"
        // 
};
window.defaultAIData.DoIfFlankedMove = {
    NodeType: "Sequence",
    Child0: "CheckIfNeedToMove",
    Child1: "FlankedMoveSelector"

};
window.defaultAIData.CheckIfNeedToMove = {
    NodeType: "Selector",
    Child0: "IsFlanked",
    Child1: "IsInDangerousArea"

};
window.defaultAIData.CheckIfInDanger = {
    NodeType: "Selector",
    Child0: "IsFlanked",
    Child1: "HasMoreThanOneOverwatcher",
    Child2: "IsInDangerousArea"

};
window.defaultAIData.CheckNotInDanger = {
    NodeType: "Inverter",
    Child0: "CheckIfInDanger"

};
window.defaultAIData.FlankedMoveSelector = {
    NodeType: "Selector",
    Child0: "MoveAdvanceToCoverUnsafe",
    Child1: "FallBack"

};
window.defaultAIData.DoIfOnDangerousGround = {
    NodeType: "Sequence",
    Child0: "IsInDangerousArea",
    Child1: "FlankedMoveSelector"

};
window.defaultAIData.LastActionAndFlanked = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "IsFlanked",
    Child2: "ShootIfIdeal_OtherwiseMove"

};
window.defaultAIData.DoNoiseAlert = {
    NodeType: "Action"

};
window.defaultAIData.NeedsReload = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Reload",
    Child1: "OutOfAmmo",
    Child2: "SelectAbility-Reload"

};
window.defaultAIData.TryShootOrReload = {
    NodeType: "Selector",
    Child0: "ShootIfAvailable",
    Child1: "NeedsReload"

};
window.defaultAIData.TryShootOrReloadOrOverwatch = {
    NodeType: "Selector",
    Child0: "ConsiderTakingOverwatch",
    Child1: "ShootIfAvailable",
    Child2: "NeedsReload"

};
window.defaultAIData.ConsiderTakingOverwatch = {
    NodeType: "Selector",
    Child0: "TryTwoTurnAttackSupport",
    Child1: "ConsiderTakingOverwatchAllUnits",
    Child2: "ConsiderTakingOverwatchVIP",
    Child3: "ConsiderTakingOverwatchEvac"

};
window.defaultAIData.ConsiderTakingOverwatchAllUnits = {
    NodeType: "Sequence",
    Child0: "AllShotPercentagesBelow50",
    Child1: "NoOverwatchingTeammates",
    Child2: "RandFilter25Overwatch"

};
window.defaultAIData.AllShotPercentagesBelow50 = {
    NodeType: "StatCondition",
    Param0: "TopHitChance",
    Param1: "<",
    Param2: "50"

};
window.defaultAIData.AllShotPercentagesAtOrBelow50 = {
    NodeType: "StatCondition",
    Param0: "TopHitChance",
    Param1: "<: ",
    Param2: "50"

};
window.defaultAIData.RandFilter25Overwatch = {
    NodeType: "RandFilter",
    Child0: "TryOverwatch",
    Param0: "25"

};
window.defaultAIData.ConsiderTakingOverwatchVIP = {
    NodeType: "Sequence",
    Child0: "VIPVisible",
    Child1: "RandOverwatch75_15"

};
window.defaultAIData.ConsiderTakingOverwatchEvac = {
    NodeType: "Sequence",
    Child0: "EvacInRangeAndEnemyVisible",
    Child1: "RandOverwatch100_75"

};
window.defaultAIData.VIPVisible = {
    NodeType: "Sequence",
    Child0: "HasEnemyVIP",
    Child1: "CanSeeLivingVIPOrCarriedVIP"

};
window.defaultAIData.CanSeeLivingVIPOrCarriedVIP = {
    NodeType: "Condition"

};
window.defaultAIData.EvacInRangeAndEnemyVisible = {
    NodeType: "Sequence",
    Child0: "EvacWithinVisRange",
    Child1: "AnyLivingEnemyVisible"

};
window.defaultAIData.NoVisibleEnemies = {
    NodeType: "StatCondition",
    Param0: "VisibleEnemyCount",
    Param1: "::",
    Param2: "0"

};
window.defaultAIData.AnyLivingEnemyVisible = {
    NodeType: "StatCondition",
    Param0: "VisibleEnemyCount",
    Param1: ">",
    Param2: "0"

};
window.defaultAIData.MultipleEnemiesVisible = {
    NodeType: "StatCondition",
    Param0: "VisibleEnemyCount",
    Param1: ">",
    Param2: "1"

};
window.defaultAIData.AnyAlliesVisible = {
    NodeType: "StatCondition",
    Param0: "VisibleAllyCount",
    Param1: ">",
    Param2: "0"

};
window.defaultAIData.EvacWithinVisRange = {
    NodeType: "Condition"

};
window.defaultAIData.RandOverwatch100_75 = {
    NodeType: "Selector",
    Child0: "FirstOverwatch100",
    Child1: "RandSecondOverwatch75"

};
window.defaultAIData.RandOverwatch75_15 = {
    NodeType: "Selector",
    Child0: "RandFirstOverwatch75",
    Child1: "RandSecondOverwatch15"

};
window.defaultAIData.RandOverwatch75 = {
    NodeType: "RandFilter",
    Child0: "TryOverwatch",
    Param0: "75"

};
window.defaultAIData.RandOverwatch15 = {
    NodeType: "RandFilter",
    Child0: "TryOverwatch",
    Param0: "15"

};
window.defaultAIData.RandOverwatch50 = {
    NodeType: "RandFilter",
    Child0: "TryOverwatch",
    Param0: "50"

};
window.defaultAIData.RandOverwatch100_50 = {
    NodeType: "Selector",
    Child0: "FirstOverwatch100",
    Child1: "RandOverwatch50"

};
window.defaultAIData.FirstOverwatch100 = {
    NodeType: "Sequence",
    Child0: "NoOverwatchingTeammates",
    Child1: "TryOverwatch"

};
window.defaultAIData.RandFirstOverwatch75 = {
    NodeType: "Sequence",
    Child0: "NoOverwatchingTeammates",
    Child1: "RandOverwatch75"

};
window.defaultAIData.RandSecondOverwatch75 = {
    NodeType: "Sequence",
    Child0: "OneOverwatchingTeammate",
    Child1: "RandOverwatch75"

};
window.defaultAIData.RandSecondOverwatch15 = {
    NodeType: "Sequence",
    Child0: "OneOverwatchingTeammate",
    Child1: "RandOverwatch15"

};
window.defaultAIData.TryTwoTurnAttackSupportIfSafe = {
    NodeType: "Sequence",
    Child0: "NotInDangerousArea",
    Child1: "TryTwoTurnAttackSupport"

};
window.defaultAIData.TryTwoTurnAttackSupport = {
    NodeType: "Sequence",
    Child0: "HasTwoTurnAttackTargets",
    Child1: "TryOverwatchTwoTurnTarget"

};
window.defaultAIData.HasTwoTurnAttackTargets = {
    NodeType: "Condition"

};
window.defaultAIData.IsTargetInTwoTurnAttackArea = {
    NodeType: "Condition"

};
window.defaultAIData.TryOverwatchTwoTurnTarget = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Overwatch",
    Child1: "RandOverwatch100_50"

};
window.defaultAIData.TryMeleeOrShoot = {
    NodeType: "Selector",
    Child0: "ShootIfAvailable",
    Child1: "StandardMeleeAttack"

};
window.defaultAIData.ShootIfAvailable = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectTargetForStandardShot",
    Child2: "SelectAbility-StandardShot"

};
window.defaultAIData.ShootIfIdeal = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectTargetForStandardShot_Ideal",
    Child2: "SelectAbility-StandardShot"

};
window.defaultAIData.ShootIfIdeal_OtherwiseMove = {
    NodeType: "Selector",
    Child0: "ShootIfIdeal",
    Child1: "MoveDefensiveWithLoS",
    Child2: "MoveStandard"

};
window.defaultAIData.AttackIfFavorable = {
    NodeType: "Selector",
    Child0: "TryGrenade",
    Child1: "ShootIfAvailable_Favorable"

};
window.defaultAIData.ShootIfAvailable_Favorable = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectTargetForStandardShot_Favorable",
    Child2: "SelectAbility-StandardShot"

};
window.defaultAIData.AttackIfIdeal = {
    NodeType: "Selector",
    Child0: "TryMoveThenGrenade",
    Child1: "ShootIfAvailable_Opportunist"

};
window.defaultAIData.ShootIfAvailable_Opportunist = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectTargetForStandardShot_Ideal",
    Child2: "SelectAbility-StandardShot"

};
window.defaultAIData.TryOverwatch = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Overwatch",
    Child1: "SelectAbility-Overwatch"

};
window.defaultAIData.OverwatchIfTargetAvailable = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Overwatch",
    Child1: "IsOverwatchTargetAvailable",
    Child2: "SelectAbility-Overwatch"

};
window.defaultAIData.IsOverwatchTargetAvailable = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "SelectOverwatchTarget",
    Child2: "HasValidTarget-StandardShot"

};
window.defaultAIData.SelectOverwatchTarget = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateOverwatchTarget"

};
window.defaultAIData.EvaluateOverwatchTarget = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreHitChance",
    Child2: "ApplyDifficultyModifiers",
    Child3: "TargetScoreInvalidateCivilians",
    Child4: "UpdateBestTarget"

};
window.defaultAIData.TryOverwatchIfLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "ConsiderTakingOverwatch"

};
window.defaultAIData["HasValidTarget-StandardShot"] = {
    NodeType: "Condition"

};
window.defaultAIData["SetTargetStack-StandardShot"] = {
    NodeType: "Action"

};
window.defaultAIData.SelectTargetForStandardShot = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "GenericSelectBestTarget",
    Child2: "HasValidTarget-StandardShot"

};
window.defaultAIData.SelectTargetForStandardShot_Ideal = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "SelectTarget_Opportunist",
    Child2: "HasValidTarget-StandardShot"

};
window.defaultAIData.SelectTargetForStandardShot_Favorable = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "SelectTarget_Favorable",
    Child2: "HasValidTarget-StandardShot"

};
window.defaultAIData.TryShootPriorityTarget = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectPriorityTargetForStandardShot",
    Child2: "SelectAbility-StandardShot"

};
window.defaultAIData.SelectPriorityTargetForStandardShot = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "SelectPriorityTarget",
    Child2: "HasValidTarget-StandardShot"

};
window.defaultAIData.TryAttackPriorityTarget = {
    NodeType: "Sequence",
    Child0: "HasPriorityTarget",
    Child1: "AttackPriorityTarget"

};
window.defaultAIData.AttackPriorityTarget = {
    NodeType: "Selector",
    Child0: "TryShootPriorityTarget",
    Child1: "TryMeleeAttackPriorityTarget",
    Child2: "NeedsReload"

};
window.defaultAIData["HasValidTarget-Suppression"] = {
    NodeType: "Condition"

};
window.defaultAIData["SetTargetStack-Suppression"] = {
    NodeType: "Action"

};
window.defaultAIData.SuppressIfAvailable = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Suppression",
    Child1: "SelectTargetForSuppressionByAim",
    Child2: "SelectAbility-Suppression"

};
window.defaultAIData.SelectTargetForSuppressionByAim = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-Suppression",
    Child1: "SelectBestSuppressionTargetByAim",
    Child2: "HasValidTarget-Suppression"

};
window.defaultAIData.SelectBestSuppressionTargetByAim = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateSuppressionTargetByAim"

};
window.defaultAIData.EvaluateSuppressionTargetByAim = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "SSScoreUnsuppressedByHitChanceValue",
    Child2: "TargetScoreInvalidateCivilians",
    Child3: "UpdateBestTarget"

};
window.defaultAIData.SSScoreUnsuppressedByHitChanceValue = {
    NodeType: "Successor",
    Child0: "ScoreUnsuppressedByHitChanceValue"

};
window.defaultAIData.ScoreUnsuppressedByHitChanceValue = {
    NodeType: "Sequence",
    Child0: "TargetIsNotSuppressed",
    Child1: "AvoidBoundAndPanickedTargets",
    Child2: "TargetScoreByHitChanceValue-1"

};
window.defaultAIData["HasValidTarget-StandardMelee"] = {
    NodeType: "Condition"

};
window.defaultAIData["HasValidTarget-Potential"] = {
    NodeType: "Condition"

};
window.defaultAIData["SetTargetStack-StandardMelee"] = {
    NodeType: "Action"

};
window.defaultAIData.SetPotentialTargetStack = {
    NodeType: "Action"

};
window.defaultAIData.SetVisiblePotentialTargetStack = {
    NodeType: "Action"

};
window.defaultAIData.SetPotentialAllyTargetStack = {
    NodeType: "Action"

};
window.defaultAIData["IsTargetInMovementRange-StandardMelee"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsTargetInMovementRange-EnergyShield"] = {
    NodeType: "Condition"

};
window.defaultAIData.TargetNotInMovementRange = {
    NodeType: "Inverter",
    Child0: "IsTargetInMovementRange-StandardMelee"

};
window.defaultAIData["IsTargetInAttackRange-StandardMelee"] = {
    NodeType: "Condition"

};
window.defaultAIData.TryStandardMelee = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeStepSelector"

};
window.defaultAIData.TryStandardMeleeUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeStepSelectorUnsafe"

};
window.defaultAIData.StandardMeleeStepSelector = {
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeIfFirstAbility"

};
window.defaultAIData.StandardMeleeStepSelectorUnsafe = {
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeIfFirstAbilityUnsafe"

};
window.defaultAIData.StandardMeleeAttack = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMelee",
    Child1: "SelectTargetForStandardMelee",
    Child2: "SelectAbility-StandardMelee"

};
window.defaultAIData.TryStandardMeleeFANATIC = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeStepSelectorFANATIC"

};
window.defaultAIData.TryStandardMeleeFANATICUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeStepSelectorFANATICUnsafe"

};
window.defaultAIData.StandardMeleeStepSelectorFANATIC = {
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeIfFirstAbilityFANATIC"

};
window.defaultAIData.StandardMeleeStepSelectorFANATICUnsafe = {
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeIfFirstAbilityFANATICUnsafe"

};
window.defaultAIData.TryStandardMeleeDash = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeDashStepSelector"

};
window.defaultAIData.TryStandardMeleeDashUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeDashStepSelectorUnsafe"

};
window.defaultAIData.StandardMeleeDashStepSelector = {
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeDash"

};
window.defaultAIData.StandardMeleeDashStepSelectorUnsafe = {
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeDashUnsafe"

};
window.defaultAIData.TryStandardMeleeDashFANATIC = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeDashFANATICStepSelector"

};
window.defaultAIData.TryStandardMeleeDashFANATICUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeDashFANATICStepSelectorUnsafe"

};
window.defaultAIData.StandardMeleeDashFANATICStepSelector = {
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeDashFANATIC"

};
window.defaultAIData.StandardMeleeDashFANATICStepSelectorUnsafe = {
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeDashFANATICUnsafe"

};
window.defaultAIData.SelectTargetForStandardMelee = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardMelee",
    Child1: "SelectBestTargetForStandardMelee",
    Child2: "HasValidTarget-StandardMelee"

};
window.defaultAIData.SelectBestTargetForStandardMelee = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialMeleeTarget"

};
window.defaultAIData.TryMeleeAttackPriorityTarget = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "MeleeAttackPriorityTargetStepSelector"

};
window.defaultAIData.MeleeAttackPriorityTargetStepSelector = {
    NodeType: "Selector",
    Child0: "MeleeAttackPriorityTarget",
    Child1: "MoveMeleePriorityTargetUnsafe"

};
window.defaultAIData.MeleeAttackPriorityTarget = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMelee",
    Child1: "SetTargetStack-StandardMelee",
    Child2: "SelectPriorityTarget",
    Child3: "HasValidTarget-StandardMelee",
    Child4: "SelectAbility-StandardMelee"

};
window.defaultAIData.SelectPotentialMeleeTarget = {
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "SelectBestPotentialTargetForMelee",
    Child2: "HasValidTarget-Potential"

};
window.defaultAIData.SelectBestPotentialTargetForMelee = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialMeleeTarget"

};
window.defaultAIData.EvaluatePotentialMeleeTarget = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreClosestIfInRange",
    Child2: "AvoidBoundAndPanickedTargets",
    Child3: "TargetScoreCivilian",
    Child4: "SSCustomMeleeTargetScore",
    Child5: "UpdateBestTarget"

};
window.defaultAIData.SSCustomMeleeTargetScore = {
    NodeType: "Successor",
    Child0: "::CustomMeleeTargetScore"

};
window.defaultAIData["::CustomMeleeTargetScore"] = {
    NodeType: "Sequence",
    Child0: "AddToTargetScore_0"
        // Overwrite option for melee abilities that are restricted.
};
window.defaultAIData.SelectPotentialMeleePriorityTarget = {
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "SelectPotentialPriorityTargetForMelee",
    Child2: "HasValidTarget-Potential"

};
window.defaultAIData.SelectPotentialPriorityTargetForMelee = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialPriorityTarget"

};
window.defaultAIData.EvaluatePotentialPriorityTarget = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreReachableForMelee",
    Child2: "TargetScorePriority",
    Child3: "AvoidBoundAndPanickedTargets",
    Child4: "TargetScoreCivilian",
    Child5: "UpdateBestTarget"

};
window.defaultAIData.DoesGrenadeCauseDamage = {
    NodeType: "Condition"
        // Added to prevent Mind Controlled units from throwing smoke grenades.
};
window.defaultAIData.TryMoveThenGrenade = {
    NodeType: "Selector",
    Child0: "TryMoveForGrenade",
    Child1: "TryGrenade"

};
window.defaultAIData.TryMoveForGrenade = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-ThrowGrenade",
    Child2: "FindPotentialAoETargets-GrenadeProfile",
    Child3: "MoveStandardIfFirstAbility-Grenade"

};
window.defaultAIData.TryGrenade = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-ThrowGrenade",
    Child1: "FindPotentialAoETargets-GrenadeProfile",
    Child2: "SelectAoETarget-GrenadeProfile",
    Child3: "SelectAbility-ThrowGrenade"

};
window.defaultAIData.TryPanickedGrenadeToss = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-ThrowGrenade",
    Child1: "FindPotentialAoETargets-GrenadePanickedProfile",
    Child2: "SelectAoETarget-GrenadePanickedProfile",
    Child3: "SelectAbility-ThrowGrenade"

};
window.defaultAIData["IsAbilityAvailable-MarkTarget"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-TriggerRage"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-PsiReanimation"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-MindSpin"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-GetOverHere"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-PoisonSpit"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-EnergyShield"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-AcidBlob"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-DelayedExecute"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-MicroMissiles"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-PsiWitchConfuse"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-PsiMindControl"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-TriggerDamagedTeleport"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-PsiDimensionalRiftStage1"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-NullLance"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-ChryssalidBurrow"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-ChryssalidUnburrow"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-BurrowedAttack"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-FrenzyTrigger"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-BlazingPinionsStage1"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-AnimaInversion"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-MindProbe"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-AnimaGate"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-AnimaConsume"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-GatekeeperOpen"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-GatekeeperClose"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-Retract"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-PsiBombStage1"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-Teleport"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-TriggerSuperposition"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-WrathCannon"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-WrathCannonStage1"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-SpawnChryssalid"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-ScythingClaws"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-Bayonet"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityAvailable-Bind"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-StunLance"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-Bind"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-DevastatingPunch"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-AnimaConsume"] = {
    NodeType: "Condition",
    Param0: "AA_ValueCheckFailed",
    Param1: "AA_GatekeeperClosed"
        //  Added ValueCheckFailed as a valid 'ready' failure", for not being in Open state.
};
window.defaultAIData["IsAbilityReady-AnimaInversion"] = {
    NodeType: "Condition",
    Param0: "AA_ValueCheckFailed",
    Param1: "AA_GatekeeperClosed"
        //  Added ValueCheckFailed as a valid 'ready' failure", for not being in Open state.
};
window.defaultAIData["IsAbilityReady-ScythingClaws"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-Bayonet"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-PsiBombStage1"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-ThrowGrenade"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-PoisonSpit"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-AcidBlob"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-MicroMissiles"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-BlazingPinionsStage1"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-PsiDimensionalRiftStage1"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-NullLance"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-EnergyShield"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-Suppression"] = {
    NodeType: "Condition"

};
window.defaultAIData["SelectAbility-MarkTarget"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-StunLance"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-TriggerRage"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-PsiReanimation"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-MindSpin"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-GetOverHere"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-Bind"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-PoisonSpit"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-AcidBlob"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-EnergyShield"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-DevastatingPunch"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-DelayedExecute"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-Bayonet"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-MicroMissiles"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-PsiMindControl"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-TriggerDamagedTeleport"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-PsiDimensionalRiftStage1"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-ChryssalidBurrow"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-ChryssalidUnburrow"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-BurrowedAttack"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-FrenzyTrigger"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-BlazingPinionsStage1"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-AnimaInversion"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-AnimaConsume"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-AnimaGate"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-MindProbe"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-GatekeeperOpen"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-GatekeeperClose"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-Retract"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-PsiBombStage1"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-Teleport"] = {
    NodeType: "Action",
    Param0: "UseDestination"

};
window.defaultAIData["SelectAbility-TriggerSuperposition"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-ScythingClaws"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-WrathCannon"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-WrathCannonStage1"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-SpawnChryssalid"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAbility-NullLance"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-GrenadeProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-GrenadeAggressiveProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-GrenadePanickedProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-GrenadeMindControlledProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-BlazingPinionsBasicProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-AcidBlobProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-PoisonSpitProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-PoisonSpitSingleProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-MicroMissilesProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-MicroMissilesProfileMk2"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-PsiRiftProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-AnimaInversionCorpseProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-AnimaInversionMixedProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-PsiBombProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-TeleportProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-ScythingClawsProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-ScythingClawsPrefTargetProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-WrathCannonProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-WrathCannonS1Profile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-NullLanceProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["FindPotentialAoETargets-NullLanceValidateProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-GrenadeProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-GrenadeAggressiveProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-GrenadePanickedProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-GrenadeMindControlledProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-BlazingPinionsBasicProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-AcidBlobProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-PoisonSpitProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-PoisonSpitSingleProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-MicroMissilesProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-MicroMissilesProfileMk2"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-PsiRiftProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-AnimaInversionCorpseProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-AnimaInversionMixedProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-PsiBombProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-TeleportProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-ScythingClawsProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-ScythingClawsPrefTargetProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-WrathCannonProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-WrathCannonS1Profile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-NullLanceProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["SelectAoETarget-NullLanceValidateProfile"] = {
    NodeType: "Action"

};
window.defaultAIData["MoveStandardIfFirstAbility-Grenade"] = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindGrenadeDestination",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData["MoveStandardIfFirstAbility-PoisonSpit"] = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindPoisonSpitDestination",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData["MoveStandardIfFirstAbility-AcidBlob"] = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindAcidBlobDestination",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData["MoveStandardIfFirstAbility-MicroMissiles"] = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindMicroMissilesDestination",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData["MoveStandardIfFirstAbility-BlazingPinions"] = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindBlazingPinionsDestination",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData["MoveStandardIfFirstAbility-PsiDimensionalRiftStage1"] = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindDimensionalRiftDestination",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData["MoveStandardIfFirstAbility-EnergyShield"] = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindShieldDestinationDefensive",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData["MoveStandardIfFirstAbility-PsiMindControl"] = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindMindControlDestinationDefensive",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData["MoveStandardIfFirstAbility-AnimaInversion"] = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindAnimaInversionDestination",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData["MoveStandardIfFirstAbility-PsiBombStage1"] = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindPsiBombDestination",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData["MoveStandardIfFirstAbility-NullLance"] = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindNullLanceDestination",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData["MoveStandardIfFirstAbility-Suppression"] = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindSuppressionDestination",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.TeleportForPsiBombTarget = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Teleport",
    Child1: "FindPsiBombTeleportDestination",
    Child2: "SelectAbility-Teleport"

};
window.defaultAIData.TeleportForPsiMindControl = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Teleport",
    Child1: "FindPsiMindControlTeleportDestination",
    Child2: "SelectAbility-Teleport"

};
window.defaultAIData.TeleportForPsiDimensionalRiftTarget = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Teleport",
    Child1: "FindPsiDimensionalRiftTeleportDestination",
    Child2: "SelectAbility-Teleport"

};
window.defaultAIData.TeleportForNullLanceTarget = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Teleport",
    Child1: "FindNullLanceTeleportDestination",
    Child2: "SelectAbility-Teleport"

};
window.defaultAIData["HasValidTarget-StunLance"] = {
    NodeType: "Condition"

};
window.defaultAIData["SetTargetStack-StunLance"] = {
    NodeType: "Action"

};
window.defaultAIData.TryStunLance = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StunLance",
    Child1: "StunLanceStepSelector"

};
window.defaultAIData.StunLanceStepSelector = {
    NodeType: "Selector",
    Child0: "StunLanceAttack",
    Child1: "MoveMeleeIfFirstAbilityFANATIC"

};
window.defaultAIData.StunLanceAttack = {
    NodeType: "Sequence",
    Child0: "SelectTargetForStunLance",
    Child1: "SelectAbility-StunLance"

};
window.defaultAIData.SelectTargetForStunLance = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StunLance",
    Child1: "SelectBestTargetForStunLance",
    Child2: "HasValidTarget-StunLance"

};
window.defaultAIData.SelectBestTargetForStunLance = {
    NodeType: "RepeatUntilFail",
    Child0: "TargetSelectIterationForStunLance"

};
window.defaultAIData.TargetSelectIterationForStunLance = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "EvaluateTargetForStunLance",
    Child2: "UpdateBestTarget"

};
window.defaultAIData.EvaluateTargetForStunLance = {
    NodeType: "Sequence",
    Child0: "TargetScoreHitChance",
    Child1: "TargetScoreHealth_HighFirst",
    Child2: "TargetScoreMarked",
    Child3: "AvoidBoundAndPanickedTargets",
    Child4: "TargetScoreCivilian",

};
window.defaultAIData.TryMarkTargetOption = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-MarkTarget",
    Child1: "AnyAlliesVisible",
    Child2: "MultipleEnemiesVisible",
    Child3: "NoUnitsMarked",
    Child4: "SelectTargetForMarkTarget",
    Child5: "SelectAbility-MarkTarget",
    Intent: "Marking a target: GETTIM!"

};
window.defaultAIData.SelectTargetForMarkTarget = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-MarkTarget",
    Child1: "ScoreAllTargets_MarkTarget",
    Child2: "HasValidTarget-MarkTarget"

};
window.defaultAIData.ScoreAllTargets_MarkTarget = {
    NodeType: "RepeatUntilFail",
    Child0: "ScoreTarget_MarkTargetLoop"

};
window.defaultAIData.ScoreTarget_MarkTargetLoop = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "ScoreTarget_MarkTargetScoring",
    Child2: "UpdateBestTarget"

};
window.defaultAIData.ScoreTarget_MarkTargetScoring = {
    NodeType: "Successor",
    Child0: "ScoreMarkTargetOption"

};
window.defaultAIData.ScoreMarkTargetOption = {
    NodeType: "Sequence",
    Child0: "TargetIsEnemy",
    Child1: "TargetIsNotCivilian",
    Child2: "ScoreByHP",
    Child3: "TargetScoreHealth_HighFirst",
    Child4: "TargetScoreHighestSoldierRank",
    Child5: "TargetScoreTeamVisibility",
    Child6: "SometimesRandomizeTarget",
    Child7: "AvoidBoundAndPanickedTargets"

};
window.defaultAIData["SetTargetStack-MarkTarget"] = {
    NodeType: "Action"

};
window.defaultAIData["HasValidTarget-MarkTarget"] = {
    NodeType: "Condition"

};
window.defaultAIData.NoUnitsMarked = {
    NodeType: "Inverter",
    Child0: "HaveAnyMarkedTargets"

};
window.defaultAIData.HaveAnyMarkedTargets = {
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "FindAnyMarkedTarget",
    Child2: "HasValidTarget-Potential"

};
window.defaultAIData.FindAnyMarkedTarget = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTargetIsMarked"

};
window.defaultAIData.EvaluateTargetIsMarked = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "SSScoreIfMarked",
    Child2: "UpdateBestTarget",
    Child3: "BreakOnAnyValidTarget-Potential"

};
window.defaultAIData.SSScoreIfMarked = {
    NodeType: "Successor",
    Child0: "ScoreTargetIfMarked"

};
window.defaultAIData["BreakOnAnyValidTarget-Potential"] = {
    NodeType: "Inverter",
    Child0: "HasValidTarget-Potential"

};
window.defaultAIData.TryEnergyShieldOnMultipleTargets = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-EnergyShield",
    Child1: "HasMultipleEnergyShieldTargets",
    Child2: "SelectAbility-EnergyShield"

};
window.defaultAIData.TryEnergyShieldOnAnyTarget = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-EnergyShield",
    Child1: "HasAnyEnergyShieldTargets",
    Child2: "SelectAbility-EnergyShield"

};
window.defaultAIData.SelectPotentialTargetForEnergyShield = {
    NodeType: "Sequence",
    Child0: "SetPotentialAllyTargetStack",
    Child1: "SelectBestAllyTargetForEnergyShield",
    Child2: "HasValidTarget-Potential"

};
window.defaultAIData.SelectBestAllyTargetForEnergyShield = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialEnergyShieldTarget"

};
window.defaultAIData.EvaluatePotentialEnergyShieldTarget = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "ScoreBestTargetForEnergyShield",
    Child2: "UpdateBestTarget"

};
window.defaultAIData.ScoreBestTargetForEnergyShield = {
    NodeType: "Successor",
    Child0: "TargetScoreReachableForEnergyShield"

};
window.defaultAIData.TargetScoreReachableForEnergyShield = {
    NodeType: "Sequence",
    Child0: "IsTargetInMovementRange-EnergyShield",
    Child1: "AvoidBoundAndPanickedTargets",
    Child2: "ScoreByHP"

};
window.defaultAIData.ScoreByHP = {
    NodeType: "Sequence",
    Child0: "TargetScoreByScaledMaxStat-eStat_HP",
    Child1: "TargetScoreByScaledCurrStat-eStat_HP"

};
window.defaultAIData["TargetScoreByScaledMaxStat-eStat_HP"] = {
    NodeType: "Action",
    Param0: "10"

};
window.defaultAIData["TargetScoreByScaledCurrStat-eStat_HP"] = {
    NodeType: "Action",
    Param0: "1"

};
window.defaultAIData.TryMoveThenMicroMissiles = {
    NodeType: "Selector",
    Child0: "TryMoveForMicroMissiles",
    Child1: "TryMicroMissiles"

};
window.defaultAIData.TryMoveForMicroMissiles = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-MicroMissiles",
    Child2: "FindPotentialAoETargets-MicroMissilesProfile",
    Child3: "MoveStandardIfFirstAbility-MicroMissiles"

};
window.defaultAIData.TryMicroMissiles = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-MicroMissiles",
    Child1: "FindPotentialAoETargets-MicroMissilesProfile",
    Child2: "SelectAoETarget-MicroMissilesProfile",
    Child3: "SelectAbility-MicroMissiles"

};
window.defaultAIData.TryMoveThenMicroMissilesMk2 = {
    NodeType: "Selector",
    Child0: "TryMoveForMicroMissilesMk2",
    Child1: "TryMicroMissilesMk2"

};
window.defaultAIData.TryMoveForMicroMissilesMk2 = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-MicroMissiles",
    Child2: "FindPotentialAoETargets-MicroMissilesProfileMk2",
    Child3: "MoveStandardIfFirstAbility-MicroMissiles"

};
window.defaultAIData.TryMicroMissilesMk2 = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-MicroMissiles",
    Child1: "FindPotentialAoETargets-MicroMissilesProfileMk2",
    Child2: "SelectAoETarget-MicroMissilesProfileMk2",
    Child3: "SelectAbility-MicroMissiles"

};
window.defaultAIData.TryMoveThenAcidBlob = {
    NodeType: "Selector",
    Child0: "TryMoveForAcidBlob",
    Child1: "TryAcidBlob"

};
window.defaultAIData.TryMoveForAcidBlob = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-AcidBlob",
    Child2: "FindPotentialAoETargets-AcidBlobProfile",
    Child3: "MoveStandardIfFirstAbility-AcidBlob"

};
window.defaultAIData.TryAcidBlob = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-AcidBlob",
    Child1: "FindPotentialAoETargets-AcidBlobProfile",
    Child2: "SelectAoETarget-AcidBlobProfile",
    Child3: "SelectAbility-AcidBlob"

};
window.defaultAIData["HasValidTarget-Bayonet"] = {
    NodeType: "Condition"

};
window.defaultAIData["SetTargetStack-Bayonet"] = {
    NodeType: "Action"

};
window.defaultAIData.TryBayonet = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-Bayonet",
    Child1: "BayonetStepSelector"

};
window.defaultAIData.BayonetStepSelector = {
    NodeType: "Selector",
    Child0: "BayonetAttack",
    Child1: "MoveMeleeDefensiveIfFirstAbility"

};
window.defaultAIData.BayonetAttack = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Bayonet",
    Child1: "SelectTargetForBayonet",
    Child2: "SelectAbility-Bayonet"

};
window.defaultAIData.SelectTargetForBayonet = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-Bayonet",
    Child1: "SelectBestTargetForStandardMelee",
    Child2: "HasValidTarget-Bayonet"

};
window.defaultAIData.SelectBestTargetForBayonet = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialMeleeTarget"

};
window.defaultAIData["HasValidTarget-DevastatingPunch"] = {
    NodeType: "Condition"

};
window.defaultAIData["SetTargetStack-DevastatingPunch"] = {
    NodeType: "Action"

};
window.defaultAIData.TryBerserkerMelee = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-DevastatingPunch",
    Child1: "MoveMeleeOrDevastatingPunchAttack"

};
window.defaultAIData.MoveMeleeOrDevastatingPunchAttack = {
    NodeType: "Selector",
    Child0: "TryDevastatingPunchAttack",
    Child1: "MoveToDevastatingPunchTargetIfFirstAbility"

};
window.defaultAIData.TryDevastatingPunchAttack = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMelee",
    Child1: "SelectTargetForDevastatingPunch",
    Child2: "SelectAbility-StandardMelee"

};
window.defaultAIData.MoveToDevastatingPunchTargetIfFirstAbility = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "ResetDestinationSearch",
    Child3: "IncludeCiviliansIfTerrorist",
    Child4: "FindBerserkerMeleeDestination",
    Child5: "SelectAbility-StandardMove"

};
window.defaultAIData.FindBerserkerMeleeDestination = {
    NodeType: "Sequence",
    Child0: "SelectPotentialTargetForDevastatingPunch",
    Child1: "RestrictToPotentialTargetRange-StandardMelee",
    Child2: "FindRestrictedDestination-Melee"

};
window.defaultAIData.SelectTargetForDevastatingPunch = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-DevastatingPunch",
    Child1: "SelectBestTargetForDevastatingPunch",
    Child2: "HasValidTarget-DevastatingPunch"

};
window.defaultAIData.SelectPotentialTargetForDevastatingPunch = {
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "SelectBestTargetForDevastatingPunch",
    Child2: "HasValidTarget-Potential"

};
window.defaultAIData.SelectBestTargetForDevastatingPunch = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialDevastatingPunchTarget"

};
window.defaultAIData.EvaluatePotentialDevastatingPunchTarget = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreClosestVisibleAllyIfEnraged",
    Child2: "TargetScoreClosestEnemyIfInRange",
    Child3: "TargetScoreInvalidateCivilians",
    Child4: "UpdateBestTarget"

};
window.defaultAIData.TargetScoreClosestVisibleAllyIfEnraged = {
    NodeType: "Successor",
    Child0: "ScoreClosestVisibleAllyIfEnraged"

};
window.defaultAIData.ScoreClosestVisibleAllyIfEnraged = {
    NodeType: "Sequence",
    Child0: "AffectedByEffect-RageTriggered",
    Child1: "IsVisibleToPlayer",
    Child2: "TargetIsAlly",
    Child3: "TargetIsAdvent",
    Child4: "TargetIsVisibleToPlayer",
    Child5: "IsTargetInMovementRange-StandardMelee",
    Child6: "TargetScoreByScaledDistance-1",
    Child7: "AddToTargetScore_100"

};
window.defaultAIData.TargetScoreClosestEnemyIfInRange = {
    NodeType: "Successor",
    Child0: "ScoreClosestEnemyIfInRange"

};
window.defaultAIData.ScoreClosestEnemyIfInRange = {
    NodeType: "Sequence",
    Child0: "TargetIsEnemy",
    Child1: "TargetIsNotAlien",
    Child2: "IsTargetInMovementRange-StandardMelee",
    Child3: "TargetScoreByScaledDistance-1",
    Child4: "AddToTargetScore_100",
    Child5: "AvoidBoundAndPanickedTargets"

};
window.defaultAIData.TryTriggerRage = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-TriggerRage",
    Child1: "SelectAbility-TriggerRage"

};
window.defaultAIData["HasValidTarget-MindSpin"] = {
    NodeType: "Condition"

};
window.defaultAIData["SetTargetStack-MindSpin"] = {
    NodeType: "Action"

};
window.defaultAIData.SelectTargetForMindSpin = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-MindSpin",
    Child1: "SelectBestTargetForMindSpin",
    Child2: "HasValidTarget-MindSpin"

};
window.defaultAIData.SelectBestTargetForMindSpin = {
    NodeType: "RepeatUntilFail",
    Child0: "PsiEvaluateTargetsGeneric"

};
window.defaultAIData["HasValidTarget-PsiReanimation"] = {
    NodeType: "Condition"

};
window.defaultAIData.TryPsiReanimation = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-PsiReanimation",
    Child1: "SelectTargetForPsiReanimation",
    Child2: "SelectAbility-PsiReanimation"

};
window.defaultAIData.SelectTargetForPsiReanimation = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-PsiReanimation",
    Child1: "GenericSelectTargetSomewhatRandomly",
    Child2: "HasValidTarget-PsiReanimation"

};
window.defaultAIData["SetTargetStack-PsiReanimation"] = {
    NodeType: "Action"

};
window.defaultAIData["HasValidTarget-GetOverHere"] = {
    NodeType: "Condition"

};
window.defaultAIData["SetTargetStack-GetOverHere"] = {
    NodeType: "Action"

};
window.defaultAIData.TryGetOverHere = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-GetOverHere",
    Child1: "SelectTargetForGetOverHere",
    Child2: "SelectAbility-GetOverHere"

};
window.defaultAIData.SelectTargetForGetOverHere = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-GetOverHere",
    Child1: "SelectBestTargetForGetOverHere",
    Child2: "HasValidTarget-GetOverHere"

};
window.defaultAIData.SelectBestTargetForGetOverHere = {
    NodeType: "RepeatUntilFail",
    Child0: "TargetSelectIterationForGetOverHere"

};
window.defaultAIData.TargetSelectIterationForGetOverHere = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "GenericTargetEvaluations",
    Child2: "TargetScoreInvalidateCivilians",
    Child3: "SSTargetScoreInvalidTonguePullTargets",
    Child4: "UpdateBestTarget"

};
window.defaultAIData.SSTargetScoreInvalidTonguePullTargets = {
    NodeType: "Successor",
    Child0: "TargetScoreInvalidTonguePullTargets"

};
window.defaultAIData.TargetScoreInvalidTonguePullTargets = {
    NodeType: "Sequence",
    Child0: "IsInvalidTonguePullTarget",
    Child1: "AddToTargetScore_-1000"

};
window.defaultAIData.IsInvalidTonguePullTarget = {
    NodeType: "Selector",
    Child0: "TargetAffectedByEffect-Suppression",
    Child1: "TargetIsApplyingEffect-Suppression"
        // 
};
window.defaultAIData.IsValidTonguePullTarget = {
    NodeType: "Inverter",
    Child0: "IsInvalidTonguePullTarget"

};
window.defaultAIData.TryMoveThenPoisonSpit = {
    NodeType: "Selector",
    Child0: "TryMoveForPoisonSpit",
    Child1: "TryPoisonSpit"

};
window.defaultAIData.TryMoveForPoisonSpit = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-PoisonSpit",
    Child2: "FindPotentialAoETargets-PoisonSpitProfile",
    Child3: "MoveStandardIfFirstAbility-PoisonSpit"

};
window.defaultAIData.TryPoisonSpit = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-PoisonSpit",
    Child1: "FindPotentialAoETargets-PoisonSpitProfile",
    Child2: "SelectAoETarget-PoisonSpitProfile",
    Child3: "SelectAbility-PoisonSpit"

};
window.defaultAIData.TryMoveThenPoisonSpitSingle = {
    NodeType: "Selector",
    Child0: "TryMoveForPoisonSpitSingle",
    Child1: "TryPoisonSpitSingle"

};
window.defaultAIData.TryMoveForPoisonSpitSingle = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-PoisonSpit",
    Child2: "FindPotentialAoETargets-PoisonSpitSingleProfile",
    Child3: "MoveStandardIfFirstAbility-PoisonSpit"

};
window.defaultAIData.TryPoisonSpitSingle = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-PoisonSpit",
    Child1: "FindPotentialAoETargets-PoisonSpitSingleProfile",
    Child2: "SelectAoETarget-PoisonSpitSingleProfile",
    Child3: "SelectAbility-PoisonSpit"

};
window.defaultAIData["HasValidTarget-Bind"] = {
    NodeType: "Condition"

};
window.defaultAIData["SetTargetStack-Bind"] = {
    NodeType: "Action"

};
window.defaultAIData.TryBind = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-Bind",
    Child1: "MoveMeleeOrBindAttack"

};
window.defaultAIData.MoveMeleeOrBindAttack = {
    NodeType: "Selector",
    Child0: "BindAttack",
    Child1: "MoveForBindIfFirstAbility"

};
window.defaultAIData.BindAttack = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Bind",
    Child1: "SelectTargetForBind",
    Child2: "SelectAbility-Bind"

};
window.defaultAIData.MoveForBindIfFirstAbility = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveForBindIfFirstAbilityUnsafe"

};
window.defaultAIData.MoveForBindIfFirstAbilityUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "ResetDestinationSearch",
    Child3: "IncludeCiviliansIfTerrorist",
    Child4: "FindViperMeleeDestination",
    Child5: "SelectAbility-StandardMove"

};
window.defaultAIData.FindViperMeleeDestination = {
    NodeType: "Sequence",
    Child0: "SelectPotentialTargetForBind",
    Child1: "RestrictToPotentialTargetRange-StandardMelee",
    Child2: "FindRestrictedDestination-Melee"

};
window.defaultAIData.SelectTargetForBind = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-Bind",
    Child1: "SelectBestTargetForBind",
    Child2: "HasValidTarget-Bind"

};
window.defaultAIData.SelectPotentialTargetForBind = {
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "SelectBestTargetForBind",
    Child2: "HasValidTarget-Potential"

};
window.defaultAIData.SelectBestTargetForBind = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialMeleeTarget"

};
window.defaultAIData["HasValidTarget-PsiMindControl"] = {
    NodeType: "Condition"

};
window.defaultAIData["SetTargetStack-PsiMindControl"] = {
    NodeType: "Action"

};
window.defaultAIData.TryPsiMindControl = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-PsiMindControl",
    Child1: "SelectTargetForPsiMindControl",
    Child2: "SelectAbility-PsiMindControl"

};
window.defaultAIData.SelectTargetForPsiMindControl = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-PsiMindControl",
    Child1: "SelectBestTargetForPsiMindControl",
    Child2: "HasValidTarget-PsiMindControl"

};
window.defaultAIData.SelectBestTargetForPsiMindControl = {
    NodeType: "RepeatUntilFail",
    Child0: "PsiEvaluateTargetsMindControl"

};
window.defaultAIData.TryMoveForPsiMindControl = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityAvailable-PsiMindControl",
    Child2: "SelectTargetForPsiMindControl",
    Child3: "MoveStandardIfFirstAbility-PsiMindControl"

};
window.defaultAIData.TryMoveThenPsiMindControl = {
    NodeType: "Selector",
    Child0: "TryMoveForPsiMindControl",
    Child1: "TryPsiMindControl"

};
window.defaultAIData.TryDimensionalRift = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-PsiDimensionalRiftStage1",
    Child1: "FindPotentialAoETargets-PsiRiftProfile",
    Child2: "SelectAoETarget-PsiRiftProfile",
    Child3: "SelectAbility-PsiDimensionalRiftStage1"

};
window.defaultAIData.TryMoveThenDimensionalRift = {
    NodeType: "Selector",
    Child0: "TryMoveForDimensionalRift",
    Child1: "TryDimensionalRift"

};
window.defaultAIData.TryMoveForDimensionalRift = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-PsiDimensionalRiftStage1",
    Child2: "FindPotentialAoETargets-PsiRiftProfile",
    Child3: "MoveStandardIfFirstAbility-PsiDimensionalRiftStage1"

};
window.defaultAIData.TryNullLance = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-NullLance",
    Child1: "FindPotentialAoETargets-NullLanceValidateProfile",
    Child2: "SelectAoETarget-NullLanceValidateProfile",
    Child3: "SelectAbility-NullLance"

};
window.defaultAIData.TryMoveThenNullLance = {
    NodeType: "Selector",
    Child0: "TryMoveForNullLance",
    Child1: "TryNullLance"

};
window.defaultAIData.TryMoveForNullLance = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-NullLance",
    Child2: "NotLastActionPoint",
    Child3: "SelectPotentialMeleeTarget",
    Child4: "FindPotentialAoETargets-NullLanceProfile",
    Child5: "MoveStandardIfFirstAbility-NullLance"

};
window.defaultAIData.TryTriggerDamagedTeleport = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-TriggerDamagedTeleport",
    Child1: "SelectAbility-TriggerDamagedTeleport"

};
window.defaultAIData.TryBurrowIfNotOnJob = {
    NodeType: "Sequence",
    Child0: "DoNotHaveAlwaysOnJob",
    Child1: "BurrowIfOutOfView"

};
window.defaultAIData.TryBurrow = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-ChryssalidBurrow",
    Child1: "SelectAbility-ChryssalidBurrow",
    Child2: "SetUnitValue-MeleeChance"

};
window.defaultAIData.TryUnBurrow = {
    NodeType: "Sequence",
    Child0: "AffectedByEffect-Burrowed",
    Child1: "IsAbilityAvailable-ChryssalidUnburrow",
    Child2: "SelectAbility-ChryssalidUnburrow"

};
window.defaultAIData.TryUnBurrowSuccessor = {
    NodeType: "Successor",
    Child0: "TryUnBurrow"

};
window.defaultAIData.ChryssalidBurrowedAttack = {
    NodeType: "Selector",
    Child0: "TryUnBurrow",
    Child1: "TryMeleeAttackPriorityTarget"

};
window.defaultAIData.TrySpawnChryssalid = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-SpawnChryssalid",
    Child1: "SelectAbility-SpawnChryssalid"

};
window.defaultAIData.TryFrenzyTrigger = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-FrenzyTrigger",
    Child1: "SelectAbility-FrenzyTrigger"

};
window.defaultAIData.TryBlazingPinions = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-BlazingPinionsStage1",
    Child1: "FindPotentialAoETargets-BlazingPinionsBasicProfile",
    Child2: "SelectAoETarget-BlazingPinionsBasicProfile",
    Child3: "SelectAbility-BlazingPinionsStage1"

};
window.defaultAIData.TryAnimaInversionCorpses = {
    NodeType: "Selector",
    Child0: "TryAnimaInversionCorpseActivate",
    Child1: "TryGatekeeperOpenIfAnimaInversionCorpseReady"

};
window.defaultAIData.TryAnimaInversionCorpseActivate = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-AnimaInversion",
    Child1: "FindPotentialAoETargets-AnimaInversionCorpseProfile",
    Child2: "SelectAoETarget-AnimaInversionCorpseProfile",
    Child3: "SelectAbility-AnimaInversion"

};
window.defaultAIData.TryGatekeeperOpenIfAnimaInversionCorpseReady = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-AnimaInversion",
    Child1: "FindPotentialAoETargets-AnimaInversionCorpseProfile",
    Child2: "SelectAoETarget-AnimaInversionCorpseProfile",
    Child3: "TryGatekeeperOpen"

};
window.defaultAIData.TryMoveThenAnimaInversionCorpse = {
    NodeType: "Selector",
    Child0: "TryMoveForAnimaInversionCorpse",
    Child1: "TryAnimaInversionCorpses"

};
window.defaultAIData.TryMoveForAnimaInversionCorpse = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-AnimaInversion",
    Child2: "FindPotentialAoETargets-AnimaInversionCorpseProfile",
    Child3: "MoveStandardIfFirstAbility-AnimaInversion"

};
window.defaultAIData.TryAnimaInversionMixed = {
    NodeType: "Selector",
    Child0: "TryAnimaInversionMixedActivate",
    Child1: "TryGatekeeperOpenIfAnimaInversionMixedReady"

};
window.defaultAIData.TryAnimaInversionMixedActivate = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-AnimaInversion",
    Child1: "FindPotentialAoETargets-AnimaInversionMixedProfile",
    Child2: "SelectAoETarget-AnimaInversionMixedProfile",
    Child3: "SelectAbility-AnimaInversion"

};
window.defaultAIData.TryGatekeeperOpenIfAnimaInversionMixedReady = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-AnimaInversion",
    Child1: "FindPotentialAoETargets-AnimaInversionMixedProfile",
    Child2: "SelectAoETarget-AnimaInversionMixedProfile",
    Child3: "TryGatekeeperOpen"

};
window.defaultAIData.TryMoveThenAnimaInversionMixed = {
    NodeType: "Selector",
    Child0: "TryMoveForAnimaInversionMixed",
    Child1: "TryAnimaInversionMixed"

};
window.defaultAIData.TryMoveForAnimaInversionMixed = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-AnimaInversion",
    Child2: "FindPotentialAoETargets-AnimaInversionMixedProfile",
    Child3: "MoveStandardIfFirstAbility-AnimaInversion"

};
window.defaultAIData["HasValidTarget-AnimaConsume"] = {
    NodeType: "Condition"

};
window.defaultAIData["SetTargetStack-AnimaConsume"] = {
    NodeType: "Action"

};
window.defaultAIData.TryAnimaConsumeOnEnemy = {
    NodeType: "Sequence",
    Child0: "HasWounds",
    Child1: "IsAbilityReady-AnimaConsume",
    Child2: "AnimaConsumeStepSelectorEnemy"

};
window.defaultAIData.AnimaConsumeStepSelectorEnemy = {
    NodeType: "Selector",
    Child0: "AnimaConsumeAttackEnemy",
    Child1: "AnimaConsumeAttackEnemyUnopened",
    Child2: "MoveMeleeIfFirstAbilityFANATIC"

};
window.defaultAIData.TryAnimaConsumeOnAlly = {
    NodeType: "Sequence",
    Child0: "IsBloodied",
    Child1: "IsVisibleToPlayer",
    Child2: "IsAbilityReady-AnimaConsume",
    Child3: "AnimaConsumeStepSelectorAlly"

};
window.defaultAIData.AnimaConsumeStepSelectorAlly = {
    NodeType: "Selector",
    Child0: "AnimaConsumeAttackAlly",
    Child1: "AnimaConsumeAttackAllyUnopened",
    Child2: "MoveToPotentialMeleeIfFirstAbilityFANATIC"

};
window.defaultAIData.AnimaConsumeNotAvailable = {
    NodeType: "Inverter",
    Child0: "IsAbilityAvailable-AnimaConsume"

};
window.defaultAIData.IncludeAlliesAsMeleeTargets = {
    NodeType: "Action"

};
window.defaultAIData.AnimaConsumeAttackEnemy = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-AnimaConsume",
    Child1: "SelectEnemyTargetForAnimaConsume",
    Child2: "SelectAbility-AnimaConsume"

};
window.defaultAIData.AnimaConsumeAttackEnemyUnopened = {
    NodeType: "Sequence",
    Child0: "AnimaConsumeNotAvailable",
    Child1: "SelectPotentialTargetForEnemyAnimaConsume",
    Child2: "IsTargetInAttackRange-StandardMelee",
    Child3: "TryGatekeeperOpen"

};
window.defaultAIData.SelectPotentialTargetForEnemyAnimaConsume = {
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "SelectBestEnemyTargetForAnimaConsume",
    Child2: "HasValidTarget-Potential"

};
window.defaultAIData.SelectEnemyTargetForAnimaConsume = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-AnimaConsume",
    Child1: "SelectBestEnemyTargetForAnimaConsume",
    Child2: "HasValidTarget-AnimaConsume"

};
window.defaultAIData.SelectBestEnemyTargetForAnimaConsume = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialMeleeTarget"

};
window.defaultAIData.AnimaConsumeAttackAlly = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-AnimaConsume",
    Child1: "SelectAllyTargetForAnimaConsume",
    Child2: "SelectAbility-AnimaConsume"

};
window.defaultAIData.AnimaConsumeAttackAllyUnopened = {
    NodeType: "Sequence",
    Child0: "AnimaConsumeNotAvailable",
    Child1: "SelectPotentialTargetForAllyAnimaConsume",
    Child2: "IsTargetInAttackRange-StandardMelee",
    Child3: "TryGatekeeperOpen"

};
window.defaultAIData.SelectPotentialTargetForAllyAnimaConsume = {
    NodeType: "Sequence",
    Child0: "SetPotentialAllyTargetStack",
    Child1: "SelectBestAllyTargetForAnimaConsume",
    Child2: "HasValidTarget-Potential"

};
window.defaultAIData.SelectAllyTargetForAnimaConsume = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-AnimaConsume",
    Child1: "SelectBestAllyTargetForAnimaConsume",
    Child2: "HasValidTarget-AnimaConsume"

};
window.defaultAIData.SelectBestAllyTargetForAnimaConsume = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateAllyTargetForAnimaConsume"

};
window.defaultAIData.EvaluateAllyTargetForAnimaConsume = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreIfAllyWithinRangeAnimaConsume",
    Child2: "UpdateBestTarget"
        // 
};
window.defaultAIData.TargetScoreIfAllyWithinRangeAnimaConsume = {
    NodeType: "Successor",
    Child0: "TargetScoreReachableAllyAnimaConsume"

};
window.defaultAIData["HasValidTarget-AnimaGate"] = {
    NodeType: "Condition"

};
window.defaultAIData["SetTargetStack-AnimaGate"] = {
    NodeType: "Action"

};
window.defaultAIData.GateKeeperShootIfAvailable = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-AnimaGate",
    Child1: "SetTargetStack-AnimaGate",
    Child2: "SelectTargetForStandardShot",
    Child3: "GatekeeperTryShootOrOpen"

};
window.defaultAIData.GatekeeperTryShootOrOpen = {
    NodeType: "Selector",
    Child0: "GatekeeperShootIfTarget",
    Child1: "TryGatekeeperOpen"

};
window.defaultAIData.GatekeeperShootIfTarget = {
    NodeType: "Sequence",
    Child0: "HasValidTarget-AnimaGate",
    Child1: "SelectAbility-AnimaGate"

};
window.defaultAIData.TryGatekeeperOpen = {
    NodeType: "Sequence",
    Child0: "AffectedByEffect-GatekeeperClosedEffect",
    Child1: "IsAbilityAvailable-GatekeeperOpen",
    Child2: "SelectAbility-GatekeeperOpen"

};
window.defaultAIData.TryGatekeeperClose = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-GatekeeperClose",
    Child1: "SelectAbility-GatekeeperClose"

};
window.defaultAIData.IsOrCanOpen = {
    NodeType: "Selector",
    Child0: "IsAbilityAvailable-GatekeeperOpen",
    Child1: "AffectedByEffect-GatekeeperClosedEffect"

};
window.defaultAIData.TryRetract = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Retract",
    Child1: "SelectAbility-Retract"

};
window.defaultAIData.TryPsiBomb = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-PsiBombStage1",
    Child1: "FindPotentialAoETargets-PsiBombProfile",
    Child2: "SelectAoETarget-PsiBombProfile",
    Child3: "SelectAbility-PsiBombStage1"

};
window.defaultAIData.TryTeleportDefensive = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Teleport",
    Child1: "ResetDestinationSearch",
    Child2: "UseDashMovement",
    Child3: "FindDestinationWithLoS-IsoTeleport",
    Child4: "SelectAbility-Teleport"

};
window.defaultAIData.TryTeleportOffensive = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Teleport",
    Child1: "ResetDestinationSearch",
    Child2: "RestrictToFlanking",
    Child3: "UseDashMovement",
    Child4: "FindDestinationWithLoS-Teleport",
    Child5: "SelectAbility-Teleport"

};
window.defaultAIData.TryTriggerSuperposition = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-TriggerSuperposition",
    Child1: "SelectAbility-TriggerSuperposition"

};
window.defaultAIData["SetTargetStack-ScythingClaws"] = {
    NodeType: "Action"

};
window.defaultAIData["HasValidTarget-ScythingClaws"] = {
    NodeType: "Condition"

};
window.defaultAIData.TryScythingClaws = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-ScythingClaws",
    Child1: "SelectTargetForScythingClaws",
    Child2: "SelectAbility-ScythingClaws"

};
window.defaultAIData.SelectTargetForScythingClaws = {
    NodeType: "Selector",
    Child0: "ScythingClaws_HitIdealTarget",
    Child1: "ScythingClaws_AnyTargetWillDo"

};
window.defaultAIData.ScythingClaws_HitIdealTarget = {
    NodeType: "Sequence",
    Child0: "SelectPotentialMeleeTarget",
    Child1: "FindPotentialAoETargets-ScythingClawsPrefTargetProfile",
    Child2: "SelectAoETarget-ScythingClawsPrefTargetProfile"

};
window.defaultAIData.ScythingClaws_AnyTargetWillDo = {
    NodeType: "Sequence",
    Child0: "FindPotentialAoETargets-ScythingClawsProfile",
    Child1: "SelectAoETarget-ScythingClawsProfile"

};
window.defaultAIData.TryWrathCannon = {
    NodeType: "Failer",
    Child0: "IsAbilityAvailable-WrathCannon"

};
window.defaultAIData.TryWrathCannon_TEMPDISABLED = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-WrathCannon",
    Child1: "FindPotentialAoETargets-WrathCannonProfile",
    Child2: "SelectAoETarget-WrathCannonProfile",
    Child3: "SelectAbility-WrathCannon"

};
window.defaultAIData.TryWrathCannonS1 = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-WrathCannonStage1",
    Child1: "CannonNotCharging",
    Child2: "FindPotentialAoETargets-WrathCannonS1Profile",
    Child3: "SelectAoETarget-WrathCannonS1Profile",
    Child4: "SelectAbility-WrathCannonStage1"

};
window.defaultAIData.CannonNotCharging = {
    NodeType: "Inverter",
    Child0: "AffectedByEffect-WrathCannonStage1Effect"

};
window.defaultAIData.MimicBeaconBehavior = {
    NodeType: "Sequence",
    Child0: "IsUnitTypeVisible-MimicBeacon",
    Child1: "MoveOrAttackMimicBeacon"

};
window.defaultAIData["IsUnitTypeVisible-MimicBeacon"] = {
    NodeType: "Condition"
        //  currently this checks LoS to any Mimic Beacons.
};
window.defaultAIData.MoveOrAttackMimicBeacon = {
    NodeType: "Selector",
    Child0: "MoveTowardMimicBeaconIfFirstAction",
    Child1: "::AttackMimicBeacon",
    Child2: "::MoveTowardMimicBeacon"
        //  If attack fails", just try moving closer.
};
window.defaultAIData.MoveTowardMimicBeaconIfFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "::MoveTowardMimicBeacon"

};
window.defaultAIData["::MoveTowardMimicBeacon"] = {
    NodeType: "Selector",
    Child0: "TryMeleeMoveTowardMimicBeacon",
    Child1: "TryStandardMoveTowardMimicBeacon"

};
window.defaultAIData.TryStandardMoveTowardMimicBeacon = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "FindDestinationTowardMimicBeacon",
    Child2: "SelectAbility-StandardMove"

};
window.defaultAIData.FindDestinationTowardMimicBeacon = {
    NodeType: "Selector",
    Child0: "FindMimicBeaconDestWithStandardShot",
    Child1: "FindPotentialMimicBeaconDest"
        //  Not all units have a standard shot ability.
};
window.defaultAIData.FindMimicBeaconDestWithStandardShot = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectMimicBeaconTargetForStandardShot",
    Child2: "SetTargetAsPriority-StandardShot",
    Child3: "RestrictToAbilityRange-StandardShot",
    Child4: "FindRestrictedDestination-MimicBeacon"

};
window.defaultAIData.FindPotentialMimicBeaconDest = {
    NodeType: "Sequence",
    Child0: "SelectPotentialMimicBeaconTarget",
    Child1: "SetTargetAsPriority-Potential",
    Child2: "SelectFindMimicBeaconMeleeOrStandardShot"

};
window.defaultAIData.SelectFindMimicBeaconMeleeOrStandardShot = {
    NodeType: "Selector",
    Child0: "IfMeleeFindClosestPointToTarget",
    Child1: "FindRestrictedDestination-MimicBeacon"

};
window.defaultAIData.IfMeleeFindClosestPointToTarget = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "FindClosestPointToTarget-Potential"

};
window.defaultAIData.TryMeleeMoveTowardMimicBeacon = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "SelectPotentialMimicBeaconTarget",
    Child2: "RestrictToPotentialTargetRange-StandardMelee",
    Child3: "FindRestrictedDestination-MeleeFanatic",
    Child4: "SelectAbility-StandardMove"

};
window.defaultAIData["::AttackMimicBeacon"] = {
    NodeType: "Selector",
    Child0: "TryStandardMeleeOnMimicBeacon",
    Child1: "TryStandardShotOnMimicBeacon "

};
window.defaultAIData["FindClosestPointToTarget-Potential"] = {
    NodeType: "Action"

};
window.defaultAIData["SetTargetAsPriority-StandardShot"] = {
    NodeType: "Action"

};
window.defaultAIData["SetTargetAsPriority-Potential"] = {
    NodeType: "Action"

};
window.defaultAIData.TryStandardShotOnMimicBeacon = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectMimicBeaconTargetForStandardShot",
    Child2: "SelectAbility-StandardShot"

};
window.defaultAIData.SelectMimicBeaconTargetForStandardShot = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "SelectMimicBeaconTarget",
    Child2: "HasValidTarget-StandardShot"

};
window.defaultAIData.SelectMimicBeaconTarget = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateMimicBeaconTarget"

};
window.defaultAIData.EvaluateMimicBeaconTarget = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "SSTargetScoreMimicBeacon",
    Child2: "UpdateBestTarget"

};
window.defaultAIData.SSTargetScoreMimicBeacon = {
    NodeType: "Successor",
    Child0: "TargetScoreMimicBeacon"

};
window.defaultAIData.TargetScoreMimicBeacon = {
    NodeType: "Sequence",
    Child0: "TargetTemplateNameIs-MimicBeacon",
    Child1: "AddToTargetScore_100",
    Child2: "MultipleUnitsVisibleOfType-MimicBeacon",
    Child3: "IsTargetClosestOfType-MimicBeacon",
    Child4: "AddToTargetScore_10"

};
window.defaultAIData["TargetTemplateNameIs-MimicBeacon"] = {
    NodeType: "Condition"

};
window.defaultAIData["MultipleUnitsVisibleOfType-MimicBeacon"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsTargetClosestOfType-MimicBeacon"] = {
    NodeType: "Condition"

};
window.defaultAIData.SelectPotentialMimicBeaconTarget = {
    NodeType: "Sequence",
    Child0: "SetVisiblePotentialTargetStack",
    Child1: "SelectMimicBeaconTarget",
    Child2: "HasValidTarget-Potential"

};
window.defaultAIData.TryStandardMeleeOnMimicBeacon = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMelee",
    Child1: "SelectMimicBeaconTargetForStandardMelee",
    Child2: "SelectAbility-StandardMelee"

};
window.defaultAIData.SelectMimicBeaconTargetForStandardMelee = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardMelee",
    Child1: "SelectMimicBeaconTarget",
    Child2: "HasValidTarget-StandardMelee"

};
window.defaultAIData.CivRoot = {
    NodeType: "Selector",
    Child0: "CivCheckTerror",
    Child1: "CivNormal"

};
window.defaultAIData.CivCheckTerror = {
    NodeType: "Sequence",
    Child0: "IsMissionOfType-Terror",
    Child1: "CivTerror"

};
window.defaultAIData.CivTerror = {
    NodeType: "Selector",
    Child0: "CivTerrorAI",
    Child1: "SkipMove"

};
window.defaultAIData.CivTerrorAI = {
    NodeType: "Sequence",
    Child0: "IsAIInCivilianRadius",
    Child1: "FindDestination-CivilianRed",
    Child2: "SelectAbility-StandardMove"

};
window.defaultAIData.CivNormal = {
    NodeType: "Selector",
    Child0: "CivHighSupportMove",
    Child1: " CivLowSupportMove",
    Child2: "SkipMove"

};
window.defaultAIData.CivHighSupportMove = {
    NodeType: "Sequence",
    Child0: "HighPopularSupport",
    Child1: "FindDestination-CivilianRed",
    Child2: "SelectAbility-StandardMove"

};
window.defaultAIData.CivLowSupportMove = {
    NodeType: "Sequence",
    Child0: "LowPopularSupport",
    Child1: "FindDestination-CivilianRed",
    Child2: "DoNoiseAlert",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.HostileCivRoot = {
    NodeType: "Sequence",
    Child0: "DoNoiseAlert",
    Child1: "FindDestination-CivilianRed",
    Child2: "SelectAbility-StandardMove"

};
window.defaultAIData.FacelessCivRoot = {
    NodeType: "Selector",
    Child0: "FacelessCivCheckTerror"

};
window.defaultAIData.FacelessCivCheckTerror = {
    NodeType: "Sequence",
    Child0: "IsMissionOfType-Terror",
    Child1: "FacelessCivTerror"

};
window.defaultAIData.FacelessCivTerror = {
    NodeType: "Selector",
    Child0: "CivTerrorAI",
    Child1: "SkipMove"

};
window.defaultAIData.VIPCowardRoot = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "SkipTurnifGreenAlert",
    Child2: "VIPCowardRedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.VIPCowardRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "VIPPickMovement"

};
window.defaultAIData.VIPPickMovement = {
    NodeType: "Selector",
    Child0: "IfWounded",
    Child1: "MoveBackWithLOSIfFlanked",
    Child2: "GenericRedAbilitySelector"

};
window.defaultAIData.IfWounded = {
    NodeType: "Sequence",
    Child0: "HasWounds",
    Child1: "FallBack"

};
window.defaultAIData.GenericCowardRoot = {
    NodeType: "Selector",
    Child0: "GenericGreenMovement",
    Child1: "CowardlyIfEnemySpotted",
    Child2: "CowardlyIfEnemyNear"

};
window.defaultAIData.CowardlyIfEnemySpotted = {
    NodeType: "Sequence",
    Child0: "IsEnemySpotted",
    Child1: "TryCowardlyEnemySpottedAction"

};
window.defaultAIData.TryCowardlyEnemySpottedAction = {
    NodeType: "Selector",
    Child0: "FallBackWithLoSIfFirstAbility",
    Child1: "DoCower"

};
window.defaultAIData.CowardlyIfEnemyNear = {
    NodeType: "Sequence",
    Child0: "IsYellowAlert",
    Child1: "TryCowardYellowAction"

};
window.defaultAIData.TryCowardYellowAction = {
    NodeType: "Selector",
    Child0: "MoveDefensiveIfFirstAbility",
    Child1: "DoCower"

};
window.defaultAIData["::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "DoRedScreenFailure-BTFailure",
    Child1: "TryJob",
    Child2: "GenericGreenMovement",
    Child3: "GenericRedAlert",
    Child4: "GenericAlertHandler"

};
window.defaultAIData["DoRedScreenFailure-BTFailure"] = {
    NodeType: "Action",
    Param0: "RedScreen-Error On Behavior Tree! ::CharacterRoot not overridden! @acheng"

};
window.defaultAIData.GenericRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "GenericRedAbilitySelector"

};
window.defaultAIData.GenericRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "GenericRedFirstAction",
    Child1: "GenericRedLastAction"

};
window.defaultAIData.GenericRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "GenericRedFirstActionSelector"

};
window.defaultAIData.GenericRedFirstActionSelector = {
    NodeType: "Selector",
    Child0: "DoIfFlankedMove",
    Child1: "SelectMoveStandard",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "HuntEnemyWithCover"

};
window.defaultAIData.GenericRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "GenericRedLastActionSelector"

};
window.defaultAIData.GenericRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryGrenade",
    Child1: "TryShootOrReloadOrOverwatch",
    Child2: "TryStandardMelee",
    Child3: "HuntEnemyWithCover",
    Child4: "SelectMoveStandard"

};
window.defaultAIData.GenericEnemyRootAGGRESSIVE = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "GenericRedAlertAGGRESSIVE",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.GenericRedAlertAGGRESSIVE = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "AggressiveRedAbilitySelector"

};
window.defaultAIData.AggressiveRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "AggressiveRedFirstAction",
    Child1: "AggressiveRedLastAction"

};
window.defaultAIData.AggressiveRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AggressiveRedFirstActionSelector"

};
window.defaultAIData.AggressiveRedFirstActionSelector = {
    NodeType: "Selector",
    Child0: "AttackIfIdeal",
    Child1: "DoIfFlankedMove",
    Child2: "SelectMove_JobOrAggressive",
    Child3: "TryShootOrReloadOrOverwatch",
    Child4: "HuntEnemy"

};
window.defaultAIData.AggressiveRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "AggressiveRedLastActionSelector"

};
window.defaultAIData.AggressiveRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "AttackIfFavorable",
    Child1: "TryShootOrReloadOrOverwatch",
    Child2: "HuntEnemy",
    Child3: "SelectMove_JobOrAggressive"

};
window.defaultAIData.GenericEnemyNoCover = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "GenericNoCoverRedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.GenericNoCoverRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "GenericNoCoverRedAbilitySelector"

};
window.defaultAIData.GenericNoCoverRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "GenericNoCoverRedFirstAction",
    Child1: "GenericNoCoverRedLastAction"

};
window.defaultAIData.GenericNoCoverRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "GenericNoCoverFirstActionSelector"

};
window.defaultAIData.GenericNoCoverFirstActionSelector = {
    NodeType: "Selector",
    Child0: "SelectNCMove_JobOrFanatic",
    Child1: "TryShootOrReloadOrOverwatch",
    Child2: "HuntEnemy"

};
window.defaultAIData.GenericNoCoverRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "GenericNoCoverRedLastActionSelector"

};
window.defaultAIData.GenericNoCoverRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryGrenade",
    Child1: "TryShootOrReloadOrOverwatch",
    Child2: "HuntEnemy",
    Child3: "SelectNCMove_JobOrFanatic"

};
window.defaultAIData.GenericEnemyMeleeRoot = {
    NodeType: "Selector",
    Child0: "TryJobUnsafe",
    Child1: "GenericGreenMovement",
    Child2: "GenericMeleeRedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.GenericMeleeRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "GenericMeleeRedAbilitySelector"

};
window.defaultAIData.GenericMeleeRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MeleeRedFirstAction",
    Child1: "MeleeRedLastAction"

};
window.defaultAIData.MeleeRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MeleeRedFirstActionSelector"

};
window.defaultAIData.MeleeRedFirstActionSelector = {
    NodeType: "Selector",
    Child0: "TryStandardMeleeUnsafe",
    Child1: "DoIfFlankedMove",
    Child2: "SelectUnsafeMove_JobOrMelee",
    Child3: "TryMoveThenGrenade",
    Child4: "TryShootOrReloadOrOverwatch",
    Child5: "HuntEnemyUnsafe"

};
window.defaultAIData.MeleeRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "MeleeRedLastActionSelector"

};
window.defaultAIData.MeleeRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryStandardMeleeUnsafe",
    Child1: "TryGrenade",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "HuntEnemyUnsafe",
    Child4: "SelectUnsafeMove_JobOrMelee"

};
window.defaultAIData.GenericEnemyMeleeRootFANATIC = {
    NodeType: "Selector",
    Child0: "TryJobUnsafe",
    Child1: "GenericGreenMovement",
    Child2: "GenericMeleeRedAlertFANATIC",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.GenericMeleeRedAlertFANATIC = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "GenericMeleeFANATICRedAbilitySelector"

};
window.defaultAIData.GenericMeleeFANATICRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "TryStandardMeleeUnsafe",
    Child1: "MoveMeleeFANATICUnsafe",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "HuntEnemyUnsafe"

};
window.defaultAIData.MindControlledRoot = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "MindControlledMove",
    Child2: "MCTryGrenadeOption",
    Child3: "TryStandardMeleeUnsafe",
    Child4: "ShootIfAvailable",
    Child5: "NeedsReload",
    Child6: "TryOverwatch",
    Child7: "SkipMove"

};
window.defaultAIData.MindControlledMove = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "ResetDestinationSearch",
    Child3: "IgnoreHazards",
    Child4: "MoveNoCover",
    Child5: "FindDestination-Fanatic",
    Child6: "SelectAbility-StandardMove"

};
window.defaultAIData.MCTryGrenadeOption = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-ThrowGrenade",
    Child1: "DoesGrenadeCauseDamage",
    Child2: "FindPotentialAoETargets-GrenadeMindControlledProfile",
    Child3: "MCSetUpAndSelectGrenade"

};
window.defaultAIData.MCSetUpAndSelectGrenade = {
    NodeType: "Sequence",
    Child0: "SelectAoETarget-GrenadeMindControlledProfile",
    Child1: "SelectAbility-ThrowGrenade"

};
window.defaultAIData.PanickedRoot = {
    NodeType: "Selector",
    Child0: "Panicked_FirstAction",
    Child1: "Panicked_LastAction",
    Child2: "SkipMove"

};
window.defaultAIData.Panicked_FirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "Panicked_FirstAction_Selector"
        // 
};
window.defaultAIData.Panicked_FirstAction_Selector = {
    NodeType: "Selector",
    Child0: "PanickedMove",
    Child1: "PanickedAction",
    Child2: "SkipMove"

};
window.defaultAIData.Panicked_LastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "Panicked_LastAction_Selector"

};
window.defaultAIData.Panicked_LastAction_Selector = {
    NodeType: "Selector",
    Child0: "PanickedAction",
    Child1: "PanickedMove",
    Child2: "SkipMove"

};
window.defaultAIData.PanickedMove = {
    NodeType: "Selector",
    Child0: "PanickedFallBackUnsafe",
    Child1: "MoveDefensiveWithLoSUnsafe",
    Child2: "MoveDefensiveUnsafe"

};
window.defaultAIData.PanickedAction = {
    NodeType: "RandSelector",
    Child0: "ShootRandomTargetForPanic",
    Param0: "5",
    Child1: "TryPanickedGrenadeToss",
    Param1: "1",
    Child2: "DoCower",
    Param2: "2"

};
window.defaultAIData.ShootRandomTargetForPanic = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectRandomTargetForPanic",
    Child2: "SelectAbility-StandardShot"

};
window.defaultAIData.SelectRandomTargetForPanic = {
    NodeType: "Selector",
    Child0: "IfTeamXComSelectAnyRandomTarget",
    Child1: "IfNotTeamXComSelectRandomTeammateTarget"

};
window.defaultAIData.IfTeamXComSelectAnyRandomTarget = {
    NodeType: "Sequence",
    Child0: "IsTeam-eTeam_XCom",
    Child1: "SelectRandomEnemyTarget"
        // Child1: "SelectAnyRandomTarget"

};
window.defaultAIData.IfNotTeamXComSelectRandomTeammateTarget = {
    NodeType: "Sequence",
    Child0: "NotTeamXCom",
    Child1: "SelectRandomTeammateTarget"

};
window.defaultAIData["IsTeam-eTeam_XCom"] = {
    NodeType: "Condition"

};
window.defaultAIData.NotTeamXCom = {
    NodeType: "Inverter",
    Child0: "IsTeam-eTeam_XCom"

};
window.defaultAIData.SelectRandomEnemyTarget = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "SelectEnemyTargetRandomly",
    Child2: "HasValidTarget-StandardShot"

};
window.defaultAIData.SelectEnemyTargetRandomly = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateEnemyTargetRandomly"

};
window.defaultAIData.EvaluateEnemyTargetRandomly = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "SSScoreEnemyTargetRandomly",
    Child2: "UpdateBestTarget"

};
window.defaultAIData.SSScoreEnemyTargetRandomly = {
    NodeType: "Successor",
    Child0: "ScoreEnemyTargetRandomly"

};
window.defaultAIData.ScoreEnemyTargetRandomly = {
    NodeType: "Sequence",
    Child0: "TargetIsEnemy",
    Child1: "GenericScoreTargetRandomlySequence"

};
window.defaultAIData.SelectRandomTeammateTarget = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "SelectTeammateTargetRandomly",
    Child2: "HasValidTarget-StandardShot"

};
window.defaultAIData.SelectTeammateTargetRandomly = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTeammateTargetRandomly"

};
window.defaultAIData.EvaluateTeammateTargetRandomly = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "SSScoreTeammateTargetRandomly",
    Child2: "UpdateBestTarget"

};
window.defaultAIData.SSScoreTeammateTargetRandomly = {
    NodeType: "Successor",
    Child0: "ScoreTeammateTargetRandomly"

};
window.defaultAIData.ScoreTeammateTargetRandomly = {
    NodeType: "Sequence",
    Child0: "TargetIsAlly",
    Child1: "GenericScoreTargetRandomlySequence"

};
window.defaultAIData.PanickedFallBackUnsafe = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "FindFriendlyFallbackDestination",
    Child2: "SelectAbility-StandardMove"

};
window.defaultAIData.GenericScamperRoot = {
    NodeType: "Selector",
    Child0: "CounterBeaglerushManeuver",
    Child1: "MoveStandardWithLoSUnsafe",
    Child2: "MoveStandardUnsafe",
    Child3: "SkipMove"

};
window.defaultAIData.ScamperRoot_Soldier = {
    NodeType: "Selector",
    Child0: "CounterBeaglerushManeuver",
    Child1: "MoveDefensiveWithLoSUnsafe",
    Child2: "MoveStandardUnsafe",
    Child3: "SkipMove"

};
window.defaultAIData.ScamperRoot_Flanker = {
    NodeType: "Selector",
    Child0: "CounterBeaglerushManeuver",
    Child1: "MoveFlankingUnsafe",
    Child2: "MoveStandardWithLoSUnsafe",
    Child3: "MoveStandardUnsafe",
    Child4: "SkipMove"

};
window.defaultAIData.ScamperRoot_NoCover = {
    NodeType: "Selector",
    Child0: "CounterBeaglerushManeuver",
    Child1: "MoveNoCoverUnsafe",
    Child2: "SkipMove"

};
window.defaultAIData.ScamperRoot_Overwatch = {
    NodeType: "Selector",
    Child0: "CounterBeaglerushManeuver",
    Child1: "OverwatchIfTargetAvailable",
    Child2: "MoveNoCoverUnsafe",
    Child3: "SkipMove"

};
window.defaultAIData.ScamperRoot_MeleeNoCover = {
    NodeType: "Selector",
    Child0: "CounterBeaglerushManeuver",
    Child1: "MoveMeleeFANATICUnsafe",
    Child2: "MoveNoCoverUnsafe",
    Child3: "SkipMove"

};
window.defaultAIData.CounterBeaglerushManeuver = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectFlankedEnemyTarget",
    Child2: "ShootTargetChanceOnScamper"

};
window.defaultAIData.SelectFlankedEnemyTarget = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "EvaluateFlankedEnemyTargets",
    Child2: "HasValidTarget-StandardShot"

};
window.defaultAIData.EvaluateFlankedEnemyTargets = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateFlankedEnemies"

};
window.defaultAIData.EvaluateFlankedEnemies = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "SSScoreFlankedEnemy",
    Child2: "UpdateBestTarget"

};
window.defaultAIData.SSScoreFlankedEnemy = {
    NodeType: "Successor",
    Child0: "ScoreFlankedEnemy"

};
window.defaultAIData["IsActiveTeam-eTeam_XCom"] = {
    NodeType: "Condition"

};
window.defaultAIData.NotActiveTeamXCom = {
    NodeType: "Inverter",
    Child0: "IsActiveTeam-eTeam_XCom"

};
window.defaultAIData.ScoreFlankedEnemy = {
    NodeType: "Sequence",
    Child0: "IsTargetScamperInstigator",
    Child1: "WasTargetPreviouslyConcealed",
    Child2: "NotActiveTeamXCom",
    Child3: "IsFlankingTarget",
    Child4: "TargetIsEnemy",
    Child5: "TargetNotMindControlled",
    Child6: "TargetNotBoundOrPanicked",
    Child7: "GenericTargetEvaluations"

};
window.defaultAIData.TargetNotMindControlled = {
    NodeType: "Inverter",
    Child0: "TargetAffectedByEffect-MindControl"

};
window.defaultAIData.TargetNotBoundOrPanicked = {
    NodeType: "Inverter",
    Child0: "IsLastResortTarget"

};
window.defaultAIData["TargetAffectedByEffect-MindControl"] = {
    NodeType: "Condition"

};
window.defaultAIData.IsTargetScamperInstigator = {
    NodeType: "Condition"

};
window.defaultAIData.WasTargetPreviouslyConcealed = {
    NodeType: "Condition"

};
window.defaultAIData.ShootTargetChanceOnScamper = {
    NodeType: "RandFilter",
    Child0: "SelectAbility-StandardShot",
    Param0: "50"

};
window.defaultAIData["AdventTrooper::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "AdvTrooper_RedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.AdvTrooper_RedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "AdvTrooper_RedAbilitySelector"

};
window.defaultAIData.AdvTrooper_RedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "AdventRedFirstAction",
    Child2: "AdventRedLastAction"

};
window.defaultAIData.AdventRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AdventRedFirstActionSelector"

};
window.defaultAIData.AdventRedFirstActionSelector = {
    NodeType: "Selector",
    Child0: "DoIfFlankedMove",
    Child1: "SelectMove_JobOrAggressive",
    Child2: "TryMoveThenGrenade",
    Child3: "TryShootOrReloadOrOverwatch",
    Child4: "HuntEnemyWithCover"

};
window.defaultAIData.AdventRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "AdventRedLastActionSelector"

};
window.defaultAIData.AdventRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryGrenade",
    Child1: "TryShootOrReloadOrOverwatch",
    Child2: "HuntEnemyWithCover",
    Child3: "SelectMove_JobOrAggressive"

};
window.defaultAIData["AdventCaptain::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "AdvCaptain_RedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.AdvCaptain_RedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "AdvCaptain_RedAbilitySelector"

};
window.defaultAIData.AdvCaptain_RedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "AdvCaptain_RedFirstAction",
    Child2: "AdvCaptain_RedLastAction"

};
window.defaultAIData.AdvCaptain_RedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AdvCaptain_RedFirstActionSelector"

};
window.defaultAIData.AdvCaptain_RedFirstActionSelector = {
    NodeType: "Selector",
    Child0: "DoIfFlankedMove",
    Child1: "TryMarkTargetOption",
    Child2: "SelectMove_JobOrDefensive",
    Child3: "AdvCaptainTryMoveThenGrenade",
    Child4: "TryShootOrReloadOrOverwatch",
    Child5: "HuntEnemyWithCover"

};
window.defaultAIData.AdvCaptain_RedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "AdvCaptain_RedLastActionSelector"

};
window.defaultAIData.AdvCaptain_RedLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryMarkTargetOption",
    Child1: "AdvCaptainTryGrenade",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "HuntEnemyWithCover",
    Child4: "SelectMove_JobOrDefensive"

};
window.defaultAIData.AdvCaptainTryMoveThenGrenade = {
    NodeType: "Sequence",
    Child0: "IsAdvCaptainQualifiedForGrenade",
    Child1: "TryMoveThenGrenade"

};
window.defaultAIData.AdvCaptainTryGrenade = {
    NodeType: "Sequence",
    Child0: "IsAdvCaptainQualifiedForGrenade",
    Child1: "TryGrenade"

};
window.defaultAIData.IsAdvCaptainQualifiedForGrenade = {
    NodeType: "Selector",
    Child0: "NotAdvCaptainM1",
    Child1: "IsDifficultyAboveNormal"

};
window.defaultAIData.NotAdvCaptainM1 = {
    NodeType: "Inverter",
    Child0: "TemplateNameIs-AdvCaptainM1"

};
window.defaultAIData["TemplateNameIs-AdvCaptainM1"] = {
    NodeType: "Condition"

};
window.defaultAIData["AdventStunLancer::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "AdventSL_RedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.AdventSL_RedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "AdventSL_RedAbilitySelector"

};
window.defaultAIData.AdventSL_RedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "AdventSLFirstAction",
    Child2: "AdventSLLastAction"

};
window.defaultAIData.AdventSLFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AdventSLFirstActionSelector"

};
window.defaultAIData.AdventSLFirstActionSelector = {
    NodeType: "Selector",
    Child0: "TryStunLance",
    Child1: "DoIfFlankedMove",
    Child2: "SelectMove_JobOrMelee",
    Child3: "TryMoveThenGrenade",
    Child4: "TryShootOrReloadOrOverwatch",
    Child5: "HuntEnemyWithCover"

};
window.defaultAIData.AdventSLLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "AdventSLLastActionSelector"

};
window.defaultAIData.AdventSLLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryStunLance",
    Child1: "TryGrenade",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "HuntEnemyWithCover",
    Child4: "SelectMove_JobOrMelee"

};
window.defaultAIData["AdventShieldBearer::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "AdvShieldBearer_RedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.AdvShieldBearer_RedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "AdvShieldBearer_RedAbilitySelector"

};
window.defaultAIData.AdvShieldBearer_RedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "ShieldBearerFirstAction",
    Child2: "ShieldBearerLastAction"

};
window.defaultAIData.ShieldBearerFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "ShieldBearerFirstActionSelector"

};
window.defaultAIData.ShieldBearerFirstActionSelector = {
    NodeType: "Selector",
    Child0: "TryMoveForEnergyShield",
    Child1: "TryEnergyShieldOnMultipleTargets",
    Child2: "DoIfFlankedMove",
    Child3: "SelectMove_JobOrDefensive",
    Child4: "HuntEnemyWithCover",
    Child5: "TryShootOrReloadOrOverwatch"

};
window.defaultAIData.TryMoveForEnergyShield = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-EnergyShield",
    Child2: "NotLastActionPoint",
    Child3: "MoveStandardIfFirstAbility-EnergyShield"

};
window.defaultAIData.ShieldBearerLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "ShieldBearerLastActionSelector"

};
window.defaultAIData.ShieldBearerLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryEnergyShieldOnAnyTarget",
    Child1: "TryShootOrReloadOrOverwatch",
    Child2: "HuntEnemyWithCover",
    Child3: "SelectMove_JobOrDefensive"

};
window.defaultAIData["AdventMEC::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "MecMk1Branch",
    Child1: "AdvMECMk2_Root"

};
window.defaultAIData.MecMk1Branch = {
    NodeType: "Sequence",
    Child0: "TemplateNameIs-AdvMEC_M1",
    Child1: "AdvMEC_Root"

};
window.defaultAIData["TemplateNameIs-AdvMEC_M1"] = {
    NodeType: "Condition"

};
window.defaultAIData.AdvMEC_Root = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "MECRedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.MECRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "MECRedAbilitySelector"

};
window.defaultAIData.MECRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "MECRedFirstAction",
    Child2: "MECRedLastAction"

};
window.defaultAIData.MECRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MECFirstActionSelector"

};
window.defaultAIData.MECFirstActionSelector = {
    NodeType: "Selector",
    Child0: "TryMoveThenMicroMissiles",
    Child1: "SelectNCMove_JobOrFanatic",
    Child2: "HuntEnemy",
    Child3: "TryShootOrReloadOrOverwatch"

};
window.defaultAIData.MECRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "MECRedLastActionSelector"

};
window.defaultAIData.MECRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryMicroMissiles",
    Child1: "ShootOrSuppressIfNoGoodShot",
    Child2: "HuntEnemy",
    Child3: "SelectNCMove_JobOrFanatic",
    Child4: "TryShootOrReloadOrOverwatch"

};
window.defaultAIData.AdvMECMk2_Root = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "MECMk2RedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.MECMk2RedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "MECMk2RedAbilitySelector"

};
window.defaultAIData.MECMk2RedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "MECMk2RedFirstAction",
    Child2: "MECMk2RedLastAction"

};
window.defaultAIData.MECMk2RedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MECMk2FirstActionSelector"

};
window.defaultAIData.MECMk2FirstActionSelector = {
    NodeType: "Selector",
    Child0: "TryMoveThenMicroMissilesMk2",
    Child1: "SelectNCMove_JobOrFanatic",
    Child2: "HuntEnemy",
    Child3: "TryShootOrReloadOrOverwatch"

};
window.defaultAIData.MECMk2RedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "MECMk2RedLastActionSelector"

};
window.defaultAIData.MECMk2RedLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryMicroMissilesMk2",
    Child1: "ShootOrSuppressIfNoGoodShot",
    Child2: "HuntEnemy",
    Child3: "SelectNCMove_JobOrFanatic",
    Child4: "TryShootOrReloadOrOverwatch"

};
window.defaultAIData["AdventPsiWitch::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "PsiWitchRedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.PsiWitchRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "PsiWitchRedAbilitySelector"

};
window.defaultAIData.PsiWitchRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "PsiWitchRedFirstAction",
    Child2: "PsiWitchRedLastAction"

};
window.defaultAIData.PsiWitchRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "PsiWitchRedFirstActionSelector"

};
window.defaultAIData.PsiWitchRedFirstActionSelector = {
    NodeType: "Selector",
    Child0: "TryMoveThenPsiMindControl",
    Child1: "TryMoveThenDimensionalRift",
    Child2: "TryMoveThenNullLance",
    Child3: "DoIfFlankedMove",
    Child4: "SelectMoveStandard",
    Child5: "PsiWitchAttackSequencer",
    Child6: "HuntEnemyWithCover",
    Child7: "TryShootOrReloadOrOverwatch"

};
window.defaultAIData.PsiWitchRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "PsiWitchRedLastActionSelector"

};
window.defaultAIData.PsiWitchRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "PsiWitchAttackSequencer",
    Child1: "SelectMoveStandard",
    Child2: "HuntEnemyWithCover"

};
window.defaultAIData.PsiWitchAttackSequencer = {
    NodeType: "Selector",
    Child0: "TryPsiMindControl",
    Child1: "TryDimensionalRift",
    Child2: "TryNullLance",
    Child3: "TryShootOrReloadOrOverwatch"

};
window.defaultAIData["AdventTurret::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "Turret_RedAlert",
    Child1: "SkipMove",
    Child1: "TryOverwatch"

};
window.defaultAIData.Turret_RedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "TurretRedAbilitySelector"

};
window.defaultAIData.TurretRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "TurretRedFirstActionSelector",
    Child2: "ConsiderTakingOverwatch"

};
window.defaultAIData.TurretRedFirstActionSelector = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "Turret_TryShootOrReload"

};
window.defaultAIData.Turret_TryShootOrReload = {
    NodeType: "Selector",
    Child0: "Turret_ShootIfAvailable",
    Child1: "NeedsReload"

};
window.defaultAIData.Turret_ShootIfAvailable = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "Turret_SelectTargetForStandardShot",
    Child2: "SelectAbility-StandardShot"

};
window.defaultAIData.Turret_SelectTargetForStandardShot = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "TurretSelectBestTarget",
    Child2: "HasValidTarget-StandardShot"

};
window.defaultAIData.TurretSelectBestTarget = {
    NodeType: "RepeatUntilFail",
    Child0: "TurretEvaluateTarget"

};
window.defaultAIData.TurretEvaluateTarget = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreHitChance",
    Child2: "GenericScoreTargetRandomly",
    Child3: "TargetScoreInvalidateCivilians",
    Child4: "TargetScoreInvalidatePriorityObject",
    Child5: "UpdateBestTarget"

};
window.defaultAIData.TargetScoreInvalidatePriorityObject = {
    NodeType: "Successor",
    Child0: "ScoreTargetOutIfPriorityObject"

};
window.defaultAIData.ScoreTargetOutIfPriorityObject = {
    NodeType: "Sequence",
    Child0: "TargetIsPriorityObject",
    Child1: "AddToTargetScore_-1000"

};
window.defaultAIData["Andromedon::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "AndromedonRobotBranch",
    Child1: "AndromedonRoot"

};
window.defaultAIData.AndromedonRobotBranch = {
    NodeType: "Sequence",
    Child0: "TemplateNameIs-AndromedonRobot",
    Child1: "AndromedonRobotRoot"

};
window.defaultAIData["TemplateNameIs-AndromedonRobot"] = {
    NodeType: "Condition"

};
window.defaultAIData.AndromedonRoot = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "AndromedonRedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.AndromedonRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "AndromedonRedAbilitySelector"

};
window.defaultAIData.AndromedonRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "AndromedonRedFirstAction",
    Child2: "AndromedonRedLastAction"

};
window.defaultAIData.AndromedonRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AndromedonRedFirstActionSelector"

};
window.defaultAIData.AndromedonRedFirstActionSelector = {
    NodeType: "Selector",
    Child0: "TryStandardMelee",
    Child1: "TryMoveThenAcidBlob",
    Child2: "DoIfFlankedMove",
    Child3: "SelectMoveStandard",
    Child4: "TryShootOrReloadOrOverwatch",
    Child5: "HuntEnemyWithCover"

};
window.defaultAIData.AndromedonRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "AndromedonRedLastActionSelector"

};
window.defaultAIData.AndromedonRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryStandardMelee",
    Child1: "TryAcidBlob",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "HuntEnemyWithCover",
    Child4: "SelectMoveStandard"

};
window.defaultAIData["AndromedonRobot::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "GenericEnemyMeleeRootFANATIC"

};
window.defaultAIData.AndromedonRobotRoot = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "GenericEnemyMeleeRootFANATIC"

};
window.defaultAIData["Archon::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "ArchonRedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.ArchonRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "ArchonRedAbilitySelector"

};
window.defaultAIData.ArchonRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "ArchonRedFirstAction",
    Child2: "ArchonRedLastAction"

};
window.defaultAIData.ArchonRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "ArchonFirstActionSelector"

};
window.defaultAIData.ArchonFirstActionSelector = {
    NodeType: "Selector",
    Child0: "TryFrenziedMoveAndAttack",
    Child1: "TryMoveThenBlazingPinions",
    Child2: "TryStandardMelee",
    Child3: "DoIfFlankedMove",
    Child4: "SelectMoveStandard",
    Child5: "TryShootOrReloadOrOverwatch",
    Child6: "HuntEnemyWithCover"

};
window.defaultAIData.TryMoveThenBlazingPinions = {
    NodeType: "Selector",
    Child0: "TryMoveForBlazingPinions",
    Child1: "TryBlazingPinions"

};
window.defaultAIData.TryMoveForBlazingPinions = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-BlazingPinionsStage1",
    Child2: "FindPotentialAoETargets-BlazingPinionsBasicProfile",
    Child3: "MoveStandardIfFirstAbility-BlazingPinions"

};
window.defaultAIData.ArchonRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "ArchonRedLastActionSelector"

};
window.defaultAIData.ArchonRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryFrenziedAttack",
    Child1: "TryBlazingPinions",
    Child2: "TryStandardMelee",
    Child3: "TryShootOrReloadOrOverwatch",
    Child4: "HuntEnemy",
    Child5: "SelectMoveStandard"

};
window.defaultAIData.TryFrenziedAttack = {
    NodeType: "Sequence",
    Child0: "AffectedByEffect-FrenzyEffect",
    Child1: "TryStandardMelee"

};
window.defaultAIData.TryFrenziedMoveAndAttack = {
    NodeType: "Sequence",
    Child0: "AffectedByEffect-FrenzyEffect",
    Child1: "TryAttackOrDashAndAttack"

};
window.defaultAIData.TryAttackOrDashAndAttack = {
    NodeType: "Selector",
    Child0: "TryStandardMelee",
    Child1: "TryStandardMeleeDashFANATICUnsafe"

};
window.defaultAIData["Berserker::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "TryJobUnsafe",
    Child1: "GenericGreenMovement",
    Child2: "BerserkerMeleeRedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.BerserkerMeleeRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "Berserker_RedAbilitySelector"

};
window.defaultAIData.Berserker_RedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "BerserkerRedFirstAction",
    Child2: "BerserkerRedLastAction"
        // 
};
window.defaultAIData.BerserkerRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "BerserkerRedFirstActionSelector"

};
window.defaultAIData.BerserkerRedFirstActionSelector = {
    NodeType: "Selector",
    Child0: "TryBerserkerMelee",
    Child1: "MoveMeleeDashFANATICUnsafe",
    Child2: "HuntEnemyUnsafe"

};
window.defaultAIData.BerserkerRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "BerserkerRedLastActionSelector"

};
window.defaultAIData.BerserkerRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryBerserkerMelee",
    Child1: "MoveMeleeDashFANATICUnsafe",
    Child2: "HuntEnemyUnsafe"

};
window.defaultAIData["Chryssalid::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "ChryssalidCocoonBranch",
    Child1: "ChryssalidRoot"

};
window.defaultAIData.ChryssalidCocoonBranch = {
    NodeType: "Sequence",
    Child0: "IsChryssalidCocoon",
    Child1: "CocoonRoot"

};
window.defaultAIData.IsChryssalidCocoon = {
    NodeType: "Selector",
    Child0: "TemplateNameIs-ChryssalidCocoon",
    Child1: "TemplateNameIs-ChryssalidCocoonHuman"

};
window.defaultAIData["TemplateNameIs-ChryssalidCocoon"] = {
    NodeType: "Condition"

};
window.defaultAIData["TemplateNameIs-ChryssalidCocoonHuman"] = {
    NodeType: "Condition"

};
window.defaultAIData.ChryssalidRoot = {
    NodeType: "Selector",
    Child0: "ChryssalidHeatSeekProtocol",
    Child1: "SkipIfBurrowed",
    Child2: "TryJobTerrorist",
    Child3: "TryJobChargerUnsafe",
    Child4: "ChryssalidGreenAlert",
    Child5: "ChryssalidRedAlert",
    Child6: "ChryssalidYellowAlert"

};
window.defaultAIData.ChryssalidRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "ChryssalidRedAbilitySelector"

};
window.defaultAIData.ChryssalidRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "TryJobUnsafe",
    Child1: "MimicBeaconBehavior",
    Child2: "ChryssalidRedActionSelector"

};
window.defaultAIData.ChryssalidRedActionSelector = {
    NodeType: "Selector",
    Child0: "TryMelee66",
    Child1: "TryRunAndBurrow33"

};
window.defaultAIData.TryMelee66 = {
    NodeType: "Sequence",
    Child0: "SSSetMeleeValueIfUnset",
    Child1: "CheckMeleeUnder67",
    Child2: "ChryssalidMeleeSelector"

};
window.defaultAIData.SSSetMeleeValueIfUnset = {
    NodeType: "Successor",
    Child0: "SetMeleeValueIfUnset"

};
window.defaultAIData.SetMeleeValueIfUnset = {
    NodeType: "Sequence",
    Child0: "MeleeValueUnset",
    Child1: "SetMeleeValue"

};
window.defaultAIData.MeleeValueUnset = {
    NodeType: "Inverter",
    Child0: "HasUnitValue-MeleeChance"

};
window.defaultAIData["HasUnitValue-MeleeChance"] = {
    NodeType: "Condition"

};
window.defaultAIData.SetMeleeValue = {
    NodeType: "Selector",
    Child0: "DisableBurrowChanceIfIneligible",
    Child1: "SetRandUnitValue-MeleeChance"

};
window.defaultAIData.DisableBurrowChanceIfIneligible = {
    NodeType: "Sequence",
    Child0: "BurrowOptionNotAvailable",
    Child1: "SetUnitValue-MeleeChance"

};
window.defaultAIData.BurrowOptionNotAvailable = {
    NodeType: "Selector",
    Child0: "IsAtEndOfAxisOfPlay",
    Child1: "HasXComUnitsCloserToObjective"

};
window.defaultAIData.HasXComUnitsCloserToObjective = {
    NodeType: "Condition",
    Param0: "10"
        //  True when any XCom unit is more than Param0 meters closer to objective.
};
window.defaultAIData.IsAtEndOfAxisOfPlay = {
    NodeType: "StatCondition",
    Param0: "ObjectiveDistance",
    Param1: "<: ",
    Param2: "27"
        // Check if within sight range of objective.  If so", do not bother with burrowing.
};
window.defaultAIData["SetRandUnitValue-MeleeChance"] = {
    NodeType: "Action",
    Param0: "100"
        //  Random chance to run away and burrow or fight. Param1 DNE = Set once per mission.
};
window.defaultAIData["SetUnitValue-MeleeChance"] = {
    NodeType: "Action",
    Param0: "1"
        // Disable chance to burrow again.
};
window.defaultAIData.TryRunAndBurrow33 = {
    NodeType: "Sequence",
    Child0: "CheckMeleeOver67",
    Child1: "ChryssalidRunAndBurrowSelector"

};
window.defaultAIData.CheckMeleeUnder67 = {
    NodeType: "StatCondition",
    Param0: "UnitValue-MeleeChance",
    Param1: "<",
    Param2: "67"

};
window.defaultAIData.CheckMeleeOver67 = {
    NodeType: "StatCondition",
    Param0: "UnitValue-MeleeChance",
    Param1: ">: ",
    Param2: "67"

};
window.defaultAIData.ChryssalidRunAndBurrowSelector = {
    NodeType: "Selector",
    Child0: "BurrowIfOutOfView",
    Child1: "TryDashMoveForBurrow"

};
window.defaultAIData.BurrowIfOutOfView = {
    NodeType: "Sequence",
    Child0: "NoVisibleEnemies",
    Child1: "TryBurrow"

};
window.defaultAIData.ChryssalidMeleeSelector = {
    NodeType: "Selector",
    Child0: "TryMeleeOnCivilian",
    Child1: "TryStandardMeleeDashFANATICUnsafe",
    Child2: "HuntEnemyUnsafe"

};
window.defaultAIData.TryMeleeOnCivilian = {
    NodeType: "Sequence",
    Child0: "NumKilledCiviliansIsLessThanTurnCount",
    Child1: "HasVisibleCivilianInMoveRange",
    Child2: "Rand50AttackCivilian"

};
window.defaultAIData.HasVisibleCivilianInMoveRange = {
    NodeType: "Condition"
        //  Visible to both players", in move range to unit.
};
window.defaultAIData.Rand50AttackCivilian = {
    NodeType: "RandFilter",
    Child0: "MeleeAttackNearestCivilian",
    Param0: "50"

};
window.defaultAIData.MeleeAttackNearestCivilian = {
    NodeType: "Sequence",
    Child0: "SelectClosestCivilianInRange",
    Child1: "SelectAbility-StandardMelee"

};
window.defaultAIData.SelectClosestCivilianInRange = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardMelee",
    Child1: "SelectClosestCivilianForStandardMelee",
    Child2: "HasValidTarget-StandardMelee"

};
window.defaultAIData.SelectClosestCivilianForStandardMelee = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateMeleeTargetForClosestCivilian"

};
window.defaultAIData.EvaluateMeleeTargetForClosestCivilian = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreClosestCivilianIfInRange",
    Child2: "UpdateBestTarget"

};
window.defaultAIData.TargetScoreClosestCivilianIfInRange = {
    NodeType: "Successor",
    Child0: "ScoreClosestCivilianIfInRange"

};
window.defaultAIData.ScoreClosestCivilianIfInRange = {
    NodeType: "Sequence",
    Child0: "TargetIsCivilian",
    Child1: "TargetIsNotAlien",
    Child2: "IsTargetInMovementRange-StandardMelee",
    Child3: "TargetScoreByScaledDistance-1",
    Child4: "AddToTargetScore_100"

};
window.defaultAIData.ChryssalidYellowAlert = {
    NodeType: "Sequence",
    Child0: "IsYellowAlert",
    Child1: "ChryssalidYellowAbilitySelector"

};
window.defaultAIData.ChryssalidYellowAbilitySelector = {
    NodeType: "Selector",
    Child0: "ChryssalidHeatSeekProtocol",
    Child1: "ChryssalidUnburrowedProtocol",
    Child2: "TryJobUnsafe",
    Child3: "GenericAlertHandler",
    Child4: "SkipMove"

};
window.defaultAIData.ChryssalidHeatSeekProtocol = {
    NodeType: "Sequence",
    Child0: "ChryssalidShouldTriggerHeatSeek",
    Child1: "AlertAndUnburrowOrHeatSeek"

};
window.defaultAIData.ChryssalidShouldTriggerHeatSeek = {
    NodeType: "Selector",
    Child0: "BurrowedAndEncounterBandPassed",
    Child1: "BurrowedandLastGroupRemaining",
    Child2: "IsUnitTypeVisible-MimicBeacon"

};
window.defaultAIData.HasEncounterBandBeenPassed = {
    NodeType: "Condition"

};
window.defaultAIData.BurrowedAndEncounterBandPassed = {
    NodeType: "Sequence",
    Child0: "AffectedByEffect-Burrowed",
    Child1: "HasEncounterBandBeenPassed"

};
window.defaultAIData.BurrowedandLastGroupRemaining = {
    NodeType: "Sequence",
    Child0: "AffectedByEffect-Burrowed",
    Child1: "AreAllRemainingAlliesUnderEffect-Burrowed"

};
window.defaultAIData["AreAllRemainingAlliesUnderEffect-Burrowed"] = {
    NodeType: "Condition"

};
window.defaultAIData.AlertAndUnburrowOrHeatSeek = {
    NodeType: "Selector",
    Child0: "TryAlert",
    Child1: "TryUnburrow",
    Child2: "MimicBeaconBehavior",
    Child3: "SelectHeatSeekMove",
    Child4: "GenericAlertHandler"

};
window.defaultAIData.TryAlert = {
    NodeType: "Sequence",
    Child0: "IsGreenAlert",
    Child1: "DisableGroupMove",
    Child2: "SelectAnyYellowAlertTarget",
    Child3: "SelectAbility-YellowAlert"

};
window.defaultAIData.SelectAnyYellowAlertTarget = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-YellowAlert",
    Child1: "GenericSelectTargetRandomly",
    Child2: "HasValidTarget-YellowAlert"

};
window.defaultAIData["SelectAbility-YellowAlert"] = {
    NodeType: "Action"

};
window.defaultAIData["SetTargetStack-YellowAlert"] = {
    NodeType: "Action"

};
window.defaultAIData["HasValidTarget-YellowAlert"] = {
    NodeType: "Condition"

};
window.defaultAIData.ChryssalidGreenAlert = {
    NodeType: "Sequence",
    Child0: "ShouldPatrol",
    Child1: "ChryssalidGreenAbilitySelector"

};
window.defaultAIData.ChryssalidGreenAbilitySelector = {
    NodeType: "Selector",
    Child0: "ChryssalidUnburrowedProtocol",
    Child1: "TryJobUnsafe",
    Child2: "GenericGreenMovement"

};
window.defaultAIData.ChryssalidUnburrowedProtocol = {
    NodeType: "Sequence",
    Child0: "IsUnburrowed",
    Child1: "GroupSize1",
    Child2: "ChryssalidMoveOrBurrow"

};
window.defaultAIData.ChryssalidMoveOrBurrow = {
    NodeType: "Selector",
    Child0: "MoveForBurrowIfFirstAction",
    Child1: "TryBurrowIfNotOnJob",
    Child2: "TryDashMoveForBurrow"

};
window.defaultAIData.MoveForBurrowIfFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "TryBurrowMovement"

};
window.defaultAIData.TryBurrowMovement = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "FindBurrowDestination",
    Child2: "DisableGroupMove",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.DisableGroupMove = {
    NodeType: "Action"

};
window.defaultAIData.TryDashMoveForBurrow = {
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "UseDashMovement",
    Child2: "TryBurrowMovement"

};
window.defaultAIData.FindBurrowDestination = {
    NodeType: "Selector",
    Child0: "FindLocalBurrowDestination",
    Child1: "FindClosestPointToAxisGround"

};
window.defaultAIData.FindLocalBurrowDestination = {
    NodeType: "Sequence",
    Child0: "SSRestrictToAxisLoSIfInRange",
    Child1: "RestrictFromAlliesWithEffect-Burrowed",
    Child2: "SSRestrictFromKnownEnemyLoS",
    Child3: "SetNoCoverMovement",
    Child4: "RestrictToGroundTiles",
    Child5: "FindRestrictedDestination-Burrow"

};
window.defaultAIData.SSRestrictToAxisLoSIfInRange = {
    NodeType: "Successor",
    Child0: "RestrictToAxisLoSIfInRange"

};
window.defaultAIData.SSRestrictFromKnownEnemyLoS = {
    NodeType: "Successor",
    Child0: "RestrictFromKnownEnemyLoS"

};
window.defaultAIData.RestrictToAxisLoSIfInRange = {
    NodeType: "Sequence",
    Child0: "IsInMovementRangeOfAxisOfPlay",
    Child1: "RestrictToAxisLoS"

};
window.defaultAIData.RestrictToAxisLoS = {
    NodeType: "Action"

};
window.defaultAIData.RestrictFromKnownEnemyLoS = {
    NodeType: "Action"

};
window.defaultAIData.RestrictToGroundTiles = {
    NodeType: "Action"

};
window.defaultAIData.FindClosestPointToAxisGround = {
    NodeType: "Action"

};
window.defaultAIData.IsInMovementRangeOfAxisOfPlay = {
    NodeType: "Condition"

};
window.defaultAIData["RestrictFromAlliesWithEffect-Burrowed"] = {
    NodeType: "Action",
    Param0: "10.0f"

};
window.defaultAIData.GroupSize1 = {
    NodeType: "StatCondition",
    Param0: "GroupSize",
    Param1: "<: ",
    Param2: "1"

};
window.defaultAIData.ChryssalidScamperRoot = {
    NodeType: "Selector",
    Child0: "SkipIfBurrowed",
    Child1: "MoveMeleeFANATICUnsafe",
    Child2: "SelectHeatSeekMove"

};
window.defaultAIData.SkipIfBurrowed = {
    NodeType: "Sequence",
    Child0: "AffectedByEffect-Burrowed",
    Child1: "SkipMove"

};
window.defaultAIData.IsUnburrowed = {
    NodeType: "Inverter",
    Child0: "AffectedByEffect-Burrowed"

};
window.defaultAIData.CocoonRoot = {
    NodeType: "Selector",
    Child0: "TrySpawnChryssalid",
    Child1: "SkipMove"

};
window.defaultAIData.TryMoveThenPsiBomb = {
    NodeType: "Selector",
    Child0: "TryTeleportForPsiBomb",
    Child1: "TryMoveForPsiBomb",
    Child2: "TryPsiBomb"

};
window.defaultAIData.TryTeleportForPsiBomb = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-PsiBombStage1",
    Child1: "NotLastActionPoint",
    Child2: "FindPotentialAoETargets-PsiBombProfile",
    Child3: "TeleportForPsiBombTarget"

};
window.defaultAIData.TryMoveForPsiBomb = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-PsiBombStage1",
    Child2: "NotLastActionPoint",
    Child3: "FindPotentialAoETargets-PsiBombProfile",
    Child4: "MoveStandardIfFirstAbility-PsiBombStage1"

};
window.defaultAIData["Cyberus::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "CodexRedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.CodexRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "CodexRedAbilitySelector"

};
window.defaultAIData.CodexRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "CodexRedFirstAction",
    Child2: "CodexRedLastAction"

};
window.defaultAIData.CodexRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "CodexRedFirstActionSelector"

};
window.defaultAIData.CodexRedFirstActionSelector = {
    NodeType: "Selector",
    Child0: "TryMoveThenPsiBomb",
    Child1: "DoIfFlankedMove_Teleport",
    Child2: "TryTeleportDefensive",
    Child3: "SelectMove_JobOrFlanking",
    Child4: "TryShootOrReloadOrOverwatch",
    Child5: "HuntEnemyWithCover"

};
window.defaultAIData.CodexRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "CodexRedLastActionSelector"

};
window.defaultAIData.CodexRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryPsiBomb",
    Child1: "TryShootOrReloadOrOverwatch",
    Child2: "HuntEnemyWithCover",
    Child3: "SelectMove_JobOrFlanking"

};
window.defaultAIData.CodexSometimesPsiBomb = {
    NodeType: "RandFilter",
    Child0: "TryPsiBomb",
    Param0: "33"

};
window.defaultAIData.DoIfFlankedMove_Teleport = {
    NodeType: "Sequence",
    Child0: "CheckIfNeedToMove",
    Child1: "FlankedMoveSelector_Teleport"

};
window.defaultAIData.FlankedMoveSelector_Teleport = {
    NodeType: "Selector",
    Child0: "TryTeleportDefensive",
    Child1: "MoveAdvanceToCoverUnsafe",
    Child2: "FallBack"

};
window.defaultAIData["Cyberus::MoveTowardMimicBeacon"] = {
    NodeType: "Selector",
    Child0: "TryTeleportTowardMimicBeacon",
    Child1: "TryStandardMoveTowardMimicBeacon"

};
window.defaultAIData.TryTeleportTowardMimicBeacon = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Teleport",
    Child1: "UseDashMovement",
    Child2: "FindDestinationTowardMimicBeacon",
    Child3: "SelectAbility-Teleport"

};
window.defaultAIData["Gatekeeper::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "GateKeeperRedAlert",
    Child3: "GateKeeperNoEnemySightedMove"

};
window.defaultAIData.GateKeeperRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "GateKeeperRedAbilitySelector"

};
window.defaultAIData.GateKeeperRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "GateKeeperRedFirstAction",
    Child2: "GateKeeperRedLastAction"

};
window.defaultAIData.GateKeeperRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "GateKeeperRedFirstActionSelector"

};
window.defaultAIData.GateKeeperRedFirstActionSelector = {
    NodeType: "Selector",
    Child0: "TryMoveThenAnimaInversionCorpse",
    Child1: "TryMoveThenAnimaInversionMixed",
    Child2: "TryAnimaConsumeOnEnemy",
    Child3: "TryAnimaConsumeOnAlly",
    Child4: "MoveNoCover",
    Child5: "ShootIfAvailable",
    Child6: "HuntEnemy"

};
window.defaultAIData.GateKeeperRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "GateKeeperRedLastActionSelector"

};
window.defaultAIData.GateKeeperRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryAnimaInversionCorpses",
    Child1: "TryAnimaInversionMixed",
    Child2: "TryAnimaConsumeOnEnemy",
    Child3: "TryAnimaConsumeOnAlly",
    Child4: "GateKeeperOpenOrClose",
    Child5: "TryShootOrReloadOrOverwatch",
    Child6: "MoveNoCover",
    Child7: "HuntEnemy"

};
window.defaultAIData.GateKeeperNoEnemySightedMove = {
    NodeType: "Selector",
    Child0: "TryAnimaInversionCorpses",
    Child1: "TryAnimaInversionMixed",
    Child2: "TryGatekeeperClose",
    Child3: "GenericAlertHandler",
    Child4: "GenericGreenMovement"

};
window.defaultAIData.GateKeeperOpenOrClose = {
    NodeType: "Selector",
    Child0: "CloseIfInObviousDanger",
    Child1: "DoIfFlankedMove",
    Child2: "GateKeeperCheckOpen"

};
window.defaultAIData.CloseIfInObviousDanger = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-GatekeeperClose",
    Child1: "CheckIfInDanger",
    Child2: "TryGatekeeperClose"

};
window.defaultAIData.GateKeeperCheckOpen = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-GatekeeperOpen",
    Child1: "NoTargetsAvailable",
    Child2: "TryGatekeeperOpen"
        //  open if at high life
};
window.defaultAIData["Muton::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "MutonRedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.MutonRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "MutonRedAbilitySelector"

};
window.defaultAIData.MutonRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "MutonRedFirstAction",
    Child2: "MutonRedLastAction"

};
window.defaultAIData.MutonRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MutonRedFirstActionSelector"

};
window.defaultAIData.MutonRedFirstActionSelector = {
    NodeType: "Selector",
    Child0: "TryBayonet",
    Child1: "TryMoveThenGrenade",
    Child2: "TryMoveToSuppressClosest",
    Child3: "TryTwoTurnAttackSupportIfSafe",
    Child4: "SelectMoveProfileByJob",
    Child5: "TryShootOrReloadOrOverwatch",
    Child6: "HuntEnemyWithCover"

};
window.defaultAIData.MutonRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "MutonRedLastActionSelector"

};
window.defaultAIData.MutonRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryBayonet",
    Child1: "TryGrenade",
    Child2: "TrySuppressClosest",
    Child3: "TryShootOrReloadOrOverwatch",
    Child4: "HuntEnemyWithCover",
    Child5: "SelectMove_JobOrAggressive"

};
window.defaultAIData.TrySuppressClosest = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Suppression",
    Child1: "CheckShouldSuppressVar",
    Child2: "SelectTargetForSuppression",
    Child3: "SelectAbility-Suppression"

};
window.defaultAIData.SelectTargetForSuppression = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-Suppression",
    Child1: "SelectBestSuppressionTarget",
    Child2: "HasValidTarget-Suppression"

};
window.defaultAIData.TryMoveToSuppressClosest = {
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-Suppression",
    Child2: "CheckShouldSuppressVar",
    Child3: "SelectClosestPotentialSuppressionTarget",
    Child4: "MoveStandardIfFirstAbility-Suppression"

};
window.defaultAIData.CheckShouldSuppressVar = {
    NodeType: "Sequence",
    Child0: "InitSetSuppressVar",
    Child1: "ShouldSuppress"

};
window.defaultAIData.ShouldSuppress = {
    NodeType: "StatCondition",
    Param0: "BTVar",
    Param1: "!: ",
    Param2: "0",
    Param3: "ShouldSuppress"

};
window.defaultAIData.InitSetSuppressVar = {
    NodeType: "Selector",
    Child0: "HasBTVar-ShouldSuppress",
    Child1: "UpdateShouldSuppressVar"

};
window.defaultAIData["HasBTVar-ShouldSuppress"] = {
    NodeType: "Condition"

};
window.defaultAIData.UpdateShouldSuppressVar = {
    NodeType: "Selector",
    Child0: "TrySetShouldSuppressTrue",
    Child1: "SetShouldSuppressFalse"

};
window.defaultAIData.TrySetShouldSuppressTrue = {
    NodeType: "Sequence",
    Child0: "AnyAlliesVisible",
    Child1: "RollForSuppressionPerVisibleAlly",
    Child2: "SetShouldSuppressTrue"

};
window.defaultAIData.SetShouldSuppressTrue = {
    NodeType: "Action",
    Param0: "SetBTVar",
    Param1: "ShouldSuppress",
    Param2: "1"

};
window.defaultAIData.SetShouldSuppressFalse = {
    NodeType: "Action",
    Param0: "SetBTVar",
    Param1: "ShouldSuppress",
    Param2: "0"

};
window.defaultAIData.RollForSuppressionPerVisibleAlly = {
    NodeType: "Condition",
    Param0: "10"
        //  Param0: "Percent chance per visible ally to succeed.
};
window.defaultAIData["PsiZombie::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "GenericEnemyMeleeRootFANATIC"

};
window.defaultAIData["Sectoid::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "SectoidRedAlert",
    Child3: "SectoidNoEnemySightedMove"

};
window.defaultAIData.SectoidRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "SectoidRedAbilitySelector"

};
window.defaultAIData.SectoidRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "SectoidRedFirstAction",
    Child2: "SectoidRedLastAction"

};
window.defaultAIData.SectoidRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "SectoidRedFirstActionSelector"

};
window.defaultAIData.SectoidRedFirstActionSelector = {
    NodeType: "Selector",
    Child0: "DoIfFlankedMove",
    Child1: "SelectMove_JobOrDefensive",
    Child2: "TryPsiReanimationOrMindSpinOption",
    Child3: "TryShootOrReloadOrOverwatch",
    Child4: "HuntEnemyWithCover"

};
window.defaultAIData.SectoidRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "SectoidRedLastActionSelector"

};
window.defaultAIData.SectoidRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "DoIfFlankedMove",
    Child1: "TryPsiReanimationOrMindSpinOption",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "HuntEnemyWithCover",
    Child4: "SelectMove_JobOrDefensive"

};
window.defaultAIData.TryPsiReanimationOrMindSpinOption = {
    NodeType: "RandSelector",
    Child0: "TryPsiReanimation",
    Param0: "66",
    Child1: "TryMindSpinOption",
    Param1: "34"

};
window.defaultAIData.TryMindSpinOption = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-MindSpin",
    Child1: "SelectTargetForMindSpin",
    Child2: "SelectAbility-MindSpin"

};
window.defaultAIData.SectoidNoEnemySightedMove = {
    NodeType: "Selector",
    Child0: "GenericOrangeMovement",
    Child1: "SectoidYellowAlert",
    Child2: "GenericGreenMovement"

};
window.defaultAIData.SectoidYellowAlert = {
    NodeType: "Sequence",
    Child0: "IsYellowAlert",
    Child1: "SectoidYellowAbilitySelector"

};
window.defaultAIData.SectoidYellowAbilitySelector = {
    NodeType: "Selector",
    Child0: "TryPsiReanimation",
    Child1: "GenericAlertHandler"

};
window.defaultAIData["Viper::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "ViperRedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.ViperRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "ViperRedAbilitySelector"

};
window.defaultAIData.ViperRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "ViperRedFirstAction",
    Child2: "ViperRedLastAction"

};
window.defaultAIData.ViperRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "ViperRedFirstActionSelector"

};
window.defaultAIData.ViperRedFirstActionSelector = {
    NodeType: "Selector",
    Child0: "ConsiderTonguePullPriorityOrMelee",
    Child1: "TryGetOverHere",
    Child2: "TryMoveThenPoisonSpit",
    Child3: "TryMoveThenPoisonSpitSingle",
    Child4: "SelectMoveStandard",
    Child5: "TryShootOrReloadOrOverwatch",
    Child6: "HuntEnemyWithCover"

};
window.defaultAIData.ViperRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "ViperRedLastActionSelector"

};
window.defaultAIData.ViperRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "TryStandardMelee",
    Child1: "TryPoisonSpit",
    Child2: "TryGetOverHere",
    Child3: "TryPoisonSpitSingle",
    Child4: "TryShootOrReloadOrOverwatch",
    Child5: "DoIfFlankedMove",
    Child6: "HuntEnemyWithCover",
    Child7: "SelectMoveStandard"

};
window.defaultAIData["Viper::MoveTowardMimicBeacon"] = {
    NodeType: "Selector",
    Child0: "RandTryGetOverHereOnMimicBeacon",
    Child1: "TryMeleeMoveTowardMimicBeacon",
    Child2: "TryStandardMoveTowardMimicBeacon"

};
window.defaultAIData.RandTryGetOverHereOnMimicBeacon = {
    NodeType: "RandFilter",
    Child0: "TryGetOverHereOnMimicBeacon",
    Param0: "50"

};
window.defaultAIData.TryGetOverHereOnMimicBeacon = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-GetOverHere",
    Child1: "SelectMimicBeaconForGetOverHere",
    Child2: "SelectAbility-GetOverHere"

};
window.defaultAIData.SelectMimicBeaconForGetOverHere = {
    NodeType: "Sequence",
    Child0: "SetTargetStack-GetOverHere",
    Child1: "SelectMimicBeaconTarget",
    Child2: "HasValidTarget-GetOverHere"

};
window.defaultAIData.ConsiderTonguePullPriorityOrMelee = {
    NodeType: "Sequence",
    Child0: "TryStandardMelee",
    Child1: "SS_ConsiderTonguePullOverMove"

};
window.defaultAIData.SS_ConsiderTonguePullOverMove = {
    NodeType: "Successor",
    Child0: "ConsiderTonguePullOverMove"

};
window.defaultAIData.ConsiderTonguePullOverMove = {
    NodeType: "Sequence",
    Child0: "IsSelectedAbility-StandardMove",
    Child1: "IsAbilityAvailable-GetOverHere",
    Child2: "SetPotentialTargetAsCurrentTarget",
    Child3: "ShouldUseTonguePullOnTarget",
    Child4: "SelectAbility-GetOverHere"

};
window.defaultAIData.SetPotentialTargetAsCurrentTarget = {
    NodeType: "Action"

};
window.defaultAIData.ShouldUseTonguePullOnTarget = {
    NodeType: "Sequence",
    Child0: "IsValidTonguePullTarget",
    Child1: "TargetDistanceGreaterThan4Tiles",
    Child2: "TonguePullHitChance50",
    Child3: "SetTargetPotential-GetOverHere"

};
window.defaultAIData.TargetDistanceGreaterThan4Tiles = {
    NodeType: "StatCondition",
    Param0: "PotentialTargetDistance",
    Param1: ">",
    Param2: "6"
        //  6m = 4 tiles
};
window.defaultAIData.TonguePullHitChance50 = {
    NodeType: "StatCondition",
    Param0: "PotentialHitChance-GetOverHere",
    Param1: ">: ",
    Param2: "50"

};
window.defaultAIData["IsSelectedAbility-StandardMove"] = {
    NodeType: "Condition"

};
window.defaultAIData["SetTargetPotential-GetOverHere"] = {
    NodeType: "Action"
        //  Set target of 'Potential' to the target of ability 'GetOverHere'.
};
window.defaultAIData["Viper::CustomMeleeTargetScore"] = {
    NodeType: "Sequence",
    Child0: "TargetNotValidForBind",
    Child1: "AddToTargetScore_-1000"
        // Overwrite option for melee abilities that are restricted.
};
window.defaultAIData.TargetNotValidForBind = {
    NodeType: "Selector",
    Child0: "TargetIsAlien",
    Child1: "TargetIsRobotic"

};
window.defaultAIData["Faceless::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "TryJobUnsafe",
    Child1: "GenericGreenMovement",
    Child2: "FacelessHeatSeekProtocol",
    Child3: "FacelessRedAlert",
    Child4: "GenericAlertHandler"

};
window.defaultAIData.FacelessRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "FacelessRedAbilitySelector"

};
window.defaultAIData.FacelessRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "FacelessRedFirstAction",
    Child2: "FacelessRedLastAction"

};
window.defaultAIData.FacelessRedFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "FacelessFirstActionSelector"
        // 
};
window.defaultAIData.FacelessFirstActionSelector = {
    NodeType: "Selector",
    Child0: "TryScythingClaws",
    Child1: "MoveMeleeFANATICUnsafe",
    Child2: "HuntEnemyUnsafe"

};
window.defaultAIData.FacelessRedLastAction = {
    NodeType: "Selector",
    Child0: "TryScythingClaws",
    Child1: "MoveMeleeFANATICUnsafe",
    Child2: "HuntEnemyUnsafe"

};
window.defaultAIData["Faceless::AttackMimicBeacon"] = {
    NodeType: "Sequence",
    Child0: "TryScythingClaws"

};
window.defaultAIData.FacelessHeatSeekProtocol = {
    NodeType: "Sequence",
    Child0: "FacelessShouldTriggerHeatSeek",
    Child1: "SelectHeatSeekMove"

};
window.defaultAIData.FacelessShouldTriggerHeatSeek = {
    NodeType: "Selector",
    Child0: "NoVisibleEnemies"

};
window.defaultAIData["Sectopod::CharacterRoot"] = {
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "SectopodRedAlert",
    Child3: "GenericAlertHandler"

};
window.defaultAIData.SectopodRedAlert = {
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "SectopodRedAbilitySelector"

};
window.defaultAIData.SectopodRedAbilitySelector = {
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "SectopodRedFirstAction",
    Child2: "SectopodRedSecondAction",
    Child3: "SectopodRedLastAction"

};
window.defaultAIData.SectopodRedFirstAction = {
    NodeType: "Sequence",
    Child0: "HasThreeActionPoints",
    Child1: "SectopodFirstActionSelector"

};
window.defaultAIData.SectopodFirstActionSelector = {
    NodeType: "Selector",
    Child0: "SectopodCannonCharging",
    Child1: "TryStandUp",
    Child2: "TryLightningField",
    Child3: "TryFirstMoveTowardVisibleEnemies50",
    Child4: "ShootIfAvailable",
    Child5: "TryWrathCannonS166",
    Child6: "TryMoveForLightningField",
    Child7: "MoveNoCover",
    Child8: "TryShootOrReloadOrOverwatch",
    Child9: "HuntEnemy"

};
window.defaultAIData.SectopodRedSecondAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "SectopodSecondActionSelector"

};
window.defaultAIData.SectopodSecondActionSelector = {
    NodeType: "Selector",
    Child0: "SectopodCannonCharging",
    Child1: "TryStandUp",
    Child2: "TryLightningField",
    Child3: "TryMoveTowardVisibleEnemies50",
    Child4: "TryWrathCannonS166",
    Child5: "TryMoveForLightningField",
    Child6: "MoveNoCoverIfNotMoved",
    Child7: "TryShootOrReloadOrOverwatch",
    Child8: "HuntEnemy"

};
window.defaultAIData.SectopodRedLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "SectopodRedLastActionSelector"

};
window.defaultAIData.SectopodRedLastActionSelector = {
    NodeType: "Selector",
    Child0: "SectopodCannonCharging",
    Child1: "TryWrathCannonS1",
    Child2: "TryLightningField",
    Child3: "TryShootOrReloadOrOverwatch",
    Child4: "HuntEnemy"

};
window.defaultAIData.MoveNoCoverIfNotMoved = {
    NodeType: "Sequence",
    Child0: "DidntJustMove",
    Child1: "MoveNoCover"

};
window.defaultAIData.TryStandUp = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-SectopodHigh",
    Child1: "SelectAbility-SectopodHigh"

};
window.defaultAIData["IsAbilityAvailable-SectopodHigh"] = {
    NodeType: "Condition"

};
window.defaultAIData["SelectAbility-SectopodHigh"] = {
    NodeType: "Action"

};
window.defaultAIData.TryWrathCannonS166 = {
    NodeType: "RandFilter",
    Child0: "TryWrathCannon",
    Param0: "66"

};
window.defaultAIData.SectopodCannonCharging = {
    NodeType: "Sequence",
    Child0: "AffectedByEffect-WrathCannonStage1Effect",
    Child1: "SectopodChargingSelector"

};
window.defaultAIData.SectopodChargingSelector = {
    NodeType: "Selector",
    Child0: "TryShootOrReloadIfNotLastActionPoint",
    Child1: "Overwatch50IfLastAction",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "SkipMove"

};
window.defaultAIData.Overwatch50IfLastAction = {
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "RandOverwatch50"

};
window.defaultAIData.TryShootOrReloadIfNotLastActionPoint = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "TryShootOrReload"

};
window.defaultAIData["IsAbilityAvailable-SectopodLightningField"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsAbilityReady-SectopodLightningField"] = {
    NodeType: "Condition"

};
window.defaultAIData["SelectAbility-SectopodLightningField"] = {
    NodeType: "Action"

};
window.defaultAIData.TryLightningField = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-SectopodLightningField",
    Child1: "HasAnyLightningFieldTargets",
    Child2: "SelectAbility-SectopodLightningField"

};
window.defaultAIData.HasAnyLightningFieldTargets = {
    NodeType: "StatCondition",
    Param0: "AbilityTargetUnitCount-SectopodLightningField",
    Param1: ">",
    Param2: "1"
        //  >1 because it always sets itself as the primary target.
};
window.defaultAIData.TryFirstMoveTowardVisibleEnemies50 = {
    NodeType: "Sequence",
    Child0: "AnyLivingEnemyVisible",
    Child1: "TryMoveForLightningField50"

};
window.defaultAIData.TryMoveTowardVisibleEnemies50 = {
    NodeType: "Sequence",
    Child0: "AnyLivingEnemyVisible",
    Child1: "DidntJustMove",
    Child2: "TryMoveForLightningField50"

};
window.defaultAIData.TryMoveForLightningField50 = {
    NodeType: "RandFilter",
    Child0: "TryMoveForLightningField",
    Param0: "50"

};
window.defaultAIData.TryMoveForLightningField = {
    NodeType: "Sequence",
    Child0: "DidntJustMove",
    Child1: "SafeToMove",
    Child2: "IsAbilityReady-SectopodLightningField",
    Child3: "MoveStandardIfFirstAbility-LightningField",
    Child4: "MoveMeleeFANATICUnsafe"

};
window.defaultAIData["MoveStandardIfFirstAbility-LightningField"] = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindLightningFieldDestination",
    Child3: "SelectAbility-StandardMove"

};
window.defaultAIData.FindLightningFieldDestination = {
    NodeType: "Sequence",
    Child0: "SelectTargetForLightningField",
    Child1: "ResetDestinationSearch",
    Child2: "RestrictToAbilityRange-SectopodLightningField",
    Child3: "RestrictToEnemyLoS",
    Child4: "FindRestrictedDestination-Standard"

};
window.defaultAIData.SelectTargetForLightningField = {
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "SelectBestPotentialTargetForMelee",
    Child2: "HasValidTarget-Potential"

};
window.defaultAIData["RestrictToAbilityRange-SectopodLightningField"] = {
    NodeType: "Action"

};
window.defaultAIData["WasLastAbility-StandardMove"] = {
    NodeType: "Condition"

};
window.defaultAIData.DidntJustMove = {
    NodeType: "Inverter",
    Child0: "WasLastAbility-StandardMove"

};




window.defaultAIData.HasJob = {
    NodeType: "Condition"

};
window.defaultAIData.HasUnengagedJob = {
    NodeType: "Condition"

};
window.defaultAIData["IsMyJob-Soldier"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsMyJob-Aggressor"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsMyJob-Flanker"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsMyJob-Leader"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsMyJob-Support"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsMyJob-Terrorist"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsMyJob-Hunter"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsMyJob-Charger"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsMyJob-Defender"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsMyJob-Observer"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsMyJob-Prisoner"] = {
    NodeType: "Condition"

};
window.defaultAIData["IsMyJob-GreenStandby"] = {
    NodeType: "Condition"

};
window.defaultAIData.DoNotHaveAlwaysOnJob = {
    NodeType: "Inverter",
    Child0: "DoIHaveAlwaysOnJob"

};
window.defaultAIData.DoIHaveAlwaysOnJob = {
    NodeType: "Selector",
    Child0: "IsMyJob-Terrorist",
    Child1: "IsMyJob-Hunter",
    Child2: "IsMyJob-Prisoner"

};
window.defaultAIData.TryUnengagedJob = {
    NodeType: "Sequence",
    Child0: "HasUnengagedJob",
    Child1: "TryJobTypes"

};
window.defaultAIData.TryJob = {
    NodeType: "Selector",
    Child0: "TryUnengagedJob",
    Child1: "TryJobObserver"

};
window.defaultAIData.TryJobUnsafe = {
    NodeType: "Sequence",
    Child0: "HasJob",
    Child1: "TryJobTypesUnsafe"

};
window.defaultAIData.TryJobTypes = {
    NodeType: "Selector",
    Child0: "TryJobTerrorist",
    Child1: "TryJobHunter",
    Child2: "TryJobChargerUnsafe",
    Child3: "TryJobDefender",
    Child4: "TryJobPrisoner",
    Child5: "TryJobGreenStandby"

};
window.defaultAIData.TryJobTypesUnsafe = {
    NodeType: "Selector",
    Child0: "TryJobTerrorist",
    Child1: "TryJobHunter",
    Child2: "TryJobChargerUnsafe",
    Child3: "TryJobDefender",
    Child4: "TryJobObserver",
    Child5: "TryJobPrisoner",
    Child6: "TryJobGreenStandby"

};
window.defaultAIData.TryJobTerrorist = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Terrorist",
    Child1: "JobRoot_Terrorist"

};
window.defaultAIData.TryJobHunter = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Hunter",
    Child1: "JobRoot_Hunter"

};
window.defaultAIData.TryJobChargerUnsafe = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Charger",
    Child1: "JobRoot_ChargerUnsafe"

};
window.defaultAIData.TryJobDefender = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Defender",
    Child1: "JobRoot_Defender"

};
window.defaultAIData.TryJobObserver = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Observer",
    Child1: "IsRedAlert",
    Child2: "DoIfFlankedMove",
    Child3: "SkipMove"

};
window.defaultAIData.TryJobPrisoner = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Prisoner",
    Child1: "SkipMove"

};
window.defaultAIData.TryJobGreenStandby = {
    NodeType: "Sequence",
    Child0: "IsMyJob-GreenStandby",
    Child1: "NotYetRevealed",
    Child2: "SkipMove"

};
window.defaultAIData.SelectMoveProfileByJob = {
    NodeType: "Selector",
    Child0: "SelectMoveIfAggressor",
    Child1: "SelectMoveIfFlanker",
    Child2: "SelectMoveIfLeader",
    Child3: "SelectMoveIfSupport",
    Child4: "SelectMoveIfObserver"

};
window.defaultAIData.SelectMoveIfAggressor = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Aggressor",
    Child1: "MoveAggressive"

};
window.defaultAIData.SelectMoveIfFlanker = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Flanker",
    Child1: "MoveFlanking"

};
window.defaultAIData.SelectMoveIfLeader = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Leader",
    Child1: "MoveAdvanceToCover"

};
window.defaultAIData.SelectMoveIfSupport = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Support",
    Child1: "MoveDefensive"

};
window.defaultAIData.SelectMoveIfObserver = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Observer",
    Child1: "ObserverMovement"

};
window.defaultAIData.SelectMoveProfileByJobUnsafe = {
    NodeType: "Selector",
    Child0: "SelectMoveUnsafeIfAggressor",
    Child1: "SelectMoveUnsafeIfFlanker",
    Child2: "SelectMoveUnsafeIfLeader",
    Child3: "SelectMoveUnsafeIfSupport",
    Child4: "SelectMoveUnsafeIfObserver"

};
window.defaultAIData.SelectMoveUnsafeIfAggressor = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Aggressor",
    Child1: "MoveAggressiveUnsafe"

};
window.defaultAIData.SelectMoveUnsafeIfFlanker = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Flanker",
    Child1: "MoveFlankingUnsafe"

};
window.defaultAIData.SelectMoveUnsafeIfLeader = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Leader",
    Child1: "MoveAdvanceToCoverUnsafe"

};
window.defaultAIData.SelectMoveUnsafeIfSupport = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Support",
    Child1: "MoveDefensiveUnsafe"

};
window.defaultAIData.SelectMoveUnsafeIfObserver = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Observer",
    Child1: "ObserverMovementUnsafe"

};
window.defaultAIData.SelectNCMoveProfileByJob = {
    NodeType: "Selector",
    Child0: "SelectNCMoveIfAggressor",
    Child1: "SelectNCMoveIfFlanker",
    Child2: "SelectNCMoveIfLeader",
    Child3: "SelectNCMoveIfSupport",
    Child4: "SelectNCMoveIfObserver"

};
window.defaultAIData.SelectNCMoveIfAggressor = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Aggressor",
    Child1: "NCMoveAggressive"

};
window.defaultAIData.SelectNCMoveIfFlanker = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Flanker",
    Child1: "NCMoveFlanking"

};
window.defaultAIData.SelectNCMoveIfLeader = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Leader",
    Child1: "NCMoveAdvanceToCover"

};
window.defaultAIData.SelectNCMoveIfSupport = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Support",
    Child1: "NCMoveDefensive"

};
window.defaultAIData.SelectNCMoveIfObserver = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Observer",
    Child1: "NCObserverMovement"

};
window.defaultAIData.JobRoot_Terrorist = {
    NodeType: "Sequence",
    Child0: "NotYetRevealed",
    Child1: "TryTerrorJobUnrevealed"

};
window.defaultAIData.TryTerrorJobUnrevealed = {
    NodeType: "Selector",
    Child0: "SequenceUnrevealedTerroristActionIfLeader",
    Child1: "DoUnrevealedSkip_Follower"

};
window.defaultAIData.SequenceUnrevealedTerroristActionIfLeader = {
    NodeType: "Sequence",
    Child0: "IsGroupLeader",
    Child1: "SelectUnrevealedTerroristLeaderAction"

};
window.defaultAIData.SelectUnrevealedTerroristLeaderAction = {
    NodeType: "Selector",
    Child0: "RandomizedTryTerrorMovement",
    Child1: "TryTerrorAttack",
    Child2: "TerrorMovement"

};
window.defaultAIData.DoUnrevealedSkip_Follower = {
    NodeType: "Sequence",
    Child0: "IsFollower",
    Child1: "SkipMove"

};
window.defaultAIData.RandomizedTryTerrorMovement = {
    NodeType: "RandFilter",
    Child0: "TryTerrorMovement",
    Param0: "75"

};
window.defaultAIData.TryTerrorMovement = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "ResetDestinationSearch",
    Child3: "SetCiviliansAsEnemiesInMoveCalculation",
    Child4: "SetNoCoverMovement",
    Child5: "FindDestination-Fanatic",
    Child6: "SelectAbility-StandardMove"

};
window.defaultAIData.TerrorMovement = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "SetCiviliansAsEnemiesInMoveCalculation",
    Child3: "SetNoCoverMovement",
    Child4: "FindDestination-Fanatic",
    Child5: "SelectAbility-StandardMove"

};
window.defaultAIData.TryTerrorAttack = {
    NodeType: "Sequence",
    Child0: "NumKilledCiviliansIsLessThanTurnCount",
    Child1: "TryTerrorAttackSelector"

};
window.defaultAIData.TryTerrorAttackSelector = {
    NodeType: "Selector",
    Child0: "ShootIfAvailableTerrorist",
    Child1: "TryMeleeTerrorist",
    Child2: "NeedsReload",
    Intent: "TERRORIZING"

};
window.defaultAIData.NumKilledCiviliansIsLessThanTurnCount = {
    NodeType: "Condition"
        //  Multivariate comparisons currently not supported.  Must be a custom condition.
};
window.defaultAIData.TryMeleeTerrorist = {
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "MeleeTerroristStepSelector"

};
window.defaultAIData.MeleeTerroristStepSelector = {
    NodeType: "Selector",
    Child0: "MeleeAttackTerrorist",
    Child1: "TryTerroristMoveMeleeFANATIC"

};
window.defaultAIData.MeleeAttackTerrorist = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMelee",
    Child1: "SetTargetStack-StandardMelee",
    Child2: "SelectBestTargetByJob_Terrorist",
    Child3: "HasValidTarget-StandardMelee",
    Child4: "SelectAbility-StandardMelee"

};
window.defaultAIData.ShootIfAvailableTerrorist = {
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SetTargetStack-StandardShot",
    Child2: "SelectBestTargetByJob_Terrorist",
    Child3: "HasValidTarget-StandardShot",
    Child4: "SelectAbility-StandardShot"

};
window.defaultAIData.SelectBestTargetByJob_Terrorist = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTargetByJob_Terrorist"

};
window.defaultAIData.EvaluateTargetByJob_Terrorist = {
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "SSScoreTerroristTarget",
    Child2: "UpdateBestTarget"

};
window.defaultAIData.SSScoreTerroristTarget = {
    NodeType: "Successor",
    Child0: "ScoreTerroristTarget"

};
window.defaultAIData.ScoreTerroristTarget = {
    NodeType: "Sequence",
    Child0: "TargetIsNotAlly",
    Child1: "TargetScoreCivilian",
    Child2: "TargetScoreHitChance",
    Child3: "TargetScoreHealth",
    Child4: "TargetScoreFlanking"

};
window.defaultAIData.IncludeCiviliansIfTerrorist = {
    NodeType: "Successor",
    Child0: "IfTerroristDoForMove"

};
window.defaultAIData.IfTerroristDoForMove = {
    NodeType: "Sequence",
    Child0: "IsMyJob-Terrorist",
    Child1: "SetCiviliansAsEnemiesInMoveCalculation"

};
window.defaultAIData.JobRoot_Hunter = {
    NodeType: "Sequence",
    Child0: "ShouldPatrol",
    Child1: "TryHunterJobUnrevealed"

};
window.defaultAIData.TryHunterJobUnrevealed = {
    NodeType: "Selector",
    Child0: "TryUnrevealedHunterAction_Leader",
    Child1: "DoUnrevealedSkip_Follower"

};
window.defaultAIData.TryUnrevealedHunterAction_Leader = {
    NodeType: "Sequence",
    Child0: "IsGroupLeader",
    Child1: "TryHunterAttack"

};
window.defaultAIData.TryHunterAttack = {
    NodeType: "Selector",
    Child0: "TryAttackPriorityTarget",
    Child1: "HuntIfNotLastAction"

};
window.defaultAIData.HuntIfNotLastAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "FindAdvanceLocation",
    Intent: "HUNTING"

};
window.defaultAIData.JobRoot_Charger = {
    NodeType: "Selector",
    Child0: "TryChargerJobIfUnrevealed",
    Child1: "TryChargerJobIfRevealed"

};
window.defaultAIData.TryChargerJobIfUnrevealed = {
    NodeType: "Sequence",
    Child0: "NotYetRevealed",
    Child1: "DoChargerJobIfLeaderOrSkipMove"

};
window.defaultAIData.DoChargerJobIfLeaderOrSkipMove = {
    NodeType: "Selector",
    Child0: "DoChargerJobIfLeader",
    Child1: "SkipMove"

};
window.defaultAIData.DoChargerJobIfLeader = {
    NodeType: "Sequence",
    Child0: "IsGroupLeader",
    Child1: "DoChargerJobPerAction"

};
window.defaultAIData.TryChargerJobIfRevealed = {
    NodeType: "Sequence",
    Child0: "HasRevealed",
    Child1: "DoChargerJobPerAction"

};
window.defaultAIData.DoChargerJobPerAction = {
    NodeType: "Selector",
    Child0: "ChargerFirstAction",
    Child1: "ChargerSecondAction"

};
window.defaultAIData.ChargerFirstAction = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "DoFirstChargerAction"

};
window.defaultAIData.JobRoot_ChargerUnsafe = {
    NodeType: "Selector",
    Child0: "TryChargerJobUnsafeIfUnrevealed",
    Child1: "TryChargerJobUnsafeIfRevealed"

};
window.defaultAIData.TryChargerJobUnsafeIfUnrevealed = {
    NodeType: "Sequence",
    Child0: "NotYetRevealed",
    Child1: "DoChargerJobUnsafeIfLeaderOrSkipMove"

};
window.defaultAIData.DoChargerJobUnsafeIfLeaderOrSkipMove = {
    NodeType: "Selector",
    Child0: "DoChargerJobUnsafeIfLeader",
    Child1: "SkipMove"

};
window.defaultAIData.DoChargerJobUnsafeIfLeader = {
    NodeType: "Sequence",
    Child0: "IsGroupLeader",
    Child1: "DoChargerJobPerActionUnsafe"

};
window.defaultAIData.TryChargerJobUnsafeIfRevealed = {
    NodeType: "Sequence",
    Child0: "HasRevealed",
    Child1: "DoChargerJobPerActionUnsafe"

};
window.defaultAIData.DoChargerJobPerActionUnsafe = {
    NodeType: "Selector",
    Child0: "ChargerFirstActionUnsafe",
    Child1: "ChargerSecondActionUnsafe"

};
window.defaultAIData.ChargerFirstActionUnsafe = {
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "DoFirstChargerActionUnsafe"

};
window.defaultAIData.ChargerSecondActionUnsafe = {
    NodeType: "Selector",
    Child0: "TryAttackPriorityTarget",
    Child1: "FindAdvanceLocationUnsafe"

};
window.defaultAIData.DoFirstChargerAction = {
    NodeType: "Selector",
    Child0: "FindAdvanceLocation",
    Child1: "TryAttackPriorityTarget"

};
window.defaultAIData.ChargerSecondAction = {
    NodeType: "Selector",
    Child0: "TryAttackPriorityTarget",
    Child1: "FindAdvanceLocation"

};
window.defaultAIData.DoFirstChargerActionUnsafe = {
    NodeType: "Selector",
    Child0: "FindAdvanceLocationUnsafe",
    Child1: "TryAttackPriorityTarget"

};
window.defaultAIData.FindAdvanceLocation = {
    NodeType: "Sequence",
    Child0: "SetAlertDataStack",
    Child1: "FindDesignatedAlertAdvanceer",
    Child2: "HasValidAlertDataLocation",
    Child3: "TakeAlertMoveWithoutCover",
    Intent: "ADVANCING"

};
window.defaultAIData.FindAdvanceLocationUnsafe = {
    NodeType: "Sequence",
    Child0: "SetAlertDataStack",
    Child1: "FindDesignatedAlertAdvanceer",
    Child2: "HasValidAlertDataLocation",
    Child3: "TakeAlertMoveWithoutCoverUnsafe",
    Intent: "ADVANCING"

};
window.defaultAIData.FindDesignatedAlertAdvanceer = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateAlertDataAdvanceer"

};
window.defaultAIData.EvaluateAlertDataAdvanceer = {
    NodeType: "Sequence",
    Child0: "SetNextAlertData",
    Child1: "ScoreAlertFor_Advance",
    Child2: "ScoreAlertDataDistance",
    Child3: "UpdateBestAlertData"

};
window.defaultAIData.JobRoot_Defender = {
    NodeType: "Sequence",
    Child0: "ShouldPatrol",
    Child1: "TryDefenderJobUnrevealed"

};
window.defaultAIData.TryDefenderJobUnrevealed = {
    NodeType: "Selector",
    Child0: "TryUnrevealedDefenderAction_Leader",
    Child1: "DoUnrevealedSkip_Follower"

};
window.defaultAIData.TryUnrevealedDefenderAction_Leader = {
    NodeType: "Sequence",
    Child0: "IsGroupLeader",
    Child1: "TryDefenderMove"

};
window.defaultAIData.TryDefenderMove = {
    NodeType: "Sequence",
    Child0: "FindDefendLocation",
    Child1: "DecideDefendAction",
    Intent: "DEFENDING"

};
window.defaultAIData.FindDefendLocation = {
    NodeType: "Sequence",
    Child0: "SetAlertDataStack",
    Child1: "FindDesignatedAlertDefender",
    Child2: "HasValidAlertDataLocation"

};
window.defaultAIData.FindDesignatedAlertDefender = {
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateAlertDataDefender"

};
window.defaultAIData.EvaluateAlertDataDefender = {
    NodeType: "Sequence",
    Child0: "SetNextAlertData",
    Child1: "ScoreAlertFor_Defend",
    Child2: "ScoreAlertDataDistance",
    Child3: "UpdateBestAlertData"

};
window.defaultAIData.DecideDefendAction = {
    NodeType: "Selector",
    Child0: "MoveToAlertIfNotVisible",
    Child1: "SkipMove"

};
window.defaultAIData.ObserverMovement = {
    NodeType: "Selector",
    Child0: "MoveFlanking",
    Child1: "FallBackWithLoS"

};
window.defaultAIData.ObserverMovementUnsafe = {
    NodeType: "Selector",
    Child0: "MoveFlankingUnsafe",
    Child1: "FallBackWithLoSUnsafe"

};
window.defaultAIData.NCObserverMovement = {
    NodeType: "Selector",
    Child0: "NCMoveFlanking",
    Child1: "NCFallBackWithLoS"
};
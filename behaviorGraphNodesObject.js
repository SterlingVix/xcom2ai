window.behaviorGraphNodesObject = {};

window.behaviorGraphNodesObject["GenericAIRoot"] = {
    nodeName: "GenericAIRoot",
    NodeType: "Selector",
    Child0: "TryNonAggressiveBehavior",
    Child1: "TryMindControlledRoot",
    Child2: "::CharacterRoot",
    Child3: "SkipMove"
};
window.behaviorGraphNodesObject["TryNonAggressiveBehavior"] = {
    nodeName: "TryNonAggressiveBehavior",
    NodeType: "Sequence",
    Child0: "HasHitAttackLimit",
    Child1: "NonAggressiveBehavior"
};
window.behaviorGraphNodesObject["HasHitAttackLimit"] = {
    nodeName: "HasHitAttackLimit",
    NodeType: "Condition" //  Uses values defined above for MaxEngagedEnemies", per difficulty level.
};
window.behaviorGraphNodesObject["NonAggressiveBehavior"] = {
    nodeName: "NonAggressiveBehavior",
    NodeType: "Selector",
    Child0: "TryNonAggressiveBehaviorFirstAction",
    Child1: "MoveFlanking",
    Child2: "SkipMove"
};
window.behaviorGraphNodesObject["TryNonAggressiveBehaviorFirstAction"] = {
    nodeName: "TryNonAggressiveBehaviorFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "NonAggressiveBehaviorFirstAction"
};
window.behaviorGraphNodesObject["NonAggressiveBehaviorFirstAction"] = {
    nodeName: "NonAggressiveBehaviorFirstAction",
    NodeType: "RandSelector",
    Child0: "TryOverwatch",
    Param0: "33",
    Child1: "MoveFlankingOrDefensive",
    Param1: "67"
};
window.behaviorGraphNodesObject["MoveFlankingOrDefensive"] = {
    nodeName: "MoveFlankingOrDefensive",
    NodeType: "Selector",
    Child0: "MoveFlanking",
    Child1: "MoveDefensive",
    Child2: "SkipMove"
};
window.behaviorGraphNodesObject["TryMindControlledRoot"] = {
    nodeName: "TryMindControlledRoot",
    NodeType: "Sequence",
    Child0: "AffectedByEffect-MindControl",
    Child1: "MindControlledRoot"
};
window.behaviorGraphNodesObject["NotRedAlert"] = {
    nodeName: "NotRedAlert",
    NodeType: "Inverter",
    Child0: "IsRedAlert"
};
window.behaviorGraphNodesObject["IsInFirstCombatTurn"] = {
    nodeName: "IsInFirstCombatTurn",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsFlanked"] = {
    nodeName: "IsFlanked",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["NotFlanked"] = {
    nodeName: "NotFlanked",
    NodeType: "Inverter",
    Child0: "IsFlanked"
};
window.behaviorGraphNodesObject["IsVisibleToPlayer"] = {
    nodeName: "IsVisibleToPlayer",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetIsVisibleToPlayer"] = {
    nodeName: "TargetIsVisibleToPlayer",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["DidNotMoveLastTurn"] = {
    nodeName: "DidNotMoveLastTurn",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["HighPopularSupport"] = {
    nodeName: "HighPopularSupport",
    NodeType: "Condition",
    Param0: "PopularSupport",
    Param1: ">",
    Param2: "50%"
};
window.behaviorGraphNodesObject["LowPopularSupport"] = {
    nodeName: "LowPopularSupport",
    NodeType: "Inverter",
    Child0: "HighPopularSupport"
};
window.behaviorGraphNodesObject["IsGroupLeader"] = {
    nodeName: "IsGroupLeader",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsFollower"] = {
    nodeName: "IsFollower",
    NodeType: "Inverter",
    Child0: "IsGroupLeader"
};
window.behaviorGraphNodesObject["HasAmmo"] = {
    nodeName: "HasAmmo",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["OutOfAmmo"] = {
    nodeName: "OutOfAmmo",
    NodeType: "Inverter",
    Child0: "HasAmmo"
};
window.behaviorGraphNodesObject["IsLastActionPoint"] = {
    nodeName: "IsLastActionPoint",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["NotLastActionPoint"] = {
    nodeName: "NotLastActionPoint",
    NodeType: "Inverter",
    Child0: "IsLastActionPoint"
};
window.behaviorGraphNodesObject["HasThreeActionPoints"] = {
    nodeName: "HasThreeActionPoints",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["HasGoodShotTarget"] = {
    nodeName: "HasGoodShotTarget",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsInDangerousArea"] = {
    nodeName: "IsInDangerousArea",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["NotInDangerousArea"] = {
    nodeName: "NotInDangerousArea",
    NodeType: "Inverter",
    Child0: "IsInDangerousArea"
};
window.behaviorGraphNodesObject["HasKillShot"] = {
    nodeName: "HasKillShot",
    NodeType: "Condition" //  only functional for StandardShot
};
window.behaviorGraphNodesObject["HasNoKillShot"] = {
    nodeName: "HasNoKillShot",
    NodeType: "Inverter",
    Child0: "HasKillShot"
};
window.behaviorGraphNodesObject["TargetIsVulnerable"] = {
    nodeName: "TargetIsVulnerable",
    NodeType: "Selector",
    Child0: "TargetIsKillable",
    Child1: "TargetHasLowHP"
};
window.behaviorGraphNodesObject["HasHighHP"] = {
    nodeName: "HasHighHP",
    NodeType: "StatCondition",
    Param0: "eStat_HP",
    Param1: ">:",
    Param2: "70%"
};
window.behaviorGraphNodesObject["HasLowHP"] = {
    nodeName: "HasLowHP",
    NodeType: "StatCondition",
    Param0: "eStat_HP",
    Param1: "<:",
    Param2: "30%"
};
window.behaviorGraphNodesObject["NotLowHP"] = {
    nodeName: "NotLowHP",
    NodeType: "StatCondition",
    Param0: "eStat_HP",
    Param1: ">",
    Param2: "30%"
};
window.behaviorGraphNodesObject["IsBloodied"] = {
    nodeName: "IsBloodied",
    NodeType: "StatCondition",
    Param0: "eStat_HP",
    Param1: "<:",
    Param2: "50%"
};
window.behaviorGraphNodesObject["HasWounds"] = {
    nodeName: "HasWounds",
    NodeType: "StatCondition",
    Param0: "eStat_HP",
    Param1: "<",
    Param2: "100%"
};
window.behaviorGraphNodesObject["IsRedAlert"] = {
    nodeName: "IsRedAlert",
    NodeType: "StatCondition",
    Param0: "eStat_AlertLevel",
    Param1: "::",
    Param2: "2"
};
window.behaviorGraphNodesObject["IsOrangeAlert"] = {
    nodeName: "IsOrangeAlert",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsYellowAlert"] = {
    nodeName: "IsYellowAlert",
    NodeType: "StatCondition",
    Param0: "eStat_AlertLevel",
    Param1: "::",
    Param2: "1"
};
window.behaviorGraphNodesObject["IsGreenAlert"] = {
    nodeName: "IsGreenAlert",
    NodeType: "StatCondition",
    Param0: "eStat_AlertLevel",
    Param1: "::",
    Param2: "0"
};
window.behaviorGraphNodesObject["HasRevealed"] = {
    nodeName: "HasRevealed",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["NotYetRevealed"] = {
    nodeName: "NotYetRevealed",
    NodeType: "Inverter",
    Child0: "HasRevealed"
};
window.behaviorGraphNodesObject["HasCombatOccured"] = {
    nodeName: "HasCombatOccured",
    NodeType: "StatCondition",
    Param0: "CombatCount",
    Param1: ">",
    Param2: "0"
};
window.behaviorGraphNodesObject["HasMoreThanOneOverwatcher"] = {
    nodeName: "HasMoreThanOneOverwatcher",
    NodeType: "StatCondition",
    Param0: "OverwatcherCount",
    Param1: ">",
    Param2: "1"
};
window.behaviorGraphNodesObject["NoOverwatchingTeammates"] = {
    nodeName: "NoOverwatchingTeammates",
    NodeType: "StatCondition",
    Param0: "OverwatcherCount",
    Param1: "::",
    Param2: "0",
    Param3: "1"
};
window.behaviorGraphNodesObject["OneOverwatchingTeammate"] = {
    nodeName: "OneOverwatchingTeammate",
    NodeType: "StatCondition",
    Param0: "OverwatcherCount",
    Param1: "::",
    Param2: "1",
    Param3: "1"
};
window.behaviorGraphNodesObject["MultipleOverwatchingTeammates"] = {
    nodeName: "MultipleOverwatchingTeammates",
    NodeType: "StatCondition",
    Param0: "OverwatcherCount",
    Param1: ">",
    Param2: "1",
    Param3: "1"
};
window.behaviorGraphNodesObject["TargetHasBeenAttackedTwice"] = {
    nodeName: "TargetHasBeenAttackedTwice",
    NodeType: "StatCondition",
    Param0: "TargetSelectedThisTurnCount",
    Param1: ">:",
    Param2: "2"
};
window.behaviorGraphNodesObject["TargetHasBeenAttackedOnce"] = {
    nodeName: "TargetHasBeenAttackedOnce",
    NodeType: "StatCondition",
    Param0: "TargetSelectedThisTurnCount",
    Param1: ":",
    Param2: "1"
};
window.behaviorGraphNodesObject["TargetHasNotBeenAttacked"] = {
    nodeName: "TargetHasNotBeenAttacked",
    NodeType: "StatCondition",
    Param0: "TargetSelectedThisTurnCount",
    Param1: ":",
    Param2: "0"
};
window.behaviorGraphNodesObject["NoVisibleOverwatchers"] = {
    nodeName: "NoVisibleOverwatchers",
    NodeType: "StatCondition",
    Param0: "OverwatcherCount",
    Param1: "::",
    Param2: "0"
};
window.behaviorGraphNodesObject["NoVisibleSuppressors"] = {
    nodeName: "NoVisibleSuppressors",
    NodeType: "StatCondition",
    Param0: "SuppressorCount",
    Param1: "::",
    Param2: "0"
};
window.behaviorGraphNodesObject["HasBTVar-SafeToMove"] = {
    nodeName: "HasBTVar-SafeToMove",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetSafeToMoveTrue"] = {
    nodeName: "SetSafeToMoveTrue",
    NodeType: "Action",
    Param0: "SetBTVar",
    Param1: "SafeToMove",
    Param2: "1"
};
window.behaviorGraphNodesObject["SetSafeToMoveFalse"] = {
    nodeName: "SetSafeToMoveFalse",
    NodeType: "Action",
    Param0: "SetBTVar",
    Param1: "SafeToMove",
    Param2: "0"
};
window.behaviorGraphNodesObject["IsSafeToMove"] = {
    nodeName: "IsSafeToMove",
    NodeType: "StatCondition",
    Param0: "BTVar",
    Param1: "!:",
    Param2: "0",
    Param3: "SafeToMove"
};
window.behaviorGraphNodesObject["InitSafeToMoveVar"] = {
    nodeName: "InitSafeToMoveVar",
    NodeType: "Selector",
    Child0: "HasBTVar-SafeToMove",
    Child1: "UpdateSafeToMoveVar"
};
window.behaviorGraphNodesObject["UpdateSafeToMoveVar"] = {
    nodeName: "UpdateSafeToMoveVar",
    NodeType: "Selector",
    Child0: "TrySetSafeToMoveTrue",
    Child1: "SetSafeToMoveFalse"
};
window.behaviorGraphNodesObject["TrySetSafeToMoveTrue"] = {
    nodeName: "TrySetSafeToMoveTrue",
    NodeType: "Sequence",
    Child0: "AreConditionsSafeForMove",
    Child1: "SetSafeToMoveTrue"
};
window.behaviorGraphNodesObject["AreConditionsSafeForMove"] = {
    nodeName: "AreConditionsSafeForMove",
    NodeType: "Selector",
    Child0: "IsFlanked",
    Child1: "PassesOverwatchSuppressMoveChecks"
};
window.behaviorGraphNodesObject["PassesOverwatchSuppressMoveChecks"] = {
    nodeName: "PassesOverwatchSuppressMoveChecks",
    NodeType: "Sequence",
    Child0: "PassesSuppressMoveChecks",
    Child1: "PassesOverwatchMoveChecks"
};
window.behaviorGraphNodesObject["PassesOverwatchMoveChecks"] = {
    nodeName: "PassesOverwatchMoveChecks",
    NodeType: "Selector",
    Child0: "NoVisibleOverwatchers",
    Child1: "RollToNotMoveAgainstOverwatchersFails"
};
window.behaviorGraphNodesObject["PassesSuppressMoveChecks"] = {
    nodeName: "PassesSuppressMoveChecks",
    NodeType: "Selector",
    Child0: "NoVisibleSuppressors",
    Child1: "RollToNotMoveAgainstSuppressorsFails"
};
window.behaviorGraphNodesObject["RollToNotMoveAgainstOverwatchersFails"] = {
    nodeName: "RollToNotMoveAgainstOverwatchersFails",
    NodeType: "Sequence",
    Child0: "SetNoMoveFalse",
    Child1: "SetOverwatcherStack",
    Child2: "RepeatRollNoMoveOnOverwatcherUntilPass",
    Child3: "RollToNotMoveFailed"
};
window.behaviorGraphNodesObject["RollToNotMoveAgainstSuppressorsFails"] = {
    nodeName: "RollToNotMoveAgainstSuppressorsFails",
    NodeType: "Sequence",
    Child0: "SetNoMoveFalse",
    Child1: "SetSuppressorStack",
    Child2: "RepeatRollNoMoveOnSuppressorUntilPass",
    Child3: "RollToNotMoveFailed"
};
window.behaviorGraphNodesObject["RepeatRollNoMoveOnOverwatcherUntilPass"] = {
    nodeName: "RepeatRollNoMoveOnOverwatcherUntilPass",
    NodeType: "RepeatUntilFail",
    Child0: "IterateRollOnNoMoveToOverwatcher"
};
window.behaviorGraphNodesObject["RepeatRollNoMoveOnSuppressorUntilPass"] = {
    nodeName: "RepeatRollNoMoveOnSuppressorUntilPass",
    NodeType: "RepeatUntilFail",
    Child0: "IterateRollOnNoMoveToSuppressor"
};
window.behaviorGraphNodesObject["IterateRollOnNoMoveToOverwatcher"] = {
    nodeName: "IterateRollOnNoMoveToOverwatcher",
    NodeType: "Sequence",
    Child0: "SetNextOverwatcher",
    Child1: "Roll50ToNotMove",
    Child2: "RollToNotMoveFailed" //  If RollToNotMove failed", keep rolling until it passes or we run out of overwatchers.
};
window.behaviorGraphNodesObject["IterateRollOnNoMoveToSuppressor"] = {
    nodeName: "IterateRollOnNoMoveToSuppressor",
    NodeType: "Sequence",
    Child0: "SetNextSuppressor",
    Child1: "Roll75ToNotMove",
    Child2: "RollToNotMoveFailed" //  If RollToNotMove failed", keep rolling until it passes or we run out of suppressors.
};
window.behaviorGraphNodesObject["SetNextOverwatcher"] = {
    nodeName: "SetNextOverwatcher",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SetOverwatcherStack"] = {
    nodeName: "SetOverwatcherStack",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SetNextSuppressor"] = {
    nodeName: "SetNextSuppressor",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SetSuppressorStack"] = {
    nodeName: "SetSuppressorStack",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["Roll50ToNotMove"] = {
    nodeName: "Roll50ToNotMove",
    NodeType: "RandSelector",
    Child0: "SetNoMoveTrue",
    Param0: "50",
    Child1: "SetNoMoveFalse",
    Param1: "50"
};
window.behaviorGraphNodesObject["Roll75ToNotMove"] = {
    nodeName: "Roll75ToNotMove",
    NodeType: "RandSelector",
    Child0: "SetNoMoveTrue",
    Param0: "75",
    Child1: "SetNoMoveFalse",
    Param1: "25"
};
window.behaviorGraphNodesObject["SetNoMoveTrue"] = {
    nodeName: "SetNoMoveTrue",
    NodeType: "Action",
    Param0: "SetBTVar",
    Param1: "NoMove",
    Param2: "1"
};
window.behaviorGraphNodesObject["SetNoMoveFalse"] = {
    nodeName: "SetNoMoveFalse",
    NodeType: "Action",
    Param0: "SetBTVar",
    Param1: "NoMove",
    Param2: "0"
};
window.behaviorGraphNodesObject["RollToNotMoveFailed"] = {
    nodeName: "RollToNotMoveFailed",
    NodeType: "StatCondition",
    Param0: "BTVar",
    Param1: "::",
    Param2: "0",
    Param3: "NoMove"
};
window.behaviorGraphNodesObject["RollToNotMovePassed"] = {
    nodeName: "RollToNotMovePassed",
    NodeType: "StatCondition",
    Param0: "BTVar",
    Param1: "!:",
    Param2: "0",
    Param3: "NoMove"
};
window.behaviorGraphNodesObject["SafeToMove"] = {
    nodeName: "SafeToMove",
    NodeType: "Sequence",
    Child0: "InitSafeToMoveVar",
    Child1: "IsSafeToMove"
};
window.behaviorGraphNodesObject["IsDifficultyEasy"] = {
    nodeName: "IsDifficultyEasy",
    NodeType: "StatCondition",
    Param0: "Difficulty",
    Param1: "::",
    Param2: "0"
};
window.behaviorGraphNodesObject["IsDifficultyNormal"] = {
    nodeName: "IsDifficultyNormal",
    NodeType: "StatCondition",
    Param0: "Difficulty",
    Param1: "::",
    Param2: "1"
};
window.behaviorGraphNodesObject["IsDifficultyHard"] = {
    nodeName: "IsDifficultyHard",
    NodeType: "StatCondition",
    Param0: "Difficulty",
    Param1: "::",
    Param2: "2"
};
window.behaviorGraphNodesObject["IsDifficultyClassic"] = {
    nodeName: "IsDifficultyClassic",
    NodeType: "StatCondition",
    Param0: "Difficulty",
    Param1: "::",
    Param2: "3"
};
window.behaviorGraphNodesObject["IsDifficultyAboveNormal"] = {
    nodeName: "IsDifficultyAboveNormal",
    NodeType: "StatCondition",
    Param0: "Difficulty",
    Param1: ">",
    Param2: "1"
};
window.behaviorGraphNodesObject["IsDifficultyLow"] = {
    nodeName: "IsDifficultyLow",
    NodeType: "StatCondition",
    Param0: "Difficulty",
    Param1: "<:",
    Param2: "1"
};
window.behaviorGraphNodesObject["UseDashMovement"] = {
    nodeName: "UseDashMovement",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SetCiviliansAsEnemiesInMoveCalculation"] = {
    nodeName: "SetCiviliansAsEnemiesInMoveCalculation",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SetNoCoverMovement"] = {
    nodeName: "SetNoCoverMovement",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["HasPriorityTargetUnit"] = {
    nodeName: "HasPriorityTargetUnit",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["HasPriorityTargetObject"] = {
    nodeName: "HasPriorityTargetObject",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["HasPriorityTarget"] = {
    nodeName: "HasPriorityTarget",
    NodeType: "Selector",
    Child0: "HasPriorityTargetUnit",
    Child1: "HasValidProtectDeviceTarget"
};
window.behaviorGraphNodesObject["HasValidProtectDeviceTarget"] = {
    nodeName: "HasValidProtectDeviceTarget",
    NodeType: "Sequence",
    Child0: "HasPriorityTargetObject",
    Child1: "PriorityTargetNotAttackedThisTurn"
};
window.behaviorGraphNodesObject["PriorityTargetNotAttackedThisTurn"] = {
    nodeName: "PriorityTargetNotAttackedThisTurn",
    NodeType: "StatCondition",
    Param0: "PriorityObjectAttackCount",
    Param1: "::",
    Param2: "0"
};
window.behaviorGraphNodesObject["HasEnemyVIP"] = {
    nodeName: "HasEnemyVIP",
    NodeType: "Condition" //  Slightly different from HasPriorityTargetUnit in that the Enemy VIP is not always the priority target.
};
window.behaviorGraphNodesObject["TargetIsPriorityUnit"] = {
    nodeName: "TargetIsPriorityUnit",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetIsPriorityObject"] = {
    nodeName: "TargetIsPriorityObject",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetIsEnemyVIP"] = {
    nodeName: "TargetIsEnemyVIP",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AffectedByEffect-MindControl"] = {
    nodeName: "AffectedByEffect-MindControl",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AffectedByEffect-RageTriggered"] = {
    nodeName: "AffectedByEffect-RageTriggered",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AffectedByEffect-PsychosisTriggered"] = {
    nodeName: "AffectedByEffect-PsychosisTriggered",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AffectedByEffect-GatekeeperClosedEffect"] = {
    nodeName: "AffectedByEffect-GatekeeperClosedEffect",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AffectedByEffect-WrathCannonStage1Effect"] = {
    nodeName: "AffectedByEffect-WrathCannonStage1Effect",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AffectedByEffect-FrenzyEffect"] = {
    nodeName: "AffectedByEffect-FrenzyEffect",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AffectedByEffect-Burrowed"] = {
    nodeName: "AffectedByEffect-Burrowed",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetAffectedByEffect-MarkedTarget"] = {
    nodeName: "TargetAffectedByEffect-MarkedTarget",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AffectedByEffect-Poisoned"] = {
    nodeName: "AffectedByEffect-Poisoned",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetAffectedByEffect-Disoriented"] = {
    nodeName: "TargetAffectedByEffect-Disoriented",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetAffectedByEffect-Confused"] = {
    nodeName: "TargetAffectedByEffect-Confused",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetAffectedByEffect-Panicked"] = {
    nodeName: "TargetAffectedByEffect-Panicked",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetAffectedByEffect-Suppression"] = {
    nodeName: "TargetAffectedByEffect-Suppression",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetIsApplyingEffect-Suppression"] = {
    nodeName: "TargetIsApplyingEffect-Suppression",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetWillWeakened"] = {
    nodeName: "TargetWillWeakened",
    NodeType: "Selector",
    Child0: "TargetAffectedByEffect-Disoriented",
    Child1: "TargetAffectedByEffect-Confused",
    Child2: "TargetAffectedByEffect-Panicked",
    Child3: "TargetNotAffectedByDominated"
};
window.behaviorGraphNodesObject["TargetWillunWeakened"] = {
    nodeName: "TargetWillunWeakened",
    NodeType: "Inverter",
    Child0: "TargetWillWeakened"
};
window.behaviorGraphNodesObject["IsMissionOfType-Terror"] = {
    nodeName: "IsMissionOfType-Terror",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAIInCivilianRadius"] = {
    nodeName: "IsAIInCivilianRadius",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["HasMultipleEnergyShieldTargets"] = {
    nodeName: "HasMultipleEnergyShieldTargets",
    NodeType: "StatCondition",
    Param0: "AbilityTargetUnitCount-EnergyShield",
    Param1: ">:",
    Param2: "3" //  Param2 count includes self.
};
window.behaviorGraphNodesObject["HasAnyEnergyShieldTargets"] = {
    nodeName: "HasAnyEnergyShieldTargets",
    NodeType: "StatCondition",
    Param0: "AbilityTargetUnitCount-EnergyShield",
    Param1: ">:",
    Param2: "2"
};
window.behaviorGraphNodesObject["TargetHasLowHP"] = {
    nodeName: "TargetHasLowHP",
    NodeType: "TargetStatCondition",
    Param0: "eStat_HP",
    Param1: "<:",
    Param2: "40%"
};
window.behaviorGraphNodesObject["TargetHasHighHP"] = {
    nodeName: "TargetHasHighHP",
    NodeType: "TargetStatCondition",
    Param0: "eStat_HP",
    Param1: ">:",
    Param2: "75%"
};
window.behaviorGraphNodesObject["TargetHasMaxHP"] = {
    nodeName: "TargetHasMaxHP",
    NodeType: "TargetStatCondition",
    Param0: "eStat_HP",
    Param1: ">:",
    Param2: "100%"
};
window.behaviorGraphNodesObject["TargetWounded"] = {
    nodeName: "TargetWounded",
    NodeType: "Inverter",
    Child0: "TargetHasMaxHP"
};
window.behaviorGraphNodesObject["TargetIsKillable"] = {
    nodeName: "TargetIsKillable",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetHitChanceLow"] = {
    nodeName: "TargetHitChanceLow",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetHitChanceHigh"] = {
    nodeName: "TargetHitChanceHigh",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsFlankingTarget"] = {
    nodeName: "IsFlankingTarget",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetIsCivilian"] = {
    nodeName: "TargetIsCivilian",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetIsNotCivilian"] = {
    nodeName: "TargetIsNotCivilian",
    NodeType: "Inverter",
    Child0: "TargetIsCivilian"
};
window.behaviorGraphNodesObject["TargetIsEnemy"] = {
    nodeName: "TargetIsEnemy",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetIsAlly"] = {
    nodeName: "TargetIsAlly",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetIsAdvent"] = {
    nodeName: "TargetIsAdvent",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetIsAlien"] = {
    nodeName: "TargetIsAlien",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetIsNotAlien"] = {
    nodeName: "TargetIsNotAlien",
    NodeType: "Inverter",
    Child0: "TargetIsAlien"
};
window.behaviorGraphNodesObject["TargetIsRobotic"] = {
    nodeName: "TargetIsRobotic",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetIsClosestValidTarget"] = {
    nodeName: "TargetIsClosestValidTarget",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetIsNotAttackable"] = {
    nodeName: "TargetIsNotAttackable",
    NodeType: "Condition" //  Dead", or incapacitated.
};
window.behaviorGraphNodesObject["FindDestination-FallBack"] = {
    nodeName: "FindDestination-FallBack",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestination-Defensive"] = {
    nodeName: "FindDestination-Defensive",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestination-Standard"] = {
    nodeName: "FindDestination-Standard",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestination-Aggressive"] = {
    nodeName: "FindDestination-Aggressive",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestination-Fanatic"] = {
    nodeName: "FindDestination-Fanatic",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestination-AdvanceCover"] = {
    nodeName: "FindDestination-AdvanceCover",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestination-Flanking"] = {
    nodeName: "FindDestination-Flanking",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestination-Hunting"] = {
    nodeName: "FindDestination-Hunting",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestination-Melee"] = {
    nodeName: "FindDestination-Melee",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestination-MeleeDefensive"] = {
    nodeName: "FindDestination-MeleeDefensive",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestination-MeleeAggressive"] = {
    nodeName: "FindDestination-MeleeAggressive",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestination-MeleeFanatic"] = {
    nodeName: "FindDestination-MeleeFanatic",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestination-CivilianGreen"] = {
    nodeName: "FindDestination-CivilianGreen",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestination-CivilianRed"] = {
    nodeName: "FindDestination-CivilianRed",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestination-RandomNoCover"] = {
    nodeName: "FindDestination-RandomNoCover",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestinationWithLoS-Teleport"] = {
    nodeName: "FindDestinationWithLoS-Teleport",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestinationWithLoS-IsoTeleport"] = {
    nodeName: "FindDestinationWithLoS-IsoTeleport",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestinationWithLoS-FallBack"] = {
    nodeName: "FindDestinationWithLoS-FallBack",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestinationWithLoS-Defensive"] = {
    nodeName: "FindDestinationWithLoS-Defensive",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestinationWithLoS-Standard"] = {
    nodeName: "FindDestinationWithLoS-Standard",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestinationWithLoS-Aggressive"] = {
    nodeName: "FindDestinationWithLoS-Aggressive",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestinationWithLoS-Fanatic"] = {
    nodeName: "FindDestinationWithLoS-Fanatic",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestinationWithLoS-AdvanceCover"] = {
    nodeName: "FindDestinationWithLoS-AdvanceCover",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindDestinationWithLoS-Flanking"] = {
    nodeName: "FindDestinationWithLoS-Flanking",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindRestrictedDestination-FallBack"] = {
    nodeName: "FindRestrictedDestination-FallBack",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindRestrictedDestination-Defensive"] = {
    nodeName: "FindRestrictedDestination-Defensive",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindRestrictedDestination-Standard"] = {
    nodeName: "FindRestrictedDestination-Standard",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindRestrictedDestination-Aggressive"] = {
    nodeName: "FindRestrictedDestination-Aggressive",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindRestrictedDestination-Fanatic"] = {
    nodeName: "FindRestrictedDestination-Fanatic",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindRestrictedDestination-AdvanceCover"] = {
    nodeName: "FindRestrictedDestination-AdvanceCover",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindRestrictedDestination-Melee"] = {
    nodeName: "FindRestrictedDestination-Melee",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindRestrictedDestination-MeleeDefensive"] = {
    nodeName: "FindRestrictedDestination-MeleeDefensive",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindRestrictedDestination-MeleeFanatic"] = {
    nodeName: "FindRestrictedDestination-MeleeFanatic",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindRestrictedDestination-Teleport"] = {
    nodeName: "FindRestrictedDestination-Teleport",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindRestrictedDestination-IsoTeleport"] = {
    nodeName: "FindRestrictedDestination-IsoTeleport",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindRestrictedDestination-MimicBeacon"] = {
    nodeName: "FindRestrictedDestination-MimicBeacon",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindRestrictedDestination-Burrow"] = {
    nodeName: "FindRestrictedDestination-Burrow",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["ResetDestinationSearch"] = {
    nodeName: "ResetDestinationSearch",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToEnemyLoS"] = {
    nodeName: "RestrictToEnemyLoS",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToAllyLoS"] = {
    nodeName: "RestrictToAllyLoS",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToFlanking"] = {
    nodeName: "RestrictToFlanking",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToAbilityRange-ThrowGrenade"] = {
    nodeName: "RestrictToAbilityRange-ThrowGrenade",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToAbilityRange-PoisonSpit"] = {
    nodeName: "RestrictToAbilityRange-PoisonSpit",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToAbilityRange-AcidBlob"] = {
    nodeName: "RestrictToAbilityRange-AcidBlob",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToAbilityRange-MicroMissiles"] = {
    nodeName: "RestrictToAbilityRange-MicroMissiles",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToAbilityRange-BlazingPinionsStage1"] = {
    nodeName: "RestrictToAbilityRange-BlazingPinionsStage1",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToAbilityRange-PsiDimensionalRiftStage1"] = {
    nodeName: "RestrictToAbilityRange-PsiDimensionalRiftStage1",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToAbilityRange-NullLance"] = {
    nodeName: "RestrictToAbilityRange-NullLance",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToAbilityRange-PsiMindControl"] = {
    nodeName: "RestrictToAbilityRange-PsiMindControl",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToAbilityRange-AnimaInversion"] = {
    nodeName: "RestrictToAbilityRange-AnimaInversion",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToAbilityRange-PsiBombStage1"] = {
    nodeName: "RestrictToAbilityRange-PsiBombStage1",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToAbilityRange-StandardShot"] = {
    nodeName: "RestrictToAbilityRange-StandardShot",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToAbilityRange-Suppression"] = {
    nodeName: "RestrictToAbilityRange-Suppression",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToPotentialTargetRange-EnergyShield"] = {
    nodeName: "RestrictToPotentialTargetRange-EnergyShield",
    NodeType: "Action" //  Requires a potential target.  Used for finding a destination to shield our "best" unit.
};
window.behaviorGraphNodesObject["RestrictToAlliedAbilityRange-EnergyShield"] = {
    nodeName: "RestrictToAlliedAbilityRange-EnergyShield",
    NodeType: "Action",
    Param0: "2" // Param0 is the minimum number of Allied Targets in range for each tile to be considered.
};
window.behaviorGraphNodesObject["RestrictToPotentialTargetRange-StandardMelee"] = {
    nodeName: "RestrictToPotentialTargetRange-StandardMelee",
    NodeType: "Action" //  StandardMelee has aliases in equivalentAbilities list.
};
window.behaviorGraphNodesObject["RestrictToPotentialTargetRange-NullLance"] = {
    nodeName: "RestrictToPotentialTargetRange-NullLance",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["AddAbilityRangeWeight-EnergyShield"] = {
    nodeName: "AddAbilityRangeWeight-EnergyShield",
    NodeType: "Action",
    Param0: "5.5"
};
window.behaviorGraphNodesObject["FindGrenadeDestination"] = {
    nodeName: "FindGrenadeDestination",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-ThrowGrenade",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Standard"
};
window.behaviorGraphNodesObject["FindPoisonSpitDestination"] = {
    nodeName: "FindPoisonSpitDestination",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-PoisonSpit",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Standard"
};
window.behaviorGraphNodesObject["FindAcidBlobDestination"] = {
    nodeName: "FindAcidBlobDestination",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-AcidBlob",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Standard"
};
window.behaviorGraphNodesObject["FindMicroMissilesDestination"] = {
    nodeName: "FindMicroMissilesDestination",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-MicroMissiles",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Fanatic"
};
window.behaviorGraphNodesObject["FindBlazingPinionsDestination"] = {
    nodeName: "FindBlazingPinionsDestination",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-BlazingPinionsStage1",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Fanatic"
};
window.behaviorGraphNodesObject["FindShieldDestinationDefensive"] = {
    nodeName: "FindShieldDestinationDefensive",
    NodeType: "Selector",
    Child0: "FindShieldDestinationDefensive_MultipleUnits",
    Child1: "FindShieldDestinationDefensive_BestUnit"
};
window.behaviorGraphNodesObject["FindShieldDestinationDefensive_MultipleUnits"] = {
    nodeName: "FindShieldDestinationDefensive_MultipleUnits",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAlliedAbilityRange-EnergyShield",
    Child2: "AddAbilityRangeWeight-EnergyShield",
    Child3: "FindRestrictedDestination-Defensive"
};
window.behaviorGraphNodesObject["FindShieldDestinationDefensive_BestUnit"] = {
    nodeName: "FindShieldDestinationDefensive_BestUnit",
    NodeType: "Sequence",
    Child0: "SelectPotentialTargetForEnergyShield",
    Child1: "ResetDestinationSearch",
    Child2: "RestrictToPotentialTargetRange-EnergyShield",
    Child3: "FindRestrictedDestination-Defensive"
};
window.behaviorGraphNodesObject["FindDimensionalRiftDestination"] = {
    nodeName: "FindDimensionalRiftDestination",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-PsiDimensionalRiftStage1",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Defensive"
};
window.behaviorGraphNodesObject["FindMindControlDestinationDefensive"] = {
    nodeName: "FindMindControlDestinationDefensive",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-PsiMindControl",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Defensive"
};
window.behaviorGraphNodesObject["FindAnimaInversionDestination"] = {
    nodeName: "FindAnimaInversionDestination",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-AnimaInversion",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Fanatic"
};
window.behaviorGraphNodesObject["FindPsiBombDestination"] = {
    nodeName: "FindPsiBombDestination",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-PsiBombStage1",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Standard"
};
window.behaviorGraphNodesObject["FindNullLanceDestination"] = {
    nodeName: "FindNullLanceDestination",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-NullLance",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Standard"
};
window.behaviorGraphNodesObject["FindPsiBombTeleportDestination"] = {
    nodeName: "FindPsiBombTeleportDestination",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-PsiBombStage1",
    Child2: "RestrictToEnemyLoS",
    Child3: "UseDashMovement",
    Child4: "FindRestrictedDestination-Teleport"
};
window.behaviorGraphNodesObject["FindPsiMindControlTeleportDestination"] = {
    nodeName: "FindPsiMindControlTeleportDestination",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-PsiMindControl",
    Child2: "RestrictToEnemyLoS",
    Child3: "UseDashMovement",
    Child4: "FindRestrictedDestination-Teleport"
};
window.behaviorGraphNodesObject["FindPsiDimensionalRiftTeleportDestination"] = {
    nodeName: "FindPsiDimensionalRiftTeleportDestination",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-PsiDimensionalRiftStage1",
    Child2: "RestrictToEnemyLoS",
    Child3: "UseDashMovement",
    Child4: "FindRestrictedDestination-Teleport"
};
window.behaviorGraphNodesObject["FindNullLanceTeleportDestination"] = {
    nodeName: "FindNullLanceTeleportDestination",
    NodeType: "Sequence",
    Child0: "RestrictToPotentialTargetRange-NullLance",
    Child1: "UseDashMovement",
    Child2: "FindRestrictedDestination-Teleport"
};
window.behaviorGraphNodesObject["FindSuppressionDestination"] = {
    nodeName: "FindSuppressionDestination",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAbilityRange-Suppression",
    Child2: "RestrictToEnemyLoS",
    Child3: "FindRestrictedDestination-Standard"
};
window.behaviorGraphNodesObject["SetAbilityForFindDestination-StunLance"] = {
    nodeName: "SetAbilityForFindDestination-StunLance",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SetAbilityForFindDestination-DevastatingPunch"] = {
    nodeName: "SetAbilityForFindDestination-DevastatingPunch",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SkipMove"] = {
    nodeName: "SkipMove",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectMoveStandard"] = {
    nodeName: "SelectMoveStandard",
    NodeType: "Selector",
    Child0: "SelectMoveProfileByJob",
    Child1: "MoveStandard"
};
window.behaviorGraphNodesObject["SelectMove_JobOrDefensive"] = {
    nodeName: "SelectMove_JobOrDefensive",
    NodeType: "Selector",
    Child0: "SelectMoveProfileByJob",
    Child1: "MoveDefensive"
};
window.behaviorGraphNodesObject["SelectMove_JobOrAggressive"] = {
    nodeName: "SelectMove_JobOrAggressive",
    NodeType: "Selector",
    Child0: "SelectMoveProfileByJob",
    Child1: "MoveAggressive"
};
window.behaviorGraphNodesObject["SelectNCMove_JobOrFanatic"] = {
    nodeName: "SelectNCMove_JobOrFanatic",
    NodeType: "Selector",
    Child0: "SelectNCMoveProfileByJob",
    Child1: "MoveNoCover"
};
window.behaviorGraphNodesObject["SelectMove_JobOrHunter"] = {
    nodeName: "SelectMove_JobOrHunter",
    NodeType: "Selector",
    Child0: "SelectMoveProfileByJob",
    Child1: "MoveHunting"
};
window.behaviorGraphNodesObject["SelectMove_JobOrFlanking"] = {
    nodeName: "SelectMove_JobOrFlanking",
    NodeType: "Selector",
    Child0: "SelectMoveProfileByJob",
    Child1: "MoveFlanking"
};
window.behaviorGraphNodesObject["SelectMove_JobOrMelee"] = {
    nodeName: "SelectMove_JobOrMelee",
    NodeType: "Selector",
    Child0: "SelectMoveProfileByJob",
    Child1: "MoveMelee"
};
window.behaviorGraphNodesObject["SelectUnsafeMove_JobOrMelee"] = {
    nodeName: "SelectUnsafeMove_JobOrMelee",
    NodeType: "Selector",
    Child0: "SelectMoveProfileByJobUnsafe",
    Child1: "MoveMeleeUnsafe"
};
window.behaviorGraphNodesObject["FallBack"] = {
    nodeName: "FallBack",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "FallBackUnsafe"
};
window.behaviorGraphNodesObject["FallBackUnsafe"] = {
    nodeName: "FallBackUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindBestFallbackDestination",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["FindBestFallbackDestination"] = {
    nodeName: "FindBestFallbackDestination",
    NodeType: "Selector",
    Child0: "FindDestinationWithLoS-Defensive",
    Child1: "FindDestinationWithLoS-FallBack",
    Child2: "FindDestination-Defensive",
    Child3: "FindDestination-FallBack"
};
window.behaviorGraphNodesObject["FallBackWithLoS"] = {
    nodeName: "FallBackWithLoS",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "FallBackWithLoSUnsafe"
};
window.behaviorGraphNodesObject["FallBackWithLoSUnsafe"] = {
    nodeName: "FallBackWithLoSUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindDestinationWithLoS-FallBack",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["NCFallBackWithLoS"] = {
    nodeName: "NCFallBackWithLoS",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "NCFallBackWithLoSUnsafe"
};
window.behaviorGraphNodesObject["NCFallBackWithLoSUnsafe"] = {
    nodeName: "NCFallBackWithLoSUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "SetNoCoverMovement",
    Child3: "FindDestinationWithLoS-FallBack",
    Child4: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["FindFriendlyFallbackDestination"] = {
    nodeName: "FindFriendlyFallbackDestination",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToAllyLoS",
    Child2: "FindRestrictedDestination-FallBack"
};
window.behaviorGraphNodesObject["FallBackIfFirstAbility"] = {
    nodeName: "FallBackIfFirstAbility",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "FallBack"
};
window.behaviorGraphNodesObject["FallBackIfFirstAbilityUnsafe"] = {
    nodeName: "FallBackIfFirstAbilityUnsafe",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "FallBackUnsafe"
};
window.behaviorGraphNodesObject["FallBackWithLoSIfFirstAbility"] = {
    nodeName: "FallBackWithLoSIfFirstAbility",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "FallBackWithLoS"
};
window.behaviorGraphNodesObject["FallBackWithLoSIfFirstAbilityUnsafe"] = {
    nodeName: "FallBackWithLoSIfFirstAbilityUnsafe",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "FallBackWithLoSUnsafe"
};
window.behaviorGraphNodesObject["MoveDefensive"] = {
    nodeName: "MoveDefensive",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveDefensiveUnsafe"
};
window.behaviorGraphNodesObject["MoveDefensiveUnsafe"] = {
    nodeName: "MoveDefensiveUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindDestination-Defensive",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["NCMoveDefensive"] = {
    nodeName: "NCMoveDefensive",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "NCMoveDefensiveUnsafe"
};
window.behaviorGraphNodesObject["NCMoveDefensiveUnsafe"] = {
    nodeName: "NCMoveDefensiveUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "SetNoCoverMovement",
    Child3: "FindDestination-Defensive",
    Child4: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveDefensiveIfFirstAbility"] = {
    nodeName: "MoveDefensiveIfFirstAbility",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveDefensive"
};
window.behaviorGraphNodesObject["MoveDefensiveIfFirstAbilityUnsafe"] = {
    nodeName: "MoveDefensiveIfFirstAbilityUnsafe",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveDefensiveUnsafe"
};
window.behaviorGraphNodesObject["MoveDefensiveWithLoS"] = {
    nodeName: "MoveDefensiveWithLoS",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveDefensiveWithLoSUnsafe"
};
window.behaviorGraphNodesObject["MoveDefensiveWithLoSUnsafe"] = {
    nodeName: "MoveDefensiveWithLoSUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindDestinationWithLoS-Defensive",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveDefensiveWithLoSIfFirstAbility"] = {
    nodeName: "MoveDefensiveWithLoSIfFirstAbility",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveDefensiveWithLoS"
};
window.behaviorGraphNodesObject["MoveDefensiveWithLoSIfFirstAbilityUnsafe"] = {
    nodeName: "MoveDefensiveWithLoSIfFirstAbilityUnsafe",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveDefensiveWithLoSUnsafe"
};
window.behaviorGraphNodesObject["MoveStandard"] = {
    nodeName: "MoveStandard",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveStandardUnsafe"
};
window.behaviorGraphNodesObject["MoveStandardUnsafe"] = {
    nodeName: "MoveStandardUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "FindDestination-Standard",
    Child2: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveStandardIfFirstAbility"] = {
    nodeName: "MoveStandardIfFirstAbility",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveStandard"
};
window.behaviorGraphNodesObject["MoveStandardWithLoS"] = {
    nodeName: "MoveStandardWithLoS",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveStandardWithLoSUnsafe"
};
window.behaviorGraphNodesObject["MoveStandardWithLoSUnsafe"] = {
    nodeName: "MoveStandardWithLoSUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindDestinationWithLoS-Standard",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveStandardWithLoSIfFirstAbility"] = {
    nodeName: "MoveStandardWithLoSIfFirstAbility",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveStandardWithLoS"
};
window.behaviorGraphNodesObject["MoveStandardWithLoSIfFirstAbilityUnsafe"] = {
    nodeName: "MoveStandardWithLoSIfFirstAbilityUnsafe",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveStandardWithLoSUnsafe"
};
window.behaviorGraphNodesObject["MoveAggressiveUnsafe"] = {
    nodeName: "MoveAggressiveUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindDestinationWithLoS-Aggressive",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveAggressive"] = {
    nodeName: "MoveAggressive",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveAggressiveUnsafe"
};
window.behaviorGraphNodesObject["MoveAggressiveIfFirstAbility"] = {
    nodeName: "MoveAggressiveIfFirstAbility",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveAggressive"
};
window.behaviorGraphNodesObject["MoveAggressiveIfFirstAbilityUnsafe"] = {
    nodeName: "MoveAggressiveIfFirstAbilityUnsafe",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveAggressiveUnsafe"
};
window.behaviorGraphNodesObject["NCMoveAggressiveUnsafe"] = {
    nodeName: "NCMoveAggressiveUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "SetNoCoverMovement",
    Child3: "FindDestinationWithLoS-Aggressive",
    Child4: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["NCMoveAggressive"] = {
    nodeName: "NCMoveAggressive",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "NCMoveAggressiveUnsafe"
};
window.behaviorGraphNodesObject["MoveNoCoverUnsafe"] = {
    nodeName: "MoveNoCoverUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "SetNoCoverMovement",
    Child3: "FindDestination-Fanatic",
    Child4: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveNoCover"] = {
    nodeName: "MoveNoCover",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveNoCoverUnsafe"
};
window.behaviorGraphNodesObject["MoveNoCoverIfFirstAbility"] = {
    nodeName: "MoveNoCoverIfFirstAbility",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveNoCover"
};
window.behaviorGraphNodesObject["MoveNoCoverIfFirstAbilityUnsafe"] = {
    nodeName: "MoveNoCoverIfFirstAbilityUnsafe",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveNoCoverUnsafe"
};
window.behaviorGraphNodesObject["MoveHuntingUnsafe"] = {
    nodeName: "MoveHuntingUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "FindDestinationForHunter",
    Child2: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveHunting"] = {
    nodeName: "MoveHunting",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveHuntingUnsafe"
};
window.behaviorGraphNodesObject["FindDestinationForHunter"] = {
    nodeName: "FindDestinationForHunter",
    NodeType: "Selector",
    Child0: "HuntWithLoS",
    Child1: "BestHuntDestinationWithoutLoS"
};
window.behaviorGraphNodesObject["HuntWithLoS"] = {
    nodeName: "HuntWithLoS",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "RestrictToEnemyLoS",
    Child2: "FindDestination-Hunting"
};
window.behaviorGraphNodesObject["BestHuntDestinationWithoutLoS"] = {
    nodeName: "BestHuntDestinationWithoutLoS",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "FindDestination-Hunting"
};
window.behaviorGraphNodesObject["MoveAdvanceToCover"] = {
    nodeName: "MoveAdvanceToCover",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveAdvanceToCoverUnsafe"
};
window.behaviorGraphNodesObject["MoveAdvanceToCoverUnsafe"] = {
    nodeName: "MoveAdvanceToCoverUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindDestination-AdvanceCover",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["NCMoveAdvanceToCover"] = {
    nodeName: "NCMoveAdvanceToCover",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "NCMoveAdvanceToCoverUnsafe"
};
window.behaviorGraphNodesObject["NCMoveAdvanceToCoverUnsafe"] = {
    nodeName: "NCMoveAdvanceToCoverUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "SetNoCoverMovement",
    Child3: "FindDestination-AdvanceCover",
    Child4: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveFlanking"] = {
    nodeName: "MoveFlanking",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveFlankingUnsafe"
};
window.behaviorGraphNodesObject["MoveFlankingUnsafe"] = {
    nodeName: "MoveFlankingUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindDestinationWithLoS-Flanking",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveFlankingIfFirstAbility"] = {
    nodeName: "MoveFlankingIfFirstAbility",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveFlanking"
};
window.behaviorGraphNodesObject["MoveFlankingIfFirstAbilityUnsafe"] = {
    nodeName: "MoveFlankingIfFirstAbilityUnsafe",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveFlankingUnsafe"
};
window.behaviorGraphNodesObject["NCMoveFlanking"] = {
    nodeName: "NCMoveFlanking",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "NCMoveFlankingUnsafe"
};
window.behaviorGraphNodesObject["NCMoveFlankingUnsafe"] = {
    nodeName: "NCMoveFlankingUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "SetNoCoverMovement",
    Child3: "FindDestinationWithLoS-Flanking",
    Child4: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveMelee"] = {
    nodeName: "MoveMelee",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveMeleeUnsafe"
};
window.behaviorGraphNodesObject["MoveMeleeUnsafe"] = {
    nodeName: "MoveMeleeUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindMeleeDestination",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveMeleeDefensive"] = {
    nodeName: "MoveMeleeDefensive",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveMeleeDefensiveUnsafe"
};
window.behaviorGraphNodesObject["MoveMeleeDefensiveUnsafe"] = {
    nodeName: "MoveMeleeDefensiveUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindMeleeDestinationDefensive",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveMeleeFANATIC"] = {
    nodeName: "MoveMeleeFANATIC",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveMeleeFANATICUnsafe"
};
window.behaviorGraphNodesObject["MoveMeleeFANATICUnsafe"] = {
    nodeName: "MoveMeleeFANATICUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "FindMeleeDestinationFANATIC",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveToPotentialMeleeFANATIC"] = {
    nodeName: "MoveToPotentialMeleeFANATIC",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveToPotentialMeleeFANATICUnsafe"
};
window.behaviorGraphNodesObject["MoveToPotentialMeleeFANATICUnsafe"] = {
    nodeName: "MoveToPotentialMeleeFANATICUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "FindPotentialMeleeDestinationFANATIC",
    Child2: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveMeleeIfFirstAbility"] = {
    nodeName: "MoveMeleeIfFirstAbility",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveMelee"
};
window.behaviorGraphNodesObject["MoveMeleeDefensiveIfFirstAbility"] = {
    nodeName: "MoveMeleeDefensiveIfFirstAbility",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveMeleeDefensive"
};
window.behaviorGraphNodesObject["MoveMeleeIfFirstAbilityFANATIC"] = {
    nodeName: "MoveMeleeIfFirstAbilityFANATIC",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveMeleeFANATIC"
};
window.behaviorGraphNodesObject["MoveToPotentialMeleeIfFirstAbilityFANATIC"] = {
    nodeName: "MoveToPotentialMeleeIfFirstAbilityFANATIC",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "IncludeAlliesAsMeleeTargets",
    Child2: "MoveToPotentialMeleeFANATIC"
};
window.behaviorGraphNodesObject["MoveMeleeIfFirstAbilityUnsafe"] = {
    nodeName: "MoveMeleeIfFirstAbilityUnsafe",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveMeleeUnsafe"
};
window.behaviorGraphNodesObject["MoveMeleeDefensiveIfFirstAbilityUnsafe"] = {
    nodeName: "MoveMeleeDefensiveIfFirstAbilityUnsafe",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveMeleeDefensiveUnsafe"
};
window.behaviorGraphNodesObject["MoveMeleeIfFirstAbilityFANATICUnsafe"] = {
    nodeName: "MoveMeleeIfFirstAbilityFANATICUnsafe",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MoveMeleeFANATICUnsafe"
};
window.behaviorGraphNodesObject["MoveMeleeDash"] = {
    nodeName: "MoveMeleeDash",
    NodeType: "Selector",
    Child0: "IfFirstActionMoveMeleeDash",
    Child1: "MoveMelee"
};
window.behaviorGraphNodesObject["MoveMeleeDashUnsafe"] = {
    nodeName: "MoveMeleeDashUnsafe",
    NodeType: "Selector",
    Child0: "IfFirstActionMoveMeleeDashUnsafe",
    Child1: "MoveMeleeUnsafe"
};
window.behaviorGraphNodesObject["IfFirstActionMoveMeleeDash"] = {
    nodeName: "IfFirstActionMoveMeleeDash",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AttemptMoveMeleeDash"
};
window.behaviorGraphNodesObject["IfFirstActionMoveMeleeDashUnsafe"] = {
    nodeName: "IfFirstActionMoveMeleeDashUnsafe",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AttemptMoveMeleeDashUnsafe"
};
window.behaviorGraphNodesObject["AttemptMoveMeleeDash"] = {
    nodeName: "AttemptMoveMeleeDash",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "AttemptMoveMeleeDashUnsafe"
};
window.behaviorGraphNodesObject["AttemptMoveMeleeDashUnsafe"] = {
    nodeName: "AttemptMoveMeleeDashUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "UseDashMovement",
    Child3: "FindMeleeDestination",
    Child4: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveMeleeDashFANATIC"] = {
    nodeName: "MoveMeleeDashFANATIC",
    NodeType: "Selector",
    Child0: "IfFirstActionMoveMeleeDashFANATIC",
    Child1: "MoveMeleeFANATIC"
};
window.behaviorGraphNodesObject["MoveMeleeDashFANATICUnsafe"] = {
    nodeName: "MoveMeleeDashFANATICUnsafe",
    NodeType: "Selector",
    Child0: "IfFirstActionMoveMeleeDashFANATICUnsafe",
    Child1: "MoveMeleeFANATICUnsafe"
};
window.behaviorGraphNodesObject["IfFirstActionMoveMeleeDashFANATIC"] = {
    nodeName: "IfFirstActionMoveMeleeDashFANATIC",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AttemptMoveMeleeDashFANATIC"
};
window.behaviorGraphNodesObject["IfFirstActionMoveMeleeDashFANATICUnsafe"] = {
    nodeName: "IfFirstActionMoveMeleeDashFANATICUnsafe",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AttemptMoveMeleeDashFANATICUnsafe"
};
window.behaviorGraphNodesObject["AttemptMoveMeleeDashFANATIC"] = {
    nodeName: "AttemptMoveMeleeDashFANATIC",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "AttemptMoveMeleeDashFANATICUnsafe"
};
window.behaviorGraphNodesObject["AttemptMoveMeleeDashFANATICUnsafe"] = {
    nodeName: "AttemptMoveMeleeDashFANATICUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "UseDashMovement",
    Child3: "FindMeleeDestinationFANATIC",
    Child4: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveMeleePriorityTarget"] = {
    nodeName: "MoveMeleePriorityTarget",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveMeleePriorityTargetUnsafe"
};
window.behaviorGraphNodesObject["MoveMeleePriorityTargetUnsafe"] = {
    nodeName: "MoveMeleePriorityTargetUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "UseDashMovement",
    Child3: "FindPriorityMeleeDestination",
    Child4: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["FindMeleeDestination"] = {
    nodeName: "FindMeleeDestination",
    NodeType: "Sequence",
    Child0: "IncludeCiviliansIfTerrorist",
    Child1: "SelectPotentialMeleeTarget",
    Child2: "RestrictToPotentialTargetRange-StandardMelee",
    Child3: "FindRestrictedDestination-Melee"
};
window.behaviorGraphNodesObject["FindMeleeDestinationDefensive"] = {
    nodeName: "FindMeleeDestinationDefensive",
    NodeType: "Sequence",
    Child0: "IncludeCiviliansIfTerrorist",
    Child1: "SelectPotentialMeleeTarget",
    Child2: "RestrictToPotentialTargetRange-StandardMelee",
    Child3: "FindRestrictedDestination-MeleeDefensive"
};
window.behaviorGraphNodesObject["FindMeleeDestinationFANATIC"] = {
    nodeName: "FindMeleeDestinationFANATIC",
    NodeType: "Sequence",
    Child0: "IncludeCiviliansIfTerrorist",
    Child1: "SelectPotentialMeleeTarget",
    Child2: "RestrictToPotentialTargetRange-StandardMelee",
    Child3: "FindRestrictedDestination-MeleeFanatic"
};
window.behaviorGraphNodesObject["FindPriorityMeleeDestination"] = {
    nodeName: "FindPriorityMeleeDestination",
    NodeType: "Sequence",
    Child0: "SelectPotentialMeleePriorityTarget",
    Child1: "RestrictToPotentialTargetRange-StandardMelee",
    Child2: "FindRestrictedDestination-MeleeFanatic"
};
window.behaviorGraphNodesObject["FindPotentialMeleeDestinationFANATIC"] = {
    nodeName: "FindPotentialMeleeDestinationFANATIC",
    NodeType: "Sequence",
    Child0: "IncludeCiviliansIfTerrorist",
    Child1: "RestrictToPotentialTargetRange-StandardMelee",
    Child2: "FindRestrictedDestination-MeleeFanatic"
};
window.behaviorGraphNodesObject["TryTerroristMoveMeleeFANATICUnsafe"] = {
    nodeName: "TryTerroristMoveMeleeFANATICUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "IncludeCiviliansIfTerrorist",
    Child3: "FindMeleeDestinationFANATIC",
    Child4: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["TryTerroristMoveMeleeFANATIC"] = {
    nodeName: "TryTerroristMoveMeleeFANATIC",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "TryTerroristMoveMeleeFANATICUnsafe"
};
window.behaviorGraphNodesObject["MoveRandomUnsafe"] = {
    nodeName: "MoveRandomUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "FindDestination-RandomNoCover",
    Child2: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveRandom"] = {
    nodeName: "MoveRandom",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveRandomUnsafe"
};
window.behaviorGraphNodesObject["MoveStandardWithDestination"] = {
    nodeName: "MoveStandardWithDestination",
    NodeType: "Selector",
    Child0: "MoveStandardWithDestinationUnsafe",
    Child1: "DeleteTopAlertAndHeatSeek"
};
window.behaviorGraphNodesObject["MoveStandardWithDestinationUnsafe"] = {
    nodeName: "MoveStandardWithDestinationUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "HasValidAlertDataLocation",
    Child2: "FindAlertDataMovementDestination",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["DeleteTopAlertAndHeatSeek"] = {
    nodeName: "DeleteTopAlertAndHeatSeek",
    NodeType: "Sequence",
    Child0: "SSDeleteAlertDataIfValid",
    Child1: "SelectHeatSeekMove"
};
window.behaviorGraphNodesObject["SSDeleteAlertDataIfValid"] = {
    nodeName: "SSDeleteAlertDataIfValid",
    NodeType: "Successor",
    Child0: "DeleteAlertDataIfValid"
};
window.behaviorGraphNodesObject["DeleteAlertDataIfValid"] = {
    nodeName: "DeleteAlertDataIfValid",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "HasValidAlertDataLocation",
    Child2: "DeleteCurrentAlertData"
};
window.behaviorGraphNodesObject["HeatSeekNearestUnconcealed"] = {
    nodeName: "HeatSeekNearestUnconcealed",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectHeatSeekMove"] = {
    nodeName: "SelectHeatSeekMove",
    NodeType: "Sequence",
    Child0: "UseDashMovement",
    Child1: "HeatSeekNearestUnconcealed",
    Child2: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["SetAlertDataStack"] = {
    nodeName: "SetAlertDataStack",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SetNextAlertData"] = {
    nodeName: "SetNextAlertData",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["DeleteCurrentAlertData"] = {
    nodeName: "DeleteCurrentAlertData",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["UpdateBestAlertData"] = {
    nodeName: "UpdateBestAlertData",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["AlertDataMovementUseCover"] = {
    nodeName: "AlertDataMovementUseCover",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["AlertDataMovementIgnoreCover"] = {
    nodeName: "AlertDataMovementIgnoreCover",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindAlertDataMovementDestination"] = {
    nodeName: "FindAlertDataMovementDestination",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["AlertDataIsAbsoluteKnowledge"] = {
    nodeName: "AlertDataIsAbsoluteKnowledge",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AlertDataWasSoundMade"] = {
    nodeName: "AlertDataWasSoundMade",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AlertDataWasEnemyThere"] = {
    nodeName: "AlertDataWasEnemyThere",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AlertDataIsCorpseThere"] = {
    nodeName: "AlertDataIsCorpseThere",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AlertDataIsAggressive"] = {
    nodeName: "AlertDataIsAggressive",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AlertDataTileIsVisible"] = {
    nodeName: "AlertDataTileIsVisible",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AlertDataTileNotVisible"] = {
    nodeName: "AlertDataTileNotVisible",
    NodeType: "Inverter",
    Child0: "AlertDataTileIsVisible"
};
window.behaviorGraphNodesObject["AlertDataHasTag-Defend"] = {
    nodeName: "AlertDataHasTag-Defend",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AlertDataHasTag-Advance"] = {
    nodeName: "AlertDataHasTag-Advance",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AlertDataIsType-SeesSpottedUnit"] = {
    nodeName: "AlertDataIsType-SeesSpottedUnit",
    NodeType: "Condition" //  red alert trigger
};
window.behaviorGraphNodesObject["AlertDataIsType-ThrottlingBeacon"] = {
    nodeName: "AlertDataIsType-ThrottlingBeacon",
    NodeType: "Condition" //  group-specific trigger to influence activity-balancing from the FightManager.
};
window.behaviorGraphNodesObject["AlertDataIsType-MapwideAlert"] = {
    nodeName: "AlertDataIsType-MapwideAlert",
    NodeType: "Condition" //  Red alert trigger", kicked off by Kismet", with lower priority than visible enemies.
};
window.behaviorGraphNodesObject["AlertDataIsType-TookDamage"] = {
    nodeName: "AlertDataIsType-TookDamage",
    NodeType: "Condition" //  Conditional red alert trigger (with LOS to damage instigator"
};
window.behaviorGraphNodesObject["AlertDataIsType-TakingFire"] = {
    nodeName: "AlertDataIsType-TakingFire",
    NodeType: "Condition" //  Conditional red alert trigger (with LOS to shot instigator and within sound range"
};
window.behaviorGraphNodesObject["AlertDataIsType-DetectedNewCorpse"] = {
    nodeName: "AlertDataIsType-DetectedNewCorpse",
    NodeType: "Condition" //  Yellow alert ...
};
window.behaviorGraphNodesObject["AlertDataIsType-DetectedAllyTakingDamage"] = {
    nodeName: "AlertDataIsType-DetectedAllyTakingDamage",
    NodeType: "Condition" //  Yellow alert ...
};
window.behaviorGraphNodesObject["AlertDataIsType-DetectedSound"] = {
    nodeName: "AlertDataIsType-DetectedSound",
    NodeType: "Condition" //  Yellow alert ...
};
window.behaviorGraphNodesObject["AlertDataIsType-AlertedByYell"] = {
    nodeName: "AlertDataIsType-AlertedByYell",
    NodeType: "Condition" // 
};
window.behaviorGraphNodesObject["AlertDataIsType-AlertedByCommLink"] = {
    nodeName: "AlertDataIsType-AlertedByCommLink",
    NodeType: "Condition" // 
};
window.behaviorGraphNodesObject["AlertDataIsType-CivilianRaisedAlarm"] = {
    nodeName: "AlertDataIsType-CivilianRaisedAlarm",
    NodeType: "Condition" // 
};
window.behaviorGraphNodesObject["AlertDataIsType-XCOMAchievedObjective"] = {
    nodeName: "AlertDataIsType-XCOMAchievedObjective",
    NodeType: "Condition" // 
};
window.behaviorGraphNodesObject["AlertDataIsType-SeesExplosion"] = {
    nodeName: "AlertDataIsType-SeesExplosion",
    NodeType: "Condition" // 
};
window.behaviorGraphNodesObject["AlertDataIsType-SeesSmoke"] = {
    nodeName: "AlertDataIsType-SeesSmoke",
    NodeType: "Condition" // 
};
window.behaviorGraphNodesObject["AlertDataIsType-SeesFire"] = {
    nodeName: "AlertDataIsType-SeesFire",
    NodeType: "Condition" // 
};
window.behaviorGraphNodesObject["AlertDataIsType-SeesAlertedAllies"] = {
    nodeName: "AlertDataIsType-SeesAlertedAllies",
    NodeType: "Condition" // 
};
window.behaviorGraphNodesObject["AlertDataWasSoundScary"] = {
    nodeName: "AlertDataWasSoundScary",
    NodeType: "StatCondition",
    Param0: "AlertDataRadius",
    Param1: ">:",
    Param2: "10"
};
window.behaviorGraphNodesObject["IsAlertDataKismet"] = {
    nodeName: "IsAlertDataKismet",
    NodeType: "Selector",
    Child0: "AlertDataHasTag-Defend",
    Child1: "AlertDataHasTag-Advance"
};
window.behaviorGraphNodesObject["IsAlertDataNotKismet"] = {
    nodeName: "IsAlertDataNotKismet",
    NodeType: "Inverter",
    Child0: "IsAlertDataKismet"
};
window.behaviorGraphNodesObject["IsAlertDataScary"] = {
    nodeName: "IsAlertDataScary",
    NodeType: "Selector",
    Child0: "AlertDataIsType-TakingFire",
    Child1: "AlertDataIsType-DetectedAllyTakingDamage",
    Child2: "AlertDataIsType-SeesExplosion",
    Child3: "AlertDataIsType-SeesAlertedAllies"
};
window.behaviorGraphNodesObject["IsAlertDataNOTScary"] = {
    nodeName: "IsAlertDataNOTScary",
    NodeType: "Inverter",
    Child0: "IsAlertDataScary"
};
window.behaviorGraphNodesObject["IfAlertDataIsScary"] = {
    nodeName: "IfAlertDataIsScary",
    NodeType: "Selector",
    Child0: "ScoreIfAlertDataScary",
    Child1: "AddToAlertDataScore_0"
};
window.behaviorGraphNodesObject["ScoreIfAlertDataScary"] = {
    nodeName: "ScoreIfAlertDataScary",
    NodeType: "Sequence",
    Child0: "IsAlertDataScary",
    Child1: "AddToAlertDataScore_50"
};
window.behaviorGraphNodesObject["PurgeAlertDataIfNotScary"] = {
    nodeName: "PurgeAlertDataIfNotScary",
    NodeType: "Sequence",
    Child0: "IsAlertDataNOTScary",
    Child1: "DeleteCurrentAlertData"
};
window.behaviorGraphNodesObject["HasValidAlertDataLocation"] = {
    nodeName: "HasValidAlertDataLocation",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IterateAlertDataForVisibility"] = {
    nodeName: "IterateAlertDataForVisibility",
    NodeType: "RepeatUntilFail",
    Child0: "CheckVisibilityOnAlert"
};
window.behaviorGraphNodesObject["CheckVisibilityOnAlert"] = {
    nodeName: "CheckVisibilityOnAlert",
    NodeType: "Sequence",
    Child0: "SetNextAlertData",
    Child1: "SSScoreAlertDataVisibility",
    Child2: "UpdateBestAlertData",
    Child3: "EarlyExitIfFoundValidAlert"
};
window.behaviorGraphNodesObject["SSScoreAlertDataVisibility"] = {
    nodeName: "SSScoreAlertDataVisibility",
    NodeType: "Successor",
    Child0: "ScoreAlertDataVisibility"
};
window.behaviorGraphNodesObject["ScoreAlertDataVisibility"] = {
    nodeName: "ScoreAlertDataVisibility",
    NodeType: "Sequence",
    Child0: "AlertDataTileIsVisible",
    Child1: "AddToAlertDataScore_100"
};
window.behaviorGraphNodesObject["EarlyExitIfFoundValidAlert"] = {
    nodeName: "EarlyExitIfFoundValidAlert",
    NodeType: "Inverter",
    Child0: "HasValidAlertDataLocation" //  return false if we have a alert data score > 0.
};
window.behaviorGraphNodesObject["GenericAlertHandler"] = {
    nodeName: "GenericAlertHandler",
    NodeType: "Selector",
    Child0: "GenericOrangeMovement",
    Child1: "GenericYellowMovement",
    Child2: "SelectHeatSeekMove"
};
window.behaviorGraphNodesObject["GenericOrangeMovement"] = {
    nodeName: "GenericOrangeMovement",
    NodeType: "Sequence",
    Child0: "IsOrangeAlert",
    Child1: "TrySelectOrangeAlertAction"
};
window.behaviorGraphNodesObject["GenericYellowMovement"] = {
    nodeName: "GenericYellowMovement",
    NodeType: "Sequence",
    Child0: "IsYellowAlert",
    Child1: "TrySelectYellowAlertAction"
};
window.behaviorGraphNodesObject["NoEnemySpotted"] = {
    nodeName: "NoEnemySpotted",
    NodeType: "Inverter",
    Child0: "AlertDataIsAbsoluteKnowledge"
};
window.behaviorGraphNodesObject["IsEnemySpotted"] = {
    nodeName: "IsEnemySpotted",
    NodeType: "Selector",
    Child0: "IsRedAlert",
    Child1: "IsOrangeAlert"
};
window.behaviorGraphNodesObject["TrySelectOrangeAlertAction"] = {
    nodeName: "TrySelectOrangeAlertAction",
    NodeType: "Sequence",
    Child0: "SelectAlertData",
    Child1: "HandleAlertData"
};
window.behaviorGraphNodesObject["SelectAlertData"] = {
    nodeName: "SelectAlertData",
    NodeType: "Sequence",
    Child0: "SetAlertDataStack",
    Child1: "GenericSelectBestAlert",
    Child2: "HasValidAlertDataLocation"
};
window.behaviorGraphNodesObject["HandleAlertData"] = {
    nodeName: "HandleAlertData",
    NodeType: "Selector",
    Child0: "TryAttackPriorityTarget",
    Child1: "MoveToAlertData"
};
window.behaviorGraphNodesObject["MoveToAlertData"] = {
    nodeName: "MoveToAlertData",
    NodeType: "Sequence",
    Child0: "SetAlertDataStack",
    Child1: "GenericSelectBestAlert",
    Child2: "HasValidAlertDataLocation",
    Child3: "AlertDataMovementUseCover",
    Child4: "MoveStandardWithDestination"
};
window.behaviorGraphNodesObject["TrySelectYellowAlertAction"] = {
    nodeName: "TrySelectYellowAlertAction",
    NodeType: "Selector",
    Child0: "TryAttackPriorityTarget",
    Child1: "YellowAlertMove"
};
window.behaviorGraphNodesObject["YellowAlertMove"] = {
    nodeName: "YellowAlertMove",
    NodeType: "Sequence",
    Child0: "SetAlertDataStack",
    Child1: "GenericSelectBestAlert",
    Child2: "HasValidAlertDataLocation",
    Child3: "MoveStandardWithDestination"
};
window.behaviorGraphNodesObject["HuntEnemy"] = {
    nodeName: "HuntEnemy",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "NotLastActionPoint",
    Child2: "SetAlertDataStack",
    Child3: "GenericSelectBestAlert",
    Child4: "HasValidAlertDataLocation",
    Child5: "MoveStandardWithDestination"
};
window.behaviorGraphNodesObject["HuntEnemyWithCover"] = {
    nodeName: "HuntEnemyWithCover",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "SetAlertDataStack",
    Child2: "GenericSelectBestAlert",
    Child3: "HasValidAlertDataLocation",
    Child4: "AlertDataMovementUseCover",
    Child5: "MoveStandardWithDestination"
};
window.behaviorGraphNodesObject["HuntEnemyUnsafe"] = {
    nodeName: "HuntEnemyUnsafe",
    NodeType: "Sequence",
    Child0: "SetAlertDataStack",
    Child1: "GenericSelectBestAlert",
    Child2: "HasValidAlertDataLocation",
    Child3: "MoveStandardWithDestinationUnsafe"
};
window.behaviorGraphNodesObject["MoveToAlertIfNotVisible"] = {
    nodeName: "MoveToAlertIfNotVisible",
    NodeType: "Sequence",
    Child0: "HasValidAlertDataLocation",
    Child1: "AlertDataTileNotVisible",
    Child2: "AlertDataMovementUseCover",
    Child3: "MoveStandardWithDestination"
};
window.behaviorGraphNodesObject["MoveToAlert"] = {
    nodeName: "MoveToAlert",
    NodeType: "Selector",
    Child0: "TryAlertMoveWithCover",
    Child1: "TakeAlertMoveWithoutCover"
};
window.behaviorGraphNodesObject["TryAlertMoveWithCover"] = {
    nodeName: "TryAlertMoveWithCover",
    NodeType: "Sequence",
    Child0: "AlertDataMovementUseCover",
    Child1: "MoveStandardWithDestination"
};
window.behaviorGraphNodesObject["TakeAlertMoveWithoutCover"] = {
    nodeName: "TakeAlertMoveWithoutCover",
    NodeType: "Sequence",
    Child0: "AlertDataMovementIgnoreCover",
    Child1: "MoveStandardWithDestination"
};
window.behaviorGraphNodesObject["MoveToAlertUnsafe"] = {
    nodeName: "MoveToAlertUnsafe",
    NodeType: "Selector",
    Child0: "TryAlertMoveWithCoverUnsafe",
    Child1: "TakeAlertMoveWithoutCoverUnsafe"
};
window.behaviorGraphNodesObject["TryAlertMoveWithCoverUnsafe"] = {
    nodeName: "TryAlertMoveWithCoverUnsafe",
    NodeType: "Sequence",
    Child0: "AlertDataMovementUseCover",
    Child1: "MoveStandardWithDestinationUnsafe"
};
window.behaviorGraphNodesObject["TakeAlertMoveWithoutCoverUnsafe"] = {
    nodeName: "TakeAlertMoveWithoutCoverUnsafe",
    NodeType: "Sequence",
    Child0: "AlertDataMovementIgnoreCover",
    Child1: "MoveStandardWithDestinationUnsafe"
};
window.behaviorGraphNodesObject["GenericSelectBestAlert"] = {
    nodeName: "GenericSelectBestAlert",
    NodeType: "RepeatUntilFail",
    Child0: "GenericEvaluateAlertData"
};
window.behaviorGraphNodesObject["GenericEvaluateAlertData"] = {
    nodeName: "GenericEvaluateAlertData",
    NodeType: "Sequence",
    Child0: "SetNextAlertData",
    Child1: "GenericScoreAlertData",
    Child2: "UpdateBestAlertData"
};
window.behaviorGraphNodesObject["GenericScoreAlertData"] = {
    nodeName: "GenericScoreAlertData",
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
window.behaviorGraphNodesObject["IfAlertIsSpottedTarget"] = {
    nodeName: "IfAlertIsSpottedTarget",
    NodeType: "Selector",
    Child0: "ScoreAlert_AbsoluteKnowledge",
    Child1: "ScoreAlert_FormerKnowledge",
    Child2: "AddToAlertDataScore_0"
};
window.behaviorGraphNodesObject["ScoreAlert_AbsoluteKnowledge"] = {
    nodeName: "ScoreAlert_AbsoluteKnowledge",
    NodeType: "Sequence",
    Child0: "AlertDataIsAbsoluteKnowledge",
    Child1: "AddToAlertDataScore_100"
};
window.behaviorGraphNodesObject["ScoreAlert_FormerKnowledge"] = {
    nodeName: "ScoreAlert_FormerKnowledge",
    NodeType: "Sequence",
    Child0: "AlertDataWasEnemyThere",
    Child1: "AddToAlertDataScore_50"
};
window.behaviorGraphNodesObject["IfAlertIsSpottedCorpse"] = {
    nodeName: "IfAlertIsSpottedCorpse",
    NodeType: "Selector",
    Child0: "ScoreAlert_SpottedCorpse",
    Child1: "AddToAlertDataScore_0"
};
window.behaviorGraphNodesObject["ScoreAlert_SpottedCorpse"] = {
    nodeName: "ScoreAlert_SpottedCorpse",
    NodeType: "Sequence",
    Child0: "AlertDataIsCorpseThere",
    Child1: "AddToAlertDataScore_30"
};
window.behaviorGraphNodesObject["IfAlertIsHeardNoise"] = {
    nodeName: "IfAlertIsHeardNoise",
    NodeType: "Selector",
    Child0: "ScoreAlert_HeardNoise",
    Child1: "AddToAlertDataScore_0"
};
window.behaviorGraphNodesObject["ScoreAlert_HeardNoise"] = {
    nodeName: "ScoreAlert_HeardNoise",
    NodeType: "Sequence",
    Child0: "AlertDataWasSoundMade",
    Child1: "AddToAlertDataScore_15",
    Child2: "IfAlertNoiseIsScary"
};
window.behaviorGraphNodesObject["IfAlertNoiseIsScary"] = {
    nodeName: "IfAlertNoiseIsScary",
    NodeType: "Selector",
    Child0: "ScoreAlert_NoiseScary",
    Child1: "AddToAlertDataScore_0"
};
window.behaviorGraphNodesObject["ScoreAlert_NoiseScary"] = {
    nodeName: "ScoreAlert_NoiseScary",
    NodeType: "Sequence",
    Child0: "AlertDataWasSoundScary",
    Child1: "AddToAlertDataScore_10"
};
window.behaviorGraphNodesObject["IfAlertIsDangerous"] = {
    nodeName: "IfAlertIsDangerous",
    NodeType: "Selector",
    Child0: "ScoreAlert_Dangerous",
    Child1: "AddToAlertDataScore_0"
};
window.behaviorGraphNodesObject["ScoreAlert_Dangerous"] = {
    nodeName: "ScoreAlert_Dangerous",
    NodeType: "Sequence",
    Child0: "AlertDataIsAggressive",
    Child1: "AddToAlertDataScore_25"
};
window.behaviorGraphNodesObject["ScoreAlertDataAge"] = {
    nodeName: "ScoreAlertDataAge",
    NodeType: "Selector",
    Child0: "IsAlertDataKismet",
    Child1: "IfAlertDataOld",
    Child2: "IfAlertDataStale",
    Child3: "IfAlertDataRecent",
    Child4: "IfAlertDataFresh",
    Child5: "AddToAlertDataScore_0"
};
window.behaviorGraphNodesObject["IfAlertDataFresh"] = {
    nodeName: "IfAlertDataFresh",
    NodeType: "Sequence",
    Child0: "IsAlertDataFresh",
    Child1: "AddToAlertDataScore_-5"
};
window.behaviorGraphNodesObject["IsAlertDataFresh"] = {
    nodeName: "IsAlertDataFresh",
    NodeType: "StatCondition",
    Param0: "AlertDataAge",
    Param1: ">:",
    Param2: "1"
};
window.behaviorGraphNodesObject["IfAlertDataRecent"] = {
    nodeName: "IfAlertDataRecent",
    NodeType: "Sequence",
    Child0: "IsAlertDataRecent",
    Child1: "AddToAlertDataScore_-10"
};
window.behaviorGraphNodesObject["IsAlertDataRecent"] = {
    nodeName: "IsAlertDataRecent",
    NodeType: "StatCondition",
    Param0: "AlertDataAge",
    Param1: ">:",
    Param2: "2"
};
window.behaviorGraphNodesObject["IfAlertDataStale"] = {
    nodeName: "IfAlertDataStale",
    NodeType: "Sequence",
    Child0: "IsAlertDataStale",
    Child1: "PurgeAlertDataIfNotScary",
    Child2: "AddToAlertDataScore_-15"
};
window.behaviorGraphNodesObject["IsAlertDataStale"] = {
    nodeName: "IsAlertDataStale",
    NodeType: "StatCondition",
    Param0: "AlertDataAge",
    Param1: ">:",
    Param2: "4"
};
window.behaviorGraphNodesObject["IfAlertDataOld"] = {
    nodeName: "IfAlertDataOld",
    NodeType: "Sequence",
    Child0: "IsAlertDataOld",
    Child1: "DeleteCurrentAlertData",
    Child2: "AddToAlertDataScore_-100"
};
window.behaviorGraphNodesObject["IsAlertDataOld"] = {
    nodeName: "IsAlertDataOld",
    NodeType: "StatCondition",
    Param0: "AlertDataAge",
    Param1: ">:",
    Param2: "6"
};
window.behaviorGraphNodesObject["SSScoreInvalidAlertData"] = {
    nodeName: "SSScoreInvalidAlertData",
    NodeType: "Successor",
    Child0: "ScoreInvalidAlertData"
};
window.behaviorGraphNodesObject["ScoreInvalidAlertData"] = {
    nodeName: "ScoreInvalidAlertData",
    NodeType: "Sequence",
    Child0: "IsAlertNotValidTarget",
    Child1: "AddToAlertDataScore_-500"
};
window.behaviorGraphNodesObject["IsAlertNotValidTarget"] = {
    nodeName: "IsAlertNotValidTarget",
    NodeType: "Selector",
    Child0: "IsAlertNotValidTarget_UnitIsNotAttackable",
    Child1: "IsAlertNotValidTarget_LastResortUnit"
};
window.behaviorGraphNodesObject["IsAlertNotValidTarget_UnitIsNotAttackable"] = {
    nodeName: "IsAlertNotValidTarget_UnitIsNotAttackable",
    NodeType: "Sequence",
    Child0: "TargetIsNotAttackable",
    Child1: "DeleteCurrentAlertData"
};
window.behaviorGraphNodesObject["IsAlertNotValidTarget_LastResortUnit"] = {
    nodeName: "IsAlertNotValidTarget_LastResortUnit",
    NodeType: "Sequence",
    Child0: "HasNonLastResortEnemies",
    Child1: "IsLastResortTarget"
};
window.behaviorGraphNodesObject["ScoreAlertDataDistance"] = {
    nodeName: "ScoreAlertDataDistance",
    NodeType: "Selector",
    Child0: "IfAlertDataFar",
    Child1: "IfAlertDataThreeMoves",
    Child2: "IfAlertDataTwoMoves",
    Child3: "AddToAlertDataScore_20"
};
window.behaviorGraphNodesObject["IfAlertDataTwoMoves"] = {
    nodeName: "IfAlertDataTwoMoves",
    NodeType: "Sequence",
    Child0: "IsAlertDataTwoMoves",
    Child1: "AddToAlertDataScore_15"
};
window.behaviorGraphNodesObject["IsAlertDataTwoMoves"] = {
    nodeName: "IsAlertDataTwoMoves",
    NodeType: "StatCondition",
    Param0: "AlertDataDistance",
    Param1: ">",
    Param2: "12"
};
window.behaviorGraphNodesObject["IfAlertDataThreeMoves"] = {
    nodeName: "IfAlertDataThreeMoves",
    NodeType: "Sequence",
    Child0: "IsAlertDataThreeMoves",
    Child1: "AddToAlertDataScore_10"
};
window.behaviorGraphNodesObject["IsAlertDataThreeMoves"] = {
    nodeName: "IsAlertDataThreeMoves",
    NodeType: "StatCondition",
    Param0: "AlertDataDistance",
    Param1: ">",
    Param2: "24"
};
window.behaviorGraphNodesObject["IfAlertDataFar"] = {
    nodeName: "IfAlertDataFar",
    NodeType: "Sequence",
    Child0: "IsAlertDataFar",
    Child1: "AddToAlertDataScore_5"
};
window.behaviorGraphNodesObject["IsAlertDataFar"] = {
    nodeName: "IsAlertDataFar",
    NodeType: "StatCondition",
    Param0: "AlertDataDistance",
    Param1: ">",
    Param2: "36"
};
window.behaviorGraphNodesObject["AlertScoreRandom"] = {
    nodeName: "AlertScoreRandom",
    NodeType: "RandSelector",
    Child0: "AddToAlertDataScore_10",
    Child1: "AddToAlertDataScore_20",
    Child2: "AddToAlertDataScore_30",
    Child3: "AddToAlertDataScore_40",
    Child4: "AddToAlertDataScore_50",
    Child5: "AddToAlertDataScore_60 "
};
window.behaviorGraphNodesObject["ScoreAlertFor_Defend"] = {
    nodeName: "ScoreAlertFor_Defend",
    NodeType: "Selector",
    Child0: "ScoreAlertIfDefend",
    Child1: "AddToAlertDataScore_0"
};
window.behaviorGraphNodesObject["ScoreAlertIfDefend"] = {
    nodeName: "ScoreAlertIfDefend",
    NodeType: "Sequence",
    Child0: "AlertDataHasTag-Defend",
    Child1: "AddToAlertDataScore_50"
};
window.behaviorGraphNodesObject["ScoreAlertFor_Advance"] = {
    nodeName: "ScoreAlertFor_Advance",
    NodeType: "Selector",
    Child0: "ScoreAlertIfAdvance",
    Child1: "AddToAlertDataScore_0"
};
window.behaviorGraphNodesObject["ScoreAlertIfAdvance"] = {
    nodeName: "ScoreAlertIfAdvance",
    NodeType: "Sequence",
    Child0: "AlertDataHasTag-Advance",
    Child1: "AddToAlertDataScore_50"
};
window.behaviorGraphNodesObject["SetNextTarget"] = {
    nodeName: "SetNextTarget",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["HasUnconcealedEnemies"] = {
    nodeName: "HasUnconcealedEnemies",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["UpdateBestTarget"] = {
    nodeName: "UpdateBestTarget",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["TargetHasHighestShotHitChance"] = {
    nodeName: "TargetHasHighestShotHitChance",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["GenericSelectBestTarget"] = {
    nodeName: "GenericSelectBestTarget",
    NodeType: "RepeatUntilFail",
    Child0: "GenericEvaluateTarget"
};
window.behaviorGraphNodesObject["GenericEvaluateTarget"] = {
    nodeName: "GenericEvaluateTarget",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "GenericTargetEvaluations",
    Child2: "UpdateBestTarget" // 
};
window.behaviorGraphNodesObject["GenericTargetEvaluations"] = {
    nodeName: "GenericTargetEvaluations",
    NodeType: "Sequence",
    Child0: "TargetScoreHitChance",
    Child1: "TargetScoreHealth",
    Child2: "TargetScoreFlanking",
    Child3: "TargetScoreMarked",
    Child4: "ApplyDifficultyModifiers",
    Child5: "TargetScoreCivilian",
    Child6: "AvoidBoundAndPanickedTargets"
};
window.behaviorGraphNodesObject["SelectPriorityTarget"] = {
    nodeName: "SelectPriorityTarget",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePriorityTarget"
};
window.behaviorGraphNodesObject["EvaluatePriorityTarget"] = {
    nodeName: "EvaluatePriorityTarget",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "ScoreIfTarget_HighestShotHitChance",
    Child2: "TargetScorePriority",
    Child3: "TargetScoreCivilian",
    Child4: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["SelectTarget_Favorable"] = {
    nodeName: "SelectTarget_Favorable",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTargetFavorable"
};
window.behaviorGraphNodesObject["EvaluateTargetFavorable"] = {
    nodeName: "EvaluateTargetFavorable",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreHitChanceFavorable",
    Child2: "TargetScoreHealth",
    Child3: "ApplyDifficultyModifiers",
    Child4: "TargetScoreCivilian",
    Child5: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["SelectTarget_Opportunist"] = {
    nodeName: "SelectTarget_Opportunist",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTargetOPPORTUNIST"
};
window.behaviorGraphNodesObject["EvaluateTargetOPPORTUNIST"] = {
    nodeName: "EvaluateTargetOPPORTUNIST",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreHitChanceOPPORTUNIST",
    Child2: "TargetScoreHealth",
    Child3: "TargetScoreFlanking",
    Child4: "ApplyDifficultyModifiers",
    Child5: "TargetScoreCivilian",
    Child6: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["GenericSelectTargetSomewhatRandomly"] = {
    nodeName: "GenericSelectTargetSomewhatRandomly",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTargetSomewhatRandomly"
};
window.behaviorGraphNodesObject["EvaluateTargetSomewhatRandomly"] = {
    nodeName: "EvaluateTargetSomewhatRandomly",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "GenericScoreTargetRandomly",
    Child2: "TargetScoreMarked",
    Child3: "ApplyDifficultyModifiers",
    Child4: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["GenericSelectTargetRandomly"] = {
    nodeName: "GenericSelectTargetRandomly",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTargetRandomly"
};
window.behaviorGraphNodesObject["EvaluateTargetRandomly"] = {
    nodeName: "EvaluateTargetRandomly",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "GenericScoreTargetRandomly",
    Child2: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["GenericScoreTargetRandomly"] = {
    nodeName: "GenericScoreTargetRandomly",
    NodeType: "Successor",
    Child0: "GenericScoreTargetRandomlySequence"
};
window.behaviorGraphNodesObject["GenericScoreTargetRandomlySequence"] = {
    nodeName: "GenericScoreTargetRandomlySequence",
    NodeType: "RandSelector",
    Child0: "AddToTargetScore_1",
    Child1: "AddToTargetScore_10",
    Child2: "AddToTargetScore_20",
    Child3: "AddToTargetScore_30",
    Child4: "AddToTargetScore_40",
    Child5: "AddToTargetScore_50 "
};
window.behaviorGraphNodesObject["SelectAnyTargetRandomly_PreferEnemies"] = {
    nodeName: "SelectAnyTargetRandomly_PreferEnemies",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTargetRandomly_PreferEnemies"
};
window.behaviorGraphNodesObject["EvaluateTargetRandomly_PreferEnemies"] = {
    nodeName: "EvaluateTargetRandomly_PreferEnemies",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "GenericScoreTargetRandomly",
    Child2: "TargetScorePreferEnemies",
    Child3: "TargetScoreFlanking",
    Child4: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["TargetScorePreferEnemies"] = {
    nodeName: "TargetScorePreferEnemies",
    NodeType: "Selector",
    Child0: "ScoreIfEnemy",
    Child1: "AddToTargetScore_0"
};
window.behaviorGraphNodesObject["ScoreIfEnemy"] = {
    nodeName: "ScoreIfEnemy",
    NodeType: "Sequence",
    Child0: "TargetIsEnemy",
    Child1: "AddToTargetScore_10"
};
window.behaviorGraphNodesObject["NoTargetsAvailable"] = {
    nodeName: "NoTargetsAvailable",
    NodeType: "Inverter",
    Child0: "HaveAnyTargets"
};
window.behaviorGraphNodesObject["HaveAnyTargets"] = {
    nodeName: "HaveAnyTargets",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "FindAnyTarget",
    Child2: "HasValidTarget-StandardShot"
};
window.behaviorGraphNodesObject["FindAnyTarget"] = {
    nodeName: "FindAnyTarget",
    NodeType: "RepeatUntilFail",
    Child0: "SimpleEvaluateTarget"
};
window.behaviorGraphNodesObject["SimpleEvaluateTarget"] = {
    nodeName: "SimpleEvaluateTarget",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScorePreferEnemies",
    Child2: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["IsTargetValidBasedOnLastResortEffects"] = {
    nodeName: "IsTargetValidBasedOnLastResortEffects",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["HasNonLastResortEnemies"] = {
    nodeName: "HasNonLastResortEnemies",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsTargetLastResortWithOtherOptionsAvailable"] = {
    nodeName: "IsTargetLastResortWithOtherOptionsAvailable",
    NodeType: "Sequence",
    Child0: "IsLastResortTarget",
    Child1: "HasNonLastResortEnemies"
};
window.behaviorGraphNodesObject["IsLastResortTarget"] = {
    nodeName: "IsLastResortTarget",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SelectBestSuppressionTarget"] = {
    nodeName: "SelectBestSuppressionTarget",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateSuppressionTarget"
};
window.behaviorGraphNodesObject["EvaluateSuppressionTarget"] = {
    nodeName: "EvaluateSuppressionTarget",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreUnsuppressedByClosestDistance",
    Child2: "TargetScoreInvalidateCivilians",
    Child3: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["SelectClosestPotentialSuppressionTarget"] = {
    nodeName: "SelectClosestPotentialSuppressionTarget",
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "SelectClosestUnsuppressedTarget",
    Child2: "HasValidTarget-Potential"
};
window.behaviorGraphNodesObject["SelectClosestUnsuppressedTarget"] = {
    nodeName: "SelectClosestUnsuppressedTarget",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialSuppressionTarget"
};
window.behaviorGraphNodesObject["EvaluatePotentialSuppressionTarget"] = {
    nodeName: "EvaluatePotentialSuppressionTarget",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreUnsuppressedByClosestDistance",
    Child2: "AvoidBoundAndPanickedTargets",
    Child3: "TargetScoreInvalidateCivilians",
    Child4: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["TargetScoreUnsuppressedByClosestDistance"] = {
    nodeName: "TargetScoreUnsuppressedByClosestDistance",
    NodeType: "Successor",
    Child0: "ScoreUnsuppressedByClosestDistance"
};
window.behaviorGraphNodesObject["ScoreUnsuppressedByClosestDistance"] = {
    nodeName: "ScoreUnsuppressedByClosestDistance",
    NodeType: "Sequence",
    Child0: "TargetIsNotSuppressed",
    Child1: "TargetIsEnemy",
    Child2: "TargetScoreByScaledDistance-1",
    Child3: "AvoidBoundAndPanickedTargets",
    Child4: "AddToTargetScore_100"
};
window.behaviorGraphNodesObject["TargetIsNotSuppressed"] = {
    nodeName: "TargetIsNotSuppressed",
    NodeType: "Inverter",
    Child0: "TargetAffectedByEffect-Suppression"
};
window.behaviorGraphNodesObject["TargetScoreByScaledDistance-1"] = {
    nodeName: "TargetScoreByScaledDistance-1",
    NodeType: "Action",
    Param0: "-1" //  Distance in Meters", Negated to favor closer units.
};
window.behaviorGraphNodesObject["ShootOrSuppressIfNoGoodShot"] = {
    nodeName: "ShootOrSuppressIfNoGoodShot",
    NodeType: "Selector",
    Child0: "ConsiderSuppression",
    Child1: "TryShootOrReloadOrOverwatch"
};
window.behaviorGraphNodesObject["ConsiderSuppression"] = {
    nodeName: "ConsiderSuppression",
    NodeType: "Sequence",
    Child0: "AllShotPercentagesBelow50",
    Child1: "SuppressIfAvailable"
};
window.behaviorGraphNodesObject["PsiEvaluateTargetsGeneric"] = {
    nodeName: "PsiEvaluateTargetsGeneric",
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
window.behaviorGraphNodesObject["PsiEvaluateTargetsMindControl"] = {
    nodeName: "PsiEvaluateTargetsMindControl",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreMindControl",
    Child2: "TargetScoreHighestSoldierRank",
    Child3: "TargetScoreHealth_HighFirst",
    Child4: "TargetScoreInvalidateCivilians",
    Child5: "AvoidBoundAndPanickedTargets",
    Child6: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["TargetScorePsiAttack"] = {
    nodeName: "TargetScorePsiAttack",
    NodeType: "Selector",
    Child0: "ScoreIfConfused",
    Child1: "ScoreIfPanicked",
    Child2: "ScoreIfDisoriented",
    Child3: "AddToTargetScore_0"
};
window.behaviorGraphNodesObject["ScoreIfConfused"] = {
    nodeName: "ScoreIfConfused",
    NodeType: "Sequence",
    Child0: "TargetAffectedByEffect-Confused",
    Child1: "AddToTargetScore_30"
};
window.behaviorGraphNodesObject["ScoreIfPanicked"] = {
    nodeName: "ScoreIfPanicked",
    NodeType: "Sequence",
    Child0: "TargetAffectedByEffect-Panicked",
    Child1: "AddToTargetScore_20"
};
window.behaviorGraphNodesObject["ScoreIfDisoriented"] = {
    nodeName: "ScoreIfDisoriented",
    NodeType: "Sequence",
    Child0: "TargetAffectedByEffect-Disoriented",
    Child1: "AddToTargetScore_10"
};
window.behaviorGraphNodesObject["TargetScoreMindControl"] = {
    nodeName: "TargetScoreMindControl",
    NodeType: "Selector",
    Child0: "ScoreIfTargetWillWeakened",
    Child1: "AddToTargetScore_-10"
};
window.behaviorGraphNodesObject["ScoreIfTargetWillWeakened"] = {
    nodeName: "ScoreIfTargetWillWeakened",
    NodeType: "Sequence",
    Child0: "TargetWillWeakened",
    Child1: "AddToTargetScore_50"
};
window.behaviorGraphNodesObject["SometimesRandomizeTarget"] = {
    nodeName: "SometimesRandomizeTarget",
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
window.behaviorGraphNodesObject["TargetScoreByHitChanceValue-1"] = {
    nodeName: "TargetScoreByHitChanceValue-1",
    NodeType: "Action",
    Param0: "1",
    Param1: "StandardShot"
};
window.behaviorGraphNodesObject["TargetScoreHitChance"] = {
    nodeName: "TargetScoreHitChance",
    NodeType: "Selector",
    Child0: "TargetScoreHitChanceUnlikely",
    Child1: "TargetScoreHitChanceProbable",
    Child2: "AddToTargetScore_40"
};
window.behaviorGraphNodesObject["TargetScoreHitChanceUnlikely"] = {
    nodeName: "TargetScoreHitChanceUnlikely",
    NodeType: "Sequence",
    Child0: "TargetHitChanceLow",
    Child1: "AddToTargetScore_10" //  30 points under mid rank shot
};
window.behaviorGraphNodesObject["TargetScoreHitChanceProbable"] = {
    nodeName: "TargetScoreHitChanceProbable",
    NodeType: "Sequence",
    Child0: "TargetHitChanceHigh",
    Child1: "AddToTargetScore_70" //  30 points over mid rank shot
};
window.behaviorGraphNodesObject["TargetScoreHitChanceOPPORTUNIST"] = {
    nodeName: "TargetScoreHitChanceOPPORTUNIST",
    NodeType: "Selector",
    Child0: "TargetScoreHitChanceUnlikelyOPPORTUNIST",
    Child1: "TargetScoreHitChanceProbableOPPORTUNIST",
    Child2: "AddToTargetScore_-20"
};
window.behaviorGraphNodesObject["TargetScoreHitChanceUnlikelyOPPORTUNIST"] = {
    nodeName: "TargetScoreHitChanceUnlikelyOPPORTUNIST",
    NodeType: "Sequence",
    Child0: "TargetHitChanceLow",
    Child1: "AddToTargetScore_-100"
};
window.behaviorGraphNodesObject["TargetScoreHitChanceProbableOPPORTUNIST"] = {
    nodeName: "TargetScoreHitChanceProbableOPPORTUNIST",
    NodeType: "Sequence",
    Child0: "TargetHitChanceHigh",
    Child1: "AddToTargetScore_0" //  valid shot if any other paramater is positive.
};
window.behaviorGraphNodesObject["TargetScoreHitChanceFavorable"] = {
    nodeName: "TargetScoreHitChanceFavorable",
    NodeType: "Selector",
    Child0: "TargetScoreHitChanceUnlikelyFavorable",
    Child1: "TargetScoreHitChanceProbableFavorable",
    Child2: "AddToTargetScore_40"
};
window.behaviorGraphNodesObject["TargetScoreHitChanceUnlikelyFavorable"] = {
    nodeName: "TargetScoreHitChanceUnlikelyFavorable",
    NodeType: "Sequence",
    Child0: "TargetHitChanceLow",
    Child1: "AddToTargetScore_-10" //  50 points under mid rank shot", negative
};
window.behaviorGraphNodesObject["TargetScoreHitChanceProbableFavorable"] = {
    nodeName: "TargetScoreHitChanceProbableFavorable",
    NodeType: "Sequence",
    Child0: "TargetHitChanceHigh",
    Child1: "AddToTargetScore_70" //  30 points over mid rank shot
};
window.behaviorGraphNodesObject["TargetScoreHealth"] = {
    nodeName: "TargetScoreHealth",
    NodeType: "Selector",
    Child0: "ScoreIfKillShot",
    Child1: "ScoreIfTargetLowHP",
    Child2: "ScoreIfTargetWounded",
    Child3: "AddToTargetScore_0"
};
window.behaviorGraphNodesObject["ScoreIfKillShot"] = {
    nodeName: "ScoreIfKillShot",
    NodeType: "Sequence",
    Child0: "TargetIsKillable",
    Child1: "AddToTargetScore_15" //  bump a kill shot up to the next aim tier with a bonus
};
window.behaviorGraphNodesObject["ScoreIfTargetLowHP"] = {
    nodeName: "ScoreIfTargetLowHP",
    NodeType: "Sequence",
    Child0: "TargetHasLowHP",
    Child1: "AddToTargetScore_10" //  low hp but not kill shot is valued target", but not more than much better hit chance
};
window.behaviorGraphNodesObject["ScoreIfTargetWounded"] = {
    nodeName: "ScoreIfTargetWounded",
    NodeType: "Sequence",
    Child0: "TargetWounded",
    Child1: "AddToTargetScore_5" //  in case of aim quality tie", shoot wounded target
};
window.behaviorGraphNodesObject["ApplyDifficultyModifiers"] = {
    nodeName: "ApplyDifficultyModifiers",
    NodeType: "Successor",
    Child0: "ApplyDifficultyModifiersBase"
};
window.behaviorGraphNodesObject["ApplyDifficultyModifiersBase"] = {
    nodeName: "ApplyDifficultyModifiersBase",
    NodeType: "Sequence",
    Child0: "IsDifficultyLow",
    Child1: "AddToTargetScore_20",
    Child2: "::DistributeAttacks"
};
window.behaviorGraphNodesObject["AvoidBoundAndPanickedTargets"] = {
    nodeName: "AvoidBoundAndPanickedTargets",
    NodeType: "Selector",
    Child0: "ScoreIfTargetBoundOrPanicked",
    Child1: "AddToTargetScore_1"
};
window.behaviorGraphNodesObject["ScoreIfTargetBoundOrPanicked"] = {
    nodeName: "ScoreIfTargetBoundOrPanicked",
    NodeType: "Sequence",
    Child0: "IsTargetLastResortWithOtherOptionsAvailable",
    Child1: "AddToTargetScore_-1000"
};
window.behaviorGraphNodesObject["::DistributeAttacks"] = {
    nodeName: "::DistributeAttacks",
    NodeType: "Selector",
    Child0: "ScoreTargetIfMarked",
    Child1: "AddToTargetScore_20", // ScoreIfTargetHasBeenAttackedTwice",Child2: "ScoreIfTargetHasBeenAttackedOnce",Child3: "AddToTargetScore_30"
};
window.behaviorGraphNodesObject["Sectopod::DistributeAttacks"] = {
    nodeName: "Sectopod::DistributeAttacks",
    NodeType: "Selector",
    Child0: "ScoreIfTargetHasBeenAttackedTwice",
    Child1: "ScoreIfTargetHasBeenAttackedOnce",
    Child2: "AddToTargetScore_30"
};
window.behaviorGraphNodesObject["ScoreIfTargetHasBeenAttackedTwice"] = {
    nodeName: "ScoreIfTargetHasBeenAttackedTwice",
    NodeType: "Sequence",
    Child0: "TargetHasBeenAttackedTwice",
    Child1: "AddToTargetScore_0" // 
};
window.behaviorGraphNodesObject["ScoreIfTargetHasBeenAttackedOnce"] = {
    nodeName: "ScoreIfTargetHasBeenAttackedOnce",
    NodeType: "Sequence",
    Child0: "TargetHasBeenAttackedOnce",
    Child1: "AddToTargetScore_5" // 
};
window.behaviorGraphNodesObject["TargetScoreHealth_HighFirst"] = {
    nodeName: "TargetScoreHealth_HighFirst",
    NodeType: "Selector",
    Child0: "PenalizeIfKillShot",
    Child1: "ScoreIfTarget_MaxHP",
    Child2: "ScoreIfTarget_HighHP",
    Child3: "AddToTargetScore_5"
};
window.behaviorGraphNodesObject["PenalizeIfKillShot"] = {
    nodeName: "PenalizeIfKillShot",
    NodeType: "Sequence",
    Child0: "TargetIsKillable",
    Child1: "AddToTargetScore_0" //  If the attack would kill the target", deemphasize (but don"t ignore"
};
window.behaviorGraphNodesObject["ScoreIfTarget_MaxHP"] = {
    nodeName: "ScoreIfTarget_MaxHP",
    NodeType: "Sequence",
    Child0: "TargetHasMaxHP",
    Child1: "AddToTargetScore_20" //  bump a max health target to the next aim tier with a bonus
};
window.behaviorGraphNodesObject["ScoreIfTarget_HighHP"] = {
    nodeName: "ScoreIfTarget_HighHP",
    NodeType: "Sequence",
    Child0: "TargetHasHighHP",
    Child1: "AddToTargetScore_10" //  high hp is valued target", but not more than much better hit chance
};
window.behaviorGraphNodesObject["TargetScoreFlanking"] = {
    nodeName: "TargetScoreFlanking",
    NodeType: "Selector",
    Child0: "ScoreTargetIfFlanked",
    Child1: "AddToTargetScore_0"
};
window.behaviorGraphNodesObject["ScoreTargetIfFlanked"] = {
    nodeName: "ScoreTargetIfFlanked",
    NodeType: "Sequence",
    Child0: "IsFlankingTarget",
    Child1: "TargetIsEnemy",
    Child2: "AddToTargetScore_50"
};
window.behaviorGraphNodesObject["TargetScoreHighestSoldierRank"] = {
    nodeName: "TargetScoreHighestSoldierRank",
    NodeType: "Selector",
    Child0: "ScoreIfTarget_HasHighestRank",
    Child1: "AddToTargetScore_0"
};
window.behaviorGraphNodesObject["ScoreIfTarget_HasHighestRank"] = {
    nodeName: "ScoreIfTarget_HasHighestRank",
    NodeType: "Sequence",
    Child0: "TargetHasHighestSoldierRank",
    Child1: "AddToTargetScore_5" //  Just a tie breaker
};
window.behaviorGraphNodesObject["TargetHasHighestSoldierRank"] = {
    nodeName: "TargetHasHighestSoldierRank",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetScoreHighestShotHitChance"] = {
    nodeName: "TargetScoreHighestShotHitChance",
    NodeType: "Successor",
    Child0: "ScoreIfTarget_HighestShotHitChance"
};
window.behaviorGraphNodesObject["ScoreIfTarget_HighestShotHitChance"] = {
    nodeName: "ScoreIfTarget_HighestShotHitChance",
    NodeType: "Sequence",
    Child0: "TargetHasHighestShotHitChance",
    Child1: "AddToTargetScore_10" //  tie breaker
};
window.behaviorGraphNodesObject["TargetScoreHighestShotHitChance_50"] = {
    nodeName: "TargetScoreHighestShotHitChance_50",
    NodeType: "Successor",
    Child0: "ScoreIfTarget_HighestShotHitChance_50"
};
window.behaviorGraphNodesObject["ScoreIfTarget_HighestShotHitChance_50"] = {
    nodeName: "ScoreIfTarget_HighestShotHitChance_50",
    NodeType: "Sequence",
    Child0: "TargetHasHighestShotHitChance",
    Child1: "AddToTargetScore_50"
};
window.behaviorGraphNodesObject["TargetScoreMarked"] = {
    nodeName: "TargetScoreMarked",
    NodeType: "Selector",
    Child0: "ScoreTargetIfMarked",
    Child1: "AddToTargetScore_0"
};
window.behaviorGraphNodesObject["ScoreTargetIfMarked"] = {
    nodeName: "ScoreTargetIfMarked",
    NodeType: "Sequence",
    Child0: "TargetAffectedByEffect-MarkedTarget",
    Child1: "AddToTargetScore_45" //  bump a marked target up to the next aim tier with a bonus", over even a killshot
};
window.behaviorGraphNodesObject["TargetScorePriority"] = {
    nodeName: "TargetScorePriority",
    NodeType: "Selector",
    Child0: "ScoreTargetIfPriority",
    Child1: "AddToTargetScore_0" //  If I"m looking for a priority target", then if the target isn"t priority", it should be very negative.
};
window.behaviorGraphNodesObject["ScoreTargetIfPriority"] = {
    nodeName: "ScoreTargetIfPriority",
    NodeType: "Sequence",
    Child0: "TargetIsPriorityUnit",
    Child1: "AddToTargetScore_60" //  set a priority target for very high
};
window.behaviorGraphNodesObject["TargetScoreCivilian"] = {
    nodeName: "TargetScoreCivilian",
    NodeType: "Successor",
    Child0: "ScoreTargetIfCivilianByJob"
};
window.behaviorGraphNodesObject["TargetScoreInvalidateCivilians"] = {
    nodeName: "TargetScoreInvalidateCivilians",
    NodeType: "Selector",
    Child0: "ScoreTargetOutIfCivilian",
    Child1: "AddToTargetScore_0"
};
window.behaviorGraphNodesObject["ScoreTargetOutIfCivilian"] = {
    nodeName: "ScoreTargetOutIfCivilian",
    NodeType: "Sequence",
    Child0: "TargetIsCivilian",
    Child1: "AddToTargetScore_-1000"
};
window.behaviorGraphNodesObject["ScoreTargetIfCivilianByJob"] = {
    nodeName: "ScoreTargetIfCivilianByJob",
    NodeType: "Sequence",
    Child0: "TargetIsCivilian",
    Child1: "ScoreCivilianByJob"
};
window.behaviorGraphNodesObject["ScoreCivilianByJob"] = {
    nodeName: "ScoreCivilianByJob",
    NodeType: "Selector",
    Child0: "ScoreCivilianIfLimitHit",
    Child1: "ScoreCivilianIfActuallyFaceless",
    Child2: "ScoreCivilianIfTerrorist",
    Child3: "AddToTargetScore_-10"
};
window.behaviorGraphNodesObject["ScoreCivilianIfActuallyFaceless"] = {
    nodeName: "ScoreCivilianIfActuallyFaceless",
    NodeType: "Sequence",
    Child0: "TargetIsAlien",
    Child1: "AddToTargetScore_-1000"
};
window.behaviorGraphNodesObject["ScoreCivilianIfTerrorist"] = {
    nodeName: "ScoreCivilianIfTerrorist",
    NodeType: "Sequence",
    Child0: "IsMyJob-Terrorist",
    Child1: "AddToTargetScore_40"
};
window.behaviorGraphNodesObject["ScoreCivilianIfLimitHit"] = {
    nodeName: "ScoreCivilianIfLimitHit",
    NodeType: "Sequence",
    Child0: "CivilianKillLimitReached",
    Child1: "AddToTargetScore_-1000"
};
window.behaviorGraphNodesObject["CivilianKillLimitReached"] = {
    nodeName: "CivilianKillLimitReached",
    NodeType: "Inverter",
    Child0: "NumKilledCiviliansIsLessThanTurnCount"
};
window.behaviorGraphNodesObject["TargetScoreKillAdventNotAliens"] = {
    nodeName: "TargetScoreKillAdventNotAliens",
    NodeType: "Selector",
    Child0: "ScoreTargetIfAllyAndAdvent",
    Child1: "ScoreTargetIfAllyAndNotAdvent",
    Child2: "AddToTargetScore_0"
};
window.behaviorGraphNodesObject["ScoreTargetIfAllyAndAdvent"] = {
    nodeName: "ScoreTargetIfAllyAndAdvent",
    NodeType: "Sequence",
    Child0: "TargetIsAlly",
    Child1: "TargetIsAdvent",
    Child2: "AddToTargetScore_1"
};
window.behaviorGraphNodesObject["ScoreTargetIfAllyAndNotAdvent"] = {
    nodeName: "ScoreTargetIfAllyAndNotAdvent",
    NodeType: "Sequence",
    Child0: "TargetIsAlly",
    Child1: "AddToTargetScore_-100"
};
window.behaviorGraphNodesObject["TargetScoreTeamVisibility"] = {
    nodeName: "TargetScoreTeamVisibility",
    NodeType: "Selector",
    Child0: "ScoreIfTarget_HasHighestVisibility",
    Child1: "AddToTargetScore_0"
};
window.behaviorGraphNodesObject["ScoreIfTarget_HasHighestVisibility"] = {
    nodeName: "ScoreIfTarget_HasHighestVisibility",
    NodeType: "Sequence",
    Child0: "TargetHasHighestTeamVisibility",
    Child1: "AddToTargetScore_5" //  tie breaker
};
window.behaviorGraphNodesObject["TargetHasHighestTeamVisibility"] = {
    nodeName: "TargetHasHighestTeamVisibility",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetScoreReachableForMelee"] = {
    nodeName: "TargetScoreReachableForMelee",
    NodeType: "Selector",
    Child0: "ScoreUnReachable",
    Child1: "AddToTargetScore_1"
};
window.behaviorGraphNodesObject["TargetIsNotAlly"] = {
    nodeName: "TargetIsNotAlly",
    NodeType: "Inverter",
    Child0: "TargetIsAlly"
};
window.behaviorGraphNodesObject["TargetCanBecomeZombie"] = {
    nodeName: "TargetCanBecomeZombie",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetCanNotBecomeZombie"] = {
    nodeName: "TargetCanNotBecomeZombie",
    NodeType: "Inverter",
    Child0: "TargetCanBecomeZombie"
};
window.behaviorGraphNodesObject["TargetScoreReachableAllyAnimaConsume"] = {
    nodeName: "TargetScoreReachableAllyAnimaConsume",
    NodeType: "Selector",
    Child0: "TargetIsNotAlly",
    Child1: "TargetCanNotBecomeZombie",
    Child2: "TargetIsVisibleToPlayer",
    Child3: "ScoreForAnimaConsumeAlly"
};
window.behaviorGraphNodesObject["ScoreForAnimaConsumeAlly"] = {
    nodeName: "ScoreForAnimaConsumeAlly",
    NodeType: "Sequence",
    Child0: "ScoreAnimaConsumeForRange",
    Child1: "ScoreIfTargetLowHP",
    Child2: "AddToTargetScore_1"
};
window.behaviorGraphNodesObject["ScoreAnimaConsumeForRange"] = {
    nodeName: "ScoreAnimaConsumeForRange",
    NodeType: "Selector",
    Child0: "ScoreInAttackRange",
    Child1: "ScoreUnreachable",
    Child2: "AddToTargetScore_1"
};
window.behaviorGraphNodesObject["ScoreInAttackRange"] = {
    nodeName: "ScoreInAttackRange",
    NodeType: "Sequence",
    Child0: "IsTargetInAttackRange-StandardMelee",
    Child1: "AddToTargetScore_100"
};
window.behaviorGraphNodesObject["ScoreUnReachable"] = {
    nodeName: "ScoreUnReachable",
    NodeType: "Sequence",
    Child0: "TargetNotInMovementRange",
    Child1: "AddToTargetScore_-100"
};
window.behaviorGraphNodesObject["TargetScoreClosestIfInRange"] = {
    nodeName: "TargetScoreClosestIfInRange",
    NodeType: "Successor",
    Child0: "ScoreClosestIfInRange"
};
window.behaviorGraphNodesObject["ScoreClosestIfInRange"] = {
    nodeName: "ScoreClosestIfInRange",
    NodeType: "Sequence",
    Child0: "TargetIsClosestValidTarget",
    Child1: "IsTargetInMovementRange-StandardMelee",
    Child2: "AddToTargetScore_100"
};
window.behaviorGraphNodesObject["SelectScoreHitChanceByJob"] = {
    nodeName: "SelectScoreHitChanceByJob",
    NodeType: "Selector",
    Child0: "ScoreHitIfSoldier",
    Child1: "ScoreHitIfFlanker",
    Child2: "ScoreHitIfLeader",
    Child3: "ScoreHitIfSupport",
    Child4: "TargetScoreHitChance"
};
window.behaviorGraphNodesObject["ScoreHitIfSoldier"] = {
    nodeName: "ScoreHitIfSoldier",
    NodeType: "Sequence",
    Child0: "IsMyJob-Soldier",
    Child1: "TargetScoreHitChanceUnlikely"
};
window.behaviorGraphNodesObject["ScoreHitIfFlanker"] = {
    nodeName: "ScoreHitIfFlanker",
    NodeType: "Sequence",
    Child0: "IsMyJob-Flanker",
    Child1: "TargetScoreHitChanceOPPORTUNIST"
};
window.behaviorGraphNodesObject["ScoreHitIfLeader"] = {
    nodeName: "ScoreHitIfLeader",
    NodeType: "Sequence",
    Child0: "IsMyJob-Leader",
    Child1: "TargetScoreHitChance"
};
window.behaviorGraphNodesObject["ScoreHitIfSupport"] = {
    nodeName: "ScoreHitIfSupport",
    NodeType: "Sequence",
    Child0: "IsMyJob-Support",
    Child1: "TargetScoreHitChanceProbable"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-Reload"] = {
    nodeName: "IsAbilityAvailable-Reload",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-StandardShot"] = {
    nodeName: "IsAbilityAvailable-StandardShot",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-StandardMove"] = {
    nodeName: "IsAbilityAvailable-StandardMove",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-Overwatch"] = {
    nodeName: "IsAbilityAvailable-Overwatch",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-ThrowGrenade"] = {
    nodeName: "IsAbilityAvailable-ThrowGrenade",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-FragGrenade"] = {
    nodeName: "IsAbilityAvailable-FragGrenade",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-Yell"] = {
    nodeName: "IsAbilityAvailable-Yell",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-CallReinforcements"] = {
    nodeName: "IsAbilityAvailable-CallReinforcements",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-Suppression"] = {
    nodeName: "IsAbilityAvailable-Suppression",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-HunkerDown"] = {
    nodeName: "IsAbilityAvailable-HunkerDown",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-StandardMelee"] = {
    nodeName: "IsAbilityAvailable-StandardMelee",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-StandardMelee"] = {
    nodeName: "IsAbilityReady-StandardMelee",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SelectAbility-Reload"] = {
    nodeName: "SelectAbility-Reload",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-StandardShot"] = {
    nodeName: "SelectAbility-StandardShot",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-StandardMove"] = {
    nodeName: "SelectAbility-StandardMove",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-Overwatch"] = {
    nodeName: "SelectAbility-Overwatch",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-ThrowGrenade"] = {
    nodeName: "SelectAbility-ThrowGrenade",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-Yell"] = {
    nodeName: "SelectAbility-Yell",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-CallReinforcements"] = {
    nodeName: "SelectAbility-CallReinforcements",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-StandardMelee"] = {
    nodeName: "SelectAbility-StandardMelee",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-Suppression"] = {
    nodeName: "SelectAbility-Suppression",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-HunkerDown"] = {
    nodeName: "SelectAbility-HunkerDown",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["ShouldPatrol"] = {
    nodeName: "ShouldPatrol",
    NodeType: "Selector",
    Child0: "IsGreenAlert",
    Child1: "NotYetRevealed"
};
window.behaviorGraphNodesObject["GenericGreenMovement"] = {
    nodeName: "GenericGreenMovement",
    NodeType: "Sequence",
    Child0: "ShouldPatrol",
    Child1: "GreenAlertActionSelector"
};
window.behaviorGraphNodesObject["GreenAlertActionSelector"] = {
    nodeName: "GreenAlertActionSelector",
    NodeType: "Selector",
    Child0: "TryAttackPriorityTarget",
    Child1: "SSSelectGreenAlertAction"
};
window.behaviorGraphNodesObject["SSSelectGreenAlertAction"] = {
    nodeName: "SSSelectGreenAlertAction",
    NodeType: "Successor",
    Child0: "SelectGreenAlertAction"
};
window.behaviorGraphNodesObject["SelectGreenAlertAction"] = {
    nodeName: "SelectGreenAlertAction",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["IgnoreHazards"] = {
    nodeName: "IgnoreHazards",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SkipTurnifGreenAlert"] = {
    nodeName: "SkipTurnifGreenAlert",
    NodeType: "Sequence",
    Child0: "IsGreenAlert",
    Child1: "SkipMove"
};
window.behaviorGraphNodesObject["DoCower"] = {
    nodeName: "DoCower",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-HunkerDown",
    Child1: "SelectAbility-HunkerDown"
};
window.behaviorGraphNodesObject["MoveBackWithLOSIfFlanked"] = {
    nodeName: "MoveBackWithLOSIfFlanked",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "IsFlanked",
    Child2: "IsAbilityAvailable-StandardMove",
    Child3: "FindDestinationWithLoS-Defensive",
    Child4: "SelectAbility-StandardMove" // 
};
window.behaviorGraphNodesObject["MoveBackWithLOSIfFlankedFirstAction"] = {
    nodeName: "MoveBackWithLOSIfFlankedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "IsFlanked",
    Child2: "IsAbilityAvailable-StandardMove",
    Child3: "FindDestinationWithLoS-Defensive",
    Child4: "SelectAbility-StandardMove" // 
};
window.behaviorGraphNodesObject["MoveForwardWithLOSIfFlanked"] = {
    nodeName: "MoveForwardWithLOSIfFlanked",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "IsFlanked",
    Child2: "IsAbilityAvailable-StandardMove",
    Child3: "FindDestinationWithLoS-AdvanceCover",
    Child4: "SelectAbility-StandardMove" // 
};
window.behaviorGraphNodesObject["MoveForwardWithLOSIfFlankedFirstAction"] = {
    nodeName: "MoveForwardWithLOSIfFlankedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "IsFlanked",
    Child2: "IsAbilityAvailable-StandardMove",
    Child3: "FindDestinationWithLoS-AdvanceCover",
    Child4: "SelectAbility-StandardMove" // 
};
window.behaviorGraphNodesObject["DoIfFlankedMove"] = {
    nodeName: "DoIfFlankedMove",
    NodeType: "Sequence",
    Child0: "CheckIfNeedToMove",
    Child1: "FlankedMoveSelector"
};
window.behaviorGraphNodesObject["CheckIfNeedToMove"] = {
    nodeName: "CheckIfNeedToMove",
    NodeType: "Selector",
    Child0: "IsFlanked",
    Child1: "IsInDangerousArea"
};
window.behaviorGraphNodesObject["CheckIfInDanger"] = {
    nodeName: "CheckIfInDanger",
    NodeType: "Selector",
    Child0: "IsFlanked",
    Child1: "HasMoreThanOneOverwatcher",
    Child2: "IsInDangerousArea"
};
window.behaviorGraphNodesObject["CheckNotInDanger"] = {
    nodeName: "CheckNotInDanger",
    NodeType: "Inverter",
    Child0: "CheckIfInDanger"
};
window.behaviorGraphNodesObject["FlankedMoveSelector"] = {
    nodeName: "FlankedMoveSelector",
    NodeType: "Selector",
    Child0: "MoveAdvanceToCoverUnsafe",
    Child1: "FallBack"
};
window.behaviorGraphNodesObject["DoIfOnDangerousGround"] = {
    nodeName: "DoIfOnDangerousGround",
    NodeType: "Sequence",
    Child0: "IsInDangerousArea",
    Child1: "FlankedMoveSelector"
};
window.behaviorGraphNodesObject["LastActionAndFlanked"] = {
    nodeName: "LastActionAndFlanked",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "IsFlanked",
    Child2: "ShootIfIdeal_OtherwiseMove"
};
window.behaviorGraphNodesObject["DoNoiseAlert"] = {
    nodeName: "DoNoiseAlert",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["NeedsReload"] = {
    nodeName: "NeedsReload",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Reload",
    Child1: "OutOfAmmo",
    Child2: "SelectAbility-Reload"
};
window.behaviorGraphNodesObject["TryShootOrReload"] = {
    nodeName: "TryShootOrReload",
    NodeType: "Selector",
    Child0: "ShootIfAvailable",
    Child1: "NeedsReload"
};
window.behaviorGraphNodesObject["TryShootOrReloadOrOverwatch"] = {
    nodeName: "TryShootOrReloadOrOverwatch",
    NodeType: "Selector",
    Child0: "ConsiderTakingOverwatch",
    Child1: "ShootIfAvailable",
    Child2: "NeedsReload"
};
window.behaviorGraphNodesObject["ConsiderTakingOverwatch"] = {
    nodeName: "ConsiderTakingOverwatch",
    NodeType: "Selector",
    Child0: "TryTwoTurnAttackSupport",
    Child1: "ConsiderTakingOverwatchAllUnits",
    Child2: "ConsiderTakingOverwatchVIP",
    Child3: "ConsiderTakingOverwatchEvac"
};
window.behaviorGraphNodesObject["ConsiderTakingOverwatchAllUnits"] = {
    nodeName: "ConsiderTakingOverwatchAllUnits",
    NodeType: "Sequence",
    Child0: "AllShotPercentagesBelow50",
    Child1: "NoOverwatchingTeammates",
    Child2: "RandFilter25Overwatch"
};
window.behaviorGraphNodesObject["AllShotPercentagesBelow50"] = {
    nodeName: "AllShotPercentagesBelow50",
    NodeType: "StatCondition",
    Param0: "TopHitChance",
    Param1: "<",
    Param2: "50"
};
window.behaviorGraphNodesObject["AllShotPercentagesAtOrBelow50"] = {
    nodeName: "AllShotPercentagesAtOrBelow50",
    NodeType: "StatCondition",
    Param0: "TopHitChance",
    Param1: "<:",
    Param2: "50"
};
window.behaviorGraphNodesObject["RandFilter25Overwatch"] = {
    nodeName: "RandFilter25Overwatch",
    NodeType: "RandFilter",
    Child0: "TryOverwatch",
    Param0: "25"
};
window.behaviorGraphNodesObject["ConsiderTakingOverwatchVIP"] = {
    nodeName: "ConsiderTakingOverwatchVIP",
    NodeType: "Sequence",
    Child0: "VIPVisible",
    Child1: "RandOverwatch75_15"
};
window.behaviorGraphNodesObject["ConsiderTakingOverwatchEvac"] = {
    nodeName: "ConsiderTakingOverwatchEvac",
    NodeType: "Sequence",
    Child0: "EvacInRangeAndEnemyVisible",
    Child1: "RandOverwatch100_75"
};
window.behaviorGraphNodesObject["VIPVisible"] = {
    nodeName: "VIPVisible",
    NodeType: "Sequence",
    Child0: "HasEnemyVIP",
    Child1: "CanSeeLivingVIPOrCarriedVIP"
};
window.behaviorGraphNodesObject["CanSeeLivingVIPOrCarriedVIP"] = {
    nodeName: "CanSeeLivingVIPOrCarriedVIP",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["EvacInRangeAndEnemyVisible"] = {
    nodeName: "EvacInRangeAndEnemyVisible",
    NodeType: "Sequence",
    Child0: "EvacWithinVisRange",
    Child1: "AnyLivingEnemyVisible"
};
window.behaviorGraphNodesObject["NoVisibleEnemies"] = {
    nodeName: "NoVisibleEnemies",
    NodeType: "StatCondition",
    Param0: "VisibleEnemyCount",
    Param1: "::",
    Param2: "0"
};
window.behaviorGraphNodesObject["AnyLivingEnemyVisible"] = {
    nodeName: "AnyLivingEnemyVisible",
    NodeType: "StatCondition",
    Param0: "VisibleEnemyCount",
    Param1: ">",
    Param2: "0"
};
window.behaviorGraphNodesObject["MultipleEnemiesVisible"] = {
    nodeName: "MultipleEnemiesVisible",
    NodeType: "StatCondition",
    Param0: "VisibleEnemyCount",
    Param1: ">",
    Param2: "1"
};
window.behaviorGraphNodesObject["AnyAlliesVisible"] = {
    nodeName: "AnyAlliesVisible",
    NodeType: "StatCondition",
    Param0: "VisibleAllyCount",
    Param1: ">",
    Param2: "0"
};
window.behaviorGraphNodesObject["EvacWithinVisRange"] = {
    nodeName: "EvacWithinVisRange",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["RandOverwatch100_75"] = {
    nodeName: "RandOverwatch100_75",
    NodeType: "Selector",
    Child0: "FirstOverwatch100",
    Child1: "RandSecondOverwatch75"
};
window.behaviorGraphNodesObject["RandOverwatch75_15"] = {
    nodeName: "RandOverwatch75_15",
    NodeType: "Selector",
    Child0: "RandFirstOverwatch75",
    Child1: "RandSecondOverwatch15"
};
window.behaviorGraphNodesObject["RandOverwatch75"] = {
    nodeName: "RandOverwatch75",
    NodeType: "RandFilter",
    Child0: "TryOverwatch",
    Param0: "75"
};
window.behaviorGraphNodesObject["RandOverwatch15"] = {
    nodeName: "RandOverwatch15",
    NodeType: "RandFilter",
    Child0: "TryOverwatch",
    Param0: "15"
};
window.behaviorGraphNodesObject["RandOverwatch50"] = {
    nodeName: "RandOverwatch50",
    NodeType: "RandFilter",
    Child0: "TryOverwatch",
    Param0: "50"
};
window.behaviorGraphNodesObject["RandOverwatch100_50"] = {
    nodeName: "RandOverwatch100_50",
    NodeType: "Selector",
    Child0: "FirstOverwatch100",
    Child1: "RandOverwatch50"
};
window.behaviorGraphNodesObject["FirstOverwatch100"] = {
    nodeName: "FirstOverwatch100",
    NodeType: "Sequence",
    Child0: "NoOverwatchingTeammates",
    Child1: "TryOverwatch"
};
window.behaviorGraphNodesObject["RandFirstOverwatch75"] = {
    nodeName: "RandFirstOverwatch75",
    NodeType: "Sequence",
    Child0: "NoOverwatchingTeammates",
    Child1: "RandOverwatch75"
};
window.behaviorGraphNodesObject["RandSecondOverwatch75"] = {
    nodeName: "RandSecondOverwatch75",
    NodeType: "Sequence",
    Child0: "OneOverwatchingTeammate",
    Child1: "RandOverwatch75"
};
window.behaviorGraphNodesObject["RandSecondOverwatch15"] = {
    nodeName: "RandSecondOverwatch15",
    NodeType: "Sequence",
    Child0: "OneOverwatchingTeammate",
    Child1: "RandOverwatch15"
};
window.behaviorGraphNodesObject["TryTwoTurnAttackSupportIfSafe"] = {
    nodeName: "TryTwoTurnAttackSupportIfSafe",
    NodeType: "Sequence",
    Child0: "NotInDangerousArea",
    Child1: "TryTwoTurnAttackSupport"
};
window.behaviorGraphNodesObject["TryTwoTurnAttackSupport"] = {
    nodeName: "TryTwoTurnAttackSupport",
    NodeType: "Sequence",
    Child0: "HasTwoTurnAttackTargets",
    Child1: "TryOverwatchTwoTurnTarget"
};
window.behaviorGraphNodesObject["HasTwoTurnAttackTargets"] = {
    nodeName: "HasTwoTurnAttackTargets",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsTargetInTwoTurnAttackArea"] = {
    nodeName: "IsTargetInTwoTurnAttackArea",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TryOverwatchTwoTurnTarget"] = {
    nodeName: "TryOverwatchTwoTurnTarget",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Overwatch",
    Child1: "RandOverwatch100_50"
};
window.behaviorGraphNodesObject["TryMeleeOrShoot"] = {
    nodeName: "TryMeleeOrShoot",
    NodeType: "Selector",
    Child0: "ShootIfAvailable",
    Child1: "StandardMeleeAttack"
};
window.behaviorGraphNodesObject["ShootIfAvailable"] = {
    nodeName: "ShootIfAvailable",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectTargetForStandardShot",
    Child2: "SelectAbility-StandardShot"
};
window.behaviorGraphNodesObject["ShootIfIdeal"] = {
    nodeName: "ShootIfIdeal",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectTargetForStandardShot_Ideal",
    Child2: "SelectAbility-StandardShot"
};
window.behaviorGraphNodesObject["ShootIfIdeal_OtherwiseMove"] = {
    nodeName: "ShootIfIdeal_OtherwiseMove",
    NodeType: "Selector",
    Child0: "ShootIfIdeal",
    Child1: "MoveDefensiveWithLoS",
    Child2: "MoveStandard"
};
window.behaviorGraphNodesObject["AttackIfFavorable"] = {
    nodeName: "AttackIfFavorable",
    NodeType: "Selector",
    Child0: "TryGrenade",
    Child1: "ShootIfAvailable_Favorable"
};
window.behaviorGraphNodesObject["ShootIfAvailable_Favorable"] = {
    nodeName: "ShootIfAvailable_Favorable",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectTargetForStandardShot_Favorable",
    Child2: "SelectAbility-StandardShot"
};
window.behaviorGraphNodesObject["AttackIfIdeal"] = {
    nodeName: "AttackIfIdeal",
    NodeType: "Selector",
    Child0: "TryMoveThenGrenade",
    Child1: "ShootIfAvailable_Opportunist"
};
window.behaviorGraphNodesObject["ShootIfAvailable_Opportunist"] = {
    nodeName: "ShootIfAvailable_Opportunist",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectTargetForStandardShot_Ideal",
    Child2: "SelectAbility-StandardShot"
};
window.behaviorGraphNodesObject["TryOverwatch"] = {
    nodeName: "TryOverwatch",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Overwatch",
    Child1: "SelectAbility-Overwatch"
};
window.behaviorGraphNodesObject["OverwatchIfTargetAvailable"] = {
    nodeName: "OverwatchIfTargetAvailable",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Overwatch",
    Child1: "IsOverwatchTargetAvailable",
    Child2: "SelectAbility-Overwatch"
};
window.behaviorGraphNodesObject["IsOverwatchTargetAvailable"] = {
    nodeName: "IsOverwatchTargetAvailable",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "SelectOverwatchTarget",
    Child2: "HasValidTarget-StandardShot"
};
window.behaviorGraphNodesObject["SelectOverwatchTarget"] = {
    nodeName: "SelectOverwatchTarget",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateOverwatchTarget"
};
window.behaviorGraphNodesObject["EvaluateOverwatchTarget"] = {
    nodeName: "EvaluateOverwatchTarget",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreHitChance",
    Child2: "ApplyDifficultyModifiers",
    Child3: "TargetScoreInvalidateCivilians",
    Child4: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["TryOverwatchIfLastAction"] = {
    nodeName: "TryOverwatchIfLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "ConsiderTakingOverwatch"
};
window.behaviorGraphNodesObject["HasValidTarget-StandardShot"] = {
    nodeName: "HasValidTarget-StandardShot",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetTargetStack-StandardShot"] = {
    nodeName: "SetTargetStack-StandardShot",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectTargetForStandardShot"] = {
    nodeName: "SelectTargetForStandardShot",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "GenericSelectBestTarget",
    Child2: "HasValidTarget-StandardShot"
};
window.behaviorGraphNodesObject["SelectTargetForStandardShot_Ideal"] = {
    nodeName: "SelectTargetForStandardShot_Ideal",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "SelectTarget_Opportunist",
    Child2: "HasValidTarget-StandardShot"
};
window.behaviorGraphNodesObject["SelectTargetForStandardShot_Favorable"] = {
    nodeName: "SelectTargetForStandardShot_Favorable",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "SelectTarget_Favorable",
    Child2: "HasValidTarget-StandardShot"
};
window.behaviorGraphNodesObject["TryShootPriorityTarget"] = {
    nodeName: "TryShootPriorityTarget",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectPriorityTargetForStandardShot",
    Child2: "SelectAbility-StandardShot"
};
window.behaviorGraphNodesObject["SelectPriorityTargetForStandardShot"] = {
    nodeName: "SelectPriorityTargetForStandardShot",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "SelectPriorityTarget",
    Child2: "HasValidTarget-StandardShot"
};
window.behaviorGraphNodesObject["TryAttackPriorityTarget"] = {
    nodeName: "TryAttackPriorityTarget",
    NodeType: "Sequence",
    Child0: "HasPriorityTarget",
    Child1: "AttackPriorityTarget"
};
window.behaviorGraphNodesObject["AttackPriorityTarget"] = {
    nodeName: "AttackPriorityTarget",
    NodeType: "Selector",
    Child0: "TryShootPriorityTarget",
    Child1: "TryMeleeAttackPriorityTarget",
    Child2: "NeedsReload"
};
window.behaviorGraphNodesObject["HasValidTarget-Suppression"] = {
    nodeName: "HasValidTarget-Suppression",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetTargetStack-Suppression"] = {
    nodeName: "SetTargetStack-Suppression",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SuppressIfAvailable"] = {
    nodeName: "SuppressIfAvailable",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Suppression",
    Child1: "SelectTargetForSuppressionByAim",
    Child2: "SelectAbility-Suppression"
};
window.behaviorGraphNodesObject["SelectTargetForSuppressionByAim"] = {
    nodeName: "SelectTargetForSuppressionByAim",
    NodeType: "Sequence",
    Child0: "SetTargetStack-Suppression",
    Child1: "SelectBestSuppressionTargetByAim",
    Child2: "HasValidTarget-Suppression"
};
window.behaviorGraphNodesObject["SelectBestSuppressionTargetByAim"] = {
    nodeName: "SelectBestSuppressionTargetByAim",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateSuppressionTargetByAim"
};
window.behaviorGraphNodesObject["EvaluateSuppressionTargetByAim"] = {
    nodeName: "EvaluateSuppressionTargetByAim",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "SSScoreUnsuppressedByHitChanceValue",
    Child2: "TargetScoreInvalidateCivilians",
    Child3: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["SSScoreUnsuppressedByHitChanceValue"] = {
    nodeName: "SSScoreUnsuppressedByHitChanceValue",
    NodeType: "Successor",
    Child0: "ScoreUnsuppressedByHitChanceValue"
};
window.behaviorGraphNodesObject["ScoreUnsuppressedByHitChanceValue"] = {
    nodeName: "ScoreUnsuppressedByHitChanceValue",
    NodeType: "Sequence",
    Child0: "TargetIsNotSuppressed",
    Child1: "AvoidBoundAndPanickedTargets",
    Child2: "TargetScoreByHitChanceValue-1"
};
window.behaviorGraphNodesObject["HasValidTarget-StandardMelee"] = {
    nodeName: "HasValidTarget-StandardMelee",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["HasValidTarget-Potential"] = {
    nodeName: "HasValidTarget-Potential",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetTargetStack-StandardMelee"] = {
    nodeName: "SetTargetStack-StandardMelee",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SetPotentialTargetStack"] = {
    nodeName: "SetPotentialTargetStack",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SetVisiblePotentialTargetStack"] = {
    nodeName: "SetVisiblePotentialTargetStack",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SetPotentialAllyTargetStack"] = {
    nodeName: "SetPotentialAllyTargetStack",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["IsTargetInMovementRange-StandardMelee"] = {
    nodeName: "IsTargetInMovementRange-StandardMelee",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsTargetInMovementRange-EnergyShield"] = {
    nodeName: "IsTargetInMovementRange-EnergyShield",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TargetNotInMovementRange"] = {
    nodeName: "TargetNotInMovementRange",
    NodeType: "Inverter",
    Child0: "IsTargetInMovementRange-StandardMelee"
};
window.behaviorGraphNodesObject["IsTargetInAttackRange-StandardMelee"] = {
    nodeName: "IsTargetInAttackRange-StandardMelee",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TryStandardMelee"] = {
    nodeName: "TryStandardMelee",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeStepSelector"
};
window.behaviorGraphNodesObject["TryStandardMeleeUnsafe"] = {
    nodeName: "TryStandardMeleeUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeStepSelectorUnsafe"
};
window.behaviorGraphNodesObject["StandardMeleeStepSelector"] = {
    nodeName: "StandardMeleeStepSelector",
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeIfFirstAbility"
};
window.behaviorGraphNodesObject["StandardMeleeStepSelectorUnsafe"] = {
    nodeName: "StandardMeleeStepSelectorUnsafe",
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeIfFirstAbilityUnsafe"
};
window.behaviorGraphNodesObject["StandardMeleeAttack"] = {
    nodeName: "StandardMeleeAttack",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMelee",
    Child1: "SelectTargetForStandardMelee",
    Child2: "SelectAbility-StandardMelee"
};
window.behaviorGraphNodesObject["TryStandardMeleeFANATIC"] = {
    nodeName: "TryStandardMeleeFANATIC",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeStepSelectorFANATIC"
};
window.behaviorGraphNodesObject["TryStandardMeleeFANATICUnsafe"] = {
    nodeName: "TryStandardMeleeFANATICUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeStepSelectorFANATICUnsafe"
};
window.behaviorGraphNodesObject["StandardMeleeStepSelectorFANATIC"] = {
    nodeName: "StandardMeleeStepSelectorFANATIC",
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeIfFirstAbilityFANATIC"
};
window.behaviorGraphNodesObject["StandardMeleeStepSelectorFANATICUnsafe"] = {
    nodeName: "StandardMeleeStepSelectorFANATICUnsafe",
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeIfFirstAbilityFANATICUnsafe"
};
window.behaviorGraphNodesObject["TryStandardMeleeDash"] = {
    nodeName: "TryStandardMeleeDash",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeDashStepSelector"
};
window.behaviorGraphNodesObject["TryStandardMeleeDashUnsafe"] = {
    nodeName: "TryStandardMeleeDashUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeDashStepSelectorUnsafe"
};
window.behaviorGraphNodesObject["StandardMeleeDashStepSelector"] = {
    nodeName: "StandardMeleeDashStepSelector",
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeDash"
};
window.behaviorGraphNodesObject["StandardMeleeDashStepSelectorUnsafe"] = {
    nodeName: "StandardMeleeDashStepSelectorUnsafe",
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeDashUnsafe"
};
window.behaviorGraphNodesObject["TryStandardMeleeDashFANATIC"] = {
    nodeName: "TryStandardMeleeDashFANATIC",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeDashFANATICStepSelector"
};
window.behaviorGraphNodesObject["TryStandardMeleeDashFANATICUnsafe"] = {
    nodeName: "TryStandardMeleeDashFANATICUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "StandardMeleeDashFANATICStepSelectorUnsafe"
};
window.behaviorGraphNodesObject["StandardMeleeDashFANATICStepSelector"] = {
    nodeName: "StandardMeleeDashFANATICStepSelector",
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeDashFANATIC"
};
window.behaviorGraphNodesObject["StandardMeleeDashFANATICStepSelectorUnsafe"] = {
    nodeName: "StandardMeleeDashFANATICStepSelectorUnsafe",
    NodeType: "Selector",
    Child0: "StandardMeleeAttack",
    Child1: "MoveMeleeDashFANATICUnsafe"
};
window.behaviorGraphNodesObject["SelectTargetForStandardMelee"] = {
    nodeName: "SelectTargetForStandardMelee",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardMelee",
    Child1: "SelectBestTargetForStandardMelee",
    Child2: "HasValidTarget-StandardMelee"
};
window.behaviorGraphNodesObject["SelectBestTargetForStandardMelee"] = {
    nodeName: "SelectBestTargetForStandardMelee",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialMeleeTarget"
};
window.behaviorGraphNodesObject["TryMeleeAttackPriorityTarget"] = {
    nodeName: "TryMeleeAttackPriorityTarget",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "MeleeAttackPriorityTargetStepSelector"
};
window.behaviorGraphNodesObject["MeleeAttackPriorityTargetStepSelector"] = {
    nodeName: "MeleeAttackPriorityTargetStepSelector",
    NodeType: "Selector",
    Child0: "MeleeAttackPriorityTarget",
    Child1: "MoveMeleePriorityTargetUnsafe"
};
window.behaviorGraphNodesObject["MeleeAttackPriorityTarget"] = {
    nodeName: "MeleeAttackPriorityTarget",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMelee",
    Child1: "SetTargetStack-StandardMelee",
    Child2: "SelectPriorityTarget",
    Child3: "HasValidTarget-StandardMelee",
    Child4: "SelectAbility-StandardMelee"
};
window.behaviorGraphNodesObject["SelectPotentialMeleeTarget"] = {
    nodeName: "SelectPotentialMeleeTarget",
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "SelectBestPotentialTargetForMelee",
    Child2: "HasValidTarget-Potential"
};
window.behaviorGraphNodesObject["SelectBestPotentialTargetForMelee"] = {
    nodeName: "SelectBestPotentialTargetForMelee",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialMeleeTarget"
};
window.behaviorGraphNodesObject["EvaluatePotentialMeleeTarget"] = {
    nodeName: "EvaluatePotentialMeleeTarget",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreClosestIfInRange",
    Child2: "AvoidBoundAndPanickedTargets",
    Child3: "TargetScoreCivilian",
    Child4: "SSCustomMeleeTargetScore",
    Child5: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["SSCustomMeleeTargetScore"] = {
    nodeName: "SSCustomMeleeTargetScore",
    NodeType: "Successor",
    Child0: "::CustomMeleeTargetScore"
};
window.behaviorGraphNodesObject["::CustomMeleeTargetScore"] = {
    nodeName: "::CustomMeleeTargetScore",
    NodeType: "Sequence",
    Child0: "AddToTargetScore_0" // Overwrite option for melee abilities that are restricted.
};
window.behaviorGraphNodesObject["SelectPotentialMeleePriorityTarget"] = {
    nodeName: "SelectPotentialMeleePriorityTarget",
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "SelectPotentialPriorityTargetForMelee",
    Child2: "HasValidTarget-Potential"
};
window.behaviorGraphNodesObject["SelectPotentialPriorityTargetForMelee"] = {
    nodeName: "SelectPotentialPriorityTargetForMelee",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialPriorityTarget"
};
window.behaviorGraphNodesObject["EvaluatePotentialPriorityTarget"] = {
    nodeName: "EvaluatePotentialPriorityTarget",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreReachableForMelee",
    Child2: "TargetScorePriority",
    Child3: "AvoidBoundAndPanickedTargets",
    Child4: "TargetScoreCivilian",
    Child5: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["DoesGrenadeCauseDamage"] = {
    nodeName: "DoesGrenadeCauseDamage",
    NodeType: "Condition" // Added to prevent Mind Controlled units from throwing smoke grenades.
};
window.behaviorGraphNodesObject["TryMoveThenGrenade"] = {
    nodeName: "TryMoveThenGrenade",
    NodeType: "Selector",
    Child0: "TryMoveForGrenade",
    Child1: "TryGrenade"
};
window.behaviorGraphNodesObject["TryMoveForGrenade"] = {
    nodeName: "TryMoveForGrenade",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-ThrowGrenade",
    Child2: "FindPotentialAoETargets-GrenadeProfile",
    Child3: "MoveStandardIfFirstAbility-Grenade"
};
window.behaviorGraphNodesObject["TryGrenade"] = {
    nodeName: "TryGrenade",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-ThrowGrenade",
    Child1: "FindPotentialAoETargets-GrenadeProfile",
    Child2: "SelectAoETarget-GrenadeProfile",
    Child3: "SelectAbility-ThrowGrenade"
};
window.behaviorGraphNodesObject["TryPanickedGrenadeToss"] = {
    nodeName: "TryPanickedGrenadeToss",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-ThrowGrenade",
    Child1: "FindPotentialAoETargets-GrenadePanickedProfile",
    Child2: "SelectAoETarget-GrenadePanickedProfile",
    Child3: "SelectAbility-ThrowGrenade"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-MarkTarget"] = {
    nodeName: "IsAbilityAvailable-MarkTarget",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-TriggerRage"] = {
    nodeName: "IsAbilityAvailable-TriggerRage",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-PsiReanimation"] = {
    nodeName: "IsAbilityAvailable-PsiReanimation",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-MindSpin"] = {
    nodeName: "IsAbilityAvailable-MindSpin",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-GetOverHere"] = {
    nodeName: "IsAbilityAvailable-GetOverHere",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-PoisonSpit"] = {
    nodeName: "IsAbilityAvailable-PoisonSpit",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-EnergyShield"] = {
    nodeName: "IsAbilityAvailable-EnergyShield",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-AcidBlob"] = {
    nodeName: "IsAbilityAvailable-AcidBlob",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-DelayedExecute"] = {
    nodeName: "IsAbilityAvailable-DelayedExecute",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-MicroMissiles"] = {
    nodeName: "IsAbilityAvailable-MicroMissiles",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-PsiWitchConfuse"] = {
    nodeName: "IsAbilityAvailable-PsiWitchConfuse",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-PsiMindControl"] = {
    nodeName: "IsAbilityAvailable-PsiMindControl",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-TriggerDamagedTeleport"] = {
    nodeName: "IsAbilityAvailable-TriggerDamagedTeleport",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-PsiDimensionalRiftStage1"] = {
    nodeName: "IsAbilityAvailable-PsiDimensionalRiftStage1",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-NullLance"] = {
    nodeName: "IsAbilityAvailable-NullLance",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-ChryssalidBurrow"] = {
    nodeName: "IsAbilityAvailable-ChryssalidBurrow",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-ChryssalidUnburrow"] = {
    nodeName: "IsAbilityAvailable-ChryssalidUnburrow",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-BurrowedAttack"] = {
    nodeName: "IsAbilityAvailable-BurrowedAttack",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-FrenzyTrigger"] = {
    nodeName: "IsAbilityAvailable-FrenzyTrigger",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-BlazingPinionsStage1"] = {
    nodeName: "IsAbilityAvailable-BlazingPinionsStage1",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-AnimaInversion"] = {
    nodeName: "IsAbilityAvailable-AnimaInversion",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-MindProbe"] = {
    nodeName: "IsAbilityAvailable-MindProbe",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-AnimaGate"] = {
    nodeName: "IsAbilityAvailable-AnimaGate",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-AnimaConsume"] = {
    nodeName: "IsAbilityAvailable-AnimaConsume",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-GatekeeperOpen"] = {
    nodeName: "IsAbilityAvailable-GatekeeperOpen",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-GatekeeperClose"] = {
    nodeName: "IsAbilityAvailable-GatekeeperClose",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-Retract"] = {
    nodeName: "IsAbilityAvailable-Retract",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-PsiBombStage1"] = {
    nodeName: "IsAbilityAvailable-PsiBombStage1",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-Teleport"] = {
    nodeName: "IsAbilityAvailable-Teleport",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-TriggerSuperposition"] = {
    nodeName: "IsAbilityAvailable-TriggerSuperposition",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-WrathCannon"] = {
    nodeName: "IsAbilityAvailable-WrathCannon",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-WrathCannonStage1"] = {
    nodeName: "IsAbilityAvailable-WrathCannonStage1",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-SpawnChryssalid"] = {
    nodeName: "IsAbilityAvailable-SpawnChryssalid",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-ScythingClaws"] = {
    nodeName: "IsAbilityAvailable-ScythingClaws",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-Bayonet"] = {
    nodeName: "IsAbilityAvailable-Bayonet",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-Bind"] = {
    nodeName: "IsAbilityAvailable-Bind",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-StunLance"] = {
    nodeName: "IsAbilityReady-StunLance",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-Bind"] = {
    nodeName: "IsAbilityReady-Bind",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-DevastatingPunch"] = {
    nodeName: "IsAbilityReady-DevastatingPunch",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-AnimaConsume"] = {
    nodeName: "IsAbilityReady-AnimaConsume",
    NodeType: "Condition",
    Param0: "AA_ValueCheckFailed",
    Param1: "AA_GatekeeperClosed" //  Added ValueCheckFailed as a valid "ready" failure", for not being in Open state.
};
window.behaviorGraphNodesObject["IsAbilityReady-AnimaInversion"] = {
    nodeName: "IsAbilityReady-AnimaInversion",
    NodeType: "Condition",
    Param0: "AA_ValueCheckFailed",
    Param1: "AA_GatekeeperClosed" //  Added ValueCheckFailed as a valid "ready" failure", for not being in Open state.
};
window.behaviorGraphNodesObject["IsAbilityReady-ScythingClaws"] = {
    nodeName: "IsAbilityReady-ScythingClaws",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-Bayonet"] = {
    nodeName: "IsAbilityReady-Bayonet",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-PsiBombStage1"] = {
    nodeName: "IsAbilityReady-PsiBombStage1",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-ThrowGrenade"] = {
    nodeName: "IsAbilityReady-ThrowGrenade",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-PoisonSpit"] = {
    nodeName: "IsAbilityReady-PoisonSpit",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-AcidBlob"] = {
    nodeName: "IsAbilityReady-AcidBlob",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-MicroMissiles"] = {
    nodeName: "IsAbilityReady-MicroMissiles",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-BlazingPinionsStage1"] = {
    nodeName: "IsAbilityReady-BlazingPinionsStage1",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-PsiDimensionalRiftStage1"] = {
    nodeName: "IsAbilityReady-PsiDimensionalRiftStage1",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-NullLance"] = {
    nodeName: "IsAbilityReady-NullLance",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-EnergyShield"] = {
    nodeName: "IsAbilityReady-EnergyShield",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-Suppression"] = {
    nodeName: "IsAbilityReady-Suppression",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SelectAbility-MarkTarget"] = {
    nodeName: "SelectAbility-MarkTarget",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-StunLance"] = {
    nodeName: "SelectAbility-StunLance",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-TriggerRage"] = {
    nodeName: "SelectAbility-TriggerRage",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-PsiReanimation"] = {
    nodeName: "SelectAbility-PsiReanimation",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-MindSpin"] = {
    nodeName: "SelectAbility-MindSpin",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-GetOverHere"] = {
    nodeName: "SelectAbility-GetOverHere",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-Bind"] = {
    nodeName: "SelectAbility-Bind",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-PoisonSpit"] = {
    nodeName: "SelectAbility-PoisonSpit",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-AcidBlob"] = {
    nodeName: "SelectAbility-AcidBlob",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-EnergyShield"] = {
    nodeName: "SelectAbility-EnergyShield",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-DevastatingPunch"] = {
    nodeName: "SelectAbility-DevastatingPunch",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-DelayedExecute"] = {
    nodeName: "SelectAbility-DelayedExecute",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-Bayonet"] = {
    nodeName: "SelectAbility-Bayonet",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-MicroMissiles"] = {
    nodeName: "SelectAbility-MicroMissiles",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-PsiMindControl"] = {
    nodeName: "SelectAbility-PsiMindControl",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-TriggerDamagedTeleport"] = {
    nodeName: "SelectAbility-TriggerDamagedTeleport",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-PsiDimensionalRiftStage1"] = {
    nodeName: "SelectAbility-PsiDimensionalRiftStage1",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-ChryssalidBurrow"] = {
    nodeName: "SelectAbility-ChryssalidBurrow",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-ChryssalidUnburrow"] = {
    nodeName: "SelectAbility-ChryssalidUnburrow",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-BurrowedAttack"] = {
    nodeName: "SelectAbility-BurrowedAttack",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-FrenzyTrigger"] = {
    nodeName: "SelectAbility-FrenzyTrigger",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-BlazingPinionsStage1"] = {
    nodeName: "SelectAbility-BlazingPinionsStage1",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-AnimaInversion"] = {
    nodeName: "SelectAbility-AnimaInversion",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-AnimaConsume"] = {
    nodeName: "SelectAbility-AnimaConsume",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-AnimaGate"] = {
    nodeName: "SelectAbility-AnimaGate",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-MindProbe"] = {
    nodeName: "SelectAbility-MindProbe",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-GatekeeperOpen"] = {
    nodeName: "SelectAbility-GatekeeperOpen",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-GatekeeperClose"] = {
    nodeName: "SelectAbility-GatekeeperClose",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-Retract"] = {
    nodeName: "SelectAbility-Retract",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-PsiBombStage1"] = {
    nodeName: "SelectAbility-PsiBombStage1",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-Teleport"] = {
    nodeName: "SelectAbility-Teleport",
    NodeType: "Action",
    Param0: "UseDestination"
};
window.behaviorGraphNodesObject["SelectAbility-TriggerSuperposition"] = {
    nodeName: "SelectAbility-TriggerSuperposition",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-ScythingClaws"] = {
    nodeName: "SelectAbility-ScythingClaws",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-WrathCannon"] = {
    nodeName: "SelectAbility-WrathCannon",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-WrathCannonStage1"] = {
    nodeName: "SelectAbility-WrathCannonStage1",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-SpawnChryssalid"] = {
    nodeName: "SelectAbility-SpawnChryssalid",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAbility-NullLance"] = {
    nodeName: "SelectAbility-NullLance",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-GrenadeProfile"] = {
    nodeName: "FindPotentialAoETargets-GrenadeProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-GrenadeAggressiveProfile"] = {
    nodeName: "FindPotentialAoETargets-GrenadeAggressiveProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-GrenadePanickedProfile"] = {
    nodeName: "FindPotentialAoETargets-GrenadePanickedProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-GrenadeMindControlledProfile"] = {
    nodeName: "FindPotentialAoETargets-GrenadeMindControlledProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-BlazingPinionsBasicProfile"] = {
    nodeName: "FindPotentialAoETargets-BlazingPinionsBasicProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-AcidBlobProfile"] = {
    nodeName: "FindPotentialAoETargets-AcidBlobProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-PoisonSpitProfile"] = {
    nodeName: "FindPotentialAoETargets-PoisonSpitProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-PoisonSpitSingleProfile"] = {
    nodeName: "FindPotentialAoETargets-PoisonSpitSingleProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-MicroMissilesProfile"] = {
    nodeName: "FindPotentialAoETargets-MicroMissilesProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-MicroMissilesProfileMk2"] = {
    nodeName: "FindPotentialAoETargets-MicroMissilesProfileMk2",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-PsiRiftProfile"] = {
    nodeName: "FindPotentialAoETargets-PsiRiftProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-AnimaInversionCorpseProfile"] = {
    nodeName: "FindPotentialAoETargets-AnimaInversionCorpseProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-AnimaInversionMixedProfile"] = {
    nodeName: "FindPotentialAoETargets-AnimaInversionMixedProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-PsiBombProfile"] = {
    nodeName: "FindPotentialAoETargets-PsiBombProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-TeleportProfile"] = {
    nodeName: "FindPotentialAoETargets-TeleportProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-ScythingClawsProfile"] = {
    nodeName: "FindPotentialAoETargets-ScythingClawsProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-ScythingClawsPrefTargetProfile"] = {
    nodeName: "FindPotentialAoETargets-ScythingClawsPrefTargetProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-WrathCannonProfile"] = {
    nodeName: "FindPotentialAoETargets-WrathCannonProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-WrathCannonS1Profile"] = {
    nodeName: "FindPotentialAoETargets-WrathCannonS1Profile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-NullLanceProfile"] = {
    nodeName: "FindPotentialAoETargets-NullLanceProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindPotentialAoETargets-NullLanceValidateProfile"] = {
    nodeName: "FindPotentialAoETargets-NullLanceValidateProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-GrenadeProfile"] = {
    nodeName: "SelectAoETarget-GrenadeProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-GrenadeAggressiveProfile"] = {
    nodeName: "SelectAoETarget-GrenadeAggressiveProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-GrenadePanickedProfile"] = {
    nodeName: "SelectAoETarget-GrenadePanickedProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-GrenadeMindControlledProfile"] = {
    nodeName: "SelectAoETarget-GrenadeMindControlledProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-BlazingPinionsBasicProfile"] = {
    nodeName: "SelectAoETarget-BlazingPinionsBasicProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-AcidBlobProfile"] = {
    nodeName: "SelectAoETarget-AcidBlobProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-PoisonSpitProfile"] = {
    nodeName: "SelectAoETarget-PoisonSpitProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-PoisonSpitSingleProfile"] = {
    nodeName: "SelectAoETarget-PoisonSpitSingleProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-MicroMissilesProfile"] = {
    nodeName: "SelectAoETarget-MicroMissilesProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-MicroMissilesProfileMk2"] = {
    nodeName: "SelectAoETarget-MicroMissilesProfileMk2",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-PsiRiftProfile"] = {
    nodeName: "SelectAoETarget-PsiRiftProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-AnimaInversionCorpseProfile"] = {
    nodeName: "SelectAoETarget-AnimaInversionCorpseProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-AnimaInversionMixedProfile"] = {
    nodeName: "SelectAoETarget-AnimaInversionMixedProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-PsiBombProfile"] = {
    nodeName: "SelectAoETarget-PsiBombProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-TeleportProfile"] = {
    nodeName: "SelectAoETarget-TeleportProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-ScythingClawsProfile"] = {
    nodeName: "SelectAoETarget-ScythingClawsProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-ScythingClawsPrefTargetProfile"] = {
    nodeName: "SelectAoETarget-ScythingClawsPrefTargetProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-WrathCannonProfile"] = {
    nodeName: "SelectAoETarget-WrathCannonProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-WrathCannonS1Profile"] = {
    nodeName: "SelectAoETarget-WrathCannonS1Profile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-NullLanceProfile"] = {
    nodeName: "SelectAoETarget-NullLanceProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectAoETarget-NullLanceValidateProfile"] = {
    nodeName: "SelectAoETarget-NullLanceValidateProfile",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["MoveStandardIfFirstAbility-Grenade"] = {
    nodeName: "MoveStandardIfFirstAbility-Grenade",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindGrenadeDestination",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveStandardIfFirstAbility-PoisonSpit"] = {
    nodeName: "MoveStandardIfFirstAbility-PoisonSpit",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindPoisonSpitDestination",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveStandardIfFirstAbility-AcidBlob"] = {
    nodeName: "MoveStandardIfFirstAbility-AcidBlob",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindAcidBlobDestination",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveStandardIfFirstAbility-MicroMissiles"] = {
    nodeName: "MoveStandardIfFirstAbility-MicroMissiles",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindMicroMissilesDestination",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveStandardIfFirstAbility-BlazingPinions"] = {
    nodeName: "MoveStandardIfFirstAbility-BlazingPinions",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindBlazingPinionsDestination",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveStandardIfFirstAbility-PsiDimensionalRiftStage1"] = {
    nodeName: "MoveStandardIfFirstAbility-PsiDimensionalRiftStage1",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindDimensionalRiftDestination",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveStandardIfFirstAbility-EnergyShield"] = {
    nodeName: "MoveStandardIfFirstAbility-EnergyShield",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindShieldDestinationDefensive",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveStandardIfFirstAbility-PsiMindControl"] = {
    nodeName: "MoveStandardIfFirstAbility-PsiMindControl",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindMindControlDestinationDefensive",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveStandardIfFirstAbility-AnimaInversion"] = {
    nodeName: "MoveStandardIfFirstAbility-AnimaInversion",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindAnimaInversionDestination",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveStandardIfFirstAbility-PsiBombStage1"] = {
    nodeName: "MoveStandardIfFirstAbility-PsiBombStage1",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindPsiBombDestination",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveStandardIfFirstAbility-NullLance"] = {
    nodeName: "MoveStandardIfFirstAbility-NullLance",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindNullLanceDestination",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MoveStandardIfFirstAbility-Suppression"] = {
    nodeName: "MoveStandardIfFirstAbility-Suppression",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindSuppressionDestination",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["TeleportForPsiBombTarget"] = {
    nodeName: "TeleportForPsiBombTarget",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Teleport",
    Child1: "FindPsiBombTeleportDestination",
    Child2: "SelectAbility-Teleport"
};
window.behaviorGraphNodesObject["TeleportForPsiMindControl"] = {
    nodeName: "TeleportForPsiMindControl",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Teleport",
    Child1: "FindPsiMindControlTeleportDestination",
    Child2: "SelectAbility-Teleport"
};
window.behaviorGraphNodesObject["TeleportForPsiDimensionalRiftTarget"] = {
    nodeName: "TeleportForPsiDimensionalRiftTarget",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Teleport",
    Child1: "FindPsiDimensionalRiftTeleportDestination",
    Child2: "SelectAbility-Teleport"
};
window.behaviorGraphNodesObject["TeleportForNullLanceTarget"] = {
    nodeName: "TeleportForNullLanceTarget",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Teleport",
    Child1: "FindNullLanceTeleportDestination",
    Child2: "SelectAbility-Teleport"
};
window.behaviorGraphNodesObject["HasValidTarget-StunLance"] = {
    nodeName: "HasValidTarget-StunLance",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetTargetStack-StunLance"] = {
    nodeName: "SetTargetStack-StunLance",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["TryStunLance"] = {
    nodeName: "TryStunLance",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StunLance",
    Child1: "StunLanceStepSelector"
};
window.behaviorGraphNodesObject["StunLanceStepSelector"] = {
    nodeName: "StunLanceStepSelector",
    NodeType: "Selector",
    Child0: "StunLanceAttack",
    Child1: "MoveMeleeIfFirstAbilityFANATIC"
};
window.behaviorGraphNodesObject["StunLanceAttack"] = {
    nodeName: "StunLanceAttack",
    NodeType: "Sequence",
    Child0: "SelectTargetForStunLance",
    Child1: "SelectAbility-StunLance"
};
window.behaviorGraphNodesObject["SelectTargetForStunLance"] = {
    nodeName: "SelectTargetForStunLance",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StunLance",
    Child1: "SelectBestTargetForStunLance",
    Child2: "HasValidTarget-StunLance"
};
window.behaviorGraphNodesObject["SelectBestTargetForStunLance"] = {
    nodeName: "SelectBestTargetForStunLance",
    NodeType: "RepeatUntilFail",
    Child0: "TargetSelectIterationForStunLance"
};
window.behaviorGraphNodesObject["TargetSelectIterationForStunLance"] = {
    nodeName: "TargetSelectIterationForStunLance",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "EvaluateTargetForStunLance",
    Child2: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["EvaluateTargetForStunLance"] = {
    nodeName: "EvaluateTargetForStunLance",
    NodeType: "Sequence",
    Child0: "TargetScoreHitChance",
    Child1: "TargetScoreHealth_HighFirst",
    Child2: "TargetScoreMarked",
    Child3: "AvoidBoundAndPanickedTargets",
    Child4: "TargetScoreCivilian",
};
window.behaviorGraphNodesObject["TryMarkTargetOption"] = {
    nodeName: "TryMarkTargetOption",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-MarkTarget",
    Child1: "AnyAlliesVisible",
    Child2: "MultipleEnemiesVisible",
    Child3: "NoUnitsMarked",
    Child4: "SelectTargetForMarkTarget",
    Child5: "SelectAbility-MarkTarget",
    Intent: "Marking a target: GETTIM!"
};
window.behaviorGraphNodesObject["SelectTargetForMarkTarget"] = {
    nodeName: "SelectTargetForMarkTarget",
    NodeType: "Sequence",
    Child0: "SetTargetStack-MarkTarget",
    Child1: "ScoreAllTargets_MarkTarget",
    Child2: "HasValidTarget-MarkTarget"
};
window.behaviorGraphNodesObject["ScoreAllTargets_MarkTarget"] = {
    nodeName: "ScoreAllTargets_MarkTarget",
    NodeType: "RepeatUntilFail",
    Child0: "ScoreTarget_MarkTargetLoop"
};
window.behaviorGraphNodesObject["ScoreTarget_MarkTargetLoop"] = {
    nodeName: "ScoreTarget_MarkTargetLoop",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "ScoreTarget_MarkTargetScoring",
    Child2: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["ScoreTarget_MarkTargetScoring"] = {
    nodeName: "ScoreTarget_MarkTargetScoring",
    NodeType: "Successor",
    Child0: "ScoreMarkTargetOption"
};
window.behaviorGraphNodesObject["ScoreMarkTargetOption"] = {
    nodeName: "ScoreMarkTargetOption",
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
window.behaviorGraphNodesObject["SetTargetStack-MarkTarget"] = {
    nodeName: "SetTargetStack-MarkTarget",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["HasValidTarget-MarkTarget"] = {
    nodeName: "HasValidTarget-MarkTarget",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["NoUnitsMarked"] = {
    nodeName: "NoUnitsMarked",
    NodeType: "Inverter",
    Child0: "HaveAnyMarkedTargets"
};
window.behaviorGraphNodesObject["HaveAnyMarkedTargets"] = {
    nodeName: "HaveAnyMarkedTargets",
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "FindAnyMarkedTarget",
    Child2: "HasValidTarget-Potential"
};
window.behaviorGraphNodesObject["FindAnyMarkedTarget"] = {
    nodeName: "FindAnyMarkedTarget",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTargetIsMarked"
};
window.behaviorGraphNodesObject["EvaluateTargetIsMarked"] = {
    nodeName: "EvaluateTargetIsMarked",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "SSScoreIfMarked",
    Child2: "UpdateBestTarget",
    Child3: "BreakOnAnyValidTarget-Potential"
};
window.behaviorGraphNodesObject["SSScoreIfMarked"] = {
    nodeName: "SSScoreIfMarked",
    NodeType: "Successor",
    Child0: "ScoreTargetIfMarked"
};
window.behaviorGraphNodesObject["BreakOnAnyValidTarget-Potential"] = {
    nodeName: "BreakOnAnyValidTarget-Potential",
    NodeType: "Inverter",
    Child0: "HasValidTarget-Potential"
};
window.behaviorGraphNodesObject["TryEnergyShieldOnMultipleTargets"] = {
    nodeName: "TryEnergyShieldOnMultipleTargets",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-EnergyShield",
    Child1: "HasMultipleEnergyShieldTargets",
    Child2: "SelectAbility-EnergyShield"
};
window.behaviorGraphNodesObject["TryEnergyShieldOnAnyTarget"] = {
    nodeName: "TryEnergyShieldOnAnyTarget",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-EnergyShield",
    Child1: "HasAnyEnergyShieldTargets",
    Child2: "SelectAbility-EnergyShield"
};
window.behaviorGraphNodesObject["SelectPotentialTargetForEnergyShield"] = {
    nodeName: "SelectPotentialTargetForEnergyShield",
    NodeType: "Sequence",
    Child0: "SetPotentialAllyTargetStack",
    Child1: "SelectBestAllyTargetForEnergyShield",
    Child2: "HasValidTarget-Potential"
};
window.behaviorGraphNodesObject["SelectBestAllyTargetForEnergyShield"] = {
    nodeName: "SelectBestAllyTargetForEnergyShield",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialEnergyShieldTarget"
};
window.behaviorGraphNodesObject["EvaluatePotentialEnergyShieldTarget"] = {
    nodeName: "EvaluatePotentialEnergyShieldTarget",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "ScoreBestTargetForEnergyShield",
    Child2: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["ScoreBestTargetForEnergyShield"] = {
    nodeName: "ScoreBestTargetForEnergyShield",
    NodeType: "Successor",
    Child0: "TargetScoreReachableForEnergyShield"
};
window.behaviorGraphNodesObject["TargetScoreReachableForEnergyShield"] = {
    nodeName: "TargetScoreReachableForEnergyShield",
    NodeType: "Sequence",
    Child0: "IsTargetInMovementRange-EnergyShield",
    Child1: "AvoidBoundAndPanickedTargets",
    Child2: "ScoreByHP"
};
window.behaviorGraphNodesObject["ScoreByHP"] = {
    nodeName: "ScoreByHP",
    NodeType: "Sequence",
    Child0: "TargetScoreByScaledMaxStat-eStat_HP",
    Child1: "TargetScoreByScaledCurrStat-eStat_HP"
};
window.behaviorGraphNodesObject["TargetScoreByScaledMaxStat-eStat_HP"] = {
    nodeName: "TargetScoreByScaledMaxStat-eStat_HP",
    NodeType: "Action",
    Param0: "10"
};
window.behaviorGraphNodesObject["TargetScoreByScaledCurrStat-eStat_HP"] = {
    nodeName: "TargetScoreByScaledCurrStat-eStat_HP",
    NodeType: "Action",
    Param0: "1"
};
window.behaviorGraphNodesObject["TryMoveThenMicroMissiles"] = {
    nodeName: "TryMoveThenMicroMissiles",
    NodeType: "Selector",
    Child0: "TryMoveForMicroMissiles",
    Child1: "TryMicroMissiles"
};
window.behaviorGraphNodesObject["TryMoveForMicroMissiles"] = {
    nodeName: "TryMoveForMicroMissiles",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-MicroMissiles",
    Child2: "FindPotentialAoETargets-MicroMissilesProfile",
    Child3: "MoveStandardIfFirstAbility-MicroMissiles"
};
window.behaviorGraphNodesObject["TryMicroMissiles"] = {
    nodeName: "TryMicroMissiles",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-MicroMissiles",
    Child1: "FindPotentialAoETargets-MicroMissilesProfile",
    Child2: "SelectAoETarget-MicroMissilesProfile",
    Child3: "SelectAbility-MicroMissiles"
};
window.behaviorGraphNodesObject["TryMoveThenMicroMissilesMk2"] = {
    nodeName: "TryMoveThenMicroMissilesMk2",
    NodeType: "Selector",
    Child0: "TryMoveForMicroMissilesMk2",
    Child1: "TryMicroMissilesMk2"
};
window.behaviorGraphNodesObject["TryMoveForMicroMissilesMk2"] = {
    nodeName: "TryMoveForMicroMissilesMk2",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-MicroMissiles",
    Child2: "FindPotentialAoETargets-MicroMissilesProfileMk2",
    Child3: "MoveStandardIfFirstAbility-MicroMissiles"
};
window.behaviorGraphNodesObject["TryMicroMissilesMk2"] = {
    nodeName: "TryMicroMissilesMk2",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-MicroMissiles",
    Child1: "FindPotentialAoETargets-MicroMissilesProfileMk2",
    Child2: "SelectAoETarget-MicroMissilesProfileMk2",
    Child3: "SelectAbility-MicroMissiles"
};
window.behaviorGraphNodesObject["TryMoveThenAcidBlob"] = {
    nodeName: "TryMoveThenAcidBlob",
    NodeType: "Selector",
    Child0: "TryMoveForAcidBlob",
    Child1: "TryAcidBlob"
};
window.behaviorGraphNodesObject["TryMoveForAcidBlob"] = {
    nodeName: "TryMoveForAcidBlob",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-AcidBlob",
    Child2: "FindPotentialAoETargets-AcidBlobProfile",
    Child3: "MoveStandardIfFirstAbility-AcidBlob"
};
window.behaviorGraphNodesObject["TryAcidBlob"] = {
    nodeName: "TryAcidBlob",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-AcidBlob",
    Child1: "FindPotentialAoETargets-AcidBlobProfile",
    Child2: "SelectAoETarget-AcidBlobProfile",
    Child3: "SelectAbility-AcidBlob"
};
window.behaviorGraphNodesObject["HasValidTarget-Bayonet"] = {
    nodeName: "HasValidTarget-Bayonet",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetTargetStack-Bayonet"] = {
    nodeName: "SetTargetStack-Bayonet",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["TryBayonet"] = {
    nodeName: "TryBayonet",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-Bayonet",
    Child1: "BayonetStepSelector"
};
window.behaviorGraphNodesObject["BayonetStepSelector"] = {
    nodeName: "BayonetStepSelector",
    NodeType: "Selector",
    Child0: "BayonetAttack",
    Child1: "MoveMeleeDefensiveIfFirstAbility"
};
window.behaviorGraphNodesObject["BayonetAttack"] = {
    nodeName: "BayonetAttack",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Bayonet",
    Child1: "SelectTargetForBayonet",
    Child2: "SelectAbility-Bayonet"
};
window.behaviorGraphNodesObject["SelectTargetForBayonet"] = {
    nodeName: "SelectTargetForBayonet",
    NodeType: "Sequence",
    Child0: "SetTargetStack-Bayonet",
    Child1: "SelectBestTargetForStandardMelee",
    Child2: "HasValidTarget-Bayonet"
};
window.behaviorGraphNodesObject["SelectBestTargetForBayonet"] = {
    nodeName: "SelectBestTargetForBayonet",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialMeleeTarget"
};
window.behaviorGraphNodesObject["HasValidTarget-DevastatingPunch"] = {
    nodeName: "HasValidTarget-DevastatingPunch",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetTargetStack-DevastatingPunch"] = {
    nodeName: "SetTargetStack-DevastatingPunch",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["TryBerserkerMelee"] = {
    nodeName: "TryBerserkerMelee",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-DevastatingPunch",
    Child1: "MoveMeleeOrDevastatingPunchAttack"
};
window.behaviorGraphNodesObject["MoveMeleeOrDevastatingPunchAttack"] = {
    nodeName: "MoveMeleeOrDevastatingPunchAttack",
    NodeType: "Selector",
    Child0: "TryDevastatingPunchAttack",
    Child1: "MoveToDevastatingPunchTargetIfFirstAbility"
};
window.behaviorGraphNodesObject["TryDevastatingPunchAttack"] = {
    nodeName: "TryDevastatingPunchAttack",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMelee",
    Child1: "SelectTargetForDevastatingPunch",
    Child2: "SelectAbility-StandardMelee"
};
window.behaviorGraphNodesObject["MoveToDevastatingPunchTargetIfFirstAbility"] = {
    nodeName: "MoveToDevastatingPunchTargetIfFirstAbility",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "ResetDestinationSearch",
    Child3: "IncludeCiviliansIfTerrorist",
    Child4: "FindBerserkerMeleeDestination",
    Child5: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["FindBerserkerMeleeDestination"] = {
    nodeName: "FindBerserkerMeleeDestination",
    NodeType: "Sequence",
    Child0: "SelectPotentialTargetForDevastatingPunch",
    Child1: "RestrictToPotentialTargetRange-StandardMelee",
    Child2: "FindRestrictedDestination-Melee"
};
window.behaviorGraphNodesObject["SelectTargetForDevastatingPunch"] = {
    nodeName: "SelectTargetForDevastatingPunch",
    NodeType: "Sequence",
    Child0: "SetTargetStack-DevastatingPunch",
    Child1: "SelectBestTargetForDevastatingPunch",
    Child2: "HasValidTarget-DevastatingPunch"
};
window.behaviorGraphNodesObject["SelectPotentialTargetForDevastatingPunch"] = {
    nodeName: "SelectPotentialTargetForDevastatingPunch",
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "SelectBestTargetForDevastatingPunch",
    Child2: "HasValidTarget-Potential"
};
window.behaviorGraphNodesObject["SelectBestTargetForDevastatingPunch"] = {
    nodeName: "SelectBestTargetForDevastatingPunch",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialDevastatingPunchTarget"
};
window.behaviorGraphNodesObject["EvaluatePotentialDevastatingPunchTarget"] = {
    nodeName: "EvaluatePotentialDevastatingPunchTarget",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreClosestVisibleAllyIfEnraged",
    Child2: "TargetScoreClosestEnemyIfInRange",
    Child3: "TargetScoreInvalidateCivilians",
    Child4: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["TargetScoreClosestVisibleAllyIfEnraged"] = {
    nodeName: "TargetScoreClosestVisibleAllyIfEnraged",
    NodeType: "Successor",
    Child0: "ScoreClosestVisibleAllyIfEnraged"
};
window.behaviorGraphNodesObject["ScoreClosestVisibleAllyIfEnraged"] = {
    nodeName: "ScoreClosestVisibleAllyIfEnraged",
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
window.behaviorGraphNodesObject["TargetScoreClosestEnemyIfInRange"] = {
    nodeName: "TargetScoreClosestEnemyIfInRange",
    NodeType: "Successor",
    Child0: "ScoreClosestEnemyIfInRange"
};
window.behaviorGraphNodesObject["ScoreClosestEnemyIfInRange"] = {
    nodeName: "ScoreClosestEnemyIfInRange",
    NodeType: "Sequence",
    Child0: "TargetIsEnemy",
    Child1: "TargetIsNotAlien",
    Child2: "IsTargetInMovementRange-StandardMelee",
    Child3: "TargetScoreByScaledDistance-1",
    Child4: "AddToTargetScore_100",
    Child5: "AvoidBoundAndPanickedTargets"
};
window.behaviorGraphNodesObject["TryTriggerRage"] = {
    nodeName: "TryTriggerRage",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-TriggerRage",
    Child1: "SelectAbility-TriggerRage"
};
window.behaviorGraphNodesObject["HasValidTarget-MindSpin"] = {
    nodeName: "HasValidTarget-MindSpin",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetTargetStack-MindSpin"] = {
    nodeName: "SetTargetStack-MindSpin",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SelectTargetForMindSpin"] = {
    nodeName: "SelectTargetForMindSpin",
    NodeType: "Sequence",
    Child0: "SetTargetStack-MindSpin",
    Child1: "SelectBestTargetForMindSpin",
    Child2: "HasValidTarget-MindSpin"
};
window.behaviorGraphNodesObject["SelectBestTargetForMindSpin"] = {
    nodeName: "SelectBestTargetForMindSpin",
    NodeType: "RepeatUntilFail",
    Child0: "PsiEvaluateTargetsGeneric"
};
window.behaviorGraphNodesObject["HasValidTarget-PsiReanimation"] = {
    nodeName: "HasValidTarget-PsiReanimation",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TryPsiReanimation"] = {
    nodeName: "TryPsiReanimation",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-PsiReanimation",
    Child1: "SelectTargetForPsiReanimation",
    Child2: "SelectAbility-PsiReanimation"
};
window.behaviorGraphNodesObject["SelectTargetForPsiReanimation"] = {
    nodeName: "SelectTargetForPsiReanimation",
    NodeType: "Sequence",
    Child0: "SetTargetStack-PsiReanimation",
    Child1: "GenericSelectTargetSomewhatRandomly",
    Child2: "HasValidTarget-PsiReanimation"
};
window.behaviorGraphNodesObject["SetTargetStack-PsiReanimation"] = {
    nodeName: "SetTargetStack-PsiReanimation",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["HasValidTarget-GetOverHere"] = {
    nodeName: "HasValidTarget-GetOverHere",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetTargetStack-GetOverHere"] = {
    nodeName: "SetTargetStack-GetOverHere",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["TryGetOverHere"] = {
    nodeName: "TryGetOverHere",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-GetOverHere",
    Child1: "SelectTargetForGetOverHere",
    Child2: "SelectAbility-GetOverHere"
};
window.behaviorGraphNodesObject["SelectTargetForGetOverHere"] = {
    nodeName: "SelectTargetForGetOverHere",
    NodeType: "Sequence",
    Child0: "SetTargetStack-GetOverHere",
    Child1: "SelectBestTargetForGetOverHere",
    Child2: "HasValidTarget-GetOverHere"
};
window.behaviorGraphNodesObject["SelectBestTargetForGetOverHere"] = {
    nodeName: "SelectBestTargetForGetOverHere",
    NodeType: "RepeatUntilFail",
    Child0: "TargetSelectIterationForGetOverHere"
};
window.behaviorGraphNodesObject["TargetSelectIterationForGetOverHere"] = {
    nodeName: "TargetSelectIterationForGetOverHere",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "GenericTargetEvaluations",
    Child2: "TargetScoreInvalidateCivilians",
    Child3: "SSTargetScoreInvalidTonguePullTargets",
    Child4: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["SSTargetScoreInvalidTonguePullTargets"] = {
    nodeName: "SSTargetScoreInvalidTonguePullTargets",
    NodeType: "Successor",
    Child0: "TargetScoreInvalidTonguePullTargets"
};
window.behaviorGraphNodesObject["TargetScoreInvalidTonguePullTargets"] = {
    nodeName: "TargetScoreInvalidTonguePullTargets",
    NodeType: "Sequence",
    Child0: "IsInvalidTonguePullTarget",
    Child1: "AddToTargetScore_-1000"
};
window.behaviorGraphNodesObject["IsInvalidTonguePullTarget"] = {
    nodeName: "IsInvalidTonguePullTarget",
    NodeType: "Selector",
    Child0: "TargetAffectedByEffect-Suppression",
    Child1: "TargetIsApplyingEffect-Suppression" // 
};
window.behaviorGraphNodesObject["IsValidTonguePullTarget"] = {
    nodeName: "IsValidTonguePullTarget",
    NodeType: "Inverter",
    Child0: "IsInvalidTonguePullTarget"
};
window.behaviorGraphNodesObject["TryMoveThenPoisonSpit"] = {
    nodeName: "TryMoveThenPoisonSpit",
    NodeType: "Selector",
    Child0: "TryMoveForPoisonSpit",
    Child1: "TryPoisonSpit"
};
window.behaviorGraphNodesObject["TryMoveForPoisonSpit"] = {
    nodeName: "TryMoveForPoisonSpit",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-PoisonSpit",
    Child2: "FindPotentialAoETargets-PoisonSpitProfile",
    Child3: "MoveStandardIfFirstAbility-PoisonSpit"
};
window.behaviorGraphNodesObject["TryPoisonSpit"] = {
    nodeName: "TryPoisonSpit",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-PoisonSpit",
    Child1: "FindPotentialAoETargets-PoisonSpitProfile",
    Child2: "SelectAoETarget-PoisonSpitProfile",
    Child3: "SelectAbility-PoisonSpit"
};
window.behaviorGraphNodesObject["TryMoveThenPoisonSpitSingle"] = {
    nodeName: "TryMoveThenPoisonSpitSingle",
    NodeType: "Selector",
    Child0: "TryMoveForPoisonSpitSingle",
    Child1: "TryPoisonSpitSingle"
};
window.behaviorGraphNodesObject["TryMoveForPoisonSpitSingle"] = {
    nodeName: "TryMoveForPoisonSpitSingle",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-PoisonSpit",
    Child2: "FindPotentialAoETargets-PoisonSpitSingleProfile",
    Child3: "MoveStandardIfFirstAbility-PoisonSpit"
};
window.behaviorGraphNodesObject["TryPoisonSpitSingle"] = {
    nodeName: "TryPoisonSpitSingle",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-PoisonSpit",
    Child1: "FindPotentialAoETargets-PoisonSpitSingleProfile",
    Child2: "SelectAoETarget-PoisonSpitSingleProfile",
    Child3: "SelectAbility-PoisonSpit"
};
window.behaviorGraphNodesObject["HasValidTarget-Bind"] = {
    nodeName: "HasValidTarget-Bind",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetTargetStack-Bind"] = {
    nodeName: "SetTargetStack-Bind",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["TryBind"] = {
    nodeName: "TryBind",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-Bind",
    Child1: "MoveMeleeOrBindAttack"
};
window.behaviorGraphNodesObject["MoveMeleeOrBindAttack"] = {
    nodeName: "MoveMeleeOrBindAttack",
    NodeType: "Selector",
    Child0: "BindAttack",
    Child1: "MoveForBindIfFirstAbility"
};
window.behaviorGraphNodesObject["BindAttack"] = {
    nodeName: "BindAttack",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Bind",
    Child1: "SelectTargetForBind",
    Child2: "SelectAbility-Bind"
};
window.behaviorGraphNodesObject["MoveForBindIfFirstAbility"] = {
    nodeName: "MoveForBindIfFirstAbility",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "MoveForBindIfFirstAbilityUnsafe"
};
window.behaviorGraphNodesObject["MoveForBindIfFirstAbilityUnsafe"] = {
    nodeName: "MoveForBindIfFirstAbilityUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "ResetDestinationSearch",
    Child3: "IncludeCiviliansIfTerrorist",
    Child4: "FindViperMeleeDestination",
    Child5: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["FindViperMeleeDestination"] = {
    nodeName: "FindViperMeleeDestination",
    NodeType: "Sequence",
    Child0: "SelectPotentialTargetForBind",
    Child1: "RestrictToPotentialTargetRange-StandardMelee",
    Child2: "FindRestrictedDestination-Melee"
};
window.behaviorGraphNodesObject["SelectTargetForBind"] = {
    nodeName: "SelectTargetForBind",
    NodeType: "Sequence",
    Child0: "SetTargetStack-Bind",
    Child1: "SelectBestTargetForBind",
    Child2: "HasValidTarget-Bind"
};
window.behaviorGraphNodesObject["SelectPotentialTargetForBind"] = {
    nodeName: "SelectPotentialTargetForBind",
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "SelectBestTargetForBind",
    Child2: "HasValidTarget-Potential"
};
window.behaviorGraphNodesObject["SelectBestTargetForBind"] = {
    nodeName: "SelectBestTargetForBind",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialMeleeTarget"
};
window.behaviorGraphNodesObject["HasValidTarget-PsiMindControl"] = {
    nodeName: "HasValidTarget-PsiMindControl",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetTargetStack-PsiMindControl"] = {
    nodeName: "SetTargetStack-PsiMindControl",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["TryPsiMindControl"] = {
    nodeName: "TryPsiMindControl",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-PsiMindControl",
    Child1: "SelectTargetForPsiMindControl",
    Child2: "SelectAbility-PsiMindControl"
};
window.behaviorGraphNodesObject["SelectTargetForPsiMindControl"] = {
    nodeName: "SelectTargetForPsiMindControl",
    NodeType: "Sequence",
    Child0: "SetTargetStack-PsiMindControl",
    Child1: "SelectBestTargetForPsiMindControl",
    Child2: "HasValidTarget-PsiMindControl"
};
window.behaviorGraphNodesObject["SelectBestTargetForPsiMindControl"] = {
    nodeName: "SelectBestTargetForPsiMindControl",
    NodeType: "RepeatUntilFail",
    Child0: "PsiEvaluateTargetsMindControl"
};
window.behaviorGraphNodesObject["TryMoveForPsiMindControl"] = {
    nodeName: "TryMoveForPsiMindControl",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityAvailable-PsiMindControl",
    Child2: "SelectTargetForPsiMindControl",
    Child3: "MoveStandardIfFirstAbility-PsiMindControl"
};
window.behaviorGraphNodesObject["TryMoveThenPsiMindControl"] = {
    nodeName: "TryMoveThenPsiMindControl",
    NodeType: "Selector",
    Child0: "TryMoveForPsiMindControl",
    Child1: "TryPsiMindControl"
};
window.behaviorGraphNodesObject["TryDimensionalRift"] = {
    nodeName: "TryDimensionalRift",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-PsiDimensionalRiftStage1",
    Child1: "FindPotentialAoETargets-PsiRiftProfile",
    Child2: "SelectAoETarget-PsiRiftProfile",
    Child3: "SelectAbility-PsiDimensionalRiftStage1"
};
window.behaviorGraphNodesObject["TryMoveThenDimensionalRift"] = {
    nodeName: "TryMoveThenDimensionalRift",
    NodeType: "Selector",
    Child0: "TryMoveForDimensionalRift",
    Child1: "TryDimensionalRift"
};
window.behaviorGraphNodesObject["TryMoveForDimensionalRift"] = {
    nodeName: "TryMoveForDimensionalRift",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-PsiDimensionalRiftStage1",
    Child2: "FindPotentialAoETargets-PsiRiftProfile",
    Child3: "MoveStandardIfFirstAbility-PsiDimensionalRiftStage1"
};
window.behaviorGraphNodesObject["TryNullLance"] = {
    nodeName: "TryNullLance",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-NullLance",
    Child1: "FindPotentialAoETargets-NullLanceValidateProfile",
    Child2: "SelectAoETarget-NullLanceValidateProfile",
    Child3: "SelectAbility-NullLance"
};
window.behaviorGraphNodesObject["TryMoveThenNullLance"] = {
    nodeName: "TryMoveThenNullLance",
    NodeType: "Selector",
    Child0: "TryMoveForNullLance",
    Child1: "TryNullLance"
};
window.behaviorGraphNodesObject["TryMoveForNullLance"] = {
    nodeName: "TryMoveForNullLance",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-NullLance",
    Child2: "NotLastActionPoint",
    Child3: "SelectPotentialMeleeTarget",
    Child4: "FindPotentialAoETargets-NullLanceProfile",
    Child5: "MoveStandardIfFirstAbility-NullLance"
};
window.behaviorGraphNodesObject["TryTriggerDamagedTeleport"] = {
    nodeName: "TryTriggerDamagedTeleport",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-TriggerDamagedTeleport",
    Child1: "SelectAbility-TriggerDamagedTeleport"
};
window.behaviorGraphNodesObject["TryBurrowIfNotOnJob"] = {
    nodeName: "TryBurrowIfNotOnJob",
    NodeType: "Sequence",
    Child0: "DoNotHaveAlwaysOnJob",
    Child1: "BurrowIfOutOfView"
};
window.behaviorGraphNodesObject["TryBurrow"] = {
    nodeName: "TryBurrow",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-ChryssalidBurrow",
    Child1: "SelectAbility-ChryssalidBurrow",
    Child2: "SetUnitValue-MeleeChance"
};
window.behaviorGraphNodesObject["TryUnBurrow"] = {
    nodeName: "TryUnBurrow",
    NodeType: "Sequence",
    Child0: "AffectedByEffect-Burrowed",
    Child1: "IsAbilityAvailable-ChryssalidUnburrow",
    Child2: "SelectAbility-ChryssalidUnburrow"
};
window.behaviorGraphNodesObject["TryUnBurrowSuccessor"] = {
    nodeName: "TryUnBurrowSuccessor",
    NodeType: "Successor",
    Child0: "TryUnBurrow"
};
window.behaviorGraphNodesObject["ChryssalidBurrowedAttack"] = {
    nodeName: "ChryssalidBurrowedAttack",
    NodeType: "Selector",
    Child0: "TryUnBurrow",
    Child1: "TryMeleeAttackPriorityTarget"
};
window.behaviorGraphNodesObject["TrySpawnChryssalid"] = {
    nodeName: "TrySpawnChryssalid",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-SpawnChryssalid",
    Child1: "SelectAbility-SpawnChryssalid"
};
window.behaviorGraphNodesObject["TryFrenzyTrigger"] = {
    nodeName: "TryFrenzyTrigger",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-FrenzyTrigger",
    Child1: "SelectAbility-FrenzyTrigger"
};
window.behaviorGraphNodesObject["TryBlazingPinions"] = {
    nodeName: "TryBlazingPinions",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-BlazingPinionsStage1",
    Child1: "FindPotentialAoETargets-BlazingPinionsBasicProfile",
    Child2: "SelectAoETarget-BlazingPinionsBasicProfile",
    Child3: "SelectAbility-BlazingPinionsStage1"
};
window.behaviorGraphNodesObject["TryAnimaInversionCorpses"] = {
    nodeName: "TryAnimaInversionCorpses",
    NodeType: "Selector",
    Child0: "TryAnimaInversionCorpseActivate",
    Child1: "TryGatekeeperOpenIfAnimaInversionCorpseReady"
};
window.behaviorGraphNodesObject["TryAnimaInversionCorpseActivate"] = {
    nodeName: "TryAnimaInversionCorpseActivate",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-AnimaInversion",
    Child1: "FindPotentialAoETargets-AnimaInversionCorpseProfile",
    Child2: "SelectAoETarget-AnimaInversionCorpseProfile",
    Child3: "SelectAbility-AnimaInversion"
};
window.behaviorGraphNodesObject["TryGatekeeperOpenIfAnimaInversionCorpseReady"] = {
    nodeName: "TryGatekeeperOpenIfAnimaInversionCorpseReady",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-AnimaInversion",
    Child1: "FindPotentialAoETargets-AnimaInversionCorpseProfile",
    Child2: "SelectAoETarget-AnimaInversionCorpseProfile",
    Child3: "TryGatekeeperOpen"
};
window.behaviorGraphNodesObject["TryMoveThenAnimaInversionCorpse"] = {
    nodeName: "TryMoveThenAnimaInversionCorpse",
    NodeType: "Selector",
    Child0: "TryMoveForAnimaInversionCorpse",
    Child1: "TryAnimaInversionCorpses"
};
window.behaviorGraphNodesObject["TryMoveForAnimaInversionCorpse"] = {
    nodeName: "TryMoveForAnimaInversionCorpse",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-AnimaInversion",
    Child2: "FindPotentialAoETargets-AnimaInversionCorpseProfile",
    Child3: "MoveStandardIfFirstAbility-AnimaInversion"
};
window.behaviorGraphNodesObject["TryAnimaInversionMixed"] = {
    nodeName: "TryAnimaInversionMixed",
    NodeType: "Selector",
    Child0: "TryAnimaInversionMixedActivate",
    Child1: "TryGatekeeperOpenIfAnimaInversionMixedReady"
};
window.behaviorGraphNodesObject["TryAnimaInversionMixedActivate"] = {
    nodeName: "TryAnimaInversionMixedActivate",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-AnimaInversion",
    Child1: "FindPotentialAoETargets-AnimaInversionMixedProfile",
    Child2: "SelectAoETarget-AnimaInversionMixedProfile",
    Child3: "SelectAbility-AnimaInversion"
};
window.behaviorGraphNodesObject["TryGatekeeperOpenIfAnimaInversionMixedReady"] = {
    nodeName: "TryGatekeeperOpenIfAnimaInversionMixedReady",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-AnimaInversion",
    Child1: "FindPotentialAoETargets-AnimaInversionMixedProfile",
    Child2: "SelectAoETarget-AnimaInversionMixedProfile",
    Child3: "TryGatekeeperOpen"
};
window.behaviorGraphNodesObject["TryMoveThenAnimaInversionMixed"] = {
    nodeName: "TryMoveThenAnimaInversionMixed",
    NodeType: "Selector",
    Child0: "TryMoveForAnimaInversionMixed",
    Child1: "TryAnimaInversionMixed"
};
window.behaviorGraphNodesObject["TryMoveForAnimaInversionMixed"] = {
    nodeName: "TryMoveForAnimaInversionMixed",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-AnimaInversion",
    Child2: "FindPotentialAoETargets-AnimaInversionMixedProfile",
    Child3: "MoveStandardIfFirstAbility-AnimaInversion"
};
window.behaviorGraphNodesObject["HasValidTarget-AnimaConsume"] = {
    nodeName: "HasValidTarget-AnimaConsume",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetTargetStack-AnimaConsume"] = {
    nodeName: "SetTargetStack-AnimaConsume",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["TryAnimaConsumeOnEnemy"] = {
    nodeName: "TryAnimaConsumeOnEnemy",
    NodeType: "Sequence",
    Child0: "HasWounds",
    Child1: "IsAbilityReady-AnimaConsume",
    Child2: "AnimaConsumeStepSelectorEnemy"
};
window.behaviorGraphNodesObject["AnimaConsumeStepSelectorEnemy"] = {
    nodeName: "AnimaConsumeStepSelectorEnemy",
    NodeType: "Selector",
    Child0: "AnimaConsumeAttackEnemy",
    Child1: "AnimaConsumeAttackEnemyUnopened",
    Child2: "MoveMeleeIfFirstAbilityFANATIC"
};
window.behaviorGraphNodesObject["TryAnimaConsumeOnAlly"] = {
    nodeName: "TryAnimaConsumeOnAlly",
    NodeType: "Sequence",
    Child0: "IsBloodied",
    Child1: "IsVisibleToPlayer",
    Child2: "IsAbilityReady-AnimaConsume",
    Child3: "AnimaConsumeStepSelectorAlly"
};
window.behaviorGraphNodesObject["AnimaConsumeStepSelectorAlly"] = {
    nodeName: "AnimaConsumeStepSelectorAlly",
    NodeType: "Selector",
    Child0: "AnimaConsumeAttackAlly",
    Child1: "AnimaConsumeAttackAllyUnopened",
    Child2: "MoveToPotentialMeleeIfFirstAbilityFANATIC"
};
window.behaviorGraphNodesObject["AnimaConsumeNotAvailable"] = {
    nodeName: "AnimaConsumeNotAvailable",
    NodeType: "Inverter",
    Child0: "IsAbilityAvailable-AnimaConsume"
};
window.behaviorGraphNodesObject["IncludeAlliesAsMeleeTargets"] = {
    nodeName: "IncludeAlliesAsMeleeTargets",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["AnimaConsumeAttackEnemy"] = {
    nodeName: "AnimaConsumeAttackEnemy",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-AnimaConsume",
    Child1: "SelectEnemyTargetForAnimaConsume",
    Child2: "SelectAbility-AnimaConsume"
};
window.behaviorGraphNodesObject["AnimaConsumeAttackEnemyUnopened"] = {
    nodeName: "AnimaConsumeAttackEnemyUnopened",
    NodeType: "Sequence",
    Child0: "AnimaConsumeNotAvailable",
    Child1: "SelectPotentialTargetForEnemyAnimaConsume",
    Child2: "IsTargetInAttackRange-StandardMelee",
    Child3: "TryGatekeeperOpen"
};
window.behaviorGraphNodesObject["SelectPotentialTargetForEnemyAnimaConsume"] = {
    nodeName: "SelectPotentialTargetForEnemyAnimaConsume",
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "SelectBestEnemyTargetForAnimaConsume",
    Child2: "HasValidTarget-Potential"
};
window.behaviorGraphNodesObject["SelectEnemyTargetForAnimaConsume"] = {
    nodeName: "SelectEnemyTargetForAnimaConsume",
    NodeType: "Sequence",
    Child0: "SetTargetStack-AnimaConsume",
    Child1: "SelectBestEnemyTargetForAnimaConsume",
    Child2: "HasValidTarget-AnimaConsume"
};
window.behaviorGraphNodesObject["SelectBestEnemyTargetForAnimaConsume"] = {
    nodeName: "SelectBestEnemyTargetForAnimaConsume",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluatePotentialMeleeTarget"
};
window.behaviorGraphNodesObject["AnimaConsumeAttackAlly"] = {
    nodeName: "AnimaConsumeAttackAlly",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-AnimaConsume",
    Child1: "SelectAllyTargetForAnimaConsume",
    Child2: "SelectAbility-AnimaConsume"
};
window.behaviorGraphNodesObject["AnimaConsumeAttackAllyUnopened"] = {
    nodeName: "AnimaConsumeAttackAllyUnopened",
    NodeType: "Sequence",
    Child0: "AnimaConsumeNotAvailable",
    Child1: "SelectPotentialTargetForAllyAnimaConsume",
    Child2: "IsTargetInAttackRange-StandardMelee",
    Child3: "TryGatekeeperOpen"
};
window.behaviorGraphNodesObject["SelectPotentialTargetForAllyAnimaConsume"] = {
    nodeName: "SelectPotentialTargetForAllyAnimaConsume",
    NodeType: "Sequence",
    Child0: "SetPotentialAllyTargetStack",
    Child1: "SelectBestAllyTargetForAnimaConsume",
    Child2: "HasValidTarget-Potential"
};
window.behaviorGraphNodesObject["SelectAllyTargetForAnimaConsume"] = {
    nodeName: "SelectAllyTargetForAnimaConsume",
    NodeType: "Sequence",
    Child0: "SetTargetStack-AnimaConsume",
    Child1: "SelectBestAllyTargetForAnimaConsume",
    Child2: "HasValidTarget-AnimaConsume"
};
window.behaviorGraphNodesObject["SelectBestAllyTargetForAnimaConsume"] = {
    nodeName: "SelectBestAllyTargetForAnimaConsume",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateAllyTargetForAnimaConsume"
};
window.behaviorGraphNodesObject["EvaluateAllyTargetForAnimaConsume"] = {
    nodeName: "EvaluateAllyTargetForAnimaConsume",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreIfAllyWithinRangeAnimaConsume",
    Child2: "UpdateBestTarget" // 
};
window.behaviorGraphNodesObject["TargetScoreIfAllyWithinRangeAnimaConsume"] = {
    nodeName: "TargetScoreIfAllyWithinRangeAnimaConsume",
    NodeType: "Successor",
    Child0: "TargetScoreReachableAllyAnimaConsume"
};
window.behaviorGraphNodesObject["HasValidTarget-AnimaGate"] = {
    nodeName: "HasValidTarget-AnimaGate",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetTargetStack-AnimaGate"] = {
    nodeName: "SetTargetStack-AnimaGate",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["GateKeeperShootIfAvailable"] = {
    nodeName: "GateKeeperShootIfAvailable",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-AnimaGate",
    Child1: "SetTargetStack-AnimaGate",
    Child2: "SelectTargetForStandardShot",
    Child3: "GatekeeperTryShootOrOpen"
};
window.behaviorGraphNodesObject["GatekeeperTryShootOrOpen"] = {
    nodeName: "GatekeeperTryShootOrOpen",
    NodeType: "Selector",
    Child0: "GatekeeperShootIfTarget",
    Child1: "TryGatekeeperOpen"
};
window.behaviorGraphNodesObject["GatekeeperShootIfTarget"] = {
    nodeName: "GatekeeperShootIfTarget",
    NodeType: "Sequence",
    Child0: "HasValidTarget-AnimaGate",
    Child1: "SelectAbility-AnimaGate"
};
window.behaviorGraphNodesObject["TryGatekeeperOpen"] = {
    nodeName: "TryGatekeeperOpen",
    NodeType: "Sequence",
    Child0: "AffectedByEffect-GatekeeperClosedEffect",
    Child1: "IsAbilityAvailable-GatekeeperOpen",
    Child2: "SelectAbility-GatekeeperOpen"
};
window.behaviorGraphNodesObject["TryGatekeeperClose"] = {
    nodeName: "TryGatekeeperClose",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-GatekeeperClose",
    Child1: "SelectAbility-GatekeeperClose"
};
window.behaviorGraphNodesObject["IsOrCanOpen"] = {
    nodeName: "IsOrCanOpen",
    NodeType: "Selector",
    Child0: "IsAbilityAvailable-GatekeeperOpen",
    Child1: "AffectedByEffect-GatekeeperClosedEffect"
};
window.behaviorGraphNodesObject["TryRetract"] = {
    nodeName: "TryRetract",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Retract",
    Child1: "SelectAbility-Retract"
};
window.behaviorGraphNodesObject["TryPsiBomb"] = {
    nodeName: "TryPsiBomb",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-PsiBombStage1",
    Child1: "FindPotentialAoETargets-PsiBombProfile",
    Child2: "SelectAoETarget-PsiBombProfile",
    Child3: "SelectAbility-PsiBombStage1"
};
window.behaviorGraphNodesObject["TryTeleportDefensive"] = {
    nodeName: "TryTeleportDefensive",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Teleport",
    Child1: "ResetDestinationSearch",
    Child2: "UseDashMovement",
    Child3: "FindDestinationWithLoS-IsoTeleport",
    Child4: "SelectAbility-Teleport"
};
window.behaviorGraphNodesObject["TryTeleportOffensive"] = {
    nodeName: "TryTeleportOffensive",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Teleport",
    Child1: "ResetDestinationSearch",
    Child2: "RestrictToFlanking",
    Child3: "UseDashMovement",
    Child4: "FindDestinationWithLoS-Teleport",
    Child5: "SelectAbility-Teleport"
};
window.behaviorGraphNodesObject["TryTriggerSuperposition"] = {
    nodeName: "TryTriggerSuperposition",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-TriggerSuperposition",
    Child1: "SelectAbility-TriggerSuperposition"
};
window.behaviorGraphNodesObject["SetTargetStack-ScythingClaws"] = {
    nodeName: "SetTargetStack-ScythingClaws",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["HasValidTarget-ScythingClaws"] = {
    nodeName: "HasValidTarget-ScythingClaws",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TryScythingClaws"] = {
    nodeName: "TryScythingClaws",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-ScythingClaws",
    Child1: "SelectTargetForScythingClaws",
    Child2: "SelectAbility-ScythingClaws"
};
window.behaviorGraphNodesObject["SelectTargetForScythingClaws"] = {
    nodeName: "SelectTargetForScythingClaws",
    NodeType: "Selector",
    Child0: "ScythingClaws_HitIdealTarget",
    Child1: "ScythingClaws_AnyTargetWillDo"
};
window.behaviorGraphNodesObject["ScythingClaws_HitIdealTarget"] = {
    nodeName: "ScythingClaws_HitIdealTarget",
    NodeType: "Sequence",
    Child0: "SelectPotentialMeleeTarget",
    Child1: "FindPotentialAoETargets-ScythingClawsPrefTargetProfile",
    Child2: "SelectAoETarget-ScythingClawsPrefTargetProfile"
};
window.behaviorGraphNodesObject["ScythingClaws_AnyTargetWillDo"] = {
    nodeName: "ScythingClaws_AnyTargetWillDo",
    NodeType: "Sequence",
    Child0: "FindPotentialAoETargets-ScythingClawsProfile",
    Child1: "SelectAoETarget-ScythingClawsProfile"
};
window.behaviorGraphNodesObject["TryWrathCannon"] = {
    nodeName: "TryWrathCannon",
    NodeType: "Failer",
    Child0: "IsAbilityAvailable-WrathCannon"
};
window.behaviorGraphNodesObject["TryWrathCannon_TEMPDISABLED"] = {
    nodeName: "TryWrathCannon_TEMPDISABLED",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-WrathCannon",
    Child1: "FindPotentialAoETargets-WrathCannonProfile",
    Child2: "SelectAoETarget-WrathCannonProfile",
    Child3: "SelectAbility-WrathCannon"
};
window.behaviorGraphNodesObject["TryWrathCannonS1"] = {
    nodeName: "TryWrathCannonS1",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-WrathCannonStage1",
    Child1: "CannonNotCharging",
    Child2: "FindPotentialAoETargets-WrathCannonS1Profile",
    Child3: "SelectAoETarget-WrathCannonS1Profile",
    Child4: "SelectAbility-WrathCannonStage1"
};
window.behaviorGraphNodesObject["CannonNotCharging"] = {
    nodeName: "CannonNotCharging",
    NodeType: "Inverter",
    Child0: "AffectedByEffect-WrathCannonStage1Effect"
};
window.behaviorGraphNodesObject["MimicBeaconBehavior"] = {
    nodeName: "MimicBeaconBehavior",
    NodeType: "Sequence",
    Child0: "IsUnitTypeVisible-MimicBeacon",
    Child1: "MoveOrAttackMimicBeacon"
};
window.behaviorGraphNodesObject["IsUnitTypeVisible-MimicBeacon"] = {
    nodeName: "IsUnitTypeVisible-MimicBeacon",
    NodeType: "Condition" //  currently this checks LoS to any Mimic Beacons.
};
window.behaviorGraphNodesObject["MoveOrAttackMimicBeacon"] = {
    nodeName: "MoveOrAttackMimicBeacon",
    NodeType: "Selector",
    Child0: "MoveTowardMimicBeaconIfFirstAction",
    Child1: "::AttackMimicBeacon",
    Child2: "::MoveTowardMimicBeacon" //  If attack fails", just try moving closer.
};
window.behaviorGraphNodesObject["MoveTowardMimicBeaconIfFirstAction"] = {
    nodeName: "MoveTowardMimicBeaconIfFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "::MoveTowardMimicBeacon"
};
window.behaviorGraphNodesObject["::MoveTowardMimicBeacon"] = {
    nodeName: "::MoveTowardMimicBeacon",
    NodeType: "Selector",
    Child0: "TryMeleeMoveTowardMimicBeacon",
    Child1: "TryStandardMoveTowardMimicBeacon"
};
window.behaviorGraphNodesObject["TryStandardMoveTowardMimicBeacon"] = {
    nodeName: "TryStandardMoveTowardMimicBeacon",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "FindDestinationTowardMimicBeacon",
    Child2: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["FindDestinationTowardMimicBeacon"] = {
    nodeName: "FindDestinationTowardMimicBeacon",
    NodeType: "Selector",
    Child0: "FindMimicBeaconDestWithStandardShot",
    Child1: "FindPotentialMimicBeaconDest" //  Not all units have a standard shot ability.
};
window.behaviorGraphNodesObject["FindMimicBeaconDestWithStandardShot"] = {
    nodeName: "FindMimicBeaconDestWithStandardShot",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectMimicBeaconTargetForStandardShot",
    Child2: "SetTargetAsPriority-StandardShot",
    Child3: "RestrictToAbilityRange-StandardShot",
    Child4: "FindRestrictedDestination-MimicBeacon"
};
window.behaviorGraphNodesObject["FindPotentialMimicBeaconDest"] = {
    nodeName: "FindPotentialMimicBeaconDest",
    NodeType: "Sequence",
    Child0: "SelectPotentialMimicBeaconTarget",
    Child1: "SetTargetAsPriority-Potential",
    Child2: "SelectFindMimicBeaconMeleeOrStandardShot"
};
window.behaviorGraphNodesObject["SelectFindMimicBeaconMeleeOrStandardShot"] = {
    nodeName: "SelectFindMimicBeaconMeleeOrStandardShot",
    NodeType: "Selector",
    Child0: "IfMeleeFindClosestPointToTarget",
    Child1: "FindRestrictedDestination-MimicBeacon"
};
window.behaviorGraphNodesObject["IfMeleeFindClosestPointToTarget"] = {
    nodeName: "IfMeleeFindClosestPointToTarget",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "FindClosestPointToTarget-Potential"
};
window.behaviorGraphNodesObject["TryMeleeMoveTowardMimicBeacon"] = {
    nodeName: "TryMeleeMoveTowardMimicBeacon",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "SelectPotentialMimicBeaconTarget",
    Child2: "RestrictToPotentialTargetRange-StandardMelee",
    Child3: "FindRestrictedDestination-MeleeFanatic",
    Child4: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["::AttackMimicBeacon"] = {
    nodeName: "::AttackMimicBeacon",
    NodeType: "Selector",
    Child0: "TryStandardMeleeOnMimicBeacon",
    Child1: "TryStandardShotOnMimicBeacon"
};
window.behaviorGraphNodesObject["FindClosestPointToTarget-Potential"] = {
    nodeName: "FindClosestPointToTarget-Potential",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SetTargetAsPriority-StandardShot"] = {
    nodeName: "SetTargetAsPriority-StandardShot",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SetTargetAsPriority-Potential"] = {
    nodeName: "SetTargetAsPriority-Potential",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["TryStandardShotOnMimicBeacon"] = {
    nodeName: "TryStandardShotOnMimicBeacon",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectMimicBeaconTargetForStandardShot",
    Child2: "SelectAbility-StandardShot"
};
window.behaviorGraphNodesObject["SelectMimicBeaconTargetForStandardShot"] = {
    nodeName: "SelectMimicBeaconTargetForStandardShot",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "SelectMimicBeaconTarget",
    Child2: "HasValidTarget-StandardShot"
};
window.behaviorGraphNodesObject["SelectMimicBeaconTarget"] = {
    nodeName: "SelectMimicBeaconTarget",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateMimicBeaconTarget"
};
window.behaviorGraphNodesObject["EvaluateMimicBeaconTarget"] = {
    nodeName: "EvaluateMimicBeaconTarget",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "SSTargetScoreMimicBeacon",
    Child2: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["SSTargetScoreMimicBeacon"] = {
    nodeName: "SSTargetScoreMimicBeacon",
    NodeType: "Successor",
    Child0: "TargetScoreMimicBeacon"
};
window.behaviorGraphNodesObject["TargetScoreMimicBeacon"] = {
    nodeName: "TargetScoreMimicBeacon",
    NodeType: "Sequence",
    Child0: "TargetTemplateNameIs-MimicBeacon",
    Child1: "AddToTargetScore_100",
    Child2: "MultipleUnitsVisibleOfType-MimicBeacon",
    Child3: "IsTargetClosestOfType-MimicBeacon",
    Child4: "AddToTargetScore_10"
};
window.behaviorGraphNodesObject["TargetTemplateNameIs-MimicBeacon"] = {
    nodeName: "TargetTemplateNameIs-MimicBeacon",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["MultipleUnitsVisibleOfType-MimicBeacon"] = {
    nodeName: "MultipleUnitsVisibleOfType-MimicBeacon",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsTargetClosestOfType-MimicBeacon"] = {
    nodeName: "IsTargetClosestOfType-MimicBeacon",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SelectPotentialMimicBeaconTarget"] = {
    nodeName: "SelectPotentialMimicBeaconTarget",
    NodeType: "Sequence",
    Child0: "SetVisiblePotentialTargetStack",
    Child1: "SelectMimicBeaconTarget",
    Child2: "HasValidTarget-Potential"
};
window.behaviorGraphNodesObject["TryStandardMeleeOnMimicBeacon"] = {
    nodeName: "TryStandardMeleeOnMimicBeacon",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMelee",
    Child1: "SelectMimicBeaconTargetForStandardMelee",
    Child2: "SelectAbility-StandardMelee"
};
window.behaviorGraphNodesObject["SelectMimicBeaconTargetForStandardMelee"] = {
    nodeName: "SelectMimicBeaconTargetForStandardMelee",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardMelee",
    Child1: "SelectMimicBeaconTarget",
    Child2: "HasValidTarget-StandardMelee"
};
window.behaviorGraphNodesObject["CivRoot"] = {
    nodeName: "CivRoot",
    NodeType: "Selector",
    Child0: "CivCheckTerror",
    Child1: "CivNormal"
};
window.behaviorGraphNodesObject["CivCheckTerror"] = {
    nodeName: "CivCheckTerror",
    NodeType: "Sequence",
    Child0: "IsMissionOfType-Terror",
    Child1: "CivTerror"
};
window.behaviorGraphNodesObject["CivTerror"] = {
    nodeName: "CivTerror",
    NodeType: "Selector",
    Child0: "CivTerrorAI",
    Child1: "SkipMove"
};
window.behaviorGraphNodesObject["CivTerrorAI"] = {
    nodeName: "CivTerrorAI",
    NodeType: "Sequence",
    Child0: "IsAIInCivilianRadius",
    Child1: "FindDestination-CivilianRed",
    Child2: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["CivNormal"] = {
    nodeName: "CivNormal",
    NodeType: "Selector",
    Child0: "CivHighSupportMove",
    Child1: " CivLowSupportMove",
    Child2: "SkipMove"
};
window.behaviorGraphNodesObject["CivHighSupportMove"] = {
    nodeName: "CivHighSupportMove",
    NodeType: "Sequence",
    Child0: "HighPopularSupport",
    Child1: "FindDestination-CivilianRed",
    Child2: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["CivLowSupportMove"] = {
    nodeName: "CivLowSupportMove",
    NodeType: "Sequence",
    Child0: "LowPopularSupport",
    Child1: "FindDestination-CivilianRed",
    Child2: "DoNoiseAlert",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["HostileCivRoot"] = {
    nodeName: "HostileCivRoot",
    NodeType: "Sequence",
    Child0: "DoNoiseAlert",
    Child1: "FindDestination-CivilianRed",
    Child2: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["FacelessCivRoot"] = {
    nodeName: "FacelessCivRoot",
    NodeType: "Selector",
    Child0: "FacelessCivCheckTerror"
};
window.behaviorGraphNodesObject["FacelessCivCheckTerror"] = {
    nodeName: "FacelessCivCheckTerror",
    NodeType: "Sequence",
    Child0: "IsMissionOfType-Terror",
    Child1: "FacelessCivTerror"
};
window.behaviorGraphNodesObject["FacelessCivTerror"] = {
    nodeName: "FacelessCivTerror",
    NodeType: "Selector",
    Child0: "CivTerrorAI",
    Child1: "SkipMove"
};
window.behaviorGraphNodesObject["VIPCowardRoot"] = {
    nodeName: "VIPCowardRoot",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "SkipTurnifGreenAlert",
    Child2: "VIPCowardRedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["VIPCowardRedAlert"] = {
    nodeName: "VIPCowardRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "VIPPickMovement"
};
window.behaviorGraphNodesObject["VIPPickMovement"] = {
    nodeName: "VIPPickMovement",
    NodeType: "Selector",
    Child0: "IfWounded",
    Child1: "MoveBackWithLOSIfFlanked",
    Child2: "GenericRedAbilitySelector"
};
window.behaviorGraphNodesObject["IfWounded"] = {
    nodeName: "IfWounded",
    NodeType: "Sequence",
    Child0: "HasWounds",
    Child1: "FallBack"
};
window.behaviorGraphNodesObject["GenericCowardRoot"] = {
    nodeName: "GenericCowardRoot",
    NodeType: "Selector",
    Child0: "GenericGreenMovement",
    Child1: "CowardlyIfEnemySpotted",
    Child2: "CowardlyIfEnemyNear"
};
window.behaviorGraphNodesObject["CowardlyIfEnemySpotted"] = {
    nodeName: "CowardlyIfEnemySpotted",
    NodeType: "Sequence",
    Child0: "IsEnemySpotted",
    Child1: "TryCowardlyEnemySpottedAction"
};
window.behaviorGraphNodesObject["TryCowardlyEnemySpottedAction"] = {
    nodeName: "TryCowardlyEnemySpottedAction",
    NodeType: "Selector",
    Child0: "FallBackWithLoSIfFirstAbility",
    Child1: "DoCower"
};
window.behaviorGraphNodesObject["CowardlyIfEnemyNear"] = {
    nodeName: "CowardlyIfEnemyNear",
    NodeType: "Sequence",
    Child0: "IsYellowAlert",
    Child1: "TryCowardYellowAction"
};
window.behaviorGraphNodesObject["TryCowardYellowAction"] = {
    nodeName: "TryCowardYellowAction",
    NodeType: "Selector",
    Child0: "MoveDefensiveIfFirstAbility",
    Child1: "DoCower"
};
window.behaviorGraphNodesObject["::CharacterRoot"] = {
    nodeName: "::CharacterRoot",
    NodeType: "Selector",
    Child0: "DoRedScreenFailure-BTFailure",
    Child1: "TryJob",
    Child2: "GenericGreenMovement",
    Child3: "GenericRedAlert",
    Child4: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["DoRedScreenFailure-BTFailure"] = {
    nodeName: "DoRedScreenFailure-BTFailure",
    NodeType: "Action",
    Param0: "RedScreen-Error On Behavior Tree! ::CharacterRoot not overridden! @acheng"
};
window.behaviorGraphNodesObject["GenericRedAlert"] = {
    nodeName: "GenericRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "GenericRedAbilitySelector"
};
window.behaviorGraphNodesObject["GenericRedAbilitySelector"] = {
    nodeName: "GenericRedAbilitySelector",
    NodeType: "Selector",
    Child0: "GenericRedFirstAction",
    Child1: "GenericRedLastAction"
};
window.behaviorGraphNodesObject["GenericRedFirstAction"] = {
    nodeName: "GenericRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "GenericRedFirstActionSelector"
};
window.behaviorGraphNodesObject["GenericRedFirstActionSelector"] = {
    nodeName: "GenericRedFirstActionSelector",
    NodeType: "Selector",
    Child0: "DoIfFlankedMove",
    Child1: "SelectMoveStandard",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "HuntEnemyWithCover"
};
window.behaviorGraphNodesObject["GenericRedLastAction"] = {
    nodeName: "GenericRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "GenericRedLastActionSelector"
};
window.behaviorGraphNodesObject["GenericRedLastActionSelector"] = {
    nodeName: "GenericRedLastActionSelector",
    NodeType: "Selector",
    Child0: "TryGrenade",
    Child1: "TryShootOrReloadOrOverwatch",
    Child2: "TryStandardMelee",
    Child3: "HuntEnemyWithCover",
    Child4: "SelectMoveStandard"
};
window.behaviorGraphNodesObject["GenericEnemyRootAGGRESSIVE"] = {
    nodeName: "GenericEnemyRootAGGRESSIVE",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "GenericRedAlertAGGRESSIVE",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["GenericRedAlertAGGRESSIVE"] = {
    nodeName: "GenericRedAlertAGGRESSIVE",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "AggressiveRedAbilitySelector"
};
window.behaviorGraphNodesObject["AggressiveRedAbilitySelector"] = {
    nodeName: "AggressiveRedAbilitySelector",
    NodeType: "Selector",
    Child0: "AggressiveRedFirstAction",
    Child1: "AggressiveRedLastAction"
};
window.behaviorGraphNodesObject["AggressiveRedFirstAction"] = {
    nodeName: "AggressiveRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AggressiveRedFirstActionSelector"
};
window.behaviorGraphNodesObject["AggressiveRedFirstActionSelector"] = {
    nodeName: "AggressiveRedFirstActionSelector",
    NodeType: "Selector",
    Child0: "AttackIfIdeal",
    Child1: "DoIfFlankedMove",
    Child2: "SelectMove_JobOrAggressive",
    Child3: "TryShootOrReloadOrOverwatch",
    Child4: "HuntEnemy"
};
window.behaviorGraphNodesObject["AggressiveRedLastAction"] = {
    nodeName: "AggressiveRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "AggressiveRedLastActionSelector"
};
window.behaviorGraphNodesObject["AggressiveRedLastActionSelector"] = {
    nodeName: "AggressiveRedLastActionSelector",
    NodeType: "Selector",
    Child0: "AttackIfFavorable",
    Child1: "TryShootOrReloadOrOverwatch",
    Child2: "HuntEnemy",
    Child3: "SelectMove_JobOrAggressive"
};
window.behaviorGraphNodesObject["GenericEnemyNoCover"] = {
    nodeName: "GenericEnemyNoCover",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "GenericNoCoverRedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["GenericNoCoverRedAlert"] = {
    nodeName: "GenericNoCoverRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "GenericNoCoverRedAbilitySelector"
};
window.behaviorGraphNodesObject["GenericNoCoverRedAbilitySelector"] = {
    nodeName: "GenericNoCoverRedAbilitySelector",
    NodeType: "Selector",
    Child0: "GenericNoCoverRedFirstAction",
    Child1: "GenericNoCoverRedLastAction"
};
window.behaviorGraphNodesObject["GenericNoCoverRedFirstAction"] = {
    nodeName: "GenericNoCoverRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "GenericNoCoverFirstActionSelector"
};
window.behaviorGraphNodesObject["GenericNoCoverFirstActionSelector"] = {
    nodeName: "GenericNoCoverFirstActionSelector",
    NodeType: "Selector",
    Child0: "SelectNCMove_JobOrFanatic",
    Child1: "TryShootOrReloadOrOverwatch",
    Child2: "HuntEnemy"
};
window.behaviorGraphNodesObject["GenericNoCoverRedLastAction"] = {
    nodeName: "GenericNoCoverRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "GenericNoCoverRedLastActionSelector"
};
window.behaviorGraphNodesObject["GenericNoCoverRedLastActionSelector"] = {
    nodeName: "GenericNoCoverRedLastActionSelector",
    NodeType: "Selector",
    Child0: "TryGrenade",
    Child1: "TryShootOrReloadOrOverwatch",
    Child2: "HuntEnemy",
    Child3: "SelectNCMove_JobOrFanatic"
};
window.behaviorGraphNodesObject["GenericEnemyMeleeRoot"] = {
    nodeName: "GenericEnemyMeleeRoot",
    NodeType: "Selector",
    Child0: "TryJobUnsafe",
    Child1: "GenericGreenMovement",
    Child2: "GenericMeleeRedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["GenericMeleeRedAlert"] = {
    nodeName: "GenericMeleeRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "GenericMeleeRedAbilitySelector"
};
window.behaviorGraphNodesObject["GenericMeleeRedAbilitySelector"] = {
    nodeName: "GenericMeleeRedAbilitySelector",
    NodeType: "Selector",
    Child0: "MeleeRedFirstAction",
    Child1: "MeleeRedLastAction"
};
window.behaviorGraphNodesObject["MeleeRedFirstAction"] = {
    nodeName: "MeleeRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MeleeRedFirstActionSelector"
};
window.behaviorGraphNodesObject["MeleeRedFirstActionSelector"] = {
    nodeName: "MeleeRedFirstActionSelector",
    NodeType: "Selector",
    Child0: "TryStandardMeleeUnsafe",
    Child1: "DoIfFlankedMove",
    Child2: "SelectUnsafeMove_JobOrMelee",
    Child3: "TryMoveThenGrenade",
    Child4: "TryShootOrReloadOrOverwatch",
    Child5: "HuntEnemyUnsafe"
};
window.behaviorGraphNodesObject["MeleeRedLastAction"] = {
    nodeName: "MeleeRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "MeleeRedLastActionSelector"
};
window.behaviorGraphNodesObject["MeleeRedLastActionSelector"] = {
    nodeName: "MeleeRedLastActionSelector",
    NodeType: "Selector",
    Child0: "TryStandardMeleeUnsafe",
    Child1: "TryGrenade",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "HuntEnemyUnsafe",
    Child4: "SelectUnsafeMove_JobOrMelee"
};
window.behaviorGraphNodesObject["GenericEnemyMeleeRootFANATIC"] = {
    nodeName: "GenericEnemyMeleeRootFANATIC",
    NodeType: "Selector",
    Child0: "TryJobUnsafe",
    Child1: "GenericGreenMovement",
    Child2: "GenericMeleeRedAlertFANATIC",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["GenericMeleeRedAlertFANATIC"] = {
    nodeName: "GenericMeleeRedAlertFANATIC",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "GenericMeleeFANATICRedAbilitySelector"
};
window.behaviorGraphNodesObject["GenericMeleeFANATICRedAbilitySelector"] = {
    nodeName: "GenericMeleeFANATICRedAbilitySelector",
    NodeType: "Selector",
    Child0: "TryStandardMeleeUnsafe",
    Child1: "MoveMeleeFANATICUnsafe",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "HuntEnemyUnsafe"
};
window.behaviorGraphNodesObject["MindControlledRoot"] = {
    nodeName: "MindControlledRoot",
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
window.behaviorGraphNodesObject["MindControlledMove"] = {
    nodeName: "MindControlledMove",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "ResetDestinationSearch",
    Child3: "IgnoreHazards",
    Child4: "MoveNoCover",
    Child5: "FindDestination-Fanatic",
    Child6: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["MCTryGrenadeOption"] = {
    nodeName: "MCTryGrenadeOption",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-ThrowGrenade",
    Child1: "DoesGrenadeCauseDamage",
    Child2: "FindPotentialAoETargets-GrenadeMindControlledProfile",
    Child3: "MCSetUpAndSelectGrenade"
};
window.behaviorGraphNodesObject["MCSetUpAndSelectGrenade"] = {
    nodeName: "MCSetUpAndSelectGrenade",
    NodeType: "Sequence",
    Child0: "SelectAoETarget-GrenadeMindControlledProfile",
    Child1: "SelectAbility-ThrowGrenade"
};
window.behaviorGraphNodesObject["PanickedRoot"] = {
    nodeName: "PanickedRoot",
    NodeType: "Selector",
    Child0: "Panicked_FirstAction",
    Child1: "Panicked_LastAction",
    Child2: "SkipMove"
};
window.behaviorGraphNodesObject["Panicked_FirstAction"] = {
    nodeName: "Panicked_FirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "Panicked_FirstAction_Selector" // 
};
window.behaviorGraphNodesObject["Panicked_FirstAction_Selector"] = {
    nodeName: "Panicked_FirstAction_Selector",
    NodeType: "Selector",
    Child0: "PanickedMove",
    Child1: "PanickedAction",
    Child2: "SkipMove"
};
window.behaviorGraphNodesObject["Panicked_LastAction"] = {
    nodeName: "Panicked_LastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "Panicked_LastAction_Selector"
};
window.behaviorGraphNodesObject["Panicked_LastAction_Selector"] = {
    nodeName: "Panicked_LastAction_Selector",
    NodeType: "Selector",
    Child0: "PanickedAction",
    Child1: "PanickedMove",
    Child2: "SkipMove"
};
window.behaviorGraphNodesObject["PanickedMove"] = {
    nodeName: "PanickedMove",
    NodeType: "Selector",
    Child0: "PanickedFallBackUnsafe",
    Child1: "MoveDefensiveWithLoSUnsafe",
    Child2: "MoveDefensiveUnsafe"
};
window.behaviorGraphNodesObject["PanickedAction"] = {
    nodeName: "PanickedAction",
    NodeType: "RandSelector",
    Child0: "ShootRandomTargetForPanic",
    Param0: "5",
    Child1: "TryPanickedGrenadeToss",
    Param1: "1",
    Child2: "DoCower",
    Param2: "2"
};
window.behaviorGraphNodesObject["ShootRandomTargetForPanic"] = {
    nodeName: "ShootRandomTargetForPanic",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectRandomTargetForPanic",
    Child2: "SelectAbility-StandardShot"
};
window.behaviorGraphNodesObject["SelectRandomTargetForPanic"] = {
    nodeName: "SelectRandomTargetForPanic",
    NodeType: "Selector",
    Child0: "IfTeamXComSelectAnyRandomTarget",
    Child1: "IfNotTeamXComSelectRandomTeammateTarget"
};
window.behaviorGraphNodesObject["IfTeamXComSelectAnyRandomTarget"] = {
    nodeName: "IfTeamXComSelectAnyRandomTarget",
    NodeType: "Sequence",
    Child0: "IsTeam-eTeam_XCom",
    Child1: "SelectRandomEnemyTarget" // Child1: "SelectAnyRandomTarget"
};
window.behaviorGraphNodesObject["IfNotTeamXComSelectRandomTeammateTarget"] = {
    nodeName: "IfNotTeamXComSelectRandomTeammateTarget",
    NodeType: "Sequence",
    Child0: "NotTeamXCom",
    Child1: "SelectRandomTeammateTarget"
};
window.behaviorGraphNodesObject["IsTeam-eTeam_XCom"] = {
    nodeName: "IsTeam-eTeam_XCom",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["NotTeamXCom"] = {
    nodeName: "NotTeamXCom",
    NodeType: "Inverter",
    Child0: "IsTeam-eTeam_XCom"
};
window.behaviorGraphNodesObject["SelectRandomEnemyTarget"] = {
    nodeName: "SelectRandomEnemyTarget",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "SelectEnemyTargetRandomly",
    Child2: "HasValidTarget-StandardShot"
};
window.behaviorGraphNodesObject["SelectEnemyTargetRandomly"] = {
    nodeName: "SelectEnemyTargetRandomly",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateEnemyTargetRandomly"
};
window.behaviorGraphNodesObject["EvaluateEnemyTargetRandomly"] = {
    nodeName: "EvaluateEnemyTargetRandomly",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "SSScoreEnemyTargetRandomly",
    Child2: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["SSScoreEnemyTargetRandomly"] = {
    nodeName: "SSScoreEnemyTargetRandomly",
    NodeType: "Successor",
    Child0: "ScoreEnemyTargetRandomly"
};
window.behaviorGraphNodesObject["ScoreEnemyTargetRandomly"] = {
    nodeName: "ScoreEnemyTargetRandomly",
    NodeType: "Sequence",
    Child0: "TargetIsEnemy",
    Child1: "GenericScoreTargetRandomlySequence"
};
window.behaviorGraphNodesObject["SelectRandomTeammateTarget"] = {
    nodeName: "SelectRandomTeammateTarget",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "SelectTeammateTargetRandomly",
    Child2: "HasValidTarget-StandardShot"
};
window.behaviorGraphNodesObject["SelectTeammateTargetRandomly"] = {
    nodeName: "SelectTeammateTargetRandomly",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTeammateTargetRandomly"
};
window.behaviorGraphNodesObject["EvaluateTeammateTargetRandomly"] = {
    nodeName: "EvaluateTeammateTargetRandomly",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "SSScoreTeammateTargetRandomly",
    Child2: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["SSScoreTeammateTargetRandomly"] = {
    nodeName: "SSScoreTeammateTargetRandomly",
    NodeType: "Successor",
    Child0: "ScoreTeammateTargetRandomly"
};
window.behaviorGraphNodesObject["ScoreTeammateTargetRandomly"] = {
    nodeName: "ScoreTeammateTargetRandomly",
    NodeType: "Sequence",
    Child0: "TargetIsAlly",
    Child1: "GenericScoreTargetRandomlySequence"
};
window.behaviorGraphNodesObject["PanickedFallBackUnsafe"] = {
    nodeName: "PanickedFallBackUnsafe",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "FindFriendlyFallbackDestination",
    Child2: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["GenericScamperRoot"] = {
    nodeName: "GenericScamperRoot",
    NodeType: "Selector",
    Child0: "CounterBeaglerushManeuver",
    Child1: "MoveStandardWithLoSUnsafe",
    Child2: "MoveStandardUnsafe",
    Child3: "SkipMove"
};
window.behaviorGraphNodesObject["ScamperRoot_Soldier"] = {
    nodeName: "ScamperRoot_Soldier",
    NodeType: "Selector",
    Child0: "CounterBeaglerushManeuver",
    Child1: "MoveDefensiveWithLoSUnsafe",
    Child2: "MoveStandardUnsafe",
    Child3: "SkipMove"
};
window.behaviorGraphNodesObject["ScamperRoot_Flanker"] = {
    nodeName: "ScamperRoot_Flanker",
    NodeType: "Selector",
    Child0: "CounterBeaglerushManeuver",
    Child1: "MoveFlankingUnsafe",
    Child2: "MoveStandardWithLoSUnsafe",
    Child3: "MoveStandardUnsafe",
    Child4: "SkipMove"
};
window.behaviorGraphNodesObject["ScamperRoot_NoCover"] = {
    nodeName: "ScamperRoot_NoCover",
    NodeType: "Selector",
    Child0: "CounterBeaglerushManeuver",
    Child1: "MoveNoCoverUnsafe",
    Child2: "SkipMove"
};
window.behaviorGraphNodesObject["ScamperRoot_Overwatch"] = {
    nodeName: "ScamperRoot_Overwatch",
    NodeType: "Selector",
    Child0: "CounterBeaglerushManeuver",
    Child1: "OverwatchIfTargetAvailable",
    Child2: "MoveNoCoverUnsafe",
    Child3: "SkipMove"
};
window.behaviorGraphNodesObject["ScamperRoot_MeleeNoCover"] = {
    nodeName: "ScamperRoot_MeleeNoCover",
    NodeType: "Selector",
    Child0: "CounterBeaglerushManeuver",
    Child1: "MoveMeleeFANATICUnsafe",
    Child2: "MoveNoCoverUnsafe",
    Child3: "SkipMove"
};
window.behaviorGraphNodesObject["CounterBeaglerushManeuver"] = {
    nodeName: "CounterBeaglerushManeuver",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SelectFlankedEnemyTarget",
    Child2: "ShootTargetChanceOnScamper"
};
window.behaviorGraphNodesObject["SelectFlankedEnemyTarget"] = {
    nodeName: "SelectFlankedEnemyTarget",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "EvaluateFlankedEnemyTargets",
    Child2: "HasValidTarget-StandardShot"
};
window.behaviorGraphNodesObject["EvaluateFlankedEnemyTargets"] = {
    nodeName: "EvaluateFlankedEnemyTargets",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateFlankedEnemies"
};
window.behaviorGraphNodesObject["EvaluateFlankedEnemies"] = {
    nodeName: "EvaluateFlankedEnemies",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "SSScoreFlankedEnemy",
    Child2: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["SSScoreFlankedEnemy"] = {
    nodeName: "SSScoreFlankedEnemy",
    NodeType: "Successor",
    Child0: "ScoreFlankedEnemy"
};
window.behaviorGraphNodesObject["IsActiveTeam-eTeam_XCom"] = {
    nodeName: "IsActiveTeam-eTeam_XCom",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["NotActiveTeamXCom"] = {
    nodeName: "NotActiveTeamXCom",
    NodeType: "Inverter",
    Child0: "IsActiveTeam-eTeam_XCom"
};
window.behaviorGraphNodesObject["ScoreFlankedEnemy"] = {
    nodeName: "ScoreFlankedEnemy",
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
window.behaviorGraphNodesObject["TargetNotMindControlled"] = {
    nodeName: "TargetNotMindControlled",
    NodeType: "Inverter",
    Child0: "TargetAffectedByEffect-MindControl"
};
window.behaviorGraphNodesObject["TargetNotBoundOrPanicked"] = {
    nodeName: "TargetNotBoundOrPanicked",
    NodeType: "Inverter",
    Child0: "IsLastResortTarget"
};
window.behaviorGraphNodesObject["TargetAffectedByEffect-MindControl"] = {
    nodeName: "TargetAffectedByEffect-MindControl",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsTargetScamperInstigator"] = {
    nodeName: "IsTargetScamperInstigator",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["WasTargetPreviouslyConcealed"] = {
    nodeName: "WasTargetPreviouslyConcealed",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["ShootTargetChanceOnScamper"] = {
    nodeName: "ShootTargetChanceOnScamper",
    NodeType: "RandFilter",
    Child0: "SelectAbility-StandardShot",
    Param0: "50"
};
window.behaviorGraphNodesObject["AdventTrooper::CharacterRoot"] = {
    nodeName: "AdventTrooper::CharacterRoot",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "AdvTrooper_RedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["AdvTrooper_RedAlert"] = {
    nodeName: "AdvTrooper_RedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "AdvTrooper_RedAbilitySelector"
};
window.behaviorGraphNodesObject["AdvTrooper_RedAbilitySelector"] = {
    nodeName: "AdvTrooper_RedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "AdventRedFirstAction",
    Child2: "AdventRedLastAction"
};
window.behaviorGraphNodesObject["AdventRedFirstAction"] = {
    nodeName: "AdventRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AdventRedFirstActionSelector"
};
window.behaviorGraphNodesObject["AdventRedFirstActionSelector"] = {
    nodeName: "AdventRedFirstActionSelector",
    NodeType: "Selector",
    Child0: "DoIfFlankedMove",
    Child1: "SelectMove_JobOrAggressive",
    Child2: "TryMoveThenGrenade",
    Child3: "TryShootOrReloadOrOverwatch",
    Child4: "HuntEnemyWithCover"
};
window.behaviorGraphNodesObject["AdventRedLastAction"] = {
    nodeName: "AdventRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "AdventRedLastActionSelector"
};
window.behaviorGraphNodesObject["AdventRedLastActionSelector"] = {
    nodeName: "AdventRedLastActionSelector",
    NodeType: "Selector",
    Child0: "TryGrenade",
    Child1: "TryShootOrReloadOrOverwatch",
    Child2: "HuntEnemyWithCover",
    Child3: "SelectMove_JobOrAggressive"
};
window.behaviorGraphNodesObject["AdventCaptain::CharacterRoot"] = {
    nodeName: "AdventCaptain::CharacterRoot",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "AdvCaptain_RedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["AdvCaptain_RedAlert"] = {
    nodeName: "AdvCaptain_RedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "AdvCaptain_RedAbilitySelector"
};
window.behaviorGraphNodesObject["AdvCaptain_RedAbilitySelector"] = {
    nodeName: "AdvCaptain_RedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "AdvCaptain_RedFirstAction",
    Child2: "AdvCaptain_RedLastAction"
};
window.behaviorGraphNodesObject["AdvCaptain_RedFirstAction"] = {
    nodeName: "AdvCaptain_RedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AdvCaptain_RedFirstActionSelector"
};
window.behaviorGraphNodesObject["AdvCaptain_RedFirstActionSelector"] = {
    nodeName: "AdvCaptain_RedFirstActionSelector",
    NodeType: "Selector",
    Child0: "DoIfFlankedMove",
    Child1: "TryMarkTargetOption",
    Child2: "SelectMove_JobOrDefensive",
    Child3: "AdvCaptainTryMoveThenGrenade",
    Child4: "TryShootOrReloadOrOverwatch",
    Child5: "HuntEnemyWithCover"
};
window.behaviorGraphNodesObject["AdvCaptain_RedLastAction"] = {
    nodeName: "AdvCaptain_RedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "AdvCaptain_RedLastActionSelector"
};
window.behaviorGraphNodesObject["AdvCaptain_RedLastActionSelector"] = {
    nodeName: "AdvCaptain_RedLastActionSelector",
    NodeType: "Selector",
    Child0: "TryMarkTargetOption",
    Child1: "AdvCaptainTryGrenade",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "HuntEnemyWithCover",
    Child4: "SelectMove_JobOrDefensive"
};
window.behaviorGraphNodesObject["AdvCaptainTryMoveThenGrenade"] = {
    nodeName: "AdvCaptainTryMoveThenGrenade",
    NodeType: "Sequence",
    Child0: "IsAdvCaptainQualifiedForGrenade",
    Child1: "TryMoveThenGrenade"
};
window.behaviorGraphNodesObject["AdvCaptainTryGrenade"] = {
    nodeName: "AdvCaptainTryGrenade",
    NodeType: "Sequence",
    Child0: "IsAdvCaptainQualifiedForGrenade",
    Child1: "TryGrenade"
};
window.behaviorGraphNodesObject["IsAdvCaptainQualifiedForGrenade"] = {
    nodeName: "IsAdvCaptainQualifiedForGrenade",
    NodeType: "Selector",
    Child0: "NotAdvCaptainM1",
    Child1: "IsDifficultyAboveNormal"
};
window.behaviorGraphNodesObject["NotAdvCaptainM1"] = {
    nodeName: "NotAdvCaptainM1",
    NodeType: "Inverter",
    Child0: "TemplateNameIs-AdvCaptainM1"
};
window.behaviorGraphNodesObject["TemplateNameIs-AdvCaptainM1"] = {
    nodeName: "TemplateNameIs-AdvCaptainM1",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AdventStunLancer::CharacterRoot"] = {
    nodeName: "AdventStunLancer::CharacterRoot",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "AdventSL_RedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["AdventSL_RedAlert"] = {
    nodeName: "AdventSL_RedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "AdventSL_RedAbilitySelector"
};
window.behaviorGraphNodesObject["AdventSL_RedAbilitySelector"] = {
    nodeName: "AdventSL_RedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "AdventSLFirstAction",
    Child2: "AdventSLLastAction"
};
window.behaviorGraphNodesObject["AdventSLFirstAction"] = {
    nodeName: "AdventSLFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AdventSLFirstActionSelector"
};
window.behaviorGraphNodesObject["AdventSLFirstActionSelector"] = {
    nodeName: "AdventSLFirstActionSelector",
    NodeType: "Selector",
    Child0: "TryStunLance",
    Child1: "DoIfFlankedMove",
    Child2: "SelectMove_JobOrMelee",
    Child3: "TryMoveThenGrenade",
    Child4: "TryShootOrReloadOrOverwatch",
    Child5: "HuntEnemyWithCover"
};
window.behaviorGraphNodesObject["AdventSLLastAction"] = {
    nodeName: "AdventSLLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "AdventSLLastActionSelector"
};
window.behaviorGraphNodesObject["AdventSLLastActionSelector"] = {
    nodeName: "AdventSLLastActionSelector",
    NodeType: "Selector",
    Child0: "TryStunLance",
    Child1: "TryGrenade",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "HuntEnemyWithCover",
    Child4: "SelectMove_JobOrMelee"
};
window.behaviorGraphNodesObject["AdventShieldBearer::CharacterRoot"] = {
    nodeName: "AdventShieldBearer::CharacterRoot",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "AdvShieldBearer_RedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["AdvShieldBearer_RedAlert"] = {
    nodeName: "AdvShieldBearer_RedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "AdvShieldBearer_RedAbilitySelector"
};
window.behaviorGraphNodesObject["AdvShieldBearer_RedAbilitySelector"] = {
    nodeName: "AdvShieldBearer_RedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "ShieldBearerFirstAction",
    Child2: "ShieldBearerLastAction"
};
window.behaviorGraphNodesObject["ShieldBearerFirstAction"] = {
    nodeName: "ShieldBearerFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "ShieldBearerFirstActionSelector"
};
window.behaviorGraphNodesObject["ShieldBearerFirstActionSelector"] = {
    nodeName: "ShieldBearerFirstActionSelector",
    NodeType: "Selector",
    Child0: "TryMoveForEnergyShield",
    Child1: "TryEnergyShieldOnMultipleTargets",
    Child2: "DoIfFlankedMove",
    Child3: "SelectMove_JobOrDefensive",
    Child4: "HuntEnemyWithCover",
    Child5: "TryShootOrReloadOrOverwatch"
};
window.behaviorGraphNodesObject["TryMoveForEnergyShield"] = {
    nodeName: "TryMoveForEnergyShield",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-EnergyShield",
    Child2: "NotLastActionPoint",
    Child3: "MoveStandardIfFirstAbility-EnergyShield"
};
window.behaviorGraphNodesObject["ShieldBearerLastAction"] = {
    nodeName: "ShieldBearerLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "ShieldBearerLastActionSelector"
};
window.behaviorGraphNodesObject["ShieldBearerLastActionSelector"] = {
    nodeName: "ShieldBearerLastActionSelector",
    NodeType: "Selector",
    Child0: "TryEnergyShieldOnAnyTarget",
    Child1: "TryShootOrReloadOrOverwatch",
    Child2: "HuntEnemyWithCover",
    Child3: "SelectMove_JobOrDefensive"
};
window.behaviorGraphNodesObject["AdventMEC::CharacterRoot"] = {
    nodeName: "AdventMEC::CharacterRoot",
    NodeType: "Selector",
    Child0: "MecMk1Branch",
    Child1: "AdvMECMk2_Root"
};
window.behaviorGraphNodesObject["MecMk1Branch"] = {
    nodeName: "MecMk1Branch",
    NodeType: "Sequence",
    Child0: "TemplateNameIs-AdvMEC_M1",
    Child1: "AdvMEC_Root"
};
window.behaviorGraphNodesObject["TemplateNameIs-AdvMEC_M1"] = {
    nodeName: "TemplateNameIs-AdvMEC_M1",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AdvMEC_Root"] = {
    nodeName: "AdvMEC_Root",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "MECRedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["MECRedAlert"] = {
    nodeName: "MECRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "MECRedAbilitySelector"
};
window.behaviorGraphNodesObject["MECRedAbilitySelector"] = {
    nodeName: "MECRedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "MECRedFirstAction",
    Child2: "MECRedLastAction"
};
window.behaviorGraphNodesObject["MECRedFirstAction"] = {
    nodeName: "MECRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MECFirstActionSelector"
};
window.behaviorGraphNodesObject["MECFirstActionSelector"] = {
    nodeName: "MECFirstActionSelector",
    NodeType: "Selector",
    Child0: "TryMoveThenMicroMissiles",
    Child1: "SelectNCMove_JobOrFanatic",
    Child2: "HuntEnemy",
    Child3: "TryShootOrReloadOrOverwatch"
};
window.behaviorGraphNodesObject["MECRedLastAction"] = {
    nodeName: "MECRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "MECRedLastActionSelector"
};
window.behaviorGraphNodesObject["MECRedLastActionSelector"] = {
    nodeName: "MECRedLastActionSelector",
    NodeType: "Selector",
    Child0: "TryMicroMissiles",
    Child1: "ShootOrSuppressIfNoGoodShot",
    Child2: "HuntEnemy",
    Child3: "SelectNCMove_JobOrFanatic",
    Child4: "TryShootOrReloadOrOverwatch"
};
window.behaviorGraphNodesObject["AdvMECMk2_Root"] = {
    nodeName: "AdvMECMk2_Root",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "MECMk2RedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["MECMk2RedAlert"] = {
    nodeName: "MECMk2RedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "MECMk2RedAbilitySelector"
};
window.behaviorGraphNodesObject["MECMk2RedAbilitySelector"] = {
    nodeName: "MECMk2RedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "MECMk2RedFirstAction",
    Child2: "MECMk2RedLastAction"
};
window.behaviorGraphNodesObject["MECMk2RedFirstAction"] = {
    nodeName: "MECMk2RedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MECMk2FirstActionSelector"
};
window.behaviorGraphNodesObject["MECMk2FirstActionSelector"] = {
    nodeName: "MECMk2FirstActionSelector",
    NodeType: "Selector",
    Child0: "TryMoveThenMicroMissilesMk2",
    Child1: "SelectNCMove_JobOrFanatic",
    Child2: "HuntEnemy",
    Child3: "TryShootOrReloadOrOverwatch"
};
window.behaviorGraphNodesObject["MECMk2RedLastAction"] = {
    nodeName: "MECMk2RedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "MECMk2RedLastActionSelector"
};
window.behaviorGraphNodesObject["MECMk2RedLastActionSelector"] = {
    nodeName: "MECMk2RedLastActionSelector",
    NodeType: "Selector",
    Child0: "TryMicroMissilesMk2",
    Child1: "ShootOrSuppressIfNoGoodShot",
    Child2: "HuntEnemy",
    Child3: "SelectNCMove_JobOrFanatic",
    Child4: "TryShootOrReloadOrOverwatch"
};
window.behaviorGraphNodesObject["AdventPsiWitch::CharacterRoot"] = {
    nodeName: "AdventPsiWitch::CharacterRoot",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "PsiWitchRedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["PsiWitchRedAlert"] = {
    nodeName: "PsiWitchRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "PsiWitchRedAbilitySelector"
};
window.behaviorGraphNodesObject["PsiWitchRedAbilitySelector"] = {
    nodeName: "PsiWitchRedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "PsiWitchRedFirstAction",
    Child2: "PsiWitchRedLastAction"
};
window.behaviorGraphNodesObject["PsiWitchRedFirstAction"] = {
    nodeName: "PsiWitchRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "PsiWitchRedFirstActionSelector"
};
window.behaviorGraphNodesObject["PsiWitchRedFirstActionSelector"] = {
    nodeName: "PsiWitchRedFirstActionSelector",
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
window.behaviorGraphNodesObject["PsiWitchRedLastAction"] = {
    nodeName: "PsiWitchRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "PsiWitchRedLastActionSelector"
};
window.behaviorGraphNodesObject["PsiWitchRedLastActionSelector"] = {
    nodeName: "PsiWitchRedLastActionSelector",
    NodeType: "Selector",
    Child0: "PsiWitchAttackSequencer",
    Child1: "SelectMoveStandard",
    Child2: "HuntEnemyWithCover"
};
window.behaviorGraphNodesObject["PsiWitchAttackSequencer"] = {
    nodeName: "PsiWitchAttackSequencer",
    NodeType: "Selector",
    Child0: "TryPsiMindControl",
    Child1: "TryDimensionalRift",
    Child2: "TryNullLance",
    Child3: "TryShootOrReloadOrOverwatch"
};
window.behaviorGraphNodesObject["AdventTurret::CharacterRoot"] = {
    nodeName: "AdventTurret::CharacterRoot",
    NodeType: "Selector",
    Child0: "Turret_RedAlert",
    Child1: "SkipMove",
    Child1: "TryOverwatch"
};
window.behaviorGraphNodesObject["Turret_RedAlert"] = {
    nodeName: "Turret_RedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "TurretRedAbilitySelector"
};
window.behaviorGraphNodesObject["TurretRedAbilitySelector"] = {
    nodeName: "TurretRedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "TurretRedFirstActionSelector",
    Child2: "ConsiderTakingOverwatch"
};
window.behaviorGraphNodesObject["TurretRedFirstActionSelector"] = {
    nodeName: "TurretRedFirstActionSelector",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "Turret_TryShootOrReload"
};
window.behaviorGraphNodesObject["Turret_TryShootOrReload"] = {
    nodeName: "Turret_TryShootOrReload",
    NodeType: "Selector",
    Child0: "Turret_ShootIfAvailable",
    Child1: "NeedsReload"
};
window.behaviorGraphNodesObject["Turret_ShootIfAvailable"] = {
    nodeName: "Turret_ShootIfAvailable",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "Turret_SelectTargetForStandardShot",
    Child2: "SelectAbility-StandardShot"
};
window.behaviorGraphNodesObject["Turret_SelectTargetForStandardShot"] = {
    nodeName: "Turret_SelectTargetForStandardShot",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardShot",
    Child1: "TurretSelectBestTarget",
    Child2: "HasValidTarget-StandardShot"
};
window.behaviorGraphNodesObject["TurretSelectBestTarget"] = {
    nodeName: "TurretSelectBestTarget",
    NodeType: "RepeatUntilFail",
    Child0: "TurretEvaluateTarget"
};
window.behaviorGraphNodesObject["TurretEvaluateTarget"] = {
    nodeName: "TurretEvaluateTarget",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreHitChance",
    Child2: "GenericScoreTargetRandomly",
    Child3: "TargetScoreInvalidateCivilians",
    Child4: "TargetScoreInvalidatePriorityObject",
    Child5: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["TargetScoreInvalidatePriorityObject"] = {
    nodeName: "TargetScoreInvalidatePriorityObject",
    NodeType: "Successor",
    Child0: "ScoreTargetOutIfPriorityObject"
};
window.behaviorGraphNodesObject["ScoreTargetOutIfPriorityObject"] = {
    nodeName: "ScoreTargetOutIfPriorityObject",
    NodeType: "Sequence",
    Child0: "TargetIsPriorityObject",
    Child1: "AddToTargetScore_-1000"
};
window.behaviorGraphNodesObject["Andromedon::CharacterRoot"] = {
    nodeName: "Andromedon::CharacterRoot",
    NodeType: "Selector",
    Child0: "AndromedonRobotBranch",
    Child1: "AndromedonRoot"
};
window.behaviorGraphNodesObject["AndromedonRobotBranch"] = {
    nodeName: "AndromedonRobotBranch",
    NodeType: "Sequence",
    Child0: "TemplateNameIs-AndromedonRobot",
    Child1: "AndromedonRobotRoot"
};
window.behaviorGraphNodesObject["TemplateNameIs-AndromedonRobot"] = {
    nodeName: "TemplateNameIs-AndromedonRobot",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AndromedonRoot"] = {
    nodeName: "AndromedonRoot",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "AndromedonRedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["AndromedonRedAlert"] = {
    nodeName: "AndromedonRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "AndromedonRedAbilitySelector"
};
window.behaviorGraphNodesObject["AndromedonRedAbilitySelector"] = {
    nodeName: "AndromedonRedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "AndromedonRedFirstAction",
    Child2: "AndromedonRedLastAction"
};
window.behaviorGraphNodesObject["AndromedonRedFirstAction"] = {
    nodeName: "AndromedonRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "AndromedonRedFirstActionSelector"
};
window.behaviorGraphNodesObject["AndromedonRedFirstActionSelector"] = {
    nodeName: "AndromedonRedFirstActionSelector",
    NodeType: "Selector",
    Child0: "TryStandardMelee",
    Child1: "TryMoveThenAcidBlob",
    Child2: "DoIfFlankedMove",
    Child3: "SelectMoveStandard",
    Child4: "TryShootOrReloadOrOverwatch",
    Child5: "HuntEnemyWithCover"
};
window.behaviorGraphNodesObject["AndromedonRedLastAction"] = {
    nodeName: "AndromedonRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "AndromedonRedLastActionSelector"
};
window.behaviorGraphNodesObject["AndromedonRedLastActionSelector"] = {
    nodeName: "AndromedonRedLastActionSelector",
    NodeType: "Selector",
    Child0: "TryStandardMelee",
    Child1: "TryAcidBlob",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "HuntEnemyWithCover",
    Child4: "SelectMoveStandard"
};
window.behaviorGraphNodesObject["AndromedonRobot::CharacterRoot"] = {
    nodeName: "AndromedonRobot::CharacterRoot",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "GenericEnemyMeleeRootFANATIC"
};
window.behaviorGraphNodesObject["AndromedonRobotRoot"] = {
    nodeName: "AndromedonRobotRoot",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "GenericEnemyMeleeRootFANATIC"
};
window.behaviorGraphNodesObject["Archon::CharacterRoot"] = {
    nodeName: "Archon::CharacterRoot",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "ArchonRedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["ArchonRedAlert"] = {
    nodeName: "ArchonRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "ArchonRedAbilitySelector"
};
window.behaviorGraphNodesObject["ArchonRedAbilitySelector"] = {
    nodeName: "ArchonRedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "ArchonRedFirstAction",
    Child2: "ArchonRedLastAction"
};
window.behaviorGraphNodesObject["ArchonRedFirstAction"] = {
    nodeName: "ArchonRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "ArchonFirstActionSelector"
};
window.behaviorGraphNodesObject["ArchonFirstActionSelector"] = {
    nodeName: "ArchonFirstActionSelector",
    NodeType: "Selector",
    Child0: "TryFrenziedMoveAndAttack",
    Child1: "TryMoveThenBlazingPinions",
    Child2: "TryStandardMelee",
    Child3: "DoIfFlankedMove",
    Child4: "SelectMoveStandard",
    Child5: "TryShootOrReloadOrOverwatch",
    Child6: "HuntEnemyWithCover"
};
window.behaviorGraphNodesObject["TryMoveThenBlazingPinions"] = {
    nodeName: "TryMoveThenBlazingPinions",
    NodeType: "Selector",
    Child0: "TryMoveForBlazingPinions",
    Child1: "TryBlazingPinions"
};
window.behaviorGraphNodesObject["TryMoveForBlazingPinions"] = {
    nodeName: "TryMoveForBlazingPinions",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-BlazingPinionsStage1",
    Child2: "FindPotentialAoETargets-BlazingPinionsBasicProfile",
    Child3: "MoveStandardIfFirstAbility-BlazingPinions"
};
window.behaviorGraphNodesObject["ArchonRedLastAction"] = {
    nodeName: "ArchonRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "ArchonRedLastActionSelector"
};
window.behaviorGraphNodesObject["ArchonRedLastActionSelector"] = {
    nodeName: "ArchonRedLastActionSelector",
    NodeType: "Selector",
    Child0: "TryFrenziedAttack",
    Child1: "TryBlazingPinions",
    Child2: "TryStandardMelee",
    Child3: "TryShootOrReloadOrOverwatch",
    Child4: "HuntEnemy",
    Child5: "SelectMoveStandard"
};
window.behaviorGraphNodesObject["TryFrenziedAttack"] = {
    nodeName: "TryFrenziedAttack",
    NodeType: "Sequence",
    Child0: "AffectedByEffect-FrenzyEffect",
    Child1: "TryStandardMelee"
};
window.behaviorGraphNodesObject["TryFrenziedMoveAndAttack"] = {
    nodeName: "TryFrenziedMoveAndAttack",
    NodeType: "Sequence",
    Child0: "AffectedByEffect-FrenzyEffect",
    Child1: "TryAttackOrDashAndAttack"
};
window.behaviorGraphNodesObject["TryAttackOrDashAndAttack"] = {
    nodeName: "TryAttackOrDashAndAttack",
    NodeType: "Selector",
    Child0: "TryStandardMelee",
    Child1: "TryStandardMeleeDashFANATICUnsafe"
};
window.behaviorGraphNodesObject["Berserker::CharacterRoot"] = {
    nodeName: "Berserker::CharacterRoot",
    NodeType: "Selector",
    Child0: "TryJobUnsafe",
    Child1: "GenericGreenMovement",
    Child2: "BerserkerMeleeRedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["BerserkerMeleeRedAlert"] = {
    nodeName: "BerserkerMeleeRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "Berserker_RedAbilitySelector"
};
window.behaviorGraphNodesObject["Berserker_RedAbilitySelector"] = {
    nodeName: "Berserker_RedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "BerserkerRedFirstAction",
    Child2: "BerserkerRedLastAction" // 
};
window.behaviorGraphNodesObject["BerserkerRedFirstAction"] = {
    nodeName: "BerserkerRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "BerserkerRedFirstActionSelector"
};
window.behaviorGraphNodesObject["BerserkerRedFirstActionSelector"] = {
    nodeName: "BerserkerRedFirstActionSelector",
    NodeType: "Selector",
    Child0: "TryBerserkerMelee",
    Child1: "MoveMeleeDashFANATICUnsafe",
    Child2: "HuntEnemyUnsafe"
};
window.behaviorGraphNodesObject["BerserkerRedLastAction"] = {
    nodeName: "BerserkerRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "BerserkerRedLastActionSelector"
};
window.behaviorGraphNodesObject["BerserkerRedLastActionSelector"] = {
    nodeName: "BerserkerRedLastActionSelector",
    NodeType: "Selector",
    Child0: "TryBerserkerMelee",
    Child1: "MoveMeleeDashFANATICUnsafe",
    Child2: "HuntEnemyUnsafe"
};
window.behaviorGraphNodesObject["Chryssalid::CharacterRoot"] = {
    nodeName: "Chryssalid::CharacterRoot",
    NodeType: "Selector",
    Child0: "ChryssalidCocoonBranch",
    Child1: "ChryssalidRoot"
};
window.behaviorGraphNodesObject["ChryssalidCocoonBranch"] = {
    nodeName: "ChryssalidCocoonBranch",
    NodeType: "Sequence",
    Child0: "IsChryssalidCocoon",
    Child1: "CocoonRoot"
};
window.behaviorGraphNodesObject["IsChryssalidCocoon"] = {
    nodeName: "IsChryssalidCocoon",
    NodeType: "Selector",
    Child0: "TemplateNameIs-ChryssalidCocoon",
    Child1: "TemplateNameIs-ChryssalidCocoonHuman"
};
window.behaviorGraphNodesObject["TemplateNameIs-ChryssalidCocoon"] = {
    nodeName: "TemplateNameIs-ChryssalidCocoon",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["TemplateNameIs-ChryssalidCocoonHuman"] = {
    nodeName: "TemplateNameIs-ChryssalidCocoonHuman",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["ChryssalidRoot"] = {
    nodeName: "ChryssalidRoot",
    NodeType: "Selector",
    Child0: "ChryssalidHeatSeekProtocol",
    Child1: "SkipIfBurrowed",
    Child2: "TryJobTerrorist",
    Child3: "TryJobChargerUnsafe",
    Child4: "ChryssalidGreenAlert",
    Child5: "ChryssalidRedAlert",
    Child6: "ChryssalidYellowAlert"
};
window.behaviorGraphNodesObject["ChryssalidRedAlert"] = {
    nodeName: "ChryssalidRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "ChryssalidRedAbilitySelector"
};
window.behaviorGraphNodesObject["ChryssalidRedAbilitySelector"] = {
    nodeName: "ChryssalidRedAbilitySelector",
    NodeType: "Selector",
    Child0: "TryJobUnsafe",
    Child1: "MimicBeaconBehavior",
    Child2: "ChryssalidRedActionSelector"
};
window.behaviorGraphNodesObject["ChryssalidRedActionSelector"] = {
    nodeName: "ChryssalidRedActionSelector",
    NodeType: "Selector",
    Child0: "TryMelee66",
    Child1: "TryRunAndBurrow33"
};
window.behaviorGraphNodesObject["TryMelee66"] = {
    nodeName: "TryMelee66",
    NodeType: "Sequence",
    Child0: "SSSetMeleeValueIfUnset",
    Child1: "CheckMeleeUnder67",
    Child2: "ChryssalidMeleeSelector"
};
window.behaviorGraphNodesObject["SSSetMeleeValueIfUnset"] = {
    nodeName: "SSSetMeleeValueIfUnset",
    NodeType: "Successor",
    Child0: "SetMeleeValueIfUnset"
};
window.behaviorGraphNodesObject["SetMeleeValueIfUnset"] = {
    nodeName: "SetMeleeValueIfUnset",
    NodeType: "Sequence",
    Child0: "MeleeValueUnset",
    Child1: "SetMeleeValue"
};
window.behaviorGraphNodesObject["MeleeValueUnset"] = {
    nodeName: "MeleeValueUnset",
    NodeType: "Inverter",
    Child0: "HasUnitValue-MeleeChance"
};
window.behaviorGraphNodesObject["HasUnitValue-MeleeChance"] = {
    nodeName: "HasUnitValue-MeleeChance",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetMeleeValue"] = {
    nodeName: "SetMeleeValue",
    NodeType: "Selector",
    Child0: "DisableBurrowChanceIfIneligible",
    Child1: "SetRandUnitValue-MeleeChance"
};
window.behaviorGraphNodesObject["DisableBurrowChanceIfIneligible"] = {
    nodeName: "DisableBurrowChanceIfIneligible",
    NodeType: "Sequence",
    Child0: "BurrowOptionNotAvailable",
    Child1: "SetUnitValue-MeleeChance"
};
window.behaviorGraphNodesObject["BurrowOptionNotAvailable"] = {
    nodeName: "BurrowOptionNotAvailable",
    NodeType: "Selector",
    Child0: "IsAtEndOfAxisOfPlay",
    Child1: "HasXComUnitsCloserToObjective"
};
window.behaviorGraphNodesObject["HasXComUnitsCloserToObjective"] = {
    nodeName: "HasXComUnitsCloserToObjective",
    NodeType: "Condition",
    Param0: "10" //  True when any XCom unit is more than Param0 meters closer to objective.
};
window.behaviorGraphNodesObject["IsAtEndOfAxisOfPlay"] = {
    nodeName: "IsAtEndOfAxisOfPlay",
    NodeType: "StatCondition",
    Param0: "ObjectiveDistance",
    Param1: "<:",
    Param2: "27" // Check if within sight range of objective.  If so", do not bother with burrowing.
};
window.behaviorGraphNodesObject["SetRandUnitValue-MeleeChance"] = {
    nodeName: "SetRandUnitValue-MeleeChance",
    NodeType: "Action",
    Param0: "100" //  Random chance to run away and burrow or fight. Param1 DNE = Set once per mission.
};
window.behaviorGraphNodesObject["SetUnitValue-MeleeChance"] = {
    nodeName: "SetUnitValue-MeleeChance",
    NodeType: "Action",
    Param0: "1" // Disable chance to burrow again.
};
window.behaviorGraphNodesObject["TryRunAndBurrow33"] = {
    nodeName: "TryRunAndBurrow33",
    NodeType: "Sequence",
    Child0: "CheckMeleeOver67",
    Child1: "ChryssalidRunAndBurrowSelector"
};
window.behaviorGraphNodesObject["CheckMeleeUnder67"] = {
    nodeName: "CheckMeleeUnder67",
    NodeType: "StatCondition",
    Param0: "UnitValue-MeleeChance",
    Param1: "<",
    Param2: "67"
};
window.behaviorGraphNodesObject["CheckMeleeOver67"] = {
    nodeName: "CheckMeleeOver67",
    NodeType: "StatCondition",
    Param0: "UnitValue-MeleeChance",
    Param1: ">:",
    Param2: "67"
};
window.behaviorGraphNodesObject["ChryssalidRunAndBurrowSelector"] = {
    nodeName: "ChryssalidRunAndBurrowSelector",
    NodeType: "Selector",
    Child0: "BurrowIfOutOfView",
    Child1: "TryDashMoveForBurrow"
};
window.behaviorGraphNodesObject["BurrowIfOutOfView"] = {
    nodeName: "BurrowIfOutOfView",
    NodeType: "Sequence",
    Child0: "NoVisibleEnemies",
    Child1: "TryBurrow"
};
window.behaviorGraphNodesObject["ChryssalidMeleeSelector"] = {
    nodeName: "ChryssalidMeleeSelector",
    NodeType: "Selector",
    Child0: "TryMeleeOnCivilian",
    Child1: "TryStandardMeleeDashFANATICUnsafe",
    Child2: "HuntEnemyUnsafe"
};
window.behaviorGraphNodesObject["TryMeleeOnCivilian"] = {
    nodeName: "TryMeleeOnCivilian",
    NodeType: "Sequence",
    Child0: "NumKilledCiviliansIsLessThanTurnCount",
    Child1: "HasVisibleCivilianInMoveRange",
    Child2: "Rand50AttackCivilian"
};
window.behaviorGraphNodesObject["HasVisibleCivilianInMoveRange"] = {
    nodeName: "HasVisibleCivilianInMoveRange",
    NodeType: "Condition" //  Visible to both players", in move range to unit.
};
window.behaviorGraphNodesObject["Rand50AttackCivilian"] = {
    nodeName: "Rand50AttackCivilian",
    NodeType: "RandFilter",
    Child0: "MeleeAttackNearestCivilian",
    Param0: "50"
};
window.behaviorGraphNodesObject["MeleeAttackNearestCivilian"] = {
    nodeName: "MeleeAttackNearestCivilian",
    NodeType: "Sequence",
    Child0: "SelectClosestCivilianInRange",
    Child1: "SelectAbility-StandardMelee"
};
window.behaviorGraphNodesObject["SelectClosestCivilianInRange"] = {
    nodeName: "SelectClosestCivilianInRange",
    NodeType: "Sequence",
    Child0: "SetTargetStack-StandardMelee",
    Child1: "SelectClosestCivilianForStandardMelee",
    Child2: "HasValidTarget-StandardMelee"
};
window.behaviorGraphNodesObject["SelectClosestCivilianForStandardMelee"] = {
    nodeName: "SelectClosestCivilianForStandardMelee",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateMeleeTargetForClosestCivilian"
};
window.behaviorGraphNodesObject["EvaluateMeleeTargetForClosestCivilian"] = {
    nodeName: "EvaluateMeleeTargetForClosestCivilian",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "TargetScoreClosestCivilianIfInRange",
    Child2: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["TargetScoreClosestCivilianIfInRange"] = {
    nodeName: "TargetScoreClosestCivilianIfInRange",
    NodeType: "Successor",
    Child0: "ScoreClosestCivilianIfInRange"
};
window.behaviorGraphNodesObject["ScoreClosestCivilianIfInRange"] = {
    nodeName: "ScoreClosestCivilianIfInRange",
    NodeType: "Sequence",
    Child0: "TargetIsCivilian",
    Child1: "TargetIsNotAlien",
    Child2: "IsTargetInMovementRange-StandardMelee",
    Child3: "TargetScoreByScaledDistance-1",
    Child4: "AddToTargetScore_100"
};
window.behaviorGraphNodesObject["ChryssalidYellowAlert"] = {
    nodeName: "ChryssalidYellowAlert",
    NodeType: "Sequence",
    Child0: "IsYellowAlert",
    Child1: "ChryssalidYellowAbilitySelector"
};
window.behaviorGraphNodesObject["ChryssalidYellowAbilitySelector"] = {
    nodeName: "ChryssalidYellowAbilitySelector",
    NodeType: "Selector",
    Child0: "ChryssalidHeatSeekProtocol",
    Child1: "ChryssalidUnburrowedProtocol",
    Child2: "TryJobUnsafe",
    Child3: "GenericAlertHandler",
    Child4: "SkipMove"
};
window.behaviorGraphNodesObject["ChryssalidHeatSeekProtocol"] = {
    nodeName: "ChryssalidHeatSeekProtocol",
    NodeType: "Sequence",
    Child0: "ChryssalidShouldTriggerHeatSeek",
    Child1: "AlertAndUnburrowOrHeatSeek"
};
window.behaviorGraphNodesObject["ChryssalidShouldTriggerHeatSeek"] = {
    nodeName: "ChryssalidShouldTriggerHeatSeek",
    NodeType: "Selector",
    Child0: "BurrowedAndEncounterBandPassed",
    Child1: "BurrowedandLastGroupRemaining",
    Child2: "IsUnitTypeVisible-MimicBeacon"
};
window.behaviorGraphNodesObject["HasEncounterBandBeenPassed"] = {
    nodeName: "HasEncounterBandBeenPassed",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["BurrowedAndEncounterBandPassed"] = {
    nodeName: "BurrowedAndEncounterBandPassed",
    NodeType: "Sequence",
    Child0: "AffectedByEffect-Burrowed",
    Child1: "HasEncounterBandBeenPassed"
};
window.behaviorGraphNodesObject["BurrowedandLastGroupRemaining"] = {
    nodeName: "BurrowedandLastGroupRemaining",
    NodeType: "Sequence",
    Child0: "AffectedByEffect-Burrowed",
    Child1: "AreAllRemainingAlliesUnderEffect-Burrowed"
};
window.behaviorGraphNodesObject["AreAllRemainingAlliesUnderEffect-Burrowed"] = {
    nodeName: "AreAllRemainingAlliesUnderEffect-Burrowed",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["AlertAndUnburrowOrHeatSeek"] = {
    nodeName: "AlertAndUnburrowOrHeatSeek",
    NodeType: "Selector",
    Child0: "TryAlert",
    Child1: "TryUnburrow",
    Child2: "MimicBeaconBehavior",
    Child3: "SelectHeatSeekMove",
    Child4: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["TryAlert"] = {
    nodeName: "TryAlert",
    NodeType: "Sequence",
    Child0: "IsGreenAlert",
    Child1: "DisableGroupMove",
    Child2: "SelectAnyYellowAlertTarget",
    Child3: "SelectAbility-YellowAlert"
};
window.behaviorGraphNodesObject["SelectAnyYellowAlertTarget"] = {
    nodeName: "SelectAnyYellowAlertTarget",
    NodeType: "Sequence",
    Child0: "SetTargetStack-YellowAlert",
    Child1: "GenericSelectTargetRandomly",
    Child2: "HasValidTarget-YellowAlert"
};
window.behaviorGraphNodesObject["SelectAbility-YellowAlert"] = {
    nodeName: "SelectAbility-YellowAlert",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["SetTargetStack-YellowAlert"] = {
    nodeName: "SetTargetStack-YellowAlert",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["HasValidTarget-YellowAlert"] = {
    nodeName: "HasValidTarget-YellowAlert",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["ChryssalidGreenAlert"] = {
    nodeName: "ChryssalidGreenAlert",
    NodeType: "Sequence",
    Child0: "ShouldPatrol",
    Child1: "ChryssalidGreenAbilitySelector"
};
window.behaviorGraphNodesObject["ChryssalidGreenAbilitySelector"] = {
    nodeName: "ChryssalidGreenAbilitySelector",
    NodeType: "Selector",
    Child0: "ChryssalidUnburrowedProtocol",
    Child1: "TryJobUnsafe",
    Child2: "GenericGreenMovement"
};
window.behaviorGraphNodesObject["ChryssalidUnburrowedProtocol"] = {
    nodeName: "ChryssalidUnburrowedProtocol",
    NodeType: "Sequence",
    Child0: "IsUnburrowed",
    Child1: "GroupSize1",
    Child2: "ChryssalidMoveOrBurrow"
};
window.behaviorGraphNodesObject["ChryssalidMoveOrBurrow"] = {
    nodeName: "ChryssalidMoveOrBurrow",
    NodeType: "Selector",
    Child0: "MoveForBurrowIfFirstAction",
    Child1: "TryBurrowIfNotOnJob",
    Child2: "TryDashMoveForBurrow"
};
window.behaviorGraphNodesObject["MoveForBurrowIfFirstAction"] = {
    nodeName: "MoveForBurrowIfFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "TryBurrowMovement"
};
window.behaviorGraphNodesObject["TryBurrowMovement"] = {
    nodeName: "TryBurrowMovement",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "FindBurrowDestination",
    Child2: "DisableGroupMove",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["DisableGroupMove"] = {
    nodeName: "DisableGroupMove",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["TryDashMoveForBurrow"] = {
    nodeName: "TryDashMoveForBurrow",
    NodeType: "Sequence",
    Child0: "ResetDestinationSearch",
    Child1: "UseDashMovement",
    Child2: "TryBurrowMovement"
};
window.behaviorGraphNodesObject["FindBurrowDestination"] = {
    nodeName: "FindBurrowDestination",
    NodeType: "Selector",
    Child0: "FindLocalBurrowDestination",
    Child1: "FindClosestPointToAxisGround"
};
window.behaviorGraphNodesObject["FindLocalBurrowDestination"] = {
    nodeName: "FindLocalBurrowDestination",
    NodeType: "Sequence",
    Child0: "SSRestrictToAxisLoSIfInRange",
    Child1: "RestrictFromAlliesWithEffect-Burrowed",
    Child2: "SSRestrictFromKnownEnemyLoS",
    Child3: "SetNoCoverMovement",
    Child4: "RestrictToGroundTiles",
    Child5: "FindRestrictedDestination-Burrow"
};
window.behaviorGraphNodesObject["SSRestrictToAxisLoSIfInRange"] = {
    nodeName: "SSRestrictToAxisLoSIfInRange",
    NodeType: "Successor",
    Child0: "RestrictToAxisLoSIfInRange"
};
window.behaviorGraphNodesObject["SSRestrictFromKnownEnemyLoS"] = {
    nodeName: "SSRestrictFromKnownEnemyLoS",
    NodeType: "Successor",
    Child0: "RestrictFromKnownEnemyLoS"
};
window.behaviorGraphNodesObject["RestrictToAxisLoSIfInRange"] = {
    nodeName: "RestrictToAxisLoSIfInRange",
    NodeType: "Sequence",
    Child0: "IsInMovementRangeOfAxisOfPlay",
    Child1: "RestrictToAxisLoS"
};
window.behaviorGraphNodesObject["RestrictToAxisLoS"] = {
    nodeName: "RestrictToAxisLoS",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictFromKnownEnemyLoS"] = {
    nodeName: "RestrictFromKnownEnemyLoS",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["RestrictToGroundTiles"] = {
    nodeName: "RestrictToGroundTiles",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["FindClosestPointToAxisGround"] = {
    nodeName: "FindClosestPointToAxisGround",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["IsInMovementRangeOfAxisOfPlay"] = {
    nodeName: "IsInMovementRangeOfAxisOfPlay",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["RestrictFromAlliesWithEffect-Burrowed"] = {
    nodeName: "RestrictFromAlliesWithEffect-Burrowed",
    NodeType: "Action",
    Param0: "10.0f"
};
window.behaviorGraphNodesObject["GroupSize1"] = {
    nodeName: "GroupSize1",
    NodeType: "StatCondition",
    Param0: "GroupSize",
    Param1: "<:",
    Param2: "1"
};
window.behaviorGraphNodesObject["ChryssalidScamperRoot"] = {
    nodeName: "ChryssalidScamperRoot",
    NodeType: "Selector",
    Child0: "SkipIfBurrowed",
    Child1: "MoveMeleeFANATICUnsafe",
    Child2: "SelectHeatSeekMove"
};
window.behaviorGraphNodesObject["SkipIfBurrowed"] = {
    nodeName: "SkipIfBurrowed",
    NodeType: "Sequence",
    Child0: "AffectedByEffect-Burrowed",
    Child1: "SkipMove"
};
window.behaviorGraphNodesObject["IsUnburrowed"] = {
    nodeName: "IsUnburrowed",
    NodeType: "Inverter",
    Child0: "AffectedByEffect-Burrowed"
};
window.behaviorGraphNodesObject["CocoonRoot"] = {
    nodeName: "CocoonRoot",
    NodeType: "Selector",
    Child0: "TrySpawnChryssalid",
    Child1: "SkipMove"
};
window.behaviorGraphNodesObject["TryMoveThenPsiBomb"] = {
    nodeName: "TryMoveThenPsiBomb",
    NodeType: "Selector",
    Child0: "TryTeleportForPsiBomb",
    Child1: "TryMoveForPsiBomb",
    Child2: "TryPsiBomb"
};
window.behaviorGraphNodesObject["TryTeleportForPsiBomb"] = {
    nodeName: "TryTeleportForPsiBomb",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-PsiBombStage1",
    Child1: "NotLastActionPoint",
    Child2: "FindPotentialAoETargets-PsiBombProfile",
    Child3: "TeleportForPsiBombTarget"
};
window.behaviorGraphNodesObject["TryMoveForPsiBomb"] = {
    nodeName: "TryMoveForPsiBomb",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-PsiBombStage1",
    Child2: "NotLastActionPoint",
    Child3: "FindPotentialAoETargets-PsiBombProfile",
    Child4: "MoveStandardIfFirstAbility-PsiBombStage1"
};
window.behaviorGraphNodesObject["Cyberus::CharacterRoot"] = {
    nodeName: "Cyberus::CharacterRoot",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "CodexRedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["CodexRedAlert"] = {
    nodeName: "CodexRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "CodexRedAbilitySelector"
};
window.behaviorGraphNodesObject["CodexRedAbilitySelector"] = {
    nodeName: "CodexRedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "CodexRedFirstAction",
    Child2: "CodexRedLastAction"
};
window.behaviorGraphNodesObject["CodexRedFirstAction"] = {
    nodeName: "CodexRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "CodexRedFirstActionSelector"
};
window.behaviorGraphNodesObject["CodexRedFirstActionSelector"] = {
    nodeName: "CodexRedFirstActionSelector",
    NodeType: "Selector",
    Child0: "TryMoveThenPsiBomb",
    Child1: "DoIfFlankedMove_Teleport",
    Child2: "TryTeleportDefensive",
    Child3: "SelectMove_JobOrFlanking",
    Child4: "TryShootOrReloadOrOverwatch",
    Child5: "HuntEnemyWithCover"
};
window.behaviorGraphNodesObject["CodexRedLastAction"] = {
    nodeName: "CodexRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "CodexRedLastActionSelector"
};
window.behaviorGraphNodesObject["CodexRedLastActionSelector"] = {
    nodeName: "CodexRedLastActionSelector",
    NodeType: "Selector",
    Child0: "TryPsiBomb",
    Child1: "TryShootOrReloadOrOverwatch",
    Child2: "HuntEnemyWithCover",
    Child3: "SelectMove_JobOrFlanking"
};
window.behaviorGraphNodesObject["CodexSometimesPsiBomb"] = {
    nodeName: "CodexSometimesPsiBomb",
    NodeType: "RandFilter",
    Child0: "TryPsiBomb",
    Param0: "33"
};
window.behaviorGraphNodesObject["DoIfFlankedMove_Teleport"] = {
    nodeName: "DoIfFlankedMove_Teleport",
    NodeType: "Sequence",
    Child0: "CheckIfNeedToMove",
    Child1: "FlankedMoveSelector_Teleport"
};
window.behaviorGraphNodesObject["FlankedMoveSelector_Teleport"] = {
    nodeName: "FlankedMoveSelector_Teleport",
    NodeType: "Selector",
    Child0: "TryTeleportDefensive",
    Child1: "MoveAdvanceToCoverUnsafe",
    Child2: "FallBack"
};
window.behaviorGraphNodesObject["Cyberus::MoveTowardMimicBeacon"] = {
    nodeName: "Cyberus::MoveTowardMimicBeacon",
    NodeType: "Selector",
    Child0: "TryTeleportTowardMimicBeacon",
    Child1: "TryStandardMoveTowardMimicBeacon"
};
window.behaviorGraphNodesObject["TryTeleportTowardMimicBeacon"] = {
    nodeName: "TryTeleportTowardMimicBeacon",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Teleport",
    Child1: "UseDashMovement",
    Child2: "FindDestinationTowardMimicBeacon",
    Child3: "SelectAbility-Teleport"
};
window.behaviorGraphNodesObject["Gatekeeper::CharacterRoot"] = {
    nodeName: "Gatekeeper::CharacterRoot",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "GateKeeperRedAlert",
    Child3: "GateKeeperNoEnemySightedMove"
};
window.behaviorGraphNodesObject["GateKeeperRedAlert"] = {
    nodeName: "GateKeeperRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "GateKeeperRedAbilitySelector"
};
window.behaviorGraphNodesObject["GateKeeperRedAbilitySelector"] = {
    nodeName: "GateKeeperRedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "GateKeeperRedFirstAction",
    Child2: "GateKeeperRedLastAction"
};
window.behaviorGraphNodesObject["GateKeeperRedFirstAction"] = {
    nodeName: "GateKeeperRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "GateKeeperRedFirstActionSelector"
};
window.behaviorGraphNodesObject["GateKeeperRedFirstActionSelector"] = {
    nodeName: "GateKeeperRedFirstActionSelector",
    NodeType: "Selector",
    Child0: "TryMoveThenAnimaInversionCorpse",
    Child1: "TryMoveThenAnimaInversionMixed",
    Child2: "TryAnimaConsumeOnEnemy",
    Child3: "TryAnimaConsumeOnAlly",
    Child4: "MoveNoCover",
    Child5: "ShootIfAvailable",
    Child6: "HuntEnemy"
};
window.behaviorGraphNodesObject["GateKeeperRedLastAction"] = {
    nodeName: "GateKeeperRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "GateKeeperRedLastActionSelector"
};
window.behaviorGraphNodesObject["GateKeeperRedLastActionSelector"] = {
    nodeName: "GateKeeperRedLastActionSelector",
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
window.behaviorGraphNodesObject["GateKeeperNoEnemySightedMove"] = {
    nodeName: "GateKeeperNoEnemySightedMove",
    NodeType: "Selector",
    Child0: "TryAnimaInversionCorpses",
    Child1: "TryAnimaInversionMixed",
    Child2: "TryGatekeeperClose",
    Child3: "GenericAlertHandler",
    Child4: "GenericGreenMovement"
};
window.behaviorGraphNodesObject["GateKeeperOpenOrClose"] = {
    nodeName: "GateKeeperOpenOrClose",
    NodeType: "Selector",
    Child0: "CloseIfInObviousDanger",
    Child1: "DoIfFlankedMove",
    Child2: "GateKeeperCheckOpen"
};
window.behaviorGraphNodesObject["CloseIfInObviousDanger"] = {
    nodeName: "CloseIfInObviousDanger",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-GatekeeperClose",
    Child1: "CheckIfInDanger",
    Child2: "TryGatekeeperClose"
};
window.behaviorGraphNodesObject["GateKeeperCheckOpen"] = {
    nodeName: "GateKeeperCheckOpen",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-GatekeeperOpen",
    Child1: "NoTargetsAvailable",
    Child2: "TryGatekeeperOpen" //  open if at high life
};
window.behaviorGraphNodesObject["Muton::CharacterRoot"] = {
    nodeName: "Muton::CharacterRoot",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "MutonRedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["MutonRedAlert"] = {
    nodeName: "MutonRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "MutonRedAbilitySelector"
};
window.behaviorGraphNodesObject["MutonRedAbilitySelector"] = {
    nodeName: "MutonRedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "MutonRedFirstAction",
    Child2: "MutonRedLastAction"
};
window.behaviorGraphNodesObject["MutonRedFirstAction"] = {
    nodeName: "MutonRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "MutonRedFirstActionSelector"
};
window.behaviorGraphNodesObject["MutonRedFirstActionSelector"] = {
    nodeName: "MutonRedFirstActionSelector",
    NodeType: "Selector",
    Child0: "TryBayonet",
    Child1: "TryMoveThenGrenade",
    Child2: "TryMoveToSuppressClosest",
    Child3: "TryTwoTurnAttackSupportIfSafe",
    Child4: "SelectMoveProfileByJob",
    Child5: "TryShootOrReloadOrOverwatch",
    Child6: "HuntEnemyWithCover"
};
window.behaviorGraphNodesObject["MutonRedLastAction"] = {
    nodeName: "MutonRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "MutonRedLastActionSelector"
};
window.behaviorGraphNodesObject["MutonRedLastActionSelector"] = {
    nodeName: "MutonRedLastActionSelector",
    NodeType: "Selector",
    Child0: "TryBayonet",
    Child1: "TryGrenade",
    Child2: "TrySuppressClosest",
    Child3: "TryShootOrReloadOrOverwatch",
    Child4: "HuntEnemyWithCover",
    Child5: "SelectMove_JobOrAggressive"
};
window.behaviorGraphNodesObject["TrySuppressClosest"] = {
    nodeName: "TrySuppressClosest",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-Suppression",
    Child1: "CheckShouldSuppressVar",
    Child2: "SelectTargetForSuppression",
    Child3: "SelectAbility-Suppression"
};
window.behaviorGraphNodesObject["SelectTargetForSuppression"] = {
    nodeName: "SelectTargetForSuppression",
    NodeType: "Sequence",
    Child0: "SetTargetStack-Suppression",
    Child1: "SelectBestSuppressionTarget",
    Child2: "HasValidTarget-Suppression"
};
window.behaviorGraphNodesObject["TryMoveToSuppressClosest"] = {
    nodeName: "TryMoveToSuppressClosest",
    NodeType: "Sequence",
    Child0: "SafeToMove",
    Child1: "IsAbilityReady-Suppression",
    Child2: "CheckShouldSuppressVar",
    Child3: "SelectClosestPotentialSuppressionTarget",
    Child4: "MoveStandardIfFirstAbility-Suppression"
};
window.behaviorGraphNodesObject["CheckShouldSuppressVar"] = {
    nodeName: "CheckShouldSuppressVar",
    NodeType: "Sequence",
    Child0: "InitSetSuppressVar",
    Child1: "ShouldSuppress"
};
window.behaviorGraphNodesObject["ShouldSuppress"] = {
    nodeName: "ShouldSuppress",
    NodeType: "StatCondition",
    Param0: "BTVar",
    Param1: "!:",
    Param2: "0",
    Param3: "ShouldSuppress"
};
window.behaviorGraphNodesObject["InitSetSuppressVar"] = {
    nodeName: "InitSetSuppressVar",
    NodeType: "Selector",
    Child0: "HasBTVar-ShouldSuppress",
    Child1: "UpdateShouldSuppressVar"
};
window.behaviorGraphNodesObject["HasBTVar-ShouldSuppress"] = {
    nodeName: "HasBTVar-ShouldSuppress",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["UpdateShouldSuppressVar"] = {
    nodeName: "UpdateShouldSuppressVar",
    NodeType: "Selector",
    Child0: "TrySetShouldSuppressTrue",
    Child1: "SetShouldSuppressFalse"
};
window.behaviorGraphNodesObject["TrySetShouldSuppressTrue"] = {
    nodeName: "TrySetShouldSuppressTrue",
    NodeType: "Sequence",
    Child0: "AnyAlliesVisible",
    Child1: "RollForSuppressionPerVisibleAlly",
    Child2: "SetShouldSuppressTrue"
};
window.behaviorGraphNodesObject["SetShouldSuppressTrue"] = {
    nodeName: "SetShouldSuppressTrue",
    NodeType: "Action",
    Param0: "SetBTVar",
    Param1: "ShouldSuppress",
    Param2: "1"
};
window.behaviorGraphNodesObject["SetShouldSuppressFalse"] = {
    nodeName: "SetShouldSuppressFalse",
    NodeType: "Action",
    Param0: "SetBTVar",
    Param1: "ShouldSuppress",
    Param2: "0"
};
window.behaviorGraphNodesObject["RollForSuppressionPerVisibleAlly"] = {
    nodeName: "RollForSuppressionPerVisibleAlly",
    NodeType: "Condition",
    Param0: "10" //  Param0: "Percent chance per visible ally to succeed.
};
window.behaviorGraphNodesObject["PsiZombie::CharacterRoot"] = {
    nodeName: "PsiZombie::CharacterRoot",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "GenericEnemyMeleeRootFANATIC"
};
window.behaviorGraphNodesObject["Sectoid::CharacterRoot"] = {
    nodeName: "Sectoid::CharacterRoot",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "SectoidRedAlert",
    Child3: "SectoidNoEnemySightedMove"
};
window.behaviorGraphNodesObject["SectoidRedAlert"] = {
    nodeName: "SectoidRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "SectoidRedAbilitySelector"
};
window.behaviorGraphNodesObject["SectoidRedAbilitySelector"] = {
    nodeName: "SectoidRedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "SectoidRedFirstAction",
    Child2: "SectoidRedLastAction"
};
window.behaviorGraphNodesObject["SectoidRedFirstAction"] = {
    nodeName: "SectoidRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "SectoidRedFirstActionSelector"
};
window.behaviorGraphNodesObject["SectoidRedFirstActionSelector"] = {
    nodeName: "SectoidRedFirstActionSelector",
    NodeType: "Selector",
    Child0: "DoIfFlankedMove",
    Child1: "SelectMove_JobOrDefensive",
    Child2: "TryPsiReanimationOrMindSpinOption",
    Child3: "TryShootOrReloadOrOverwatch",
    Child4: "HuntEnemyWithCover"
};
window.behaviorGraphNodesObject["SectoidRedLastAction"] = {
    nodeName: "SectoidRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "SectoidRedLastActionSelector"
};
window.behaviorGraphNodesObject["SectoidRedLastActionSelector"] = {
    nodeName: "SectoidRedLastActionSelector",
    NodeType: "Selector",
    Child0: "DoIfFlankedMove",
    Child1: "TryPsiReanimationOrMindSpinOption",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "HuntEnemyWithCover",
    Child4: "SelectMove_JobOrDefensive"
};
window.behaviorGraphNodesObject["TryPsiReanimationOrMindSpinOption"] = {
    nodeName: "TryPsiReanimationOrMindSpinOption",
    NodeType: "RandSelector",
    Child0: "TryPsiReanimation",
    Param0: "66",
    Child1: "TryMindSpinOption",
    Param1: "34"
};
window.behaviorGraphNodesObject["TryMindSpinOption"] = {
    nodeName: "TryMindSpinOption",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-MindSpin",
    Child1: "SelectTargetForMindSpin",
    Child2: "SelectAbility-MindSpin"
};
window.behaviorGraphNodesObject["SectoidNoEnemySightedMove"] = {
    nodeName: "SectoidNoEnemySightedMove",
    NodeType: "Selector",
    Child0: "GenericOrangeMovement",
    Child1: "SectoidYellowAlert",
    Child2: "GenericGreenMovement"
};
window.behaviorGraphNodesObject["SectoidYellowAlert"] = {
    nodeName: "SectoidYellowAlert",
    NodeType: "Sequence",
    Child0: "IsYellowAlert",
    Child1: "SectoidYellowAbilitySelector"
};
window.behaviorGraphNodesObject["SectoidYellowAbilitySelector"] = {
    nodeName: "SectoidYellowAbilitySelector",
    NodeType: "Selector",
    Child0: "TryPsiReanimation",
    Child1: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["Viper::CharacterRoot"] = {
    nodeName: "Viper::CharacterRoot",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "ViperRedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["ViperRedAlert"] = {
    nodeName: "ViperRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "ViperRedAbilitySelector"
};
window.behaviorGraphNodesObject["ViperRedAbilitySelector"] = {
    nodeName: "ViperRedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "ViperRedFirstAction",
    Child2: "ViperRedLastAction"
};
window.behaviorGraphNodesObject["ViperRedFirstAction"] = {
    nodeName: "ViperRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "ViperRedFirstActionSelector"
};
window.behaviorGraphNodesObject["ViperRedFirstActionSelector"] = {
    nodeName: "ViperRedFirstActionSelector",
    NodeType: "Selector",
    Child0: "ConsiderTonguePullPriorityOrMelee",
    Child1: "TryGetOverHere",
    Child2: "TryMoveThenPoisonSpit",
    Child3: "TryMoveThenPoisonSpitSingle",
    Child4: "SelectMoveStandard",
    Child5: "TryShootOrReloadOrOverwatch",
    Child6: "HuntEnemyWithCover"
};
window.behaviorGraphNodesObject["ViperRedLastAction"] = {
    nodeName: "ViperRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "ViperRedLastActionSelector"
};
window.behaviorGraphNodesObject["ViperRedLastActionSelector"] = {
    nodeName: "ViperRedLastActionSelector",
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
window.behaviorGraphNodesObject["Viper::MoveTowardMimicBeacon"] = {
    nodeName: "Viper::MoveTowardMimicBeacon",
    NodeType: "Selector",
    Child0: "RandTryGetOverHereOnMimicBeacon",
    Child1: "TryMeleeMoveTowardMimicBeacon",
    Child2: "TryStandardMoveTowardMimicBeacon"
};
window.behaviorGraphNodesObject["RandTryGetOverHereOnMimicBeacon"] = {
    nodeName: "RandTryGetOverHereOnMimicBeacon",
    NodeType: "RandFilter",
    Child0: "TryGetOverHereOnMimicBeacon",
    Param0: "50"
};
window.behaviorGraphNodesObject["TryGetOverHereOnMimicBeacon"] = {
    nodeName: "TryGetOverHereOnMimicBeacon",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-GetOverHere",
    Child1: "SelectMimicBeaconForGetOverHere",
    Child2: "SelectAbility-GetOverHere"
};
window.behaviorGraphNodesObject["SelectMimicBeaconForGetOverHere"] = {
    nodeName: "SelectMimicBeaconForGetOverHere",
    NodeType: "Sequence",
    Child0: "SetTargetStack-GetOverHere",
    Child1: "SelectMimicBeaconTarget",
    Child2: "HasValidTarget-GetOverHere"
};
window.behaviorGraphNodesObject["ConsiderTonguePullPriorityOrMelee"] = {
    nodeName: "ConsiderTonguePullPriorityOrMelee",
    NodeType: "Sequence",
    Child0: "TryStandardMelee",
    Child1: "SS_ConsiderTonguePullOverMove"
};
window.behaviorGraphNodesObject["SS_ConsiderTonguePullOverMove"] = {
    nodeName: "SS_ConsiderTonguePullOverMove",
    NodeType: "Successor",
    Child0: "ConsiderTonguePullOverMove"
};
window.behaviorGraphNodesObject["ConsiderTonguePullOverMove"] = {
    nodeName: "ConsiderTonguePullOverMove",
    NodeType: "Sequence",
    Child0: "IsSelectedAbility-StandardMove",
    Child1: "IsAbilityAvailable-GetOverHere",
    Child2: "SetPotentialTargetAsCurrentTarget",
    Child3: "ShouldUseTonguePullOnTarget",
    Child4: "SelectAbility-GetOverHere"
};
window.behaviorGraphNodesObject["SetPotentialTargetAsCurrentTarget"] = {
    nodeName: "SetPotentialTargetAsCurrentTarget",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["ShouldUseTonguePullOnTarget"] = {
    nodeName: "ShouldUseTonguePullOnTarget",
    NodeType: "Sequence",
    Child0: "IsValidTonguePullTarget",
    Child1: "TargetDistanceGreaterThan4Tiles",
    Child2: "TonguePullHitChance50",
    Child3: "SetTargetPotential-GetOverHere"
};
window.behaviorGraphNodesObject["TargetDistanceGreaterThan4Tiles"] = {
    nodeName: "TargetDistanceGreaterThan4Tiles",
    NodeType: "StatCondition",
    Param0: "PotentialTargetDistance",
    Param1: ">",
    Param2: "6" //  6m = 4 tiles
};
window.behaviorGraphNodesObject["TonguePullHitChance50"] = {
    nodeName: "TonguePullHitChance50",
    NodeType: "StatCondition",
    Param0: "PotentialHitChance-GetOverHere",
    Param1: ">:",
    Param2: "50"
};
window.behaviorGraphNodesObject["IsSelectedAbility-StandardMove"] = {
    nodeName: "IsSelectedAbility-StandardMove",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SetTargetPotential-GetOverHere"] = {
    nodeName: "SetTargetPotential-GetOverHere",
    NodeType: "Action" //  Set target of "Potential" to the target of ability "GetOverHere".
};
window.behaviorGraphNodesObject["Viper::CustomMeleeTargetScore"] = {
    nodeName: "Viper::CustomMeleeTargetScore",
    NodeType: "Sequence",
    Child0: "TargetNotValidForBind",
    Child1: "AddToTargetScore_-1000" // Overwrite option for melee abilities that are restricted.
};
window.behaviorGraphNodesObject["TargetNotValidForBind"] = {
    nodeName: "TargetNotValidForBind",
    NodeType: "Selector",
    Child0: "TargetIsAlien",
    Child1: "TargetIsRobotic"
};
window.behaviorGraphNodesObject["Faceless::CharacterRoot"] = {
    nodeName: "Faceless::CharacterRoot",
    NodeType: "Selector",
    Child0: "TryJobUnsafe",
    Child1: "GenericGreenMovement",
    Child2: "FacelessHeatSeekProtocol",
    Child3: "FacelessRedAlert",
    Child4: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["FacelessRedAlert"] = {
    nodeName: "FacelessRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "FacelessRedAbilitySelector"
};
window.behaviorGraphNodesObject["FacelessRedAbilitySelector"] = {
    nodeName: "FacelessRedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "FacelessRedFirstAction",
    Child2: "FacelessRedLastAction"
};
window.behaviorGraphNodesObject["FacelessRedFirstAction"] = {
    nodeName: "FacelessRedFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "FacelessFirstActionSelector" // 
};
window.behaviorGraphNodesObject["FacelessFirstActionSelector"] = {
    nodeName: "FacelessFirstActionSelector",
    NodeType: "Selector",
    Child0: "TryScythingClaws",
    Child1: "MoveMeleeFANATICUnsafe",
    Child2: "HuntEnemyUnsafe"
};
window.behaviorGraphNodesObject["FacelessRedLastAction"] = {
    nodeName: "FacelessRedLastAction",
    NodeType: "Selector",
    Child0: "TryScythingClaws",
    Child1: "MoveMeleeFANATICUnsafe",
    Child2: "HuntEnemyUnsafe"
};
window.behaviorGraphNodesObject["Faceless::AttackMimicBeacon"] = {
    nodeName: "Faceless::AttackMimicBeacon",
    NodeType: "Sequence",
    Child0: "TryScythingClaws"
};
window.behaviorGraphNodesObject["FacelessHeatSeekProtocol"] = {
    nodeName: "FacelessHeatSeekProtocol",
    NodeType: "Sequence",
    Child0: "FacelessShouldTriggerHeatSeek",
    Child1: "SelectHeatSeekMove"
};
window.behaviorGraphNodesObject["FacelessShouldTriggerHeatSeek"] = {
    nodeName: "FacelessShouldTriggerHeatSeek",
    NodeType: "Selector",
    Child0: "NoVisibleEnemies"
};
window.behaviorGraphNodesObject["Sectopod::CharacterRoot"] = {
    nodeName: "Sectopod::CharacterRoot",
    NodeType: "Selector",
    Child0: "TryJob",
    Child1: "GenericGreenMovement",
    Child2: "SectopodRedAlert",
    Child3: "GenericAlertHandler"
};
window.behaviorGraphNodesObject["SectopodRedAlert"] = {
    nodeName: "SectopodRedAlert",
    NodeType: "Sequence",
    Child0: "IsRedAlert",
    Child1: "SectopodRedAbilitySelector"
};
window.behaviorGraphNodesObject["SectopodRedAbilitySelector"] = {
    nodeName: "SectopodRedAbilitySelector",
    NodeType: "Selector",
    Child0: "MimicBeaconBehavior",
    Child1: "SectopodRedFirstAction",
    Child2: "SectopodRedSecondAction",
    Child3: "SectopodRedLastAction"
};
window.behaviorGraphNodesObject["SectopodRedFirstAction"] = {
    nodeName: "SectopodRedFirstAction",
    NodeType: "Sequence",
    Child0: "HasThreeActionPoints",
    Child1: "SectopodFirstActionSelector"
};
window.behaviorGraphNodesObject["SectopodFirstActionSelector"] = {
    nodeName: "SectopodFirstActionSelector",
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
window.behaviorGraphNodesObject["SectopodRedSecondAction"] = {
    nodeName: "SectopodRedSecondAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "SectopodSecondActionSelector"
};
window.behaviorGraphNodesObject["SectopodSecondActionSelector"] = {
    nodeName: "SectopodSecondActionSelector",
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
window.behaviorGraphNodesObject["SectopodRedLastAction"] = {
    nodeName: "SectopodRedLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "SectopodRedLastActionSelector"
};
window.behaviorGraphNodesObject["SectopodRedLastActionSelector"] = {
    nodeName: "SectopodRedLastActionSelector",
    NodeType: "Selector",
    Child0: "SectopodCannonCharging",
    Child1: "TryWrathCannonS1",
    Child2: "TryLightningField",
    Child3: "TryShootOrReloadOrOverwatch",
    Child4: "HuntEnemy"
};
window.behaviorGraphNodesObject["MoveNoCoverIfNotMoved"] = {
    nodeName: "MoveNoCoverIfNotMoved",
    NodeType: "Sequence",
    Child0: "DidntJustMove",
    Child1: "MoveNoCover"
};
window.behaviorGraphNodesObject["TryStandUp"] = {
    nodeName: "TryStandUp",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-SectopodHigh",
    Child1: "SelectAbility-SectopodHigh"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-SectopodHigh"] = {
    nodeName: "IsAbilityAvailable-SectopodHigh",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SelectAbility-SectopodHigh"] = {
    nodeName: "SelectAbility-SectopodHigh",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["TryWrathCannonS166"] = {
    nodeName: "TryWrathCannonS166",
    NodeType: "RandFilter",
    Child0: "TryWrathCannon",
    Param0: "66"
};
window.behaviorGraphNodesObject["SectopodCannonCharging"] = {
    nodeName: "SectopodCannonCharging",
    NodeType: "Sequence",
    Child0: "AffectedByEffect-WrathCannonStage1Effect",
    Child1: "SectopodChargingSelector"
};
window.behaviorGraphNodesObject["SectopodChargingSelector"] = {
    nodeName: "SectopodChargingSelector",
    NodeType: "Selector",
    Child0: "TryShootOrReloadIfNotLastActionPoint",
    Child1: "Overwatch50IfLastAction",
    Child2: "TryShootOrReloadOrOverwatch",
    Child3: "SkipMove"
};
window.behaviorGraphNodesObject["Overwatch50IfLastAction"] = {
    nodeName: "Overwatch50IfLastAction",
    NodeType: "Sequence",
    Child0: "IsLastActionPoint",
    Child1: "RandOverwatch50"
};
window.behaviorGraphNodesObject["TryShootOrReloadIfNotLastActionPoint"] = {
    nodeName: "TryShootOrReloadIfNotLastActionPoint",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "TryShootOrReload"
};
window.behaviorGraphNodesObject["IsAbilityAvailable-SectopodLightningField"] = {
    nodeName: "IsAbilityAvailable-SectopodLightningField",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsAbilityReady-SectopodLightningField"] = {
    nodeName: "IsAbilityReady-SectopodLightningField",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["SelectAbility-SectopodLightningField"] = {
    nodeName: "SelectAbility-SectopodLightningField",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["TryLightningField"] = {
    nodeName: "TryLightningField",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-SectopodLightningField",
    Child1: "HasAnyLightningFieldTargets",
    Child2: "SelectAbility-SectopodLightningField"
};
window.behaviorGraphNodesObject["HasAnyLightningFieldTargets"] = {
    nodeName: "HasAnyLightningFieldTargets",
    NodeType: "StatCondition",
    Param0: "AbilityTargetUnitCount-SectopodLightningField",
    Param1: ">",
    Param2: "1" //  >1 because it always sets itself as the primary target.
};
window.behaviorGraphNodesObject["TryFirstMoveTowardVisibleEnemies50"] = {
    nodeName: "TryFirstMoveTowardVisibleEnemies50",
    NodeType: "Sequence",
    Child0: "AnyLivingEnemyVisible",
    Child1: "TryMoveForLightningField50"
};
window.behaviorGraphNodesObject["TryMoveTowardVisibleEnemies50"] = {
    nodeName: "TryMoveTowardVisibleEnemies50",
    NodeType: "Sequence",
    Child0: "AnyLivingEnemyVisible",
    Child1: "DidntJustMove",
    Child2: "TryMoveForLightningField50"
};
window.behaviorGraphNodesObject["TryMoveForLightningField50"] = {
    nodeName: "TryMoveForLightningField50",
    NodeType: "RandFilter",
    Child0: "TryMoveForLightningField",
    Param0: "50"
};
window.behaviorGraphNodesObject["TryMoveForLightningField"] = {
    nodeName: "TryMoveForLightningField",
    NodeType: "Sequence",
    Child0: "DidntJustMove",
    Child1: "SafeToMove",
    Child2: "IsAbilityReady-SectopodLightningField",
    Child3: "MoveStandardIfFirstAbility-LightningField",
    Child4: "MoveMeleeFANATICUnsafe"
};
window.behaviorGraphNodesObject["MoveStandardIfFirstAbility-LightningField"] = {
    nodeName: "MoveStandardIfFirstAbility-LightningField",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "FindLightningFieldDestination",
    Child3: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["FindLightningFieldDestination"] = {
    nodeName: "FindLightningFieldDestination",
    NodeType: "Sequence",
    Child0: "SelectTargetForLightningField",
    Child1: "ResetDestinationSearch",
    Child2: "RestrictToAbilityRange-SectopodLightningField",
    Child3: "RestrictToEnemyLoS",
    Child4: "FindRestrictedDestination-Standard"
};
window.behaviorGraphNodesObject["SelectTargetForLightningField"] = {
    nodeName: "SelectTargetForLightningField",
    NodeType: "Sequence",
    Child0: "SetPotentialTargetStack",
    Child1: "SelectBestPotentialTargetForMelee",
    Child2: "HasValidTarget-Potential"
};
window.behaviorGraphNodesObject["RestrictToAbilityRange-SectopodLightningField"] = {
    nodeName: "RestrictToAbilityRange-SectopodLightningField",
    NodeType: "Action"
};
window.behaviorGraphNodesObject["WasLastAbility-StandardMove"] = {
    nodeName: "WasLastAbility-StandardMove",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["DidntJustMove"] = {
    nodeName: "DidntJustMove",
    NodeType: "Inverter",
    Child0: "WasLastAbility-StandardMove"
};
window.behaviorGraphNodesObject["HasJob"] = {
    nodeName: "HasJob",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["HasUnengagedJob"] = {
    nodeName: "HasUnengagedJob",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsMyJob-Soldier"] = {
    nodeName: "IsMyJob-Soldier",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsMyJob-Aggressor"] = {
    nodeName: "IsMyJob-Aggressor",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsMyJob-Flanker"] = {
    nodeName: "IsMyJob-Flanker",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsMyJob-Leader"] = {
    nodeName: "IsMyJob-Leader",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsMyJob-Support"] = {
    nodeName: "IsMyJob-Support",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsMyJob-Terrorist"] = {
    nodeName: "IsMyJob-Terrorist",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsMyJob-Hunter"] = {
    nodeName: "IsMyJob-Hunter",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsMyJob-Charger"] = {
    nodeName: "IsMyJob-Charger",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsMyJob-Defender"] = {
    nodeName: "IsMyJob-Defender",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsMyJob-Observer"] = {
    nodeName: "IsMyJob-Observer",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsMyJob-Prisoner"] = {
    nodeName: "IsMyJob-Prisoner",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["IsMyJob-GreenStandby"] = {
    nodeName: "IsMyJob-GreenStandby",
    NodeType: "Condition"
};
window.behaviorGraphNodesObject["DoNotHaveAlwaysOnJob"] = {
    nodeName: "DoNotHaveAlwaysOnJob",
    NodeType: "Inverter",
    Child0: "DoIHaveAlwaysOnJob"
};
window.behaviorGraphNodesObject["DoIHaveAlwaysOnJob"] = {
    nodeName: "DoIHaveAlwaysOnJob",
    NodeType: "Selector",
    Child0: "IsMyJob-Terrorist",
    Child1: "IsMyJob-Hunter",
    Child2: "IsMyJob-Prisoner"
};
window.behaviorGraphNodesObject["TryUnengagedJob"] = {
    nodeName: "TryUnengagedJob",
    NodeType: "Sequence",
    Child0: "HasUnengagedJob",
    Child1: "TryJobTypes"
};
window.behaviorGraphNodesObject["TryJob"] = {
    nodeName: "TryJob",
    NodeType: "Selector",
    Child0: "TryUnengagedJob",
    Child1: "TryJobObserver"
};
window.behaviorGraphNodesObject["TryJobUnsafe"] = {
    nodeName: "TryJobUnsafe",
    NodeType: "Sequence",
    Child0: "HasJob",
    Child1: "TryJobTypesUnsafe"
};
window.behaviorGraphNodesObject["TryJobTypes"] = {
    nodeName: "TryJobTypes",
    NodeType: "Selector",
    Child0: "TryJobTerrorist",
    Child1: "TryJobHunter",
    Child2: "TryJobChargerUnsafe",
    Child3: "TryJobDefender",
    Child4: "TryJobPrisoner",
    Child5: "TryJobGreenStandby"
};
window.behaviorGraphNodesObject["TryJobTypesUnsafe"] = {
    nodeName: "TryJobTypesUnsafe",
    NodeType: "Selector",
    Child0: "TryJobTerrorist",
    Child1: "TryJobHunter",
    Child2: "TryJobChargerUnsafe",
    Child3: "TryJobDefender",
    Child4: "TryJobObserver",
    Child5: "TryJobPrisoner",
    Child6: "TryJobGreenStandby"
};
window.behaviorGraphNodesObject["TryJobTerrorist"] = {
    nodeName: "TryJobTerrorist",
    NodeType: "Sequence",
    Child0: "IsMyJob-Terrorist",
    Child1: "JobRoot_Terrorist"
};
window.behaviorGraphNodesObject["TryJobHunter"] = {
    nodeName: "TryJobHunter",
    NodeType: "Sequence",
    Child0: "IsMyJob-Hunter",
    Child1: "JobRoot_Hunter"
};
window.behaviorGraphNodesObject["TryJobChargerUnsafe"] = {
    nodeName: "TryJobChargerUnsafe",
    NodeType: "Sequence",
    Child0: "IsMyJob-Charger",
    Child1: "JobRoot_ChargerUnsafe"
};
window.behaviorGraphNodesObject["TryJobDefender"] = {
    nodeName: "TryJobDefender",
    NodeType: "Sequence",
    Child0: "IsMyJob-Defender",
    Child1: "JobRoot_Defender"
};
window.behaviorGraphNodesObject["TryJobObserver"] = {
    nodeName: "TryJobObserver",
    NodeType: "Sequence",
    Child0: "IsMyJob-Observer",
    Child1: "IsRedAlert",
    Child2: "DoIfFlankedMove",
    Child3: "SkipMove"
};
window.behaviorGraphNodesObject["TryJobPrisoner"] = {
    nodeName: "TryJobPrisoner",
    NodeType: "Sequence",
    Child0: "IsMyJob-Prisoner",
    Child1: "SkipMove"
};
window.behaviorGraphNodesObject["TryJobGreenStandby"] = {
    nodeName: "TryJobGreenStandby",
    NodeType: "Sequence",
    Child0: "IsMyJob-GreenStandby",
    Child1: "NotYetRevealed",
    Child2: "SkipMove"
};
window.behaviorGraphNodesObject["SelectMoveProfileByJob"] = {
    nodeName: "SelectMoveProfileByJob",
    NodeType: "Selector",
    Child0: "SelectMoveIfAggressor",
    Child1: "SelectMoveIfFlanker",
    Child2: "SelectMoveIfLeader",
    Child3: "SelectMoveIfSupport",
    Child4: "SelectMoveIfObserver"
};
window.behaviorGraphNodesObject["SelectMoveIfAggressor"] = {
    nodeName: "SelectMoveIfAggressor",
    NodeType: "Sequence",
    Child0: "IsMyJob-Aggressor",
    Child1: "MoveAggressive"
};
window.behaviorGraphNodesObject["SelectMoveIfFlanker"] = {
    nodeName: "SelectMoveIfFlanker",
    NodeType: "Sequence",
    Child0: "IsMyJob-Flanker",
    Child1: "MoveFlanking"
};
window.behaviorGraphNodesObject["SelectMoveIfLeader"] = {
    nodeName: "SelectMoveIfLeader",
    NodeType: "Sequence",
    Child0: "IsMyJob-Leader",
    Child1: "MoveAdvanceToCover"
};
window.behaviorGraphNodesObject["SelectMoveIfSupport"] = {
    nodeName: "SelectMoveIfSupport",
    NodeType: "Sequence",
    Child0: "IsMyJob-Support",
    Child1: "MoveDefensive"
};
window.behaviorGraphNodesObject["SelectMoveIfObserver"] = {
    nodeName: "SelectMoveIfObserver",
    NodeType: "Sequence",
    Child0: "IsMyJob-Observer",
    Child1: "ObserverMovement"
};
window.behaviorGraphNodesObject["SelectMoveProfileByJobUnsafe"] = {
    nodeName: "SelectMoveProfileByJobUnsafe",
    NodeType: "Selector",
    Child0: "SelectMoveUnsafeIfAggressor",
    Child1: "SelectMoveUnsafeIfFlanker",
    Child2: "SelectMoveUnsafeIfLeader",
    Child3: "SelectMoveUnsafeIfSupport",
    Child4: "SelectMoveUnsafeIfObserver"
};
window.behaviorGraphNodesObject["SelectMoveUnsafeIfAggressor"] = {
    nodeName: "SelectMoveUnsafeIfAggressor",
    NodeType: "Sequence",
    Child0: "IsMyJob-Aggressor",
    Child1: "MoveAggressiveUnsafe"
};
window.behaviorGraphNodesObject["SelectMoveUnsafeIfFlanker"] = {
    nodeName: "SelectMoveUnsafeIfFlanker",
    NodeType: "Sequence",
    Child0: "IsMyJob-Flanker",
    Child1: "MoveFlankingUnsafe"
};
window.behaviorGraphNodesObject["SelectMoveUnsafeIfLeader"] = {
    nodeName: "SelectMoveUnsafeIfLeader",
    NodeType: "Sequence",
    Child0: "IsMyJob-Leader",
    Child1: "MoveAdvanceToCoverUnsafe"
};
window.behaviorGraphNodesObject["SelectMoveUnsafeIfSupport"] = {
    nodeName: "SelectMoveUnsafeIfSupport",
    NodeType: "Sequence",
    Child0: "IsMyJob-Support",
    Child1: "MoveDefensiveUnsafe"
};
window.behaviorGraphNodesObject["SelectMoveUnsafeIfObserver"] = {
    nodeName: "SelectMoveUnsafeIfObserver",
    NodeType: "Sequence",
    Child0: "IsMyJob-Observer",
    Child1: "ObserverMovementUnsafe"
};
window.behaviorGraphNodesObject["SelectNCMoveProfileByJob"] = {
    nodeName: "SelectNCMoveProfileByJob",
    NodeType: "Selector",
    Child0: "SelectNCMoveIfAggressor",
    Child1: "SelectNCMoveIfFlanker",
    Child2: "SelectNCMoveIfLeader",
    Child3: "SelectNCMoveIfSupport",
    Child4: "SelectNCMoveIfObserver"
};
window.behaviorGraphNodesObject["SelectNCMoveIfAggressor"] = {
    nodeName: "SelectNCMoveIfAggressor",
    NodeType: "Sequence",
    Child0: "IsMyJob-Aggressor",
    Child1: "NCMoveAggressive"
};
window.behaviorGraphNodesObject["SelectNCMoveIfFlanker"] = {
    nodeName: "SelectNCMoveIfFlanker",
    NodeType: "Sequence",
    Child0: "IsMyJob-Flanker",
    Child1: "NCMoveFlanking"
};
window.behaviorGraphNodesObject["SelectNCMoveIfLeader"] = {
    nodeName: "SelectNCMoveIfLeader",
    NodeType: "Sequence",
    Child0: "IsMyJob-Leader",
    Child1: "NCMoveAdvanceToCover"
};
window.behaviorGraphNodesObject["SelectNCMoveIfSupport"] = {
    nodeName: "SelectNCMoveIfSupport",
    NodeType: "Sequence",
    Child0: "IsMyJob-Support",
    Child1: "NCMoveDefensive"
};
window.behaviorGraphNodesObject["SelectNCMoveIfObserver"] = {
    nodeName: "SelectNCMoveIfObserver",
    NodeType: "Sequence",
    Child0: "IsMyJob-Observer",
    Child1: "NCObserverMovement"
};
window.behaviorGraphNodesObject["JobRoot_Terrorist"] = {
    nodeName: "JobRoot_Terrorist",
    NodeType: "Sequence",
    Child0: "NotYetRevealed",
    Child1: "TryTerrorJobUnrevealed"
};
window.behaviorGraphNodesObject["TryTerrorJobUnrevealed"] = {
    nodeName: "TryTerrorJobUnrevealed",
    NodeType: "Selector",
    Child0: "SequenceUnrevealedTerroristActionIfLeader",
    Child1: "DoUnrevealedSkip_Follower"
};
window.behaviorGraphNodesObject["SequenceUnrevealedTerroristActionIfLeader"] = {
    nodeName: "SequenceUnrevealedTerroristActionIfLeader",
    NodeType: "Sequence",
    Child0: "IsGroupLeader",
    Child1: "SelectUnrevealedTerroristLeaderAction"
};
window.behaviorGraphNodesObject["SelectUnrevealedTerroristLeaderAction"] = {
    nodeName: "SelectUnrevealedTerroristLeaderAction",
    NodeType: "Selector",
    Child0: "RandomizedTryTerrorMovement",
    Child1: "TryTerrorAttack",
    Child2: "TerrorMovement"
};
window.behaviorGraphNodesObject["DoUnrevealedSkip_Follower"] = {
    nodeName: "DoUnrevealedSkip_Follower",
    NodeType: "Sequence",
    Child0: "IsFollower",
    Child1: "SkipMove"
};
window.behaviorGraphNodesObject["RandomizedTryTerrorMovement"] = {
    nodeName: "RandomizedTryTerrorMovement",
    NodeType: "RandFilter",
    Child0: "TryTerrorMovement",
    Param0: "75"
};
window.behaviorGraphNodesObject["TryTerrorMovement"] = {
    nodeName: "TryTerrorMovement",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "NotLastActionPoint",
    Child2: "ResetDestinationSearch",
    Child3: "SetCiviliansAsEnemiesInMoveCalculation",
    Child4: "SetNoCoverMovement",
    Child5: "FindDestination-Fanatic",
    Child6: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["TerrorMovement"] = {
    nodeName: "TerrorMovement",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMove",
    Child1: "ResetDestinationSearch",
    Child2: "SetCiviliansAsEnemiesInMoveCalculation",
    Child3: "SetNoCoverMovement",
    Child4: "FindDestination-Fanatic",
    Child5: "SelectAbility-StandardMove"
};
window.behaviorGraphNodesObject["TryTerrorAttack"] = {
    nodeName: "TryTerrorAttack",
    NodeType: "Sequence",
    Child0: "NumKilledCiviliansIsLessThanTurnCount",
    Child1: "TryTerrorAttackSelector"
};
window.behaviorGraphNodesObject["TryTerrorAttackSelector"] = {
    nodeName: "TryTerrorAttackSelector",
    NodeType: "Selector",
    Child0: "ShootIfAvailableTerrorist",
    Child1: "TryMeleeTerrorist",
    Child2: "NeedsReload",
    Intent: "TERRORIZING"
};
window.behaviorGraphNodesObject["NumKilledCiviliansIsLessThanTurnCount"] = {
    nodeName: "NumKilledCiviliansIsLessThanTurnCount",
    NodeType: "Condition" //  Multivariate comparisons currently not supported.  Must be a custom condition.
};
window.behaviorGraphNodesObject["TryMeleeTerrorist"] = {
    nodeName: "TryMeleeTerrorist",
    NodeType: "Sequence",
    Child0: "IsAbilityReady-StandardMelee",
    Child1: "MeleeTerroristStepSelector"
};
window.behaviorGraphNodesObject["MeleeTerroristStepSelector"] = {
    nodeName: "MeleeTerroristStepSelector",
    NodeType: "Selector",
    Child0: "MeleeAttackTerrorist",
    Child1: "TryTerroristMoveMeleeFANATIC"
};
window.behaviorGraphNodesObject["MeleeAttackTerrorist"] = {
    nodeName: "MeleeAttackTerrorist",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardMelee",
    Child1: "SetTargetStack-StandardMelee",
    Child2: "SelectBestTargetByJob_Terrorist",
    Child3: "HasValidTarget-StandardMelee",
    Child4: "SelectAbility-StandardMelee"
};
window.behaviorGraphNodesObject["ShootIfAvailableTerrorist"] = {
    nodeName: "ShootIfAvailableTerrorist",
    NodeType: "Sequence",
    Child0: "IsAbilityAvailable-StandardShot",
    Child1: "SetTargetStack-StandardShot",
    Child2: "SelectBestTargetByJob_Terrorist",
    Child3: "HasValidTarget-StandardShot",
    Child4: "SelectAbility-StandardShot"
};
window.behaviorGraphNodesObject["SelectBestTargetByJob_Terrorist"] = {
    nodeName: "SelectBestTargetByJob_Terrorist",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateTargetByJob_Terrorist"
};
window.behaviorGraphNodesObject["EvaluateTargetByJob_Terrorist"] = {
    nodeName: "EvaluateTargetByJob_Terrorist",
    NodeType: "Sequence",
    Child0: "SetNextTarget",
    Child1: "SSScoreTerroristTarget",
    Child2: "UpdateBestTarget"
};
window.behaviorGraphNodesObject["SSScoreTerroristTarget"] = {
    nodeName: "SSScoreTerroristTarget",
    NodeType: "Successor",
    Child0: "ScoreTerroristTarget"
};
window.behaviorGraphNodesObject["ScoreTerroristTarget"] = {
    nodeName: "ScoreTerroristTarget",
    NodeType: "Sequence",
    Child0: "TargetIsNotAlly",
    Child1: "TargetScoreCivilian",
    Child2: "TargetScoreHitChance",
    Child3: "TargetScoreHealth",
    Child4: "TargetScoreFlanking"
};
window.behaviorGraphNodesObject["IncludeCiviliansIfTerrorist"] = {
    nodeName: "IncludeCiviliansIfTerrorist",
    NodeType: "Successor",
    Child0: "IfTerroristDoForMove"
};
window.behaviorGraphNodesObject["IfTerroristDoForMove"] = {
    nodeName: "IfTerroristDoForMove",
    NodeType: "Sequence",
    Child0: "IsMyJob-Terrorist",
    Child1: "SetCiviliansAsEnemiesInMoveCalculation"
};
window.behaviorGraphNodesObject["JobRoot_Hunter"] = {
    nodeName: "JobRoot_Hunter",
    NodeType: "Sequence",
    Child0: "ShouldPatrol",
    Child1: "TryHunterJobUnrevealed"
};
window.behaviorGraphNodesObject["TryHunterJobUnrevealed"] = {
    nodeName: "TryHunterJobUnrevealed",
    NodeType: "Selector",
    Child0: "TryUnrevealedHunterAction_Leader",
    Child1: "DoUnrevealedSkip_Follower"
};
window.behaviorGraphNodesObject["TryUnrevealedHunterAction_Leader"] = {
    nodeName: "TryUnrevealedHunterAction_Leader",
    NodeType: "Sequence",
    Child0: "IsGroupLeader",
    Child1: "TryHunterAttack"
};
window.behaviorGraphNodesObject["TryHunterAttack"] = {
    nodeName: "TryHunterAttack",
    NodeType: "Selector",
    Child0: "TryAttackPriorityTarget",
    Child1: "HuntIfNotLastAction"
};
window.behaviorGraphNodesObject["HuntIfNotLastAction"] = {
    nodeName: "HuntIfNotLastAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "FindAdvanceLocation",
    Intent: "HUNTING"
};
window.behaviorGraphNodesObject["JobRoot_Charger"] = {
    nodeName: "JobRoot_Charger",
    NodeType: "Selector",
    Child0: "TryChargerJobIfUnrevealed",
    Child1: "TryChargerJobIfRevealed"
};
window.behaviorGraphNodesObject["TryChargerJobIfUnrevealed"] = {
    nodeName: "TryChargerJobIfUnrevealed",
    NodeType: "Sequence",
    Child0: "NotYetRevealed",
    Child1: "DoChargerJobIfLeaderOrSkipMove"
};
window.behaviorGraphNodesObject["DoChargerJobIfLeaderOrSkipMove"] = {
    nodeName: "DoChargerJobIfLeaderOrSkipMove",
    NodeType: "Selector",
    Child0: "DoChargerJobIfLeader",
    Child1: "SkipMove"
};
window.behaviorGraphNodesObject["DoChargerJobIfLeader"] = {
    nodeName: "DoChargerJobIfLeader",
    NodeType: "Sequence",
    Child0: "IsGroupLeader",
    Child1: "DoChargerJobPerAction"
};
window.behaviorGraphNodesObject["TryChargerJobIfRevealed"] = {
    nodeName: "TryChargerJobIfRevealed",
    NodeType: "Sequence",
    Child0: "HasRevealed",
    Child1: "DoChargerJobPerAction"
};
window.behaviorGraphNodesObject["DoChargerJobPerAction"] = {
    nodeName: "DoChargerJobPerAction",
    NodeType: "Selector",
    Child0: "ChargerFirstAction",
    Child1: "ChargerSecondAction"
};
window.behaviorGraphNodesObject["ChargerFirstAction"] = {
    nodeName: "ChargerFirstAction",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "DoFirstChargerAction"
};
window.behaviorGraphNodesObject["JobRoot_ChargerUnsafe"] = {
    nodeName: "JobRoot_ChargerUnsafe",
    NodeType: "Selector",
    Child0: "TryChargerJobUnsafeIfUnrevealed",
    Child1: "TryChargerJobUnsafeIfRevealed"
};
window.behaviorGraphNodesObject["TryChargerJobUnsafeIfUnrevealed"] = {
    nodeName: "TryChargerJobUnsafeIfUnrevealed",
    NodeType: "Sequence",
    Child0: "NotYetRevealed",
    Child1: "DoChargerJobUnsafeIfLeaderOrSkipMove"
};
window.behaviorGraphNodesObject["DoChargerJobUnsafeIfLeaderOrSkipMove"] = {
    nodeName: "DoChargerJobUnsafeIfLeaderOrSkipMove",
    NodeType: "Selector",
    Child0: "DoChargerJobUnsafeIfLeader",
    Child1: "SkipMove"
};
window.behaviorGraphNodesObject["DoChargerJobUnsafeIfLeader"] = {
    nodeName: "DoChargerJobUnsafeIfLeader",
    NodeType: "Sequence",
    Child0: "IsGroupLeader",
    Child1: "DoChargerJobPerActionUnsafe"
};
window.behaviorGraphNodesObject["TryChargerJobUnsafeIfRevealed"] = {
    nodeName: "TryChargerJobUnsafeIfRevealed",
    NodeType: "Sequence",
    Child0: "HasRevealed",
    Child1: "DoChargerJobPerActionUnsafe"
};
window.behaviorGraphNodesObject["DoChargerJobPerActionUnsafe"] = {
    nodeName: "DoChargerJobPerActionUnsafe",
    NodeType: "Selector",
    Child0: "ChargerFirstActionUnsafe",
    Child1: "ChargerSecondActionUnsafe"
};
window.behaviorGraphNodesObject["ChargerFirstActionUnsafe"] = {
    nodeName: "ChargerFirstActionUnsafe",
    NodeType: "Sequence",
    Child0: "NotLastActionPoint",
    Child1: "DoFirstChargerActionUnsafe"
};
window.behaviorGraphNodesObject["ChargerSecondActionUnsafe"] = {
    nodeName: "ChargerSecondActionUnsafe",
    NodeType: "Selector",
    Child0: "TryAttackPriorityTarget",
    Child1: "FindAdvanceLocationUnsafe"
};
window.behaviorGraphNodesObject["DoFirstChargerAction"] = {
    nodeName: "DoFirstChargerAction",
    NodeType: "Selector",
    Child0: "FindAdvanceLocation",
    Child1: "TryAttackPriorityTarget"
};
window.behaviorGraphNodesObject["ChargerSecondAction"] = {
    nodeName: "ChargerSecondAction",
    NodeType: "Selector",
    Child0: "TryAttackPriorityTarget",
    Child1: "FindAdvanceLocation"
};
window.behaviorGraphNodesObject["DoFirstChargerActionUnsafe"] = {
    nodeName: "DoFirstChargerActionUnsafe",
    NodeType: "Selector",
    Child0: "FindAdvanceLocationUnsafe",
    Child1: "TryAttackPriorityTarget"
};
window.behaviorGraphNodesObject["FindAdvanceLocation"] = {
    nodeName: "FindAdvanceLocation",
    NodeType: "Sequence",
    Child0: "SetAlertDataStack",
    Child1: "FindDesignatedAlertAdvanceer",
    Child2: "HasValidAlertDataLocation",
    Child3: "TakeAlertMoveWithoutCover",
    Intent: "ADVANCING"
};
window.behaviorGraphNodesObject["FindAdvanceLocationUnsafe"] = {
    nodeName: "FindAdvanceLocationUnsafe",
    NodeType: "Sequence",
    Child0: "SetAlertDataStack",
    Child1: "FindDesignatedAlertAdvanceer",
    Child2: "HasValidAlertDataLocation",
    Child3: "TakeAlertMoveWithoutCoverUnsafe",
    Intent: "ADVANCING"
};
window.behaviorGraphNodesObject["FindDesignatedAlertAdvanceer"] = {
    nodeName: "FindDesignatedAlertAdvanceer",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateAlertDataAdvanceer"
};
window.behaviorGraphNodesObject["EvaluateAlertDataAdvanceer"] = {
    nodeName: "EvaluateAlertDataAdvanceer",
    NodeType: "Sequence",
    Child0: "SetNextAlertData",
    Child1: "ScoreAlertFor_Advance",
    Child2: "ScoreAlertDataDistance",
    Child3: "UpdateBestAlertData"
};
window.behaviorGraphNodesObject["JobRoot_Defender"] = {
    nodeName: "JobRoot_Defender",
    NodeType: "Sequence",
    Child0: "ShouldPatrol",
    Child1: "TryDefenderJobUnrevealed"
};
window.behaviorGraphNodesObject["TryDefenderJobUnrevealed"] = {
    nodeName: "TryDefenderJobUnrevealed",
    NodeType: "Selector",
    Child0: "TryUnrevealedDefenderAction_Leader",
    Child1: "DoUnrevealedSkip_Follower"
};
window.behaviorGraphNodesObject["TryUnrevealedDefenderAction_Leader"] = {
    nodeName: "TryUnrevealedDefenderAction_Leader",
    NodeType: "Sequence",
    Child0: "IsGroupLeader",
    Child1: "TryDefenderMove"
};
window.behaviorGraphNodesObject["TryDefenderMove"] = {
    nodeName: "TryDefenderMove",
    NodeType: "Sequence",
    Child0: "FindDefendLocation",
    Child1: "DecideDefendAction",
    Intent: "DEFENDING"
};
window.behaviorGraphNodesObject["FindDefendLocation"] = {
    nodeName: "FindDefendLocation",
    NodeType: "Sequence",
    Child0: "SetAlertDataStack",
    Child1: "FindDesignatedAlertDefender",
    Child2: "HasValidAlertDataLocation"
};
window.behaviorGraphNodesObject["FindDesignatedAlertDefender"] = {
    nodeName: "FindDesignatedAlertDefender",
    NodeType: "RepeatUntilFail",
    Child0: "EvaluateAlertDataDefender"
};
window.behaviorGraphNodesObject["EvaluateAlertDataDefender"] = {
    nodeName: "EvaluateAlertDataDefender",
    NodeType: "Sequence",
    Child0: "SetNextAlertData",
    Child1: "ScoreAlertFor_Defend",
    Child2: "ScoreAlertDataDistance",
    Child3: "UpdateBestAlertData"
};
window.behaviorGraphNodesObject["DecideDefendAction"] = {
    nodeName: "DecideDefendAction",
    NodeType: "Selector",
    Child0: "MoveToAlertIfNotVisible",
    Child1: "SkipMove"
};
window.behaviorGraphNodesObject["ObserverMovement"] = {
    nodeName: "ObserverMovement",
    NodeType: "Selector",
    Child0: "MoveFlanking",
    Child1: "FallBackWithLoS"
};
window.behaviorGraphNodesObject["ObserverMovementUnsafe"] = {
    nodeName: "ObserverMovementUnsafe",
    NodeType: "Selector",
    Child0: "MoveFlankingUnsafe",
    Child1: "FallBackWithLoSUnsafe"
};
window.behaviorGraphNodesObject["NCObserverMovement"] = {
    nodeName: "NCObserverMovement",
    NodeType: "Selector",
    Child0: "NCMoveFlanking",
    Child1: "NCFallBackWithLoS"
};

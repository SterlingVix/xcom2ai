window.behaviorGraphNodesObject = {
        "GenericAIRoot": {
            "nodeName": "GenericAIRoot",
            "NodeType": "Selector",
            "Child0": "TryNonAggressiveBehavior",
            "Child1": "TryMindControlledRoot",
            "Child2": "::CharacterRoot",
            "Child3": "SkipMove"
        },
        "TryNonAggressiveBehavior": {
            "nodeName": "TryNonAggressiveBehavior",
            "NodeType": "Sequence",
            "Child0": "HasHitAttackLimit",
            "Child1": "NonAggressiveBehavior"
        },
        "HasHitAttackLimit": {
            "nodeName": "HasHitAttackLimit",
            "NodeType": "Condition"
        },
        "NonAggressiveBehavior": {
            "nodeName": "NonAggressiveBehavior",
            "NodeType": "Selector",
            "Child0": "TryNonAggressiveBehaviorFirstAction",
            "Child1": "MoveFlanking",
            "Child2": "SkipMove"
        },
        "TryNonAggressiveBehaviorFirstAction": {
            "nodeName": "TryNonAggressiveBehaviorFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "NonAggressiveBehaviorFirstAction"
        },
        "NonAggressiveBehaviorFirstAction": {
            "nodeName": "NonAggressiveBehaviorFirstAction",
            "NodeType": "RandSelector",
            "Child0": "TryOverwatch",
            "Param0": "33",
            "Child1": "MoveFlankingOrDefensive",
            "Param1": "67"
        },
        "MoveFlankingOrDefensive": {
            "nodeName": "MoveFlankingOrDefensive",
            "NodeType": "Selector",
            "Child0": "MoveFlanking",
            "Child1": "MoveDefensive",
            "Child2": "SkipMove"
        },
        "TryMindControlledRoot": {
            "nodeName": "TryMindControlledRoot",
            "NodeType": "Sequence",
            "Child0": "AffectedByEffect-MindControl",
            "Child1": "MindControlledRoot"
        },
        "NotRedAlert": {
            "nodeName": "NotRedAlert",
            "NodeType": "Inverter",
            "Child0": "IsRedAlert"
        },
        "IsInFirstCombatTurn": {
            "nodeName": "IsInFirstCombatTurn",
            "NodeType": "Condition"
        },
        "IsFlanked": {
            "nodeName": "IsFlanked",
            "NodeType": "Condition"
        },
        "NotFlanked": {
            "nodeName": "NotFlanked",
            "NodeType": "Inverter",
            "Child0": "IsFlanked"
        },
        "IsVisibleToPlayer": {
            "nodeName": "IsVisibleToPlayer",
            "NodeType": "Condition"
        },
        "TargetIsVisibleToPlayer": {
            "nodeName": "TargetIsVisibleToPlayer",
            "NodeType": "Condition"
        },
        "DidNotMoveLastTurn": {
            "nodeName": "DidNotMoveLastTurn",
            "NodeType": "Condition"
        },
        "HighPopularSupport": {
            "nodeName": "HighPopularSupport",
            "NodeType": "Condition",
            "Param0": "PopularSupport",
            "Param1": ">",
            "Param2": "50%"
        },
        "LowPopularSupport": {
            "nodeName": "LowPopularSupport",
            "NodeType": "Inverter",
            "Child0": "HighPopularSupport"
        },
        "IsGroupLeader": {
            "nodeName": "IsGroupLeader",
            "NodeType": "Condition"
        },
        "IsFollower": {
            "nodeName": "IsFollower",
            "NodeType": "Inverter",
            "Child0": "IsGroupLeader"
        },
        "HasAmmo": {
            "nodeName": "HasAmmo",
            "NodeType": "Condition"
        },
        "OutOfAmmo": {
            "nodeName": "OutOfAmmo",
            "NodeType": "Inverter",
            "Child0": "HasAmmo"
        },
        "IsLastActionPoint": {
            "nodeName": "IsLastActionPoint",
            "NodeType": "Condition"
        },
        "NotLastActionPoint": {
            "nodeName": "NotLastActionPoint",
            "NodeType": "Inverter",
            "Child0": "IsLastActionPoint"
        },
        "HasThreeActionPoints": {
            "nodeName": "HasThreeActionPoints",
            "NodeType": "Condition"
        },
        "HasGoodShotTarget": {
            "nodeName": "HasGoodShotTarget",
            "NodeType": "Condition"
        },
        "IsInDangerousArea": {
            "nodeName": "IsInDangerousArea",
            "NodeType": "Condition"
        },
        "NotInDangerousArea": {
            "nodeName": "NotInDangerousArea",
            "NodeType": "Inverter",
            "Child0": "IsInDangerousArea"
        },
        "HasKillShot": {
            "nodeName": "HasKillShot",
            "NodeType": "Condition"
        },
        "HasNoKillShot": {
            "nodeName": "HasNoKillShot",
            "NodeType": "Inverter",
            "Child0": "HasKillShot"
        },
        "TargetIsVulnerable": {
            "nodeName": "TargetIsVulnerable",
            "NodeType": "Selector",
            "Child0": "TargetIsKillable",
            "Child1": "TargetHasLowHP"
        },
        "HasHighHP": {
            "nodeName": "HasHighHP",
            "NodeType": "StatCondition",
            "Param0": "eStat_HP",
            "Param1": ">:",
            "Param2": "70%"
        },
        "HasLowHP": {
            "nodeName": "HasLowHP",
            "NodeType": "StatCondition",
            "Param0": "eStat_HP",
            "Param1": "<:",
            "Param2": "30%"
        },
        "NotLowHP": {
            "nodeName": "NotLowHP",
            "NodeType": "StatCondition",
            "Param0": "eStat_HP",
            "Param1": ">",
            "Param2": "30%"
        },
        "IsBloodied": {
            "nodeName": "IsBloodied",
            "NodeType": "StatCondition",
            "Param0": "eStat_HP",
            "Param1": "<:",
            "Param2": "50%"
        },
        "HasWounds": {
            "nodeName": "HasWounds",
            "NodeType": "StatCondition",
            "Param0": "eStat_HP",
            "Param1": "<",
            "Param2": "100%"
        },
        "IsRedAlert": {
            "nodeName": "IsRedAlert",
            "NodeType": "StatCondition",
            "Param0": "eStat_AlertLevel",
            "Param1": "::",
            "Param2": "2"
        },
        "IsOrangeAlert": {
            "nodeName": "IsOrangeAlert",
            "NodeType": "Condition"
        },
        "IsYellowAlert": {
            "nodeName": "IsYellowAlert",
            "NodeType": "StatCondition",
            "Param0": "eStat_AlertLevel",
            "Param1": "::",
            "Param2": "1"
        },
        "IsGreenAlert": {
            "nodeName": "IsGreenAlert",
            "NodeType": "StatCondition",
            "Param0": "eStat_AlertLevel",
            "Param1": "::",
            "Param2": "0"
        },
        "HasRevealed": {
            "nodeName": "HasRevealed",
            "NodeType": "Condition"
        },
        "NotYetRevealed": {
            "nodeName": "NotYetRevealed",
            "NodeType": "Inverter",
            "Child0": "HasRevealed"
        },
        "HasCombatOccured": {
            "nodeName": "HasCombatOccured",
            "NodeType": "StatCondition",
            "Param0": "CombatCount",
            "Param1": ">",
            "Param2": "0"
        },
        "HasMoreThanOneOverwatcher": {
            "nodeName": "HasMoreThanOneOverwatcher",
            "NodeType": "StatCondition",
            "Param0": "OverwatcherCount",
            "Param1": ">",
            "Param2": "1"
        },
        "NoOverwatchingTeammates": {
            "nodeName": "NoOverwatchingTeammates",
            "NodeType": "StatCondition",
            "Param0": "OverwatcherCount",
            "Param1": "::",
            "Param2": "0",
            "Param3": "1"
        },
        "OneOverwatchingTeammate": {
            "nodeName": "OneOverwatchingTeammate",
            "NodeType": "StatCondition",
            "Param0": "OverwatcherCount",
            "Param1": "::",
            "Param2": "1",
            "Param3": "1"
        },
        "MultipleOverwatchingTeammates": {
            "nodeName": "MultipleOverwatchingTeammates",
            "NodeType": "StatCondition",
            "Param0": "OverwatcherCount",
            "Param1": ">",
            "Param2": "1",
            "Param3": "1"
        },
        "TargetHasBeenAttackedTwice": {
            "nodeName": "TargetHasBeenAttackedTwice",
            "NodeType": "StatCondition",
            "Param0": "TargetSelectedThisTurnCount",
            "Param1": ">:",
            "Param2": "2"
        },
        "TargetHasBeenAttackedOnce": {
            "nodeName": "TargetHasBeenAttackedOnce",
            "NodeType": "StatCondition",
            "Param0": "TargetSelectedThisTurnCount",
            "Param1": ":",
            "Param2": "1"
        },
        "TargetHasNotBeenAttacked": {
            "nodeName": "TargetHasNotBeenAttacked",
            "NodeType": "StatCondition",
            "Param0": "TargetSelectedThisTurnCount",
            "Param1": ":",
            "Param2": "0"
        },
        "NoVisibleOverwatchers": {
            "nodeName": "NoVisibleOverwatchers",
            "NodeType": "StatCondition",
            "Param0": "OverwatcherCount",
            "Param1": "::",
            "Param2": "0"
        },
        "NoVisibleSuppressors": {
            "nodeName": "NoVisibleSuppressors",
            "NodeType": "StatCondition",
            "Param0": "SuppressorCount",
            "Param1": "::",
            "Param2": "0"
        },
        "HasBTVar-SafeToMove": {
            "nodeName": "HasBTVar-SafeToMove",
            "NodeType": "Condition"
        },
        "SetSafeToMoveTrue": {
            "nodeName": "SetSafeToMoveTrue",
            "NodeType": "Action",
            "Param0": "SetBTVar",
            "Param1": "SafeToMove",
            "Param2": "1"
        },
        "SetSafeToMoveFalse": {
            "nodeName": "SetSafeToMoveFalse",
            "NodeType": "Action",
            "Param0": "SetBTVar",
            "Param1": "SafeToMove",
            "Param2": "0"
        },
        "IsSafeToMove": {
            "nodeName": "IsSafeToMove",
            "NodeType": "StatCondition",
            "Param0": "BTVar",
            "Param1": "!:",
            "Param2": "0",
            "Param3": "SafeToMove"
        },
        "InitSafeToMoveVar": {
            "nodeName": "InitSafeToMoveVar",
            "NodeType": "Selector",
            "Child0": "HasBTVar-SafeToMove",
            "Child1": "UpdateSafeToMoveVar"
        },
        "UpdateSafeToMoveVar": {
            "nodeName": "UpdateSafeToMoveVar",
            "NodeType": "Selector",
            "Child0": "TrySetSafeToMoveTrue",
            "Child1": "SetSafeToMoveFalse"
        },
        "TrySetSafeToMoveTrue": {
            "nodeName": "TrySetSafeToMoveTrue",
            "NodeType": "Sequence",
            "Child0": "AreConditionsSafeForMove",
            "Child1": "SetSafeToMoveTrue"
        },
        "AreConditionsSafeForMove": {
            "nodeName": "AreConditionsSafeForMove",
            "NodeType": "Selector",
            "Child0": "IsFlanked",
            "Child1": "PassesOverwatchSuppressMoveChecks"
        },
        "PassesOverwatchSuppressMoveChecks": {
            "nodeName": "PassesOverwatchSuppressMoveChecks",
            "NodeType": "Sequence",
            "Child0": "PassesSuppressMoveChecks",
            "Child1": "PassesOverwatchMoveChecks"
        },
        "PassesOverwatchMoveChecks": {
            "nodeName": "PassesOverwatchMoveChecks",
            "NodeType": "Selector",
            "Child0": "NoVisibleOverwatchers",
            "Child1": "RollToNotMoveAgainstOverwatchersFails"
        },
        "PassesSuppressMoveChecks": {
            "nodeName": "PassesSuppressMoveChecks",
            "NodeType": "Selector",
            "Child0": "NoVisibleSuppressors",
            "Child1": "RollToNotMoveAgainstSuppressorsFails"
        },
        "RollToNotMoveAgainstOverwatchersFails": {
            "nodeName": "RollToNotMoveAgainstOverwatchersFails",
            "NodeType": "Sequence",
            "Child0": "SetNoMoveFalse",
            "Child1": "SetOverwatcherStack",
            "Child2": "RepeatRollNoMoveOnOverwatcherUntilPass",
            "Child3": "RollToNotMoveFailed"
        },
        "RollToNotMoveAgainstSuppressorsFails": {
            "nodeName": "RollToNotMoveAgainstSuppressorsFails",
            "NodeType": "Sequence",
            "Child0": "SetNoMoveFalse",
            "Child1": "SetSuppressorStack",
            "Child2": "RepeatRollNoMoveOnSuppressorUntilPass",
            "Child3": "RollToNotMoveFailed"
        },
        "RepeatRollNoMoveOnOverwatcherUntilPass": {
            "nodeName": "RepeatRollNoMoveOnOverwatcherUntilPass",
            "NodeType": "RepeatUntilFail",
            "Child0": "IterateRollOnNoMoveToOverwatcher"
        },
        "RepeatRollNoMoveOnSuppressorUntilPass": {
            "nodeName": "RepeatRollNoMoveOnSuppressorUntilPass",
            "NodeType": "RepeatUntilFail",
            "Child0": "IterateRollOnNoMoveToSuppressor"
        },
        "IterateRollOnNoMoveToOverwatcher": {
            "nodeName": "IterateRollOnNoMoveToOverwatcher",
            "NodeType": "Sequence",
            "Child0": "SetNextOverwatcher",
            "Child1": "Roll50ToNotMove",
            "Child2": "RollToNotMoveFailed"
        },
        "IterateRollOnNoMoveToSuppressor": {
            "nodeName": "IterateRollOnNoMoveToSuppressor",
            "NodeType": "Sequence",
            "Child0": "SetNextSuppressor",
            "Child1": "Roll75ToNotMove",
            "Child2": "RollToNotMoveFailed"
        },
        "SetNextOverwatcher": {
            "nodeName": "SetNextOverwatcher",
            "NodeType": "Action",
        },
        "SetOverwatcherStack": {
            "nodeName": "SetOverwatcherStack",
            "NodeType": "Action",
        },
        "SetNextSuppressor": {
            "nodeName": "SetNextSuppressor",
            "NodeType": "Action",
        },
        "SetSuppressorStack": {
            "nodeName": "SetSuppressorStack",
            "NodeType": "Action",
        },
        "Roll50ToNotMove": {
            "nodeName": "Roll50ToNotMove",
            "NodeType": "RandSelector",
            "Child0": "SetNoMoveTrue",
            "Param0": "50",
            "Child1": "SetNoMoveFalse",
            "Param1": "50"
        },
        "Roll75ToNotMove": {
            "nodeName": "Roll75ToNotMove",
            "NodeType": "RandSelector",
            "Child0": "SetNoMoveTrue",
            "Param0": "75",
            "Child1": "SetNoMoveFalse",
            "Param1": "25"
        },
        "SetNoMoveTrue": {
            "nodeName": "SetNoMoveTrue",
            "NodeType": "Action",
            "Param0": "SetBTVar",
            "Param1": "NoMove",
            "Param2": "1"
        },
        "SetNoMoveFalse": {
            "nodeName": "SetNoMoveFalse",
            "NodeType": "Action",
            "Param0": "SetBTVar",
            "Param1": "NoMove",
            "Param2": "0"
        },
        "RollToNotMoveFailed": {
            "nodeName": "RollToNotMoveFailed",
            "NodeType": "StatCondition",
            "Param0": "BTVar",
            "Param1": "::",
            "Param2": "0",
            "Param3": "NoMove"
        },
        "RollToNotMovePassed": {
            "nodeName": "RollToNotMovePassed",
            "NodeType": "StatCondition",
            "Param0": "BTVar",
            "Param1": "!:",
            "Param2": "0",
            "Param3": "NoMove"
        },
        "SafeToMove": {
            "nodeName": "SafeToMove",
            "NodeType": "Sequence",
            "Child0": "InitSafeToMoveVar",
            "Child1": "IsSafeToMove"
        },
        "IsDifficultyEasy": {
            "nodeName": "IsDifficultyEasy",
            "NodeType": "StatCondition",
            "Param0": "Difficulty",
            "Param1": "::",
            "Param2": "0"
        },
        "IsDifficultyNormal": {
            "nodeName": "IsDifficultyNormal",
            "NodeType": "StatCondition",
            "Param0": "Difficulty",
            "Param1": "::",
            "Param2": "1"
        },
        "IsDifficultyHard": {
            "nodeName": "IsDifficultyHard",
            "NodeType": "StatCondition",
            "Param0": "Difficulty",
            "Param1": "::",
            "Param2": "2"
        },
        "IsDifficultyClassic": {
            "nodeName": "IsDifficultyClassic",
            "NodeType": "StatCondition",
            "Param0": "Difficulty",
            "Param1": "::",
            "Param2": "3"
        },
        "IsDifficultyAboveNormal": {
            "nodeName": "IsDifficultyAboveNormal",
            "NodeType": "StatCondition",
            "Param0": "Difficulty",
            "Param1": ">",
            "Param2": "1"
        },
        "IsDifficultyLow": {
            "nodeName": "IsDifficultyLow",
            "NodeType": "StatCondition",
            "Param0": "Difficulty",
            "Param1": "<:",
            "Param2": "1"
        },
        "UseDashMovement": {
            "nodeName": "UseDashMovement",
            "NodeType": "Action",
        },
        "SetCiviliansAsEnemiesInMoveCalculation": {
            "nodeName": "SetCiviliansAsEnemiesInMoveCalculation",
            "NodeType": "Action",
        },
        "SetNoCoverMovement": {
            "nodeName": "SetNoCoverMovement",
            "NodeType": "Action",
        },
        "HasPriorityTargetUnit": {
            "nodeName": "HasPriorityTargetUnit",
            "NodeType": "Condition"
        },
        "HasPriorityTargetObject": {
            "nodeName": "HasPriorityTargetObject",
            "NodeType": "Condition"
        },
        "HasPriorityTarget": {
            "nodeName": "HasPriorityTarget",
            "NodeType": "Selector",
            "Child0": "HasPriorityTargetUnit",
            "Child1": "HasValidProtectDeviceTarget"
        },
        "HasValidProtectDeviceTarget": {
            "nodeName": "HasValidProtectDeviceTarget",
            "NodeType": "Sequence",
            "Child0": "HasPriorityTargetObject",
            "Child1": "PriorityTargetNotAttackedThisTurn"
        },
        "PriorityTargetNotAttackedThisTurn": {
            "nodeName": "PriorityTargetNotAttackedThisTurn",
            "NodeType": "StatCondition",
            "Param0": "PriorityObjectAttackCount",
            "Param1": "::",
            "Param2": "0"
        },
        "HasEnemyVIP": {
            "nodeName": "HasEnemyVIP",
            "NodeType": "Condition"
        },
        "TargetIsPriorityUnit": {
            "nodeName": "TargetIsPriorityUnit",
            "NodeType": "Condition"
        },
        "TargetIsPriorityObject": {
            "nodeName": "TargetIsPriorityObject",
            "NodeType": "Condition"
        },
        "TargetIsEnemyVIP": {
            "nodeName": "TargetIsEnemyVIP",
            "NodeType": "Condition"
        },
        "AffectedByEffect-MindControl": {
            "nodeName": "AffectedByEffect-MindControl",
            "NodeType": "Condition"
        },
        "AffectedByEffect-RageTriggered": {
            "nodeName": "AffectedByEffect-RageTriggered",
            "NodeType": "Condition"
        },
        "AffectedByEffect-PsychosisTriggered": {
            "nodeName": "AffectedByEffect-PsychosisTriggered",
            "NodeType": "Condition"
        },
        "AffectedByEffect-GatekeeperClosedEffect": {
            "nodeName": "AffectedByEffect-GatekeeperClosedEffect",
            "NodeType": "Condition"
        },
        "AffectedByEffect-WrathCannonStage1Effect": {
            "nodeName": "AffectedByEffect-WrathCannonStage1Effect",
            "NodeType": "Condition"
        },
        "AffectedByEffect-FrenzyEffect": {
            "nodeName": "AffectedByEffect-FrenzyEffect",
            "NodeType": "Condition"
        },
        "AffectedByEffect-Burrowed": {
            "nodeName": "AffectedByEffect-Burrowed",
            "NodeType": "Condition"
        },
        "TargetAffectedByEffect-MarkedTarget": {
            "nodeName": "TargetAffectedByEffect-MarkedTarget",
            "NodeType": "Condition"
        },
        "AffectedByEffect-Poisoned": {
            "nodeName": "AffectedByEffect-Poisoned",
            "NodeType": "Condition"
        },
        "TargetAffectedByEffect-Disoriented": {
            "nodeName": "TargetAffectedByEffect-Disoriented",
            "NodeType": "Condition"
        },
        "TargetAffectedByEffect-Confused": {
            "nodeName": "TargetAffectedByEffect-Confused",
            "NodeType": "Condition"
        },
        "TargetAffectedByEffect-Panicked": {
            "nodeName": "TargetAffectedByEffect-Panicked",
            "NodeType": "Condition"
        },
        "TargetAffectedByEffect-Suppression": {
            "nodeName": "TargetAffectedByEffect-Suppression",
            "NodeType": "Condition"
        },
        "TargetIsApplyingEffect-Suppression": {
            "nodeName": "TargetIsApplyingEffect-Suppression",
            "NodeType": "Condition"
        },
        "TargetWillWeakened": {
            "nodeName": "TargetWillWeakened",
            "NodeType": "Selector",
            "Child0": "TargetAffectedByEffect-Disoriented",
            "Child1": "TargetAffectedByEffect-Confused",
            "Child2": "TargetAffectedByEffect-Panicked",
            "Child3": "TargetNotAffectedByDominated"
        },
        "TargetWillunWeakened": {
            "nodeName": "TargetWillunWeakened",
            "NodeType": "Inverter",
            "Child0": "TargetWillWeakened"
        },
        "IsMissionOfType-Terror": {
            "nodeName": "IsMissionOfType-Terror",
            "NodeType": "Condition"
        },
        "IsAIInCivilianRadius": {
            "nodeName": "IsAIInCivilianRadius",
            "NodeType": "Condition"
        },
        "HasMultipleEnergyShieldTargets": {
            "nodeName": "HasMultipleEnergyShieldTargets",
            "NodeType": "StatCondition",
            "Param0": "AbilityTargetUnitCount-EnergyShield",
            "Param1": ">:",
            "Param2": "3"
        },
        "HasAnyEnergyShieldTargets": {
            "nodeName": "HasAnyEnergyShieldTargets",
            "NodeType": "StatCondition",
            "Param0": "AbilityTargetUnitCount-EnergyShield",
            "Param1": ">:",
            "Param2": "2"
        },
        "TargetHasLowHP": {
            "nodeName": "TargetHasLowHP",
            "NodeType": "TargetStatCondition",
            "Param0": "eStat_HP",
            "Param1": "<:",
            "Param2": "40%"
        },
        "TargetHasHighHP": {
            "nodeName": "TargetHasHighHP",
            "NodeType": "TargetStatCondition",
            "Param0": "eStat_HP",
            "Param1": ">:",
            "Param2": "75%"
        },
        "TargetHasMaxHP": {
            "nodeName": "TargetHasMaxHP",
            "NodeType": "TargetStatCondition",
            "Param0": "eStat_HP",
            "Param1": ">:",
            "Param2": "100%"
        },
        "TargetWounded": {
            "nodeName": "TargetWounded",
            "NodeType": "Inverter",
            "Child0": "TargetHasMaxHP"
        },
        "TargetIsKillable": {
            "nodeName": "TargetIsKillable",
            "NodeType": "Condition"
        },
        "TargetHitChanceLow": {
            "nodeName": "TargetHitChanceLow",
            "NodeType": "Condition"
        },
        "TargetHitChanceHigh": {
            "nodeName": "TargetHitChanceHigh",
            "NodeType": "Condition"
        },
        "IsFlankingTarget": {
            "nodeName": "IsFlankingTarget",
            "NodeType": "Condition"
        },
        "TargetIsCivilian": {
            "nodeName": "TargetIsCivilian",
            "NodeType": "Condition"
        },
        "TargetIsNotCivilian": {
            "nodeName": "TargetIsNotCivilian",
            "NodeType": "Inverter",
            "Child0": "TargetIsCivilian"
        },
        "TargetIsEnemy": {
            "nodeName": "TargetIsEnemy",
            "NodeType": "Condition"
        },
        "TargetIsAlly": {
            "nodeName": "TargetIsAlly",
            "NodeType": "Condition"
        },
        "TargetIsAdvent": {
            "nodeName": "TargetIsAdvent",
            "NodeType": "Condition"
        },
        "TargetIsAlien": {
            "nodeName": "TargetIsAlien",
            "NodeType": "Condition"
        },
        "TargetIsNotAlien": {
            "nodeName": "TargetIsNotAlien",
            "NodeType": "Inverter",
            "Child0": "TargetIsAlien"
        },
        "TargetIsRobotic": {
            "nodeName": "TargetIsRobotic",
            "NodeType": "Condition"
        },
        "TargetIsClosestValidTarget": {
            "nodeName": "TargetIsClosestValidTarget",
            "NodeType": "Condition"
        },
        "TargetIsNotAttackable": {
            "nodeName": "TargetIsNotAttackable",
            "NodeType": "Condition"
        },
        "FindDestination-FallBack": {
            "nodeName": "FindDestination-FallBack",
            "NodeType": "Action",
        },
        "FindDestination-Defensive": {
            "nodeName": "FindDestination-Defensive",
            "NodeType": "Action",
        },
        "FindDestination-Standard": {
            "nodeName": "FindDestination-Standard",
            "NodeType": "Action",
        },
        "FindDestination-Aggressive": {
            "nodeName": "FindDestination-Aggressive",
            "NodeType": "Action",
        },
        "FindDestination-Fanatic": {
            "nodeName": "FindDestination-Fanatic",
            "NodeType": "Action",
        },
        "FindDestination-AdvanceCover": {
            "nodeName": "FindDestination-AdvanceCover",
            "NodeType": "Action",
        },
        "FindDestination-Flanking": {
            "nodeName": "FindDestination-Flanking",
            "NodeType": "Action",
        },
        "FindDestination-Hunting": {
            "nodeName": "FindDestination-Hunting",
            "NodeType": "Action",
        },
        "FindDestination-Melee": {
            "nodeName": "FindDestination-Melee",
            "NodeType": "Action",
        },
        "FindDestination-MeleeDefensive": {
            "nodeName": "FindDestination-MeleeDefensive",
            "NodeType": "Action",
        },
        "FindDestination-MeleeAggressive": {
            "nodeName": "FindDestination-MeleeAggressive",
            "NodeType": "Action",
        },
        "FindDestination-MeleeFanatic": {
            "nodeName": "FindDestination-MeleeFanatic",
            "NodeType": "Action",
        },
        "FindDestination-CivilianGreen": {
            "nodeName": "FindDestination-CivilianGreen",
            "NodeType": "Action",
        },
        "FindDestination-CivilianRed": {
            "nodeName": "FindDestination-CivilianRed",
            "NodeType": "Action",
        },
        "FindDestination-RandomNoCover": {
            "nodeName": "FindDestination-RandomNoCover",
            "NodeType": "Action",
        },
        "FindDestinationWithLoS-Teleport": {
            "nodeName": "FindDestinationWithLoS-Teleport",
            "NodeType": "Action",
        },
        "FindDestinationWithLoS-IsoTeleport": {
            "nodeName": "FindDestinationWithLoS-IsoTeleport",
            "NodeType": "Action",
        },
        "FindDestinationWithLoS-FallBack": {
            "nodeName": "FindDestinationWithLoS-FallBack",
            "NodeType": "Action",
        },
        "FindDestinationWithLoS-Defensive": {
            "nodeName": "FindDestinationWithLoS-Defensive",
            "NodeType": "Action",
        },
        "FindDestinationWithLoS-Standard": {
            "nodeName": "FindDestinationWithLoS-Standard",
            "NodeType": "Action",
        },
        "FindDestinationWithLoS-Aggressive": {
            "nodeName": "FindDestinationWithLoS-Aggressive",
            "NodeType": "Action",
        },
        "FindDestinationWithLoS-Fanatic": {
            "nodeName": "FindDestinationWithLoS-Fanatic",
            "NodeType": "Action",
        },
        "FindDestinationWithLoS-AdvanceCover": {
            "nodeName": "FindDestinationWithLoS-AdvanceCover",
            "NodeType": "Action",
        },
        "FindDestinationWithLoS-Flanking": {
            "nodeName": "FindDestinationWithLoS-Flanking",
            "NodeType": "Action",
        },
        "FindRestrictedDestination-FallBack": {
            "nodeName": "FindRestrictedDestination-FallBack",
            "NodeType": "Action",
        },
        "FindRestrictedDestination-Defensive": {
            "nodeName": "FindRestrictedDestination-Defensive",
            "NodeType": "Action",
        },
        "FindRestrictedDestination-Standard": {
            "nodeName": "FindRestrictedDestination-Standard",
            "NodeType": "Action",
        },
        "FindRestrictedDestination-Aggressive": {
            "nodeName": "FindRestrictedDestination-Aggressive",
            "NodeType": "Action",
        },
        "FindRestrictedDestination-Fanatic": {
            "nodeName": "FindRestrictedDestination-Fanatic",
            "NodeType": "Action",
        },
        "FindRestrictedDestination-AdvanceCover": {
            "nodeName": "FindRestrictedDestination-AdvanceCover",
            "NodeType": "Action",
        },
        "FindRestrictedDestination-Melee": {
            "nodeName": "FindRestrictedDestination-Melee",
            "NodeType": "Action",
        },
        "FindRestrictedDestination-MeleeDefensive": {
            "nodeName": "FindRestrictedDestination-MeleeDefensive",
            "NodeType": "Action",
        },
        "FindRestrictedDestination-MeleeFanatic": {
            "nodeName": "FindRestrictedDestination-MeleeFanatic",
            "NodeType": "Action",
        },
        "FindRestrictedDestination-Teleport": {
            "nodeName": "FindRestrictedDestination-Teleport",
            "NodeType": "Action",
        },
        "FindRestrictedDestination-IsoTeleport": {
            "nodeName": "FindRestrictedDestination-IsoTeleport",
            "NodeType": "Action",
        },
        "FindRestrictedDestination-MimicBeacon": {
            "nodeName": "FindRestrictedDestination-MimicBeacon",
            "NodeType": "Action",
        },
        "FindRestrictedDestination-Burrow": {
            "nodeName": "FindRestrictedDestination-Burrow",
            "NodeType": "Action",
        },
        "ResetDestinationSearch": {
            "nodeName": "ResetDestinationSearch",
            "NodeType": "Action",
        },
        "RestrictToEnemyLoS": {
            "nodeName": "RestrictToEnemyLoS",
            "NodeType": "Action",
        },
        "RestrictToAllyLoS": {
            "nodeName": "RestrictToAllyLoS",
            "NodeType": "Action",
        },
        "RestrictToFlanking": {
            "nodeName": "RestrictToFlanking",
            "NodeType": "Action",
        },
        "RestrictToAbilityRange-ThrowGrenade": {
            "nodeName": "RestrictToAbilityRange-ThrowGrenade",
            "NodeType": "Action",
        },
        "RestrictToAbilityRange-PoisonSpit": {
            "nodeName": "RestrictToAbilityRange-PoisonSpit",
            "NodeType": "Action",
        },
        "RestrictToAbilityRange-AcidBlob": {
            "nodeName": "RestrictToAbilityRange-AcidBlob",
            "NodeType": "Action",
        },
        "RestrictToAbilityRange-MicroMissiles": {
            "nodeName": "RestrictToAbilityRange-MicroMissiles",
            "NodeType": "Action",
        },
        "RestrictToAbilityRange-BlazingPinionsStage1": {
            "nodeName": "RestrictToAbilityRange-BlazingPinionsStage1",
            "NodeType": "Action",
        },
        "RestrictToAbilityRange-PsiDimensionalRiftStage1": {
            "nodeName": "RestrictToAbilityRange-PsiDimensionalRiftStage1",
            "NodeType": "Action",
        },
        "RestrictToAbilityRange-NullLance": {
            "nodeName": "RestrictToAbilityRange-NullLance",
            "NodeType": "Action",
        },
        "RestrictToAbilityRange-PsiMindControl": {
            "nodeName": "RestrictToAbilityRange-PsiMindControl",
            "NodeType": "Action",
        },
        "RestrictToAbilityRange-AnimaInversion": {
            "nodeName": "RestrictToAbilityRange-AnimaInversion",
            "NodeType": "Action",
        },
        "RestrictToAbilityRange-PsiBombStage1": {
            "nodeName": "RestrictToAbilityRange-PsiBombStage1",
            "NodeType": "Action",
        },
        "RestrictToAbilityRange-StandardShot": {
            "nodeName": "RestrictToAbilityRange-StandardShot",
            "NodeType": "Action",
        },
        "RestrictToAbilityRange-Suppression": {
            "nodeName": "RestrictToAbilityRange-Suppression",
            "NodeType": "Action",
        },
        "RestrictToPotentialTargetRange-EnergyShield": {
            "nodeName": "RestrictToPotentialTargetRange-EnergyShield",
            "NodeType": "Action",
        },
        "RestrictToAlliedAbilityRange-EnergyShield": {
            "nodeName": "RestrictToAlliedAbilityRange-EnergyShield",
            "NodeType": "Action",
            "Param0": "2"
        },
        "RestrictToPotentialTargetRange-StandardMelee": {
            "nodeName": "RestrictToPotentialTargetRange-StandardMelee",
            "NodeType": "Action",
        },
        "RestrictToPotentialTargetRange-NullLance": {
            "nodeName": "RestrictToPotentialTargetRange-NullLance",
            "NodeType": "Action",
        },
        "AddAbilityRangeWeight-EnergyShield": {
            "nodeName": "AddAbilityRangeWeight-EnergyShield",
            "NodeType": "Action",
            "Param0": "5.5"
        },
        "FindGrenadeDestination": {
            "nodeName": "FindGrenadeDestination",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAbilityRange-ThrowGrenade",
            "Child2": "RestrictToEnemyLoS",
            "Child3": "FindRestrictedDestination-Standard"
        },
        "FindPoisonSpitDestination": {
            "nodeName": "FindPoisonSpitDestination",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAbilityRange-PoisonSpit",
            "Child2": "RestrictToEnemyLoS",
            "Child3": "FindRestrictedDestination-Standard"
        },
        "FindAcidBlobDestination": {
            "nodeName": "FindAcidBlobDestination",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAbilityRange-AcidBlob",
            "Child2": "RestrictToEnemyLoS",
            "Child3": "FindRestrictedDestination-Standard"
        },
        "FindMicroMissilesDestination": {
            "nodeName": "FindMicroMissilesDestination",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAbilityRange-MicroMissiles",
            "Child2": "RestrictToEnemyLoS",
            "Child3": "FindRestrictedDestination-Fanatic"
        },
        "FindBlazingPinionsDestination": {
            "nodeName": "FindBlazingPinionsDestination",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAbilityRange-BlazingPinionsStage1",
            "Child2": "RestrictToEnemyLoS",
            "Child3": "FindRestrictedDestination-Fanatic"
        },
        "FindShieldDestinationDefensive": {
            "nodeName": "FindShieldDestinationDefensive",
            "NodeType": "Selector",
            "Child0": "FindShieldDestinationDefensive_MultipleUnits",
            "Child1": "FindShieldDestinationDefensive_BestUnit"
        },
        "FindShieldDestinationDefensive_MultipleUnits": {
            "nodeName": "FindShieldDestinationDefensive_MultipleUnits",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAlliedAbilityRange-EnergyShield",
            "Child2": "AddAbilityRangeWeight-EnergyShield",
            "Child3": "FindRestrictedDestination-Defensive"
        },
        "FindShieldDestinationDefensive_BestUnit": {
            "nodeName": "FindShieldDestinationDefensive_BestUnit",
            "NodeType": "Sequence",
            "Child0": "SelectPotentialTargetForEnergyShield",
            "Child1": "ResetDestinationSearch",
            "Child2": "RestrictToPotentialTargetRange-EnergyShield",
            "Child3": "FindRestrictedDestination-Defensive"
        },
        "FindDimensionalRiftDestination": {
            "nodeName": "FindDimensionalRiftDestination",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAbilityRange-PsiDimensionalRiftStage1",
            "Child2": "RestrictToEnemyLoS",
            "Child3": "FindRestrictedDestination-Defensive"
        },
        "FindMindControlDestinationDefensive": {
            "nodeName": "FindMindControlDestinationDefensive",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAbilityRange-PsiMindControl",
            "Child2": "RestrictToEnemyLoS",
            "Child3": "FindRestrictedDestination-Defensive"
        },
        "FindAnimaInversionDestination": {
            "nodeName": "FindAnimaInversionDestination",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAbilityRange-AnimaInversion",
            "Child2": "RestrictToEnemyLoS",
            "Child3": "FindRestrictedDestination-Fanatic"
        },
        "FindPsiBombDestination": {
            "nodeName": "FindPsiBombDestination",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAbilityRange-PsiBombStage1",
            "Child2": "RestrictToEnemyLoS",
            "Child3": "FindRestrictedDestination-Standard"
        },
        "FindNullLanceDestination": {
            "nodeName": "FindNullLanceDestination",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAbilityRange-NullLance",
            "Child2": "RestrictToEnemyLoS",
            "Child3": "FindRestrictedDestination-Standard"
        },
        "FindPsiBombTeleportDestination": {
            "nodeName": "FindPsiBombTeleportDestination",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAbilityRange-PsiBombStage1",
            "Child2": "RestrictToEnemyLoS",
            "Child3": "UseDashMovement",
            "Child4": "FindRestrictedDestination-Teleport"
        },
        "FindPsiMindControlTeleportDestination": {
            "nodeName": "FindPsiMindControlTeleportDestination",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAbilityRange-PsiMindControl",
            "Child2": "RestrictToEnemyLoS",
            "Child3": "UseDashMovement",
            "Child4": "FindRestrictedDestination-Teleport"
        },
        "FindPsiDimensionalRiftTeleportDestination": {
            "nodeName": "FindPsiDimensionalRiftTeleportDestination",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAbilityRange-PsiDimensionalRiftStage1",
            "Child2": "RestrictToEnemyLoS",
            "Child3": "UseDashMovement",
            "Child4": "FindRestrictedDestination-Teleport"
        },
        "FindNullLanceTeleportDestination": {
            "nodeName": "FindNullLanceTeleportDestination",
            "NodeType": "Sequence",
            "Child0": "RestrictToPotentialTargetRange-NullLance",
            "Child1": "UseDashMovement",
            "Child2": "FindRestrictedDestination-Teleport"
        },
        "FindSuppressionDestination": {
            "nodeName": "FindSuppressionDestination",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAbilityRange-Suppression",
            "Child2": "RestrictToEnemyLoS",
            "Child3": "FindRestrictedDestination-Standard"
        },
        "SetAbilityForFindDestination-StunLance": {
            "nodeName": "SetAbilityForFindDestination-StunLance",
            "NodeType": "Action",
        },
        "SetAbilityForFindDestination-DevastatingPunch": {
            "nodeName": "SetAbilityForFindDestination-DevastatingPunch",
            "NodeType": "Action",
        },
        "SkipMove": {
            "nodeName": "SkipMove",
            "NodeType": "Action",
        },
        "SelectMoveStandard": {
            "nodeName": "SelectMoveStandard",
            "NodeType": "Selector",
            "Child0": "SelectMoveProfileByJob",
            "Child1": "MoveStandard"
        },
        "SelectMove_JobOrDefensive": {
            "nodeName": "SelectMove_JobOrDefensive",
            "NodeType": "Selector",
            "Child0": "SelectMoveProfileByJob",
            "Child1": "MoveDefensive"
        },
        "SelectMove_JobOrAggressive": {
            "nodeName": "SelectMove_JobOrAggressive",
            "NodeType": "Selector",
            "Child0": "SelectMoveProfileByJob",
            "Child1": "MoveAggressive"
        },
        "SelectNCMove_JobOrFanatic": {
            "nodeName": "SelectNCMove_JobOrFanatic",
            "NodeType": "Selector",
            "Child0": "SelectNCMoveProfileByJob",
            "Child1": "MoveNoCover"
        },
        "SelectMove_JobOrHunter": {
            "nodeName": "SelectMove_JobOrHunter",
            "NodeType": "Selector",
            "Child0": "SelectMoveProfileByJob",
            "Child1": "MoveHunting"
        },
        "SelectMove_JobOrFlanking": {
            "nodeName": "SelectMove_JobOrFlanking",
            "NodeType": "Selector",
            "Child0": "SelectMoveProfileByJob",
            "Child1": "MoveFlanking"
        },
        "SelectMove_JobOrMelee": {
            "nodeName": "SelectMove_JobOrMelee",
            "NodeType": "Selector",
            "Child0": "SelectMoveProfileByJob",
            "Child1": "MoveMelee"
        },
        "SelectUnsafeMove_JobOrMelee": {
            "nodeName": "SelectUnsafeMove_JobOrMelee",
            "NodeType": "Selector",
            "Child0": "SelectMoveProfileByJobUnsafe",
            "Child1": "MoveMeleeUnsafe"
        },
        "FallBack": {
            "nodeName": "FallBack",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "FallBackUnsafe"
        },
        "FallBackUnsafe": {
            "nodeName": "FallBackUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "FindBestFallbackDestination",
            "Child3": "SelectAbility-StandardMove"
        },
        "FindBestFallbackDestination": {
            "nodeName": "FindBestFallbackDestination",
            "NodeType": "Selector",
            "Child0": "FindDestinationWithLoS-Defensive",
            "Child1": "FindDestinationWithLoS-FallBack",
            "Child2": "FindDestination-Defensive",
            "Child3": "FindDestination-FallBack"
        },
        "FallBackWithLoS": {
            "nodeName": "FallBackWithLoS",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "FallBackWithLoSUnsafe"
        },
        "FallBackWithLoSUnsafe": {
            "nodeName": "FallBackWithLoSUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "FindDestinationWithLoS-FallBack",
            "Child3": "SelectAbility-StandardMove"
        },
        "NCFallBackWithLoS": {
            "nodeName": "NCFallBackWithLoS",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "NCFallBackWithLoSUnsafe"
        },
        "NCFallBackWithLoSUnsafe": {
            "nodeName": "NCFallBackWithLoSUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "SetNoCoverMovement",
            "Child3": "FindDestinationWithLoS-FallBack",
            "Child4": "SelectAbility-StandardMove"
        },
        "FindFriendlyFallbackDestination": {
            "nodeName": "FindFriendlyFallbackDestination",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToAllyLoS",
            "Child2": "FindRestrictedDestination-FallBack"
        },
        "FallBackIfFirstAbility": {
            "nodeName": "FallBackIfFirstAbility",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "FallBack"
        },
        "FallBackIfFirstAbilityUnsafe": {
            "nodeName": "FallBackIfFirstAbilityUnsafe",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "FallBackUnsafe"
        },
        "FallBackWithLoSIfFirstAbility": {
            "nodeName": "FallBackWithLoSIfFirstAbility",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "FallBackWithLoS"
        },
        "FallBackWithLoSIfFirstAbilityUnsafe": {
            "nodeName": "FallBackWithLoSIfFirstAbilityUnsafe",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "FallBackWithLoSUnsafe"
        },
        "MoveDefensive": {
            "nodeName": "MoveDefensive",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveDefensiveUnsafe"
        },
        "MoveDefensiveUnsafe": {
            "nodeName": "MoveDefensiveUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "FindDestination-Defensive",
            "Child3": "SelectAbility-StandardMove"
        },
        "NCMoveDefensive": {
            "nodeName": "NCMoveDefensive",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "NCMoveDefensiveUnsafe"
        },
        "NCMoveDefensiveUnsafe": {
            "nodeName": "NCMoveDefensiveUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "SetNoCoverMovement",
            "Child3": "FindDestination-Defensive",
            "Child4": "SelectAbility-StandardMove"
        },
        "MoveDefensiveIfFirstAbility": {
            "nodeName": "MoveDefensiveIfFirstAbility",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveDefensive"
        },
        "MoveDefensiveIfFirstAbilityUnsafe": {
            "nodeName": "MoveDefensiveIfFirstAbilityUnsafe",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveDefensiveUnsafe"
        },
        "MoveDefensiveWithLoS": {
            "nodeName": "MoveDefensiveWithLoS",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveDefensiveWithLoSUnsafe"
        },
        "MoveDefensiveWithLoSUnsafe": {
            "nodeName": "MoveDefensiveWithLoSUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "FindDestinationWithLoS-Defensive",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveDefensiveWithLoSIfFirstAbility": {
            "nodeName": "MoveDefensiveWithLoSIfFirstAbility",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveDefensiveWithLoS"
        },
        "MoveDefensiveWithLoSIfFirstAbilityUnsafe": {
            "nodeName": "MoveDefensiveWithLoSIfFirstAbilityUnsafe",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveDefensiveWithLoSUnsafe"
        },
        "MoveStandard": {
            "nodeName": "MoveStandard",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveStandardUnsafe"
        },
        "MoveStandardUnsafe": {
            "nodeName": "MoveStandardUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "FindDestination-Standard",
            "Child2": "SelectAbility-StandardMove"
        },
        "MoveStandardIfFirstAbility": {
            "nodeName": "MoveStandardIfFirstAbility",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveStandard"
        },
        "MoveStandardWithLoS": {
            "nodeName": "MoveStandardWithLoS",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveStandardWithLoSUnsafe"
        },
        "MoveStandardWithLoSUnsafe": {
            "nodeName": "MoveStandardWithLoSUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "FindDestinationWithLoS-Standard",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveStandardWithLoSIfFirstAbility": {
            "nodeName": "MoveStandardWithLoSIfFirstAbility",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveStandardWithLoS"
        },
        "MoveStandardWithLoSIfFirstAbilityUnsafe": {
            "nodeName": "MoveStandardWithLoSIfFirstAbilityUnsafe",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveStandardWithLoSUnsafe"
        },
        "MoveAggressiveUnsafe": {
            "nodeName": "MoveAggressiveUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "FindDestinationWithLoS-Aggressive",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveAggressive": {
            "nodeName": "MoveAggressive",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveAggressiveUnsafe"
        },
        "MoveAggressiveIfFirstAbility": {
            "nodeName": "MoveAggressiveIfFirstAbility",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveAggressive"
        },
        "MoveAggressiveIfFirstAbilityUnsafe": {
            "nodeName": "MoveAggressiveIfFirstAbilityUnsafe",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveAggressiveUnsafe"
        },
        "NCMoveAggressiveUnsafe": {
            "nodeName": "NCMoveAggressiveUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "SetNoCoverMovement",
            "Child3": "FindDestinationWithLoS-Aggressive",
            "Child4": "SelectAbility-StandardMove"
        },
        "NCMoveAggressive": {
            "nodeName": "NCMoveAggressive",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "NCMoveAggressiveUnsafe"
        },
        "MoveNoCoverUnsafe": {
            "nodeName": "MoveNoCoverUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "SetNoCoverMovement",
            "Child3": "FindDestination-Fanatic",
            "Child4": "SelectAbility-StandardMove"
        },
        "MoveNoCover": {
            "nodeName": "MoveNoCover",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveNoCoverUnsafe"
        },
        "MoveNoCoverIfFirstAbility": {
            "nodeName": "MoveNoCoverIfFirstAbility",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveNoCover"
        },
        "MoveNoCoverIfFirstAbilityUnsafe": {
            "nodeName": "MoveNoCoverIfFirstAbilityUnsafe",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveNoCoverUnsafe"
        },
        "MoveHuntingUnsafe": {
            "nodeName": "MoveHuntingUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "FindDestinationForHunter",
            "Child2": "SelectAbility-StandardMove"
        },
        "MoveHunting": {
            "nodeName": "MoveHunting",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveHuntingUnsafe"
        },
        "FindDestinationForHunter": {
            "nodeName": "FindDestinationForHunter",
            "NodeType": "Selector",
            "Child0": "HuntWithLoS",
            "Child1": "BestHuntDestinationWithoutLoS"
        },
        "HuntWithLoS": {
            "nodeName": "HuntWithLoS",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "RestrictToEnemyLoS",
            "Child2": "FindDestination-Hunting"
        },
        "BestHuntDestinationWithoutLoS": {
            "nodeName": "BestHuntDestinationWithoutLoS",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "FindDestination-Hunting"
        },
        "MoveAdvanceToCover": {
            "nodeName": "MoveAdvanceToCover",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveAdvanceToCoverUnsafe"
        },
        "MoveAdvanceToCoverUnsafe": {
            "nodeName": "MoveAdvanceToCoverUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "FindDestination-AdvanceCover",
            "Child3": "SelectAbility-StandardMove"
        },
        "NCMoveAdvanceToCover": {
            "nodeName": "NCMoveAdvanceToCover",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "NCMoveAdvanceToCoverUnsafe"
        },
        "NCMoveAdvanceToCoverUnsafe": {
            "nodeName": "NCMoveAdvanceToCoverUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "SetNoCoverMovement",
            "Child3": "FindDestination-AdvanceCover",
            "Child4": "SelectAbility-StandardMove"
        },
        "MoveFlanking": {
            "nodeName": "MoveFlanking",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveFlankingUnsafe"
        },
        "MoveFlankingUnsafe": {
            "nodeName": "MoveFlankingUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "FindDestinationWithLoS-Flanking",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveFlankingIfFirstAbility": {
            "nodeName": "MoveFlankingIfFirstAbility",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveFlanking"
        },
        "MoveFlankingIfFirstAbilityUnsafe": {
            "nodeName": "MoveFlankingIfFirstAbilityUnsafe",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveFlankingUnsafe"
        },
        "NCMoveFlanking": {
            "nodeName": "NCMoveFlanking",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "NCMoveFlankingUnsafe"
        },
        "NCMoveFlankingUnsafe": {
            "nodeName": "NCMoveFlankingUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "SetNoCoverMovement",
            "Child3": "FindDestinationWithLoS-Flanking",
            "Child4": "SelectAbility-StandardMove"
        },
        "MoveMelee": {
            "nodeName": "MoveMelee",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveMeleeUnsafe"
        },
        "MoveMeleeUnsafe": {
            "nodeName": "MoveMeleeUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "FindMeleeDestination",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveMeleeDefensive": {
            "nodeName": "MoveMeleeDefensive",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveMeleeDefensiveUnsafe"
        },
        "MoveMeleeDefensiveUnsafe": {
            "nodeName": "MoveMeleeDefensiveUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "FindMeleeDestinationDefensive",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveMeleeFANATIC": {
            "nodeName": "MoveMeleeFANATIC",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveMeleeFANATICUnsafe"
        },
        "MoveMeleeFANATICUnsafe": {
            "nodeName": "MoveMeleeFANATICUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "FindMeleeDestinationFANATIC",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveToPotentialMeleeFANATIC": {
            "nodeName": "MoveToPotentialMeleeFANATIC",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveToPotentialMeleeFANATICUnsafe"
        },
        "MoveToPotentialMeleeFANATICUnsafe": {
            "nodeName": "MoveToPotentialMeleeFANATICUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "FindPotentialMeleeDestinationFANATIC",
            "Child2": "SelectAbility-StandardMove"
        },
        "MoveMeleeIfFirstAbility": {
            "nodeName": "MoveMeleeIfFirstAbility",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveMelee"
        },
        "MoveMeleeDefensiveIfFirstAbility": {
            "nodeName": "MoveMeleeDefensiveIfFirstAbility",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveMeleeDefensive"
        },
        "MoveMeleeIfFirstAbilityFANATIC": {
            "nodeName": "MoveMeleeIfFirstAbilityFANATIC",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveMeleeFANATIC"
        },
        "MoveToPotentialMeleeIfFirstAbilityFANATIC": {
            "nodeName": "MoveToPotentialMeleeIfFirstAbilityFANATIC",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "IncludeAlliesAsMeleeTargets",
            "Child2": "MoveToPotentialMeleeFANATIC"
        },
        "MoveMeleeIfFirstAbilityUnsafe": {
            "nodeName": "MoveMeleeIfFirstAbilityUnsafe",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveMeleeUnsafe"
        },
        "MoveMeleeDefensiveIfFirstAbilityUnsafe": {
            "nodeName": "MoveMeleeDefensiveIfFirstAbilityUnsafe",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveMeleeDefensiveUnsafe"
        },
        "MoveMeleeIfFirstAbilityFANATICUnsafe": {
            "nodeName": "MoveMeleeIfFirstAbilityFANATICUnsafe",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MoveMeleeFANATICUnsafe"
        },
        "MoveMeleeDash": {
            "nodeName": "MoveMeleeDash",
            "NodeType": "Selector",
            "Child0": "IfFirstActionMoveMeleeDash",
            "Child1": "MoveMelee"
        },
        "MoveMeleeDashUnsafe": {
            "nodeName": "MoveMeleeDashUnsafe",
            "NodeType": "Selector",
            "Child0": "IfFirstActionMoveMeleeDashUnsafe",
            "Child1": "MoveMeleeUnsafe"
        },
        "IfFirstActionMoveMeleeDash": {
            "nodeName": "IfFirstActionMoveMeleeDash",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "AttemptMoveMeleeDash"
        },
        "IfFirstActionMoveMeleeDashUnsafe": {
            "nodeName": "IfFirstActionMoveMeleeDashUnsafe",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "AttemptMoveMeleeDashUnsafe"
        },
        "AttemptMoveMeleeDash": {
            "nodeName": "AttemptMoveMeleeDash",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "AttemptMoveMeleeDashUnsafe"
        },
        "AttemptMoveMeleeDashUnsafe": {
            "nodeName": "AttemptMoveMeleeDashUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "UseDashMovement",
            "Child3": "FindMeleeDestination",
            "Child4": "SelectAbility-StandardMove"
        },
        "MoveMeleeDashFANATIC": {
            "nodeName": "MoveMeleeDashFANATIC",
            "NodeType": "Selector",
            "Child0": "IfFirstActionMoveMeleeDashFANATIC",
            "Child1": "MoveMeleeFANATIC"
        },
        "MoveMeleeDashFANATICUnsafe": {
            "nodeName": "MoveMeleeDashFANATICUnsafe",
            "NodeType": "Selector",
            "Child0": "IfFirstActionMoveMeleeDashFANATICUnsafe",
            "Child1": "MoveMeleeFANATICUnsafe"
        },
        "IfFirstActionMoveMeleeDashFANATIC": {
            "nodeName": "IfFirstActionMoveMeleeDashFANATIC",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "AttemptMoveMeleeDashFANATIC"
        },
        "IfFirstActionMoveMeleeDashFANATICUnsafe": {
            "nodeName": "IfFirstActionMoveMeleeDashFANATICUnsafe",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "AttemptMoveMeleeDashFANATICUnsafe"
        },
        "AttemptMoveMeleeDashFANATIC": {
            "nodeName": "AttemptMoveMeleeDashFANATIC",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "AttemptMoveMeleeDashFANATICUnsafe"
        },
        "AttemptMoveMeleeDashFANATICUnsafe": {
            "nodeName": "AttemptMoveMeleeDashFANATICUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "UseDashMovement",
            "Child3": "FindMeleeDestinationFANATIC",
            "Child4": "SelectAbility-StandardMove"
        },
        "MoveMeleePriorityTarget": {
            "nodeName": "MoveMeleePriorityTarget",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveMeleePriorityTargetUnsafe"
        },
        "MoveMeleePriorityTargetUnsafe": {
            "nodeName": "MoveMeleePriorityTargetUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "UseDashMovement",
            "Child3": "FindPriorityMeleeDestination",
            "Child4": "SelectAbility-StandardMove"
        },
        "FindMeleeDestination": {
            "nodeName": "FindMeleeDestination",
            "NodeType": "Sequence",
            "Child0": "IncludeCiviliansIfTerrorist",
            "Child1": "SelectPotentialMeleeTarget",
            "Child2": "RestrictToPotentialTargetRange-StandardMelee",
            "Child3": "FindRestrictedDestination-Melee"
        },
        "FindMeleeDestinationDefensive": {
            "nodeName": "FindMeleeDestinationDefensive",
            "NodeType": "Sequence",
            "Child0": "IncludeCiviliansIfTerrorist",
            "Child1": "SelectPotentialMeleeTarget",
            "Child2": "RestrictToPotentialTargetRange-StandardMelee",
            "Child3": "FindRestrictedDestination-MeleeDefensive"
        },
        "FindMeleeDestinationFANATIC": {
            "nodeName": "FindMeleeDestinationFANATIC",
            "NodeType": "Sequence",
            "Child0": "IncludeCiviliansIfTerrorist",
            "Child1": "SelectPotentialMeleeTarget",
            "Child2": "RestrictToPotentialTargetRange-StandardMelee",
            "Child3": "FindRestrictedDestination-MeleeFanatic"
        },
        "FindPriorityMeleeDestination": {
            "nodeName": "FindPriorityMeleeDestination",
            "NodeType": "Sequence",
            "Child0": "SelectPotentialMeleePriorityTarget",
            "Child1": "RestrictToPotentialTargetRange-StandardMelee",
            "Child2": "FindRestrictedDestination-MeleeFanatic"
        },
        "FindPotentialMeleeDestinationFANATIC": {
            "nodeName": "FindPotentialMeleeDestinationFANATIC",
            "NodeType": "Sequence",
            "Child0": "IncludeCiviliansIfTerrorist",
            "Child1": "RestrictToPotentialTargetRange-StandardMelee",
            "Child2": "FindRestrictedDestination-MeleeFanatic"
        },
        "TryTerroristMoveMeleeFANATICUnsafe": {
            "nodeName": "TryTerroristMoveMeleeFANATICUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "IncludeCiviliansIfTerrorist",
            "Child3": "FindMeleeDestinationFANATIC",
            "Child4": "SelectAbility-StandardMove"
        },
        "TryTerroristMoveMeleeFANATIC": {
            "nodeName": "TryTerroristMoveMeleeFANATIC",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "TryTerroristMoveMeleeFANATICUnsafe"
        },
        "MoveRandomUnsafe": {
            "nodeName": "MoveRandomUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "FindDestination-RandomNoCover",
            "Child2": "SelectAbility-StandardMove"
        },
        "MoveRandom": {
            "nodeName": "MoveRandom",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveRandomUnsafe"
        },
        "MoveStandardWithDestination": {
            "nodeName": "MoveStandardWithDestination",
            "NodeType": "Selector",
            "Child0": "MoveStandardWithDestinationUnsafe",
            "Child1": "DeleteTopAlertAndHeatSeek"
        },
        "MoveStandardWithDestinationUnsafe": {
            "nodeName": "MoveStandardWithDestinationUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "HasValidAlertDataLocation",
            "Child2": "FindAlertDataMovementDestination",
            "Child3": "SelectAbility-StandardMove"
        },
        "DeleteTopAlertAndHeatSeek": {
            "nodeName": "DeleteTopAlertAndHeatSeek",
            "NodeType": "Sequence",
            "Child0": "SSDeleteAlertDataIfValid",
            "Child1": "SelectHeatSeekMove"
        },
        "SSDeleteAlertDataIfValid": {
            "nodeName": "SSDeleteAlertDataIfValid",
            "NodeType": "Successor",
            "Child0": "DeleteAlertDataIfValid"
        },
        "DeleteAlertDataIfValid": {
            "nodeName": "DeleteAlertDataIfValid",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "HasValidAlertDataLocation",
            "Child2": "DeleteCurrentAlertData"
        },
        "HeatSeekNearestUnconcealed": {
            "nodeName": "HeatSeekNearestUnconcealed",
            "NodeType": "Action",
        },
        "SelectHeatSeekMove": {
            "nodeName": "SelectHeatSeekMove",
            "NodeType": "Sequence",
            "Child0": "UseDashMovement",
            "Child1": "HeatSeekNearestUnconcealed",
            "Child2": "SelectAbility-StandardMove"
        },
        "SetAlertDataStack": {
            "nodeName": "SetAlertDataStack",
            "NodeType": "Action",
        },
        "SetNextAlertData": {
            "nodeName": "SetNextAlertData",
            "NodeType": "Action",
        },
        "DeleteCurrentAlertData": {
            "nodeName": "DeleteCurrentAlertData",
            "NodeType": "Action",
        },
        "UpdateBestAlertData": {
            "nodeName": "UpdateBestAlertData",
            "NodeType": "Action",
        },
        "AlertDataMovementUseCover": {
            "nodeName": "AlertDataMovementUseCover",
            "NodeType": "Action",
        },
        "AlertDataMovementIgnoreCover": {
            "nodeName": "AlertDataMovementIgnoreCover",
            "NodeType": "Action",
        },
        "FindAlertDataMovementDestination": {
            "nodeName": "FindAlertDataMovementDestination",
            "NodeType": "Action",
        },
        "AlertDataIsAbsoluteKnowledge": {
            "nodeName": "AlertDataIsAbsoluteKnowledge",
            "NodeType": "Condition"
        },
        "AlertDataWasSoundMade": {
            "nodeName": "AlertDataWasSoundMade",
            "NodeType": "Condition"
        },
        "AlertDataWasEnemyThere": {
            "nodeName": "AlertDataWasEnemyThere",
            "NodeType": "Condition"
        },
        "AlertDataIsCorpseThere": {
            "nodeName": "AlertDataIsCorpseThere",
            "NodeType": "Condition"
        },
        "AlertDataIsAggressive": {
            "nodeName": "AlertDataIsAggressive",
            "NodeType": "Condition"
        },
        "AlertDataTileIsVisible": {
            "nodeName": "AlertDataTileIsVisible",
            "NodeType": "Condition"
        },
        "AlertDataTileNotVisible": {
            "nodeName": "AlertDataTileNotVisible",
            "NodeType": "Inverter",
            "Child0": "AlertDataTileIsVisible"
        },
        "AlertDataHasTag-Defend": {
            "nodeName": "AlertDataHasTag-Defend",
            "NodeType": "Condition"
        },
        "AlertDataHasTag-Advance": {
            "nodeName": "AlertDataHasTag-Advance",
            "NodeType": "Condition"
        },
        "AlertDataIsType-SeesSpottedUnit": {
            "nodeName": "AlertDataIsType-SeesSpottedUnit",
            "NodeType": "Condition"
        },
        "AlertDataIsType-ThrottlingBeacon": {
            "nodeName": "AlertDataIsType-ThrottlingBeacon",
            "NodeType": "Condition"
        },
        "AlertDataIsType-MapwideAlert": {
            "nodeName": "AlertDataIsType-MapwideAlert",
            "NodeType": "Condition"
        },
        "AlertDataIsType-TookDamage": {
            "nodeName": "AlertDataIsType-TookDamage",
            "NodeType": "Condition"
        },
        "AlertDataIsType-TakingFire": {
            "nodeName": "AlertDataIsType-TakingFire",
            "NodeType": "Condition"
        },
        "AlertDataIsType-DetectedNewCorpse": {
            "nodeName": "AlertDataIsType-DetectedNewCorpse",
            "NodeType": "Condition"
        },
        "AlertDataIsType-DetectedAllyTakingDamage": {
            "nodeName": "AlertDataIsType-DetectedAllyTakingDamage",
            "NodeType": "Condition"
        },
        "AlertDataIsType-DetectedSound": {
            "nodeName": "AlertDataIsType-DetectedSound",
            "NodeType": "Condition"
        },
        "AlertDataIsType-AlertedByYell": {
            "nodeName": "AlertDataIsType-AlertedByYell",
            "NodeType": "Condition"
        },
        "AlertDataIsType-AlertedByCommLink": {
            "nodeName": "AlertDataIsType-AlertedByCommLink",
            "NodeType": "Condition"
        },
        "AlertDataIsType-CivilianRaisedAlarm": {
            "nodeName": "AlertDataIsType-CivilianRaisedAlarm",
            "NodeType": "Condition"
        },
        "AlertDataIsType-XCOMAchievedObjective": {
            "nodeName": "AlertDataIsType-XCOMAchievedObjective",
            "NodeType": "Condition"
        },
        "AlertDataIsType-SeesExplosion": {
            "nodeName": "AlertDataIsType-SeesExplosion",
            "NodeType": "Condition"
        },
        "AlertDataIsType-SeesSmoke": {
            "nodeName": "AlertDataIsType-SeesSmoke",
            "NodeType": "Condition"
        },
        "AlertDataIsType-SeesFire": {
            "nodeName": "AlertDataIsType-SeesFire",
            "NodeType": "Condition"
        },
        "AlertDataIsType-SeesAlertedAllies": {
            "nodeName": "AlertDataIsType-SeesAlertedAllies",
            "NodeType": "Condition"
        },
        "AlertDataWasSoundScary": {
            "nodeName": "AlertDataWasSoundScary",
            "NodeType": "StatCondition",
            "Param0": "AlertDataRadius",
            "Param1": ">:",
            "Param2": "10"
        },
        "IsAlertDataKismet": {
            "nodeName": "IsAlertDataKismet",
            "NodeType": "Selector",
            "Child0": "AlertDataHasTag-Defend",
            "Child1": "AlertDataHasTag-Advance"
        },
        "IsAlertDataNotKismet": {
            "nodeName": "IsAlertDataNotKismet",
            "NodeType": "Inverter",
            "Child0": "IsAlertDataKismet"
        },
        "IsAlertDataScary": {
            "nodeName": "IsAlertDataScary",
            "NodeType": "Selector",
            "Child0": "AlertDataIsType-TakingFire",
            "Child1": "AlertDataIsType-DetectedAllyTakingDamage",
            "Child2": "AlertDataIsType-SeesExplosion",
            "Child3": "AlertDataIsType-SeesAlertedAllies"
        },
        "IsAlertDataNOTScary": {
            "nodeName": "IsAlertDataNOTScary",
            "NodeType": "Inverter",
            "Child0": "IsAlertDataScary"
        },
        "IfAlertDataIsScary": {
            "nodeName": "IfAlertDataIsScary",
            "NodeType": "Selector",
            "Child0": "ScoreIfAlertDataScary",
            "Child1": "AddToAlertDataScore_0"
        },
        "ScoreIfAlertDataScary": {
            "nodeName": "ScoreIfAlertDataScary",
            "NodeType": "Sequence",
            "Child0": "IsAlertDataScary",
            "Child1": "AddToAlertDataScore_50"
        },
        "PurgeAlertDataIfNotScary": {
            "nodeName": "PurgeAlertDataIfNotScary",
            "NodeType": "Sequence",
            "Child0": "IsAlertDataNOTScary",
            "Child1": "DeleteCurrentAlertData"
        },
        "HasValidAlertDataLocation": {
            "nodeName": "HasValidAlertDataLocation",
            "NodeType": "Condition"
        },
        "IterateAlertDataForVisibility": {
            "nodeName": "IterateAlertDataForVisibility",
            "NodeType": "RepeatUntilFail",
            "Child0": "CheckVisibilityOnAlert"
        },
        "CheckVisibilityOnAlert": {
            "nodeName": "CheckVisibilityOnAlert",
            "NodeType": "Sequence",
            "Child0": "SetNextAlertData",
            "Child1": "SSScoreAlertDataVisibility",
            "Child2": "UpdateBestAlertData",
            "Child3": "EarlyExitIfFoundValidAlert"
        },
        "SSScoreAlertDataVisibility": {
            "nodeName": "SSScoreAlertDataVisibility",
            "NodeType": "Successor",
            "Child0": "ScoreAlertDataVisibility"
        },
        "ScoreAlertDataVisibility": {
            "nodeName": "ScoreAlertDataVisibility",
            "NodeType": "Sequence",
            "Child0": "AlertDataTileIsVisible",
            "Child1": "AddToAlertDataScore_100"
        },
        "EarlyExitIfFoundValidAlert": {
            "nodeName": "EarlyExitIfFoundValidAlert",
            "NodeType": "Inverter",
            "Child0": "HasValidAlertDataLocation"
        },
        "GenericAlertHandler": {
            "nodeName": "GenericAlertHandler",
            "NodeType": "Selector",
            "Child0": "GenericOrangeMovement",
            "Child1": "GenericYellowMovement",
            "Child2": "SelectHeatSeekMove"
        },
        "GenericOrangeMovement": {
            "nodeName": "GenericOrangeMovement",
            "NodeType": "Sequence",
            "Child0": "IsOrangeAlert",
            "Child1": "TrySelectOrangeAlertAction"
        },
        "GenericYellowMovement": {
            "nodeName": "GenericYellowMovement",
            "NodeType": "Sequence",
            "Child0": "IsYellowAlert",
            "Child1": "TrySelectYellowAlertAction"
        },
        "NoEnemySpotted": {
            "nodeName": "NoEnemySpotted",
            "NodeType": "Inverter",
            "Child0": "AlertDataIsAbsoluteKnowledge"
        },
        "IsEnemySpotted": {
            "nodeName": "IsEnemySpotted",
            "NodeType": "Selector",
            "Child0": "IsRedAlert",
            "Child1": "IsOrangeAlert"
        },
        "TrySelectOrangeAlertAction": {
            "nodeName": "TrySelectOrangeAlertAction",
            "NodeType": "Sequence",
            "Child0": "SelectAlertData",
            "Child1": "HandleAlertData"
        },
        "SelectAlertData": {
            "nodeName": "SelectAlertData",
            "NodeType": "Sequence",
            "Child0": "SetAlertDataStack",
            "Child1": "GenericSelectBestAlert",
            "Child2": "HasValidAlertDataLocation"
        },
        "HandleAlertData": {
            "nodeName": "HandleAlertData",
            "NodeType": "Selector",
            "Child0": "TryAttackPriorityTarget",
            "Child1": "MoveToAlertData"
        },
        "MoveToAlertData": {
            "nodeName": "MoveToAlertData",
            "NodeType": "Sequence",
            "Child0": "SetAlertDataStack",
            "Child1": "GenericSelectBestAlert",
            "Child2": "HasValidAlertDataLocation",
            "Child3": "AlertDataMovementUseCover",
            "Child4": "MoveStandardWithDestination"
        },
        "TrySelectYellowAlertAction": {
            "nodeName": "TrySelectYellowAlertAction",
            "NodeType": "Selector",
            "Child0": "TryAttackPriorityTarget",
            "Child1": "YellowAlertMove"
        },
        "YellowAlertMove": {
            "nodeName": "YellowAlertMove",
            "NodeType": "Sequence",
            "Child0": "SetAlertDataStack",
            "Child1": "GenericSelectBestAlert",
            "Child2": "HasValidAlertDataLocation",
            "Child3": "MoveStandardWithDestination"
        },
        "HuntEnemy": {
            "nodeName": "HuntEnemy",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "NotLastActionPoint",
            "Child2": "SetAlertDataStack",
            "Child3": "GenericSelectBestAlert",
            "Child4": "HasValidAlertDataLocation",
            "Child5": "MoveStandardWithDestination"
        },
        "HuntEnemyWithCover": {
            "nodeName": "HuntEnemyWithCover",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "SetAlertDataStack",
            "Child2": "GenericSelectBestAlert",
            "Child3": "HasValidAlertDataLocation",
            "Child4": "AlertDataMovementUseCover",
            "Child5": "MoveStandardWithDestination"
        },
        "HuntEnemyUnsafe": {
            "nodeName": "HuntEnemyUnsafe",
            "NodeType": "Sequence",
            "Child0": "SetAlertDataStack",
            "Child1": "GenericSelectBestAlert",
            "Child2": "HasValidAlertDataLocation",
            "Child3": "MoveStandardWithDestinationUnsafe"
        },
        "MoveToAlertIfNotVisible": {
            "nodeName": "MoveToAlertIfNotVisible",
            "NodeType": "Sequence",
            "Child0": "HasValidAlertDataLocation",
            "Child1": "AlertDataTileNotVisible",
            "Child2": "AlertDataMovementUseCover",
            "Child3": "MoveStandardWithDestination"
        },
        "MoveToAlert": {
            "nodeName": "MoveToAlert",
            "NodeType": "Selector",
            "Child0": "TryAlertMoveWithCover",
            "Child1": "TakeAlertMoveWithoutCover"
        },
        "TryAlertMoveWithCover": {
            "nodeName": "TryAlertMoveWithCover",
            "NodeType": "Sequence",
            "Child0": "AlertDataMovementUseCover",
            "Child1": "MoveStandardWithDestination"
        },
        "TakeAlertMoveWithoutCover": {
            "nodeName": "TakeAlertMoveWithoutCover",
            "NodeType": "Sequence",
            "Child0": "AlertDataMovementIgnoreCover",
            "Child1": "MoveStandardWithDestination"
        },
        "MoveToAlertUnsafe": {
            "nodeName": "MoveToAlertUnsafe",
            "NodeType": "Selector",
            "Child0": "TryAlertMoveWithCoverUnsafe",
            "Child1": "TakeAlertMoveWithoutCoverUnsafe"
        },
        "TryAlertMoveWithCoverUnsafe": {
            "nodeName": "TryAlertMoveWithCoverUnsafe",
            "NodeType": "Sequence",
            "Child0": "AlertDataMovementUseCover",
            "Child1": "MoveStandardWithDestinationUnsafe"
        },
        "TakeAlertMoveWithoutCoverUnsafe": {
            "nodeName": "TakeAlertMoveWithoutCoverUnsafe",
            "NodeType": "Sequence",
            "Child0": "AlertDataMovementIgnoreCover",
            "Child1": "MoveStandardWithDestinationUnsafe"
        },
        "GenericSelectBestAlert": {
            "nodeName": "GenericSelectBestAlert",
            "NodeType": "RepeatUntilFail",
            "Child0": "GenericEvaluateAlertData"
        },
        "GenericEvaluateAlertData": {
            "nodeName": "GenericEvaluateAlertData",
            "NodeType": "Sequence",
            "Child0": "SetNextAlertData",
            "Child1": "GenericScoreAlertData",
            "Child2": "UpdateBestAlertData"
        },
        "GenericScoreAlertData": {
            "nodeName": "GenericScoreAlertData",
            "NodeType": "Sequence",
            "Child0": "SSScoreInvalidAlertData",
            "Child1": "IfAlertIsSpottedTarget",
            "Child2": "IfAlertDataIsScary",
            "Child3": "IfAlertIsSpottedCorpse",
            "Child4": "IfAlertIsHeardNoise",
            "Child5": "IfAlertIsDangerous",
            "Child6": "ScoreAlertDataAge",
            "Child7": "ScoreAlertDataDistance"
        },
        "IfAlertIsSpottedTarget": {
            "nodeName": "IfAlertIsSpottedTarget",
            "NodeType": "Selector",
            "Child0": "ScoreAlert_AbsoluteKnowledge",
            "Child1": "ScoreAlert_FormerKnowledge",
            "Child2": "AddToAlertDataScore_0"
        },
        "ScoreAlert_AbsoluteKnowledge": {
            "nodeName": "ScoreAlert_AbsoluteKnowledge",
            "NodeType": "Sequence",
            "Child0": "AlertDataIsAbsoluteKnowledge",
            "Child1": "AddToAlertDataScore_100"
        },
        "ScoreAlert_FormerKnowledge": {
            "nodeName": "ScoreAlert_FormerKnowledge",
            "NodeType": "Sequence",
            "Child0": "AlertDataWasEnemyThere",
            "Child1": "AddToAlertDataScore_50"
        },
        "IfAlertIsSpottedCorpse": {
            "nodeName": "IfAlertIsSpottedCorpse",
            "NodeType": "Selector",
            "Child0": "ScoreAlert_SpottedCorpse",
            "Child1": "AddToAlertDataScore_0"
        },
        "ScoreAlert_SpottedCorpse": {
            "nodeName": "ScoreAlert_SpottedCorpse",
            "NodeType": "Sequence",
            "Child0": "AlertDataIsCorpseThere",
            "Child1": "AddToAlertDataScore_30"
        },
        "IfAlertIsHeardNoise": {
            "nodeName": "IfAlertIsHeardNoise",
            "NodeType": "Selector",
            "Child0": "ScoreAlert_HeardNoise",
            "Child1": "AddToAlertDataScore_0"
        },
        "ScoreAlert_HeardNoise": {
            "nodeName": "ScoreAlert_HeardNoise",
            "NodeType": "Sequence",
            "Child0": "AlertDataWasSoundMade",
            "Child1": "AddToAlertDataScore_15",
            "Child2": "IfAlertNoiseIsScary"
        },
        "IfAlertNoiseIsScary": {
            "nodeName": "IfAlertNoiseIsScary",
            "NodeType": "Selector",
            "Child0": "ScoreAlert_NoiseScary",
            "Child1": "AddToAlertDataScore_0"
        },
        "ScoreAlert_NoiseScary": {
            "nodeName": "ScoreAlert_NoiseScary",
            "NodeType": "Sequence",
            "Child0": "AlertDataWasSoundScary",
            "Child1": "AddToAlertDataScore_10"
        },
        "IfAlertIsDangerous": {
            "nodeName": "IfAlertIsDangerous",
            "NodeType": "Selector",
            "Child0": "ScoreAlert_Dangerous",
            "Child1": "AddToAlertDataScore_0"
        },
        "ScoreAlert_Dangerous": {
            "nodeName": "ScoreAlert_Dangerous",
            "NodeType": "Sequence",
            "Child0": "AlertDataIsAggressive",
            "Child1": "AddToAlertDataScore_25"
        },
        "ScoreAlertDataAge": {
            "nodeName": "ScoreAlertDataAge",
            "NodeType": "Selector",
            "Child0": "IsAlertDataKismet",
            "Child1": "IfAlertDataOld",
            "Child2": "IfAlertDataStale",
            "Child3": "IfAlertDataRecent",
            "Child4": "IfAlertDataFresh",
            "Child5": "AddToAlertDataScore_0"
        },
        "IfAlertDataFresh": {
            "nodeName": "IfAlertDataFresh",
            "NodeType": "Sequence",
            "Child0": "IsAlertDataFresh",
            "Child1": "AddToAlertDataScore_-5"
        },
        "IsAlertDataFresh": {
            "nodeName": "IsAlertDataFresh",
            "NodeType": "StatCondition",
            "Param0": "AlertDataAge",
            "Param1": ">:",
            "Param2": "1"
        },
        "IfAlertDataRecent": {
            "nodeName": "IfAlertDataRecent",
            "NodeType": "Sequence",
            "Child0": "IsAlertDataRecent",
            "Child1": "AddToAlertDataScore_-10"
        },
        "IsAlertDataRecent": {
            "nodeName": "IsAlertDataRecent",
            "NodeType": "StatCondition",
            "Param0": "AlertDataAge",
            "Param1": ">:",
            "Param2": "2"
        },
        "IfAlertDataStale": {
            "nodeName": "IfAlertDataStale",
            "NodeType": "Sequence",
            "Child0": "IsAlertDataStale",
            "Child1": "PurgeAlertDataIfNotScary",
            "Child2": "AddToAlertDataScore_-15"
        },
        "IsAlertDataStale": {
            "nodeName": "IsAlertDataStale",
            "NodeType": "StatCondition",
            "Param0": "AlertDataAge",
            "Param1": ">:",
            "Param2": "4"
        },
        "IfAlertDataOld": {
            "nodeName": "IfAlertDataOld",
            "NodeType": "Sequence",
            "Child0": "IsAlertDataOld",
            "Child1": "DeleteCurrentAlertData",
            "Child2": "AddToAlertDataScore_-100"
        },
        "IsAlertDataOld": {
            "nodeName": "IsAlertDataOld",
            "NodeType": "StatCondition",
            "Param0": "AlertDataAge",
            "Param1": ">:",
            "Param2": "6"
        },
        "SSScoreInvalidAlertData": {
            "nodeName": "SSScoreInvalidAlertData",
            "NodeType": "Successor",
            "Child0": "ScoreInvalidAlertData"
        },
        "ScoreInvalidAlertData": {
            "nodeName": "ScoreInvalidAlertData",
            "NodeType": "Sequence",
            "Child0": "IsAlertNotValidTarget",
            "Child1": "AddToAlertDataScore_-500"
        },
        "IsAlertNotValidTarget": {
            "nodeName": "IsAlertNotValidTarget",
            "NodeType": "Selector",
            "Child0": "IsAlertNotValidTarget_UnitIsNotAttackable",
            "Child1": "IsAlertNotValidTarget_LastResortUnit"
        },
        "IsAlertNotValidTarget_UnitIsNotAttackable": {
            "nodeName": "IsAlertNotValidTarget_UnitIsNotAttackable",
            "NodeType": "Sequence",
            "Child0": "TargetIsNotAttackable",
            "Child1": "DeleteCurrentAlertData"
        },
        "IsAlertNotValidTarget_LastResortUnit": {
            "nodeName": "IsAlertNotValidTarget_LastResortUnit",
            "NodeType": "Sequence",
            "Child0": "HasNonLastResortEnemies",
            "Child1": "IsLastResortTarget"
        },
        "ScoreAlertDataDistance": {
            "nodeName": "ScoreAlertDataDistance",
            "NodeType": "Selector",
            "Child0": "IfAlertDataFar",
            "Child1": "IfAlertDataThreeMoves",
            "Child2": "IfAlertDataTwoMoves",
            "Child3": "AddToAlertDataScore_20"
        },
        "IfAlertDataTwoMoves": {
            "nodeName": "IfAlertDataTwoMoves",
            "NodeType": "Sequence",
            "Child0": "IsAlertDataTwoMoves",
            "Child1": "AddToAlertDataScore_15"
        },
        "IsAlertDataTwoMoves": {
            "nodeName": "IsAlertDataTwoMoves",
            "NodeType": "StatCondition",
            "Param0": "AlertDataDistance",
            "Param1": ">",
            "Param2": "12"
        },
        "IfAlertDataThreeMoves": {
            "nodeName": "IfAlertDataThreeMoves",
            "NodeType": "Sequence",
            "Child0": "IsAlertDataThreeMoves",
            "Child1": "AddToAlertDataScore_10"
        },
        "IsAlertDataThreeMoves": {
            "nodeName": "IsAlertDataThreeMoves",
            "NodeType": "StatCondition",
            "Param0": "AlertDataDistance",
            "Param1": ">",
            "Param2": "24"
        },
        "IfAlertDataFar": {
            "nodeName": "IfAlertDataFar",
            "NodeType": "Sequence",
            "Child0": "IsAlertDataFar",
            "Child1": "AddToAlertDataScore_5"
        },
        "IsAlertDataFar": {
            "nodeName": "IsAlertDataFar",
            "NodeType": "StatCondition",
            "Param0": "AlertDataDistance",
            "Param1": ">",
            "Param2": "36"
        },
        "AlertScoreRandom": {
            "nodeName": "AlertScoreRandom",
            "NodeType": "RandSelector",
            "Child0": "AddToAlertDataScore_10",
            "Child1": "AddToAlertDataScore_20",
            "Child2": "AddToAlertDataScore_30",
            "Child3": "AddToAlertDataScore_40",
            "Child4": "AddToAlertDataScore_50",
            "Child5": "AddToAlertDataScore_60 "
        },
        "ScoreAlertFor_Defend": {
            "nodeName": "ScoreAlertFor_Defend",
            "NodeType": "Selector",
            "Child0": "ScoreAlertIfDefend",
            "Child1": "AddToAlertDataScore_0"
        },
        "ScoreAlertIfDefend": {
            "nodeName": "ScoreAlertIfDefend",
            "NodeType": "Sequence",
            "Child0": "AlertDataHasTag-Defend",
            "Child1": "AddToAlertDataScore_50"
        },
        "ScoreAlertFor_Advance": {
            "nodeName": "ScoreAlertFor_Advance",
            "NodeType": "Selector",
            "Child0": "ScoreAlertIfAdvance",
            "Child1": "AddToAlertDataScore_0"
        },
        "ScoreAlertIfAdvance": {
            "nodeName": "ScoreAlertIfAdvance",
            "NodeType": "Sequence",
            "Child0": "AlertDataHasTag-Advance",
            "Child1": "AddToAlertDataScore_50"
        },
        "SetNextTarget": {
            "nodeName": "SetNextTarget",
            "NodeType": "Action",
        },
        "HasUnconcealedEnemies": {
            "nodeName": "HasUnconcealedEnemies",
            "NodeType": "Condition"
        },
        "UpdateBestTarget": {
            "nodeName": "UpdateBestTarget",
            "NodeType": "Action",
        },
        "TargetHasHighestShotHitChance": {
            "nodeName": "TargetHasHighestShotHitChance",
            "NodeType": "Condition"
        },
        "GenericSelectBestTarget": {
            "nodeName": "GenericSelectBestTarget",
            "NodeType": "RepeatUntilFail",
            "Child0": "GenericEvaluateTarget"
        },
        "GenericEvaluateTarget": {
            "nodeName": "GenericEvaluateTarget",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "GenericTargetEvaluations",
            "Child2": "UpdateBestTarget"
        },
        "GenericTargetEvaluations": {
            "nodeName": "GenericTargetEvaluations",
            "NodeType": "Sequence",
            "Child0": "TargetScoreHitChance",
            "Child1": "TargetScoreHealth",
            "Child2": "TargetScoreFlanking",
            "Child3": "TargetScoreMarked",
            "Child4": "ApplyDifficultyModifiers",
            "Child5": "TargetScoreCivilian",
            "Child6": "AvoidBoundAndPanickedTargets"
        },
        "SelectPriorityTarget": {
            "nodeName": "SelectPriorityTarget",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluatePriorityTarget"
        },
        "EvaluatePriorityTarget": {
            "nodeName": "EvaluatePriorityTarget",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "ScoreIfTarget_HighestShotHitChance",
            "Child2": "TargetScorePriority",
            "Child3": "TargetScoreCivilian",
            "Child4": "UpdateBestTarget"
        },
        "SelectTarget_Favorable": {
            "nodeName": "SelectTarget_Favorable",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateTargetFavorable"
        },
        "EvaluateTargetFavorable": {
            "nodeName": "EvaluateTargetFavorable",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "TargetScoreHitChanceFavorable",
            "Child2": "TargetScoreHealth",
            "Child3": "ApplyDifficultyModifiers",
            "Child4": "TargetScoreCivilian",
            "Child5": "UpdateBestTarget"
        },
        "SelectTarget_Opportunist": {
            "nodeName": "SelectTarget_Opportunist",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateTargetOPPORTUNIST"
        },
        "EvaluateTargetOPPORTUNIST": {
            "nodeName": "EvaluateTargetOPPORTUNIST",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "TargetScoreHitChanceOPPORTUNIST",
            "Child2": "TargetScoreHealth",
            "Child3": "TargetScoreFlanking",
            "Child4": "ApplyDifficultyModifiers",
            "Child5": "TargetScoreCivilian",
            "Child6": "UpdateBestTarget"
        },
        "GenericSelectTargetSomewhatRandomly": {
            "nodeName": "GenericSelectTargetSomewhatRandomly",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateTargetSomewhatRandomly"
        },
        "EvaluateTargetSomewhatRandomly": {
            "nodeName": "EvaluateTargetSomewhatRandomly",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "GenericScoreTargetRandomly",
            "Child2": "TargetScoreMarked",
            "Child3": "ApplyDifficultyModifiers",
            "Child4": "UpdateBestTarget"
        },
        "GenericSelectTargetRandomly": {
            "nodeName": "GenericSelectTargetRandomly",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateTargetRandomly"
        },
        "EvaluateTargetRandomly": {
            "nodeName": "EvaluateTargetRandomly",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "GenericScoreTargetRandomly",
            "Child2": "UpdateBestTarget"
        },
        "GenericScoreTargetRandomly": {
            "nodeName": "GenericScoreTargetRandomly",
            "NodeType": "Successor",
            "Child0": "GenericScoreTargetRandomlySequence"
        },
        "GenericScoreTargetRandomlySequence": {
            "nodeName": "GenericScoreTargetRandomlySequence",
            "NodeType": "RandSelector",
            "Child0": "AddToTargetScore_1",
            "Child1": "AddToTargetScore_10",
            "Child2": "AddToTargetScore_20",
            "Child3": "AddToTargetScore_30",
            "Child4": "AddToTargetScore_40",
            "Child5": "AddToTargetScore_50 "
        },
        "SelectAnyTargetRandomly_PreferEnemies": {
            "nodeName": "SelectAnyTargetRandomly_PreferEnemies",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateTargetRandomly_PreferEnemies"
        },
        "EvaluateTargetRandomly_PreferEnemies": {
            "nodeName": "EvaluateTargetRandomly_PreferEnemies",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "GenericScoreTargetRandomly",
            "Child2": "TargetScorePreferEnemies",
            "Child3": "TargetScoreFlanking",
            "Child4": "UpdateBestTarget"
        },
        "TargetScorePreferEnemies": {
            "nodeName": "TargetScorePreferEnemies",
            "NodeType": "Selector",
            "Child0": "ScoreIfEnemy",
            "Child1": "AddToTargetScore_0"
        },
        "ScoreIfEnemy": {
            "nodeName": "ScoreIfEnemy",
            "NodeType": "Sequence",
            "Child0": "TargetIsEnemy",
            "Child1": "AddToTargetScore_10"
        },
        "NoTargetsAvailable": {
            "nodeName": "NoTargetsAvailable",
            "NodeType": "Inverter",
            "Child0": "HaveAnyTargets"
        },
        "HaveAnyTargets": {
            "nodeName": "HaveAnyTargets",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StandardShot",
            "Child1": "FindAnyTarget",
            "Child2": "HasValidTarget-StandardShot"
        },
        "FindAnyTarget": {
            "nodeName": "FindAnyTarget",
            "NodeType": "RepeatUntilFail",
            "Child0": "SimpleEvaluateTarget"
        },
        "SimpleEvaluateTarget": {
            "nodeName": "SimpleEvaluateTarget",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "TargetScorePreferEnemies",
            "Child2": "UpdateBestTarget"
        },
        "IsTargetValidBasedOnLastResortEffects": {
            "nodeName": "IsTargetValidBasedOnLastResortEffects",
            "NodeType": "Condition"
        },
        "HasNonLastResortEnemies": {
            "nodeName": "HasNonLastResortEnemies",
            "NodeType": "Condition"
        },
        "IsTargetLastResortWithOtherOptionsAvailable": {
            "nodeName": "IsTargetLastResortWithOtherOptionsAvailable",
            "NodeType": "Sequence",
            "Child0": "IsLastResortTarget",
            "Child1": "HasNonLastResortEnemies"
        },
        "IsLastResortTarget": {
            "nodeName": "IsLastResortTarget",
            "NodeType": "Condition"
        },
        "SelectBestSuppressionTarget": {
            "nodeName": "SelectBestSuppressionTarget",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateSuppressionTarget"
        },
        "EvaluateSuppressionTarget": {
            "nodeName": "EvaluateSuppressionTarget",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "TargetScoreUnsuppressedByClosestDistance",
            "Child2": "TargetScoreInvalidateCivilians",
            "Child3": "UpdateBestTarget"
        },
        "SelectClosestPotentialSuppressionTarget": {
            "nodeName": "SelectClosestPotentialSuppressionTarget",
            "NodeType": "Sequence",
            "Child0": "SetPotentialTargetStack",
            "Child1": "SelectClosestUnsuppressedTarget",
            "Child2": "HasValidTarget-Potential"
        },
        "SelectClosestUnsuppressedTarget": {
            "nodeName": "SelectClosestUnsuppressedTarget",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluatePotentialSuppressionTarget"
        },
        "EvaluatePotentialSuppressionTarget": {
            "nodeName": "EvaluatePotentialSuppressionTarget",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "TargetScoreUnsuppressedByClosestDistance",
            "Child2": "AvoidBoundAndPanickedTargets",
            "Child3": "TargetScoreInvalidateCivilians",
            "Child4": "UpdateBestTarget"
        },
        "TargetScoreUnsuppressedByClosestDistance": {
            "nodeName": "TargetScoreUnsuppressedByClosestDistance",
            "NodeType": "Successor",
            "Child0": "ScoreUnsuppressedByClosestDistance"
        },
        "ScoreUnsuppressedByClosestDistance": {
            "nodeName": "ScoreUnsuppressedByClosestDistance",
            "NodeType": "Sequence",
            "Child0": "TargetIsNotSuppressed",
            "Child1": "TargetIsEnemy",
            "Child2": "TargetScoreByScaledDistance-1",
            "Child3": "AvoidBoundAndPanickedTargets",
            "Child4": "AddToTargetScore_100"
        },
        "TargetIsNotSuppressed": {
            "nodeName": "TargetIsNotSuppressed",
            "NodeType": "Inverter",
            "Child0": "TargetAffectedByEffect-Suppression"
        },
        "TargetScoreByScaledDistance-1": {
            "nodeName": "TargetScoreByScaledDistance-1",
            "NodeType": "Action",
            "Param0": "-1"
        },
        "ShootOrSuppressIfNoGoodShot": {
            "nodeName": "ShootOrSuppressIfNoGoodShot",
            "NodeType": "Selector",
            "Child0": "ConsiderSuppression",
            "Child1": "TryShootOrReloadOrOverwatch"
        },
        "ConsiderSuppression": {
            "nodeName": "ConsiderSuppression",
            "NodeType": "Sequence",
            "Child0": "AllShotPercentagesBelow50",
            "Child1": "SuppressIfAvailable"
        },
        "PsiEvaluateTargetsGeneric": {
            "nodeName": "PsiEvaluateTargetsGeneric",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "TargetScorePsiAttack",
            "Child2": "TargetScoreHighestSoldierRank",
            "Child3": "TargetScoreHealth_HighFirst",
            "Child4": "SometimesRandomizeTarget",
            "Child5": "ApplyDifficultyModifiers",
            "Child6": "AvoidBoundAndPanickedTargets",
            "Child7": "TargetScoreInvalidateCivilians",
            "Child8": "UpdateBestTarget"
        },
        "PsiEvaluateTargetsMindControl": {
            "nodeName": "PsiEvaluateTargetsMindControl",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "TargetScoreMindControl",
            "Child2": "TargetScoreHighestSoldierRank",
            "Child3": "TargetScoreHealth_HighFirst",
            "Child4": "TargetScoreInvalidateCivilians",
            "Child5": "AvoidBoundAndPanickedTargets",
            "Child6": "UpdateBestTarget"
        },
        "TargetScorePsiAttack": {
            "nodeName": "TargetScorePsiAttack",
            "NodeType": "Selector",
            "Child0": "ScoreIfConfused",
            "Child1": "ScoreIfPanicked",
            "Child2": "ScoreIfDisoriented",
            "Child3": "AddToTargetScore_0"
        },
        "ScoreIfConfused": {
            "nodeName": "ScoreIfConfused",
            "NodeType": "Sequence",
            "Child0": "TargetAffectedByEffect-Confused",
            "Child1": "AddToTargetScore_30"
        },
        "ScoreIfPanicked": {
            "nodeName": "ScoreIfPanicked",
            "NodeType": "Sequence",
            "Child0": "TargetAffectedByEffect-Panicked",
            "Child1": "AddToTargetScore_20"
        },
        "ScoreIfDisoriented": {
            "nodeName": "ScoreIfDisoriented",
            "NodeType": "Sequence",
            "Child0": "TargetAffectedByEffect-Disoriented",
            "Child1": "AddToTargetScore_10"
        },
        "TargetScoreMindControl": {
            "nodeName": "TargetScoreMindControl",
            "NodeType": "Selector",
            "Child0": "ScoreIfTargetWillWeakened",
            "Child1": "AddToTargetScore_-10"
        },
        "ScoreIfTargetWillWeakened": {
            "nodeName": "ScoreIfTargetWillWeakened",
            "NodeType": "Sequence",
            "Child0": "TargetWillWeakened",
            "Child1": "AddToTargetScore_50"
        },
        "SometimesRandomizeTarget": {
            "nodeName": "SometimesRandomizeTarget",
            "NodeType": "RandSelector",
            "Child0": "AddToTargetScore_0",
            "Param0": "1",
            "Child1": "AddToTargetScore_10",
            "Param1": "2",
            "Child2": "AddToTargetScore_20",
            "Param2": "6",
            "Child3": "AddToTargetScore_30",
            "Param3": "2",
            "Child4": "AddToTargetScore_40",
            "Param4": "1 "
        },
        "TargetScoreByHitChanceValue-1": {
            "nodeName": "TargetScoreByHitChanceValue-1",
            "NodeType": "Action",
            "Param0": "1",
            "Param1": "StandardShot"
        },
        "TargetScoreHitChance": {
            "nodeName": "TargetScoreHitChance",
            "NodeType": "Selector",
            "Child0": "TargetScoreHitChanceUnlikely",
            "Child1": "TargetScoreHitChanceProbable",
            "Child2": "AddToTargetScore_40"
        },
        "TargetScoreHitChanceUnlikely": {
            "nodeName": "TargetScoreHitChanceUnlikely",
            "NodeType": "Sequence",
            "Child0": "TargetHitChanceLow",
            "Child1": "AddToTargetScore_10"
        },
        "TargetScoreHitChanceProbable": {
            "nodeName": "TargetScoreHitChanceProbable",
            "NodeType": "Sequence",
            "Child0": "TargetHitChanceHigh",
            "Child1": "AddToTargetScore_70"
        },
        "TargetScoreHitChanceOPPORTUNIST": {
            "nodeName": "TargetScoreHitChanceOPPORTUNIST",
            "NodeType": "Selector",
            "Child0": "TargetScoreHitChanceUnlikelyOPPORTUNIST",
            "Child1": "TargetScoreHitChanceProbableOPPORTUNIST",
            "Child2": "AddToTargetScore_-20"
        },
        "TargetScoreHitChanceUnlikelyOPPORTUNIST": {
            "nodeName": "TargetScoreHitChanceUnlikelyOPPORTUNIST",
            "NodeType": "Sequence",
            "Child0": "TargetHitChanceLow",
            "Child1": "AddToTargetScore_-100"
        },
        "TargetScoreHitChanceProbableOPPORTUNIST": {
            "nodeName": "TargetScoreHitChanceProbableOPPORTUNIST",
            "NodeType": "Sequence",
            "Child0": "TargetHitChanceHigh",
            "Child1": "AddToTargetScore_0"
        },
        "TargetScoreHitChanceFavorable": {
            "nodeName": "TargetScoreHitChanceFavorable",
            "NodeType": "Selector",
            "Child0": "TargetScoreHitChanceUnlikelyFavorable",
            "Child1": "TargetScoreHitChanceProbableFavorable",
            "Child2": "AddToTargetScore_40"
        },
        "TargetScoreHitChanceUnlikelyFavorable": {
            "nodeName": "TargetScoreHitChanceUnlikelyFavorable",
            "NodeType": "Sequence",
            "Child0": "TargetHitChanceLow",
            "Child1": "AddToTargetScore_-10"
        },
        "TargetScoreHitChanceProbableFavorable": {
            "nodeName": "TargetScoreHitChanceProbableFavorable",
            "NodeType": "Sequence",
            "Child0": "TargetHitChanceHigh",
            "Child1": "AddToTargetScore_70"
        },
        "TargetScoreHealth": {
            "nodeName": "TargetScoreHealth",
            "NodeType": "Selector",
            "Child0": "ScoreIfKillShot",
            "Child1": "ScoreIfTargetLowHP",
            "Child2": "ScoreIfTargetWounded",
            "Child3": "AddToTargetScore_0"
        },
        "ScoreIfKillShot": {
            "nodeName": "ScoreIfKillShot",
            "NodeType": "Sequence",
            "Child0": "TargetIsKillable",
            "Child1": "AddToTargetScore_15"
        },
        "ScoreIfTargetLowHP": {
            "nodeName": "ScoreIfTargetLowHP",
            "NodeType": "Sequence",
            "Child0": "TargetHasLowHP",
            "Child1": "AddToTargetScore_10"
        },
        "ScoreIfTargetWounded": {
            "nodeName": "ScoreIfTargetWounded",
            "NodeType": "Sequence",
            "Child0": "TargetWounded",
            "Child1": "AddToTargetScore_5"
        },
        "ApplyDifficultyModifiers": {
            "nodeName": "ApplyDifficultyModifiers",
            "NodeType": "Successor",
            "Child0": "ApplyDifficultyModifiersBase"
        },
        "ApplyDifficultyModifiersBase": {
            "nodeName": "ApplyDifficultyModifiersBase",
            "NodeType": "Sequence",
            "Child0": "IsDifficultyLow",
            "Child1": "AddToTargetScore_20",
            "Child2": "::DistributeAttacks"
        },
        "AvoidBoundAndPanickedTargets": {
            "nodeName": "AvoidBoundAndPanickedTargets",
            "NodeType": "Selector",
            "Child0": "ScoreIfTargetBoundOrPanicked",
            "Child1": "AddToTargetScore_1"
        },
        "ScoreIfTargetBoundOrPanicked": {
            "nodeName": "ScoreIfTargetBoundOrPanicked",
            "NodeType": "Sequence",
            "Child0": "IsTargetLastResortWithOtherOptionsAvailable",
            "Child1": "AddToTargetScore_-1000"
        },
        "::DistributeAttacks": {
            "nodeName": "::DistributeAttacks",
            "NodeType": "Selector",
            "Child0": "ScoreTargetIfMarked",
            "Child1": "AddToTargetScore_20"
        },
        "Sectopod::DistributeAttacks": {
            "nodeName": "Sectopod::DistributeAttacks",
            "NodeType": "Selector",
            "Child0": "ScoreIfTargetHasBeenAttackedTwice",
            "Child1": "ScoreIfTargetHasBeenAttackedOnce",
            "Child2": "AddToTargetScore_30"
        },
        "ScoreIfTargetHasBeenAttackedTwice": {
            "nodeName": "ScoreIfTargetHasBeenAttackedTwice",
            "NodeType": "Sequence",
            "Child0": "TargetHasBeenAttackedTwice",
            "Child1": "AddToTargetScore_0"
        },
        "ScoreIfTargetHasBeenAttackedOnce": {
            "nodeName": "ScoreIfTargetHasBeenAttackedOnce",
            "NodeType": "Sequence",
            "Child0": "TargetHasBeenAttackedOnce",
            "Child1": "AddToTargetScore_5"
        },
        "TargetScoreHealth_HighFirst": {
            "nodeName": "TargetScoreHealth_HighFirst",
            "NodeType": "Selector",
            "Child0": "PenalizeIfKillShot",
            "Child1": "ScoreIfTarget_MaxHP",
            "Child2": "ScoreIfTarget_HighHP",
            "Child3": "AddToTargetScore_5"
        },
        "PenalizeIfKillShot": {
            "nodeName": "PenalizeIfKillShot",
            "NodeType": "Sequence",
            "Child0": "TargetIsKillable",
            "Child1": "AddToTargetScore_0"
        },
        "ScoreIfTarget_MaxHP": {
            "nodeName": "ScoreIfTarget_MaxHP",
            "NodeType": "Sequence",
            "Child0": "TargetHasMaxHP",
            "Child1": "AddToTargetScore_20"
        },
        "ScoreIfTarget_HighHP": {
            "nodeName": "ScoreIfTarget_HighHP",
            "NodeType": "Sequence",
            "Child0": "TargetHasHighHP",
            "Child1": "AddToTargetScore_10"
        },
        "TargetScoreFlanking": {
            "nodeName": "TargetScoreFlanking",
            "NodeType": "Selector",
            "Child0": "ScoreTargetIfFlanked",
            "Child1": "AddToTargetScore_0"
        },
        "ScoreTargetIfFlanked": {
            "nodeName": "ScoreTargetIfFlanked",
            "NodeType": "Sequence",
            "Child0": "IsFlankingTarget",
            "Child1": "TargetIsEnemy",
            "Child2": "AddToTargetScore_50"
        },
        "TargetScoreHighestSoldierRank": {
            "nodeName": "TargetScoreHighestSoldierRank",
            "NodeType": "Selector",
            "Child0": "ScoreIfTarget_HasHighestRank",
            "Child1": "AddToTargetScore_0"
        },
        "ScoreIfTarget_HasHighestRank": {
            "nodeName": "ScoreIfTarget_HasHighestRank",
            "NodeType": "Sequence",
            "Child0": "TargetHasHighestSoldierRank",
            "Child1": "AddToTargetScore_5"
        },
        "TargetHasHighestSoldierRank": {
            "nodeName": "TargetHasHighestSoldierRank",
            "NodeType": "Condition"
        },
        "TargetScoreHighestShotHitChance": {
            "nodeName": "TargetScoreHighestShotHitChance",
            "NodeType": "Successor",
            "Child0": "ScoreIfTarget_HighestShotHitChance"
        },
        "ScoreIfTarget_HighestShotHitChance": {
            "nodeName": "ScoreIfTarget_HighestShotHitChance",
            "NodeType": "Sequence",
            "Child0": "TargetHasHighestShotHitChance",
            "Child1": "AddToTargetScore_10"
        },
        "TargetScoreHighestShotHitChance_50": {
            "nodeName": "TargetScoreHighestShotHitChance_50",
            "NodeType": "Successor",
            "Child0": "ScoreIfTarget_HighestShotHitChance_50"
        },
        "ScoreIfTarget_HighestShotHitChance_50": {
            "nodeName": "ScoreIfTarget_HighestShotHitChance_50",
            "NodeType": "Sequence",
            "Child0": "TargetHasHighestShotHitChance",
            "Child1": "AddToTargetScore_50"
        },
        "TargetScoreMarked": {
            "nodeName": "TargetScoreMarked",
            "NodeType": "Selector",
            "Child0": "ScoreTargetIfMarked",
            "Child1": "AddToTargetScore_0"
        },
        "ScoreTargetIfMarked": {
            "nodeName": "ScoreTargetIfMarked",
            "NodeType": "Sequence",
            "Child0": "TargetAffectedByEffect-MarkedTarget",
            "Child1": "AddToTargetScore_45"
        },
        "TargetScorePriority": {
            "nodeName": "TargetScorePriority",
            "NodeType": "Selector",
            "Child0": "ScoreTargetIfPriority",
            "Child1": "AddToTargetScore_0"
        },
        "ScoreTargetIfPriority": {
            "nodeName": "ScoreTargetIfPriority",
            "NodeType": "Sequence",
            "Child0": "TargetIsPriorityUnit",
            "Child1": "AddToTargetScore_60"
        },
        "TargetScoreCivilian": {
            "nodeName": "TargetScoreCivilian",
            "NodeType": "Successor",
            "Child0": "ScoreTargetIfCivilianByJob"
        },
        "TargetScoreInvalidateCivilians": {
            "nodeName": "TargetScoreInvalidateCivilians",
            "NodeType": "Selector",
            "Child0": "ScoreTargetOutIfCivilian",
            "Child1": "AddToTargetScore_0"
        },
        "ScoreTargetOutIfCivilian": {
            "nodeName": "ScoreTargetOutIfCivilian",
            "NodeType": "Sequence",
            "Child0": "TargetIsCivilian",
            "Child1": "AddToTargetScore_-1000"
        },
        "ScoreTargetIfCivilianByJob": {
            "nodeName": "ScoreTargetIfCivilianByJob",
            "NodeType": "Sequence",
            "Child0": "TargetIsCivilian",
            "Child1": "ScoreCivilianByJob"
        },
        "ScoreCivilianByJob": {
            "nodeName": "ScoreCivilianByJob",
            "NodeType": "Selector",
            "Child0": "ScoreCivilianIfLimitHit",
            "Child1": "ScoreCivilianIfActuallyFaceless",
            "Child2": "ScoreCivilianIfTerrorist",
            "Child3": "AddToTargetScore_-10"
        },
        "ScoreCivilianIfActuallyFaceless": {
            "nodeName": "ScoreCivilianIfActuallyFaceless",
            "NodeType": "Sequence",
            "Child0": "TargetIsAlien",
            "Child1": "AddToTargetScore_-1000"
        },
        "ScoreCivilianIfTerrorist": {
            "nodeName": "ScoreCivilianIfTerrorist",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Terrorist",
            "Child1": "AddToTargetScore_40"
        },
        "ScoreCivilianIfLimitHit": {
            "nodeName": "ScoreCivilianIfLimitHit",
            "NodeType": "Sequence",
            "Child0": "CivilianKillLimitReached",
            "Child1": "AddToTargetScore_-1000"
        },
        "CivilianKillLimitReached": {
            "nodeName": "CivilianKillLimitReached",
            "NodeType": "Inverter",
            "Child0": "NumKilledCiviliansIsLessThanTurnCount"
        },
        "TargetScoreKillAdventNotAliens": {
            "nodeName": "TargetScoreKillAdventNotAliens",
            "NodeType": "Selector",
            "Child0": "ScoreTargetIfAllyAndAdvent",
            "Child1": "ScoreTargetIfAllyAndNotAdvent",
            "Child2": "AddToTargetScore_0"
        },
        "ScoreTargetIfAllyAndAdvent": {
            "nodeName": "ScoreTargetIfAllyAndAdvent",
            "NodeType": "Sequence",
            "Child0": "TargetIsAlly",
            "Child1": "TargetIsAdvent",
            "Child2": "AddToTargetScore_1"
        },
        "ScoreTargetIfAllyAndNotAdvent": {
            "nodeName": "ScoreTargetIfAllyAndNotAdvent",
            "NodeType": "Sequence",
            "Child0": "TargetIsAlly",
            "Child1": "AddToTargetScore_-100"
        },
        "TargetScoreTeamVisibility": {
            "nodeName": "TargetScoreTeamVisibility",
            "NodeType": "Selector",
            "Child0": "ScoreIfTarget_HasHighestVisibility",
            "Child1": "AddToTargetScore_0"
        },
        "ScoreIfTarget_HasHighestVisibility": {
            "nodeName": "ScoreIfTarget_HasHighestVisibility",
            "NodeType": "Sequence",
            "Child0": "TargetHasHighestTeamVisibility",
            "Child1": "AddToTargetScore_5"
        },
        "TargetHasHighestTeamVisibility": {
            "nodeName": "TargetHasHighestTeamVisibility",
            "NodeType": "Condition"
        },
        "TargetScoreReachableForMelee": {
            "nodeName": "TargetScoreReachableForMelee",
            "NodeType": "Selector",
            "Child0": "ScoreUnReachable",
            "Child1": "AddToTargetScore_1"
        },
        "TargetIsNotAlly": {
            "nodeName": "TargetIsNotAlly",
            "NodeType": "Inverter",
            "Child0": "TargetIsAlly"
        },
        "TargetCanBecomeZombie": {
            "nodeName": "TargetCanBecomeZombie",
            "NodeType": "Condition"
        },
        "TargetCanNotBecomeZombie": {
            "nodeName": "TargetCanNotBecomeZombie",
            "NodeType": "Inverter",
            "Child0": "TargetCanBecomeZombie"
        },
        "TargetScoreReachableAllyAnimaConsume": {
            "nodeName": "TargetScoreReachableAllyAnimaConsume",
            "NodeType": "Selector",
            "Child0": "TargetIsNotAlly",
            "Child1": "TargetCanNotBecomeZombie",
            "Child2": "TargetIsVisibleToPlayer",
            "Child3": "ScoreForAnimaConsumeAlly"
        },
        "ScoreForAnimaConsumeAlly": {
            "nodeName": "ScoreForAnimaConsumeAlly",
            "NodeType": "Sequence",
            "Child0": "ScoreAnimaConsumeForRange",
            "Child1": "ScoreIfTargetLowHP",
            "Child2": "AddToTargetScore_1"
        },
        "ScoreAnimaConsumeForRange": {
            "nodeName": "ScoreAnimaConsumeForRange",
            "NodeType": "Selector",
            "Child0": "ScoreInAttackRange",
            "Child1": "ScoreUnreachable",
            "Child2": "AddToTargetScore_1"
        },
        "ScoreInAttackRange": {
            "nodeName": "ScoreInAttackRange",
            "NodeType": "Sequence",
            "Child0": "IsTargetInAttackRange-StandardMelee",
            "Child1": "AddToTargetScore_100"
        },
        "ScoreUnReachable": {
            "nodeName": "ScoreUnReachable",
            "NodeType": "Sequence",
            "Child0": "TargetNotInMovementRange",
            "Child1": "AddToTargetScore_-100"
        },
        "TargetScoreClosestIfInRange": {
            "nodeName": "TargetScoreClosestIfInRange",
            "NodeType": "Successor",
            "Child0": "ScoreClosestIfInRange"
        },
        "ScoreClosestIfInRange": {
            "nodeName": "ScoreClosestIfInRange",
            "NodeType": "Sequence",
            "Child0": "TargetIsClosestValidTarget",
            "Child1": "IsTargetInMovementRange-StandardMelee",
            "Child2": "AddToTargetScore_100"
        },
        "SelectScoreHitChanceByJob": {
            "nodeName": "SelectScoreHitChanceByJob",
            "NodeType": "Selector",
            "Child0": "ScoreHitIfSoldier",
            "Child1": "ScoreHitIfFlanker",
            "Child2": "ScoreHitIfLeader",
            "Child3": "ScoreHitIfSupport",
            "Child4": "TargetScoreHitChance"
        },
        "ScoreHitIfSoldier": {
            "nodeName": "ScoreHitIfSoldier",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Soldier",
            "Child1": "TargetScoreHitChanceUnlikely"
        },
        "ScoreHitIfFlanker": {
            "nodeName": "ScoreHitIfFlanker",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Flanker",
            "Child1": "TargetScoreHitChanceOPPORTUNIST"
        },
        "ScoreHitIfLeader": {
            "nodeName": "ScoreHitIfLeader",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Leader",
            "Child1": "TargetScoreHitChance"
        },
        "ScoreHitIfSupport": {
            "nodeName": "ScoreHitIfSupport",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Support",
            "Child1": "TargetScoreHitChanceProbable"
        },
        "IsAbilityAvailable-Reload": {
            "nodeName": "IsAbilityAvailable-Reload",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-StandardShot": {
            "nodeName": "IsAbilityAvailable-StandardShot",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-StandardMove": {
            "nodeName": "IsAbilityAvailable-StandardMove",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-Overwatch": {
            "nodeName": "IsAbilityAvailable-Overwatch",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-ThrowGrenade": {
            "nodeName": "IsAbilityAvailable-ThrowGrenade",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-FragGrenade": {
            "nodeName": "IsAbilityAvailable-FragGrenade",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-Yell": {
            "nodeName": "IsAbilityAvailable-Yell",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-CallReinforcements": {
            "nodeName": "IsAbilityAvailable-CallReinforcements",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-Suppression": {
            "nodeName": "IsAbilityAvailable-Suppression",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-HunkerDown": {
            "nodeName": "IsAbilityAvailable-HunkerDown",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-StandardMelee": {
            "nodeName": "IsAbilityAvailable-StandardMelee",
            "NodeType": "Condition"
        },
        "IsAbilityReady-StandardMelee": {
            "nodeName": "IsAbilityReady-StandardMelee",
            "NodeType": "Condition"
        },
        "SelectAbility-Reload": {
            "nodeName": "SelectAbility-Reload",
            "NodeType": "Action",
        },
        "SelectAbility-StandardShot": {
            "nodeName": "SelectAbility-StandardShot",
            "NodeType": "Action",
        },
        "SelectAbility-StandardMove": {
            "nodeName": "SelectAbility-StandardMove",
            "NodeType": "Action",
        },
        "SelectAbility-Overwatch": {
            "nodeName": "SelectAbility-Overwatch",
            "NodeType": "Action",
        },
        "SelectAbility-ThrowGrenade": {
            "nodeName": "SelectAbility-ThrowGrenade",
            "NodeType": "Action",
        },
        "SelectAbility-Yell": {
            "nodeName": "SelectAbility-Yell",
            "NodeType": "Action",
        },
        "SelectAbility-CallReinforcements": {
            "nodeName": "SelectAbility-CallReinforcements",
            "NodeType": "Action",
        },
        "SelectAbility-StandardMelee": {
            "nodeName": "SelectAbility-StandardMelee",
            "NodeType": "Action",
        },
        "SelectAbility-Suppression": {
            "nodeName": "SelectAbility-Suppression",
            "NodeType": "Action",
        },
        "SelectAbility-HunkerDown": {
            "nodeName": "SelectAbility-HunkerDown",
            "NodeType": "Action",
        },
        "ShouldPatrol": {
            "nodeName": "ShouldPatrol",
            "NodeType": "Selector",
            "Child0": "IsGreenAlert",
            "Child1": "NotYetRevealed"
        },
        "GenericGreenMovement": {
            "nodeName": "GenericGreenMovement",
            "NodeType": "Sequence",
            "Child0": "ShouldPatrol",
            "Child1": "GreenAlertActionSelector"
        },
        "GreenAlertActionSelector": {
            "nodeName": "GreenAlertActionSelector",
            "NodeType": "Selector",
            "Child0": "TryAttackPriorityTarget",
            "Child1": "SSSelectGreenAlertAction"
        },
        "SSSelectGreenAlertAction": {
            "nodeName": "SSSelectGreenAlertAction",
            "NodeType": "Successor",
            "Child0": "SelectGreenAlertAction"
        },
        "SelectGreenAlertAction": {
            "nodeName": "SelectGreenAlertAction",
            "NodeType": "Action",
        },
        "IgnoreHazards": {
            "nodeName": "IgnoreHazards",
            "NodeType": "Action",
        },
        "SkipTurnifGreenAlert": {
            "nodeName": "SkipTurnifGreenAlert",
            "NodeType": "Sequence",
            "Child0": "IsGreenAlert",
            "Child1": "SkipMove"
        },
        "DoCower": {
            "nodeName": "DoCower",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-HunkerDown",
            "Child1": "SelectAbility-HunkerDown"
        },
        "MoveBackWithLOSIfFlanked": {
            "nodeName": "MoveBackWithLOSIfFlanked",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "IsFlanked",
            "Child2": "IsAbilityAvailable-StandardMove",
            "Child3": "FindDestinationWithLoS-Defensive",
            "Child4": "SelectAbility-StandardMove"
        },
        "MoveBackWithLOSIfFlankedFirstAction": {
            "nodeName": "MoveBackWithLOSIfFlankedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "IsFlanked",
            "Child2": "IsAbilityAvailable-StandardMove",
            "Child3": "FindDestinationWithLoS-Defensive",
            "Child4": "SelectAbility-StandardMove"
        },
        "MoveForwardWithLOSIfFlanked": {
            "nodeName": "MoveForwardWithLOSIfFlanked",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "IsFlanked",
            "Child2": "IsAbilityAvailable-StandardMove",
            "Child3": "FindDestinationWithLoS-AdvanceCover",
            "Child4": "SelectAbility-StandardMove"
        },
        "MoveForwardWithLOSIfFlankedFirstAction": {
            "nodeName": "MoveForwardWithLOSIfFlankedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "IsFlanked",
            "Child2": "IsAbilityAvailable-StandardMove",
            "Child3": "FindDestinationWithLoS-AdvanceCover",
            "Child4": "SelectAbility-StandardMove"
        },
        "DoIfFlankedMove": {
            "nodeName": "DoIfFlankedMove",
            "NodeType": "Sequence",
            "Child0": "CheckIfNeedToMove",
            "Child1": "FlankedMoveSelector"
        },
        "CheckIfNeedToMove": {
            "nodeName": "CheckIfNeedToMove",
            "NodeType": "Selector",
            "Child0": "IsFlanked",
            "Child1": "IsInDangerousArea"
        },
        "CheckIfInDanger": {
            "nodeName": "CheckIfInDanger",
            "NodeType": "Selector",
            "Child0": "IsFlanked",
            "Child1": "HasMoreThanOneOverwatcher",
            "Child2": "IsInDangerousArea"
        },
        "CheckNotInDanger": {
            "nodeName": "CheckNotInDanger",
            "NodeType": "Inverter",
            "Child0": "CheckIfInDanger"
        },
        "FlankedMoveSelector": {
            "nodeName": "FlankedMoveSelector",
            "NodeType": "Selector",
            "Child0": "MoveAdvanceToCoverUnsafe",
            "Child1": "FallBack"
        },
        "DoIfOnDangerousGround": {
            "nodeName": "DoIfOnDangerousGround",
            "NodeType": "Sequence",
            "Child0": "IsInDangerousArea",
            "Child1": "FlankedMoveSelector"
        },
        "LastActionAndFlanked": {
            "nodeName": "LastActionAndFlanked",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "IsFlanked",
            "Child2": "ShootIfIdeal_OtherwiseMove"
        },
        "DoNoiseAlert": {
            "nodeName": "DoNoiseAlert",
            "NodeType": "Action",
        },
        "NeedsReload": {
            "nodeName": "NeedsReload",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Reload",
            "Child1": "OutOfAmmo",
            "Child2": "SelectAbility-Reload"
        },
        "TryShootOrReload": {
            "nodeName": "TryShootOrReload",
            "NodeType": "Selector",
            "Child0": "ShootIfAvailable",
            "Child1": "NeedsReload"
        },
        "TryShootOrReloadOrOverwatch": {
            "nodeName": "TryShootOrReloadOrOverwatch",
            "NodeType": "Selector",
            "Child0": "ConsiderTakingOverwatch",
            "Child1": "ShootIfAvailable",
            "Child2": "NeedsReload"
        },
        "ConsiderTakingOverwatch": {
            "nodeName": "ConsiderTakingOverwatch",
            "NodeType": "Selector",
            "Child0": "TryTwoTurnAttackSupport",
            "Child1": "ConsiderTakingOverwatchAllUnits",
            "Child2": "ConsiderTakingOverwatchVIP",
            "Child3": "ConsiderTakingOverwatchEvac"
        },
        "ConsiderTakingOverwatchAllUnits": {
            "nodeName": "ConsiderTakingOverwatchAllUnits",
            "NodeType": "Sequence",
            "Child0": "AllShotPercentagesBelow50",
            "Child1": "NoOverwatchingTeammates",
            "Child2": "RandFilter25Overwatch"
        },
        "AllShotPercentagesBelow50": {
            "nodeName": "AllShotPercentagesBelow50",
            "NodeType": "StatCondition",
            "Param0": "TopHitChance",
            "Param1": "<",
            "Param2": "50"
        },
        "AllShotPercentagesAtOrBelow50": {
            "nodeName": "AllShotPercentagesAtOrBelow50",
            "NodeType": "StatCondition",
            "Param0": "TopHitChance",
            "Param1": "<:",
            "Param2": "50"
        },
        "RandFilter25Overwatch": {
            "nodeName": "RandFilter25Overwatch",
            "NodeType": "RandFilter",
            "Child0": "TryOverwatch",
            "Param0": "25"
        },
        "ConsiderTakingOverwatchVIP": {
            "nodeName": "ConsiderTakingOverwatchVIP",
            "NodeType": "Sequence",
            "Child0": "VIPVisible",
            "Child1": "RandOverwatch75_15"
        },
        "ConsiderTakingOverwatchEvac": {
            "nodeName": "ConsiderTakingOverwatchEvac",
            "NodeType": "Sequence",
            "Child0": "EvacInRangeAndEnemyVisible",
            "Child1": "RandOverwatch100_75"
        },
        "VIPVisible": {
            "nodeName": "VIPVisible",
            "NodeType": "Sequence",
            "Child0": "HasEnemyVIP",
            "Child1": "CanSeeLivingVIPOrCarriedVIP"
        },
        "CanSeeLivingVIPOrCarriedVIP": {
            "nodeName": "CanSeeLivingVIPOrCarriedVIP",
            "NodeType": "Condition"
        },
        "EvacInRangeAndEnemyVisible": {
            "nodeName": "EvacInRangeAndEnemyVisible",
            "NodeType": "Sequence",
            "Child0": "EvacWithinVisRange",
            "Child1": "AnyLivingEnemyVisible"
        },
        "NoVisibleEnemies": {
            "nodeName": "NoVisibleEnemies",
            "NodeType": "StatCondition",
            "Param0": "VisibleEnemyCount",
            "Param1": "::",
            "Param2": "0"
        },
        "AnyLivingEnemyVisible": {
            "nodeName": "AnyLivingEnemyVisible",
            "NodeType": "StatCondition",
            "Param0": "VisibleEnemyCount",
            "Param1": ">",
            "Param2": "0"
        },
        "MultipleEnemiesVisible": {
            "nodeName": "MultipleEnemiesVisible",
            "NodeType": "StatCondition",
            "Param0": "VisibleEnemyCount",
            "Param1": ">",
            "Param2": "1"
        },
        "AnyAlliesVisible": {
            "nodeName": "AnyAlliesVisible",
            "NodeType": "StatCondition",
            "Param0": "VisibleAllyCount",
            "Param1": ">",
            "Param2": "0"
        },
        "EvacWithinVisRange": {
            "nodeName": "EvacWithinVisRange",
            "NodeType": "Condition"
        },
        "RandOverwatch100_75": {
            "nodeName": "RandOverwatch100_75",
            "NodeType": "Selector",
            "Child0": "FirstOverwatch100",
            "Child1": "RandSecondOverwatch75"
        },
        "RandOverwatch75_15": {
            "nodeName": "RandOverwatch75_15",
            "NodeType": "Selector",
            "Child0": "RandFirstOverwatch75",
            "Child1": "RandSecondOverwatch15"
        },
        "RandOverwatch75": {
            "nodeName": "RandOverwatch75",
            "NodeType": "RandFilter",
            "Child0": "TryOverwatch",
            "Param0": "75"
        },
        "RandOverwatch15": {
            "nodeName": "RandOverwatch15",
            "NodeType": "RandFilter",
            "Child0": "TryOverwatch",
            "Param0": "15"
        },
        "RandOverwatch50": {
            "nodeName": "RandOverwatch50",
            "NodeType": "RandFilter",
            "Child0": "TryOverwatch",
            "Param0": "50"
        },
        "RandOverwatch100_50": {
            "nodeName": "RandOverwatch100_50",
            "NodeType": "Selector",
            "Child0": "FirstOverwatch100",
            "Child1": "RandOverwatch50"
        },
        "FirstOverwatch100": {
            "nodeName": "FirstOverwatch100",
            "NodeType": "Sequence",
            "Child0": "NoOverwatchingTeammates",
            "Child1": "TryOverwatch"
        },
        "RandFirstOverwatch75": {
            "nodeName": "RandFirstOverwatch75",
            "NodeType": "Sequence",
            "Child0": "NoOverwatchingTeammates",
            "Child1": "RandOverwatch75"
        },
        "RandSecondOverwatch75": {
            "nodeName": "RandSecondOverwatch75",
            "NodeType": "Sequence",
            "Child0": "OneOverwatchingTeammate",
            "Child1": "RandOverwatch75"
        },
        "RandSecondOverwatch15": {
            "nodeName": "RandSecondOverwatch15",
            "NodeType": "Sequence",
            "Child0": "OneOverwatchingTeammate",
            "Child1": "RandOverwatch15"
        },
        "TryTwoTurnAttackSupportIfSafe": {
            "nodeName": "TryTwoTurnAttackSupportIfSafe",
            "NodeType": "Sequence",
            "Child0": "NotInDangerousArea",
            "Child1": "TryTwoTurnAttackSupport"
        },
        "TryTwoTurnAttackSupport": {
            "nodeName": "TryTwoTurnAttackSupport",
            "NodeType": "Sequence",
            "Child0": "HasTwoTurnAttackTargets",
            "Child1": "TryOverwatchTwoTurnTarget"
        },
        "HasTwoTurnAttackTargets": {
            "nodeName": "HasTwoTurnAttackTargets",
            "NodeType": "Condition"
        },
        "IsTargetInTwoTurnAttackArea": {
            "nodeName": "IsTargetInTwoTurnAttackArea",
            "NodeType": "Condition"
        },
        "TryOverwatchTwoTurnTarget": {
            "nodeName": "TryOverwatchTwoTurnTarget",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Overwatch",
            "Child1": "RandOverwatch100_50"
        },
        "TryMeleeOrShoot": {
            "nodeName": "TryMeleeOrShoot",
            "NodeType": "Selector",
            "Child0": "ShootIfAvailable",
            "Child1": "StandardMeleeAttack"
        },
        "ShootIfAvailable": {
            "nodeName": "ShootIfAvailable",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardShot",
            "Child1": "SelectTargetForStandardShot",
            "Child2": "SelectAbility-StandardShot"
        },
        "ShootIfIdeal": {
            "nodeName": "ShootIfIdeal",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardShot",
            "Child1": "SelectTargetForStandardShot_Ideal",
            "Child2": "SelectAbility-StandardShot"
        },
        "ShootIfIdeal_OtherwiseMove": {
            "nodeName": "ShootIfIdeal_OtherwiseMove",
            "NodeType": "Selector",
            "Child0": "ShootIfIdeal",
            "Child1": "MoveDefensiveWithLoS",
            "Child2": "MoveStandard"
        },
        "AttackIfFavorable": {
            "nodeName": "AttackIfFavorable",
            "NodeType": "Selector",
            "Child0": "TryGrenade",
            "Child1": "ShootIfAvailable_Favorable"
        },
        "ShootIfAvailable_Favorable": {
            "nodeName": "ShootIfAvailable_Favorable",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardShot",
            "Child1": "SelectTargetForStandardShot_Favorable",
            "Child2": "SelectAbility-StandardShot"
        },
        "AttackIfIdeal": {
            "nodeName": "AttackIfIdeal",
            "NodeType": "Selector",
            "Child0": "TryMoveThenGrenade",
            "Child1": "ShootIfAvailable_Opportunist"
        },
        "ShootIfAvailable_Opportunist": {
            "nodeName": "ShootIfAvailable_Opportunist",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardShot",
            "Child1": "SelectTargetForStandardShot_Ideal",
            "Child2": "SelectAbility-StandardShot"
        },
        "TryOverwatch": {
            "nodeName": "TryOverwatch",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Overwatch",
            "Child1": "SelectAbility-Overwatch"
        },
        "OverwatchIfTargetAvailable": {
            "nodeName": "OverwatchIfTargetAvailable",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Overwatch",
            "Child1": "IsOverwatchTargetAvailable",
            "Child2": "SelectAbility-Overwatch"
        },
        "IsOverwatchTargetAvailable": {
            "nodeName": "IsOverwatchTargetAvailable",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StandardShot",
            "Child1": "SelectOverwatchTarget",
            "Child2": "HasValidTarget-StandardShot"
        },
        "SelectOverwatchTarget": {
            "nodeName": "SelectOverwatchTarget",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateOverwatchTarget"
        },
        "EvaluateOverwatchTarget": {
            "nodeName": "EvaluateOverwatchTarget",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "TargetScoreHitChance",
            "Child2": "ApplyDifficultyModifiers",
            "Child3": "TargetScoreInvalidateCivilians",
            "Child4": "UpdateBestTarget"
        },
        "TryOverwatchIfLastAction": {
            "nodeName": "TryOverwatchIfLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "ConsiderTakingOverwatch"
        },
        "HasValidTarget-StandardShot": {
            "nodeName": "HasValidTarget-StandardShot",
            "NodeType": "Condition"
        },
        "SetTargetStack-StandardShot": {
            "nodeName": "SetTargetStack-StandardShot",
            "NodeType": "Action",
        },
        "SelectTargetForStandardShot": {
            "nodeName": "SelectTargetForStandardShot",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StandardShot",
            "Child1": "GenericSelectBestTarget",
            "Child2": "HasValidTarget-StandardShot"
        },
        "SelectTargetForStandardShot_Ideal": {
            "nodeName": "SelectTargetForStandardShot_Ideal",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StandardShot",
            "Child1": "SelectTarget_Opportunist",
            "Child2": "HasValidTarget-StandardShot"
        },
        "SelectTargetForStandardShot_Favorable": {
            "nodeName": "SelectTargetForStandardShot_Favorable",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StandardShot",
            "Child1": "SelectTarget_Favorable",
            "Child2": "HasValidTarget-StandardShot"
        },
        "TryShootPriorityTarget": {
            "nodeName": "TryShootPriorityTarget",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardShot",
            "Child1": "SelectPriorityTargetForStandardShot",
            "Child2": "SelectAbility-StandardShot"
        },
        "SelectPriorityTargetForStandardShot": {
            "nodeName": "SelectPriorityTargetForStandardShot",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StandardShot",
            "Child1": "SelectPriorityTarget",
            "Child2": "HasValidTarget-StandardShot"
        },
        "TryAttackPriorityTarget": {
            "nodeName": "TryAttackPriorityTarget",
            "NodeType": "Sequence",
            "Child0": "HasPriorityTarget",
            "Child1": "AttackPriorityTarget"
        },
        "AttackPriorityTarget": {
            "nodeName": "AttackPriorityTarget",
            "NodeType": "Selector",
            "Child0": "TryShootPriorityTarget",
            "Child1": "TryMeleeAttackPriorityTarget",
            "Child2": "NeedsReload"
        },
        "HasValidTarget-Suppression": {
            "nodeName": "HasValidTarget-Suppression",
            "NodeType": "Condition"
        },
        "SetTargetStack-Suppression": {
            "nodeName": "SetTargetStack-Suppression",
            "NodeType": "Action",
        },
        "SuppressIfAvailable": {
            "nodeName": "SuppressIfAvailable",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Suppression",
            "Child1": "SelectTargetForSuppressionByAim",
            "Child2": "SelectAbility-Suppression"
        },
        "SelectTargetForSuppressionByAim": {
            "nodeName": "SelectTargetForSuppressionByAim",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-Suppression",
            "Child1": "SelectBestSuppressionTargetByAim",
            "Child2": "HasValidTarget-Suppression"
        },
        "SelectBestSuppressionTargetByAim": {
            "nodeName": "SelectBestSuppressionTargetByAim",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateSuppressionTargetByAim"
        },
        "EvaluateSuppressionTargetByAim": {
            "nodeName": "EvaluateSuppressionTargetByAim",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "SSScoreUnsuppressedByHitChanceValue",
            "Child2": "TargetScoreInvalidateCivilians",
            "Child3": "UpdateBestTarget"
        },
        "SSScoreUnsuppressedByHitChanceValue": {
            "nodeName": "SSScoreUnsuppressedByHitChanceValue",
            "NodeType": "Successor",
            "Child0": "ScoreUnsuppressedByHitChanceValue"
        },
        "ScoreUnsuppressedByHitChanceValue": {
            "nodeName": "ScoreUnsuppressedByHitChanceValue",
            "NodeType": "Sequence",
            "Child0": "TargetIsNotSuppressed",
            "Child1": "AvoidBoundAndPanickedTargets",
            "Child2": "TargetScoreByHitChanceValue-1"
        },
        "HasValidTarget-StandardMelee": {
            "nodeName": "HasValidTarget-StandardMelee",
            "NodeType": "Condition"
        },
        "HasValidTarget-Potential": {
            "nodeName": "HasValidTarget-Potential",
            "NodeType": "Condition"
        },
        "SetTargetStack-StandardMelee": {
            "nodeName": "SetTargetStack-StandardMelee",
            "NodeType": "Action",
        },
        "SetPotentialTargetStack": {
            "nodeName": "SetPotentialTargetStack",
            "NodeType": "Action",
        },
        "SetVisiblePotentialTargetStack": {
            "nodeName": "SetVisiblePotentialTargetStack",
            "NodeType": "Action",
        },
        "SetPotentialAllyTargetStack": {
            "nodeName": "SetPotentialAllyTargetStack",
            "NodeType": "Action",
        },
        "IsTargetInMovementRange-StandardMelee": {
            "nodeName": "IsTargetInMovementRange-StandardMelee",
            "NodeType": "Condition"
        },
        "IsTargetInMovementRange-EnergyShield": {
            "nodeName": "IsTargetInMovementRange-EnergyShield",
            "NodeType": "Condition"
        },
        "TargetNotInMovementRange": {
            "nodeName": "TargetNotInMovementRange",
            "NodeType": "Inverter",
            "Child0": "IsTargetInMovementRange-StandardMelee"
        },
        "IsTargetInAttackRange-StandardMelee": {
            "nodeName": "IsTargetInAttackRange-StandardMelee",
            "NodeType": "Condition"
        },
        "TryStandardMelee": {
            "nodeName": "TryStandardMelee",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-StandardMelee",
            "Child1": "StandardMeleeStepSelector"
        },
        "TryStandardMeleeUnsafe": {
            "nodeName": "TryStandardMeleeUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-StandardMelee",
            "Child1": "StandardMeleeStepSelectorUnsafe"
        },
        "StandardMeleeStepSelector": {
            "nodeName": "StandardMeleeStepSelector",
            "NodeType": "Selector",
            "Child0": "StandardMeleeAttack",
            "Child1": "MoveMeleeIfFirstAbility"
        },
        "StandardMeleeStepSelectorUnsafe": {
            "nodeName": "StandardMeleeStepSelectorUnsafe",
            "NodeType": "Selector",
            "Child0": "StandardMeleeAttack",
            "Child1": "MoveMeleeIfFirstAbilityUnsafe"
        },
        "StandardMeleeAttack": {
            "nodeName": "StandardMeleeAttack",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMelee",
            "Child1": "SelectTargetForStandardMelee",
            "Child2": "SelectAbility-StandardMelee"
        },
        "TryStandardMeleeFANATIC": {
            "nodeName": "TryStandardMeleeFANATIC",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-StandardMelee",
            "Child1": "StandardMeleeStepSelectorFANATIC"
        },
        "TryStandardMeleeFANATICUnsafe": {
            "nodeName": "TryStandardMeleeFANATICUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-StandardMelee",
            "Child1": "StandardMeleeStepSelectorFANATICUnsafe"
        },
        "StandardMeleeStepSelectorFANATIC": {
            "nodeName": "StandardMeleeStepSelectorFANATIC",
            "NodeType": "Selector",
            "Child0": "StandardMeleeAttack",
            "Child1": "MoveMeleeIfFirstAbilityFANATIC"
        },
        "StandardMeleeStepSelectorFANATICUnsafe": {
            "nodeName": "StandardMeleeStepSelectorFANATICUnsafe",
            "NodeType": "Selector",
            "Child0": "StandardMeleeAttack",
            "Child1": "MoveMeleeIfFirstAbilityFANATICUnsafe"
        },
        "TryStandardMeleeDash": {
            "nodeName": "TryStandardMeleeDash",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-StandardMelee",
            "Child1": "StandardMeleeDashStepSelector"
        },
        "TryStandardMeleeDashUnsafe": {
            "nodeName": "TryStandardMeleeDashUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-StandardMelee",
            "Child1": "StandardMeleeDashStepSelectorUnsafe"
        },
        "StandardMeleeDashStepSelector": {
            "nodeName": "StandardMeleeDashStepSelector",
            "NodeType": "Selector",
            "Child0": "StandardMeleeAttack",
            "Child1": "MoveMeleeDash"
        },
        "StandardMeleeDashStepSelectorUnsafe": {
            "nodeName": "StandardMeleeDashStepSelectorUnsafe",
            "NodeType": "Selector",
            "Child0": "StandardMeleeAttack",
            "Child1": "MoveMeleeDashUnsafe"
        },
        "TryStandardMeleeDashFANATIC": {
            "nodeName": "TryStandardMeleeDashFANATIC",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-StandardMelee",
            "Child1": "StandardMeleeDashFANATICStepSelector"
        },
        "TryStandardMeleeDashFANATICUnsafe": {
            "nodeName": "TryStandardMeleeDashFANATICUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-StandardMelee",
            "Child1": "StandardMeleeDashFANATICStepSelectorUnsafe"
        },
        "StandardMeleeDashFANATICStepSelector": {
            "nodeName": "StandardMeleeDashFANATICStepSelector",
            "NodeType": "Selector",
            "Child0": "StandardMeleeAttack",
            "Child1": "MoveMeleeDashFANATIC"
        },
        "StandardMeleeDashFANATICStepSelectorUnsafe": {
            "nodeName": "StandardMeleeDashFANATICStepSelectorUnsafe",
            "NodeType": "Selector",
            "Child0": "StandardMeleeAttack",
            "Child1": "MoveMeleeDashFANATICUnsafe"
        },
        "SelectTargetForStandardMelee": {
            "nodeName": "SelectTargetForStandardMelee",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StandardMelee",
            "Child1": "SelectBestTargetForStandardMelee",
            "Child2": "HasValidTarget-StandardMelee"
        },
        "SelectBestTargetForStandardMelee": {
            "nodeName": "SelectBestTargetForStandardMelee",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluatePotentialMeleeTarget"
        },
        "TryMeleeAttackPriorityTarget": {
            "nodeName": "TryMeleeAttackPriorityTarget",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-StandardMelee",
            "Child1": "MeleeAttackPriorityTargetStepSelector"
        },
        "MeleeAttackPriorityTargetStepSelector": {
            "nodeName": "MeleeAttackPriorityTargetStepSelector",
            "NodeType": "Selector",
            "Child0": "MeleeAttackPriorityTarget",
            "Child1": "MoveMeleePriorityTargetUnsafe"
        },
        "MeleeAttackPriorityTarget": {
            "nodeName": "MeleeAttackPriorityTarget",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMelee",
            "Child1": "SetTargetStack-StandardMelee",
            "Child2": "SelectPriorityTarget",
            "Child3": "HasValidTarget-StandardMelee",
            "Child4": "SelectAbility-StandardMelee"
        },
        "SelectPotentialMeleeTarget": {
            "nodeName": "SelectPotentialMeleeTarget",
            "NodeType": "Sequence",
            "Child0": "SetPotentialTargetStack",
            "Child1": "SelectBestPotentialTargetForMelee",
            "Child2": "HasValidTarget-Potential"
        },
        "SelectBestPotentialTargetForMelee": {
            "nodeName": "SelectBestPotentialTargetForMelee",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluatePotentialMeleeTarget"
        },
        "EvaluatePotentialMeleeTarget": {
            "nodeName": "EvaluatePotentialMeleeTarget",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "TargetScoreClosestIfInRange",
            "Child2": "AvoidBoundAndPanickedTargets",
            "Child3": "TargetScoreCivilian",
            "Child4": "SSCustomMeleeTargetScore",
            "Child5": "UpdateBestTarget"
        },
        "SSCustomMeleeTargetScore": {
            "nodeName": "SSCustomMeleeTargetScore",
            "NodeType": "Successor",
            "Child0": "::CustomMeleeTargetScore"
        },
        "::CustomMeleeTargetScore": {
            "nodeName": "::CustomMeleeTargetScore",
            "NodeType": "Sequence",
            "Child0": "AddToTargetScore_0"
        },
        "SelectPotentialMeleePriorityTarget": {
            "nodeName": "SelectPotentialMeleePriorityTarget",
            "NodeType": "Sequence",
            "Child0": "SetPotentialTargetStack",
            "Child1": "SelectPotentialPriorityTargetForMelee",
            "Child2": "HasValidTarget-Potential"
        },
        "SelectPotentialPriorityTargetForMelee": {
            "nodeName": "SelectPotentialPriorityTargetForMelee",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluatePotentialPriorityTarget"
        },
        "EvaluatePotentialPriorityTarget": {
            "nodeName": "EvaluatePotentialPriorityTarget",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "TargetScoreReachableForMelee",
            "Child2": "TargetScorePriority",
            "Child3": "AvoidBoundAndPanickedTargets",
            "Child4": "TargetScoreCivilian",
            "Child5": "UpdateBestTarget"
        },
        "DoesGrenadeCauseDamage": {
            "nodeName": "DoesGrenadeCauseDamage",
            "NodeType": "Condition"
        },
        "TryMoveThenGrenade": {
            "nodeName": "TryMoveThenGrenade",
            "NodeType": "Selector",
            "Child0": "TryMoveForGrenade",
            "Child1": "TryGrenade"
        },
        "TryMoveForGrenade": {
            "nodeName": "TryMoveForGrenade",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityReady-ThrowGrenade",
            "Child2": "FindPotentialAoETargets-GrenadeProfile",
            "Child3": "MoveStandardIfFirstAbility-Grenade"
        },
        "TryGrenade": {
            "nodeName": "TryGrenade",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-ThrowGrenade",
            "Child1": "FindPotentialAoETargets-GrenadeProfile",
            "Child2": "SelectAoETarget-GrenadeProfile",
            "Child3": "SelectAbility-ThrowGrenade"
        },
        "TryPanickedGrenadeToss": {
            "nodeName": "TryPanickedGrenadeToss",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-ThrowGrenade",
            "Child1": "FindPotentialAoETargets-GrenadePanickedProfile",
            "Child2": "SelectAoETarget-GrenadePanickedProfile",
            "Child3": "SelectAbility-ThrowGrenade"
        },
        "IsAbilityAvailable-MarkTarget": {
            "nodeName": "IsAbilityAvailable-MarkTarget",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-TriggerRage": {
            "nodeName": "IsAbilityAvailable-TriggerRage",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-PsiReanimation": {
            "nodeName": "IsAbilityAvailable-PsiReanimation",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-MindSpin": {
            "nodeName": "IsAbilityAvailable-MindSpin",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-GetOverHere": {
            "nodeName": "IsAbilityAvailable-GetOverHere",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-PoisonSpit": {
            "nodeName": "IsAbilityAvailable-PoisonSpit",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-EnergyShield": {
            "nodeName": "IsAbilityAvailable-EnergyShield",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-AcidBlob": {
            "nodeName": "IsAbilityAvailable-AcidBlob",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-DelayedExecute": {
            "nodeName": "IsAbilityAvailable-DelayedExecute",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-MicroMissiles": {
            "nodeName": "IsAbilityAvailable-MicroMissiles",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-PsiWitchConfuse": {
            "nodeName": "IsAbilityAvailable-PsiWitchConfuse",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-PsiMindControl": {
            "nodeName": "IsAbilityAvailable-PsiMindControl",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-TriggerDamagedTeleport": {
            "nodeName": "IsAbilityAvailable-TriggerDamagedTeleport",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-PsiDimensionalRiftStage1": {
            "nodeName": "IsAbilityAvailable-PsiDimensionalRiftStage1",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-NullLance": {
            "nodeName": "IsAbilityAvailable-NullLance",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-ChryssalidBurrow": {
            "nodeName": "IsAbilityAvailable-ChryssalidBurrow",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-ChryssalidUnburrow": {
            "nodeName": "IsAbilityAvailable-ChryssalidUnburrow",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-BurrowedAttack": {
            "nodeName": "IsAbilityAvailable-BurrowedAttack",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-FrenzyTrigger": {
            "nodeName": "IsAbilityAvailable-FrenzyTrigger",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-BlazingPinionsStage1": {
            "nodeName": "IsAbilityAvailable-BlazingPinionsStage1",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-AnimaInversion": {
            "nodeName": "IsAbilityAvailable-AnimaInversion",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-MindProbe": {
            "nodeName": "IsAbilityAvailable-MindProbe",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-AnimaGate": {
            "nodeName": "IsAbilityAvailable-AnimaGate",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-AnimaConsume": {
            "nodeName": "IsAbilityAvailable-AnimaConsume",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-GatekeeperOpen": {
            "nodeName": "IsAbilityAvailable-GatekeeperOpen",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-GatekeeperClose": {
            "nodeName": "IsAbilityAvailable-GatekeeperClose",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-Retract": {
            "nodeName": "IsAbilityAvailable-Retract",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-PsiBombStage1": {
            "nodeName": "IsAbilityAvailable-PsiBombStage1",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-Teleport": {
            "nodeName": "IsAbilityAvailable-Teleport",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-TriggerSuperposition": {
            "nodeName": "IsAbilityAvailable-TriggerSuperposition",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-WrathCannon": {
            "nodeName": "IsAbilityAvailable-WrathCannon",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-WrathCannonStage1": {
            "nodeName": "IsAbilityAvailable-WrathCannonStage1",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-SpawnChryssalid": {
            "nodeName": "IsAbilityAvailable-SpawnChryssalid",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-ScythingClaws": {
            "nodeName": "IsAbilityAvailable-ScythingClaws",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-Bayonet": {
            "nodeName": "IsAbilityAvailable-Bayonet",
            "NodeType": "Condition"
        },
        "IsAbilityAvailable-Bind": {
            "nodeName": "IsAbilityAvailable-Bind",
            "NodeType": "Condition"
        },
        "IsAbilityReady-StunLance": {
            "nodeName": "IsAbilityReady-StunLance",
            "NodeType": "Condition"
        },
        "IsAbilityReady-Bind": {
            "nodeName": "IsAbilityReady-Bind",
            "NodeType": "Condition"
        },
        "IsAbilityReady-DevastatingPunch": {
            "nodeName": "IsAbilityReady-DevastatingPunch",
            "NodeType": "Condition"
        },
        "IsAbilityReady-AnimaConsume": {
            "nodeName": "IsAbilityReady-AnimaConsume",
            "NodeType": "Condition",
            "Param0": "AA_ValueCheckFailed",
            "Param1": "AA_GatekeeperClosed"
        },
        "IsAbilityReady-AnimaInversion": {
            "nodeName": "IsAbilityReady-AnimaInversion",
            "NodeType": "Condition",
            "Param0": "AA_ValueCheckFailed",
            "Param1": "AA_GatekeeperClosed"
        },
        "IsAbilityReady-ScythingClaws": {
            "nodeName": "IsAbilityReady-ScythingClaws",
            "NodeType": "Condition"
        },
        "IsAbilityReady-Bayonet": {
            "nodeName": "IsAbilityReady-Bayonet",
            "NodeType": "Condition"
        },
        "IsAbilityReady-PsiBombStage1": {
            "nodeName": "IsAbilityReady-PsiBombStage1",
            "NodeType": "Condition"
        },
        "IsAbilityReady-ThrowGrenade": {
            "nodeName": "IsAbilityReady-ThrowGrenade",
            "NodeType": "Condition"
        },
        "IsAbilityReady-PoisonSpit": {
            "nodeName": "IsAbilityReady-PoisonSpit",
            "NodeType": "Condition"
        },
        "IsAbilityReady-AcidBlob": {
            "nodeName": "IsAbilityReady-AcidBlob",
            "NodeType": "Condition"
        },
        "IsAbilityReady-MicroMissiles": {
            "nodeName": "IsAbilityReady-MicroMissiles",
            "NodeType": "Condition"
        },
        "IsAbilityReady-BlazingPinionsStage1": {
            "nodeName": "IsAbilityReady-BlazingPinionsStage1",
            "NodeType": "Condition"
        },
        "IsAbilityReady-PsiDimensionalRiftStage1": {
            "nodeName": "IsAbilityReady-PsiDimensionalRiftStage1",
            "NodeType": "Condition"
        },
        "IsAbilityReady-NullLance": {
            "nodeName": "IsAbilityReady-NullLance",
            "NodeType": "Condition"
        },
        "IsAbilityReady-EnergyShield": {
            "nodeName": "IsAbilityReady-EnergyShield",
            "NodeType": "Condition"
        },
        "IsAbilityReady-Suppression": {
            "nodeName": "IsAbilityReady-Suppression",
            "NodeType": "Condition"
        },
        "SelectAbility-MarkTarget": {
            "nodeName": "SelectAbility-MarkTarget",
            "NodeType": "Action",
        },
        "SelectAbility-StunLance": {
            "nodeName": "SelectAbility-StunLance",
            "NodeType": "Action",
        },
        "SelectAbility-TriggerRage": {
            "nodeName": "SelectAbility-TriggerRage",
            "NodeType": "Action",
        },
        "SelectAbility-PsiReanimation": {
            "nodeName": "SelectAbility-PsiReanimation",
            "NodeType": "Action",
        },
        "SelectAbility-MindSpin": {
            "nodeName": "SelectAbility-MindSpin",
            "NodeType": "Action",
        },
        "SelectAbility-GetOverHere": {
            "nodeName": "SelectAbility-GetOverHere",
            "NodeType": "Action",
        },
        "SelectAbility-Bind": {
            "nodeName": "SelectAbility-Bind",
            "NodeType": "Action",
        },
        "SelectAbility-PoisonSpit": {
            "nodeName": "SelectAbility-PoisonSpit",
            "NodeType": "Action",
        },
        "SelectAbility-AcidBlob": {
            "nodeName": "SelectAbility-AcidBlob",
            "NodeType": "Action",
        },
        "SelectAbility-EnergyShield": {
            "nodeName": "SelectAbility-EnergyShield",
            "NodeType": "Action",
        },
        "SelectAbility-DevastatingPunch": {
            "nodeName": "SelectAbility-DevastatingPunch",
            "NodeType": "Action",
        },
        "SelectAbility-DelayedExecute": {
            "nodeName": "SelectAbility-DelayedExecute",
            "NodeType": "Action",
        },
        "SelectAbility-Bayonet": {
            "nodeName": "SelectAbility-Bayonet",
            "NodeType": "Action",
        },
        "SelectAbility-MicroMissiles": {
            "nodeName": "SelectAbility-MicroMissiles",
            "NodeType": "Action",
        },
        "SelectAbility-PsiMindControl": {
            "nodeName": "SelectAbility-PsiMindControl",
            "NodeType": "Action",
        },
        "SelectAbility-TriggerDamagedTeleport": {
            "nodeName": "SelectAbility-TriggerDamagedTeleport",
            "NodeType": "Action",
        },
        "SelectAbility-PsiDimensionalRiftStage1": {
            "nodeName": "SelectAbility-PsiDimensionalRiftStage1",
            "NodeType": "Action",
        },
        "SelectAbility-ChryssalidBurrow": {
            "nodeName": "SelectAbility-ChryssalidBurrow",
            "NodeType": "Action",
        },
        "SelectAbility-ChryssalidUnburrow": {
            "nodeName": "SelectAbility-ChryssalidUnburrow",
            "NodeType": "Action",
        },
        "SelectAbility-BurrowedAttack": {
            "nodeName": "SelectAbility-BurrowedAttack",
            "NodeType": "Action",
        },
        "SelectAbility-FrenzyTrigger": {
            "nodeName": "SelectAbility-FrenzyTrigger",
            "NodeType": "Action",
        },
        "SelectAbility-BlazingPinionsStage1": {
            "nodeName": "SelectAbility-BlazingPinionsStage1",
            "NodeType": "Action",
        },
        "SelectAbility-AnimaInversion": {
            "nodeName": "SelectAbility-AnimaInversion",
            "NodeType": "Action",
        },
        "SelectAbility-AnimaConsume": {
            "nodeName": "SelectAbility-AnimaConsume",
            "NodeType": "Action",
        },
        "SelectAbility-AnimaGate": {
            "nodeName": "SelectAbility-AnimaGate",
            "NodeType": "Action",
        },
        "SelectAbility-MindProbe": {
            "nodeName": "SelectAbility-MindProbe",
            "NodeType": "Action",
        },
        "SelectAbility-GatekeeperOpen": {
            "nodeName": "SelectAbility-GatekeeperOpen",
            "NodeType": "Action",
        },
        "SelectAbility-GatekeeperClose": {
            "nodeName": "SelectAbility-GatekeeperClose",
            "NodeType": "Action",
        },
        "SelectAbility-Retract": {
            "nodeName": "SelectAbility-Retract",
            "NodeType": "Action",
        },
        "SelectAbility-PsiBombStage1": {
            "nodeName": "SelectAbility-PsiBombStage1",
            "NodeType": "Action",
        },
        "SelectAbility-Teleport": {
            "nodeName": "SelectAbility-Teleport",
            "NodeType": "Action",
            "Param0": "UseDestination"
        },
        "SelectAbility-TriggerSuperposition": {
            "nodeName": "SelectAbility-TriggerSuperposition",
            "NodeType": "Action",
        },
        "SelectAbility-ScythingClaws": {
            "nodeName": "SelectAbility-ScythingClaws",
            "NodeType": "Action",
        },
        "SelectAbility-WrathCannon": {
            "nodeName": "SelectAbility-WrathCannon",
            "NodeType": "Action",
        },
        "SelectAbility-WrathCannonStage1": {
            "nodeName": "SelectAbility-WrathCannonStage1",
            "NodeType": "Action",
        },
        "SelectAbility-SpawnChryssalid": {
            "nodeName": "SelectAbility-SpawnChryssalid",
            "NodeType": "Action",
        },
        "SelectAbility-NullLance": {
            "nodeName": "SelectAbility-NullLance",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-GrenadeProfile": {
            "nodeName": "FindPotentialAoETargets-GrenadeProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-GrenadeAggressiveProfile": {
            "nodeName": "FindPotentialAoETargets-GrenadeAggressiveProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-GrenadePanickedProfile": {
            "nodeName": "FindPotentialAoETargets-GrenadePanickedProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-GrenadeMindControlledProfile": {
            "nodeName": "FindPotentialAoETargets-GrenadeMindControlledProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-BlazingPinionsBasicProfile": {
            "nodeName": "FindPotentialAoETargets-BlazingPinionsBasicProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-AcidBlobProfile": {
            "nodeName": "FindPotentialAoETargets-AcidBlobProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-PoisonSpitProfile": {
            "nodeName": "FindPotentialAoETargets-PoisonSpitProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-PoisonSpitSingleProfile": {
            "nodeName": "FindPotentialAoETargets-PoisonSpitSingleProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-MicroMissilesProfile": {
            "nodeName": "FindPotentialAoETargets-MicroMissilesProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-MicroMissilesProfileMk2": {
            "nodeName": "FindPotentialAoETargets-MicroMissilesProfileMk2",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-PsiRiftProfile": {
            "nodeName": "FindPotentialAoETargets-PsiRiftProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-AnimaInversionCorpseProfile": {
            "nodeName": "FindPotentialAoETargets-AnimaInversionCorpseProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-AnimaInversionMixedProfile": {
            "nodeName": "FindPotentialAoETargets-AnimaInversionMixedProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-PsiBombProfile": {
            "nodeName": "FindPotentialAoETargets-PsiBombProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-TeleportProfile": {
            "nodeName": "FindPotentialAoETargets-TeleportProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-ScythingClawsProfile": {
            "nodeName": "FindPotentialAoETargets-ScythingClawsProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-ScythingClawsPrefTargetProfile": {
            "nodeName": "FindPotentialAoETargets-ScythingClawsPrefTargetProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-WrathCannonProfile": {
            "nodeName": "FindPotentialAoETargets-WrathCannonProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-WrathCannonS1Profile": {
            "nodeName": "FindPotentialAoETargets-WrathCannonS1Profile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-NullLanceProfile": {
            "nodeName": "FindPotentialAoETargets-NullLanceProfile",
            "NodeType": "Action",
        },
        "FindPotentialAoETargets-NullLanceValidateProfile": {
            "nodeName": "FindPotentialAoETargets-NullLanceValidateProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-GrenadeProfile": {
            "nodeName": "SelectAoETarget-GrenadeProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-GrenadeAggressiveProfile": {
            "nodeName": "SelectAoETarget-GrenadeAggressiveProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-GrenadePanickedProfile": {
            "nodeName": "SelectAoETarget-GrenadePanickedProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-GrenadeMindControlledProfile": {
            "nodeName": "SelectAoETarget-GrenadeMindControlledProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-BlazingPinionsBasicProfile": {
            "nodeName": "SelectAoETarget-BlazingPinionsBasicProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-AcidBlobProfile": {
            "nodeName": "SelectAoETarget-AcidBlobProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-PoisonSpitProfile": {
            "nodeName": "SelectAoETarget-PoisonSpitProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-PoisonSpitSingleProfile": {
            "nodeName": "SelectAoETarget-PoisonSpitSingleProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-MicroMissilesProfile": {
            "nodeName": "SelectAoETarget-MicroMissilesProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-MicroMissilesProfileMk2": {
            "nodeName": "SelectAoETarget-MicroMissilesProfileMk2",
            "NodeType": "Action",
        },
        "SelectAoETarget-PsiRiftProfile": {
            "nodeName": "SelectAoETarget-PsiRiftProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-AnimaInversionCorpseProfile": {
            "nodeName": "SelectAoETarget-AnimaInversionCorpseProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-AnimaInversionMixedProfile": {
            "nodeName": "SelectAoETarget-AnimaInversionMixedProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-PsiBombProfile": {
            "nodeName": "SelectAoETarget-PsiBombProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-TeleportProfile": {
            "nodeName": "SelectAoETarget-TeleportProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-ScythingClawsProfile": {
            "nodeName": "SelectAoETarget-ScythingClawsProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-ScythingClawsPrefTargetProfile": {
            "nodeName": "SelectAoETarget-ScythingClawsPrefTargetProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-WrathCannonProfile": {
            "nodeName": "SelectAoETarget-WrathCannonProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-WrathCannonS1Profile": {
            "nodeName": "SelectAoETarget-WrathCannonS1Profile",
            "NodeType": "Action",
        },
        "SelectAoETarget-NullLanceProfile": {
            "nodeName": "SelectAoETarget-NullLanceProfile",
            "NodeType": "Action",
        },
        "SelectAoETarget-NullLanceValidateProfile": {
            "nodeName": "SelectAoETarget-NullLanceValidateProfile",
            "NodeType": "Action",
        },
        "MoveStandardIfFirstAbility-Grenade": {
            "nodeName": "MoveStandardIfFirstAbility-Grenade",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "FindGrenadeDestination",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveStandardIfFirstAbility-PoisonSpit": {
            "nodeName": "MoveStandardIfFirstAbility-PoisonSpit",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "FindPoisonSpitDestination",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveStandardIfFirstAbility-AcidBlob": {
            "nodeName": "MoveStandardIfFirstAbility-AcidBlob",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "FindAcidBlobDestination",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveStandardIfFirstAbility-MicroMissiles": {
            "nodeName": "MoveStandardIfFirstAbility-MicroMissiles",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "FindMicroMissilesDestination",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveStandardIfFirstAbility-BlazingPinions": {
            "nodeName": "MoveStandardIfFirstAbility-BlazingPinions",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "FindBlazingPinionsDestination",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveStandardIfFirstAbility-PsiDimensionalRiftStage1": {
            "nodeName": "MoveStandardIfFirstAbility-PsiDimensionalRiftStage1",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "FindDimensionalRiftDestination",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveStandardIfFirstAbility-EnergyShield": {
            "nodeName": "MoveStandardIfFirstAbility-EnergyShield",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "FindShieldDestinationDefensive",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveStandardIfFirstAbility-PsiMindControl": {
            "nodeName": "MoveStandardIfFirstAbility-PsiMindControl",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "FindMindControlDestinationDefensive",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveStandardIfFirstAbility-AnimaInversion": {
            "nodeName": "MoveStandardIfFirstAbility-AnimaInversion",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "FindAnimaInversionDestination",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveStandardIfFirstAbility-PsiBombStage1": {
            "nodeName": "MoveStandardIfFirstAbility-PsiBombStage1",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "FindPsiBombDestination",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveStandardIfFirstAbility-NullLance": {
            "nodeName": "MoveStandardIfFirstAbility-NullLance",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "FindNullLanceDestination",
            "Child3": "SelectAbility-StandardMove"
        },
        "MoveStandardIfFirstAbility-Suppression": {
            "nodeName": "MoveStandardIfFirstAbility-Suppression",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "FindSuppressionDestination",
            "Child3": "SelectAbility-StandardMove"
        },
        "TeleportForPsiBombTarget": {
            "nodeName": "TeleportForPsiBombTarget",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Teleport",
            "Child1": "FindPsiBombTeleportDestination",
            "Child2": "SelectAbility-Teleport"
        },
        "TeleportForPsiMindControl": {
            "nodeName": "TeleportForPsiMindControl",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Teleport",
            "Child1": "FindPsiMindControlTeleportDestination",
            "Child2": "SelectAbility-Teleport"
        },
        "TeleportForPsiDimensionalRiftTarget": {
            "nodeName": "TeleportForPsiDimensionalRiftTarget",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Teleport",
            "Child1": "FindPsiDimensionalRiftTeleportDestination",
            "Child2": "SelectAbility-Teleport"
        },
        "TeleportForNullLanceTarget": {
            "nodeName": "TeleportForNullLanceTarget",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Teleport",
            "Child1": "FindNullLanceTeleportDestination",
            "Child2": "SelectAbility-Teleport"
        },
        "HasValidTarget-StunLance": {
            "nodeName": "HasValidTarget-StunLance",
            "NodeType": "Condition"
        },
        "SetTargetStack-StunLance": {
            "nodeName": "SetTargetStack-StunLance",
            "NodeType": "Action",
        },
        "TryStunLance": {
            "nodeName": "TryStunLance",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-StunLance",
            "Child1": "StunLanceStepSelector"
        },
        "StunLanceStepSelector": {
            "nodeName": "StunLanceStepSelector",
            "NodeType": "Selector",
            "Child0": "StunLanceAttack",
            "Child1": "MoveMeleeIfFirstAbilityFANATIC"
        },
        "StunLanceAttack": {
            "nodeName": "StunLanceAttack",
            "NodeType": "Sequence",
            "Child0": "SelectTargetForStunLance",
            "Child1": "SelectAbility-StunLance"
        },
        "SelectTargetForStunLance": {
            "nodeName": "SelectTargetForStunLance",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StunLance",
            "Child1": "SelectBestTargetForStunLance",
            "Child2": "HasValidTarget-StunLance"
        },
        "SelectBestTargetForStunLance": {
            "nodeName": "SelectBestTargetForStunLance",
            "NodeType": "RepeatUntilFail",
            "Child0": "TargetSelectIterationForStunLance"
        },
        "TargetSelectIterationForStunLance": {
            "nodeName": "TargetSelectIterationForStunLance",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "EvaluateTargetForStunLance",
            "Child2": "UpdateBestTarget"
        },
        "EvaluateTargetForStunLance": {
            "nodeName": "EvaluateTargetForStunLance",
            "NodeType": "Sequence",
            "Child0": "TargetScoreHitChance",
            "Child1": "TargetScoreHealth_HighFirst",
            "Child2": "TargetScoreMarked",
            "Child3": "AvoidBoundAndPanickedTargets",
            "Child4": "TargetScoreCivilian"
        },
        "TryMarkTargetOption": {
            "nodeName": "TryMarkTargetOption",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-MarkTarget",
            "Child1": "AnyAlliesVisible",
            "Child2": "MultipleEnemiesVisible",
            "Child3": "NoUnitsMarked",
            "Child4": "SelectTargetForMarkTarget",
            "Child5": "SelectAbility-MarkTarget",
            "Intent": "Marking a target: GETTIM!"
        },
        "SelectTargetForMarkTarget": {
            "nodeName": "SelectTargetForMarkTarget",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-MarkTarget",
            "Child1": "ScoreAllTargets_MarkTarget",
            "Child2": "HasValidTarget-MarkTarget"
        },
        "ScoreAllTargets_MarkTarget": {
            "nodeName": "ScoreAllTargets_MarkTarget",
            "NodeType": "RepeatUntilFail",
            "Child0": "ScoreTarget_MarkTargetLoop"
        },
        "ScoreTarget_MarkTargetLoop": {
            "nodeName": "ScoreTarget_MarkTargetLoop",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "ScoreTarget_MarkTargetScoring",
            "Child2": "UpdateBestTarget"
        },
        "ScoreTarget_MarkTargetScoring": {
            "nodeName": "ScoreTarget_MarkTargetScoring",
            "NodeType": "Successor",
            "Child0": "ScoreMarkTargetOption"
        },
        "ScoreMarkTargetOption": {
            "nodeName": "ScoreMarkTargetOption",
            "NodeType": "Sequence",
            "Child0": "TargetIsEnemy",
            "Child1": "TargetIsNotCivilian",
            "Child2": "ScoreByHP",
            "Child3": "TargetScoreHealth_HighFirst",
            "Child4": "TargetScoreHighestSoldierRank",
            "Child5": "TargetScoreTeamVisibility",
            "Child6": "SometimesRandomizeTarget",
            "Child7": "AvoidBoundAndPanickedTargets"
        },
        "SetTargetStack-MarkTarget": {
            "nodeName": "SetTargetStack-MarkTarget",
            "NodeType": "Action",
        },
        "HasValidTarget-MarkTarget": {
            "nodeName": "HasValidTarget-MarkTarget",
            "NodeType": "Condition"
        },
        "NoUnitsMarked": {
            "nodeName": "NoUnitsMarked",
            "NodeType": "Inverter",
            "Child0": "HaveAnyMarkedTargets"
        },
        "HaveAnyMarkedTargets": {
            "nodeName": "HaveAnyMarkedTargets",
            "NodeType": "Sequence",
            "Child0": "SetPotentialTargetStack",
            "Child1": "FindAnyMarkedTarget",
            "Child2": "HasValidTarget-Potential"
        },
        "FindAnyMarkedTarget": {
            "nodeName": "FindAnyMarkedTarget",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateTargetIsMarked"
        },
        "EvaluateTargetIsMarked": {
            "nodeName": "EvaluateTargetIsMarked",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "SSScoreIfMarked",
            "Child2": "UpdateBestTarget",
            "Child3": "BreakOnAnyValidTarget-Potential"
        },
        "SSScoreIfMarked": {
            "nodeName": "SSScoreIfMarked",
            "NodeType": "Successor",
            "Child0": "ScoreTargetIfMarked"
        },
        "BreakOnAnyValidTarget-Potential": {
            "nodeName": "BreakOnAnyValidTarget-Potential",
            "NodeType": "Inverter",
            "Child0": "HasValidTarget-Potential"
        },
        "TryEnergyShieldOnMultipleTargets": {
            "nodeName": "TryEnergyShieldOnMultipleTargets",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-EnergyShield",
            "Child1": "HasMultipleEnergyShieldTargets",
            "Child2": "SelectAbility-EnergyShield"
        },
        "TryEnergyShieldOnAnyTarget": {
            "nodeName": "TryEnergyShieldOnAnyTarget",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-EnergyShield",
            "Child1": "HasAnyEnergyShieldTargets",
            "Child2": "SelectAbility-EnergyShield"
        },
        "SelectPotentialTargetForEnergyShield": {
            "nodeName": "SelectPotentialTargetForEnergyShield",
            "NodeType": "Sequence",
            "Child0": "SetPotentialAllyTargetStack",
            "Child1": "SelectBestAllyTargetForEnergyShield",
            "Child2": "HasValidTarget-Potential"
        },
        "SelectBestAllyTargetForEnergyShield": {
            "nodeName": "SelectBestAllyTargetForEnergyShield",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluatePotentialEnergyShieldTarget"
        },
        "EvaluatePotentialEnergyShieldTarget": {
            "nodeName": "EvaluatePotentialEnergyShieldTarget",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "ScoreBestTargetForEnergyShield",
            "Child2": "UpdateBestTarget"
        },
        "ScoreBestTargetForEnergyShield": {
            "nodeName": "ScoreBestTargetForEnergyShield",
            "NodeType": "Successor",
            "Child0": "TargetScoreReachableForEnergyShield"
        },
        "TargetScoreReachableForEnergyShield": {
            "nodeName": "TargetScoreReachableForEnergyShield",
            "NodeType": "Sequence",
            "Child0": "IsTargetInMovementRange-EnergyShield",
            "Child1": "AvoidBoundAndPanickedTargets",
            "Child2": "ScoreByHP"
        },
        "ScoreByHP": {
            "nodeName": "ScoreByHP",
            "NodeType": "Sequence",
            "Child0": "TargetScoreByScaledMaxStat-eStat_HP",
            "Child1": "TargetScoreByScaledCurrStat-eStat_HP"
        },
        "TargetScoreByScaledMaxStat-eStat_HP": {
            "nodeName": "TargetScoreByScaledMaxStat-eStat_HP",
            "NodeType": "Action",
            "Param0": "10"
        },
        "TargetScoreByScaledCurrStat-eStat_HP": {
            "nodeName": "TargetScoreByScaledCurrStat-eStat_HP",
            "NodeType": "Action",
            "Param0": "1"
        },
        "TryMoveThenMicroMissiles": {
            "nodeName": "TryMoveThenMicroMissiles",
            "NodeType": "Selector",
            "Child0": "TryMoveForMicroMissiles",
            "Child1": "TryMicroMissiles"
        },
        "TryMoveForMicroMissiles": {
            "nodeName": "TryMoveForMicroMissiles",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityReady-MicroMissiles",
            "Child2": "FindPotentialAoETargets-MicroMissilesProfile",
            "Child3": "MoveStandardIfFirstAbility-MicroMissiles"
        },
        "TryMicroMissiles": {
            "nodeName": "TryMicroMissiles",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-MicroMissiles",
            "Child1": "FindPotentialAoETargets-MicroMissilesProfile",
            "Child2": "SelectAoETarget-MicroMissilesProfile",
            "Child3": "SelectAbility-MicroMissiles"
        },
        "TryMoveThenMicroMissilesMk2": {
            "nodeName": "TryMoveThenMicroMissilesMk2",
            "NodeType": "Selector",
            "Child0": "TryMoveForMicroMissilesMk2",
            "Child1": "TryMicroMissilesMk2"
        },
        "TryMoveForMicroMissilesMk2": {
            "nodeName": "TryMoveForMicroMissilesMk2",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityReady-MicroMissiles",
            "Child2": "FindPotentialAoETargets-MicroMissilesProfileMk2",
            "Child3": "MoveStandardIfFirstAbility-MicroMissiles"
        },
        "TryMicroMissilesMk2": {
            "nodeName": "TryMicroMissilesMk2",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-MicroMissiles",
            "Child1": "FindPotentialAoETargets-MicroMissilesProfileMk2",
            "Child2": "SelectAoETarget-MicroMissilesProfileMk2",
            "Child3": "SelectAbility-MicroMissiles"
        },
        "TryMoveThenAcidBlob": {
            "nodeName": "TryMoveThenAcidBlob",
            "NodeType": "Selector",
            "Child0": "TryMoveForAcidBlob",
            "Child1": "TryAcidBlob"
        },
        "TryMoveForAcidBlob": {
            "nodeName": "TryMoveForAcidBlob",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityReady-AcidBlob",
            "Child2": "FindPotentialAoETargets-AcidBlobProfile",
            "Child3": "MoveStandardIfFirstAbility-AcidBlob"
        },
        "TryAcidBlob": {
            "nodeName": "TryAcidBlob",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-AcidBlob",
            "Child1": "FindPotentialAoETargets-AcidBlobProfile",
            "Child2": "SelectAoETarget-AcidBlobProfile",
            "Child3": "SelectAbility-AcidBlob"
        },
        "HasValidTarget-Bayonet": {
            "nodeName": "HasValidTarget-Bayonet",
            "NodeType": "Condition"
        },
        "SetTargetStack-Bayonet": {
            "nodeName": "SetTargetStack-Bayonet",
            "NodeType": "Action",
        },
        "TryBayonet": {
            "nodeName": "TryBayonet",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-Bayonet",
            "Child1": "BayonetStepSelector"
        },
        "BayonetStepSelector": {
            "nodeName": "BayonetStepSelector",
            "NodeType": "Selector",
            "Child0": "BayonetAttack",
            "Child1": "MoveMeleeDefensiveIfFirstAbility"
        },
        "BayonetAttack": {
            "nodeName": "BayonetAttack",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Bayonet",
            "Child1": "SelectTargetForBayonet",
            "Child2": "SelectAbility-Bayonet"
        },
        "SelectTargetForBayonet": {
            "nodeName": "SelectTargetForBayonet",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-Bayonet",
            "Child1": "SelectBestTargetForStandardMelee",
            "Child2": "HasValidTarget-Bayonet"
        },
        "SelectBestTargetForBayonet": {
            "nodeName": "SelectBestTargetForBayonet",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluatePotentialMeleeTarget"
        },
        "HasValidTarget-DevastatingPunch": {
            "nodeName": "HasValidTarget-DevastatingPunch",
            "NodeType": "Condition"
        },
        "SetTargetStack-DevastatingPunch": {
            "nodeName": "SetTargetStack-DevastatingPunch",
            "NodeType": "Action",
        },
        "TryBerserkerMelee": {
            "nodeName": "TryBerserkerMelee",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-DevastatingPunch",
            "Child1": "MoveMeleeOrDevastatingPunchAttack"
        },
        "MoveMeleeOrDevastatingPunchAttack": {
            "nodeName": "MoveMeleeOrDevastatingPunchAttack",
            "NodeType": "Selector",
            "Child0": "TryDevastatingPunchAttack",
            "Child1": "MoveToDevastatingPunchTargetIfFirstAbility"
        },
        "TryDevastatingPunchAttack": {
            "nodeName": "TryDevastatingPunchAttack",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMelee",
            "Child1": "SelectTargetForDevastatingPunch",
            "Child2": "SelectAbility-StandardMelee"
        },
        "MoveToDevastatingPunchTargetIfFirstAbility": {
            "nodeName": "MoveToDevastatingPunchTargetIfFirstAbility",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "ResetDestinationSearch",
            "Child3": "IncludeCiviliansIfTerrorist",
            "Child4": "FindBerserkerMeleeDestination",
            "Child5": "SelectAbility-StandardMove"
        },
        "FindBerserkerMeleeDestination": {
            "nodeName": "FindBerserkerMeleeDestination",
            "NodeType": "Sequence",
            "Child0": "SelectPotentialTargetForDevastatingPunch",
            "Child1": "RestrictToPotentialTargetRange-StandardMelee",
            "Child2": "FindRestrictedDestination-Melee"
        },
        "SelectTargetForDevastatingPunch": {
            "nodeName": "SelectTargetForDevastatingPunch",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-DevastatingPunch",
            "Child1": "SelectBestTargetForDevastatingPunch",
            "Child2": "HasValidTarget-DevastatingPunch"
        },
        "SelectPotentialTargetForDevastatingPunch": {
            "nodeName": "SelectPotentialTargetForDevastatingPunch",
            "NodeType": "Sequence",
            "Child0": "SetPotentialTargetStack",
            "Child1": "SelectBestTargetForDevastatingPunch",
            "Child2": "HasValidTarget-Potential"
        },
        "SelectBestTargetForDevastatingPunch": {
            "nodeName": "SelectBestTargetForDevastatingPunch",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluatePotentialDevastatingPunchTarget"
        },
        "EvaluatePotentialDevastatingPunchTarget": {
            "nodeName": "EvaluatePotentialDevastatingPunchTarget",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "TargetScoreClosestVisibleAllyIfEnraged",
            "Child2": "TargetScoreClosestEnemyIfInRange",
            "Child3": "TargetScoreInvalidateCivilians",
            "Child4": "UpdateBestTarget"
        },
        "TargetScoreClosestVisibleAllyIfEnraged": {
            "nodeName": "TargetScoreClosestVisibleAllyIfEnraged",
            "NodeType": "Successor",
            "Child0": "ScoreClosestVisibleAllyIfEnraged"
        },
        "ScoreClosestVisibleAllyIfEnraged": {
            "nodeName": "ScoreClosestVisibleAllyIfEnraged",
            "NodeType": "Sequence",
            "Child0": "AffectedByEffect-RageTriggered",
            "Child1": "IsVisibleToPlayer",
            "Child2": "TargetIsAlly",
            "Child3": "TargetIsAdvent",
            "Child4": "TargetIsVisibleToPlayer",
            "Child5": "IsTargetInMovementRange-StandardMelee",
            "Child6": "TargetScoreByScaledDistance-1",
            "Child7": "AddToTargetScore_100"
        },
        "TargetScoreClosestEnemyIfInRange": {
            "nodeName": "TargetScoreClosestEnemyIfInRange",
            "NodeType": "Successor",
            "Child0": "ScoreClosestEnemyIfInRange"
        },
        "ScoreClosestEnemyIfInRange": {
            "nodeName": "ScoreClosestEnemyIfInRange",
            "NodeType": "Sequence",
            "Child0": "TargetIsEnemy",
            "Child1": "TargetIsNotAlien",
            "Child2": "IsTargetInMovementRange-StandardMelee",
            "Child3": "TargetScoreByScaledDistance-1",
            "Child4": "AddToTargetScore_100",
            "Child5": "AvoidBoundAndPanickedTargets"
        },
        "TryTriggerRage": {
            "nodeName": "TryTriggerRage",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-TriggerRage",
            "Child1": "SelectAbility-TriggerRage"
        },
        "HasValidTarget-MindSpin": {
            "nodeName": "HasValidTarget-MindSpin",
            "NodeType": "Condition"
        },
        "SetTargetStack-MindSpin": {
            "nodeName": "SetTargetStack-MindSpin",
            "NodeType": "Action",
        },
        "SelectTargetForMindSpin": {
            "nodeName": "SelectTargetForMindSpin",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-MindSpin",
            "Child1": "SelectBestTargetForMindSpin",
            "Child2": "HasValidTarget-MindSpin"
        },
        "SelectBestTargetForMindSpin": {
            "nodeName": "SelectBestTargetForMindSpin",
            "NodeType": "RepeatUntilFail",
            "Child0": "PsiEvaluateTargetsGeneric"
        },
        "HasValidTarget-PsiReanimation": {
            "nodeName": "HasValidTarget-PsiReanimation",
            "NodeType": "Condition"
        },
        "TryPsiReanimation": {
            "nodeName": "TryPsiReanimation",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-PsiReanimation",
            "Child1": "SelectTargetForPsiReanimation",
            "Child2": "SelectAbility-PsiReanimation"
        },
        "SelectTargetForPsiReanimation": {
            "nodeName": "SelectTargetForPsiReanimation",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-PsiReanimation",
            "Child1": "GenericSelectTargetSomewhatRandomly",
            "Child2": "HasValidTarget-PsiReanimation"
        },
        "SetTargetStack-PsiReanimation": {
            "nodeName": "SetTargetStack-PsiReanimation",
            "NodeType": "Action",
        },
        "HasValidTarget-GetOverHere": {
            "nodeName": "HasValidTarget-GetOverHere",
            "NodeType": "Condition"
        },
        "SetTargetStack-GetOverHere": {
            "nodeName": "SetTargetStack-GetOverHere",
            "NodeType": "Action",
        },
        "TryGetOverHere": {
            "nodeName": "TryGetOverHere",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-GetOverHere",
            "Child1": "SelectTargetForGetOverHere",
            "Child2": "SelectAbility-GetOverHere"
        },
        "SelectTargetForGetOverHere": {
            "nodeName": "SelectTargetForGetOverHere",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-GetOverHere",
            "Child1": "SelectBestTargetForGetOverHere",
            "Child2": "HasValidTarget-GetOverHere"
        },
        "SelectBestTargetForGetOverHere": {
            "nodeName": "SelectBestTargetForGetOverHere",
            "NodeType": "RepeatUntilFail",
            "Child0": "TargetSelectIterationForGetOverHere"
        },
        "TargetSelectIterationForGetOverHere": {
            "nodeName": "TargetSelectIterationForGetOverHere",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "GenericTargetEvaluations",
            "Child2": "TargetScoreInvalidateCivilians",
            "Child3": "SSTargetScoreInvalidTonguePullTargets",
            "Child4": "UpdateBestTarget"
        },
        "SSTargetScoreInvalidTonguePullTargets": {
            "nodeName": "SSTargetScoreInvalidTonguePullTargets",
            "NodeType": "Successor",
            "Child0": "TargetScoreInvalidTonguePullTargets"
        },
        "TargetScoreInvalidTonguePullTargets": {
            "nodeName": "TargetScoreInvalidTonguePullTargets",
            "NodeType": "Sequence",
            "Child0": "IsInvalidTonguePullTarget",
            "Child1": "AddToTargetScore_-1000"
        },
        "IsInvalidTonguePullTarget": {
            "nodeName": "IsInvalidTonguePullTarget",
            "NodeType": "Selector",
            "Child0": "TargetAffectedByEffect-Suppression",
            "Child1": "TargetIsApplyingEffect-Suppression"
        },
        "IsValidTonguePullTarget": {
            "nodeName": "IsValidTonguePullTarget",
            "NodeType": "Inverter",
            "Child0": "IsInvalidTonguePullTarget"
        },
        "TryMoveThenPoisonSpit": {
            "nodeName": "TryMoveThenPoisonSpit",
            "NodeType": "Selector",
            "Child0": "TryMoveForPoisonSpit",
            "Child1": "TryPoisonSpit"
        },
        "TryMoveForPoisonSpit": {
            "nodeName": "TryMoveForPoisonSpit",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityReady-PoisonSpit",
            "Child2": "FindPotentialAoETargets-PoisonSpitProfile",
            "Child3": "MoveStandardIfFirstAbility-PoisonSpit"
        },
        "TryPoisonSpit": {
            "nodeName": "TryPoisonSpit",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-PoisonSpit",
            "Child1": "FindPotentialAoETargets-PoisonSpitProfile",
            "Child2": "SelectAoETarget-PoisonSpitProfile",
            "Child3": "SelectAbility-PoisonSpit"
        },
        "TryMoveThenPoisonSpitSingle": {
            "nodeName": "TryMoveThenPoisonSpitSingle",
            "NodeType": "Selector",
            "Child0": "TryMoveForPoisonSpitSingle",
            "Child1": "TryPoisonSpitSingle"
        },
        "TryMoveForPoisonSpitSingle": {
            "nodeName": "TryMoveForPoisonSpitSingle",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityReady-PoisonSpit",
            "Child2": "FindPotentialAoETargets-PoisonSpitSingleProfile",
            "Child3": "MoveStandardIfFirstAbility-PoisonSpit"
        },
        "TryPoisonSpitSingle": {
            "nodeName": "TryPoisonSpitSingle",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-PoisonSpit",
            "Child1": "FindPotentialAoETargets-PoisonSpitSingleProfile",
            "Child2": "SelectAoETarget-PoisonSpitSingleProfile",
            "Child3": "SelectAbility-PoisonSpit"
        },
        "HasValidTarget-Bind": {
            "nodeName": "HasValidTarget-Bind",
            "NodeType": "Condition"
        },
        "SetTargetStack-Bind": {
            "nodeName": "SetTargetStack-Bind",
            "NodeType": "Action",
        },
        "TryBind": {
            "nodeName": "TryBind",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-Bind",
            "Child1": "MoveMeleeOrBindAttack"
        },
        "MoveMeleeOrBindAttack": {
            "nodeName": "MoveMeleeOrBindAttack",
            "NodeType": "Selector",
            "Child0": "BindAttack",
            "Child1": "MoveForBindIfFirstAbility"
        },
        "BindAttack": {
            "nodeName": "BindAttack",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Bind",
            "Child1": "SelectTargetForBind",
            "Child2": "SelectAbility-Bind"
        },
        "MoveForBindIfFirstAbility": {
            "nodeName": "MoveForBindIfFirstAbility",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "MoveForBindIfFirstAbilityUnsafe"
        },
        "MoveForBindIfFirstAbilityUnsafe": {
            "nodeName": "MoveForBindIfFirstAbilityUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "ResetDestinationSearch",
            "Child3": "IncludeCiviliansIfTerrorist",
            "Child4": "FindViperMeleeDestination",
            "Child5": "SelectAbility-StandardMove"
        },
        "FindViperMeleeDestination": {
            "nodeName": "FindViperMeleeDestination",
            "NodeType": "Sequence",
            "Child0": "SelectPotentialTargetForBind",
            "Child1": "RestrictToPotentialTargetRange-StandardMelee",
            "Child2": "FindRestrictedDestination-Melee"
        },
        "SelectTargetForBind": {
            "nodeName": "SelectTargetForBind",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-Bind",
            "Child1": "SelectBestTargetForBind",
            "Child2": "HasValidTarget-Bind"
        },
        "SelectPotentialTargetForBind": {
            "nodeName": "SelectPotentialTargetForBind",
            "NodeType": "Sequence",
            "Child0": "SetPotentialTargetStack",
            "Child1": "SelectBestTargetForBind",
            "Child2": "HasValidTarget-Potential"
        },
        "SelectBestTargetForBind": {
            "nodeName": "SelectBestTargetForBind",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluatePotentialMeleeTarget"
        },
        "HasValidTarget-PsiMindControl": {
            "nodeName": "HasValidTarget-PsiMindControl",
            "NodeType": "Condition"
        },
        "SetTargetStack-PsiMindControl": {
            "nodeName": "SetTargetStack-PsiMindControl",
            "NodeType": "Action",
        },
        "TryPsiMindControl": {
            "nodeName": "TryPsiMindControl",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-PsiMindControl",
            "Child1": "SelectTargetForPsiMindControl",
            "Child2": "SelectAbility-PsiMindControl"
        },
        "SelectTargetForPsiMindControl": {
            "nodeName": "SelectTargetForPsiMindControl",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-PsiMindControl",
            "Child1": "SelectBestTargetForPsiMindControl",
            "Child2": "HasValidTarget-PsiMindControl"
        },
        "SelectBestTargetForPsiMindControl": {
            "nodeName": "SelectBestTargetForPsiMindControl",
            "NodeType": "RepeatUntilFail",
            "Child0": "PsiEvaluateTargetsMindControl"
        },
        "TryMoveForPsiMindControl": {
            "nodeName": "TryMoveForPsiMindControl",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityAvailable-PsiMindControl",
            "Child2": "SelectTargetForPsiMindControl",
            "Child3": "MoveStandardIfFirstAbility-PsiMindControl"
        },
        "TryMoveThenPsiMindControl": {
            "nodeName": "TryMoveThenPsiMindControl",
            "NodeType": "Selector",
            "Child0": "TryMoveForPsiMindControl",
            "Child1": "TryPsiMindControl"
        },
        "TryDimensionalRift": {
            "nodeName": "TryDimensionalRift",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-PsiDimensionalRiftStage1",
            "Child1": "FindPotentialAoETargets-PsiRiftProfile",
            "Child2": "SelectAoETarget-PsiRiftProfile",
            "Child3": "SelectAbility-PsiDimensionalRiftStage1"
        },
        "TryMoveThenDimensionalRift": {
            "nodeName": "TryMoveThenDimensionalRift",
            "NodeType": "Selector",
            "Child0": "TryMoveForDimensionalRift",
            "Child1": "TryDimensionalRift"
        },
        "TryMoveForDimensionalRift": {
            "nodeName": "TryMoveForDimensionalRift",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityReady-PsiDimensionalRiftStage1",
            "Child2": "FindPotentialAoETargets-PsiRiftProfile",
            "Child3": "MoveStandardIfFirstAbility-PsiDimensionalRiftStage1"
        },
        "TryNullLance": {
            "nodeName": "TryNullLance",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-NullLance",
            "Child1": "FindPotentialAoETargets-NullLanceValidateProfile",
            "Child2": "SelectAoETarget-NullLanceValidateProfile",
            "Child3": "SelectAbility-NullLance"
        },
        "TryMoveThenNullLance": {
            "nodeName": "TryMoveThenNullLance",
            "NodeType": "Selector",
            "Child0": "TryMoveForNullLance",
            "Child1": "TryNullLance"
        },
        "TryMoveForNullLance": {
            "nodeName": "TryMoveForNullLance",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityReady-NullLance",
            "Child2": "NotLastActionPoint",
            "Child3": "SelectPotentialMeleeTarget",
            "Child4": "FindPotentialAoETargets-NullLanceProfile",
            "Child5": "MoveStandardIfFirstAbility-NullLance"
        },
        "TryTriggerDamagedTeleport": {
            "nodeName": "TryTriggerDamagedTeleport",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-TriggerDamagedTeleport",
            "Child1": "SelectAbility-TriggerDamagedTeleport"
        },
        "TryBurrowIfNotOnJob": {
            "nodeName": "TryBurrowIfNotOnJob",
            "NodeType": "Sequence",
            "Child0": "DoNotHaveAlwaysOnJob",
            "Child1": "BurrowIfOutOfView"
        },
        "TryBurrow": {
            "nodeName": "TryBurrow",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-ChryssalidBurrow",
            "Child1": "SelectAbility-ChryssalidBurrow",
            "Child2": "SetUnitValue-MeleeChance"
        },
        "TryUnBurrow": {
            "nodeName": "TryUnBurrow",
            "NodeType": "Sequence",
            "Child0": "AffectedByEffect-Burrowed",
            "Child1": "IsAbilityAvailable-ChryssalidUnburrow",
            "Child2": "SelectAbility-ChryssalidUnburrow"
        },
        "TryUnBurrowSuccessor": {
            "nodeName": "TryUnBurrowSuccessor",
            "NodeType": "Successor",
            "Child0": "TryUnBurrow"
        },
        "ChryssalidBurrowedAttack": {
            "nodeName": "ChryssalidBurrowedAttack",
            "NodeType": "Selector",
            "Child0": "TryUnBurrow",
            "Child1": "TryMeleeAttackPriorityTarget"
        },
        "TrySpawnChryssalid": {
            "nodeName": "TrySpawnChryssalid",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-SpawnChryssalid",
            "Child1": "SelectAbility-SpawnChryssalid"
        },
        "TryFrenzyTrigger": {
            "nodeName": "TryFrenzyTrigger",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-FrenzyTrigger",
            "Child1": "SelectAbility-FrenzyTrigger"
        },
        "TryBlazingPinions": {
            "nodeName": "TryBlazingPinions",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-BlazingPinionsStage1",
            "Child1": "FindPotentialAoETargets-BlazingPinionsBasicProfile",
            "Child2": "SelectAoETarget-BlazingPinionsBasicProfile",
            "Child3": "SelectAbility-BlazingPinionsStage1"
        },
        "TryAnimaInversionCorpses": {
            "nodeName": "TryAnimaInversionCorpses",
            "NodeType": "Selector",
            "Child0": "TryAnimaInversionCorpseActivate",
            "Child1": "TryGatekeeperOpenIfAnimaInversionCorpseReady"
        },
        "TryAnimaInversionCorpseActivate": {
            "nodeName": "TryAnimaInversionCorpseActivate",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-AnimaInversion",
            "Child1": "FindPotentialAoETargets-AnimaInversionCorpseProfile",
            "Child2": "SelectAoETarget-AnimaInversionCorpseProfile",
            "Child3": "SelectAbility-AnimaInversion"
        },
        "TryGatekeeperOpenIfAnimaInversionCorpseReady": {
            "nodeName": "TryGatekeeperOpenIfAnimaInversionCorpseReady",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-AnimaInversion",
            "Child1": "FindPotentialAoETargets-AnimaInversionCorpseProfile",
            "Child2": "SelectAoETarget-AnimaInversionCorpseProfile",
            "Child3": "TryGatekeeperOpen"
        },
        "TryMoveThenAnimaInversionCorpse": {
            "nodeName": "TryMoveThenAnimaInversionCorpse",
            "NodeType": "Selector",
            "Child0": "TryMoveForAnimaInversionCorpse",
            "Child1": "TryAnimaInversionCorpses"
        },
        "TryMoveForAnimaInversionCorpse": {
            "nodeName": "TryMoveForAnimaInversionCorpse",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityReady-AnimaInversion",
            "Child2": "FindPotentialAoETargets-AnimaInversionCorpseProfile",
            "Child3": "MoveStandardIfFirstAbility-AnimaInversion"
        },
        "TryAnimaInversionMixed": {
            "nodeName": "TryAnimaInversionMixed",
            "NodeType": "Selector",
            "Child0": "TryAnimaInversionMixedActivate",
            "Child1": "TryGatekeeperOpenIfAnimaInversionMixedReady"
        },
        "TryAnimaInversionMixedActivate": {
            "nodeName": "TryAnimaInversionMixedActivate",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-AnimaInversion",
            "Child1": "FindPotentialAoETargets-AnimaInversionMixedProfile",
            "Child2": "SelectAoETarget-AnimaInversionMixedProfile",
            "Child3": "SelectAbility-AnimaInversion"
        },
        "TryGatekeeperOpenIfAnimaInversionMixedReady": {
            "nodeName": "TryGatekeeperOpenIfAnimaInversionMixedReady",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-AnimaInversion",
            "Child1": "FindPotentialAoETargets-AnimaInversionMixedProfile",
            "Child2": "SelectAoETarget-AnimaInversionMixedProfile",
            "Child3": "TryGatekeeperOpen"
        },
        "TryMoveThenAnimaInversionMixed": {
            "nodeName": "TryMoveThenAnimaInversionMixed",
            "NodeType": "Selector",
            "Child0": "TryMoveForAnimaInversionMixed",
            "Child1": "TryAnimaInversionMixed"
        },
        "TryMoveForAnimaInversionMixed": {
            "nodeName": "TryMoveForAnimaInversionMixed",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityReady-AnimaInversion",
            "Child2": "FindPotentialAoETargets-AnimaInversionMixedProfile",
            "Child3": "MoveStandardIfFirstAbility-AnimaInversion"
        },
        "HasValidTarget-AnimaConsume": {
            "nodeName": "HasValidTarget-AnimaConsume",
            "NodeType": "Condition"
        },
        "SetTargetStack-AnimaConsume": {
            "nodeName": "SetTargetStack-AnimaConsume",
            "NodeType": "Action",
        },
        "TryAnimaConsumeOnEnemy": {
            "nodeName": "TryAnimaConsumeOnEnemy",
            "NodeType": "Sequence",
            "Child0": "HasWounds",
            "Child1": "IsAbilityReady-AnimaConsume",
            "Child2": "AnimaConsumeStepSelectorEnemy"
        },
        "AnimaConsumeStepSelectorEnemy": {
            "nodeName": "AnimaConsumeStepSelectorEnemy",
            "NodeType": "Selector",
            "Child0": "AnimaConsumeAttackEnemy",
            "Child1": "AnimaConsumeAttackEnemyUnopened",
            "Child2": "MoveMeleeIfFirstAbilityFANATIC"
        },
        "TryAnimaConsumeOnAlly": {
            "nodeName": "TryAnimaConsumeOnAlly",
            "NodeType": "Sequence",
            "Child0": "IsBloodied",
            "Child1": "IsVisibleToPlayer",
            "Child2": "IsAbilityReady-AnimaConsume",
            "Child3": "AnimaConsumeStepSelectorAlly"
        },
        "AnimaConsumeStepSelectorAlly": {
            "nodeName": "AnimaConsumeStepSelectorAlly",
            "NodeType": "Selector",
            "Child0": "AnimaConsumeAttackAlly",
            "Child1": "AnimaConsumeAttackAllyUnopened",
            "Child2": "MoveToPotentialMeleeIfFirstAbilityFANATIC"
        },
        "AnimaConsumeNotAvailable": {
            "nodeName": "AnimaConsumeNotAvailable",
            "NodeType": "Inverter",
            "Child0": "IsAbilityAvailable-AnimaConsume"
        },
        "IncludeAlliesAsMeleeTargets": {
            "nodeName": "IncludeAlliesAsMeleeTargets",
            "NodeType": "Action",
        },
        "AnimaConsumeAttackEnemy": {
            "nodeName": "AnimaConsumeAttackEnemy",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-AnimaConsume",
            "Child1": "SelectEnemyTargetForAnimaConsume",
            "Child2": "SelectAbility-AnimaConsume"
        },
        "AnimaConsumeAttackEnemyUnopened": {
            "nodeName": "AnimaConsumeAttackEnemyUnopened",
            "NodeType": "Sequence",
            "Child0": "AnimaConsumeNotAvailable",
            "Child1": "SelectPotentialTargetForEnemyAnimaConsume",
            "Child2": "IsTargetInAttackRange-StandardMelee",
            "Child3": "TryGatekeeperOpen"
        },
        "SelectPotentialTargetForEnemyAnimaConsume": {
            "nodeName": "SelectPotentialTargetForEnemyAnimaConsume",
            "NodeType": "Sequence",
            "Child0": "SetPotentialTargetStack",
            "Child1": "SelectBestEnemyTargetForAnimaConsume",
            "Child2": "HasValidTarget-Potential"
        },
        "SelectEnemyTargetForAnimaConsume": {
            "nodeName": "SelectEnemyTargetForAnimaConsume",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-AnimaConsume",
            "Child1": "SelectBestEnemyTargetForAnimaConsume",
            "Child2": "HasValidTarget-AnimaConsume"
        },
        "SelectBestEnemyTargetForAnimaConsume": {
            "nodeName": "SelectBestEnemyTargetForAnimaConsume",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluatePotentialMeleeTarget"
        },
        "AnimaConsumeAttackAlly": {
            "nodeName": "AnimaConsumeAttackAlly",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-AnimaConsume",
            "Child1": "SelectAllyTargetForAnimaConsume",
            "Child2": "SelectAbility-AnimaConsume"
        },
        "AnimaConsumeAttackAllyUnopened": {
            "nodeName": "AnimaConsumeAttackAllyUnopened",
            "NodeType": "Sequence",
            "Child0": "AnimaConsumeNotAvailable",
            "Child1": "SelectPotentialTargetForAllyAnimaConsume",
            "Child2": "IsTargetInAttackRange-StandardMelee",
            "Child3": "TryGatekeeperOpen"
        },
        "SelectPotentialTargetForAllyAnimaConsume": {
            "nodeName": "SelectPotentialTargetForAllyAnimaConsume",
            "NodeType": "Sequence",
            "Child0": "SetPotentialAllyTargetStack",
            "Child1": "SelectBestAllyTargetForAnimaConsume",
            "Child2": "HasValidTarget-Potential"
        },
        "SelectAllyTargetForAnimaConsume": {
            "nodeName": "SelectAllyTargetForAnimaConsume",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-AnimaConsume",
            "Child1": "SelectBestAllyTargetForAnimaConsume",
            "Child2": "HasValidTarget-AnimaConsume"
        },
        "SelectBestAllyTargetForAnimaConsume": {
            "nodeName": "SelectBestAllyTargetForAnimaConsume",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateAllyTargetForAnimaConsume"
        },
        "EvaluateAllyTargetForAnimaConsume": {
            "nodeName": "EvaluateAllyTargetForAnimaConsume",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "TargetScoreIfAllyWithinRangeAnimaConsume",
            "Child2": "UpdateBestTarget"
        },
        "TargetScoreIfAllyWithinRangeAnimaConsume": {
            "nodeName": "TargetScoreIfAllyWithinRangeAnimaConsume",
            "NodeType": "Successor",
            "Child0": "TargetScoreReachableAllyAnimaConsume"
        },
        "HasValidTarget-AnimaGate": {
            "nodeName": "HasValidTarget-AnimaGate",
            "NodeType": "Condition"
        },
        "SetTargetStack-AnimaGate": {
            "nodeName": "SetTargetStack-AnimaGate",
            "NodeType": "Action",
        },
        "GateKeeperShootIfAvailable": {
            "nodeName": "GateKeeperShootIfAvailable",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-AnimaGate",
            "Child1": "SetTargetStack-AnimaGate",
            "Child2": "SelectTargetForStandardShot",
            "Child3": "GatekeeperTryShootOrOpen"
        },
        "GatekeeperTryShootOrOpen": {
            "nodeName": "GatekeeperTryShootOrOpen",
            "NodeType": "Selector",
            "Child0": "GatekeeperShootIfTarget",
            "Child1": "TryGatekeeperOpen"
        },
        "GatekeeperShootIfTarget": {
            "nodeName": "GatekeeperShootIfTarget",
            "NodeType": "Sequence",
            "Child0": "HasValidTarget-AnimaGate",
            "Child1": "SelectAbility-AnimaGate"
        },
        "TryGatekeeperOpen": {
            "nodeName": "TryGatekeeperOpen",
            "NodeType": "Sequence",
            "Child0": "AffectedByEffect-GatekeeperClosedEffect",
            "Child1": "IsAbilityAvailable-GatekeeperOpen",
            "Child2": "SelectAbility-GatekeeperOpen"
        },
        "TryGatekeeperClose": {
            "nodeName": "TryGatekeeperClose",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-GatekeeperClose",
            "Child1": "SelectAbility-GatekeeperClose"
        },
        "IsOrCanOpen": {
            "nodeName": "IsOrCanOpen",
            "NodeType": "Selector",
            "Child0": "IsAbilityAvailable-GatekeeperOpen",
            "Child1": "AffectedByEffect-GatekeeperClosedEffect"
        },
        "TryRetract": {
            "nodeName": "TryRetract",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Retract",
            "Child1": "SelectAbility-Retract"
        },
        "TryPsiBomb": {
            "nodeName": "TryPsiBomb",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-PsiBombStage1",
            "Child1": "FindPotentialAoETargets-PsiBombProfile",
            "Child2": "SelectAoETarget-PsiBombProfile",
            "Child3": "SelectAbility-PsiBombStage1"
        },
        "TryTeleportDefensive": {
            "nodeName": "TryTeleportDefensive",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Teleport",
            "Child1": "ResetDestinationSearch",
            "Child2": "UseDashMovement",
            "Child3": "FindDestinationWithLoS-IsoTeleport",
            "Child4": "SelectAbility-Teleport"
        },
        "TryTeleportOffensive": {
            "nodeName": "TryTeleportOffensive",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Teleport",
            "Child1": "ResetDestinationSearch",
            "Child2": "RestrictToFlanking",
            "Child3": "UseDashMovement",
            "Child4": "FindDestinationWithLoS-Teleport",
            "Child5": "SelectAbility-Teleport"
        },
        "TryTriggerSuperposition": {
            "nodeName": "TryTriggerSuperposition",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-TriggerSuperposition",
            "Child1": "SelectAbility-TriggerSuperposition"
        },
        "SetTargetStack-ScythingClaws": {
            "nodeName": "SetTargetStack-ScythingClaws",
            "NodeType": "Action",
        },
        "HasValidTarget-ScythingClaws": {
            "nodeName": "HasValidTarget-ScythingClaws",
            "NodeType": "Condition"
        },
        "TryScythingClaws": {
            "nodeName": "TryScythingClaws",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-ScythingClaws",
            "Child1": "SelectTargetForScythingClaws",
            "Child2": "SelectAbility-ScythingClaws"
        },
        "SelectTargetForScythingClaws": {
            "nodeName": "SelectTargetForScythingClaws",
            "NodeType": "Selector",
            "Child0": "ScythingClaws_HitIdealTarget",
            "Child1": "ScythingClaws_AnyTargetWillDo"
        },
        "ScythingClaws_HitIdealTarget": {
            "nodeName": "ScythingClaws_HitIdealTarget",
            "NodeType": "Sequence",
            "Child0": "SelectPotentialMeleeTarget",
            "Child1": "FindPotentialAoETargets-ScythingClawsPrefTargetProfile",
            "Child2": "SelectAoETarget-ScythingClawsPrefTargetProfile"
        },
        "ScythingClaws_AnyTargetWillDo": {
            "nodeName": "ScythingClaws_AnyTargetWillDo",
            "NodeType": "Sequence",
            "Child0": "FindPotentialAoETargets-ScythingClawsProfile",
            "Child1": "SelectAoETarget-ScythingClawsProfile"
        },
        "TryWrathCannon": {
            "nodeName": "TryWrathCannon",
            "NodeType": "Failer",
            "Child0": "IsAbilityAvailable-WrathCannon"
        },
        "TryWrathCannon_TEMPDISABLED": {
            "nodeName": "TryWrathCannon_TEMPDISABLED",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-WrathCannon",
            "Child1": "FindPotentialAoETargets-WrathCannonProfile",
            "Child2": "SelectAoETarget-WrathCannonProfile",
            "Child3": "SelectAbility-WrathCannon"
        },
        "TryWrathCannonS1": {
            "nodeName": "TryWrathCannonS1",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-WrathCannonStage1",
            "Child1": "CannonNotCharging",
            "Child2": "FindPotentialAoETargets-WrathCannonS1Profile",
            "Child3": "SelectAoETarget-WrathCannonS1Profile",
            "Child4": "SelectAbility-WrathCannonStage1"
        },
        "CannonNotCharging": {
            "nodeName": "CannonNotCharging",
            "NodeType": "Inverter",
            "Child0": "AffectedByEffect-WrathCannonStage1Effect"
        },
        "MimicBeaconBehavior": {
            "nodeName": "MimicBeaconBehavior",
            "NodeType": "Sequence",
            "Child0": "IsUnitTypeVisible-MimicBeacon",
            "Child1": "MoveOrAttackMimicBeacon"
        },
        "IsUnitTypeVisible-MimicBeacon": {
            "nodeName": "IsUnitTypeVisible-MimicBeacon",
            "NodeType": "Condition"
        },
        "MoveOrAttackMimicBeacon": {
            "nodeName": "MoveOrAttackMimicBeacon",
            "NodeType": "Selector",
            "Child0": "MoveTowardMimicBeaconIfFirstAction",
            "Child1": "::AttackMimicBeacon",
            "Child2": "::MoveTowardMimicBeacon"
        },
        "MoveTowardMimicBeaconIfFirstAction": {
            "nodeName": "MoveTowardMimicBeaconIfFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "::MoveTowardMimicBeacon"
        },
        "::MoveTowardMimicBeacon": {
            "nodeName": "::MoveTowardMimicBeacon",
            "NodeType": "Selector",
            "Child0": "TryMeleeMoveTowardMimicBeacon",
            "Child1": "TryStandardMoveTowardMimicBeacon"
        },
        "TryStandardMoveTowardMimicBeacon": {
            "nodeName": "TryStandardMoveTowardMimicBeacon",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "FindDestinationTowardMimicBeacon",
            "Child2": "SelectAbility-StandardMove"
        },
        "FindDestinationTowardMimicBeacon": {
            "nodeName": "FindDestinationTowardMimicBeacon",
            "NodeType": "Selector",
            "Child0": "FindMimicBeaconDestWithStandardShot",
            "Child1": "FindPotentialMimicBeaconDest"
        },
        "FindMimicBeaconDestWithStandardShot": {
            "nodeName": "FindMimicBeaconDestWithStandardShot",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardShot",
            "Child1": "SelectMimicBeaconTargetForStandardShot",
            "Child2": "SetTargetAsPriority-StandardShot",
            "Child3": "RestrictToAbilityRange-StandardShot",
            "Child4": "FindRestrictedDestination-MimicBeacon"
        },
        "FindPotentialMimicBeaconDest": {
            "nodeName": "FindPotentialMimicBeaconDest",
            "NodeType": "Sequence",
            "Child0": "SelectPotentialMimicBeaconTarget",
            "Child1": "SetTargetAsPriority-Potential",
            "Child2": "SelectFindMimicBeaconMeleeOrStandardShot"
        },
        "SelectFindMimicBeaconMeleeOrStandardShot": {
            "nodeName": "SelectFindMimicBeaconMeleeOrStandardShot",
            "NodeType": "Selector",
            "Child0": "IfMeleeFindClosestPointToTarget",
            "Child1": "FindRestrictedDestination-MimicBeacon"
        },
        "IfMeleeFindClosestPointToTarget": {
            "nodeName": "IfMeleeFindClosestPointToTarget",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-StandardMelee",
            "Child1": "FindClosestPointToTarget-Potential"
        },
        "TryMeleeMoveTowardMimicBeacon": {
            "nodeName": "TryMeleeMoveTowardMimicBeacon",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-StandardMelee",
            "Child1": "SelectPotentialMimicBeaconTarget",
            "Child2": "RestrictToPotentialTargetRange-StandardMelee",
            "Child3": "FindRestrictedDestination-MeleeFanatic",
            "Child4": "SelectAbility-StandardMove"
        },
        "::AttackMimicBeacon": {
            "nodeName": "::AttackMimicBeacon",
            "NodeType": "Selector",
            "Child0": "TryStandardMeleeOnMimicBeacon",
            "Child1": "TryStandardShotOnMimicBeacon"
        },
        "FindClosestPointToTarget-Potential": {
            "nodeName": "FindClosestPointToTarget-Potential",
            "NodeType": "Action",
        },
        "SetTargetAsPriority-StandardShot": {
            "nodeName": "SetTargetAsPriority-StandardShot",
            "NodeType": "Action",
        },
        "SetTargetAsPriority-Potential": {
            "nodeName": "SetTargetAsPriority-Potential",
            "NodeType": "Action",
        },
        "TryStandardShotOnMimicBeacon": {
            "nodeName": "TryStandardShotOnMimicBeacon",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardShot",
            "Child1": "SelectMimicBeaconTargetForStandardShot",
            "Child2": "SelectAbility-StandardShot"
        },
        "SelectMimicBeaconTargetForStandardShot": {
            "nodeName": "SelectMimicBeaconTargetForStandardShot",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StandardShot",
            "Child1": "SelectMimicBeaconTarget",
            "Child2": "HasValidTarget-StandardShot"
        },
        "SelectMimicBeaconTarget": {
            "nodeName": "SelectMimicBeaconTarget",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateMimicBeaconTarget"
        },
        "EvaluateMimicBeaconTarget": {
            "nodeName": "EvaluateMimicBeaconTarget",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "SSTargetScoreMimicBeacon",
            "Child2": "UpdateBestTarget"
        },
        "SSTargetScoreMimicBeacon": {
            "nodeName": "SSTargetScoreMimicBeacon",
            "NodeType": "Successor",
            "Child0": "TargetScoreMimicBeacon"
        },
        "TargetScoreMimicBeacon": {
            "nodeName": "TargetScoreMimicBeacon",
            "NodeType": "Sequence",
            "Child0": "TargetTemplateNameIs-MimicBeacon",
            "Child1": "AddToTargetScore_100",
            "Child2": "MultipleUnitsVisibleOfType-MimicBeacon",
            "Child3": "IsTargetClosestOfType-MimicBeacon",
            "Child4": "AddToTargetScore_10"
        },
        "TargetTemplateNameIs-MimicBeacon": {
            "nodeName": "TargetTemplateNameIs-MimicBeacon",
            "NodeType": "Condition"
        },
        "MultipleUnitsVisibleOfType-MimicBeacon": {
            "nodeName": "MultipleUnitsVisibleOfType-MimicBeacon",
            "NodeType": "Condition"
        },
        "IsTargetClosestOfType-MimicBeacon": {
            "nodeName": "IsTargetClosestOfType-MimicBeacon",
            "NodeType": "Condition"
        },
        "SelectPotentialMimicBeaconTarget": {
            "nodeName": "SelectPotentialMimicBeaconTarget",
            "NodeType": "Sequence",
            "Child0": "SetVisiblePotentialTargetStack",
            "Child1": "SelectMimicBeaconTarget",
            "Child2": "HasValidTarget-Potential"
        },
        "TryStandardMeleeOnMimicBeacon": {
            "nodeName": "TryStandardMeleeOnMimicBeacon",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMelee",
            "Child1": "SelectMimicBeaconTargetForStandardMelee",
            "Child2": "SelectAbility-StandardMelee"
        },
        "SelectMimicBeaconTargetForStandardMelee": {
            "nodeName": "SelectMimicBeaconTargetForStandardMelee",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StandardMelee",
            "Child1": "SelectMimicBeaconTarget",
            "Child2": "HasValidTarget-StandardMelee"
        },
        "CivRoot": {
            "nodeName": "CivRoot",
            "NodeType": "Selector",
            "Child0": "CivCheckTerror",
            "Child1": "CivNormal"
        },
        "CivCheckTerror": {
            "nodeName": "CivCheckTerror",
            "NodeType": "Sequence",
            "Child0": "IsMissionOfType-Terror",
            "Child1": "CivTerror"
        },
        "CivTerror": {
            "nodeName": "CivTerror",
            "NodeType": "Selector",
            "Child0": "CivTerrorAI",
            "Child1": "SkipMove"
        },
        "CivTerrorAI": {
            "nodeName": "CivTerrorAI",
            "NodeType": "Sequence",
            "Child0": "IsAIInCivilianRadius",
            "Child1": "FindDestination-CivilianRed",
            "Child2": "SelectAbility-StandardMove"
        },
        "CivNormal": {
            "nodeName": "CivNormal",
            "NodeType": "Selector",
            "Child0": "CivHighSupportMove",
            "Child1": " CivLowSupportMove",
            "Child2": "SkipMove"
        },
        "CivHighSupportMove": {
            "nodeName": "CivHighSupportMove",
            "NodeType": "Sequence",
            "Child0": "HighPopularSupport",
            "Child1": "FindDestination-CivilianRed",
            "Child2": "SelectAbility-StandardMove"
        },
        "CivLowSupportMove": {
            "nodeName": "CivLowSupportMove",
            "NodeType": "Sequence",
            "Child0": "LowPopularSupport",
            "Child1": "FindDestination-CivilianRed",
            "Child2": "DoNoiseAlert",
            "Child3": "SelectAbility-StandardMove"
        },
        "HostileCivRoot": {
            "nodeName": "HostileCivRoot",
            "NodeType": "Sequence",
            "Child0": "DoNoiseAlert",
            "Child1": "FindDestination-CivilianRed",
            "Child2": "SelectAbility-StandardMove"
        },
        "FacelessCivRoot": {
            "nodeName": "FacelessCivRoot",
            "NodeType": "Selector",
            "Child0": "FacelessCivCheckTerror"
        },
        "FacelessCivCheckTerror": {
            "nodeName": "FacelessCivCheckTerror",
            "NodeType": "Sequence",
            "Child0": "IsMissionOfType-Terror",
            "Child1": "FacelessCivTerror"
        },
        "FacelessCivTerror": {
            "nodeName": "FacelessCivTerror",
            "NodeType": "Selector",
            "Child0": "CivTerrorAI",
            "Child1": "SkipMove"
        },
        "VIPCowardRoot": {
            "nodeName": "VIPCowardRoot",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "SkipTurnifGreenAlert",
            "Child2": "VIPCowardRedAlert",
            "Child3": "GenericAlertHandler"
        },
        "VIPCowardRedAlert": {
            "nodeName": "VIPCowardRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "VIPPickMovement"
        },
        "VIPPickMovement": {
            "nodeName": "VIPPickMovement",
            "NodeType": "Selector",
            "Child0": "IfWounded",
            "Child1": "MoveBackWithLOSIfFlanked",
            "Child2": "GenericRedAbilitySelector"
        },
        "IfWounded": {
            "nodeName": "IfWounded",
            "NodeType": "Sequence",
            "Child0": "HasWounds",
            "Child1": "FallBack"
        },
        "GenericCowardRoot": {
            "nodeName": "GenericCowardRoot",
            "NodeType": "Selector",
            "Child0": "GenericGreenMovement",
            "Child1": "CowardlyIfEnemySpotted",
            "Child2": "CowardlyIfEnemyNear"
        },
        "CowardlyIfEnemySpotted": {
            "nodeName": "CowardlyIfEnemySpotted",
            "NodeType": "Sequence",
            "Child0": "IsEnemySpotted",
            "Child1": "TryCowardlyEnemySpottedAction"
        },
        "TryCowardlyEnemySpottedAction": {
            "nodeName": "TryCowardlyEnemySpottedAction",
            "NodeType": "Selector",
            "Child0": "FallBackWithLoSIfFirstAbility",
            "Child1": "DoCower"
        },
        "CowardlyIfEnemyNear": {
            "nodeName": "CowardlyIfEnemyNear",
            "NodeType": "Sequence",
            "Child0": "IsYellowAlert",
            "Child1": "TryCowardYellowAction"
        },
        "TryCowardYellowAction": {
            "nodeName": "TryCowardYellowAction",
            "NodeType": "Selector",
            "Child0": "MoveDefensiveIfFirstAbility",
            "Child1": "DoCower"
        },
        "::CharacterRoot": {
            "nodeName": "::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "DoRedScreenFailure-BTFailure",
            "Child1": "TryJob",
            "Child2": "GenericGreenMovement",
            "Child3": "GenericRedAlert",
            "Child4": "GenericAlertHandler"
        },
        "DoRedScreenFailure-BTFailure": {
            "nodeName": "DoRedScreenFailure-BTFailure",
            "NodeType": "Action",
            "Param0": "RedScreen-Error On Behavior Tree! ::CharacterRoot not overridden! @acheng"
        },
        "GenericRedAlert": {
            "nodeName": "GenericRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "GenericRedAbilitySelector"
        },
        "GenericRedAbilitySelector": {
            "nodeName": "GenericRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "GenericRedFirstAction",
            "Child1": "GenericRedLastAction"
        },
        "GenericRedFirstAction": {
            "nodeName": "GenericRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "GenericRedFirstActionSelector"
        },
        "GenericRedFirstActionSelector": {
            "nodeName": "GenericRedFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "DoIfFlankedMove",
            "Child1": "SelectMoveStandard",
            "Child2": "TryShootOrReloadOrOverwatch",
            "Child3": "HuntEnemyWithCover"
        },
        "GenericRedLastAction": {
            "nodeName": "GenericRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "GenericRedLastActionSelector"
        },
        "GenericRedLastActionSelector": {
            "nodeName": "GenericRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryGrenade",
            "Child1": "TryShootOrReloadOrOverwatch",
            "Child2": "TryStandardMelee",
            "Child3": "HuntEnemyWithCover",
            "Child4": "SelectMoveStandard"
        },
        "GenericEnemyRootAGGRESSIVE": {
            "nodeName": "GenericEnemyRootAGGRESSIVE",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "GenericRedAlertAGGRESSIVE",
            "Child3": "GenericAlertHandler"
        },
        "GenericRedAlertAGGRESSIVE": {
            "nodeName": "GenericRedAlertAGGRESSIVE",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "AggressiveRedAbilitySelector"
        },
        "AggressiveRedAbilitySelector": {
            "nodeName": "AggressiveRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "AggressiveRedFirstAction",
            "Child1": "AggressiveRedLastAction"
        },
        "AggressiveRedFirstAction": {
            "nodeName": "AggressiveRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "AggressiveRedFirstActionSelector"
        },
        "AggressiveRedFirstActionSelector": {
            "nodeName": "AggressiveRedFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "AttackIfIdeal",
            "Child1": "DoIfFlankedMove",
            "Child2": "SelectMove_JobOrAggressive",
            "Child3": "TryShootOrReloadOrOverwatch",
            "Child4": "HuntEnemy"
        },
        "AggressiveRedLastAction": {
            "nodeName": "AggressiveRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "AggressiveRedLastActionSelector"
        },
        "AggressiveRedLastActionSelector": {
            "nodeName": "AggressiveRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "AttackIfFavorable",
            "Child1": "TryShootOrReloadOrOverwatch",
            "Child2": "HuntEnemy",
            "Child3": "SelectMove_JobOrAggressive"
        },
        "GenericEnemyNoCover": {
            "nodeName": "GenericEnemyNoCover",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "GenericNoCoverRedAlert",
            "Child3": "GenericAlertHandler"
        },
        "GenericNoCoverRedAlert": {
            "nodeName": "GenericNoCoverRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "GenericNoCoverRedAbilitySelector"
        },
        "GenericNoCoverRedAbilitySelector": {
            "nodeName": "GenericNoCoverRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "GenericNoCoverRedFirstAction",
            "Child1": "GenericNoCoverRedLastAction"
        },
        "GenericNoCoverRedFirstAction": {
            "nodeName": "GenericNoCoverRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "GenericNoCoverFirstActionSelector"
        },
        "GenericNoCoverFirstActionSelector": {
            "nodeName": "GenericNoCoverFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "SelectNCMove_JobOrFanatic",
            "Child1": "TryShootOrReloadOrOverwatch",
            "Child2": "HuntEnemy"
        },
        "GenericNoCoverRedLastAction": {
            "nodeName": "GenericNoCoverRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "GenericNoCoverRedLastActionSelector"
        },
        "GenericNoCoverRedLastActionSelector": {
            "nodeName": "GenericNoCoverRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryGrenade",
            "Child1": "TryShootOrReloadOrOverwatch",
            "Child2": "HuntEnemy",
            "Child3": "SelectNCMove_JobOrFanatic"
        },
        "GenericEnemyMeleeRoot": {
            "nodeName": "GenericEnemyMeleeRoot",
            "NodeType": "Selector",
            "Child0": "TryJobUnsafe",
            "Child1": "GenericGreenMovement",
            "Child2": "GenericMeleeRedAlert",
            "Child3": "GenericAlertHandler"
        },
        "GenericMeleeRedAlert": {
            "nodeName": "GenericMeleeRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "GenericMeleeRedAbilitySelector"
        },
        "GenericMeleeRedAbilitySelector": {
            "nodeName": "GenericMeleeRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MeleeRedFirstAction",
            "Child1": "MeleeRedLastAction"
        },
        "MeleeRedFirstAction": {
            "nodeName": "MeleeRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MeleeRedFirstActionSelector"
        },
        "MeleeRedFirstActionSelector": {
            "nodeName": "MeleeRedFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "TryStandardMeleeUnsafe",
            "Child1": "DoIfFlankedMove",
            "Child2": "SelectUnsafeMove_JobOrMelee",
            "Child3": "TryMoveThenGrenade",
            "Child4": "TryShootOrReloadOrOverwatch",
            "Child5": "HuntEnemyUnsafe"
        },
        "MeleeRedLastAction": {
            "nodeName": "MeleeRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "MeleeRedLastActionSelector"
        },
        "MeleeRedLastActionSelector": {
            "nodeName": "MeleeRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryStandardMeleeUnsafe",
            "Child1": "TryGrenade",
            "Child2": "TryShootOrReloadOrOverwatch",
            "Child3": "HuntEnemyUnsafe",
            "Child4": "SelectUnsafeMove_JobOrMelee"
        },
        "GenericEnemyMeleeRootFANATIC": {
            "nodeName": "GenericEnemyMeleeRootFANATIC",
            "NodeType": "Selector",
            "Child0": "TryJobUnsafe",
            "Child1": "GenericGreenMovement",
            "Child2": "GenericMeleeRedAlertFANATIC",
            "Child3": "GenericAlertHandler"
        },
        "GenericMeleeRedAlertFANATIC": {
            "nodeName": "GenericMeleeRedAlertFANATIC",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "GenericMeleeFANATICRedAbilitySelector"
        },
        "GenericMeleeFANATICRedAbilitySelector": {
            "nodeName": "GenericMeleeFANATICRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "TryStandardMeleeUnsafe",
            "Child1": "MoveMeleeFANATICUnsafe",
            "Child2": "TryShootOrReloadOrOverwatch",
            "Child3": "HuntEnemyUnsafe"
        },
        "MindControlledRoot": {
            "nodeName": "MindControlledRoot",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "MindControlledMove",
            "Child2": "MCTryGrenadeOption",
            "Child3": "TryStandardMeleeUnsafe",
            "Child4": "ShootIfAvailable",
            "Child5": "NeedsReload",
            "Child6": "TryOverwatch",
            "Child7": "SkipMove"
        },
        "MindControlledMove": {
            "nodeName": "MindControlledMove",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "ResetDestinationSearch",
            "Child3": "IgnoreHazards",
            "Child4": "MoveNoCover",
            "Child5": "FindDestination-Fanatic",
            "Child6": "SelectAbility-StandardMove"
        },
        "MCTryGrenadeOption": {
            "nodeName": "MCTryGrenadeOption",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-ThrowGrenade",
            "Child1": "DoesGrenadeCauseDamage",
            "Child2": "FindPotentialAoETargets-GrenadeMindControlledProfile",
            "Child3": "MCSetUpAndSelectGrenade"
        },
        "MCSetUpAndSelectGrenade": {
            "nodeName": "MCSetUpAndSelectGrenade",
            "NodeType": "Sequence",
            "Child0": "SelectAoETarget-GrenadeMindControlledProfile",
            "Child1": "SelectAbility-ThrowGrenade"
        },
        "PanickedRoot": {
            "nodeName": "PanickedRoot",
            "NodeType": "Selector",
            "Child0": "Panicked_FirstAction",
            "Child1": "Panicked_LastAction",
            "Child2": "SkipMove"
        },
        "Panicked_FirstAction": {
            "nodeName": "Panicked_FirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "Panicked_FirstAction_Selector"
        },
        "Panicked_FirstAction_Selector": {
            "nodeName": "Panicked_FirstAction_Selector",
            "NodeType": "Selector",
            "Child0": "PanickedMove",
            "Child1": "PanickedAction",
            "Child2": "SkipMove"
        },
        "Panicked_LastAction": {
            "nodeName": "Panicked_LastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "Panicked_LastAction_Selector"
        },
        "Panicked_LastAction_Selector": {
            "nodeName": "Panicked_LastAction_Selector",
            "NodeType": "Selector",
            "Child0": "PanickedAction",
            "Child1": "PanickedMove",
            "Child2": "SkipMove"
        },
        "PanickedMove": {
            "nodeName": "PanickedMove",
            "NodeType": "Selector",
            "Child0": "PanickedFallBackUnsafe",
            "Child1": "MoveDefensiveWithLoSUnsafe",
            "Child2": "MoveDefensiveUnsafe"
        },
        "PanickedAction": {
            "nodeName": "PanickedAction",
            "NodeType": "RandSelector",
            "Child0": "ShootRandomTargetForPanic",
            "Param0": "5",
            "Child1": "TryPanickedGrenadeToss",
            "Param1": "1",
            "Child2": "DoCower",
            "Param2": "2"
        },
        "ShootRandomTargetForPanic": {
            "nodeName": "ShootRandomTargetForPanic",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardShot",
            "Child1": "SelectRandomTargetForPanic",
            "Child2": "SelectAbility-StandardShot"
        },
        "SelectRandomTargetForPanic": {
            "nodeName": "SelectRandomTargetForPanic",
            "NodeType": "Selector",
            "Child0": "IfTeamXComSelectAnyRandomTarget",
            "Child1": "IfNotTeamXComSelectRandomTeammateTarget"
        },
        "IfTeamXComSelectAnyRandomTarget": {
            "nodeName": "IfTeamXComSelectAnyRandomTarget",
            "NodeType": "Sequence",
            "Child0": "IsTeam-eTeam_XCom",
            "Child1": "SelectRandomEnemyTarget"
        },
        "IfNotTeamXComSelectRandomTeammateTarget": {
            "nodeName": "IfNotTeamXComSelectRandomTeammateTarget",
            "NodeType": "Sequence",
            "Child0": "NotTeamXCom",
            "Child1": "SelectRandomTeammateTarget"
        },
        "IsTeam-eTeam_XCom": {
            "nodeName": "IsTeam-eTeam_XCom",
            "NodeType": "Condition"
        },
        "NotTeamXCom": {
            "nodeName": "NotTeamXCom",
            "NodeType": "Inverter",
            "Child0": "IsTeam-eTeam_XCom"
        },
        "SelectRandomEnemyTarget": {
            "nodeName": "SelectRandomEnemyTarget",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StandardShot",
            "Child1": "SelectEnemyTargetRandomly",
            "Child2": "HasValidTarget-StandardShot"
        },
        "SelectEnemyTargetRandomly": {
            "nodeName": "SelectEnemyTargetRandomly",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateEnemyTargetRandomly"
        },
        "EvaluateEnemyTargetRandomly": {
            "nodeName": "EvaluateEnemyTargetRandomly",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "SSScoreEnemyTargetRandomly",
            "Child2": "UpdateBestTarget"
        },
        "SSScoreEnemyTargetRandomly": {
            "nodeName": "SSScoreEnemyTargetRandomly",
            "NodeType": "Successor",
            "Child0": "ScoreEnemyTargetRandomly"
        },
        "ScoreEnemyTargetRandomly": {
            "nodeName": "ScoreEnemyTargetRandomly",
            "NodeType": "Sequence",
            "Child0": "TargetIsEnemy",
            "Child1": "GenericScoreTargetRandomlySequence"
        },
        "SelectRandomTeammateTarget": {
            "nodeName": "SelectRandomTeammateTarget",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StandardShot",
            "Child1": "SelectTeammateTargetRandomly",
            "Child2": "HasValidTarget-StandardShot"
        },
        "SelectTeammateTargetRandomly": {
            "nodeName": "SelectTeammateTargetRandomly",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateTeammateTargetRandomly"
        },
        "EvaluateTeammateTargetRandomly": {
            "nodeName": "EvaluateTeammateTargetRandomly",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "SSScoreTeammateTargetRandomly",
            "Child2": "UpdateBestTarget"
        },
        "SSScoreTeammateTargetRandomly": {
            "nodeName": "SSScoreTeammateTargetRandomly",
            "NodeType": "Successor",
            "Child0": "ScoreTeammateTargetRandomly"
        },
        "ScoreTeammateTargetRandomly": {
            "nodeName": "ScoreTeammateTargetRandomly",
            "NodeType": "Sequence",
            "Child0": "TargetIsAlly",
            "Child1": "GenericScoreTargetRandomlySequence"
        },
        "PanickedFallBackUnsafe": {
            "nodeName": "PanickedFallBackUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "FindFriendlyFallbackDestination",
            "Child2": "SelectAbility-StandardMove"
        },
        "GenericScamperRoot": {
            "nodeName": "GenericScamperRoot",
            "NodeType": "Selector",
            "Child0": "CounterBeaglerushManeuver",
            "Child1": "MoveStandardWithLoSUnsafe",
            "Child2": "MoveStandardUnsafe",
            "Child3": "SkipMove"
        },
        "ScamperRoot_Soldier": {
            "nodeName": "ScamperRoot_Soldier",
            "NodeType": "Selector",
            "Child0": "CounterBeaglerushManeuver",
            "Child1": "MoveDefensiveWithLoSUnsafe",
            "Child2": "MoveStandardUnsafe",
            "Child3": "SkipMove"
        },
        "ScamperRoot_Flanker": {
            "nodeName": "ScamperRoot_Flanker",
            "NodeType": "Selector",
            "Child0": "CounterBeaglerushManeuver",
            "Child1": "MoveFlankingUnsafe",
            "Child2": "MoveStandardWithLoSUnsafe",
            "Child3": "MoveStandardUnsafe",
            "Child4": "SkipMove"
        },
        "ScamperRoot_NoCover": {
            "nodeName": "ScamperRoot_NoCover",
            "NodeType": "Selector",
            "Child0": "CounterBeaglerushManeuver",
            "Child1": "MoveNoCoverUnsafe",
            "Child2": "SkipMove"
        },
        "ScamperRoot_Overwatch": {
            "nodeName": "ScamperRoot_Overwatch",
            "NodeType": "Selector",
            "Child0": "CounterBeaglerushManeuver",
            "Child1": "OverwatchIfTargetAvailable",
            "Child2": "MoveNoCoverUnsafe",
            "Child3": "SkipMove"
        },
        "ScamperRoot_MeleeNoCover": {
            "nodeName": "ScamperRoot_MeleeNoCover",
            "NodeType": "Selector",
            "Child0": "CounterBeaglerushManeuver",
            "Child1": "MoveMeleeFANATICUnsafe",
            "Child2": "MoveNoCoverUnsafe",
            "Child3": "SkipMove"
        },
        "CounterBeaglerushManeuver": {
            "nodeName": "CounterBeaglerushManeuver",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardShot",
            "Child1": "SelectFlankedEnemyTarget",
            "Child2": "ShootTargetChanceOnScamper"
        },
        "SelectFlankedEnemyTarget": {
            "nodeName": "SelectFlankedEnemyTarget",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StandardShot",
            "Child1": "EvaluateFlankedEnemyTargets",
            "Child2": "HasValidTarget-StandardShot"
        },
        "EvaluateFlankedEnemyTargets": {
            "nodeName": "EvaluateFlankedEnemyTargets",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateFlankedEnemies"
        },
        "EvaluateFlankedEnemies": {
            "nodeName": "EvaluateFlankedEnemies",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "SSScoreFlankedEnemy",
            "Child2": "UpdateBestTarget"
        },
        "SSScoreFlankedEnemy": {
            "nodeName": "SSScoreFlankedEnemy",
            "NodeType": "Successor",
            "Child0": "ScoreFlankedEnemy"
        },
        "IsActiveTeam-eTeam_XCom": {
            "nodeName": "IsActiveTeam-eTeam_XCom",
            "NodeType": "Condition"
        },
        "NotActiveTeamXCom": {
            "nodeName": "NotActiveTeamXCom",
            "NodeType": "Inverter",
            "Child0": "IsActiveTeam-eTeam_XCom"
        },
        "ScoreFlankedEnemy": {
            "nodeName": "ScoreFlankedEnemy",
            "NodeType": "Sequence",
            "Child0": "IsTargetScamperInstigator",
            "Child1": "WasTargetPreviouslyConcealed",
            "Child2": "NotActiveTeamXCom",
            "Child3": "IsFlankingTarget",
            "Child4": "TargetIsEnemy",
            "Child5": "TargetNotMindControlled",
            "Child6": "TargetNotBoundOrPanicked",
            "Child7": "GenericTargetEvaluations"
        },
        "TargetNotMindControlled": {
            "nodeName": "TargetNotMindControlled",
            "NodeType": "Inverter",
            "Child0": "TargetAffectedByEffect-MindControl"
        },
        "TargetNotBoundOrPanicked": {
            "nodeName": "TargetNotBoundOrPanicked",
            "NodeType": "Inverter",
            "Child0": "IsLastResortTarget"
        },
        "TargetAffectedByEffect-MindControl": {
            "nodeName": "TargetAffectedByEffect-MindControl",
            "NodeType": "Condition"
        },
        "IsTargetScamperInstigator": {
            "nodeName": "IsTargetScamperInstigator",
            "NodeType": "Condition"
        },
        "WasTargetPreviouslyConcealed": {
            "nodeName": "WasTargetPreviouslyConcealed",
            "NodeType": "Condition"
        },
        "ShootTargetChanceOnScamper": {
            "nodeName": "ShootTargetChanceOnScamper",
            "NodeType": "RandFilter",
            "Child0": "SelectAbility-StandardShot",
            "Param0": "50"
        },
        "AdventTrooper::CharacterRoot": {
            "nodeName": "AdventTrooper::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "AdvTrooper_RedAlert",
            "Child3": "GenericAlertHandler"
        },
        "AdvTrooper_RedAlert": {
            "nodeName": "AdvTrooper_RedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "AdvTrooper_RedAbilitySelector"
        },
        "AdvTrooper_RedAbilitySelector": {
            "nodeName": "AdvTrooper_RedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "AdventRedFirstAction",
            "Child2": "AdventRedLastAction"
        },
        "AdventRedFirstAction": {
            "nodeName": "AdventRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "AdventRedFirstActionSelector"
        },
        "AdventRedFirstActionSelector": {
            "nodeName": "AdventRedFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "DoIfFlankedMove",
            "Child1": "SelectMove_JobOrAggressive",
            "Child2": "TryMoveThenGrenade",
            "Child3": "TryShootOrReloadOrOverwatch",
            "Child4": "HuntEnemyWithCover"
        },
        "AdventRedLastAction": {
            "nodeName": "AdventRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "AdventRedLastActionSelector"
        },
        "AdventRedLastActionSelector": {
            "nodeName": "AdventRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryGrenade",
            "Child1": "TryShootOrReloadOrOverwatch",
            "Child2": "HuntEnemyWithCover",
            "Child3": "SelectMove_JobOrAggressive"
        },
        "AdventCaptain::CharacterRoot": {
            "nodeName": "AdventCaptain::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "AdvCaptain_RedAlert",
            "Child3": "GenericAlertHandler"
        },
        "AdvCaptain_RedAlert": {
            "nodeName": "AdvCaptain_RedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "AdvCaptain_RedAbilitySelector"
        },
        "AdvCaptain_RedAbilitySelector": {
            "nodeName": "AdvCaptain_RedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "AdvCaptain_RedFirstAction",
            "Child2": "AdvCaptain_RedLastAction"
        },
        "AdvCaptain_RedFirstAction": {
            "nodeName": "AdvCaptain_RedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "AdvCaptain_RedFirstActionSelector"
        },
        "AdvCaptain_RedFirstActionSelector": {
            "nodeName": "AdvCaptain_RedFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "DoIfFlankedMove",
            "Child1": "TryMarkTargetOption",
            "Child2": "SelectMove_JobOrDefensive",
            "Child3": "AdvCaptainTryMoveThenGrenade",
            "Child4": "TryShootOrReloadOrOverwatch",
            "Child5": "HuntEnemyWithCover"
        },
        "AdvCaptain_RedLastAction": {
            "nodeName": "AdvCaptain_RedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "AdvCaptain_RedLastActionSelector"
        },
        "AdvCaptain_RedLastActionSelector": {
            "nodeName": "AdvCaptain_RedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryMarkTargetOption",
            "Child1": "AdvCaptainTryGrenade",
            "Child2": "TryShootOrReloadOrOverwatch",
            "Child3": "HuntEnemyWithCover",
            "Child4": "SelectMove_JobOrDefensive"
        },
        "AdvCaptainTryMoveThenGrenade": {
            "nodeName": "AdvCaptainTryMoveThenGrenade",
            "NodeType": "Sequence",
            "Child0": "IsAdvCaptainQualifiedForGrenade",
            "Child1": "TryMoveThenGrenade"
        },
        "AdvCaptainTryGrenade": {
            "nodeName": "AdvCaptainTryGrenade",
            "NodeType": "Sequence",
            "Child0": "IsAdvCaptainQualifiedForGrenade",
            "Child1": "TryGrenade"
        },
        "IsAdvCaptainQualifiedForGrenade": {
            "nodeName": "IsAdvCaptainQualifiedForGrenade",
            "NodeType": "Selector",
            "Child0": "NotAdvCaptainM1",
            "Child1": "IsDifficultyAboveNormal"
        },
        "NotAdvCaptainM1": {
            "nodeName": "NotAdvCaptainM1",
            "NodeType": "Inverter",
            "Child0": "TemplateNameIs-AdvCaptainM1"
        },
        "TemplateNameIs-AdvCaptainM1": {
            "nodeName": "TemplateNameIs-AdvCaptainM1",
            "NodeType": "Condition"
        },
        "AdventStunLancer::CharacterRoot": {
            "nodeName": "AdventStunLancer::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "AdventSL_RedAlert",
            "Child3": "GenericAlertHandler"
        },
        "AdventSL_RedAlert": {
            "nodeName": "AdventSL_RedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "AdventSL_RedAbilitySelector"
        },
        "AdventSL_RedAbilitySelector": {
            "nodeName": "AdventSL_RedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "AdventSLFirstAction",
            "Child2": "AdventSLLastAction"
        },
        "AdventSLFirstAction": {
            "nodeName": "AdventSLFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "AdventSLFirstActionSelector"
        },
        "AdventSLFirstActionSelector": {
            "nodeName": "AdventSLFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "TryStunLance",
            "Child1": "DoIfFlankedMove",
            "Child2": "SelectMove_JobOrMelee",
            "Child3": "TryMoveThenGrenade",
            "Child4": "TryShootOrReloadOrOverwatch",
            "Child5": "HuntEnemyWithCover"
        },
        "AdventSLLastAction": {
            "nodeName": "AdventSLLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "AdventSLLastActionSelector"
        },
        "AdventSLLastActionSelector": {
            "nodeName": "AdventSLLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryStunLance",
            "Child1": "TryGrenade",
            "Child2": "TryShootOrReloadOrOverwatch",
            "Child3": "HuntEnemyWithCover",
            "Child4": "SelectMove_JobOrMelee"
        },
        "AdventShieldBearer::CharacterRoot": {
            "nodeName": "AdventShieldBearer::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "AdvShieldBearer_RedAlert",
            "Child3": "GenericAlertHandler"
        },
        "AdvShieldBearer_RedAlert": {
            "nodeName": "AdvShieldBearer_RedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "AdvShieldBearer_RedAbilitySelector"
        },
        "AdvShieldBearer_RedAbilitySelector": {
            "nodeName": "AdvShieldBearer_RedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "ShieldBearerFirstAction",
            "Child2": "ShieldBearerLastAction"
        },
        "ShieldBearerFirstAction": {
            "nodeName": "ShieldBearerFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "ShieldBearerFirstActionSelector"
        },
        "ShieldBearerFirstActionSelector": {
            "nodeName": "ShieldBearerFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "TryMoveForEnergyShield",
            "Child1": "TryEnergyShieldOnMultipleTargets",
            "Child2": "DoIfFlankedMove",
            "Child3": "SelectMove_JobOrDefensive",
            "Child4": "HuntEnemyWithCover",
            "Child5": "TryShootOrReloadOrOverwatch"
        },
        "TryMoveForEnergyShield": {
            "nodeName": "TryMoveForEnergyShield",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityReady-EnergyShield",
            "Child2": "NotLastActionPoint",
            "Child3": "MoveStandardIfFirstAbility-EnergyShield"
        },
        "ShieldBearerLastAction": {
            "nodeName": "ShieldBearerLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "ShieldBearerLastActionSelector"
        },
        "ShieldBearerLastActionSelector": {
            "nodeName": "ShieldBearerLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryEnergyShieldOnAnyTarget",
            "Child1": "TryShootOrReloadOrOverwatch",
            "Child2": "HuntEnemyWithCover",
            "Child3": "SelectMove_JobOrDefensive"
        },
        "AdventMEC::CharacterRoot": {
            "nodeName": "AdventMEC::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "MecMk1Branch",
            "Child1": "AdvMECMk2_Root"
        },
        "MecMk1Branch": {
            "nodeName": "MecMk1Branch",
            "NodeType": "Sequence",
            "Child0": "TemplateNameIs-AdvMEC_M1",
            "Child1": "AdvMEC_Root"
        },
        "TemplateNameIs-AdvMEC_M1": {
            "nodeName": "TemplateNameIs-AdvMEC_M1",
            "NodeType": "Condition"
        },
        "AdvMEC_Root": {
            "nodeName": "AdvMEC_Root",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "MECRedAlert",
            "Child3": "GenericAlertHandler"
        },
        "MECRedAlert": {
            "nodeName": "MECRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "MECRedAbilitySelector"
        },
        "MECRedAbilitySelector": {
            "nodeName": "MECRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "MECRedFirstAction",
            "Child2": "MECRedLastAction"
        },
        "MECRedFirstAction": {
            "nodeName": "MECRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MECFirstActionSelector"
        },
        "MECFirstActionSelector": {
            "nodeName": "MECFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "TryMoveThenMicroMissiles",
            "Child1": "SelectNCMove_JobOrFanatic",
            "Child2": "HuntEnemy",
            "Child3": "TryShootOrReloadOrOverwatch"
        },
        "MECRedLastAction": {
            "nodeName": "MECRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "MECRedLastActionSelector"
        },
        "MECRedLastActionSelector": {
            "nodeName": "MECRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryMicroMissiles",
            "Child1": "ShootOrSuppressIfNoGoodShot",
            "Child2": "HuntEnemy",
            "Child3": "SelectNCMove_JobOrFanatic",
            "Child4": "TryShootOrReloadOrOverwatch"
        },
        "AdvMECMk2_Root": {
            "nodeName": "AdvMECMk2_Root",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "MECMk2RedAlert",
            "Child3": "GenericAlertHandler"
        },
        "MECMk2RedAlert": {
            "nodeName": "MECMk2RedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "MECMk2RedAbilitySelector"
        },
        "MECMk2RedAbilitySelector": {
            "nodeName": "MECMk2RedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "MECMk2RedFirstAction",
            "Child2": "MECMk2RedLastAction"
        },
        "MECMk2RedFirstAction": {
            "nodeName": "MECMk2RedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MECMk2FirstActionSelector"
        },
        "MECMk2FirstActionSelector": {
            "nodeName": "MECMk2FirstActionSelector",
            "NodeType": "Selector",
            "Child0": "TryMoveThenMicroMissilesMk2",
            "Child1": "SelectNCMove_JobOrFanatic",
            "Child2": "HuntEnemy",
            "Child3": "TryShootOrReloadOrOverwatch"
        },
        "MECMk2RedLastAction": {
            "nodeName": "MECMk2RedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "MECMk2RedLastActionSelector"
        },
        "MECMk2RedLastActionSelector": {
            "nodeName": "MECMk2RedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryMicroMissilesMk2",
            "Child1": "ShootOrSuppressIfNoGoodShot",
            "Child2": "HuntEnemy",
            "Child3": "SelectNCMove_JobOrFanatic",
            "Child4": "TryShootOrReloadOrOverwatch"
        },
        "AdventPsiWitch::CharacterRoot": {
            "nodeName": "AdventPsiWitch::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "PsiWitchRedAlert",
            "Child3": "GenericAlertHandler"
        },
        "PsiWitchRedAlert": {
            "nodeName": "PsiWitchRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "PsiWitchRedAbilitySelector"
        },
        "PsiWitchRedAbilitySelector": {
            "nodeName": "PsiWitchRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "PsiWitchRedFirstAction",
            "Child2": "PsiWitchRedLastAction"
        },
        "PsiWitchRedFirstAction": {
            "nodeName": "PsiWitchRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "PsiWitchRedFirstActionSelector"
        },
        "PsiWitchRedFirstActionSelector": {
            "nodeName": "PsiWitchRedFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "TryMoveThenPsiMindControl",
            "Child1": "TryMoveThenDimensionalRift",
            "Child2": "TryMoveThenNullLance",
            "Child3": "DoIfFlankedMove",
            "Child4": "SelectMoveStandard",
            "Child5": "PsiWitchAttackSequencer",
            "Child6": "HuntEnemyWithCover",
            "Child7": "TryShootOrReloadOrOverwatch"
        },
        "PsiWitchRedLastAction": {
            "nodeName": "PsiWitchRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "PsiWitchRedLastActionSelector"
        },
        "PsiWitchRedLastActionSelector": {
            "nodeName": "PsiWitchRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "PsiWitchAttackSequencer",
            "Child1": "SelectMoveStandard",
            "Child2": "HuntEnemyWithCover"
        },
        "PsiWitchAttackSequencer": {
            "nodeName": "PsiWitchAttackSequencer",
            "NodeType": "Selector",
            "Child0": "TryPsiMindControl",
            "Child1": "TryDimensionalRift",
            "Child2": "TryNullLance",
            "Child3": "TryShootOrReloadOrOverwatch"
        },
        "AdventTurret::CharacterRoot": {
            "nodeName": "AdventTurret::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "Turret_RedAlert",
            "Child1": "TryOverwatch"
        },
        "Turret_RedAlert": {
            "nodeName": "Turret_RedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "TurretRedAbilitySelector"
        },
        "TurretRedAbilitySelector": {
            "nodeName": "TurretRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "TurretRedFirstActionSelector",
            "Child2": "ConsiderTakingOverwatch"
        },
        "TurretRedFirstActionSelector": {
            "nodeName": "TurretRedFirstActionSelector",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "Turret_TryShootOrReload"
        },
        "Turret_TryShootOrReload": {
            "nodeName": "Turret_TryShootOrReload",
            "NodeType": "Selector",
            "Child0": "Turret_ShootIfAvailable",
            "Child1": "NeedsReload"
        },
        "Turret_ShootIfAvailable": {
            "nodeName": "Turret_ShootIfAvailable",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardShot",
            "Child1": "Turret_SelectTargetForStandardShot",
            "Child2": "SelectAbility-StandardShot"
        },
        "Turret_SelectTargetForStandardShot": {
            "nodeName": "Turret_SelectTargetForStandardShot",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StandardShot",
            "Child1": "TurretSelectBestTarget",
            "Child2": "HasValidTarget-StandardShot"
        },
        "TurretSelectBestTarget": {
            "nodeName": "TurretSelectBestTarget",
            "NodeType": "RepeatUntilFail",
            "Child0": "TurretEvaluateTarget"
        },
        "TurretEvaluateTarget": {
            "nodeName": "TurretEvaluateTarget",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "TargetScoreHitChance",
            "Child2": "GenericScoreTargetRandomly",
            "Child3": "TargetScoreInvalidateCivilians",
            "Child4": "TargetScoreInvalidatePriorityObject",
            "Child5": "UpdateBestTarget"
        },
        "TargetScoreInvalidatePriorityObject": {
            "nodeName": "TargetScoreInvalidatePriorityObject",
            "NodeType": "Successor",
            "Child0": "ScoreTargetOutIfPriorityObject"
        },
        "ScoreTargetOutIfPriorityObject": {
            "nodeName": "ScoreTargetOutIfPriorityObject",
            "NodeType": "Sequence",
            "Child0": "TargetIsPriorityObject",
            "Child1": "AddToTargetScore_-1000"
        },
        "Andromedon::CharacterRoot": {
            "nodeName": "Andromedon::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "AndromedonRobotBranch",
            "Child1": "AndromedonRoot"
        },
        "AndromedonRobotBranch": {
            "nodeName": "AndromedonRobotBranch",
            "NodeType": "Sequence",
            "Child0": "TemplateNameIs-AndromedonRobot",
            "Child1": "AndromedonRobotRoot"
        },
        "TemplateNameIs-AndromedonRobot": {
            "nodeName": "TemplateNameIs-AndromedonRobot",
            "NodeType": "Condition"
        },
        "AndromedonRoot": {
            "nodeName": "AndromedonRoot",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "AndromedonRedAlert",
            "Child3": "GenericAlertHandler"
        },
        "AndromedonRedAlert": {
            "nodeName": "AndromedonRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "AndromedonRedAbilitySelector"
        },
        "AndromedonRedAbilitySelector": {
            "nodeName": "AndromedonRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "AndromedonRedFirstAction",
            "Child2": "AndromedonRedLastAction"
        },
        "AndromedonRedFirstAction": {
            "nodeName": "AndromedonRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "AndromedonRedFirstActionSelector"
        },
        "AndromedonRedFirstActionSelector": {
            "nodeName": "AndromedonRedFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "TryStandardMelee",
            "Child1": "TryMoveThenAcidBlob",
            "Child2": "DoIfFlankedMove",
            "Child3": "SelectMoveStandard",
            "Child4": "TryShootOrReloadOrOverwatch",
            "Child5": "HuntEnemyWithCover"
        },
        "AndromedonRedLastAction": {
            "nodeName": "AndromedonRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "AndromedonRedLastActionSelector"
        },
        "AndromedonRedLastActionSelector": {
            "nodeName": "AndromedonRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryStandardMelee",
            "Child1": "TryAcidBlob",
            "Child2": "TryShootOrReloadOrOverwatch",
            "Child3": "HuntEnemyWithCover",
            "Child4": "SelectMoveStandard"
        },
        "AndromedonRobot::CharacterRoot": {
            "nodeName": "AndromedonRobot::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "GenericEnemyMeleeRootFANATIC"
        },
        "AndromedonRobotRoot": {
            "nodeName": "AndromedonRobotRoot",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "GenericEnemyMeleeRootFANATIC"
        },
        "Archon::CharacterRoot": {
            "nodeName": "Archon::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "ArchonRedAlert",
            "Child3": "GenericAlertHandler"
        },
        "ArchonRedAlert": {
            "nodeName": "ArchonRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "ArchonRedAbilitySelector"
        },
        "ArchonRedAbilitySelector": {
            "nodeName": "ArchonRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "ArchonRedFirstAction",
            "Child2": "ArchonRedLastAction"
        },
        "ArchonRedFirstAction": {
            "nodeName": "ArchonRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "ArchonFirstActionSelector"
        },
        "ArchonFirstActionSelector": {
            "nodeName": "ArchonFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "TryFrenziedMoveAndAttack",
            "Child1": "TryMoveThenBlazingPinions",
            "Child2": "TryStandardMelee",
            "Child3": "DoIfFlankedMove",
            "Child4": "SelectMoveStandard",
            "Child5": "TryShootOrReloadOrOverwatch",
            "Child6": "HuntEnemyWithCover"
        },
        "TryMoveThenBlazingPinions": {
            "nodeName": "TryMoveThenBlazingPinions",
            "NodeType": "Selector",
            "Child0": "TryMoveForBlazingPinions",
            "Child1": "TryBlazingPinions"
        },
        "TryMoveForBlazingPinions": {
            "nodeName": "TryMoveForBlazingPinions",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityReady-BlazingPinionsStage1",
            "Child2": "FindPotentialAoETargets-BlazingPinionsBasicProfile",
            "Child3": "MoveStandardIfFirstAbility-BlazingPinions"
        },
        "ArchonRedLastAction": {
            "nodeName": "ArchonRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "ArchonRedLastActionSelector"
        },
        "ArchonRedLastActionSelector": {
            "nodeName": "ArchonRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryFrenziedAttack",
            "Child1": "TryBlazingPinions",
            "Child2": "TryStandardMelee",
            "Child3": "TryShootOrReloadOrOverwatch",
            "Child4": "HuntEnemy",
            "Child5": "SelectMoveStandard"
        },
        "TryFrenziedAttack": {
            "nodeName": "TryFrenziedAttack",
            "NodeType": "Sequence",
            "Child0": "AffectedByEffect-FrenzyEffect",
            "Child1": "TryStandardMelee"
        },
        "TryFrenziedMoveAndAttack": {
            "nodeName": "TryFrenziedMoveAndAttack",
            "NodeType": "Sequence",
            "Child0": "AffectedByEffect-FrenzyEffect",
            "Child1": "TryAttackOrDashAndAttack"
        },
        "TryAttackOrDashAndAttack": {
            "nodeName": "TryAttackOrDashAndAttack",
            "NodeType": "Selector",
            "Child0": "TryStandardMelee",
            "Child1": "TryStandardMeleeDashFANATICUnsafe"
        },
        "Berserker::CharacterRoot": {
            "nodeName": "Berserker::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "TryJobUnsafe",
            "Child1": "GenericGreenMovement",
            "Child2": "BerserkerMeleeRedAlert",
            "Child3": "GenericAlertHandler"
        },
        "BerserkerMeleeRedAlert": {
            "nodeName": "BerserkerMeleeRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "Berserker_RedAbilitySelector"
        },
        "Berserker_RedAbilitySelector": {
            "nodeName": "Berserker_RedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "BerserkerRedFirstAction",
            "Child2": "BerserkerRedLastAction"
        },
        "BerserkerRedFirstAction": {
            "nodeName": "BerserkerRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "BerserkerRedFirstActionSelector"
        },
        "BerserkerRedFirstActionSelector": {
            "nodeName": "BerserkerRedFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "TryBerserkerMelee",
            "Child1": "MoveMeleeDashFANATICUnsafe",
            "Child2": "HuntEnemyUnsafe"
        },
        "BerserkerRedLastAction": {
            "nodeName": "BerserkerRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "BerserkerRedLastActionSelector"
        },
        "BerserkerRedLastActionSelector": {
            "nodeName": "BerserkerRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryBerserkerMelee",
            "Child1": "MoveMeleeDashFANATICUnsafe",
            "Child2": "HuntEnemyUnsafe"
        },
        "Chryssalid::CharacterRoot": {
            "nodeName": "Chryssalid::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "ChryssalidCocoonBranch",
            "Child1": "ChryssalidRoot"
        },
        "ChryssalidCocoonBranch": {
            "nodeName": "ChryssalidCocoonBranch",
            "NodeType": "Sequence",
            "Child0": "IsChryssalidCocoon",
            "Child1": "CocoonRoot"
        },
        "IsChryssalidCocoon": {
            "nodeName": "IsChryssalidCocoon",
            "NodeType": "Selector",
            "Child0": "TemplateNameIs-ChryssalidCocoon",
            "Child1": "TemplateNameIs-ChryssalidCocoonHuman"
        },
        "TemplateNameIs-ChryssalidCocoon": {
            "nodeName": "TemplateNameIs-ChryssalidCocoon",
            "NodeType": "Condition"
        },
        "TemplateNameIs-ChryssalidCocoonHuman": {
            "nodeName": "TemplateNameIs-ChryssalidCocoonHuman",
            "NodeType": "Condition"
        },
        "ChryssalidRoot": {
            "nodeName": "ChryssalidRoot",
            "NodeType": "Selector",
            "Child0": "ChryssalidHeatSeekProtocol",
            "Child1": "SkipIfBurrowed",
            "Child2": "TryJobTerrorist",
            "Child3": "TryJobChargerUnsafe",
            "Child4": "ChryssalidGreenAlert",
            "Child5": "ChryssalidRedAlert",
            "Child6": "ChryssalidYellowAlert"
        },
        "ChryssalidRedAlert": {
            "nodeName": "ChryssalidRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "ChryssalidRedAbilitySelector"
        },
        "ChryssalidRedAbilitySelector": {
            "nodeName": "ChryssalidRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "TryJobUnsafe",
            "Child1": "MimicBeaconBehavior",
            "Child2": "ChryssalidRedActionSelector"
        },
        "ChryssalidRedActionSelector": {
            "nodeName": "ChryssalidRedActionSelector",
            "NodeType": "Selector",
            "Child0": "TryMelee66",
            "Child1": "TryRunAndBurrow33"
        },
        "TryMelee66": {
            "nodeName": "TryMelee66",
            "NodeType": "Sequence",
            "Child0": "SSSetMeleeValueIfUnset",
            "Child1": "CheckMeleeUnder67",
            "Child2": "ChryssalidMeleeSelector"
        },
        "SSSetMeleeValueIfUnset": {
            "nodeName": "SSSetMeleeValueIfUnset",
            "NodeType": "Successor",
            "Child0": "SetMeleeValueIfUnset"
        },
        "SetMeleeValueIfUnset": {
            "nodeName": "SetMeleeValueIfUnset",
            "NodeType": "Sequence",
            "Child0": "MeleeValueUnset",
            "Child1": "SetMeleeValue"
        },
        "MeleeValueUnset": {
            "nodeName": "MeleeValueUnset",
            "NodeType": "Inverter",
            "Child0": "HasUnitValue-MeleeChance"
        },
        "HasUnitValue-MeleeChance": {
            "nodeName": "HasUnitValue-MeleeChance",
            "NodeType": "Condition"
        },
        "SetMeleeValue": {
            "nodeName": "SetMeleeValue",
            "NodeType": "Selector",
            "Child0": "DisableBurrowChanceIfIneligible",
            "Child1": "SetRandUnitValue-MeleeChance"
        },
        "DisableBurrowChanceIfIneligible": {
            "nodeName": "DisableBurrowChanceIfIneligible",
            "NodeType": "Sequence",
            "Child0": "BurrowOptionNotAvailable",
            "Child1": "SetUnitValue-MeleeChance"
        },
        "BurrowOptionNotAvailable": {
            "nodeName": "BurrowOptionNotAvailable",
            "NodeType": "Selector",
            "Child0": "IsAtEndOfAxisOfPlay",
            "Child1": "HasXComUnitsCloserToObjective"
        },
        "HasXComUnitsCloserToObjective": {
            "nodeName": "HasXComUnitsCloserToObjective",
            "NodeType": "Condition",
            "Param0": "10"
        },
        "IsAtEndOfAxisOfPlay": {
            "nodeName": "IsAtEndOfAxisOfPlay",
            "NodeType": "StatCondition",
            "Param0": "ObjectiveDistance",
            "Param1": "<:",
            "Param2": "27"
        },
        "SetRandUnitValue-MeleeChance": {
            "nodeName": "SetRandUnitValue-MeleeChance",
            "NodeType": "Action",
            "Param0": "100"
        },
        "SetUnitValue-MeleeChance": {
            "nodeName": "SetUnitValue-MeleeChance",
            "NodeType": "Action",
            "Param0": "1"
        },
        "TryRunAndBurrow33": {
            "nodeName": "TryRunAndBurrow33",
            "NodeType": "Sequence",
            "Child0": "CheckMeleeOver67",
            "Child1": "ChryssalidRunAndBurrowSelector"
        },
        "CheckMeleeUnder67": {
            "nodeName": "CheckMeleeUnder67",
            "NodeType": "StatCondition",
            "Param0": "UnitValue-MeleeChance",
            "Param1": "<",
            "Param2": "67"
        },
        "CheckMeleeOver67": {
            "nodeName": "CheckMeleeOver67",
            "NodeType": "StatCondition",
            "Param0": "UnitValue-MeleeChance",
            "Param1": ">:",
            "Param2": "67"
        },
        "ChryssalidRunAndBurrowSelector": {
            "nodeName": "ChryssalidRunAndBurrowSelector",
            "NodeType": "Selector",
            "Child0": "BurrowIfOutOfView",
            "Child1": "TryDashMoveForBurrow"
        },
        "BurrowIfOutOfView": {
            "nodeName": "BurrowIfOutOfView",
            "NodeType": "Sequence",
            "Child0": "NoVisibleEnemies",
            "Child1": "TryBurrow"
        },
        "ChryssalidMeleeSelector": {
            "nodeName": "ChryssalidMeleeSelector",
            "NodeType": "Selector",
            "Child0": "TryMeleeOnCivilian",
            "Child1": "TryStandardMeleeDashFANATICUnsafe",
            "Child2": "HuntEnemyUnsafe"
        },
        "TryMeleeOnCivilian": {
            "nodeName": "TryMeleeOnCivilian",
            "NodeType": "Sequence",
            "Child0": "NumKilledCiviliansIsLessThanTurnCount",
            "Child1": "HasVisibleCivilianInMoveRange",
            "Child2": "Rand50AttackCivilian"
        },
        "HasVisibleCivilianInMoveRange": {
            "nodeName": "HasVisibleCivilianInMoveRange",
            "NodeType": "Condition"
        },
        "Rand50AttackCivilian": {
            "nodeName": "Rand50AttackCivilian",
            "NodeType": "RandFilter",
            "Child0": "MeleeAttackNearestCivilian",
            "Param0": "50"
        },
        "MeleeAttackNearestCivilian": {
            "nodeName": "MeleeAttackNearestCivilian",
            "NodeType": "Sequence",
            "Child0": "SelectClosestCivilianInRange",
            "Child1": "SelectAbility-StandardMelee"
        },
        "SelectClosestCivilianInRange": {
            "nodeName": "SelectClosestCivilianInRange",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-StandardMelee",
            "Child1": "SelectClosestCivilianForStandardMelee",
            "Child2": "HasValidTarget-StandardMelee"
        },
        "SelectClosestCivilianForStandardMelee": {
            "nodeName": "SelectClosestCivilianForStandardMelee",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateMeleeTargetForClosestCivilian"
        },
        "EvaluateMeleeTargetForClosestCivilian": {
            "nodeName": "EvaluateMeleeTargetForClosestCivilian",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "TargetScoreClosestCivilianIfInRange",
            "Child2": "UpdateBestTarget"
        },
        "TargetScoreClosestCivilianIfInRange": {
            "nodeName": "TargetScoreClosestCivilianIfInRange",
            "NodeType": "Successor",
            "Child0": "ScoreClosestCivilianIfInRange"
        },
        "ScoreClosestCivilianIfInRange": {
            "nodeName": "ScoreClosestCivilianIfInRange",
            "NodeType": "Sequence",
            "Child0": "TargetIsCivilian",
            "Child1": "TargetIsNotAlien",
            "Child2": "IsTargetInMovementRange-StandardMelee",
            "Child3": "TargetScoreByScaledDistance-1",
            "Child4": "AddToTargetScore_100"
        },
        "ChryssalidYellowAlert": {
            "nodeName": "ChryssalidYellowAlert",
            "NodeType": "Sequence",
            "Child0": "IsYellowAlert",
            "Child1": "ChryssalidYellowAbilitySelector"
        },
        "ChryssalidYellowAbilitySelector": {
            "nodeName": "ChryssalidYellowAbilitySelector",
            "NodeType": "Selector",
            "Child0": "ChryssalidHeatSeekProtocol",
            "Child1": "ChryssalidUnburrowedProtocol",
            "Child2": "TryJobUnsafe",
            "Child3": "GenericAlertHandler",
            "Child4": "SkipMove"
        },
        "ChryssalidHeatSeekProtocol": {
            "nodeName": "ChryssalidHeatSeekProtocol",
            "NodeType": "Sequence",
            "Child0": "ChryssalidShouldTriggerHeatSeek",
            "Child1": "AlertAndUnburrowOrHeatSeek"
        },
        "ChryssalidShouldTriggerHeatSeek": {
            "nodeName": "ChryssalidShouldTriggerHeatSeek",
            "NodeType": "Selector",
            "Child0": "BurrowedAndEncounterBandPassed",
            "Child1": "BurrowedandLastGroupRemaining",
            "Child2": "IsUnitTypeVisible-MimicBeacon"
        },
        "HasEncounterBandBeenPassed": {
            "nodeName": "HasEncounterBandBeenPassed",
            "NodeType": "Condition"
        },
        "BurrowedAndEncounterBandPassed": {
            "nodeName": "BurrowedAndEncounterBandPassed",
            "NodeType": "Sequence",
            "Child0": "AffectedByEffect-Burrowed",
            "Child1": "HasEncounterBandBeenPassed"
        },
        "BurrowedandLastGroupRemaining": {
            "nodeName": "BurrowedandLastGroupRemaining",
            "NodeType": "Sequence",
            "Child0": "AffectedByEffect-Burrowed",
            "Child1": "AreAllRemainingAlliesUnderEffect-Burrowed"
        },
        "AreAllRemainingAlliesUnderEffect-Burrowed": {
            "nodeName": "AreAllRemainingAlliesUnderEffect-Burrowed",
            "NodeType": "Condition"
        },
        "AlertAndUnburrowOrHeatSeek": {
            "nodeName": "AlertAndUnburrowOrHeatSeek",
            "NodeType": "Selector",
            "Child0": "TryAlert",
            "Child1": "TryUnburrow",
            "Child2": "MimicBeaconBehavior",
            "Child3": "SelectHeatSeekMove",
            "Child4": "GenericAlertHandler"
        },
        "TryAlert": {
            "nodeName": "TryAlert",
            "NodeType": "Sequence",
            "Child0": "IsGreenAlert",
            "Child1": "DisableGroupMove",
            "Child2": "SelectAnyYellowAlertTarget",
            "Child3": "SelectAbility-YellowAlert"
        },
        "SelectAnyYellowAlertTarget": {
            "nodeName": "SelectAnyYellowAlertTarget",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-YellowAlert",
            "Child1": "GenericSelectTargetRandomly",
            "Child2": "HasValidTarget-YellowAlert"
        },
        "SelectAbility-YellowAlert": {
            "nodeName": "SelectAbility-YellowAlert",
            "NodeType": "Action",
        },
        "SetTargetStack-YellowAlert": {
            "nodeName": "SetTargetStack-YellowAlert",
            "NodeType": "Action",
        },
        "HasValidTarget-YellowAlert": {
            "nodeName": "HasValidTarget-YellowAlert",
            "NodeType": "Condition"
        },
        "ChryssalidGreenAlert": {
            "nodeName": "ChryssalidGreenAlert",
            "NodeType": "Sequence",
            "Child0": "ShouldPatrol",
            "Child1": "ChryssalidGreenAbilitySelector"
        },
        "ChryssalidGreenAbilitySelector": {
            "nodeName": "ChryssalidGreenAbilitySelector",
            "NodeType": "Selector",
            "Child0": "ChryssalidUnburrowedProtocol",
            "Child1": "TryJobUnsafe",
            "Child2": "GenericGreenMovement"
        },
        "ChryssalidUnburrowedProtocol": {
            "nodeName": "ChryssalidUnburrowedProtocol",
            "NodeType": "Sequence",
            "Child0": "IsUnburrowed",
            "Child1": "GroupSize1",
            "Child2": "ChryssalidMoveOrBurrow"
        },
        "ChryssalidMoveOrBurrow": {
            "nodeName": "ChryssalidMoveOrBurrow",
            "NodeType": "Selector",
            "Child0": "MoveForBurrowIfFirstAction",
            "Child1": "TryBurrowIfNotOnJob",
            "Child2": "TryDashMoveForBurrow"
        },
        "MoveForBurrowIfFirstAction": {
            "nodeName": "MoveForBurrowIfFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "TryBurrowMovement"
        },
        "TryBurrowMovement": {
            "nodeName": "TryBurrowMovement",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "FindBurrowDestination",
            "Child2": "DisableGroupMove",
            "Child3": "SelectAbility-StandardMove"
        },
        "DisableGroupMove": {
            "nodeName": "DisableGroupMove",
            "NodeType": "Action",
        },
        "TryDashMoveForBurrow": {
            "nodeName": "TryDashMoveForBurrow",
            "NodeType": "Sequence",
            "Child0": "ResetDestinationSearch",
            "Child1": "UseDashMovement",
            "Child2": "TryBurrowMovement"
        },
        "FindBurrowDestination": {
            "nodeName": "FindBurrowDestination",
            "NodeType": "Selector",
            "Child0": "FindLocalBurrowDestination",
            "Child1": "FindClosestPointToAxisGround"
        },
        "FindLocalBurrowDestination": {
            "nodeName": "FindLocalBurrowDestination",
            "NodeType": "Sequence",
            "Child0": "SSRestrictToAxisLoSIfInRange",
            "Child1": "RestrictFromAlliesWithEffect-Burrowed",
            "Child2": "SSRestrictFromKnownEnemyLoS",
            "Child3": "SetNoCoverMovement",
            "Child4": "RestrictToGroundTiles",
            "Child5": "FindRestrictedDestination-Burrow"
        },
        "SSRestrictToAxisLoSIfInRange": {
            "nodeName": "SSRestrictToAxisLoSIfInRange",
            "NodeType": "Successor",
            "Child0": "RestrictToAxisLoSIfInRange"
        },
        "SSRestrictFromKnownEnemyLoS": {
            "nodeName": "SSRestrictFromKnownEnemyLoS",
            "NodeType": "Successor",
            "Child0": "RestrictFromKnownEnemyLoS"
        },
        "RestrictToAxisLoSIfInRange": {
            "nodeName": "RestrictToAxisLoSIfInRange",
            "NodeType": "Sequence",
            "Child0": "IsInMovementRangeOfAxisOfPlay",
            "Child1": "RestrictToAxisLoS"
        },
        "RestrictToAxisLoS": {
            "nodeName": "RestrictToAxisLoS",
            "NodeType": "Action",
        },
        "RestrictFromKnownEnemyLoS": {
            "nodeName": "RestrictFromKnownEnemyLoS",
            "NodeType": "Action",
        },
        "RestrictToGroundTiles": {
            "nodeName": "RestrictToGroundTiles",
            "NodeType": "Action",
        },
        "FindClosestPointToAxisGround": {
            "nodeName": "FindClosestPointToAxisGround",
            "NodeType": "Action",
        },
        "IsInMovementRangeOfAxisOfPlay": {
            "nodeName": "IsInMovementRangeOfAxisOfPlay",
            "NodeType": "Condition"
        },
        "RestrictFromAlliesWithEffect-Burrowed": {
            "nodeName": "RestrictFromAlliesWithEffect-Burrowed",
            "NodeType": "Action",
            "Param0": "10.0f"
        },
        "GroupSize1": {
            "nodeName": "GroupSize1",
            "NodeType": "StatCondition",
            "Param0": "GroupSize",
            "Param1": "<:",
            "Param2": "1"
        },
        "ChryssalidScamperRoot": {
            "nodeName": "ChryssalidScamperRoot",
            "NodeType": "Selector",
            "Child0": "SkipIfBurrowed",
            "Child1": "MoveMeleeFANATICUnsafe",
            "Child2": "SelectHeatSeekMove"
        },
        "SkipIfBurrowed": {
            "nodeName": "SkipIfBurrowed",
            "NodeType": "Sequence",
            "Child0": "AffectedByEffect-Burrowed",
            "Child1": "SkipMove"
        },
        "IsUnburrowed": {
            "nodeName": "IsUnburrowed",
            "NodeType": "Inverter",
            "Child0": "AffectedByEffect-Burrowed"
        },
        "CocoonRoot": {
            "nodeName": "CocoonRoot",
            "NodeType": "Selector",
            "Child0": "TrySpawnChryssalid",
            "Child1": "SkipMove"
        },
        "TryMoveThenPsiBomb": {
            "nodeName": "TryMoveThenPsiBomb",
            "NodeType": "Selector",
            "Child0": "TryTeleportForPsiBomb",
            "Child1": "TryMoveForPsiBomb",
            "Child2": "TryPsiBomb"
        },
        "TryTeleportForPsiBomb": {
            "nodeName": "TryTeleportForPsiBomb",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-PsiBombStage1",
            "Child1": "NotLastActionPoint",
            "Child2": "FindPotentialAoETargets-PsiBombProfile",
            "Child3": "TeleportForPsiBombTarget"
        },
        "TryMoveForPsiBomb": {
            "nodeName": "TryMoveForPsiBomb",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityReady-PsiBombStage1",
            "Child2": "NotLastActionPoint",
            "Child3": "FindPotentialAoETargets-PsiBombProfile",
            "Child4": "MoveStandardIfFirstAbility-PsiBombStage1"
        },
        "Cyberus::CharacterRoot": {
            "nodeName": "Cyberus::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "CodexRedAlert",
            "Child3": "GenericAlertHandler"
        },
        "CodexRedAlert": {
            "nodeName": "CodexRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "CodexRedAbilitySelector"
        },
        "CodexRedAbilitySelector": {
            "nodeName": "CodexRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "CodexRedFirstAction",
            "Child2": "CodexRedLastAction"
        },
        "CodexRedFirstAction": {
            "nodeName": "CodexRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "CodexRedFirstActionSelector"
        },
        "CodexRedFirstActionSelector": {
            "nodeName": "CodexRedFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "TryMoveThenPsiBomb",
            "Child1": "DoIfFlankedMove_Teleport",
            "Child2": "TryTeleportDefensive",
            "Child3": "SelectMove_JobOrFlanking",
            "Child4": "TryShootOrReloadOrOverwatch",
            "Child5": "HuntEnemyWithCover"
        },
        "CodexRedLastAction": {
            "nodeName": "CodexRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "CodexRedLastActionSelector"
        },
        "CodexRedLastActionSelector": {
            "nodeName": "CodexRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryPsiBomb",
            "Child1": "TryShootOrReloadOrOverwatch",
            "Child2": "HuntEnemyWithCover",
            "Child3": "SelectMove_JobOrFlanking"
        },
        "CodexSometimesPsiBomb": {
            "nodeName": "CodexSometimesPsiBomb",
            "NodeType": "RandFilter",
            "Child0": "TryPsiBomb",
            "Param0": "33"
        },
        "DoIfFlankedMove_Teleport": {
            "nodeName": "DoIfFlankedMove_Teleport",
            "NodeType": "Sequence",
            "Child0": "CheckIfNeedToMove",
            "Child1": "FlankedMoveSelector_Teleport"
        },
        "FlankedMoveSelector_Teleport": {
            "nodeName": "FlankedMoveSelector_Teleport",
            "NodeType": "Selector",
            "Child0": "TryTeleportDefensive",
            "Child1": "MoveAdvanceToCoverUnsafe",
            "Child2": "FallBack"
        },
        "Cyberus::MoveTowardMimicBeacon": {
            "nodeName": "Cyberus::MoveTowardMimicBeacon",
            "NodeType": "Selector",
            "Child0": "TryTeleportTowardMimicBeacon",
            "Child1": "TryStandardMoveTowardMimicBeacon"
        },
        "TryTeleportTowardMimicBeacon": {
            "nodeName": "TryTeleportTowardMimicBeacon",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Teleport",
            "Child1": "UseDashMovement",
            "Child2": "FindDestinationTowardMimicBeacon",
            "Child3": "SelectAbility-Teleport"
        },
        "Gatekeeper::CharacterRoot": {
            "nodeName": "Gatekeeper::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "GateKeeperRedAlert",
            "Child3": "GateKeeperNoEnemySightedMove"
        },
        "GateKeeperRedAlert": {
            "nodeName": "GateKeeperRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "GateKeeperRedAbilitySelector"
        },
        "GateKeeperRedAbilitySelector": {
            "nodeName": "GateKeeperRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "GateKeeperRedFirstAction",
            "Child2": "GateKeeperRedLastAction"
        },
        "GateKeeperRedFirstAction": {
            "nodeName": "GateKeeperRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "GateKeeperRedFirstActionSelector"
        },
        "GateKeeperRedFirstActionSelector": {
            "nodeName": "GateKeeperRedFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "TryMoveThenAnimaInversionCorpse",
            "Child1": "TryMoveThenAnimaInversionMixed",
            "Child2": "TryAnimaConsumeOnEnemy",
            "Child3": "TryAnimaConsumeOnAlly",
            "Child4": "MoveNoCover",
            "Child5": "ShootIfAvailable",
            "Child6": "HuntEnemy"
        },
        "GateKeeperRedLastAction": {
            "nodeName": "GateKeeperRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "GateKeeperRedLastActionSelector"
        },
        "GateKeeperRedLastActionSelector": {
            "nodeName": "GateKeeperRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryAnimaInversionCorpses",
            "Child1": "TryAnimaInversionMixed",
            "Child2": "TryAnimaConsumeOnEnemy",
            "Child3": "TryAnimaConsumeOnAlly",
            "Child4": "GateKeeperOpenOrClose",
            "Child5": "TryShootOrReloadOrOverwatch",
            "Child6": "MoveNoCover",
            "Child7": "HuntEnemy"
        },
        "GateKeeperNoEnemySightedMove": {
            "nodeName": "GateKeeperNoEnemySightedMove",
            "NodeType": "Selector",
            "Child0": "TryAnimaInversionCorpses",
            "Child1": "TryAnimaInversionMixed",
            "Child2": "TryGatekeeperClose",
            "Child3": "GenericAlertHandler",
            "Child4": "GenericGreenMovement"
        },
        "GateKeeperOpenOrClose": {
            "nodeName": "GateKeeperOpenOrClose",
            "NodeType": "Selector",
            "Child0": "CloseIfInObviousDanger",
            "Child1": "DoIfFlankedMove",
            "Child2": "GateKeeperCheckOpen"
        },
        "CloseIfInObviousDanger": {
            "nodeName": "CloseIfInObviousDanger",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-GatekeeperClose",
            "Child1": "CheckIfInDanger",
            "Child2": "TryGatekeeperClose"
        },
        "GateKeeperCheckOpen": {
            "nodeName": "GateKeeperCheckOpen",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-GatekeeperOpen",
            "Child1": "NoTargetsAvailable",
            "Child2": "TryGatekeeperOpen"
        },
        "Muton::CharacterRoot": {
            "nodeName": "Muton::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "MutonRedAlert",
            "Child3": "GenericAlertHandler"
        },
        "MutonRedAlert": {
            "nodeName": "MutonRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "MutonRedAbilitySelector"
        },
        "MutonRedAbilitySelector": {
            "nodeName": "MutonRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "MutonRedFirstAction",
            "Child2": "MutonRedLastAction"
        },
        "MutonRedFirstAction": {
            "nodeName": "MutonRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "MutonRedFirstActionSelector"
        },
        "MutonRedFirstActionSelector": {
            "nodeName": "MutonRedFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "TryBayonet",
            "Child1": "TryMoveThenGrenade",
            "Child2": "TryMoveToSuppressClosest",
            "Child3": "TryTwoTurnAttackSupportIfSafe",
            "Child4": "SelectMoveProfileByJob",
            "Child5": "TryShootOrReloadOrOverwatch",
            "Child6": "HuntEnemyWithCover"
        },
        "MutonRedLastAction": {
            "nodeName": "MutonRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "MutonRedLastActionSelector"
        },
        "MutonRedLastActionSelector": {
            "nodeName": "MutonRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryBayonet",
            "Child1": "TryGrenade",
            "Child2": "TrySuppressClosest",
            "Child3": "TryShootOrReloadOrOverwatch",
            "Child4": "HuntEnemyWithCover",
            "Child5": "SelectMove_JobOrAggressive"
        },
        "TrySuppressClosest": {
            "nodeName": "TrySuppressClosest",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-Suppression",
            "Child1": "CheckShouldSuppressVar",
            "Child2": "SelectTargetForSuppression",
            "Child3": "SelectAbility-Suppression"
        },
        "SelectTargetForSuppression": {
            "nodeName": "SelectTargetForSuppression",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-Suppression",
            "Child1": "SelectBestSuppressionTarget",
            "Child2": "HasValidTarget-Suppression"
        },
        "TryMoveToSuppressClosest": {
            "nodeName": "TryMoveToSuppressClosest",
            "NodeType": "Sequence",
            "Child0": "SafeToMove",
            "Child1": "IsAbilityReady-Suppression",
            "Child2": "CheckShouldSuppressVar",
            "Child3": "SelectClosestPotentialSuppressionTarget",
            "Child4": "MoveStandardIfFirstAbility-Suppression"
        },
        "CheckShouldSuppressVar": {
            "nodeName": "CheckShouldSuppressVar",
            "NodeType": "Sequence",
            "Child0": "InitSetSuppressVar",
            "Child1": "ShouldSuppress"
        },
        "ShouldSuppress": {
            "nodeName": "ShouldSuppress",
            "NodeType": "StatCondition",
            "Param0": "BTVar",
            "Param1": "!:",
            "Param2": "0",
            "Param3": "ShouldSuppress"
        },
        "InitSetSuppressVar": {
            "nodeName": "InitSetSuppressVar",
            "NodeType": "Selector",
            "Child0": "HasBTVar-ShouldSuppress",
            "Child1": "UpdateShouldSuppressVar"
        },
        "HasBTVar-ShouldSuppress": {
            "nodeName": "HasBTVar-ShouldSuppress",
            "NodeType": "Condition"
        },
        "UpdateShouldSuppressVar": {
            "nodeName": "UpdateShouldSuppressVar",
            "NodeType": "Selector",
            "Child0": "TrySetShouldSuppressTrue",
            "Child1": "SetShouldSuppressFalse"
        },
        "TrySetShouldSuppressTrue": {
            "nodeName": "TrySetShouldSuppressTrue",
            "NodeType": "Sequence",
            "Child0": "AnyAlliesVisible",
            "Child1": "RollForSuppressionPerVisibleAlly",
            "Child2": "SetShouldSuppressTrue"
        },
        "SetShouldSuppressTrue": {
            "nodeName": "SetShouldSuppressTrue",
            "NodeType": "Action",
            "Param0": "SetBTVar",
            "Param1": "ShouldSuppress",
            "Param2": "1"
        },
        "SetShouldSuppressFalse": {
            "nodeName": "SetShouldSuppressFalse",
            "NodeType": "Action",
            "Param0": "SetBTVar",
            "Param1": "ShouldSuppress",
            "Param2": "0"
        },
        "RollForSuppressionPerVisibleAlly": {
            "nodeName": "RollForSuppressionPerVisibleAlly",
            "NodeType": "Condition",
            "Param0": "10"
        },
        "PsiZombie::CharacterRoot": {
            "nodeName": "PsiZombie::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "GenericEnemyMeleeRootFANATIC"
        },
        "Sectoid::CharacterRoot": {
            "nodeName": "Sectoid::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "SectoidRedAlert",
            "Child3": "SectoidNoEnemySightedMove"
        },
        "SectoidRedAlert": {
            "nodeName": "SectoidRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "SectoidRedAbilitySelector"
        },
        "SectoidRedAbilitySelector": {
            "nodeName": "SectoidRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "SectoidRedFirstAction",
            "Child2": "SectoidRedLastAction"
        },
        "SectoidRedFirstAction": {
            "nodeName": "SectoidRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "SectoidRedFirstActionSelector"
        },
        "SectoidRedFirstActionSelector": {
            "nodeName": "SectoidRedFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "DoIfFlankedMove",
            "Child1": "SelectMove_JobOrDefensive",
            "Child2": "TryPsiReanimationOrMindSpinOption",
            "Child3": "TryShootOrReloadOrOverwatch",
            "Child4": "HuntEnemyWithCover"
        },
        "SectoidRedLastAction": {
            "nodeName": "SectoidRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "SectoidRedLastActionSelector"
        },
        "SectoidRedLastActionSelector": {
            "nodeName": "SectoidRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "DoIfFlankedMove",
            "Child1": "TryPsiReanimationOrMindSpinOption",
            "Child2": "TryShootOrReloadOrOverwatch",
            "Child3": "HuntEnemyWithCover",
            "Child4": "SelectMove_JobOrDefensive"
        },
        "TryPsiReanimationOrMindSpinOption": {
            "nodeName": "TryPsiReanimationOrMindSpinOption",
            "NodeType": "RandSelector",
            "Child0": "TryPsiReanimation",
            "Param0": "66",
            "Child1": "TryMindSpinOption",
            "Param1": "34"
        },
        "TryMindSpinOption": {
            "nodeName": "TryMindSpinOption",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-MindSpin",
            "Child1": "SelectTargetForMindSpin",
            "Child2": "SelectAbility-MindSpin"
        },
        "SectoidNoEnemySightedMove": {
            "nodeName": "SectoidNoEnemySightedMove",
            "NodeType": "Selector",
            "Child0": "GenericOrangeMovement",
            "Child1": "SectoidYellowAlert",
            "Child2": "GenericGreenMovement"
        },
        "SectoidYellowAlert": {
            "nodeName": "SectoidYellowAlert",
            "NodeType": "Sequence",
            "Child0": "IsYellowAlert",
            "Child1": "SectoidYellowAbilitySelector"
        },
        "SectoidYellowAbilitySelector": {
            "nodeName": "SectoidYellowAbilitySelector",
            "NodeType": "Selector",
            "Child0": "TryPsiReanimation",
            "Child1": "GenericAlertHandler"
        },
        "Viper::CharacterRoot": {
            "nodeName": "Viper::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "ViperRedAlert",
            "Child3": "GenericAlertHandler"
        },
        "ViperRedAlert": {
            "nodeName": "ViperRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "ViperRedAbilitySelector"
        },
        "ViperRedAbilitySelector": {
            "nodeName": "ViperRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "ViperRedFirstAction",
            "Child2": "ViperRedLastAction"
        },
        "ViperRedFirstAction": {
            "nodeName": "ViperRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "ViperRedFirstActionSelector"
        },
        "ViperRedFirstActionSelector": {
            "nodeName": "ViperRedFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "ConsiderTonguePullPriorityOrMelee",
            "Child1": "TryGetOverHere",
            "Child2": "TryMoveThenPoisonSpit",
            "Child3": "TryMoveThenPoisonSpitSingle",
            "Child4": "SelectMoveStandard",
            "Child5": "TryShootOrReloadOrOverwatch",
            "Child6": "HuntEnemyWithCover"
        },
        "ViperRedLastAction": {
            "nodeName": "ViperRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "ViperRedLastActionSelector"
        },
        "ViperRedLastActionSelector": {
            "nodeName": "ViperRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "TryStandardMelee",
            "Child1": "TryPoisonSpit",
            "Child2": "TryGetOverHere",
            "Child3": "TryPoisonSpitSingle",
            "Child4": "TryShootOrReloadOrOverwatch",
            "Child5": "DoIfFlankedMove",
            "Child6": "HuntEnemyWithCover",
            "Child7": "SelectMoveStandard"
        },
        "Viper::MoveTowardMimicBeacon": {
            "nodeName": "Viper::MoveTowardMimicBeacon",
            "NodeType": "Selector",
            "Child0": "RandTryGetOverHereOnMimicBeacon",
            "Child1": "TryMeleeMoveTowardMimicBeacon",
            "Child2": "TryStandardMoveTowardMimicBeacon"
        },
        "RandTryGetOverHereOnMimicBeacon": {
            "nodeName": "RandTryGetOverHereOnMimicBeacon",
            "NodeType": "RandFilter",
            "Child0": "TryGetOverHereOnMimicBeacon",
            "Param0": "50"
        },
        "TryGetOverHereOnMimicBeacon": {
            "nodeName": "TryGetOverHereOnMimicBeacon",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-GetOverHere",
            "Child1": "SelectMimicBeaconForGetOverHere",
            "Child2": "SelectAbility-GetOverHere"
        },
        "SelectMimicBeaconForGetOverHere": {
            "nodeName": "SelectMimicBeaconForGetOverHere",
            "NodeType": "Sequence",
            "Child0": "SetTargetStack-GetOverHere",
            "Child1": "SelectMimicBeaconTarget",
            "Child2": "HasValidTarget-GetOverHere"
        },
        "ConsiderTonguePullPriorityOrMelee": {
            "nodeName": "ConsiderTonguePullPriorityOrMelee",
            "NodeType": "Sequence",
            "Child0": "TryStandardMelee",
            "Child1": "SS_ConsiderTonguePullOverMove"
        },
        "SS_ConsiderTonguePullOverMove": {
            "nodeName": "SS_ConsiderTonguePullOverMove",
            "NodeType": "Successor",
            "Child0": "ConsiderTonguePullOverMove"
        },
        "ConsiderTonguePullOverMove": {
            "nodeName": "ConsiderTonguePullOverMove",
            "NodeType": "Sequence",
            "Child0": "IsSelectedAbility-StandardMove",
            "Child1": "IsAbilityAvailable-GetOverHere",
            "Child2": "SetPotentialTargetAsCurrentTarget",
            "Child3": "ShouldUseTonguePullOnTarget",
            "Child4": "SelectAbility-GetOverHere"
        },
        "SetPotentialTargetAsCurrentTarget": {
            "nodeName": "SetPotentialTargetAsCurrentTarget",
            "NodeType": "Action",
        },
        "ShouldUseTonguePullOnTarget": {
            "nodeName": "ShouldUseTonguePullOnTarget",
            "NodeType": "Sequence",
            "Child0": "IsValidTonguePullTarget",
            "Child1": "TargetDistanceGreaterThan4Tiles",
            "Child2": "TonguePullHitChance50",
            "Child3": "SetTargetPotential-GetOverHere"
        },
        "TargetDistanceGreaterThan4Tiles": {
            "nodeName": "TargetDistanceGreaterThan4Tiles",
            "NodeType": "StatCondition",
            "Param0": "PotentialTargetDistance",
            "Param1": ">",
            "Param2": "6"
        },
        "TonguePullHitChance50": {
            "nodeName": "TonguePullHitChance50",
            "NodeType": "StatCondition",
            "Param0": "PotentialHitChance-GetOverHere",
            "Param1": ">:",
            "Param2": "50"
        },
        "IsSelectedAbility-StandardMove": {
            "nodeName": "IsSelectedAbility-StandardMove",
            "NodeType": "Condition"
        },
        "SetTargetPotential-GetOverHere": {
            "nodeName": "SetTargetPotential-GetOverHere",
            "NodeType": "Action",
        },
        "Viper::CustomMeleeTargetScore": {
            "nodeName": "Viper::CustomMeleeTargetScore",
            "NodeType": "Sequence",
            "Child0": "TargetNotValidForBind",
            "Child1": "AddToTargetScore_-1000"
        },
        "TargetNotValidForBind": {
            "nodeName": "TargetNotValidForBind",
            "NodeType": "Selector",
            "Child0": "TargetIsAlien",
            "Child1": "TargetIsRobotic"
        },
        "Faceless::CharacterRoot": {
            "nodeName": "Faceless::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "TryJobUnsafe",
            "Child1": "GenericGreenMovement",
            "Child2": "FacelessHeatSeekProtocol",
            "Child3": "FacelessRedAlert",
            "Child4": "GenericAlertHandler"
        },
        "FacelessRedAlert": {
            "nodeName": "FacelessRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "FacelessRedAbilitySelector"
        },
        "FacelessRedAbilitySelector": {
            "nodeName": "FacelessRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "FacelessRedFirstAction",
            "Child2": "FacelessRedLastAction"
        },
        "FacelessRedFirstAction": {
            "nodeName": "FacelessRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "FacelessFirstActionSelector"
        },
        "FacelessFirstActionSelector": {
            "nodeName": "FacelessFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "TryScythingClaws",
            "Child1": "MoveMeleeFANATICUnsafe",
            "Child2": "HuntEnemyUnsafe"
        },
        "FacelessRedLastAction": {
            "nodeName": "FacelessRedLastAction",
            "NodeType": "Selector",
            "Child0": "TryScythingClaws",
            "Child1": "MoveMeleeFANATICUnsafe",
            "Child2": "HuntEnemyUnsafe"
        },
        "Faceless::AttackMimicBeacon": {
            "nodeName": "Faceless::AttackMimicBeacon",
            "NodeType": "Sequence",
            "Child0": "TryScythingClaws"
        },
        "FacelessHeatSeekProtocol": {
            "nodeName": "FacelessHeatSeekProtocol",
            "NodeType": "Sequence",
            "Child0": "FacelessShouldTriggerHeatSeek",
            "Child1": "SelectHeatSeekMove"
        },
        "FacelessShouldTriggerHeatSeek": {
            "nodeName": "FacelessShouldTriggerHeatSeek",
            "NodeType": "Selector",
            "Child0": "NoVisibleEnemies"
        },
        "Sectopod::CharacterRoot": {
            "nodeName": "Sectopod::CharacterRoot",
            "NodeType": "Selector",
            "Child0": "TryJob",
            "Child1": "GenericGreenMovement",
            "Child2": "SectopodRedAlert",
            "Child3": "GenericAlertHandler"
        },
        "SectopodRedAlert": {
            "nodeName": "SectopodRedAlert",
            "NodeType": "Sequence",
            "Child0": "IsRedAlert",
            "Child1": "SectopodRedAbilitySelector"
        },
        "SectopodRedAbilitySelector": {
            "nodeName": "SectopodRedAbilitySelector",
            "NodeType": "Selector",
            "Child0": "MimicBeaconBehavior",
            "Child1": "SectopodRedFirstAction",
            "Child2": "SectopodRedSecondAction",
            "Child3": "SectopodRedLastAction"
        },
        "SectopodRedFirstAction": {
            "nodeName": "SectopodRedFirstAction",
            "NodeType": "Sequence",
            "Child0": "HasThreeActionPoints",
            "Child1": "SectopodFirstActionSelector"
        },
        "SectopodFirstActionSelector": {
            "nodeName": "SectopodFirstActionSelector",
            "NodeType": "Selector",
            "Child0": "SectopodCannonCharging",
            "Child1": "TryStandUp",
            "Child2": "TryLightningField",
            "Child3": "TryFirstMoveTowardVisibleEnemies50",
            "Child4": "ShootIfAvailable",
            "Child5": "TryWrathCannonS166",
            "Child6": "TryMoveForLightningField",
            "Child7": "MoveNoCover",
            "Child8": "TryShootOrReloadOrOverwatch",
            "Child9": "HuntEnemy"
        },
        "SectopodRedSecondAction": {
            "nodeName": "SectopodRedSecondAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "SectopodSecondActionSelector"
        },
        "SectopodSecondActionSelector": {
            "nodeName": "SectopodSecondActionSelector",
            "NodeType": "Selector",
            "Child0": "SectopodCannonCharging",
            "Child1": "TryStandUp",
            "Child2": "TryLightningField",
            "Child3": "TryMoveTowardVisibleEnemies50",
            "Child4": "TryWrathCannonS166",
            "Child5": "TryMoveForLightningField",
            "Child6": "MoveNoCoverIfNotMoved",
            "Child7": "TryShootOrReloadOrOverwatch",
            "Child8": "HuntEnemy"
        },
        "SectopodRedLastAction": {
            "nodeName": "SectopodRedLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "SectopodRedLastActionSelector"
        },
        "SectopodRedLastActionSelector": {
            "nodeName": "SectopodRedLastActionSelector",
            "NodeType": "Selector",
            "Child0": "SectopodCannonCharging",
            "Child1": "TryWrathCannonS1",
            "Child2": "TryLightningField",
            "Child3": "TryShootOrReloadOrOverwatch",
            "Child4": "HuntEnemy"
        },
        "MoveNoCoverIfNotMoved": {
            "nodeName": "MoveNoCoverIfNotMoved",
            "NodeType": "Sequence",
            "Child0": "DidntJustMove",
            "Child1": "MoveNoCover"
        },
        "TryStandUp": {
            "nodeName": "TryStandUp",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-SectopodHigh",
            "Child1": "SelectAbility-SectopodHigh"
        },
        "IsAbilityAvailable-SectopodHigh": {
            "nodeName": "IsAbilityAvailable-SectopodHigh",
            "NodeType": "Condition"
        },
        "SelectAbility-SectopodHigh": {
            "nodeName": "SelectAbility-SectopodHigh",
            "NodeType": "Action",
        },
        "TryWrathCannonS166": {
            "nodeName": "TryWrathCannonS166",
            "NodeType": "RandFilter",
            "Child0": "TryWrathCannon",
            "Param0": "66"
        },
        "SectopodCannonCharging": {
            "nodeName": "SectopodCannonCharging",
            "NodeType": "Sequence",
            "Child0": "AffectedByEffect-WrathCannonStage1Effect",
            "Child1": "SectopodChargingSelector"
        },
        "SectopodChargingSelector": {
            "nodeName": "SectopodChargingSelector",
            "NodeType": "Selector",
            "Child0": "TryShootOrReloadIfNotLastActionPoint",
            "Child1": "Overwatch50IfLastAction",
            "Child2": "TryShootOrReloadOrOverwatch",
            "Child3": "SkipMove"
        },
        "Overwatch50IfLastAction": {
            "nodeName": "Overwatch50IfLastAction",
            "NodeType": "Sequence",
            "Child0": "IsLastActionPoint",
            "Child1": "RandOverwatch50"
        },
        "TryShootOrReloadIfNotLastActionPoint": {
            "nodeName": "TryShootOrReloadIfNotLastActionPoint",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "TryShootOrReload"
        },
        "IsAbilityAvailable-SectopodLightningField": {
            "nodeName": "IsAbilityAvailable-SectopodLightningField",
            "NodeType": "Condition"
        },
        "IsAbilityReady-SectopodLightningField": {
            "nodeName": "IsAbilityReady-SectopodLightningField",
            "NodeType": "Condition"
        },
        "SelectAbility-SectopodLightningField": {
            "nodeName": "SelectAbility-SectopodLightningField",
            "NodeType": "Action",
        },
        "TryLightningField": {
            "nodeName": "TryLightningField",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-SectopodLightningField",
            "Child1": "HasAnyLightningFieldTargets",
            "Child2": "SelectAbility-SectopodLightningField"
        },
        "HasAnyLightningFieldTargets": {
            "nodeName": "HasAnyLightningFieldTargets",
            "NodeType": "StatCondition",
            "Param0": "AbilityTargetUnitCount-SectopodLightningField",
            "Param1": ">",
            "Param2": "1"
        },
        "TryFirstMoveTowardVisibleEnemies50": {
            "nodeName": "TryFirstMoveTowardVisibleEnemies50",
            "NodeType": "Sequence",
            "Child0": "AnyLivingEnemyVisible",
            "Child1": "TryMoveForLightningField50"
        },
        "TryMoveTowardVisibleEnemies50": {
            "nodeName": "TryMoveTowardVisibleEnemies50",
            "NodeType": "Sequence",
            "Child0": "AnyLivingEnemyVisible",
            "Child1": "DidntJustMove",
            "Child2": "TryMoveForLightningField50"
        },
        "TryMoveForLightningField50": {
            "nodeName": "TryMoveForLightningField50",
            "NodeType": "RandFilter",
            "Child0": "TryMoveForLightningField",
            "Param0": "50"
        },
        "TryMoveForLightningField": {
            "nodeName": "TryMoveForLightningField",
            "NodeType": "Sequence",
            "Child0": "DidntJustMove",
            "Child1": "SafeToMove",
            "Child2": "IsAbilityReady-SectopodLightningField",
            "Child3": "MoveStandardIfFirstAbility-LightningField",
            "Child4": "MoveMeleeFANATICUnsafe"
        },
        "MoveStandardIfFirstAbility-LightningField": {
            "nodeName": "MoveStandardIfFirstAbility-LightningField",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "FindLightningFieldDestination",
            "Child3": "SelectAbility-StandardMove"
        },
        "FindLightningFieldDestination": {
            "nodeName": "FindLightningFieldDestination",
            "NodeType": "Sequence",
            "Child0": "SelectTargetForLightningField",
            "Child1": "ResetDestinationSearch",
            "Child2": "RestrictToAbilityRange-SectopodLightningField",
            "Child3": "RestrictToEnemyLoS",
            "Child4": "FindRestrictedDestination-Standard"
        },
        "SelectTargetForLightningField": {
            "nodeName": "SelectTargetForLightningField",
            "NodeType": "Sequence",
            "Child0": "SetPotentialTargetStack",
            "Child1": "SelectBestPotentialTargetForMelee",
            "Child2": "HasValidTarget-Potential"
        },
        "RestrictToAbilityRange-SectopodLightningField": {
            "nodeName": "RestrictToAbilityRange-SectopodLightningField",
            "NodeType": "Action",
        },
        "WasLastAbility-StandardMove": {
            "nodeName": "WasLastAbility-StandardMove",
            "NodeType": "Condition"
        },
        "DidntJustMove": {
            "nodeName": "DidntJustMove",
            "NodeType": "Inverter",
            "Child0": "WasLastAbility-StandardMove"
        },
        "HasJob": {
            "nodeName": "HasJob",
            "NodeType": "Condition"
        },
        "HasUnengagedJob": {
            "nodeName": "HasUnengagedJob",
            "NodeType": "Condition"
        },
        "IsMyJob-Soldier": {
            "nodeName": "IsMyJob-Soldier",
            "NodeType": "Condition"
        },
        "IsMyJob-Aggressor": {
            "nodeName": "IsMyJob-Aggressor",
            "NodeType": "Condition"
        },
        "IsMyJob-Flanker": {
            "nodeName": "IsMyJob-Flanker",
            "NodeType": "Condition"
        },
        "IsMyJob-Leader": {
            "nodeName": "IsMyJob-Leader",
            "NodeType": "Condition"
        },
        "IsMyJob-Support": {
            "nodeName": "IsMyJob-Support",
            "NodeType": "Condition"
        },
        "IsMyJob-Terrorist": {
            "nodeName": "IsMyJob-Terrorist",
            "NodeType": "Condition"
        },
        "IsMyJob-Hunter": {
            "nodeName": "IsMyJob-Hunter",
            "NodeType": "Condition"
        },
        "IsMyJob-Charger": {
            "nodeName": "IsMyJob-Charger",
            "NodeType": "Condition"
        },
        "IsMyJob-Defender": {
            "nodeName": "IsMyJob-Defender",
            "NodeType": "Condition"
        },
        "IsMyJob-Observer": {
            "nodeName": "IsMyJob-Observer",
            "NodeType": "Condition"
        },
        "IsMyJob-Prisoner": {
            "nodeName": "IsMyJob-Prisoner",
            "NodeType": "Condition"
        },
        "IsMyJob-GreenStandby": {
            "nodeName": "IsMyJob-GreenStandby",
            "NodeType": "Condition"
        },
        "DoNotHaveAlwaysOnJob": {
            "nodeName": "DoNotHaveAlwaysOnJob",
            "NodeType": "Inverter",
            "Child0": "DoIHaveAlwaysOnJob"
        },
        "DoIHaveAlwaysOnJob": {
            "nodeName": "DoIHaveAlwaysOnJob",
            "NodeType": "Selector",
            "Child0": "IsMyJob-Terrorist",
            "Child1": "IsMyJob-Hunter",
            "Child2": "IsMyJob-Prisoner"
        },
        "TryUnengagedJob": {
            "nodeName": "TryUnengagedJob",
            "NodeType": "Sequence",
            "Child0": "HasUnengagedJob",
            "Child1": "TryJobTypes"
        },
        "TryJob": {
            "nodeName": "TryJob",
            "NodeType": "Selector",
            "Child0": "TryUnengagedJob",
            "Child1": "TryJobObserver"
        },
        "TryJobUnsafe": {
            "nodeName": "TryJobUnsafe",
            "NodeType": "Sequence",
            "Child0": "HasJob",
            "Child1": "TryJobTypesUnsafe"
        },
        "TryJobTypes": {
            "nodeName": "TryJobTypes",
            "NodeType": "Selector",
            "Child0": "TryJobTerrorist",
            "Child1": "TryJobHunter",
            "Child2": "TryJobChargerUnsafe",
            "Child3": "TryJobDefender",
            "Child4": "TryJobPrisoner",
            "Child5": "TryJobGreenStandby"
        },
        "TryJobTypesUnsafe": {
            "nodeName": "TryJobTypesUnsafe",
            "NodeType": "Selector",
            "Child0": "TryJobTerrorist",
            "Child1": "TryJobHunter",
            "Child2": "TryJobChargerUnsafe",
            "Child3": "TryJobDefender",
            "Child4": "TryJobObserver",
            "Child5": "TryJobPrisoner",
            "Child6": "TryJobGreenStandby"
        },
        "TryJobTerrorist": {
            "nodeName": "TryJobTerrorist",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Terrorist",
            "Child1": "JobRoot_Terrorist"
        },
        "TryJobHunter": {
            "nodeName": "TryJobHunter",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Hunter",
            "Child1": "JobRoot_Hunter"
        },
        "TryJobChargerUnsafe": {
            "nodeName": "TryJobChargerUnsafe",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Charger",
            "Child1": "JobRoot_ChargerUnsafe"
        },
        "TryJobDefender": {
            "nodeName": "TryJobDefender",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Defender",
            "Child1": "JobRoot_Defender"
        },
        "TryJobObserver": {
            "nodeName": "TryJobObserver",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Observer",
            "Child1": "IsRedAlert",
            "Child2": "DoIfFlankedMove",
            "Child3": "SkipMove"
        },
        "TryJobPrisoner": {
            "nodeName": "TryJobPrisoner",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Prisoner",
            "Child1": "SkipMove"
        },
        "TryJobGreenStandby": {
            "nodeName": "TryJobGreenStandby",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-GreenStandby",
            "Child1": "NotYetRevealed",
            "Child2": "SkipMove"
        },
        "SelectMoveProfileByJob": {
            "nodeName": "SelectMoveProfileByJob",
            "NodeType": "Selector",
            "Child0": "SelectMoveIfAggressor",
            "Child1": "SelectMoveIfFlanker",
            "Child2": "SelectMoveIfLeader",
            "Child3": "SelectMoveIfSupport",
            "Child4": "SelectMoveIfObserver"
        },
        "SelectMoveIfAggressor": {
            "nodeName": "SelectMoveIfAggressor",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Aggressor",
            "Child1": "MoveAggressive"
        },
        "SelectMoveIfFlanker": {
            "nodeName": "SelectMoveIfFlanker",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Flanker",
            "Child1": "MoveFlanking"
        },
        "SelectMoveIfLeader": {
            "nodeName": "SelectMoveIfLeader",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Leader",
            "Child1": "MoveAdvanceToCover"
        },
        "SelectMoveIfSupport": {
            "nodeName": "SelectMoveIfSupport",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Support",
            "Child1": "MoveDefensive"
        },
        "SelectMoveIfObserver": {
            "nodeName": "SelectMoveIfObserver",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Observer",
            "Child1": "ObserverMovement"
        },
        "SelectMoveProfileByJobUnsafe": {
            "nodeName": "SelectMoveProfileByJobUnsafe",
            "NodeType": "Selector",
            "Child0": "SelectMoveUnsafeIfAggressor",
            "Child1": "SelectMoveUnsafeIfFlanker",
            "Child2": "SelectMoveUnsafeIfLeader",
            "Child3": "SelectMoveUnsafeIfSupport",
            "Child4": "SelectMoveUnsafeIfObserver"
        },
        "SelectMoveUnsafeIfAggressor": {
            "nodeName": "SelectMoveUnsafeIfAggressor",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Aggressor",
            "Child1": "MoveAggressiveUnsafe"
        },
        "SelectMoveUnsafeIfFlanker": {
            "nodeName": "SelectMoveUnsafeIfFlanker",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Flanker",
            "Child1": "MoveFlankingUnsafe"
        },
        "SelectMoveUnsafeIfLeader": {
            "nodeName": "SelectMoveUnsafeIfLeader",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Leader",
            "Child1": "MoveAdvanceToCoverUnsafe"
        },
        "SelectMoveUnsafeIfSupport": {
            "nodeName": "SelectMoveUnsafeIfSupport",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Support",
            "Child1": "MoveDefensiveUnsafe"
        },
        "SelectMoveUnsafeIfObserver": {
            "nodeName": "SelectMoveUnsafeIfObserver",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Observer",
            "Child1": "ObserverMovementUnsafe"
        },
        "SelectNCMoveProfileByJob": {
            "nodeName": "SelectNCMoveProfileByJob",
            "NodeType": "Selector",
            "Child0": "SelectNCMoveIfAggressor",
            "Child1": "SelectNCMoveIfFlanker",
            "Child2": "SelectNCMoveIfLeader",
            "Child3": "SelectNCMoveIfSupport",
            "Child4": "SelectNCMoveIfObserver"
        },
        "SelectNCMoveIfAggressor": {
            "nodeName": "SelectNCMoveIfAggressor",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Aggressor",
            "Child1": "NCMoveAggressive"
        },
        "SelectNCMoveIfFlanker": {
            "nodeName": "SelectNCMoveIfFlanker",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Flanker",
            "Child1": "NCMoveFlanking"
        },
        "SelectNCMoveIfLeader": {
            "nodeName": "SelectNCMoveIfLeader",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Leader",
            "Child1": "NCMoveAdvanceToCover"
        },
        "SelectNCMoveIfSupport": {
            "nodeName": "SelectNCMoveIfSupport",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Support",
            "Child1": "NCMoveDefensive"
        },
        "SelectNCMoveIfObserver": {
            "nodeName": "SelectNCMoveIfObserver",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Observer",
            "Child1": "NCObserverMovement"
        },
        "JobRoot_Terrorist": {
            "nodeName": "JobRoot_Terrorist",
            "NodeType": "Sequence",
            "Child0": "NotYetRevealed",
            "Child1": "TryTerrorJobUnrevealed"
        },
        "TryTerrorJobUnrevealed": {
            "nodeName": "TryTerrorJobUnrevealed",
            "NodeType": "Selector",
            "Child0": "SequenceUnrevealedTerroristActionIfLeader",
            "Child1": "DoUnrevealedSkip_Follower"
        },
        "SequenceUnrevealedTerroristActionIfLeader": {
            "nodeName": "SequenceUnrevealedTerroristActionIfLeader",
            "NodeType": "Sequence",
            "Child0": "IsGroupLeader",
            "Child1": "SelectUnrevealedTerroristLeaderAction"
        },
        "SelectUnrevealedTerroristLeaderAction": {
            "nodeName": "SelectUnrevealedTerroristLeaderAction",
            "NodeType": "Selector",
            "Child0": "RandomizedTryTerrorMovement",
            "Child1": "TryTerrorAttack",
            "Child2": "TerrorMovement"
        },
        "DoUnrevealedSkip_Follower": {
            "nodeName": "DoUnrevealedSkip_Follower",
            "NodeType": "Sequence",
            "Child0": "IsFollower",
            "Child1": "SkipMove"
        },
        "RandomizedTryTerrorMovement": {
            "nodeName": "RandomizedTryTerrorMovement",
            "NodeType": "RandFilter",
            "Child0": "TryTerrorMovement",
            "Param0": "75"
        },
        "TryTerrorMovement": {
            "nodeName": "TryTerrorMovement",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "NotLastActionPoint",
            "Child2": "ResetDestinationSearch",
            "Child3": "SetCiviliansAsEnemiesInMoveCalculation",
            "Child4": "SetNoCoverMovement",
            "Child5": "FindDestination-Fanatic",
            "Child6": "SelectAbility-StandardMove"
        },
        "TerrorMovement": {
            "nodeName": "TerrorMovement",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMove",
            "Child1": "ResetDestinationSearch",
            "Child2": "SetCiviliansAsEnemiesInMoveCalculation",
            "Child3": "SetNoCoverMovement",
            "Child4": "FindDestination-Fanatic",
            "Child5": "SelectAbility-StandardMove"
        },
        "TryTerrorAttack": {
            "nodeName": "TryTerrorAttack",
            "NodeType": "Sequence",
            "Child0": "NumKilledCiviliansIsLessThanTurnCount",
            "Child1": "TryTerrorAttackSelector"
        },
        "TryTerrorAttackSelector": {
            "nodeName": "TryTerrorAttackSelector",
            "NodeType": "Selector",
            "Child0": "ShootIfAvailableTerrorist",
            "Child1": "TryMeleeTerrorist",
            "Child2": "NeedsReload",
            "Intent": "TERRORIZING"
        },
        "NumKilledCiviliansIsLessThanTurnCount": {
            "nodeName": "NumKilledCiviliansIsLessThanTurnCount",
            "NodeType": "Condition"
        },
        "TryMeleeTerrorist": {
            "nodeName": "TryMeleeTerrorist",
            "NodeType": "Sequence",
            "Child0": "IsAbilityReady-StandardMelee",
            "Child1": "MeleeTerroristStepSelector"
        },
        "MeleeTerroristStepSelector": {
            "nodeName": "MeleeTerroristStepSelector",
            "NodeType": "Selector",
            "Child0": "MeleeAttackTerrorist",
            "Child1": "TryTerroristMoveMeleeFANATIC"
        },
        "MeleeAttackTerrorist": {
            "nodeName": "MeleeAttackTerrorist",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardMelee",
            "Child1": "SetTargetStack-StandardMelee",
            "Child2": "SelectBestTargetByJob_Terrorist",
            "Child3": "HasValidTarget-StandardMelee",
            "Child4": "SelectAbility-StandardMelee"
        },
        "ShootIfAvailableTerrorist": {
            "nodeName": "ShootIfAvailableTerrorist",
            "NodeType": "Sequence",
            "Child0": "IsAbilityAvailable-StandardShot",
            "Child1": "SetTargetStack-StandardShot",
            "Child2": "SelectBestTargetByJob_Terrorist",
            "Child3": "HasValidTarget-StandardShot",
            "Child4": "SelectAbility-StandardShot"
        },
        "SelectBestTargetByJob_Terrorist": {
            "nodeName": "SelectBestTargetByJob_Terrorist",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateTargetByJob_Terrorist"
        },
        "EvaluateTargetByJob_Terrorist": {
            "nodeName": "EvaluateTargetByJob_Terrorist",
            "NodeType": "Sequence",
            "Child0": "SetNextTarget",
            "Child1": "SSScoreTerroristTarget",
            "Child2": "UpdateBestTarget"
        },
        "SSScoreTerroristTarget": {
            "nodeName": "SSScoreTerroristTarget",
            "NodeType": "Successor",
            "Child0": "ScoreTerroristTarget"
        },
        "ScoreTerroristTarget": {
            "nodeName": "ScoreTerroristTarget",
            "NodeType": "Sequence",
            "Child0": "TargetIsNotAlly",
            "Child1": "TargetScoreCivilian",
            "Child2": "TargetScoreHitChance",
            "Child3": "TargetScoreHealth",
            "Child4": "TargetScoreFlanking"
        },
        "IncludeCiviliansIfTerrorist": {
            "nodeName": "IncludeCiviliansIfTerrorist",
            "NodeType": "Successor",
            "Child0": "IfTerroristDoForMove"
        },
        "IfTerroristDoForMove": {
            "nodeName": "IfTerroristDoForMove",
            "NodeType": "Sequence",
            "Child0": "IsMyJob-Terrorist",
            "Child1": "SetCiviliansAsEnemiesInMoveCalculation"
        },
        "JobRoot_Hunter": {
            "nodeName": "JobRoot_Hunter",
            "NodeType": "Sequence",
            "Child0": "ShouldPatrol",
            "Child1": "TryHunterJobUnrevealed"
        },
        "TryHunterJobUnrevealed": {
            "nodeName": "TryHunterJobUnrevealed",
            "NodeType": "Selector",
            "Child0": "TryUnrevealedHunterAction_Leader",
            "Child1": "DoUnrevealedSkip_Follower"
        },
        "TryUnrevealedHunterAction_Leader": {
            "nodeName": "TryUnrevealedHunterAction_Leader",
            "NodeType": "Sequence",
            "Child0": "IsGroupLeader",
            "Child1": "TryHunterAttack"
        },
        "TryHunterAttack": {
            "nodeName": "TryHunterAttack",
            "NodeType": "Selector",
            "Child0": "TryAttackPriorityTarget",
            "Child1": "HuntIfNotLastAction"
        },
        "HuntIfNotLastAction": {
            "nodeName": "HuntIfNotLastAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "FindAdvanceLocation",
            "Intent": "HUNTING"
        },
        "JobRoot_Charger": {
            "nodeName": "JobRoot_Charger",
            "NodeType": "Selector",
            "Child0": "TryChargerJobIfUnrevealed",
            "Child1": "TryChargerJobIfRevealed"
        },
        "TryChargerJobIfUnrevealed": {
            "nodeName": "TryChargerJobIfUnrevealed",
            "NodeType": "Sequence",
            "Child0": "NotYetRevealed",
            "Child1": "DoChargerJobIfLeaderOrSkipMove"
        },
        "DoChargerJobIfLeaderOrSkipMove": {
            "nodeName": "DoChargerJobIfLeaderOrSkipMove",
            "NodeType": "Selector",
            "Child0": "DoChargerJobIfLeader",
            "Child1": "SkipMove"
        },
        "DoChargerJobIfLeader": {
            "nodeName": "DoChargerJobIfLeader",
            "NodeType": "Sequence",
            "Child0": "IsGroupLeader",
            "Child1": "DoChargerJobPerAction"
        },
        "TryChargerJobIfRevealed": {
            "nodeName": "TryChargerJobIfRevealed",
            "NodeType": "Sequence",
            "Child0": "HasRevealed",
            "Child1": "DoChargerJobPerAction"
        },
        "DoChargerJobPerAction": {
            "nodeName": "DoChargerJobPerAction",
            "NodeType": "Selector",
            "Child0": "ChargerFirstAction",
            "Child1": "ChargerSecondAction"
        },
        "ChargerFirstAction": {
            "nodeName": "ChargerFirstAction",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "DoFirstChargerAction"
        },
        "JobRoot_ChargerUnsafe": {
            "nodeName": "JobRoot_ChargerUnsafe",
            "NodeType": "Selector",
            "Child0": "TryChargerJobUnsafeIfUnrevealed",
            "Child1": "TryChargerJobUnsafeIfRevealed"
        },
        "TryChargerJobUnsafeIfUnrevealed": {
            "nodeName": "TryChargerJobUnsafeIfUnrevealed",
            "NodeType": "Sequence",
            "Child0": "NotYetRevealed",
            "Child1": "DoChargerJobUnsafeIfLeaderOrSkipMove"
        },
        "DoChargerJobUnsafeIfLeaderOrSkipMove": {
            "nodeName": "DoChargerJobUnsafeIfLeaderOrSkipMove",
            "NodeType": "Selector",
            "Child0": "DoChargerJobUnsafeIfLeader",
            "Child1": "SkipMove"
        },
        "DoChargerJobUnsafeIfLeader": {
            "nodeName": "DoChargerJobUnsafeIfLeader",
            "NodeType": "Sequence",
            "Child0": "IsGroupLeader",
            "Child1": "DoChargerJobPerActionUnsafe"
        },
        "TryChargerJobUnsafeIfRevealed": {
            "nodeName": "TryChargerJobUnsafeIfRevealed",
            "NodeType": "Sequence",
            "Child0": "HasRevealed",
            "Child1": "DoChargerJobPerActionUnsafe"
        },
        "DoChargerJobPerActionUnsafe": {
            "nodeName": "DoChargerJobPerActionUnsafe",
            "NodeType": "Selector",
            "Child0": "ChargerFirstActionUnsafe",
            "Child1": "ChargerSecondActionUnsafe"
        },
        "ChargerFirstActionUnsafe": {
            "nodeName": "ChargerFirstActionUnsafe",
            "NodeType": "Sequence",
            "Child0": "NotLastActionPoint",
            "Child1": "DoFirstChargerActionUnsafe"
        },
        "ChargerSecondActionUnsafe": {
            "nodeName": "ChargerSecondActionUnsafe",
            "NodeType": "Selector",
            "Child0": "TryAttackPriorityTarget",
            "Child1": "FindAdvanceLocationUnsafe"
        },
        "DoFirstChargerAction": {
            "nodeName": "DoFirstChargerAction",
            "NodeType": "Selector",
            "Child0": "FindAdvanceLocation",
            "Child1": "TryAttackPriorityTarget"
        },
        "ChargerSecondAction": {
            "nodeName": "ChargerSecondAction",
            "NodeType": "Selector",
            "Child0": "TryAttackPriorityTarget",
            "Child1": "FindAdvanceLocation"
        },
        "DoFirstChargerActionUnsafe": {
            "nodeName": "DoFirstChargerActionUnsafe",
            "NodeType": "Selector",
            "Child0": "FindAdvanceLocationUnsafe",
            "Child1": "TryAttackPriorityTarget"
        },
        "FindAdvanceLocation": {
            "nodeName": "FindAdvanceLocation",
            "NodeType": "Sequence",
            "Child0": "SetAlertDataStack",
            "Child1": "FindDesignatedAlertAdvanceer",
            "Child2": "HasValidAlertDataLocation",
            "Child3": "TakeAlertMoveWithoutCover",
            "Intent": "ADVANCING"
        },
        "FindAdvanceLocationUnsafe": {
            "nodeName": "FindAdvanceLocationUnsafe",
            "NodeType": "Sequence",
            "Child0": "SetAlertDataStack",
            "Child1": "FindDesignatedAlertAdvanceer",
            "Child2": "HasValidAlertDataLocation",
            "Child3": "TakeAlertMoveWithoutCoverUnsafe",
            "Intent": "ADVANCING"
        },
        "FindDesignatedAlertAdvanceer": {
            "nodeName": "FindDesignatedAlertAdvanceer",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateAlertDataAdvanceer"
        },
        "EvaluateAlertDataAdvanceer": {
            "nodeName": "EvaluateAlertDataAdvanceer",
            "NodeType": "Sequence",
            "Child0": "SetNextAlertData",
            "Child1": "ScoreAlertFor_Advance",
            "Child2": "ScoreAlertDataDistance",
            "Child3": "UpdateBestAlertData"
        },
        "JobRoot_Defender": {
            "nodeName": "JobRoot_Defender",
            "NodeType": "Sequence",
            "Child0": "ShouldPatrol",
            "Child1": "TryDefenderJobUnrevealed"
        },
        "TryDefenderJobUnrevealed": {
            "nodeName": "TryDefenderJobUnrevealed",
            "NodeType": "Selector",
            "Child0": "TryUnrevealedDefenderAction_Leader",
            "Child1": "DoUnrevealedSkip_Follower"
        },
        "TryUnrevealedDefenderAction_Leader": {
            "nodeName": "TryUnrevealedDefenderAction_Leader",
            "NodeType": "Sequence",
            "Child0": "IsGroupLeader",
            "Child1": "TryDefenderMove"
        },
        "TryDefenderMove": {
            "nodeName": "TryDefenderMove",
            "NodeType": "Sequence",
            "Child0": "FindDefendLocation",
            "Child1": "DecideDefendAction",
            "Intent": "DEFENDING"
        },
        "FindDefendLocation": {
            "nodeName": "FindDefendLocation",
            "NodeType": "Sequence",
            "Child0": "SetAlertDataStack",
            "Child1": "FindDesignatedAlertDefender",
            "Child2": "HasValidAlertDataLocation"
        },
        "FindDesignatedAlertDefender": {
            "nodeName": "FindDesignatedAlertDefender",
            "NodeType": "RepeatUntilFail",
            "Child0": "EvaluateAlertDataDefender"
        },
        "EvaluateAlertDataDefender": {
            "nodeName": "EvaluateAlertDataDefender",
            "NodeType": "Sequence",
            "Child0": "SetNextAlertData",
            "Child1": "ScoreAlertFor_Defend",
            "Child2": "ScoreAlertDataDistance",
            "Child3": "UpdateBestAlertData"
        },
        "DecideDefendAction": {
            "nodeName": "DecideDefendAction",
            "NodeType": "Selector",
            "Child0": "MoveToAlertIfNotVisible",
            "Child1": "SkipMove"
        },
        "ObserverMovement": {
            "nodeName": "ObserverMovement",
            "NodeType": "Selector",
            "Child0": "MoveFlanking",
            "Child1": "FallBackWithLoS"
        },
        "ObserverMovementUnsafe": {
            "nodeName": "ObserverMovementUnsafe",
            "NodeType": "Selector",
            "Child0": "MoveFlankingUnsafe",
            "Child1": "FallBackWithLoSUnsafe"
        },
        "NCObserverMovement": {
            "nodeName": "NCObserverMovement",
            "NodeType": "Selector",
            "Child0": "NCMoveFlanking",
            "Child1": "NCFallBackWithLoS"
        }
};
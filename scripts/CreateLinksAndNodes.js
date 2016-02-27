var CreateLinksAndNodes = function (rootNodeName) {
    window.noBuildChildNodeFlag = [];
    this.rootNodeName = rootNodeName || 'GenericAIRoot';
    window.missingNodes = {};
    window.behaviorGraphNodesArray = [];
    this.links = [];
    // this.nodesLength = this.nodes.length;
    this.nodeHasBeenLinked = {};

    /**
     * Check thisNode.NodeType for specific node types:
     *   Condition
     *   Action
     * etc...
     **/
    return {
        "nodes": window.behaviorGraphNodesArray,
        "links": this.pushLinkToStack(this.rootNodeName)
    };
}; // end CreateLinksAndNodes(rootNodeName);

/**
 * TODO: Update this render input elements.
 **/
CreateLinksAndNodes.prototype.nodeTypeForceMap = (function () {
    return {
        "Action": parseInt((Math.random() * 4000) - 2000),
        "Condition": parseInt((Math.random() * 4000) - 2000),
        "Failer": parseInt((Math.random() * 4000) - 2000),
        "Inverter": parseInt((Math.random() * 4000) - 2000),
        "RandFilter": parseInt((Math.random() * 4000) - 2000),
        "RandSelector": parseInt((Math.random() * 4000) - 2000),
        "RepeatUntilFail": parseInt((Math.random() * 4000) - 2000),
        "Selector": parseInt((Math.random() * 4000) - 2000),
        "Sequence": parseInt((Math.random() * 4000) - 2000),
        "StatCondition": parseInt((Math.random() * 4000) - 2000),
        "Successor": parseInt((Math.random() * 4000) - 2000),
        "TargetStatCondition": parseInt((Math.random() * 4000) - 2000)
    };
})();

//CreateLinksAndNodes.prototype.createNodes = function () {
//    for (var key in window.behaviorGraphNodesObject) {
//        var nodesArrayLength = window.behaviorGraphNodesArray.length;
//        window.behaviorGraphNodesObject[key].arrayIndex = nodesArrayLength;
//        window.behaviorGraphNodesArray.push(window.behaviorGraphNodesObject[key]);
//    }
//    return window.behaviorGraphNodesArray;
//}; // end createNodes()

CreateLinksAndNodes.prototype.pushLinkToStack = function (currentNodeName) {
    // Add the root/current node to the exclusion list
    this.nodeHasBeenLinked[currentNodeName] = true;
    
    // add this undefined node to the node list
    var nodesArrayLength = window.behaviorGraphNodesArray.length;
    if (!window.behaviorGraphNodesObject[currentNodeName]) {
        window.behaviorGraphNodesObject[currentNodeName] = {
            "nodeName": currentNodeName,
            "NodeType": "undefinedModifyAILogic",
            "arrayIndex": nodesArrayLength
        };
    } else {
        window.behaviorGraphNodesObject[currentNodeName].arrayIndex = nodesArrayLength;
    }
            
    window.behaviorGraphNodesArray.push(window.behaviorGraphNodesObject[currentNodeName]);
    
//    console.log(window.behaviorGraphNodesObject[currentNodeName]);
//    debugger;
    
    // variables for links
    var currentNode = window.behaviorGraphNodesObject[currentNodeName];
    
    // iterate through properties of this node making current-child links
    for (var key in currentNode) {
        
        if (key.search('Child') !== -1) {
            // create link between currentNode and child node
            var childNodeName = currentNode[key];
            var childNode = window.behaviorGraphNodesObject[childNodeName];
            
            // catch edge cases here
            var buildChildNodeFlag = (
                (!!childNode) && 
                (childNodeName.search('AddToTarget') !== -1) &&
                (childNodeName.search('AddToAlert') !== -1)
            );
            
            console.log('childNodeName =', childNodeName, ', buildChildNodeFlag =', buildChildNodeFlag);
            
            if (!buildChildNodeFlag) {
                window.noBuildChildNodeFlag.push(childNodeName);
//                console.log('no buildChildNodeFlag for childNodeName', childNodeName);
            }
            
            if (!!childNode) {
                // Check exclusion list to confirm node has not been linked.
                if (!this.nodeHasBeenLinked[childNodeName]) {
                    // perform pushLinkToStack() of child node
                    this.pushLinkToStack(childNodeName);
                }
                
                // create a link between the current node and the child node
                var newLink = {
                    'source': currentNode.arrayIndex,
                    'sNum': currentNode.arrayIndex,
                    'target': childNode.arrayIndex,
                    'tNum': childNode.arrayIndex,
//                    'value': parseInt(this.nodeTypeForceMap[currentNode.NodeType]),
                    'value': 4,
                    'label': currentNode.NodeType,
                    'weight': this.getWeight(currentNode)
                };

                this.links.push(newLink);
                
            } else {
                console.log('childNode undefined for childNodeName', childNodeName, ' in parent', currentNodeName);
                window.missingNodes[childNodeName] = window.missingNodes[childNodeName] || {};
                window.missingNodes[childNodeName][currentNodeName] = true;
            }
        } else if (key.search('Param') !== -1) {
            //            console.log('in Param# key');
        } // end else (key === 'Param#')
        else {
            
        } // end misc else
    } // end for (keys in currentNode)

    if (currentNodeName === this.rootNodeName) {
//        console.log('window.missingNodes =', window.missingNodes);
//        console.log('returning this.links:', this.links);
        return this.links;
    }
}; // end pushLinkToStack()

CreateLinksAndNodes.prototype.getWeight = function (currentNode) {
    var numberOfProperties = Object.keys(currentNode).length;
    return (Math.pow(numberOfProperties, 1.6) * 20);
}; // end getWeight


CreateLinksAndNodes.prototype.getValue = function (currentNode) {
    var numberOfProperties = Object.keys(currentNode).length;
    return numberOfProperties;
    // return (parseInt(this.nodeTypeForceMap[currentNode.NodeType]));
}; // end getValue


//CreateLinksAndNodes.prototype. = function() {
//    
//}; // end ()
//
//
//CreateLinksAndNodes.prototype. = function() {
//    
//}; // end ()
//
//
//CreateLinksAndNodes.prototype. = function() {
//    
//}; // end ()
//
//
//CreateLinksAndNodes.prototype. = function() {
//    
//}; // end ()
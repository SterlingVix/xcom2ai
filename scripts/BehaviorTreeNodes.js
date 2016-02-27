var BehaviorTreeNodes = function() {
    this.classesByNodeType = {};
    this.childClasses = {};
    this.behaviorRootNodeMap = {};
    this.renderedNodesList = {};
    this.menuItems = [];

    this.treeContainerElement = document.querySelector('#tree-container');
    window.filterInputElement = document.querySelector('#filter-input');
    this.filterButtonElement = document.querySelector('#filter-button');
    this.stateDescriptionContainer = document.querySelector('.state-description-container');
    this.nodeTypesList = document.querySelector('#node-types-list');
    this.classTypesList = document.querySelector('#class-types-list');

    this.characterRootTreeContainer = document.querySelector('#character-root-tree-container');
    this.nodeTypeChildElement = document.querySelector('#node-type-child-container');
    this.nodeTypeParamElement = document.querySelector('#node-type-param-container');
    this.nodeTypeIntentElement = document.querySelector('#node-type-intent-container');
    this.menuPanel = document.querySelector('#menu-panel');
    this.menuList = document.querySelector('#menu-list');
    this.treePanel = document.querySelector('#tree-panel');


    this.tempCounter = 0;
    this.sortByNodeType = true;
    this.wordFilter = '';

    this.queryTerm = window.location.search;

    if (!!this.queryTerm) {
        this.queryTerm = this.queryTerm.slice(1, (this.queryTerm.length));
        window.filterInputElement.value = this.queryTerm;
        this.wordFilter = this.queryTerm;
    }

    this.registerEvents();
    this.createTree();
}; // end BehaviorTreeNodes()

BehaviorTreeNodes.prototype.registerEvents = function() {
    this.filterButtonElement.addEventListener('click', function(event) {
        var newURL = window.location.pathname + '?' + window.filterInputElement.value;
        window.location.assign(newURL);
    }); // end (click button)
}; // end registerEvents()

BehaviorTreeNodes.prototype.appendFiltered = function(element, parentElement) {
    if (!!this.wordFilter) {
        var thisKey = (element.textContent).toLowerCase();
        if (thisKey.search(this.wordFilter) !== -1 || element.hasFilteredChild === true) {

            // if this item has the wordFliter
            parentElement.appendChild(element);
            parentElement.hasFilteredChild = true;
        }
    } else {
        parentElement.appendChild(element);
    }
}; // end appendFiltered()



BehaviorTreeNodes.prototype.createAnchor = function(anchorNodeSettings) {
    var anchorNode = document.createElement('a');
    anchorNode.className = anchorNodeSettings.className;
    anchorNode.textContent = anchorNodeSettings.textContent;
    anchorNode.setAttribute('href', anchorNodeSettings.href);
    anchorNode.setAttribute('id', anchorNodeSettings.id);
    anchorNode.setAttribute('title', anchorNodeSettings.title);

    return anchorNode;
}; // end createAnchor



BehaviorTreeNodes.prototype.createMenuItem = function(menuItemValue) {
    var menuItemButton = document.createElement('button');
    menuItemButton.className = 'menu-item-button';
    menuItemButton.textContent = menuItemValue;
    menuItemButton.setAttribute('id', menuItemValue + '-button');
    menuItemButton.dataset.characterRootValue = menuItemValue + '::CharacterRoot';

    // var menuListItemElement = document.createElement('li');
    // menuListItemElement.className = 'menu-item menu-item-list-element';
    // this.menuList.appendChild(menuListItemElement);
    // menuListItemElement.appendChild(menuItemButton);

    this.menuPanel.appendChild(menuItemButton);

    menuItemButton.addEventListener('click', function(event) {
        var characterRootValue = event.target.dataset.characterRootValue;
        
        /**
         * Render graph area
         **/
        window.behaviorTreeForceGraph = {};
        
        window.behaviorTreeForceGraph = new BehaviorTreeForceGraph(characterRootValue);
        
        /**
         * Render Tree Container area
         **/
        // clear any menuItemButton class
        var allMenuItemButtons = document.querySelectorAll('.menu-item-button');
        for (var i = 0; i < allMenuItemButtons.length; i++) {
            allMenuItemButtons[i].classList.remove('active');
        }
        
        // Render new set of nodes
        var characterRootValue = event.target.dataset.characterRootValue;

//        console.log(this.characterRootTreeContainer);
        while(this.characterRootTreeContainer.firstChild){
            this.characterRootTreeContainer.removeChild(this.characterRootTreeContainer.firstChild);
        }
        this.renderedNodesList = {};

        // console.log(this.characterRootTreeContainer);
        // console.log(this.behaviorRootNodeMap[characterRootValue]);

        this.makeCharacterTreeNode(characterRootValue, true);
        // console.log(characterRootValue);
        
        // Instantiate a new force graph
        var linksRoot = event.target.dataset.characterRootValue;
        window.behaviorTreeForcegraph = {};
        window.behaviorTreeForcegraph = new BehaviorTreeForceGraph(linksRoot);
        
        
        // set this button as active
        event.target.classList.add('active');
        console.log(event.target, event.target.classList);
    }.bind(this));
}; // end createMenuItem



BehaviorTreeNodes.prototype.makeCharacterTreeNode = function(characterRootValue, isTreeRoot) {
    isTreeRoot = isTreeRoot | false;
    
    // Find this node's element
    var thisNode = this.behaviorRootNodeMap[characterRootValue];
    // console.log(thisNode);
    // debugger;

    // If defined, add it to the container
    if (!!thisNode) {
        this.characterRootTreeContainer.appendChild(thisNode);
        this.renderedNodesList.characterRootValue = characterRootValue;
        // If they exist, iterate through child nodes
        var childNodes = thisNode.children[1].children;

        // If the childNodes exist and each node is not already rendered
        if (!!childNodes) {
            for (var i = 0; i < childNodes.length; i++) {
                var newBehaviorValue = childNodes[i].textContent;
                // console.log(newBehaviorValue);
                // debugger;
                // Cache node label values
                // nodeLabelValues.push(childNodes[i].textContent);
                // console.log('newBehaviorValue =', newBehaviorValue, typeof newBehaviorValue);
                // console.log('!this.renderedNodesList[newBehaviorValue] =', !this.renderedNodesList[newBehaviorValue]);
                // console.log('this.renderedNodesList[newBehaviorValue] =', this.renderedNodesList[newBehaviorValue]);

                if (!this.renderedNodesList[newBehaviorValue]) {
                    this.renderedNodesList[newBehaviorValue] = newBehaviorValue;
                    this.makeCharacterTreeNode(newBehaviorValue, false);
                }   
            }
        }
    }
}; // end makeCharacterTreeNode(characterRootValue)


BehaviorTreeNodes.prototype.createTree = function() {
    for (var key in defaultAIData) {
        var nodeType = defaultAIData[key].NodeType;

        var behaviorRootNode = document.createElement('div');
        behaviorRootNode.className = 'behavior-root-node ' + nodeType;

        var textElement = document.createElement('p');
        textElement.className = 'behavior-root-node-text';
        textElement.id = key;
        textElement.textContent = key;
        behaviorRootNode.appendChild(textElement);

        var behaviorChildNodeContainer = document.createElement('div');
        behaviorChildNodeContainer.className = 'behavior-child-node-container';
        behaviorRootNode.appendChild(behaviorChildNodeContainer);

        var characterRootFlag = key.search('::CharacterRoot');
        var characterRootValue;

        if (characterRootFlag !== -1) {
            characterRootValue = key.slice(0, characterRootFlag);

            if (characterRootValue === '') {
                characterRootValue = 'default'                
            }

            this.createMenuItem(characterRootValue);
            this.menuItems.push(behaviorRootNode);
            this.menuItems.push(behaviorChildNodeContainer);
            // console.log(characterRootValue);
        }

        for (var childKey in defaultAIData[key]) {
            var childValue = defaultAIData[key][childKey];
            var childClass = childKey;

            // console.log('childValue =', childValue, '  |  childClass =', childClass);

            // Append nodeType
            if (childClass === 'NodeType') {
                childClass = 'nodetype';
                var nodeTypeTextElement = document.createElement('span');
                nodeTypeTextElement.className = 'behavior-root-node-type';
                nodeTypeTextElement.textContent = ' (' + nodeType + ')';
                textElement.appendChild(nodeTypeTextElement);

            } else {
                var supplementText = '';

                if (childClass === 'Intent') {
                    childClass = 'intent';
                    supplementText = 'Intent: ';
                } else if (childClass.search('Child') !== -1) {
                    childClass = 'child';
                } else if (childClass.search('Param') !== -1) {
                    childClass = 'param';
                } else {
                    childClass = childClass.toLowerCase();
                }

                var behaviorChildNodeSettings = {
                    className: 'behavior-child-node ' + childClass,
                    textContent: supplementText + childValue,
                    href: '#' + childValue,
                };

                var behaviorChildNode = this.createAnchor(behaviorChildNodeSettings); 
                this.appendFiltered(behaviorChildNode, behaviorChildNodeContainer);

                if (!this.classesByNodeType[childClass]) {
                    this.classesByNodeType[childClass] = [];
                    this.classesByNodeType[childClass].push(behaviorChildNode);
                } else {
                    this.classesByNodeType[childClass].push(behaviorChildNode);
                }

            }
            if (!this.childClasses[childClass]) {
                this.childClasses[childClass] = childClass;
            }

        } // end for (child keys)


        if (this.sortByNodeType) {


            if (!(this.classesByNodeType[nodeType])) {


                // add object to this.classesByNodeType
                this.classesByNodeType[nodeType] = {
                    elements: [],
                    nodeContainerElement: document.createElement('div')
                };
                this.classesByNodeType[nodeType].nodeContainerElement.className = nodeType + ' node-type-container';
                

                var nodeTypeLabelSettings = {
                    className: 'node-type-label',
                    id: nodeType + '-label',
                    textContent: 'Node Type: ' + nodeType,
                    href: '#page-top',
                    title: 'Click to go to the top of the page'
                };

                var nodeTypeLabel = this.createAnchor(nodeTypeLabelSettings);
                

                this.classesByNodeType[nodeType].elements.push(behaviorRootNode);
                this.appendFiltered(this.classesByNodeType[nodeType].nodeContainerElement, this.treeContainerElement);
                
                this.treeContainerElement.appendChild(this.classesByNodeType[nodeType].nodeContainerElement);
                // containerElement.appendChild(this.classesByNodeType[nodeType].nodeContainerElement);

                // Append label and first child
                this.classesByNodeType[nodeType].nodeContainerElement.appendChild(nodeTypeLabel);
                this.appendFiltered(behaviorRootNode, this.classesByNodeType[nodeType].nodeContainerElement);
            } else {
                this.classesByNodeType[nodeType].elements.push(behaviorRootNode);
                this.appendFiltered(behaviorRootNode, this.classesByNodeType[nodeType].nodeContainerElement);
            }
        } else {
            this.appendFiltered(behaviorRootNode, this.treeContainerElement);
        }
        this.behaviorRootNodeMap[key] = behaviorRootNode;
    } // end for (key in defaultAIData)

    // console.log('this.classesByNodeType =', this.classesByNodeType);
    // console.log('this.childClasses =', this.childClasses);



    for (var key in this.classesByNodeType) {

        // Don't create links for Class Type selectors (child, param, intent, etc.)
        if (key.toLowerCase() === key) {
            continue;
        }

        var nodeTypeAnchorElementSettings = {
            className: 'node-type-anchor-element',
            textContent: key + ';',
            href: '#' + key + '-label'
        };

        var nodeTypeAnchorElement = this.createAnchor(nodeTypeAnchorElementSettings);

        this.nodeTypesList.appendChild(nodeTypeAnchorElement);
    }

    for (var key in this.childClasses) {
        this.classTypesList.textContent = this.classTypesList.textContent + key + '; ';
    }
}; // end createTree()


BehaviorTreeNodes.prototype.createMenu = function() {

}; // end createMenu()

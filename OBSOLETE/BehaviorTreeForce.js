/**
 * Originally taken from a D3 gallery.
 **/

/**
 * Functions List:
 *     createForceLayout
 *     generateLinksMap
 *     generateAllLinksObjects
 *     generateCharacterRootLinks
 *     createLinksObjectNode
 *     resetMouseVars
 *     tick
 *     this.restart
 *     mousedown
 *     mouseup
 *     spliceLinksForNode
 *     keydown
 *     keyup
 *     calculateLinkDistance
 *     initializeGraph
 **/
var BehaviorTreeForce = function () {
    this.useFullScreen = true;
    this.renderOptions = ['circle', 'rectangle', 'none'];

    // NOTE: Update this value to render a different node shape
    this.renderShape = this.renderOptions[2];

    this.calculatedScreenWidth = document.body.getClientRects()[0].width || window.screen.availWidth;
    this.calculatedScreenHeight = (0.9 * window.innerHeight) || window.screen.availHeight;

    // set up SVG for D3
    // Color categories: https://github.com/mbostock/d3/wiki/Ordinal-Scales#categorical-colors
    // colors = d3.scale.category20c();
    this.colors = d3.scale.category20();
    this.width = 960;
    this.height = 580;

    if (this.useFullScreen) {
        this.width = this.calculatedScreenWidth;
        this.height = this.calculatedScreenHeight;
    }

    // Other pre-configured variables
    this.nodeRadius = 1 || this.width / 2;
    this.forceCharge = 0;
    this.linkDistance = (this.width / 2) || 50; // in px

    // forceCoefficient renders the graph in a size larger than the svg window
    this.forceCoefficient = 1;
    this.forceWidth = this.width * this.forceCoefficient;
    this.forceHeight = this.height * this.forceCoefficient;

    this.svg = d3.select('#graph-rendering-container')
        .append('svg')
        .attr('oncontextmenu', 'return false;')
        .attr('width', this.width)
        .attr('height', this.height);

    // set up initial nodes and links
    //  - nodes are known by 'id', not by index in array.
    //  - reflexive edges are indicated on the node (as a bold black circle).
    //  - links are always source < target; edge directions are set by 'left' and 'right'.
    this.nodes = window.behaviorGraphNodesArray;
    this.nodesLength = this.nodes.length;
    this.btObject = window.behaviorGraphNodesObject;

    this.lastNodeId = this.nodes.length - 1;
    this.linksMap = this.generateLinksMap();
    this.links = window.cachedLinks || this.generateAllLinksObjects();

//    this.createForceLayout();
    this.force = d3.layout.force()
        .size([this.forceWidth, this.forceHeight])
        .nodes(this.nodes)
        .links(this.links)
        // .linkDistance(linkDistance)
        .linkDistance(this.calculateLinkDistance(this.links))
        .charge(this.forceCharge)
//        .on('tick', tick)
        .on('tick', this.tick)
//        .on('end', function () {
//            console.log('inside this.force.on("end").');
//        }); // end this.force.on(end)
    
//    this.createSVGElements();
    // define arrow markers for graph links
    this.svg.append('svg:defs').append('svg:marker')
        .attr('id', 'end-arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 6)
        .attr('markerWidth', 3)
        .attr('markerHeight', 3)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#000');

    this.svg.append('svg:defs').append('svg:marker')
        .attr('id', 'start-arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 4)
        .attr('markerWidth', 3)
        .attr('markerHeight', 3)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M10,-5L0,0L10,5')
        .attr('fill', '#000');
    
//    this.createPaths();
    // line displayed when dragging new nodes
    this.drag_line = this.svg.append('svg:path')
        .attr('class', 'link dragline hidden')
        .attr('d', 'M0,0L0,0');

    // handles to link and node element groups
    this.path = this.svg.append('svg:g').selectAll('path');
    this.renderedSVGElement = this.svg.append('svg:g').selectAll('g');

    // mouse event vars
    this.selected_node = null;
    this.selected_link = null;
    this.mousedown_link = null;
    this.mousedown_node = null;
    this.mouseup_node = null;
    
    this.initializeGraph();
}; // end createForceLayout()


/**
 * init D3 force layout
 *
 * Now we create a force layout object and define its properties.
 * Those include the dimensions of the visualization and the arrays
 * of nodes and links.
 *
 * There's one more property of the layout we need to define,
 * its `linkDistance`. That's generally a configurable value and,
 * for a first example, we'd normally leave it at its default.
 * Unfortunately, the default value results in a visualization
 * that's not especially clear. This parameter defines the
 * distance (normally in pixels) that we'd like to have between
 * nodes that are connected. (It is, thus, the length we'd
 * like our links to have.)
 **/
BehaviorTreeForce.prototype.createForceLayout = function() {
    this.force = d3.layout.force()
        .size([this.forceWidth, this.forceHeight])
        .nodes(this.nodes)
        .links(this.links)
        // .linkDistance(linkDistance)
        .linkDistance(this.calculateLinkDistance(this.links))
        .charge(this.forceCharge)
//        .on('tick', tick)
        .on('tick', this.tick)
        .on('end', function () {

            // When this function executes, the force layout
            // calculations have concluded. The layout will
            // have set various properties in our nodes and
            // links objects that we can use to position them
            // within the SVG container.

            // First let's reposition the nodes. As the force
            // layout runs it updates the `x` and `y` properties
            // that define where the node should be centered.
            // To move the node, we set the appropriate SVG
            // attributes to their new values. We also have to
            // give the node a non-zero radius so that it's visible
            // in the container.
            console.log('inside this.force.on("end").');

            //            node.attr('r', this.nodeRadius)
            //                .attr('cx', function(d) { return d.x; })
            //                .attr('cy', function(d) { return d.y; });
            //
            //            // We also need to update positions of the links.
            //            // For those elements, the force layout sets the
            //            // `source` and `target` properties, specifying
            //            // `x` and `y` values in each case.
            //
            //            link.attr('x1', function(d) { return d.source.x; })
            //                .attr('y1', function(d) { return d.source.y; })
            //                .attr('x2', function(d) { return d.target.x; })
            //                .attr('y2', function(d) { return d.target.y; });
        }); // end this.force.on(end)
}; // end BehaviorTreeForce()
    
BehaviorTreeForce.prototype.createPaths = function() {
    // line displayed when dragging new nodes
    this.drag_line = this.svg.append('svg:path')
        .attr('class', 'link dragline hidden')
        .attr('d', 'M0,0L0,0');

    // handles to link and node element groups
    this.path = this.svg.append('svg:g').selectAll('path');
    this.renderedSVGElement = this.svg.append('svg:g').selectAll('g');

    // mouse event vars
    this.selected_node = null;
    this.selected_link = null;
    this.mousedown_link = null;
    this.mousedown_node = null;
    this.mouseup_node = null;
}; // end createPaths()

BehaviorTreeForce.prototype.createSVGElements = function() {
    // define arrow markers for graph links
    this.svg.append('svg:defs').append('svg:marker')
        .attr('id', 'end-arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 6)
        .attr('markerWidth', 3)
        .attr('markerHeight', 3)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#000');

    this.svg.append('svg:defs').append('svg:marker')
        .attr('id', 'start-arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 4)
        .attr('markerWidth', 3)
        .attr('markerHeight', 3)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M10,-5L0,0L10,5')
        .attr('fill', '#000');
}; // end createSVGElements()

BehaviorTreeForce.prototype.generateLinksMap = function () {
    var thisLinksMap = {};

    // iterate through graph nodes
    for (var i = 0; i < this.nodesLength; i++) {
        thisNodeName = this.nodes[i].nodeName;
        thisLinksMap[thisNodeName] = i;
    } // end for (graphNodes)
    return thisLinksMap;
}; // end generateLinksMap()

BehaviorTreeForce.prototype.generateAllLinksObjects = function () {
    var currentLinks = [];
    var currentNodesLength = this.nodes.length;

    // iterate through graph nodes
    for (var i = 0; i < currentNodesLength; i++) {
        var thisNode = this.nodes[i];

        // iterate through properties of this node
        for (var key in thisNode) {

            var targetNodeString = thisNode[key];
            var nodeIndex = this.linksMap[targetNodeString];
            var targetNode = this.nodes[nodeIndex];

            // if targetNode isn't defined continue the loop
            if (!targetNode) {
                continue;
            }

            if (key.search('id') === 0) {
                //                    console.log('id: ', key, ': ', thisNode[key]);
            } else if (key.search('Child') === 0 || key.search('Param') === 0 || key.search('Intent') === 0) {
                currentLinks.push(this.createLinksObjectNode(thisNode, targetNode));
            } else if (key.search('reflexive') === 0) {

            } else if (key.search('nodeName') === 0) {

            } else if (key.search('NodeType') === 0) {

            } else {
                console.warn('WARNING: key', key, ' found but not parsed.');
            }
        } // end for (key in thisNode)
    } // end for (this.nodes)

    return currentLinks;
}; // end generateAllLinksObjects()

BehaviorTreeForce.prototype.generateCharacterRootLinks = function (nodeString, depth) {
    var characterRootLinks = [];
    var characterRootNodesLength = this.nodes.length;
    var depth = depth || 0;
    if (depth > 5) {
        // TEMPORARY var to avoid max call stack size
        console.log('At nodeString ' + nodeString + ': returning from recusrive function at d = ' + depth + ' to avoid overflow.');
        return true;
    }

    // Queue of indices to link.
    var indexOfCharacterRoot = this.linksMap[nodeString];
    var indecesOfCharacterRoot = [];
    indecesOfCharacterRoot.push(indexOfCharacterRoot);

    var thisNode = this.nodes[indexOfCharacterRoot];

    // iterate through properties of this node
    for (var key in thisNode) {

        var targetNodeString = thisNode[key];
        var nodeIndex = this.linksMap[targetNodeString];
        var targetNode = this.nodes[nodeIndex];

        // if targetNode isn't defined continue the loop
        if (!targetNode) {
            continue;
        }

        if (key.search('Child') === 0 || key.search('Param') === 0 || key.search('Intent') === 0) {
            links.push(this.createLinksObjectNode(thisNode, targetNode));

            // get string of this child
            this.generateCharacterRootLinks(targetNodeString, depth + 1);
        }
    } // end for (key in thisNode)
    return true;
}; // end generateCharacterRootLinks(nodeString, depth)

BehaviorTreeForce.prototype.createLinksObjectNode = function (sourceNode, targetNode) {
    // TODO: Add weight edges here
    var linkObject = {
        source: sourceNode,
        target: targetNode,
        left: false,
        right: true
    };
    return linkObject;
}; // end createLinksObjectNode(sourceNode, targetNode)

BehaviorTreeForce.prototype.resetMouseVars = function () {
    this.mousedown_node = null;
    this.mouseup_node = null;
    this.mousedown_link = null;
}; // end resetMouseVars()

// update force layout (called automatically each iteration)
BehaviorTreeForce.prototype.tick = function () {
    this.path.attr('d', function (d) {
        return 'M' + d.source.x + ',' + d.source.y + 'L' + d.target.x + ',' + d.target.y;
    });

    this.renderedSVGElement.attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
    });
}; // end tick()

// update graph (called when needed)
BehaviorTreeForce.prototype.restart = function () {
    
    // cache reference to this for use in d3 functions
    var that = this;
    
    // path (link) group
    this.path = this.path.data(this.links);

    // FROM EXAMPLE
    //        path.enter().append('line')
    //            .attr('class', 'link')
    //            .attr('x1', 0)
    //            .attr('y1', 0)
    //            .attr('x2', 0)
    //            .attr('y2', 0);









    // ORIGINAL
    // update existing links
    this.path.classed('selected', function (d) {
            return d === this.selected_link;
        })
        .style('marker-start', function (d) {
            return d.left ? 'url(#start-arrow)' : '';
        })
        .style('marker-end', function (d) {
            return d.right ? 'url(#end-arrow)' : '';
        });


    // add new links
    this.path.enter().append('svg:path')
        .attr('class', 'link')
        .classed('selected', function (d) {
            return d === this.selected_link;
        })
        .style('marker-start', function (d) {
            return d.left ? 'url(#start-arrow)' : '';
        })
        .style('marker-end', function (d) {
            return d.right ? 'url(#end-arrow)' : '';
        })
        .on('mousedown', function (d) {
            if (d3.event.ctrlKey) {
                return;
            }

            // select link
            this.mousedown_link = d;
            if (this.mousedown_link === this.selected_link) this.selected_link = null;
            else this.selected_link = this.mousedown_link;
            this.selected_node = null;
            this.restart();
        }); // end .od(mousedown)

    // remove old links
    this.path.exit().remove();








    // TODO
    // WARNING
    // SVG (node) groups:
    this.renderedSVGElement = this.renderedSVGElement.data(this.nodes, function (d) {
        return d.id;
    });
    this.renderedSVGElement.selectAll('this.renderedSVGElement')
        .style('fill', function (d) {
            //            return (d === this.selected_node) ? d3.rgb(colors(d.id)).brighter().toString() : colors(d.id);
            return (d === this.selected_node)
                ? d3.rgb(colors(d.id)).brighter().toString()
                : colors(d.id);
        })
        .classed('reflexive', function (d) {
            return d.reflexive;
        });

    // update existing nodes (reflexive & selected visual states)
    var renderedNode = this.renderedSVGElement.enter().append('svg:g');



    if (this.renderShape === 'circle') {
        renderedNode.append('svg:circle')
            .attr('r', this.nodeRadius);
    } // end if (renderCircles)
    else if (this.renderShape === 'rectangle') {
        var renderedNode = this.renderedSVGElement.enter().append('svg:g');
        renderedNode.append('svg:rect')
            //                .attr('x', 10)
            //                .attr('y', 10)
            .attr('width', 60)
            .attr('height', 18)

    } // end (render rectangle)
    else if (this.renderShape === 'none') {


    } else {
        alert('Warning: no valid this.renderShape assigned.');
    }

    renderedNode.attr('class', 'node')
        .attr('title', 'popup?')
        .style('fill', function (d) {
            return (d === this.selected_node) ? d3.rgb(colors(d.id)).brighter().toString() : 'grey';
        })
        .style('stroke', function (d) {
            // return d3.rgb(colors(d.id)).darker().toString();
            return 'pink';
        })
        .classed('reflexive', function (d) {
            return d.reflexive;
        })
        .on('mouseover', function (d) {
            if (!this.mousedown_node || d === this.mousedown_node) return;
            // enlarge target node
            d3.select(this).attr('transform', 'scale(1.1)');
        })
        //            .on('mouseout', function (d) {
        //console.log('1');
        //                if (!this.mousedown_node || d === this.mousedown_node) return;
        //                // unenlarge target node
        //                d3.select(this).attr('transform', '');
        //            })
        .on('mousedown', function (d) {
            console.log('2');
            if (d3.event.ctrlKey) return;

            // select node
            this.mousedown_node = d;
            if (this.mousedown_node === this.selected_node) this.selected_node = null;
            else this.selected_node = this.mousedown_node;
            this.selected_link = null;

            // reposition drag line
            this.drag_line
                .style('marker-end', 'url(#end-arrow)')
                .classed('hidden', false)
                .attr('d', 'M' + this.mousedown_node.x + ',' + this.mousedown_node.y + 'L' + this.mousedown_node.x + ',' + this.mousedown_node.y);

            this.restart();
        })
        .on('mouseup', function (d) {
            console.log('3');
            if (!this.mousedown_node) return;

            // needed by FF
            this.drag_line
                .classed('hidden', true)
                .style('marker-end', '');

            // check for drag-to-self
            this.mouseup_node = d;
            if (this.mouseup_node === this.mousedown_node) {
                this.resetMouseVars();
                return;
            }

            // unenlarge target node
            d3.select(this).attr('transform', '');

            // add link to graph (update if exists)
            // NB: links are strictly source < target; arrows separately specified by booleans
            var source, target, direction;
            if (this.mousedown_node.id < this.mouseup_node.id) {
                source = this.mousedown_node;
                target = this.mouseup_node;
                direction = 'right';
            } else {
                source = this.mouseup_node;
                target = this.mousedown_node;
                direction = 'left';
            }

            var link;
            link = this.links.filter(function (l) {
                return (l.source === source && l.target === target);
            })[0];

            if (link) {
                link[direction] = true;
            } else {
                link = {
                    source: source,
                    target: target,
                    left: false,
                    right: false
                };
                link[direction] = true;
                this.links.push(link);
            }

            // select new link
            this.selected_link = link;
            this.selected_node = null;
            this.restart();
        });

    // show node IDs
    // This appends a text node to the renderedSVG element.
    // Could probably drop the SVG shape and style this with CSS instead...

    renderedNode.append('svg:text')
        .attr('x', 0)
        //            .attr('y', 4)
        .attr('y', 0)
        //            .attr('class', 'graph-live-text' + d.NodeType)
        .attr('class', function (d) {
            // can I get node type and add it as a class here?
            return 'soft-border text-unselectable graph-live-text ' + d.NodeType;
        })
        .text(function (d) {
            return d.nodeName;
        });

    // remove old nodes
    //        circle.exit().remove();
    this.renderedSVGElement.exit().remove();

    // set the graph in motion
    this.force.start();
}; // end this.restart()

BehaviorTreeForce.prototype.mousedown = function () {
    console.log('4');
    // prevent I-bar on drag
    //d3.event.preventDefault();

    // because :active only works in WebKit?
    this.svg.classed('active', true);

    if (d3.event.ctrlKey || this.mousedown_node || this.mousedown_link) return;

    // insert new node at point
    var point = d3.mouse(this);
    var node = {
        id: this.lastNodeId,
        reflexive: false
    };
    node.x = point[0];
    node.y = point[1];
    this.nodes.push(node);

    this.restart();
}; // end mousedown()

BehaviorTreeForce.prototype.mouseup = function () {
    console.log('6');
    if (this.mousedown_node) {
        // hide drag line
        this.drag_line
            .classed('hidden', true)
            .style('marker-end', '');
    }

    // because :active only works in WebKit?
    this.svg.classed('active', false);

    // clear mouse event vars
    this.resetMouseVars();
}; // end mouseup()

BehaviorTreeForce.prototype.spliceLinksForNode = function (node) {
    var toSplice = this.links.filter(function (l) {
        return (l.source === node || l.target === node);
    });
    toSplice.map(function (l) {
        this.links.splice(this.links.indexOf(l), 1);
    });
}; // end spliceLinksForNode(node)

// TODO
// WARNING
// only respond once per keydown
this.lastKeyDown = -1;

BehaviorTreeForce.prototype.keydown = function () {
    d3.event.preventDefault();

    if (this.lastKeyDown !== -1) return;
    this.lastKeyDown = d3.event.keyCode;

    // ctrl
    if (d3.event.keyCode === 17) {
        //            circle.call(force.drag);
        this.renderedSVGElement.call(this.force.drag);
        this.svg.classed('ctrl', true);
    }

    if (!this.selected_node && !this.selected_link) return;
    switch (d3.event.keyCode) {
    case 8: // backspace
    case 46: // delete
        if (this.selected_node) {
            this.nodes.splice(this.nodes.indexOf(this.selected_node), 1);
            this.spliceLinksForNode(this.selected_node);
        } else if (this.selected_link) {
            this.links.splice(this.links.indexOf(this.selected_link), 1);
        }
        this.selected_link = null;
        this.selected_node = null;
        this.restart();
        break;
    case 66: // B
        if (this.selected_link) {
            // set link direction to both left and right
            this.selected_link.left = true;
            this.selected_link.right = true;
        }
        this.restart();
        break;
    case 76: // L
        if (this.selected_link) {
            // set link direction to left only
            this.selected_link.left = true;
            this.selected_link.right = false;
        }
        this.restart();
        break;
    case 82: // R
        if (this.selected_node) {
            // toggle node reflexivity
            this.selected_node.reflexive = !this.selected_node.reflexive;
        } else if (this.selected_link) {
            // set link direction to right only
            this.selected_link.left = false;
            this.selected_link.right = true;
        }
        this.restart();
        break;
    }
}; // end keydown()

BehaviorTreeForce.prototype.keyup = function () {
    this.lastKeyDown = -1;

    // ctrl
    if (d3.event.keyCode === 17) {
        //            circle
        this.renderedSVGElement
            .on('mousedown.drag', null)
            .on('touchstart.drag', null);
        this.svg.classed('ctrl', false);
    }
}; // end keyup()

BehaviorTreeForce.prototype.calculateLinkDistance = function (thisPath) {
    // TODO: Some logic for differentiating nodes here:
    return this.height * 2;
}; // end calculateLinkDistance(thisPath)

// app starts here
BehaviorTreeForce.prototype.initializeGraph = function () {
    this.svg.on('mousedown', this.mousedown)
        //        .on('mousemove', mousemove)
        .on('mouseup', this.mouseup);
    d3.select('#graph-rendering-container')
        .on('keydown', this.keydown)
        .on('keyup', this.keyup);
    this.restart();

    window.btObject = this.btObject;
    window.links = this.links;
    window.linksMap = this.linksMap;
    window.nodes = this.nodes;
}; // end initializeGraph()
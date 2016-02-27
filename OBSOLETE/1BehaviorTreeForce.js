/**
 * Originally taken from a D3 gallery.
 **/
var BehaviorTreeForce = function () {
    var useFullScreen = true;
    var renderOptions = ['circle', 'rectangle', 'none'];
    
    // NOTE: Update this value to render a different node shape
    var renderShape = renderOptions[0];

    var calculatedScreenWidth = document.body.getClientRects()[0].width || window.screen.availWidth,
        calculatedScreenHeight = (0.9 * window.innerHeight) || window.screen.availHeight;

    // set up SVG for D3
    // Color categories: https://github.com/mbostock/d3/wiki/Ordinal-Scales#categorical-colors
    // colors = d3.scale.category20c();
    var colors = d3.scale.category20();
    var width = 960;
    var height = 580;

    if (useFullScreen) {
        width = calculatedScreenWidth;
        height = calculatedScreenHeight;
    }

    // Other pre-configured variables
    var nodeRadius = 25 || width / 2;
    var forceCharge = -50;
    var linkDistance = (width / 2) || 50; // in px

    // forceCoefficient renders the graph in a size larger than the svg window
    var forceCoefficient = 1,
        forceWidth = width * forceCoefficient,
        forceHeight = height * forceCoefficient;

    var svg = d3.select('#character-root-tree-container')
        .append('svg')
        .attr('oncontextmenu', 'return false;')
        .attr('width', width)
        .attr('height', height);

    // set up initial nodes and links
    //  - nodes are known by 'id', not by index in array.
    //  - reflexive edges are indicated on the node (as a bold black circle).
    //  - links are always source < target; edge directions are set by 'left' and 'right'.
    var nodes = window.behaviorGraphNodesArray;
    var nodesLength = nodes.length;
    var btObject = window.behaviorGraphNodesObject;
    //    var btObjectLength = btObject.length;

    var lastNodeId = nodes.length - 1;
    var linksMap = generateLinksMap();
    //    console.log('linksMap = ', linksMap);
    var links = window.cachedLinks || generateLinksObject();

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
    var force = d3.layout.force()
        .size([forceWidth, forceHeight])
        .nodes(nodes)
        .links(links)
        //        .linkDistance(linkDistance)
        .linkDistance(calculateLinkDistance(links))
        .charge(forceCharge)
        .on('tick', tick)
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
            console.log('inside force.on("end").');

            //            node.attr('r', nodeRadius)
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
        }); // end force.on(end)

    // define arrow markers for graph links
    svg.append('svg:defs').append('svg:marker')
        .attr('id', 'end-arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 6)
        .attr('markerWidth', 3)
        .attr('markerHeight', 3)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#000');

    svg.append('svg:defs').append('svg:marker')
        .attr('id', 'start-arrow')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 4)
        .attr('markerWidth', 3)
        .attr('markerHeight', 3)
        .attr('orient', 'auto')
        .append('svg:path')
        .attr('d', 'M10,-5L0,0L10,5')
        .attr('fill', '#000');

    // line displayed when dragging new nodes
    var drag_line = svg.append('svg:path')
        .attr('class', 'link dragline hidden')
        .attr('d', 'M0,0L0,0');

    // handles to link and node element groups
    var path = svg.append('svg:g').selectAll('path'),
        renderedSVGElement = svg.append('svg:g').selectAll('g');

    // mouse event vars
    var selected_node = null,
        selected_link = null,
        mousedown_link = null,
        mousedown_node = null,
        mouseup_node = null;

    ////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////

    function generateLinksMap() {
        var thisLinksMap = {};

        // iterate through graph nodes
        for (var i = 0; i < nodesLength; i++) {
            var thisNodeName = nodes[i].nodeName;
            thisLinksMap[thisNodeName] = i;
        } // end for (graphNodes)
        return thisLinksMap;
    }; // end generateLinksMap()




    function generateLinksObject() {
        var links = [];
        var nodesLength = nodes.length;

        // iterate through graph nodes
        for (var i = 0; i < nodesLength; i++) {
            var thisNode = nodes[i];

            // iterate through properties of this node
            for (var key in thisNode) {


                if (key.search('id') === 0) {
                    //                    console.log('id: ', key, ': ', thisNode[key]);
                } else if (key.search('reflexive') === 0) {

                } else if (key.search('nodeName') === 0) {

                } else if (key.search('Intent') === 0) {

                } else if (key.search('NodeType') === 0) {

                } else if (key.search('Child') === 0) {
                    var linkedNode = thisNode[key];
                    var nodeIndex = linksMap[linkedNode];

                    if (!!nodes[nodeIndex]) { // TODO: Add weight edges here
                        var linkObject = {
                            source: nodes[i],
                            target: nodes[nodeIndex],
                            left: false,
                            right: true
                        };

                        links.push(linkObject);
                    }
                } else if (key.search('Param') === 0) {

                } else {
                    console.warn('WARNING: key', key, ' found but not parsed.');
                }
            } // end for (key in thisNode)
        } // end for (nodes)

        return links;
    }; // end generateLinksObject()

    ////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////    

    function resetMouseVars() {
        mousedown_node = null;
        mouseup_node = null;
        mousedown_link = null;
    }; // end resetMouseVars()

    // update force layout (called automatically each iteration)
    function tick() {

        // FROM EXAMPLE:
        //        path.transition().ease('linear').duration(animationStep)
        //        .attr('x1', function(d) { return d.source.x; })
        //        .attr('y1', function(d) { return d.source.y; })
        //        .attr('x2', function(d) { return d.target.x; })
        //        .attr('y2', function(d) { return d.target.y; });


        // ORIGNAL:
        // draw directed edges with proper padding from node centers
        path.attr('d', function (d) {
            var deltaX = d.target.x - d.source.x,
                deltaY = d.target.y - d.source.y,
                dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
                normX = deltaX / dist,
                normY = deltaY / dist,
                sourcePadding = d.left ? 17 : 12,
                targetPadding = d.right ? 17 : 12,
                sourceX = d.source.x + (sourcePadding * normX),
                sourceY = d.source.y + (sourcePadding * normY),
                targetX = d.target.x - (targetPadding * normX),
                targetY = d.target.y - (targetPadding * normY);
            return 'M' + sourceX + ',' + sourceY + 'L' + targetX + ',' + targetY;
        });

        renderedSVGElement.attr('transform', function (d) {
            return 'translate(' + d.x + ',' + d.y + ')';
        });
    }; // end tick()

    // update graph (called when needed)
    function restart() {
        // path (link) group
        path = path.data(links);

        // FROM EXAMPLE
        //        path.enter().append('line')
        //            .attr('class', 'link')
        //            .attr('x1', 0)
        //            .attr('y1', 0)
        //            .attr('x2', 0)
        //            .attr('y2', 0);









        // ORIGINAL
        // update existing links
        path.classed('selected', function (d) {
                return d === selected_link;
            })
            .style('marker-start', function (d) {
                return d.left ? 'url(#start-arrow)' : '';
            })
            .style('marker-end', function (d) {
                return d.right ? 'url(#end-arrow)' : '';
            });


        // add new links
        path.enter().append('svg:path')
            .attr('class', 'link')
            .classed('selected', function (d) {
                return d === selected_link;
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
                mousedown_link = d;
                if (mousedown_link === selected_link) selected_link = null;
                else selected_link = mousedown_link;
                selected_node = null;
                restart();
            }); // end .od(mousedown)

        // remove old links
        path.exit().remove();


        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // SVG (node) groups:
        renderedSVGElement = renderedSVGElement.data(nodes, function (d) {
        return d.id;
        });
        renderedSVGElement.selectAll('renderedSVGElement')
        .style('fill', function (d) {
        return (d === selected_node) ? d3.rgb(colors(d.id)).brighter().toString() : colors(d.id);
        })
        .classed('reflexive', function (d) {
        return d.reflexive;
        });

        // update existing nodes (reflexive & selected visual states)
        var renderedNode = renderedSVGElement.enter().append('svg:g');
        
        
        
        if (renderShape === 'circle') {
            renderedNode.append('svg:circle')
                .attr('r', nodeRadius);
        } // end if (renderCircles)
        else if (renderShape === 'rectangle') {
            var renderedNode = renderedSVGElement.enter().append('svg:g');
            renderedNode.append('svg:rect')
//                .attr('x', 10)
//                .attr('y', 10)
                .attr('width', 60)
                .attr('height', 18)

        } // end (render rectangle)
        else if (renderShape === 'none') {
            
            
        } else {
            alert('Warning: no valid renderShape assigned.');
        }






//        renderedNode.append('svg:circle')
//            .attr('r', nodeRadius)
        renderedNode.attr('class', 'node')
            .attr('title', 'popup?')
            .style('fill', function (d) {
                return (d === selected_node) ? d3.rgb(colors(d.id)).brighter().toString() : colors(d.id);
            })
            .style('stroke', function (d) {
                return d3.rgb(colors(d.id)).darker().toString();
            })
            .classed('reflexive', function (d) {
                return d.reflexive;
            })
            .on('mouseover', function (d) {
                if (!mousedown_node || d === mousedown_node) return;
                // enlarge target node
                d3.select(this).attr('transform', 'scale(1.1)');
            })
            //            .on('mouseout', function (d) {
            //console.log('1');
            //                if (!mousedown_node || d === mousedown_node) return;
            //                // unenlarge target node
            //                d3.select(this).attr('transform', '');
            //            })
            .on('mousedown', function (d) {
                console.log('2');
                if (d3.event.ctrlKey) return;

                // select node
                mousedown_node = d;
                if (mousedown_node === selected_node) selected_node = null;
                else selected_node = mousedown_node;
                selected_link = null;

                // reposition drag line
                drag_line
                    .style('marker-end', 'url(#end-arrow)')
                    .classed('hidden', false)
                    .attr('d', 'M' + mousedown_node.x + ',' + mousedown_node.y + 'L' + mousedown_node.x + ',' + mousedown_node.y);

                restart();
            })
            .on('mouseup', function (d) {
                console.log('3');
                if (!mousedown_node) return;

                // needed by FF
                drag_line
                    .classed('hidden', true)
                    .style('marker-end', '');

                // check for drag-to-self
                mouseup_node = d;
                if (mouseup_node === mousedown_node) {
                    resetMouseVars();
                    return;
                }

                // unenlarge target node
                d3.select(this).attr('transform', '');

                // add link to graph (update if exists)
                // NB: links are strictly source < target; arrows separately specified by booleans
                var source, target, direction;
                if (mousedown_node.id < mouseup_node.id) {
                    source = mousedown_node;
                    target = mouseup_node;
                    direction = 'right';
                } else {
                    source = mouseup_node;
                    target = mousedown_node;
                    direction = 'left';
                }

                var link;
                link = links.filter(function (l) {
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
                    links.push(link);
                }

                // select new link
                selected_link = link;
                selected_node = null;
                restart();
            });

        // show node IDs
        renderedNode.append('svg:text')
            .attr('x', 0)
            .attr('y', 4)
            .attr('class', 'id')
            .text(function (d) {
                return d.nodeName;
            });

        // remove old nodes
//        circle.exit().remove();
        renderedSVGElement.exit().remove();

        // set the graph in motion
        force.start();
    }; // end restart()

    function mousedown() {
        console.log('4');
        // prevent I-bar on drag
        //d3.event.preventDefault();

        // because :active only works in WebKit?
        svg.classed('active', true);

        if (d3.event.ctrlKey || mousedown_node || mousedown_link) return;

        // insert new node at point
        var point = d3.mouse(this),
            node = {
                id: lastNodeId,
                reflexive: false
            };
        node.x = point[0];
        node.y = point[1];
        nodes.push(node);

        restart();
    }; // end mousedown()

    //    function mousemove() {
    //console.log('5');
    //        if (!mousedown_node) return;
    //
    //        // update drag line
    //        drag_line.attr('d', 'M' + mousedown_node.x + ',' + mousedown_node.y + 'L' + d3.mouse(this)[0] + ',' + d3.mouse(this)[1]);
    //
    //        restart();
    //    }; // end mousemove()

    function mouseup() {
        console.log('6');
        if (mousedown_node) {
            // hide drag line
            drag_line
                .classed('hidden', true)
                .style('marker-end', '');
        }

        // because :active only works in WebKit?
        svg.classed('active', false);

        // clear mouse event vars
        resetMouseVars();
    }; // end mouseup()

    function spliceLinksForNode(node) {
        var toSplice = links.filter(function (l) {
            return (l.source === node || l.target === node);
        });
        toSplice.map(function (l) {
            links.splice(links.indexOf(l), 1);
        });
    }; // end spliceLinksForNode()

    // only respond once per keydown
    var lastKeyDown = -1;

    function keydown() {
        d3.event.preventDefault();

        if (lastKeyDown !== -1) return;
        lastKeyDown = d3.event.keyCode;

        // ctrl
        if (d3.event.keyCode === 17) {
//            circle.call(force.drag);
            renderedSVGElement.call(force.drag);
            svg.classed('ctrl', true);
        }

        if (!selected_node && !selected_link) return;
        switch (d3.event.keyCode) {
        case 8: // backspace
        case 46: // delete
            if (selected_node) {
                nodes.splice(nodes.indexOf(selected_node), 1);
                spliceLinksForNode(selected_node);
            } else if (selected_link) {
                links.splice(links.indexOf(selected_link), 1);
            }
            selected_link = null;
            selected_node = null;
            restart();
            break;
        case 66: // B
            if (selected_link) {
                // set link direction to both left and right
                selected_link.left = true;
                selected_link.right = true;
            }
            restart();
            break;
        case 76: // L
            if (selected_link) {
                // set link direction to left only
                selected_link.left = true;
                selected_link.right = false;
            }
            restart();
            break;
        case 82: // R
            if (selected_node) {
                // toggle node reflexivity
                selected_node.reflexive = !selected_node.reflexive;
            } else if (selected_link) {
                // set link direction to right only
                selected_link.left = false;
                selected_link.right = true;
            }
            restart();
            break;
        }
    }; // end keydown()

    function keyup() {
        lastKeyDown = -1;

        // ctrl
        if (d3.event.keyCode === 17) {
//            circle
            renderedSVGElement
                .on('mousedown.drag', null)
                .on('touchstart.drag', null);
            svg.classed('ctrl', false);
        }
    }; // end keyup()

    function calculateLinkDistance(thisPath) {
        // TODO: Some logic for differentiating nodes here:
        return height * 2;
    }; // end calculateLinkDistance(thisPath)

    // app starts here
    svg.on('mousedown', mousedown)
        //        .on('mousemove', mousemove)
        .on('mouseup', mouseup);
    d3.select(window)
        .on('keydown', keydown)
        .on('keyup', keyup);
    restart();

    window.btObject = btObject;
    window.links = links;
    window.linksMap = linksMap;
    window.nodes = nodes;

}; // end BehaviorTreeForce()

// "links":[{"source":6,"target":5,"value":6, "label":"publishedOn"}]
window.BehaviorTreeForceGraph = function (linksRoot, configObject) {
    window.timer = 0;
    window.chargeInputElement = document.querySelector('#charge-input');
    window.linkDistanceInputElement = document.querySelector('#link-distance-input');
    window.chargeValueDisplayElement = document.querySelector('#charge-value');
    window.linkDistanceValueDisplayElement = document.querySelector('#link-distance-value');
    window.linkDistanceValueDisplayElement.textContent = window.linkDistanceInputElement.value;
    window.chargeValueDisplayElement.textContent = window.chargeInputElement.value;
    window.graphRenderingContainer = document.querySelector('#graph-rendering-container');

    // Clear DOM in container
    while (window.graphRenderingContainer.childElementCount > 0) {
        if (!(window.graphRenderingContainer.childElementCount % 100)) {
            debugger;
        }
        window.graphRenderingContainer.childNodes[0].remove();
    }

    window.graph = new CreateLinksAndNodes(this.rootNodeName);

    window.BehaviorTreeForceGraph.configObject = configObject || {
        "margin": {
            top: -5,
            right: -5,
            bottom: -5,
            left: -5
        },
        "charge": parseInt(window.chargeInputElement.value),
        "linkDistance": parseInt(window.linkDistanceInputElement.value)
    };

    //    console.log(' window.BehaviorTreeForceGraph.configObject =',  window.BehaviorTreeForceGraph.configObject);

    var width = 500 - window.BehaviorTreeForceGraph.configObject.margin.left - window.BehaviorTreeForceGraph.configObject.margin.right,
        height = 400 - window.BehaviorTreeForceGraph.configObject.margin.top - window.BehaviorTreeForceGraph.configObject.margin.bottom;

    var color = d3.scale.category20();

    window.force = d3.layout.force()
        .charge(window.BehaviorTreeForceGraph.configObject.charge)
        .linkDistance(window.BehaviorTreeForceGraph.configObject.linkDistance)
        .size([width + window.BehaviorTreeForceGraph.configObject.margin.left + window.BehaviorTreeForceGraph.configObject.margin.right, height + window.BehaviorTreeForceGraph.configObject.margin.top + window.BehaviorTreeForceGraph.configObject.margin.bottom]);

    var zoom = d3.behavior.zoom()
        .scaleExtent([0.1, 10])
        .on("zoom", zoomed);

    var drag = d3.behavior.drag()
        .origin(function (d) {
            return d;
        })
        .on("dragstart", dragstarted)
        .on("drag", dragged)
        .on("dragend", dragended);


    var svg = d3.select("#graph-rendering-container").append("svg")
        .attr("width", width + window.BehaviorTreeForceGraph.configObject.margin.left + window.BehaviorTreeForceGraph.configObject.margin.right)
        .attr("height", height + window.BehaviorTreeForceGraph.configObject.margin.top + window.BehaviorTreeForceGraph.configObject.margin.bottom)
        .call(drag)
        .call(zoom);

    svg.append("g")
        .attr("transform", "translate(" + window.BehaviorTreeForceGraph.configObject.margin.left + "," + window.BehaviorTreeForceGraph.configObject.margin.right + ")")
        //        .call(zoom);

    var rect = svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "svg-rect")
        .style("fill", "none")
        .style("pointer-events", "all");

    var container = svg.append("g");

    //d3.json('http://blt909.free.fr/wd/map2.json', function(error, window.graph) {

    window.force
        .nodes(window.graph.nodes)
        .links(window.graph.links)
        .start();

    var link = container.append("g")
        .attr("class", "links")
        .selectAll(".link")
        .data(window.graph.links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", function (d) {
            return Math.sqrt(d.value);
        });

    var node = container.append("g")
        .attr("class", "nodes")
        .selectAll(".node")
        .data(window.graph.nodes)
        .enter().append("g")
        .attr("class", function (d) {
            return 'node ' + d.NodeType;
        })
        .attr("cx", function (d) {
            return d.x;
        })
        .attr("cy", function (d) {
            return d.y;
        })
        .call(drag);

    node.append("circle")
        .attr("r", function (d) {
            return d.weight * 2 + 12;
        })
        .style("fill", function (d) {
            return color(1 / (window.CreateLinksAndNodes.prototype.nodeTypeForceMap[d.NodeType]));
        });

    node.append("text")
        //        .attr('x', 0)
        //        .attr('y', 4)
        .attr("dx", 0)
        .attr("dy", ".35em")
        .attr('class', 'node-name')
        .text(function (d) {
            return d.nodeName
        });

    window.force.on("tick", function () {
        link.attr("x1", function (d) {
                return d.source.x;
            })
            .attr("y1", function (d) {
                return d.source.y;
            })
            .attr("x2", function (d) {
                return d.target.x;
            })
            .attr("y2", function (d) {
                return d.target.y;
            });

        node.attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

        if (force.linkDistance() !== parseInt(window.linkDistanceInputElement.value)) {
            window.linkDistanceInputElement.setAttribute('value', window.linkDistanceInputElement.value);
            window.linkDistanceValueDisplayElement.textContent = window.linkDistanceInputElement.value;
            force.linkDistance(parseInt(window.linkDistanceInputElement.value));
            force.start();
        }
        if (force.charge() !== parseInt(window.chargeInputElement.value)) {
            window.chargeInputElement.setAttribute('value', window.chargeInputElement.value);
            window.chargeValueDisplayElement.textContent = window.chargeInputElement.value;
            force.charge(parseInt(window.chargeInputElement.value));
            force.start();
        }

        //        window.timer++;
        //        if (window.timer % 100 === 0) {
        //            console.log('in tick timer');
        //        }
    });



    // Update forces after moving sliders
    function updateForce(d) {
        d3.select(this).classed
    }





    var linkedByIndex = {};
    window.graph.links.forEach(function (d) {
        linkedByIndex[d.source.index + "," + d.target.index] = 1;
    });

    function isConnected(a, b) {
        return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index];
    }

    node.on("mouseover", function (d) {

        node.classed("node-active", function (o) {
            thisOpacity = isConnected(d, o) ? true : false;
            this.setAttribute('fill-opacity', thisOpacity);
            return thisOpacity;
        });

        link.classed("link-active", function (o) {
            return o.source === d || o.target === d ? true : false;
        });

        d3.select(this).classed("node-active", true);
        d3.select(this).select("circle").transition()
            .duration(500)
            .attr("r", (d.weight * 2 + 12) * 1.33);
    })

    .on("mouseout", function (d) {
            node.classed("node-active", false);
            link.classed("link-active", false);

            d3.select(this).select("circle").transition()
                .duration(500)
                .attr("r", d.weight * 2 + 12);
        })
        .on("click", function (d) {
                var nodeIsSelected = d3.select(this).classed("node-selected");
                var linkIsSelected = d3.select(this).classed("link-selected");

                console.log(d, nodeIsSelected, linkIsSelected);

                d3.select(this).classed("node-selected", (!nodeIsSelected));
                d3.select(this).classed("link-selected", (!linkIsSelected));

                link.classed("link-selected", function (o) {
                    return o.source === d || o.target === d ? true : false;
                });

                node.classed("node-selected", function (o) {
                    console.log(o);
                    thisOpacity = isConnected(d, o) ? true : false;
                    this.setAttribute('fill-opacity', thisOpacity);
                    return thisOpacity;
                });
        });




    function click(d) {
        if (!d3.event.defaultPrevented) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            } else {
                d.children = d._children;
                d._children = null;
            }
            update();
        }
    }







    function dottype(d) {
        d.x = +d.x;
        d.y = +d.y;
        return d;
    }

    function zoomed() {
        container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    function dragstarted(d) {
        d3.event.sourceEvent.stopPropagation();
        d3.select(this).classed("dragging", true);
        window.force.start();
    }

    function dragged(d) {
        // console.log('d.x =', d.x, ', d.y =', d.y);
        d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
    }

    function dragended(d) {
        d3.select(this).classed("dragging", false);
    }
}; // end BehaviorTreeForceGraph
# xcom2ai
Visualization of XCOM 2 Behavior AI .ini file

View the live app at http://sterlingvix.github.io/xcom2ai

You can apply a (case-insensitive) filter to the list to find specific keyaords. For instance: enter "panic".

# Install Instructions:
Currently none. Pull the repo and you're good to go.

# Contributing
I'd be much obliged!

Please work on a separate branch (NOT on `master` or `gh-pages`) or fork and work on your local repo. Feel free to cut new branches. Make a pull request back into `master` and `gh-pages`.

Here's my immediate to-do list:

* Refactor code layout to separate CSS, HTML, and JS (one JS for logic, one JS/JSON for the .ini data).
* Replace .ini JSON with regex logic parsing so users won't have to manually convert the .ini to JSON if the .ini file contents change.
* Add NPM.
* Add D3.
* Create linkages (unsure of implementation) between identical node types.
* Better visualizations: 1) show heirarchy in a tree; 2) create force-graph or map showing linkages.


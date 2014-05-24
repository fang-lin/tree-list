/**
 * Created by Justin on 14-5-25.
 */


function treeToList(tree) {
    var list = [];
    // define && call the traversal
    (function traversal(tree, pid) {
        // push subtree root node to list
        list.push({
            id: tree.id,
            pid: pid,
            data: tree.data
        });
        // traverse each child
        if (tree.children && tree.children.length) {
            tree.children.forEach(function (subtree) {
                traversal(subtree, tree.id);
            });
        }
    })(tree, 0);
    return list;
}

function listToTree(list) {
    var tree = {};
    // find root node first
    for (var i = 0, len = list.length; i < len; ++i) {
        var node = list[i];
        if (node.pid === 0) {
            tree.id = node.id;
            tree.data = node.data;
            break;
        }
    }
    // define && call the traversal
    (function traversal(tree) {
        list.forEach(function (node) {
            if (node.pid === tree.id) {
                // add children field first
                if (!tree.children) {
                    tree.children = [];
                }
                // fit new child node
                var _node_ = {
                    id: node.id,
                    data: node.data
                };
                tree.children.push(_node_);
                // traverse this node
                traversal(_node_);
            }
        });
    })(tree);
    return tree;
}
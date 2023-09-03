function dropCap(n) {
    return n.replace(/\b\w{3,}\b/g, function (match) {
        return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
    });
}
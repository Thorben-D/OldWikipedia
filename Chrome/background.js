let loc = window.location.href
if (loc.match(".*\.wikipedia\.org\/wiki\/.*")) {
    console.log("match1")
    if (!loc.match(".*?useskin=vector$")) {
        window.location.href = loc + "?useskin=vector"
    }
}

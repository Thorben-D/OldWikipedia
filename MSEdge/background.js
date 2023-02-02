let loc = window.location.href
if (loc.match(".*\.wikipedia\.org\/wiki\/.*")) {
    if (!loc.match(".*?useskin=vector$")) {
        window.location.href = loc + "?useskin=vector"
    }
}

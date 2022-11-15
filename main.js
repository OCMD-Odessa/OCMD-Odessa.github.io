function closeTransition() {
    document.getElementById("transition_block").style.width = "100%";
}
function openTransition() {
    document.getElementById("transition_block").style.width = "0%";
}

function openPage(next_page) {
    closeTransition()
    setTimeout(function() {location.href = next_page;}, 1000)
}

function main() {
    openTransition();
}
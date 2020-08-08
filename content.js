var BUTTON_CONTAINER = `
<div style="display: flex; flex: 1; justify-content: flex-end;">
    <button id="btnStreamTheatre" style="margin-right: 10px; width: 3rem; height: 3rem;" class="vjs-live-display" aria-live="off">
        <svg style="fill: white;" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" ><g><path fill-rule="evenodd" d="M2 15V5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2zm2 0V5h7v10H4zm9 0h3V5h-3v10z" clip-rule="evenodd"></path></g></svg>    
    </button>
    <button id="btnStreamFullscreen" style="margin-right: 10px; width: 3rem; height: 3rem;" class="vjs-live-display" aria-live="off">
        <svg style="fill: white;" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" ><g><path d="M7 3H2v5h2V5h3V3zM18 8V3h-5v2h3v3h2zM13 17v-2h3v-3h2v5h-5zM4 12H2v5h5v-2H4v-3z"></path></g></svg>
    </button>
</div>
`
$(document.body).ready(function () {
    $("#btnStream").click(() => {
        setTimeout(inject, 1000);
    })
});

var inTheatre = false;

function inject() {
    $(".vjs-live-control").append(BUTTON_CONTAINER);
    $("#btnStreamTheatre").click(() => {
        if (inTheatre)
            $("#liveVideo").prependTo($("#streamTab"));
        else
            $("#liveVideo").prependTo($("#content"));
        inTheatre = !inTheatre;
    })
    $("#btnStreamFullscreen").click(() => {
        var elem = document.getElementById("liveVideo_html5_api")
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    })
};

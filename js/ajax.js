function Get(urls, abbContent){
    $.ajax({
        type: "GET",
        url: httpBaseUrl + urls,
        success: function (response) {
            console.log('Submission was successful.');
            response.forEach(element => {
                abbContent.innerHTML += "<tr><td>kfgjhfu</td></tr>";
                });
        },
    });
}
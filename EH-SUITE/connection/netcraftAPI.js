const HTTP =  new XMLHttpRequest();
HTTP.open('GET', "https://report.netcraft.com/api/v2/report/urls");
HTTP.send();
HTTP.onreadystatechange = function(e) {
    if(this.readyState == 4 && this.status == 404) {
        console.log(this.responseText);
    }
};
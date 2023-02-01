document.getElementById("copy-button").addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {selector: "div[data-a-target='user-card-modal'] a"}, function(following) {
        if (following) {
          //alert(following);
          navigator.clipboard.writeText(following).then(function() {
            document.querySelector(".success-text").style.display = "block";
          });
        }
      });
    });
  });
  
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.selector) {
      var following = document.querySelectorAll(request.selector);
      var followingList = Array.from(following).map(user => user.textContent + ", " + user.href);
      sendResponse(followingList.join("\n"));
    }
  });
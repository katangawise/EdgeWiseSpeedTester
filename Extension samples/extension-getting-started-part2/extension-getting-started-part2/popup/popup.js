// const sendMessageId = document.getElementById("sendmessageid");
// if (sendMessageId) {
//     sendMessageId.onclick = function() {
//         chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//             chrome.tabs.sendMessage(
//                 tabs[0].id,
//                 {   
//                     url: chrome.runtime.getURL("https://www.advancedsciencenews.com/wp-content/uploads/2022/08/Carina_Webb.jpg"),
//                     imageDivId: `${guidGenerator()}`,
//                     tabId: tabs[0].id
//                 },
//                 function(response) {
//                     window.close();
//                 }
//             );
//             function guidGenerator() {
//                 const S4 = function () {
//                     return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
//                 };
//                 return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
//             }
//         });
//     };
// }

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    console.log("-------");
    var activeTab = tabs[0];
    var activeTabId = activeTab.id; // or do whatever you need
    alert("The url is: " + activeTab.url);
  });

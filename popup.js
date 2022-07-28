// Copyright 2022 Google LLC
//
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file or at
// https://developers.google.com/open-source/licenses/bsd
$('#debugAction').click(function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let newUrl = new URL(tabs[0].url);
    newUrl.searchParams.append('debugManifestsFile', 'https://localhost:4321/temp/manifests.js');
    newUrl.searchParams.append('loadSPFX', 'true');
    chrome.tabs.update(tabs[0].id, { url: newUrl.href });
  });
});

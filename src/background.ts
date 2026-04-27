function removeForceDownload(
	requestDetails: browser.webRequest._OnBeforeRequestDetails
): browser.webRequest.BlockingResponse {
	const url = new URL(requestDetails.url);
	if (url.searchParams.has("forcedownload")) {
		url.searchParams.delete("forcedownload");
		return { redirectUrl: url.toString() };
	}
	return {};
}

browser.webRequest.onBeforeRequest.addListener(
	removeForceDownload,
	{ urls: ["<all_urls>"] },
	["blocking"]
);

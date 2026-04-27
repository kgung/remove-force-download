function cleanLinks() {
	document.querySelectorAll<HTMLAnchorElement>('a[href*="forcedownload"]').forEach(link => {
		const url = new URL(link.href);
		if (url.searchParams.has("forcedownload")) {
			url.searchParams.delete("forcedownload");
			link.href = url.toString();
		}
	});
}

cleanLinks();

const observer = new MutationObserver(cleanLinks);
observer.observe(document.body, { childList: true, subtree: true });

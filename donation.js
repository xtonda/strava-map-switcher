/*
 * Map switcher for Strava website.
 *
 * Copyright © 2016 Tomáš Janoušek.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var MapSwitcherDonation = null;

{
	const lastDonationClick = localStorage.stravaMapSwitcherLastDonationClick;
	const clickedRecently = lastDonationClick && (Date.now() - lastDonationClick) < 1000 * 86400 * 180;

	const lastDonationVersion = localStorage.stravaMapSwitcherLastDonationVersion;
	const thisVersion = localStorage.stravaMapSwitcherVersion;
	const clickedThisVersion = !thisVersion || (lastDonationVersion && thisVersion == lastDonationVersion);

	if (!clickedRecently || !clickedThisVersion) {
		MapSwitcherDonation =
			jQuery('<a href="https://www.paypal.me/lisknisi/10EUR" target="_blank">')
			.text('♥=€ strava-map-switcher')
			.css({'font-weight': 'bold'})
			.click(function () {
				localStorage.stravaMapSwitcherLastDonationClick = Date.now();
				localStorage.stravaMapSwitcherLastDonationVersion = thisVersion;
			});
	} else {
		MapSwitcherDonation =
			jQuery('<a href="https://github.com/xtonda/strava-map-switcher#readme" target="_blank">')
			.text('strava-map-switcher')
			.css({'font-weight': 'bold'});
	}
}

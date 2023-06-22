import { p as promiseResolve, b as bootstrapLazy } from './index-3675b4ba.js';
import './global-39485c4f.js';
var patchBrowser = function () {
	var o = import.meta.url;
	var t = {};
	if (o !== '') {
		t.resourcesUrl = new URL('.', o).href;
	}
	return promiseResolve(t);
};
patchBrowser().then(function (o) {
	return bootstrapLazy(
		JSON.parse(
			'[["ontario-icon-account",[[1,"ontario-icon-account",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-add",[[1,"ontario-icon-add",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-add-alt",[[1,"ontario-icon-add-alt",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-arrow-up",[[1,"ontario-icon-arrow-up",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-attach",[[1,"ontario-icon-attach",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-bookmark-off",[[1,"ontario-icon-bookmark-off",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-bookmark-on",[[1,"ontario-icon-bookmark-on",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-calendar",[[1,"ontario-icon-calendar",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-chevron-right",[[1,"ontario-icon-chevron-right",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-clock",[[1,"ontario-icon-clock",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-close",[[1,"ontario-icon-close",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-close-header",[[1,"ontario-icon-close-header",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-cloud",[[1,"ontario-icon-cloud",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-collapse",[[1,"ontario-icon-collapse",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-credit-card",[[1,"ontario-icon-credit-card",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-critical-alert-warning",[[1,"ontario-icon-critical-alert-warning",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-delete",[[1,"ontario-icon-delete",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-document",[[1,"ontario-icon-document",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-download",[[1,"ontario-icon-download",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-dropdown-arrow",[[1,"ontario-icon-dropdown-arrow",{"iconWidth":[2,"icon-width"],"iconWidthState":[32]}]]],["ontario-icon-edit",[[1,"ontario-icon-edit",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-expand",[[1,"ontario-icon-expand",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-export",[[1,"ontario-icon-export",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-facebook",[[1,"ontario-icon-facebook",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-facebook-alt",[[1,"ontario-icon-facebook-alt",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-favourite-off",[[1,"ontario-icon-favourite-off",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-favourite-on",[[1,"ontario-icon-favourite-on",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-filter",[[1,"ontario-icon-filter",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-flickr",[[1,"ontario-icon-flickr",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-grid",[[1,"ontario-icon-grid",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-instagram",[[1,"ontario-icon-instagram",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-interac-en",[[1,"ontario-icon-interac-en",{"iconWidth":[2,"icon-width"],"iconWidthState":[32]}]]],["ontario-icon-interac-en-alt",[[1,"ontario-icon-interac-en-alt",{"iconWidth":[2,"icon-width"],"iconWidthState":[32]}]]],["ontario-icon-interac-fr",[[1,"ontario-icon-interac-fr",{"iconWidth":[2,"icon-width"],"iconWidthState":[32]}]]],["ontario-icon-interac-fr-alt",[[1,"ontario-icon-interac-fr-alt",{"iconWidth":[2,"icon-width"],"iconWidthState":[32]}]]],["ontario-icon-linkedin",[[1,"ontario-icon-linkedin",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-linkedin-alt",[[1,"ontario-icon-linkedin-alt",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-list",[[1,"ontario-icon-list",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-live-chat",[[1,"ontario-icon-live-chat",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-location-off",[[1,"ontario-icon-location-off",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-location-on",[[1,"ontario-icon-location-on",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-lock-off",[[1,"ontario-icon-lock-off",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-lock-on",[[1,"ontario-icon-lock-on",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-map",[[1,"ontario-icon-map",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-mastercard-alt",[[1,"ontario-icon-mastercard-alt",{"iconWidth":[2,"icon-width"],"iconWidthState":[32]}]]],["ontario-icon-media-fast-forward",[[1,"ontario-icon-media-fast-forward",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-media-fast-rewind",[[1,"ontario-icon-media-fast-rewind",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-media-pause",[[1,"ontario-icon-media-pause",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-media-play",[[1,"ontario-icon-media-play",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-media-stop",[[1,"ontario-icon-media-stop",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-menu",[[1,"ontario-icon-menu",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-menu-header",[[1,"ontario-icon-menu-header",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-microphone-off",[[1,"ontario-icon-microphone-off",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-microphone-on",[[1,"ontario-icon-microphone-on",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-more-vertical",[[1,"ontario-icon-more-vertical",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-new-window",[[1,"ontario-icon-new-window",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-next",[[1,"ontario-icon-next",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-password-hide",[[1,"ontario-icon-password-hide",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-password-show",[[1,"ontario-icon-password-show",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-phone",[[1,"ontario-icon-phone",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-photo",[[1,"ontario-icon-photo",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-pin-location-off",[[1,"ontario-icon-pin-location-off",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-pin-location-on",[[1,"ontario-icon-pin-location-on",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-previous",[[1,"ontario-icon-previous",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-remove",[[1,"ontario-icon-remove",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-remove-alt",[[1,"ontario-icon-remove-alt",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-replay",[[1,"ontario-icon-replay",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-rss-feed",[[1,"ontario-icon-rss-feed",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-save",[[1,"ontario-icon-save",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-search",[[1,"ontario-icon-search",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-search-white",[[1,"ontario-icon-search-white",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-sentiment-1",[[1,"ontario-icon-sentiment-1",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-sentiment-2",[[1,"ontario-icon-sentiment-2",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-sentiment-3",[[1,"ontario-icon-sentiment-3",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-sentiment-4",[[1,"ontario-icon-sentiment-4",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-settings",[[1,"ontario-icon-settings",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-share",[[1,"ontario-icon-share",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-sort",[[1,"ontario-icon-sort",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-tag",[[1,"ontario-icon-tag",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-timer",[[1,"ontario-icon-timer",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-transport-bicycle",[[1,"ontario-icon-transport-bicycle",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-transport-car",[[1,"ontario-icon-transport-car",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-transport-walk",[[1,"ontario-icon-transport-walk",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-tty",[[1,"ontario-icon-tty",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-twitter",[[1,"ontario-icon-twitter",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-twitter-alt",[[1,"ontario-icon-twitter-alt",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-upload",[[1,"ontario-icon-upload",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-video",[[1,"ontario-icon-video",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-visa",[[1,"ontario-icon-visa",{"iconWidth":[2,"icon-width"],"iconWidthState":[32]}]]],["ontario-icon-vote-dislike",[[1,"ontario-icon-vote-dislike",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-vote-like",[[1,"ontario-icon-vote-like",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-vpn-key",[[1,"ontario-icon-vpn-key",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-wheelchair",[[1,"ontario-icon-wheelchair",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-wifi",[[1,"ontario-icon-wifi",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-icon-youtube",[[1,"ontario-icon-youtube",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]],["ontario-aside_37",[[1,"ontario-checkboxes",{"caption":[1],"language":[1025],"name":[1],"hintText":[1025,"hint-text"],"hintExpander":[1,"hint-expander"],"options":[1],"required":[4],"customOnChange":[16],"customOnBlur":[16],"customOnFocus":[16],"hintTextId":[32],"captionState":[32],"internalHintText":[32],"internalHintExpander":[32],"internalOptions":[32]},[[8,"setAppLanguage","handleSetAppLanguage"],[8,"headerLanguageToggled","handleHeaderLanguageToggled"]]],[1,"ontario-dropdown-list",{"caption":[1],"language":[1025],"name":[1],"elementId":[1025,"element-id"],"options":[1],"required":[4],"isEmptyStartOption":[8,"is-empty-start-option"],"hintText":[1,"hint-text"],"hintExpander":[1,"hint-expander"],"customOnChange":[16],"customOnBlur":[16],"customOnFocus":[16],"hintTextId":[32],"captionState":[32],"internalOptions":[32],"internalHintText":[32],"internalHintExpander":[32],"translations":[32]},[[8,"setAppLanguage","handleSetAppLanguage"],[8,"headerLanguageToggled","handleHeaderLanguageToggled"]]],[1,"ontario-input",{"caption":[1],"elementId":[1025,"element-id"],"inputWidth":[1025,"input-width"],"name":[1],"hintText":[1,"hint-text"],"required":[4],"type":[1025],"value":[1025],"language":[1025],"hintExpander":[1,"hint-expander"],"customOnChange":[16],"customOnBlur":[16],"customOnFocus":[16],"hintTextId":[32],"internalHintText":[32],"internalHintExpander":[32],"captionState":[32]},[[8,"setAppLanguage","handleSetAppLanguage"],[8,"headerLanguageToggled","handleHeaderLanguageToggled"]]],[1,"ontario-page-alert",{"type":[1],"heading":[1],"content":[1]}],[1,"ontario-radio-buttons",{"caption":[1],"language":[1025],"name":[1],"hintText":[1,"hint-text"],"hintExpander":[1,"hint-expander"],"required":[4],"options":[1],"customOnChange":[16],"customOnBlur":[16],"customOnFocus":[16],"hintTextId":[32],"internalHintText":[32],"internalHintExpander":[32],"internalOptions":[32],"captionState":[32]},[[8,"setAppLanguage","handleSetAppLanguage"],[8,"headerLanguageToggled","handleHeaderLanguageToggled"]]],[1,"ontario-textarea",{"caption":[1],"name":[1],"elementId":[1025,"element-id"],"required":[4],"value":[1025],"hintText":[1,"hint-text"],"hintExpander":[1,"hint-expander"],"language":[1025],"customOnChange":[16],"customOnBlur":[16],"customOnFocus":[16],"hintTextId":[32],"internalHintText":[32],"internalHintExpander":[32],"captionState":[32]},[[8,"setAppLanguage","handleSetAppLanguage"],[8,"headerLanguageToggled","handleHeaderLanguageToggled"]]],[33,"ontario-header",{"type":[1],"applicationHeaderInfo":[1,"application-header-info"],"menuItems":[1,"menu-items"],"disableDynamicMenu":[4,"disable-dynamic-menu"],"languageToggleOptions":[1,"language-toggle-options"],"customLanguageToggle":[16],"language":[1025],"applicationHeaderInfoState":[32],"menuItemState":[32],"isDynamicMenu":[32],"languageState":[32],"menuToggle":[32],"searchToggle":[32]},[[10,"click","handleClick"],[8,"setAppLanguage","handleSetAppLanguage"]]],[1,"ontario-step-indicator",{"showBackButton":[4,"show-back-button"],"backButtonUrl":[1,"back-button-url"],"currentStep":[2,"current-step"],"numberOfSteps":[2,"number-of-steps"],"percentageComplete":[2,"percentage-complete"],"customOnClick":[16],"language":[1025],"translations":[32]},[[8,"setAppLanguage","handleSetAppLanguage"],[8,"headerLanguageToggled","handleHeaderLanguageToggled"]]],[1,"ontario-aside",{"headingType":[1025,"heading-type"],"headingContentType":[1025,"heading-content-type"],"headingContent":[1,"heading-content"],"content":[1],"highlightColour":[1025,"highlight-colour"]}],[1,"ontario-back-to-top",{"language":[1025],"translations":[32],"displayBackToTop":[32],"scrollYValue":[32]},[[9,"scroll","showBackToTopButton"],[8,"setAppLanguage","handleSetAppLanguage"],[8,"headerLanguageToggled","handleHeaderLanguageToggled"]]],[1,"ontario-blockquote",{"quote":[1025],"attribution":[1],"byline":[1],"shortQuoteLength":[32],"shortQuote":[32],"quoteState":[32]}],[1,"ontario-button",{"type":[1],"htmlType":[1,"html-type"],"label":[1],"ariaLabelText":[1025,"aria-label-text"],"elementId":[1025,"element-id"],"typeState":[32],"htmlTypeState":[32],"labelState":[32]}],[1,"ontario-callout",{"headingType":[1025,"heading-type"],"headingContentType":[1025,"heading-content-type"],"headingContent":[1,"heading-content"],"content":[1],"highlightColour":[1025,"highlight-colour"]}],[1,"ontario-critical-alert",{"content":[1]}],[1,"ontario-fieldset",{"legend":[1025],"legendSize":[1025,"legend-size"]}],[1,"ontario-footer",{"language":[1025],"type":[1],"footerLinks":[1,"footer-links"],"socialLinks":[1,"social-links"],"twoColumnOptions":[1,"two-column-options"],"threeColumnOptions":[1,"three-column-options"],"topMargin":[4,"top-margin"],"translations":[32],"footerLinksState":[32],"socialLinksState":[32],"twoColumnState":[32],"threeColumnState":[32]},[[8,"setAppLanguage","handleSetAppLanguage"],[8,"headerLanguageToggled","handleHeaderLanguageToggled"]]],[1,"ontario-icon-accessibility",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}],[1,"ontario-icon-camera",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}],[1,"ontario-icon-email",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}],[1,"ontario-icon-help",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}],[1,"ontario-icon-mastercard",{"iconWidth":[2,"icon-width"],"iconWidthState":[32]}],[1,"ontario-icon-notification",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}],[1,"ontario-icon-print",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}],[1,"ontario-icon-sentiment-5",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}],[1,"ontario-icon-text-message",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}],[1,"ontario-icon-transport-bus",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}],[1,"ontario-loading-indicator",{"type":[1],"isLoading":[4,"is-loading"],"message":[1],"fullScreenOverlay":[4,"full-screen-overlay"],"language":[1025],"translations":[32],"isLoadingState":[32],"typeState":[32]},[[8,"setAppLanguage","handleSetAppLanguage"],[8,"headerLanguageToggled","handleHeaderLanguageToggled"]]],[1,"ontario-icon-alert-error",{"iconWidth":[2,"icon-width"],"iconWidthState":[32]}],[1,"ontario-icon-alert-information",{"iconWidth":[2,"icon-width"],"iconWidthState":[32]}],[1,"ontario-icon-alert-success",{"iconWidth":[2,"icon-width"],"iconWidthState":[32]}],[1,"ontario-icon-alert-warning",{"iconWidth":[2,"icon-width"],"iconWidthState":[32]}],[1,"ontario-icon-chevron-left",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}],[1,"ontario-language-toggle",{"language":[1025],"size":[1],"url":[1025],"customLanguageToggle":[16],"translations":[32]}],[1,"ontario-hint-expander",{"hintContentType":[1025,"hint-content-type"],"hint":[1],"content":[1025],"elementId":[1025,"element-id"],"hintState":[32]}],[1,"ontario-hint-text",{"hintContentType":[1025,"hint-content-type"],"hint":[1],"elementId":[1025,"element-id"],"hintState":[32],"getHintTextId":[64]}],[1,"ontario-icon-chevron-down",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}],[1,"ontario-icon-chevron-up",{"iconWidth":[2,"icon-width"],"colour":[1],"iconWidthState":[32],"iconColourState":[32],"iconCustomColourState":[32]}]]]]',
		),
		o,
	);
});

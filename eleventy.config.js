import { DateTime } from "luxon";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addFilter("date", (dateObj, format) => {
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
	});

	eleventyConfig.addPassthroughCopy("_assets");

	eleventyConfig.addCollection("blog", function (collectionApi) {
		return collectionApi.getFilteredByGlob("blog/**/*.md");
	});

	eleventyConfig.addCollection("docs", function (collectionApi) {
		return collectionApi.getFilteredByGlob("docs/**/*.md");
	});
};
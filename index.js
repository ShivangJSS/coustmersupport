import axios from "axios";
import * as cheerio from "cheerio";


async function scrapeWebpage(url = "") {
    const { data } = await axios.get(url);   // ✅ fixed
    const $ = cheerio.load(data);

    const pageHead = $("head").html();
    const pageBody = $("body").html();

    console.log("Page Head:", pageHead);
    console.log("Page Body:", pageBody);
}

scrapeWebpage("https://piyushgarg.dev"); // ✅ fixed

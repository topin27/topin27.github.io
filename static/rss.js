let feedsList = document.getElementsByClassName("feeds");
for (let i = 0; i < feedsList.length; i++) {
    let feedId = `#${feedsList[i].id}`;
    let feedUrl = feedsList[i].dataset.url;
    jQuery(function ($) {
        $(feedId).rss(feedUrl, {
            limit: 10,
            ssl: true,
            dateFormat: "MM-DD-YYYY",
            entryTemplate: '<li>{date} <a href="{url}">{title}</a>'
        });
    });
}

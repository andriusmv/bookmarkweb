document.addEventListener("DOMContentLoaded", function () {
  fetch("bookmarks.json")
    .then((response) => response.json())
    .then((data) => {
      data.bookmarks.sort((a, b) => a.name.localeCompare(b.name));
      console.log(data);
      const bookmarksContainer = document.getElementById("bookmarks-container");
      data.bookmarks.forEach((bookmark) => {
        const bookmarkDiv = document.createElement("div");
        bookmarkDiv.classList.add("block");
        bookmarkDiv.innerHTML = `<h3>${bookmark.name}</h3><a href="${bookmark.url}">${bookmark.url}</a>`;
        bookmarksContainer.appendChild(bookmarkDiv);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});

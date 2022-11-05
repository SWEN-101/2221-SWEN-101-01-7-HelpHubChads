const fetchHeader = async () => {
    try {
      const res = await fetch("/assets/header/header.html");
      const template = await res.text();
      const header = new DOMParser()
        .parseFromString(template, "text/html")
        .querySelector("div.header");

      document.body.prepend(header);
    } catch (err) {
      console.log(err);
    }
  };

window.onload = () => {  fetchHeader();}

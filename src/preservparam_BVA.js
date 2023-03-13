window.addEventListener("DOMContentLoaded", function () {
  (function () {
    console.log("scriptstarted");
    const allowedHostnames = process.env.ALLOWED_HOSTNAMES_BIOVANCIA.split(",");
    if (allowedHostnames.includes(window.location.hostname)) {
      const urlParams = new URLSearchParams(window.location.search);

      // Récupérer le formulaire de recherche par sa classe
      const searchForm = document.querySelector(".elementor-search-form");

      // Ajouter un écouteur d'événement sur la soumission du formulaire
      searchForm.addEventListener("submit", function (event) {
        // Empêcher le formulaire de se soumettre normalement
        event.preventDefault();

        // Mettre à jour la valeur du paramètre "s" avec la valeur saisie dans le formulaire de recherche

        urlParams.set(
          "s",
          searchForm.querySelector('input[type="search"]').value
        );

        // Construire la nouvelle URL avec les paramètres mis à jour
        const newUrl = new URL(window.location.href);
        newUrl.search = urlParams.toString();

        // Rediriger vers la nouvelle URL
        window.location.href = newUrl;
      });

      urlParams.delete("s");

      const elementA = document.querySelectorAll("a");
      const allowedLinks = process.env.ALLOWED_LINKS_BIOVANCIA.split(",");
      // Filtrage des éléments dont l'attribut href contient les domaines recherchés
      const filteredElementA = Array.from(elementA).filter((link) => {
        const href = link.getAttribute("href");
        return (
          href &&
          allowedLinks.some((allowedLink) => href.startsWith(allowedLink))
        );
      });

      // for each filteredLinks check urlParams pour les mettre dans linkParams
      filteredElementA.forEach((ele) => {
        const url = new URL(ele.href); // Crée un nouvel objet URL
        urlParams.forEach((value, key) => {
          url.searchParams.set(key, value); // Met à jour les paramètres de l'objet URL avec ceux de urlParams
        });
        console.log(ele); //console de chaque href <a>

        if (
          urlParams.has("lpid") &&
          urlParams.has("cpid") &&
          urlParams.get("la") === "SPP" &&
          url.origin == "https://vl.linkinfosante.com"
        ) {
          url.pathname = "/click";
        }
        ele.href = url.href; // Met à jour la valeur de l'attribut href de l'élément a avec la nouvelle valeur de l'objet URL
      });

      //var scriptExecuted
      var scriptExecuted = true;
      // Ajouter la variable au dataLayer
      dataLayer.push({
        scriptExecuted: scriptExecuted,
      });
      console.log("scriptloaded");
    }
  })();
});

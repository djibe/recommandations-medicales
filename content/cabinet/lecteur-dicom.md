+++
title = "Lecteur d'images médicales DICOM"
titleSeo = "Lecteur d'images médicales DICOM"
description = "Ouvrir et lire des imageries médicales au format DICOM (Digital imaging and communications in medicine): radiographies, scanner ... (lecteur DICOM, DICOM viewer)"
longHtml = true
noSearchContent = true
auteurs = ["Jean-Baptiste FRON"]
date = "2025-08-24T19:04:00+02:00"
publishdate = "2025-08-24"
lastmod = "2025-08-24"
annees = "2025"
sources = ["Github"]
tags = []
image = true
imageSrc = "par Freepik"
+++

La visualisation d'imageries médicales (radiographies, scanner ...) au format DICOM peut s'avérer nécessaire au cabinet lors d'une consultation.  
Ce lecteur DICOM préserve la confidentialité des informations en utilisant exclusivement le navigateur.
{.lead .mb-5}

<script type="importmap">
  {
    "imports": {
      "dwv": "https://cdn.jsdelivr.net/npm/dwv@0.35.1/dist/dwv.min.js",
      "konva": "https://cdn.jsdelivr.net/npm/konva@9.3/konva.min.js",
      "jszip": "https://cdn.jsdelivr.net/npm/jszip@3.10/dist/jszip.min.js",
      "magic-wand-tool": "https://cdn.jsdelivr.net/npm/magic-wand-tool@1.1.7/dist/magic-wand.min.js"
    }
  }
</script>
<script type="module" src="https://cdn.jsdelivr.net/npm/dwv-simplistic@0.10.0/dist/dwvsimplistic.min.js"></script>

<dwv-simple showlegend loadfromwindowlocation class="d-block w-100" style="height: 512px; width: 512px;"></dwv-simple>

{{< card-link-external title="DWV-Simplistic" url="https://github.com/ivmartel/dwv-simplistic" subtitle="DICOM Web Viewer - Simplistic" >}}

Autres lecteurs DICOM en ligne: [DICOM Library](https://www.dicomlibrary.com)

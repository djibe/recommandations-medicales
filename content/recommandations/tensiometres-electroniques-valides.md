+++
id = "0190e8d6-0666-7658-adef-e24f63535ef0"
title = "Tensiomètres électroniques validés pour le cabinet"
titleSeo = "Tensiomètres validés"
prefix = ""
longHtml = true
description = "Tensiomètres électroniques validés pour la mesure de la pression artérielle fiable au cabinet par le médecin. Brassards pour enfants, grossesse, adulte et obèse"
synonyms = ["Sphygmomanomètre électronique oscillométrique"]
auteurs = ["Jean-Baptiste FRON"]
date = "2023-10-19T15:20:19+02:00"
publishdate = "2023-10-20"
lastmod = "2024-06-28"
specialites = ["cardiologie"]
annees = "2024"
sources = ["ESH", "BIH"]
tags = ["depistage", "HTA"]
english = ["Blood pressure monitors"]
sctid = "135840009"
icd10 = []
image = true
imageSrc = "Tensiomètre électronique. Freepik"
datatable = true
+++

{{%article-summary%}}

- Les recommandations internationales et européennes préconisent l'utilisation d'un tensiomètre électronique validé pour la mesure de la pression artérielle au cabinet
- Peu de modèles de brassards électroniques ont été validés, la certification *CE* n'étant nullement garante des mesures
- Les modèles de tensiomètres électroniques ci-dessous ont été validés pour certaines situations (adulte, grossesse, enfant) par les sociétés savantes de référence pour la prise en charge de la pression artérielle
- En plus d'un brassard électronique validé, la mesure de la pression artérielle nécessite des conditions strictes de mesure (brassard, assis depuis 5 minutes, adossé, sans parler ... voir [Hypertension artérielle]({{< relref "hypertension-arterielle.md" >}}))

{{%/article-summary%}}

## Tableau des tensiomètres électroniques validés {.mt-5}

Les brassards électroniques **validés par les sociétés savantes d'hypertension artérielle** pour la mesure de la pression artérielle au cabinet du médecin. Le modèle doit être **adapté au patient** (adulte, grossesse, enfant) et à sa corpulence.

La gamme de prix est très variable (de 33 à 650 €) et parmi les tensiomètres (ou sphygmomanomètres) validés les moins chers disponibles en France on peut citer les marques: Andon (iHealth Track KN-550BT ou BP3L 40€, KD-5920 60€, KD-5923 33€), Fitage, Omron (M7 80€).
{.alert .alert-info}

<script type="application/ld+json">{"@context": "https://schema.org","@type": "Table","about": "Tensiomètres électroniques validés pour la mesure de la pression artérielle en consultation. Dr JB Fron d'après Sociétés savantes citées."}</script>
<table id="bp-monitors" class="table">
<caption><span class="font-weight-bold">Tableau.</span> Tensiomètres électroniques validés pour la mesure de la pression artérielle en consultation. Dr JB Fron d'après Sociétés savantes citées.</caption>
<thead>
  <tr>
    <th scope="col">Fabricant</th>
    <th scope="col">Modèle</th>
    <th scope="col">Population</th>
    <th scope="col">Lieu</th>
    <th scope="col">Évaluateur</th>
  </tr>
</thead>
</table>

> **AMT =** automesure tensionnelle ; **BIH =** British and Irish Hypertension Society ; **ESH =** European Society of Hypertension (StrideBP)

Le tensiomètre électronique n'a pas besoin de recalibration mais le contrôle des brassards doit être annuel. Le brassard est spécifique de chaque appareil.

Autre bibliographie: [Ishigami J et al. Effects of Cuff Size on the Accuracy of Blood Pressure Readings: The Cuff(SZ) Randomized Crossover Trial. JAMA Intern Med. 2023.](https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/10.1001/jamainternmed.2023.3264)

<script>
window.addEventListener('load', () => {
  $(function () {
    $('#bp-monitors').DataTable({
      ajax: '/data/tensiometres.json',
      columns: [
        { data: 'Fabricant' },
        { data: 'Modèle' },
        { data: 'Population' },
        { data: 'Lieu' },
        { data: 'Evaluateur' }
      ]
    })
  })
})
</script>

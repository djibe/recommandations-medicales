+++
title = "Diverticulite sigmoïdienne aiguë"
prefix = "la "
shortname = "Sigmoïdite"
synonyms = ["Sigmoïdite diverticulaire, diverticulite colique"]
auteurs = ["Jean-Baptiste FRON"]
date = 2021-02-09T11:33:00+02:00
publishdate = 2021-02-09
lastmod = 2021-02-09
specialites = ["hepato-gastro-enterologie"]
annees = "2017"
sources = ["HAS"]
tags = []
anglais = ["Diverticulitis of sigmoid colon"]
sctid = "427910000"
draft = false
flowchart = true
image = false
imageSrc = ""
todo = "délai scanner, éviter cortico/AINS, Prescrire"
+++

{{%article-summary%}}

- La diverticulose colique est asymptomatique dans 80% des cas.
- Scanner abdomino-pelvien pour le diagnostic.
- Pas d'antibiotiques si crise non compliquée, sans gravité et sans grossesse.
- Chirurgie prophylactique si comorbidités  
{{%class%}}Immunodépression, IRC, altération qualité de vie, fistule, abcès, sténose symptomatique.{{%/class%}}

{{%/article-summary%}}
{{%collapse "Définition" %}}

Diverticulite sigmoïdienne aiguë
: Inflammation infectieuse colique d'origine diverticulaire survenant le plus souvent entre 50 et 70 ans.  
30% de récidives à 5 ans. 16 à 35% se compliquent d'abcès.

Diverticulose du côlon
: Anomalie anatomique du côlon acquise caractérisée par la présence de diverticules.  
Elle est asymptomatique dans 80% des cas.

{{% /collapse %}}
{{%collapse "Complications" %}}

Le traitement de la diverticulite compliquée est urgent et spécialisé:

- Abcès
- Fistule sigmoïdienne
- Péritonite diverticulaire
- Sténose colique
- Hémorragie diverticulaire  
Facteurs de risque: aspirine, AINS, alcool.

{{% /collapse %}}
{{%collapse "Clinique" %}}

Triade:

- Douleur abdominale en fosse iliaque gauche ± défense
- Fièvre, sepsis
- Troubles du transit

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

Examens systématiques pour affirmer le diagnostic.

### Biologie

- NFS
- CRP
- Créatininémie

### Scanner abdomino-pelvien avec injection

Examen de référence pour le diagnostic et la recherche de complications.

Il doit être réalisé dans les 24h suivant l'admission des patients hospitalisés ou 72h suivant le début des douleurs en ambulatoire.  
Nouveau scanner à chaque nouvelle poussée inflammatoire.

{{% /collapse %}}
{{%collapse "Indications à l'hospitalisation" %}}

{{%warning%}}

### Indications à l'hospitalisation en poussée de diverticulite sigmoïdienne aiguë

- Grossesse
- Mauvaise tolérance clinique
  - Signes d'irritation péritonéale
  - Gravité clinique ou score ASA > 3
  - Hydratation orale impossible
  - Impossibilité de surveillance ambulatoire
  - Terrain fragile
  - Contexte social défavorable
- Gravité scanographique  
Perforation ou abcès.

{{%/warning%}}

{{% /collapse %}}
{{%collapse "Traitement ambulatoire de la diverticulite sigmoïdienne" %}}

{{%info%}}Aucun traitement ou régime ne permet de prévenir les crises.{{%/info%}}

- Antalgie simple
- Surveillance clinique des symptômes  
{{%class%}}Après scanner et bilan biologique.{{%/class%}}
- Pas de suivi biologique systématique ni de scanner de contrôle en cas d’évolution favorable.

### Antibiothérapie

{{%info%}}Pas d’antibiothérapie en 1<sup>re</sup> intention si scanner sans complication.{{%/info%}}

Indications à l'antibiothérapie ambulatoire:

- Échec thérapeutique à 48h sans critère d'hospitalisation

Amoxicilline + acide clavulanique 1 g x 3/j pendant 7 jours.

Si allergie: ciprofloxacine + métronidazole

### Chirurgie

À distance de l'épisode aigu (> 2 mois), la sigmoïdectomie élective est envisagée selon les indications suivantes:

- Immunodépression
- Insuffisance rénale chronique
- Qualité de vie impactée
- Fistule
- Abcès
- Sténose symptomatique

Intérêt d'une **coloscopie** avant la chirurgie, surtout si > 50 ans ou risque élevée de cancer colorectal.

{{% /collapse %}}
{{% collapse "Conduite à tenir" "show" %}}

{{< mermaid title="Conduite à tenir devant une suspicion de diverticulite sigmoïdienne. Dr JB FRON d'après HAS 2017" >}}
graph TB
  diverticulite[Suspicion de diverticulite]
  style diverticulite stroke:#006ef4, stroke-width: 1px
    diverticulite --> gravite("<b>Fragilité ?</b><br>- Grossesse<br>- Gravité clinique<br>- Contexte social<br>- Comorbidités")
      gravite -- Oui --> Hospitalisation
      gravite -- Non --> bio("<b>Biologie</b><br>NFS, CRP, créatinine")
        bio --> SIB+(CRP &gt; 5 mg/L<br>ou Leuco &gt; 10 G/L)
          SIB+ --> scanner(Scanner abdominal<br>Complication ?)
            scanner -.-> autre
            scanner -- Oui --> Hospitalisation
            scanner -- Non --> med(Surveillance clinique)
              med -.-> echec("Aggravation à 48h<br>sans critère d'hospitalisation") --> atb("<b>Antibiothérapie orale</b><br>Amox + a. clavulanique 7j")
        bio --> SIB-(Pas de SIB) --> autre(Autre diagnostic)
{{< /mermaid >}}

{{%/collapse%}}
{{%collapse "Sources" %}}

- [Meurette G. et Vitton V. Diverticulite sigmoïdienne à l’heure des recommandations. POST'U 2019 - Paris](https://www.fmcgastro.org/texte-postu/postu-2019-paris/diverticulite-en-2019/)
- [Rouillon JM, SNFGE. Prise en charge de la diverticulite sigmoïdienne.](https://www.snfge.org/sites/default/files/SNFGE/Bibliotheque_scientifique/prise_en_charge_de_la_diverticulite.pdf)
- [HAS. Prise en charge médicale et chirurgicale de la diverticulite colique. Novembre 2017.](https://www.has-sante.fr/jcms/c_2806798/fr/prise-en-charge-medicale-et-chirurgicale-de-la-diverticulite-colique)

{{% /collapse %}}

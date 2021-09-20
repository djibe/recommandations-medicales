+++
title = "Diverticulite sigmoïdienne aiguë"
prefix = "la "
shortname = "Sigmoïdite"
synonyms = ["Sigmoïdite diverticulaire, diverticulite colique"]
auteurs = ["Jean-Baptiste FRON"]
date = 2021-02-09T11:33:00+02:00
publishdate = 2021-02-09
lastmod = 2021-09-20
specialites = ["hepato-gastro-enterologie"]
annees = "2021"
sources = ["ESCP", "SNFGE", "HAS"]
tags = []
anglais = ["Diverticulitis of sigmoid colon"]
sctid = "427910000"
draft = false
flowchart = true
image = true
imageSrc = "Anpol42, CC BY-SA 4.0, via Wikimedia Commons"
todo = "constipation, délai scanner, éviter cortico/AINS, Prescrire"
+++

{{%article-summary%}}

- La diverticulose colique est asymptomatique dans 80% des cas
- Scanner abdomino-pelvien pour le diagnostic
- Pas d'antibiotiques si crise non compliquée, sans gravité et sans grossesse
- Chirurgie prophylactique si comorbidités  
{{%class "text-black-secondary" %}}Immunodépression, insuffisance rénale, altération qualité de vie, fistule, abcès, sténose symptomatique.{{%/class%}}

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Diverticulite sigmoïdienne aiguë
: Inflammation infectieuse colique d'origine diverticulaire survenant le plus souvent entre 50 et 70 ans.
: Facteurs de risque: âge, hérédité, obésité.  
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

Il doit être réalisé dans les *72h* suivant le début des douleurs en ambulatoire (24h si hospitalisation).  
Échographie si contre-indication au scanner.

Nouveau scanner à chaque nouvelle poussée inflammatoire.

{{% /collapse %}}
{{%collapse "Indications à l'hospitalisation" %}}

{{%warning%}}

### Indications à l'hospitalisation en poussée de diverticulite sigmoïdienne aiguë

- Grossesse
- Immunodépression
- Mauvaise tolérance clinique
  - Pression artérielle ≤ 100 mmHg
  - Fréquence respiratoire ≥ 22/min
  - Confusion
  - Signes d'irritation péritonéale
  - {{< modal-btn modal-score-asa >}}Score ASA > 3{{< /modal-btn >}}
  - Hydratation orale impossible
  - Rectorragie
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
- Pas d'AINS
- Pas de modification du régime alimentaire
- Surveillance clinique des symptômes  
{{%class%}}Après bilan biologique ± scanner.{{%/class%}}
- Pas de suivi biologique systématique ni de scanner de contrôle en cas d’évolution favorable

### Antibiothérapie

{{%info%}}Pas d’antibiothérapie en 1<sup>re</sup> intention si scanner sans complication.{{%/info%}}

Indication à l'antibiothérapie ambulatoire: échec thérapeutique à 48h sans critère d'hospitalisation.  
Amoxicilline + acide clavulanique 1 g x 3/j pendant 7 jours.

Si allergie: ciprofloxacine 500 mg x 2/j OU lévofloxacine 500 mg x 1/j  
\+ métronidazole 500 mg x 3/j pendant 7 jours.

### Chirurgie

À distance de l'épisode aigu (> 2 mois), la sigmoïdectomie élective est envisagée selon les indications suivantes:

- Immunodépression
- Insuffisance rénale chronique
- Qualité de vie impactée
- Fistule
- Abcès
- Sténose symptomatique

Intérêt d'une **coloscopie** avant la chirurgie, surtout si > 50 ans ou risque élevé de cancer colorectal.

{{% /collapse %}}
{{% collapse "Conduite à tenir" "show" %}}

{{< mermaid title="Conduite à tenir devant une suspicion de diverticulite sigmoïdienne. Dr JB FRON d'après HAS 2017 et 2021" >}}
graph TB
  diverticulite[Suspicion de diverticulite]
  style diverticulite stroke:#4150f5, stroke-width: 1px
    diverticulite --> gravite("<b>Fragilité ?</b><br>- Grossesse<br>- Gravité clinique<br>- Contexte social<br>- Comorbidités")
      gravite -- Oui --> Hospitalisation
      gravite -- Non --> bio("<b>Biologie</b><br>NFS, CRP, créatinine")
        bio --> SIB+(CRP &gt; 5 mg/L<br>ou Leuco &gt; 10 G/L)
          SIB+ --> scanner(Scanner abdominal<br>Complication ?)
            scanner -.-> autre
            scanner -- Oui --> Hospitalisation
            scanner -- Non --> med(Surveillance clinique)
              med -.-> echec("Aggravation à 48h<br>sans critère d'hospitalisation") --> atb("<b>Antibiothérapie orale</b><br>Amox + a. clavulanique 1 g x 3/j 7j<br>") -. Allergie vraie .-> allergie("ATB 7 jours par<br>lévofloxacine 500 x 1/j<br>OU ciprofloxacine 500 x 2/j<br>+ métronidazole 500 x 3/j")
        bio --> SIB-(Pas de SIB) --> autre(Autre diagnostic)
{{< /mermaid >}}

{{%/collapse%}}
{{%collapse "Sources" %}}

- [HAS. Choix et durée de l'antibiothérapie : Diverticulite aiguë sigmoïdienne non compliquée. Recommander les bonnes pratiques. 27/08/2021.](https://www.has-sante.fr/jcms/p_3282886/fr/choix-et-duree-de-l-antibiotherapie-diverticulite-aigue-sigmoidienne-non-compliquee)
- [Schultz J.K. et al. European Society of Coloproctology: guidelines for the management of diverticular disease of the colon. Colorectal Dis. 22: 5-28.](https://doi.org/10.1111/codi.15140)
- [Meurette G. et Vitton V. Diverticulite sigmoïdienne à l’heure des recommandations. POST'U 2019 - Paris](https://www.fmcgastro.org/texte-postu/postu-2019-paris/diverticulite-en-2019/)
- [Rouillon JM; SNFGE. Prise en charge de la diverticulite sigmoïdienne.](https://www.snfge.org/sites/default/files/SNFGE/Bibliotheque_scientifique/prise_en_charge_de_la_diverticulite.pdf)
- [Prescrire Rédaction. Diverticulite aiguë du côlon. Novembre 2018.](https://prescrire.org)
- [HAS. Prise en charge médicale et chirurgicale de la diverticulite colique. Novembre 2017.](https://www.has-sante.fr/jcms/c_2806798/fr/prise-en-charge-medicale-et-chirurgicale-de-la-diverticulite-colique)

{{%/collapse%}}
{{% modal title="Score ASA" id="modal-score-asa"%}}

{{< scores/asa >}}

{{% /modal %}}

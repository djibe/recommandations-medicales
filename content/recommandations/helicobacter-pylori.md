+++
title = "Helicobacter pylori"
prefix = "l'"
shortname = "HP"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
relecteur = ""
date = 2020-12-02T15:14:41+02:00
publishdate = 2020-12-02
lastmod = 2021-11-24
specialites = ["hepato-gastro-enterologie"]
annees = "2021"
sources = ["GEFH", "HAS", "SNFGE"]
tags = ["B12", "bariatrique", "depistage", "EOGD", "ferritine", "gastrite", "IPP"]
anglais = ["Helicobacter pylori"]
sctid = "80774000"
draft = false
image = true
imageSrc = "Helicobacter pylori implantés sur la muqueuse gastrique, CDC/Dr Patricia Fields, Dr Collette Fitzgerald (PHIL #5715), 2004"
flowchart = true
todo = "comment diag quand rosacée, dépistage en AINS long cours maastricht III"
+++

{{%article-summary%}}

- Dépistage par sérologie pour tout antécédent d'ulcère sans confirmation d'éradication
- Endoscopie si symptômes ou facteurs de risque de cancer
- Reporter le traitement si grossesse/allaitement
- Traitement adapté à l'antibiogramme +++
- Amoxicilline: 50 mg/kg/j en 3-4 prises (max 6 g/j)
- 2 IPP: ésoméprazole 40 ou rabéprazole 20 mg (sauf oméprazole pour Bismuth), pris matin et soir
- Contrôle de l'éradication systématique (arrêt ATB > 1 mois et IPP > 2 sem)
- Signes d'alarmes en symptômes digestifs hauts:  
Dysphagie, amaigrissement, anémie.

{{%/article-summary%}}

{{%collapse "Aide au choix du traitement" "show" %}}
<div class="card card-hover card-list-material my-4">
  <div class="card-body">
    <h3 class="card-title mt-0">Aide au choix du traitement d'<em>Helicobacter pylori</em> 2021</h3>
    <h4 class="card-subtitle">Dr JB Fron</h4>
    <p class="card-text">Le traitement devrait toujours être guidé (antibiogramme, PCR).</p>
    <input type="checkbox" id="btn-atbgramme" class="d-input-none" checked onclick="functionHp()">
    <label for="btn-atbgramme" class="chip chip-action chip-filter" data-toggle="collapse" data-target="#hp-1-reference">Antibiogramme</label>
    <input type="checkbox" id="btn-allergie" class="d-input-none" disabled onclick="$('#hp-2').collapse('toggle')">
    <label for="btn-allergie" class="chip chip-action chip-filter" data-toggle="collapse" data-target="#hp-allergie">Allergie pénicilline</label>
    <script>
      function functionHp() {
        if ($('#btn-atbgramme').is(':checked')){
          $('#btn-allergie').prop('disabled', true).prop('checked', false);
          $('#hp-2').collapse('hide');
          $('#hp-allergie').collapse('hide');
        } else{ $('#btn-allergie').prop('disabled', false);$('#hp-2').collapse('show') }
      }
    </script>
    <p class="typography-overline text-black-secondary pt-4">1<sup>re</sup> ligne</p>
    <div class="collapse show" id="hp-1-reference">

  - Clari-S  
  <span>Amox 50 mg/kg/j (3-4 prises) + Clari 500 x 2/j + IPP x 2/j | 14 jours</span>
  - Clari-R Quinolone-S  
  <span>Amox 50 mg/kg/j (3-4 prises) + Lévoflo 500 x 2/j + IPP x 2/j | 14 jours</span>
  - Clari-R Quinolone-R (ou non testée)  
  <span>Amox 50 mg/kg/j (3-4 prises) + Métroni 500 x 2/j + IPP x 2/j | 14 jours  
  OU Pylera&reg; 3 gél x 4/j + oméprazole 20 matin et soir | 10 jours</span>

2<sup>e</sup> ligne
{.typography-overline .text-black-secondary .pt-2}

  -Pylera&reg; 3 gél x 4/j + oméprazole 20 matin et soir | 10 jours  
  <span>Si non utilisée en première ligne (sinon voir 3<sup>e</sup> ligne)</span>

3<sup>e</sup> ligne
{.typography-overline .text-black-secondary .pt-2}

EOGD souhaitable (sauf si Quinolone-S et non utilisées).

  <ul>
        <li>Clari-S
          <span>Amox 50 mg/kg/j (3-4 prises) + Clari 500 x 2/j + IPP x 2/j | 14 jours</span>
        </li>
        <li>Clari-R Quinolone-S
          <span>Amox 50 mg/kg/j (3-4 prises) + Lévoflo 500 x 2/j + IPP x 2/j | 14 jours</span>
        </li>
        <li>Clari-R Quinolone-R (ou non testée)
          <span><a href="http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/">Avis d'expert du GEFH</a></span>
        </li>
      </ul>
    </div>
    <div class="collapse" id="hp-2">
      <ul>
        <li>Traitement au choix
          <span>Amox 50 mg/kg/j (3-4 prises, max 6 g/j) + Clari 500 x 2/j + Métro 500 x 2/j + IPP x 2/j | 14 jours<br>
          OU Pylera&reg; 3 gél x 4/j + oméprazole 20 matin et soir | 10 jours</span>
        </li>
      </ul>
      <p class="typography-overline text-black-secondary pt-2">2<sup>e</sup> ligne</p>
      <ul>
        <li>Privilégier une EOGD
          <span>Ou utiliser le traitement alternatif</span>
        </li>
      </ul>
      <p class="typography-overline text-black-secondary pt-2">3<sup>e</sup> ligne</p>
      <p>Traitement avec antibiogramme.</p>
      <ul>
        <li>Clari-S
          <span>Amox 50 mg/kg/j (3-4 prises) + Clari 500 x 2/j + IPP x 2/j | 14 jours</span>
        </li>
        <li>Clari-R Quinolone-S
          <span>Amox 50 mg/kg/j (3-4 prises) + Lévoflo 500 x 2/j + IPP x 2/j | 14 jours</span>
        </li>
        <li>Clari-R Quinolone-R (ou non testée)
          <span><a href="http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/">Avis d'expert du GEFH</a></span>
        </li>
      </ul>
    </div>
    <div class="collapse" id="hp-allergie">
      <ul>
        <li>Pylera&reg; 3 gél x 4/j + oméprazole 20 matin et soir | 10 jours</li>
      </ul>
      <p class="typography-overline text-black-secondary pt-2">2<sup>e</sup> ligne</p>
      <p>Réaliser une EOGD.</p>
      <ul>
        <li>Clari-S Quinolone-S
          <span>Clari 500 x 2/j + Lévoflo 500 x 2/j + IPP x 2/j | 14 jours</span>
        </li>
        <li>Clari-R
          <span><a href="http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/">Avis d'expert du GEFH</a></span>
        </li>
      </ul>
      <p class="typography-overline text-black-secondary pt-2">3<sup>e</sup> ligne</p>
      <p>Traitement avec antibiogramme et <a href="http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/">avis d'expert du GEFH</a></p>
    </div>
    <small>Doses en mg, amox = amoxicilline (max 6g/j); lévoflo = lévofloxacine; métroni = métronidazole</small>
  </div>
</div>

{{% /collapse %}}
{{%collapse "Définition" %}}

*Helicobacter pylori*
: **Abréviation:** *H. pylori*.
: Bactérie à tropisme gastrique responsable de *gastrite chronique*, compliquée d'*ulcères gastro-duodénaux* et de 80% des *cancers gastriques* (adénocarcinomes et lymphomes du MALT).
: Contamination dans l'enfance par transmission familiale {{%class%}}(oro-orale ou féco-orale){{%/class%}}.  
Son éradication prévient la survenue de ces complications.

### Abréviations

**AMM:** autorisation de mise sur le marché  
**EOGD:** endoscopie œso-gastro-duodénale (ou fibroscopie/gastroscopie)  
**GEFH:** Groupe d'Études Français des *Helicobacter*  
**IPP:** inhibiteur de la pompe à protons  
**K:** cancer

### Épidémiologie

La France est un pays de faible incidence:

- 15 à 30% de la population serait infectée  
< 20% avant 30 ans et > 50% après 50 ans.
- 10% développent un ulcère et 1% un cancer.

#### Antibiorésistance d'*H. pylori* en France en 2020

- Amoxicilline 0,4%
- Clarithromycine 21%
- Lévofloxacine 18%
- Tétracycline 0%
- Rifampicine 1%
- Métronidazole 59%

{{% /collapse %}}
{{%collapse "Facteurs de risque et Indications à la recherche de H. pylori" %}}

- Ulcère ou situation à risque d'ulcère
  - Ulcère gastroduodénal ou antécédent d'ulcère
  - Avant prise d'AINS ou d'aspirine faible dose
  - [Dyspepsie chronique]({{< relref "dyspepsie.md" >}}) avec endoscopie normale
- Prévention du cancer gastrique
  - Antécédent personnel de lésion cancéreuse ou pré-cancéreuse gastrique
  - Antécédent familial au 1<sup>er</sup> degré de cancer de l'estomac
  - Syndrome de Lynch/HNPCC
  - Lymphome du MALT gastrique
  - Traitement par IPP ≥ 6 mois
  - Avant chirurgie bariatrique touchant l'estomac
- Autres
  - Toute endoscopie gastrique doit s'accompagner de biopsies
  - [Anémie ferriprive]({{< relref "anemie.md" >}}) sans cause retrouvée ou résistante à la supplémentation
  - Carence en vitamine B12 sans cause retrouvée
  - Purpura thrombopénique immunologique de l'adulte
  - Souhait du patient

> *GEFH 2021*

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

### Sérologie *Helicobacter pylori*

Indications à la sérologie (test diagnostique):

**Chez un sujet asymptomatique et ...**

- < 40-45 ans avec antécédent au 1<sup>er</sup> degré de cancer gastrique
- Antécédent d'ulcère gastro-duodénal sans preuve d'éradication de *HP*
- Purpura thrombopénique immunologique

> *HAS 2017*

**NB.** Aucun intérêt de la sérologie *HP* pour le contrôle de la guérison.

### Endoscopie œso-gastro-duodénale

L'*EOGD* doit être **systématique en cas de symptômes ulcéreux, en cas de sérologie positive ou douteuse et pour tous les autres patients à risque** pour analyse anatomopathologique, mise en culture avec recherche de *H. pylori* et antibiogramme.

Indications en première intention:

- **Patient symptomatique**
  - Syndrome ulcéreux
  - [Dyspepsie]({{< relref "dyspepsie.md" >}}) chez un patient > 40-45 ans
  - Signe d'alarme  
  Dysphagie, amaigrissement, anémie.
  - Anémie ferriprive ou carence en vitamine B12 sans autre cause
- Patient avec facteurs de risque de cancer gastrique
  - &gt; 40-45 ans avec antécédent au 1<sup>er</sup> degré de cancer gastrique
  - Autres facteurs de risque (Voir plus haut *Facteurs de risque ...*)
- Lymphome gastrique du MALT
- Chirurgie bariatrique prévue

> *HAS 2017*

{{% /collapse %}}
{{%collapse "Traitement de Helicobacter pylori 2021 avec antibiogramme" %}}

{{%warning%}}En cas de grossesse ou d'allaitement, il faut différer le traitement{{%/warning%}}

### Traitement de première ligne de *H. pylori*

#### Souche sensible à la clarithromycine

Traitement de première intention d'une infection prouvée à *H. pylori* avec fonction rénale normale.

{{%warning%}}Tout traitement antibiotique doit être suivi d'un contrôle d'éradication (voir chapitre suivant *Contrôle de la guérison*).{{%/warning%}}

{{%info%}}
En cas de sensibilité à la clarithromycine, trithérapie pendant 14 jours:

- Amoxicilline 50 mg/kg/j (en 3-4 prises/j) pendant le repas
- Clarithromycine 500 mg matin et soir pendant le repas
- Ésoméprazole 40 mg matin et soir 15 minutes avant le repas

{{%/info%}}

> << la prescription d'Amoxicilline devrait être de 50 mg/kg/j en 3-4 prises/j >> - *GEFH 2021*

#### Résistance à la clarithromycine

En cas de résistance à la clarithromycine, remplacement par la *lévofloxacine*.

Trithérapie pendant 14 jours:

- Amoxicilline 50 mg/kg/j (en 3-4 prises/j) pendant le repas
- Lévofloxacine 500 mg matin et soir pendant le repas
- Ésoméprazole 40 mg matin et soir 15 minutes avant le repas

#### Résistance clarithromycine et lévofloxacine

En cas de double résistance clarithromycine et lévofloxacine (ou quinolone non testée), 2 alternatives:

Quadrithérapie avec *bismuth* pendant 10 jours:

- Pylera®: 3 gélules après les repas du matin, du midi, du soir et au coucher, avec un grand verre d’eau
- Oméprazole 20 mg matin et soir 15 minutes avant le repas  
{{%class%}}Seul IPP avec l'AMM pour le bismuth.{{%/class%}}

{{%warning%}}Arrêt immédiat du traitement et avis médical en cas de signes neurologiques{{%/warning%}}

voire trithérapie pendant 14 jours:

- Amoxicilline 50 mg/kg/j (en 3-4 prises/j) pendant le repas
- Métronidazole 500 mg matin et soir pendant le repas
- Ésoméprazole 40 mg matin et soir 15 minutes avant le repas

### Traitement de deuxième ligne

Quadrithérapie avec bismuth pendant 10 jours:

- Oméprazole 20 mg matin et soir 15 minutes avant le repas  
{{%class%}}Seul IPP avec l'AMM pour le bismuth.{{%/class%}}
- Pylera® 3 gélules après les repas du matin, du midi, du soir et au coucher, avec un grand verre d’eau.

Si quadrithérapie déjà utilisée en 1<sup>re</sup> ligne, voir 3<sup>e</sup> ligne.

### Traitement de troisième ligne

La réalisation d'une nouvelle endoscopie est préférable.

- Souche Clari-S: idem ci-dessus
- Souche Clari-R et Quinolone-S: idem ci-dessus
- Souche Clari-R et quinolone-R: [avis du GEFH](http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/)

{{% /collapse %}}
{{%collapse "Traitement de Helicobacter pylori sans antibiogramme" %}}

{{%warning%}}En cas de grossesse ou d'allaitement, il faut différer le traitement{{%/warning%}}

Traitement sans antibiogramme, dit *traitement empirique*.

### Empirique de première ligne

Quadrithérapie avec *bismuth* pendant 10 jours:

- Pylera® 3 gélules après les repas du matin, du midi, du soir et au coucher, avec un grand verre d’eau
- Oméprazole 20 mg matin et soir 15 minutes avant le repas  
{{%class%}}Seul IPP avec l'AMM pour le bismuth.{{%/class%}}

{{%warning%}}Arrêt immédiat du traitement et avis médical en cas de signes neurologiques{{%/warning%}}

ou quadrithérapie du *traitement concomitant* pendant 14 jours:

- Amoxicilline 50 mg/kg/j (en 3-4 prises/j) pendant le repas
- Métronidazole 500 mg matin et soir pendant le repas
- Clarithromycine 500 mg matin et soir pendant le repas
- Ésoméprazole 40 mg matin et soir 15 minutes avant le repas

### Empirique de deuxième ligne

Privilégier une endoscopie avec antibiogramme ou utiliser la quadrithérapie alternative.

### Empirique de troisième ligne

Traitement guidé par antibiogramme ou PCR (ignorer la résistance au métronidazole).

- Clari-S
  - Amoxicilline 50 mg/kg/j (en 3-4 prises/j) pendant le repas
  - Clarithromycine 500 mg matin et soir pendant le repas
  - Ésoméprazole 40 mg matin et soir 15 minutes avant le repas
- Clari-R et Quinolone-S
  - Amoxicilline 50 mg/kg/j (en 3-4 prises/j) pendant le repas
  - Lévofloxacine 500 mg matin et soir pendant le repas
  - Ésoméprazole 40 mg matin et soir 15 minutes avant le repas
- Clari-R et Quinolone-R (ou non testée)  
[Avis du GEFH](http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/).

### Empirique avec allergie à la pénicilline

Quadrithérapie avec *bismuth* pendant 10 jours:

- Pylera® 3 gélules après les repas du matin, du midi, du soir et au coucher, avec un grand verre d’eau
- Oméprazole 20 mg matin et soir 15 minutes avant le repas  
{{%class%}}Seul IPP avec l'AMM pour le bismuth.{{%/class%}}

{{%warning%}}Arrêt immédiat du traitement et avis médical en cas de signes neurologiques{{%/warning%}}

#### Allergie à la pénicilline: 2e ligne

Privilégier une endoscopie avec antibiogramme:

- Clari-S et Quinolone-S
  - Clarithromycine 500 mg matin et soir pendant le repas
  - Lévofloxacine 500 mg matin et soir pendant le repas
  - Ésoméprazole 40 mg matin et soir 15 minutes avant le repas
- Clari-R  
[Avis du GEFH](http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/).

#### Allergie à la pénicilline: 3e ligne

Antibiogramme obligatoire et [avis du GEFH](http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/).

{{% /collapse %}}
{{%collapse "Traitements de l'éradication de HP" %}}

### Équivalences des IPP

- IPP: prise une dose matin et soir 15 minutes avant le repas  
- Seuls 2 IPP pour l'éradication de *Helicobacter pylori*
Ésoméprazole 40 mg = Rabéprazole 20 mg.
- Oméprazole 20 mg x 2/j est le seul IPP avec l'AMM pour le bismuth

### Effets indésirables des antibiotiques

- Bismuth  
Selles noires, diarrhées, dysgueusie, langue noire, effet antabuse.
- Clarithromycine  
Diarrhées, interactions.
- Lévofloxacine  
Diarrhées, tendinopathies, troubles neuropsy.
- Métronidazole  
Effet antabuse (jusqu'à 3 jours après), troubles digestifs, troubles neuropsy (vertiges, troubles de la marche, confusion, dépression).

{{% /collapse %}}
{{%collapse "Contrôle de la guérison" %}}

### Test respiratoire à l'urée marquée

{{%info%}}
**Ordonnance pour la pharmacie**

Helikit® ou Infai® 75 mg. 1 boîte

---

**Ordonnance pour le laboratoire**

Réalisation du test Helikit® ou Infai®

Au moins 4 semaines après la fin du traitement.  
Vous ne devez pas avoir bu, ni mangé, ni fumé depuis la veille au soir.
{{%/info%}}

**Le contrôle de l'éradication de *H. pylori* doit être systématique.**

Il doit être réalisé au moins 4 semaines après la fin de tout traitement  
ET au moins 2 semaines après l'arrêt total des IPP.

Il est réalisé à jeun au laboratoire avec un test acheté sur ordonnance en pharmacie.

En cas de test positif, recours à un avis spécialisé (Centre national de référence des *Campylobacters* et *Helicobacters*).

### Antigène fécal

La recherche fécale de *H. pylori* est une alternative au test respiratoire pour la guérison mais mais n'est pas remboursé.

{{% /collapse %}}
{{%collapse "Conduite à tenir en présence de Helicobacter pylori" "show" %}}

{{< mermaid title="Conduite à tenir pour le traitement de Helicobacter pylori guidé par antibiogramme. Dr JB Fron d'après GEFH 2021" >}}
graph TB
  asymptomatique["<b>Asymptomatique</b><hr>- &lt; 45 ans et ATCD K gastrique 1<sup>er</sup> degré<br>- ATCD ulcère sans preuve éradication<br>- Purpura thomboP immunologique"] --> serologie("Sérologie <em>H. pylori</em> ")
  style asymptomatique stroke:#4150f5, stroke-width:1px
    serologie -- Négative --> indemne(Pas d'infection active)
    serologie -- Positive/Douteuse --> gastro
  suspicion["<b>Symptomatique</b><hr>- Suspicion d'ulcère<br>- Dyspepsie chez &gt; 40 ans<br>- Signe d'alarme"] --> gastro("<b>Gastro-entérologue</b><br>EOGD")
  style suspicion stroke:#4150f5, stroke-width:1px
  suspect["<b>Comorbidités</b><hr>- &ge; 45 ans avec ATCD K gastrique 1er degré<br>- Anémie ferriprive ou B12 sans cause<br>- Lymphome gastrique du MALT<br>- Chirurgie bariatrique"] --> gastro
  style suspect stroke:#4150f5, stroke-width:1px
    gastro -- H. pylori + ---> grossesse("Grossesse ou<br>allaitement ?")
      grossesse == Non ===> antibiogramme("<b>Antibiogramme</b><br>Sensible clarithromycine?")
        antibiogramme == Sensible ==> triAmox("<b>Trithérapie 14j</b><br>IPP + amoxicilline<br>+ clarithromycine")
          triAmox ===> controle("<b>Test respiratoire</b><br>4 semaines après la fin du ttt<br>et &ge; 2 semaines sans IPP")
        antibiogramme -- Résistant --> levofloS("Sensible lévofloxacine ?")
          levofloS -- Sensible --> levoflo("<b>Trithérapie 14j</b><br>IPP + amoxicilline<br>+ lévofloxacine") --> controle
          levofloS -- Résistant --> levofloR("<b>Quadrithérapie 10j</b><br>Oméprazole + Bismuth<hr>OU IPP + amoxicilline<br>+ métronidazole 14j") --> controle
          controle -- Négatif --> ok(Bactérie éradiquée)
          controle -- Positif --> bismuth("Oméprazole + Bismuth 10j<br>&#40;si non utilisé&#41;")
            bismuth --> controle2(Test respiratoire)
              controle2 -- Positif --> final("- ClariS: amox + clari + IPP 14j<br>- Clari-R-Quinolone-S: amox + lévoflo + IPP 14j<br>- Double résistance: avis du GEFH")
                click final "http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/" "Ouvrir dans un onglet" _blank
        antibiogramme -- Allergie péni --> bismuth
      grossesse -- Oui --> reporter(Reporter le<br>traitement)
{{< /mermaid >}}

### Traitement probabiliste en l'absence de l'antibiogramme de *H. pylori*

{{< mermaid title="Conduite à tenir pour le traitement de Helicobacter pylori en l'absence d'antibiogramme. Dr JB Fron d'après GEFH 2021" >}}
graph TB
  probabiliste["<em>H. pylori</em> prouvé<br>ET antibiogramme manquant"] --> grossesse(Grossesse ou<br>allaitement ?)
  style probabiliste stroke:#4150f5, stroke-width:1px
    grossesse == Non ==> choix(Traitement au choix)
      choix -- Alternative 1 ---> concomitant("<b>Concomitant 14j</b><br>IPP + amoxicilline<br>+ clarithromycine<br>+ métronidazole")
      concomitant --> controle("<b>Test respiratoire</b><br>4 semaines après la fin du ttt<br>et ≥ 2 semaines sans IPP")
      choix -- "Alternative 2 ou<br>allergie pénicilline" --> bismuth("<b>Quadrithérapie<br>bismuthée 10j</b>")
        bismuth --> controle
          controle -- Négatif --> ok(Bactérie éradiquée)
          controle -- Positif ---> switch(Privilégier une EOGD<hr>Voire traitement alternatif)
            switch -- Traitement alternatif --> surv("<b>Test respiratoire</b>")
              surv -- Négatif --> ok2(Bactérie éradiquée)
              surv -- Positif --> EOGD(EOGD)
            switch ==> EOGD --> seClaLevo(Sensibilité clarithromycine<br>et lévofloxacine ?)
              seClaLevo --> ClariS(Clari-S: 14j<br>IPP + amoxicilline<br>+ clarithromycine)
                ClariS -. Échec .-> RCP
              seClaLevo --> ClariRLevoS(Clari-R et Lévo-S: 14j<br>IPP + amoxicilline<br>+ lévofloxacine)
                ClariRLevoS -. Échec .-> RCP
              seClaLevo --> ClariRLevoR(Double résistance)
              seClaLevo -- Allergie péni --> allergie(Clari-S et Lévo-S: 14j<br>IPP + clarithromycine<br>+ lévofloxacine)
                allergie -- Autres cas --> RCP
                ClariRLevoR --> RCP("RCP GEFH &#40;cliquer&#41;")
                  click RCP "http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/" "Ouvrir dans un onglet" _blank
    grossesse -- Oui --> reporter("Reporter le<br>traitement")
{{< /mermaid >}}

> **Légende**  
EOGD = gastroscopie avec biopsies et antibiogramme

{{% /collapse %}}
{{%collapse "Information du patient" %}}

- [Fiche info patient HAS et CNPHGE. La recherche de Helicobacter pylori (2019, PDF)](https://www.has-sante.fr/upload/docs/application/pdf/2019-03/helicobacter_recherche.pdf)
- [Questions-réponses HAS. Helicobacter pylori : recherche et traitement](https://www.has-sante.fr/jcms/c_2911396/fr/helicobacter-pylori-recherche-et-traitement)

S'assurer de la bonne compréhension de chaque étape pour favoriser la participation au traitement.

- Infection digestive par la bactérie *Helicobacter pylori*. L'infection a lieu le plus souvent durant l'enfance et dure toute la vie. Elle entraîne une inflammation chronique de l'estomac (gastrite) souvent asymptomatique. Elle peut se compliquer d'ulcères et de cancers de l'estomac.
- La gastroscopie (aussi appelée fibroscopie ou endoscopie) permet d'aller vérifier l'état de l'estomac et de réaliser des prélèvements à la fois pour vérifier l'état des tissus mais aussi pour étudier la présence de *H. pylori* et sa résistance aux antibiotiques.
- Le traitement antibiotique permet d'éradiquer la bactérie.
- Les antibiotiques causent souvent des problèmes digestifs (nausées, vomissements, diarrhées), vertiges et maux de tête. Mais leur arrêt est rarement nécessaire.
- Montrer l'ordonnance avec les médicaments, leur posologie et les effets indésirables.
  - Arrêt immédiat du bismuth/Pylera® en signes neurologiques
  - Métronidazole et Pylera®: pas d'alcool.
  - Bismuth et levofloxacine: photosensibilité
  - FQ: tendinopathies
- Nécessité de prendre intégralement le traitement pour éradiquer la bactérie.
- Contrôle systématique de la guérison avec le test à l'urée compte-tenu des résistances aux antibiotiques en France (1 cas sur 5).
- Le test de guérison à l'urée marquée
  - Au moins 4 semaines après la fin des antibiotiques et 2 semaines après l'arrêt des anti-acides.
  - Achat du test en pharmacie (remboursé)
  - Réalisation du test à jeun au laboratoire d'analyses médicales
- Dépistage de la famille proche en cas de lésion cancéreuse ou pré-cancéreuse de l'estomac.

{{% /collapse %}}
{{%collapse "Vidéos de formation" %}}

{{< youtube id="2AvWB-hTsHs" title="Vidéo d'explications du test respiratoire" >}}

{{< youtube id="QxQudpqfe08" title="Vidéo d'explications sur les précautions pour la réalisation du test respiratoire" >}}

{{% /collapse %}}
{{%collapse "Sources" %}}

- [Groupe d'Études Français des Helicobacter (GEFH). Site officiel.](http://www.helicobacter.fr/)
- [Bénéjat L et al. Épidémiologie de l’infection à Helicobacter pylori en France en 2020 : données de surveillance du CNR Campylobacters et Hélicobacters. Bull Epidémiol Hebd. 2021;(15):275-82.](http://beh.santepubliquefrance.fr/beh/2021/15/2021_15_2.html)
- [GEFH. Recommandations de prise en charge de l'infection à *Helicobacter pylori* en 2021 pour les hépato-gastro-entérologues. 04/03/2021. (PDF)](http://www.helicobacter.fr/wp-content/uploads/2021/03/Fiche-HP-specialistes-2021.pdf)
- [SNFGE et al. Cancer de l'estomac. Thésaurus National de Cancérologie Digestive. 24/06/2019.](https://www.snfge.org/content/2-cancer-de-lestomac)
- [HAS. Helicobacter pylori : recherche et traitement. 26/03/2019](https://www.has-sante.fr/jcms/c_2911396/fr/helicobacter-pylori-recherche-et-traitement)
- [HAS et CNPHGE. Diagnostic de l’infection par Helicobacter pylori chez l’adulte. Mai 2017. (PDF)](https://www.has-sante.fr/upload/docs/application/pdf/2017-06/dir83/helicobacter_fiche_pertinence_diagnostic.pdf)
- [HAS et CNPHGE. Traitement de l’infection par Helicobacter pylori chez l’adulte. Mai 2017. (PDF)](https://www.has-sante.fr/upload/docs/application/pdf/2017-06/dir83/helicobacter_fiche_pertinence_traitement.pdf)
- [Bonfils C. et Zuliani S. La prise de traitements chroniques au quotidien : évaluer les pratiques des patients et optimiser l’horaire de prise des médicaments. Sciences pharmaceutiques. 2015. dumas-01169981](https://dumas.ccsd.cnrs.fr/dumas-01169981/document)
- [SNFGE. Infection à Helicobacter pylori de l'adulte. Conseil de pratique. Juin 2015. (PDF)](https://www.snfge.org/sites/default/files/recommandations/cp011-infection-a-helicobacter-pylori-de-ldulte_2015-06.pdf)
- [HAS. Dépistage de l’infection à Helicobacter pylori. Avril 2010. (PDF)](https://www.has-sante.fr/upload/docs/application/pdf/2010-08/synthese_-_depistage_de_linfection_a_helicobacter_pylori.pdf)

{{% /collapse %}}

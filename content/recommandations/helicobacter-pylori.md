+++
id = "0190e8c3-da6d-77cb-abb6-74093e0faf46"
title = "Helicobacter pylori (HP)"
prefix = "l'"
titleSeo = "Helicobacter pylori"
description = "Dernières recommandations HAS et GEFH 2021 sur le traitement d'Helicobacter pylori pour le médecin généraliste. Traitement antibiotique selon l'antibiogramme"
longHtml = true
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2020-12-02T15:14:41+02:00"
publishdate = "2020-12-02"
lastmod = "2024-08-01"
specialites = ["hepato-gastro-enterologie"]
annees = "2024"
sources = ["HAS", "SPILF", "GEFH", "SNFGE"]
tags = ["B12", "depistage", "EOGD", "ferritine", "gastrite", "IPP"]
english = ["Helicobacter pylori"]
sctid = "80774000"
icd10 = ["K29.7", "B98.0"]
image = true
imageSrc = "Helicobacter pylori implantés sur la muqueuse gastrique, CDC/Dr Patricia Fields, Dr Collette Fitzgerald (PHIL 5715), 2004"
flowchart = true
todo = "rankok, reco enfant 2022, comment diag quand rosacée, dépistage en AINS long cours Maastricht III"
modele = true
+++

{{%article-summary%}}

- Dépister l'*Helicobacter pylori* par sérologie pour tout antécédent d'ulcère sans confirmation d'éradication
- Signes d'alarmes évocateurs de [cancer de l'estomac]({{< relref "cancer-estomac.md" >}}) en cas de symptômes digestifs hauts: dysphagie, amaigrissement, anémie. Une fibroscopie gastrique est nécessaire
- Privilégier une antibiothérapie adaptée à l'antibiogramme d'*Helicobacter pylori* (après endoscopie)
- En l'absence d'antibiogramme, traitement probabiliste de première intention de l'*Helicobacter pylori* pendant 14 jours: quadrithérapie associant amoxicilline, clarithromycine, métronidazole et IPP pendant 14 jours (voir le bouton *Modèle d'ordonnance*)
- {{< modal-btn modal-test-respi >}}Contrôle de l'éradication{{< /modal-btn >}} systématique avec le test à l'urée marquée à 1 mois
- Reporter le traitement d'éradication d'*Helicobacter pylori* en cas de grossesse ou d'allaitement

{{%/article-summary%}}
{{%collapse "Comment traiter Helicobacter pylori ?" "show" %}}
<div class="card card-hover card-list-material my-4">
  <div class="card-body">
    <h3 class="card-title mt-0">Aide au choix du traitement d'<em>Helicobacter pylori</em> 2024</h3>
    <h4 class="card-subtitle">Dr JB Fron d'après HAS/SPILF 2024 et GEFH 2021</h4>
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
    <p class="typography-overline text-black-secondary pt-4">Première ligne</p>
    <div class="collapse show" id="hp-1-reference">

- Clarithromycine-Sensible  
  <span>Amoxicilline 50 mg/kg/j (3-4 prises) + clarithromycine 500 x 2/j + ésoméprazole/rabéprazole 20 mg (IPP) x 2/j pendant 10 jours</span>
- Clarithromycine-Résistant et Quinolone-Sensible  
  <span>Amoxicilline 50 mg/kg/j (3-4 prises) + lévofloxacine 500 x 1/j (x 2/j pour le *GEFH*) + IPP x 2/j pendant 10 jours (14 selon le *GEFH*)</span>
- Clarithromycine-Résistant et Quinolone-Résistant (ou non testée)  
  <span>Pylera® 3 gél x 4/j + oméprazole 20 matin et soir pendant 10 jours  
  *GEFH*: OU amoxicilline 50 mg/kg/j (3-4 prises) + métronidazole 500 x 2/j + IPP x 2/j pendant 14 jours</span>

2^e^ ligne
{.typography-overline .text-black-secondary .pt-2}

  Pylera® 3 gél x 4/j + oméprazole 20 matin et soir pendant 10 jours  
  <span>Si non utilisée en première ligne (sinon voir 3^e^ ligne).</span>

3^e^ ligne
{.typography-overline .text-black-secondary .pt-2}

EOGD souhaitable (sauf si Quinolone-S et non utilisées).

  <ul>
        <li>Clarithromycine-S
          <span>Amoxicilline 50 mg/kg/j (3-4 prises) + Clarithromycine 500 x 2/j + IPP x 2/j pendant 14 jours</span>
        </li>
        <li>Clarithromycine-R et Quinolone-S
          <span>Amoxicilline 50 mg/kg/j (3-4 prises) + Lévofloxacine 500 x 2/j + IPP x 2/j pendant 14 jours</span>
        </li>
        <li>Clarithromycine-R et Quinolone-R (ou non testée)
          <span><a href="http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/" rel="external nofollow noopener">Avis d'expert du GEFH</a></span>
        </li>
      </ul>
    </div>
    <div class="collapse" id="hp-2">

- **Traitement probabiliste**
- Amoxicilline 50 mg/kg/j (en 3-4 prises, max 6 g/j)
- Clarithromycine 500 mg x 2/j
- Métronidazole 500 mg x 2/j
- Ésoméprazole 20 mg (IPP) x 2/j pendant 14 jours

Si prise antérieure de macrolides ou allergie documentée à l'amoxicilline:  
Pylera® 3 gél x 4/j + oméprazole 20 mg x 2/j

<p class="typography-overline text-black-secondary pt-2">2<sup>e</sup> ligne</p>
      <ul>
        <li>Utiliser le traitement alternatif: Quadrithérapie ou Pylera® (pour les <em>HAS/SPILF</em>)</li>
        <li>Privilégier une EOGD selon le <em>GEFH</em></li>
      </ul>
      <p class="typography-overline text-black-secondary pt-2">3<sup>e</sup> ligne</p>
      <p>Traitement avec antibiogramme.</p>
      <ul>
        <li>Clarithromycine-S
          <span>Amoxicilline 50 mg/kg/j (3-4 prises) + Clarithromycine 500 x 2/j + IPP x 2/j pendant 14 jours</span>
        </li>
        <li>Clarithromycine-R et Quinolone-S
          <span>Amoxicilline 50 mg/kg/j (3-4 prises) + Lévofloxacine 500 x 2/j + IPP x 2/j pendant 14 jours</span>
        </li>
        <li>Clarithromycine-R et Quinolone-R (ou non testée)
          <span><a href="http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/" rel="external nofollow noopener">Avis d'expert du GEFH</a></span>
        </li>
      </ul>
    </div>
    <div class="collapse" id="hp-allergie">
      <ul>
        <li>Pylera® 3 gél x 4/j + oméprazole 20 matin et soir pendant 10 jours</li>
      </ul>
      <p class="typography-overline text-black-secondary pt-2">2<sup>e</sup> ligne</p>
      <p>Réaliser une EOGD.</p>
      <ul>
        <li>Clarithromycine-S et Quinolone-S
          <span>Clarithromycine 500 x 2/j + Lévofloxacine 500 x 2/j + IPP x 2/j pendant 14 jours</span>
        </li>
        <li>Clarithromycine-R
          <span><a href="http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/" rel="external nofollow noopener">Avis d'expert du GEFH</a></span>
        </li>
      </ul>
      <p class="typography-overline text-black-secondary pt-2">3<sup>e</sup> ligne</p>
      <p>Traitement avec antibiogramme et <a href="http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/" rel="external nofollow noopener">avis d'expert du GEFH</a></p>
    </div>
  </div>
</div>

{{% /collapse %}}
{{%collapse "Définition" %}}

*Helicobacter pylori*
: La bactérie *Helicobacter pylori* (*H. pylori*) a un tropisme gastrique responsable d'une *gastrite chronique*, compliquée d'*ulcères gastro-duodénaux* et responsable de 80% des *[cancers de l'estomac]({{< relref "cancer-estomac.md" >}})* (adénocarcinomes et lymphomes du MALT).
: Contamination dans l'enfance par transmission familiale {{%class%}}(oro-orale ou féco-orale){{%/class%}}.  
Son éradication prévient la survenue de ces complications.

### Abréviations

AMM
: autorisation de mise sur le marché

EOGD
: endoscopie œso-gastro-duodénale (ou fibroscopie/gastroscopie)

GEFH
: Groupe d'Études Français des *Helicobacter*

HAS
: Haute Autorité de Santé

IPP
: inhibiteur de la pompe à protons

K
: cancer

SNFGE
: Société Nationale Française de Gastro-Entérologie

SPILF
: Société de pathologie infectieuse de langue française
{.dl-inline}

### Épidémiologie de l'*Helicobacter pylori* en France

La France est un pays de faible incidence d'*Helicobacter pylori*:

- 15 à 30 % de la population serait infectée par l'*Helicobacter*  
  < 20 % avant 30 ans et > 50 % après 50 ans.
- 10 % développent un ulcère et 1% un [cancer de l'estomac]({{< relref "cancer-estomac.md" >}}).

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
  - Antécédent familial au 1^er^ degré de cancer de l'estomac
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

> -- *GEFH 2021*

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}
>
### Sérologie *Helicobacter pylori*

Indications à la sérologie (test diagnostique) chez le sujet asymptomatique avec ≥ 1 parmi:

- < 40-45 ans avec antécédent au 1^er^ degré de [cancer gastrique]({{< relref "cancer-estomac.md" >}})
- Antécédent d'ulcère gastro-duodénal sans preuve d'éradication d'*HP*
- Purpura thrombopénique immunologique

> -- *HAS 2017*

**NB.** Aucun intérêt de la sérologie *HP* pour le contrôle de la guérison.

### Endoscopie œso-gastro-duodénale

La gastroscopie doit être **systématique en cas de symptômes ulcéreux, en cas de sérologie positive ou douteuse et pour tous les autres patients à risque** pour analyse anatomopathologique, mise en culture avec recherche d'*H. pylori* et antibiogramme.

Indications à l'endoscopie en première intention:

- **Patient symptomatique**
  - Syndrome ulcéreux
  - [Dyspepsie]({{< relref "dyspepsie.md" >}}) chez un patient > 40-45 ans
  - Signe d'alarme  
    Dysphagie, amaigrissement, anémie.
  - Anémie ferriprive ou carence en vitamine B12 sans autre cause
- Patient avec facteurs de risque de cancer gastrique
  - &gt; 40-45 ans avec antécédent au 1^er^ degré de cancer gastrique
  - Autres facteurs de risque (Voir plus haut *Facteurs de risque ...*)
- Lymphome gastrique du MALT
- [Chirurgie bariatrique]({{< relref "obesite-adulte.md" >}}) prévue

> -- *HAS 2017*

{{% /collapse %}}
{{%collapse "Traitement guidé de Helicobacter pylori avec antibiogramme" %}}

En cas de grossesse ou d'allaitement, il faut différer le traitement.
{.alert .alert-warning}

### Traitement de première ligne de *H. pylori*

#### Souche sensible à la clarithromycine

Traitement de première intention d'infection à *Helicobacter pylori* avec fonction rénale normale.

Tout traitement antibiotique doit être suivi d'un {{< modal-btn modal-test-respi >}}contrôle d'éradication{{< /modal-btn >}}.
{.alert .alert-warning}

{{%info%}}
En cas de sensibilité à la clarithromycine, trithérapie pendant 10 jours (14 pour le *GEFH*):

- Amoxicilline 50 mg/kg/j (en 3-4 prises/j) pendant le repas
- Clarithromycine 500 mg matin et soir pendant le repas
- Ésoméprazole/rabéprazole 20 mg matin et soir 15 minutes avant le repas

{{%/info%}}

#### Résistance à la clarithromycine

En cas de résistance à la clarithromycine, remplacement par la *lévofloxacine*.

Trithérapie pendant 10 jours (14 pour le *GEFH*):

- Amoxicilline 50 mg/kg/j (en 3-4 prises/j) pendant le repas
- Lévofloxacine 500 mg x 1/j pendant le repas (2/j pour le *GEFH*)
- Ésoméprazole/rabéprazole 20 mg matin et soir 15 minutes avant le repas

#### Résistance clarithromycine et lévofloxacine

En cas de double résistance clarithromycine et lévofloxacine (ou quinolone non testée), 2 alternatives:

Quadrithérapie avec *bismuth* pendant 10 jours:

- Pylera®: 3 gélules après les repas du matin, du midi, du soir et au coucher, avec un grand verre d'eau
- Oméprazole 20 mg matin et soir 15 minutes avant le repas  
  {{%class%}}Seul IPP avec l'AMM pour le bismuth.{{%/class%}}

Arrêt immédiat du traitement et avis médical en cas de signes neurologiques.
{.alert .alert-warning}

Voire trithérapie pendant 14 jours pour le *GEFH* uniquement:

- Amoxicilline 50 mg/kg/j (en 3-4 prises/j) pendant le repas
- Métronidazole 500 mg matin et soir pendant le repas
- Ésoméprazole 20 mg matin et soir 15 minutes avant le repas

### Traitement de deuxième intention

Quadrithérapie avec bismuth pendant 10 jours:

- Oméprazole 20 mg matin et soir 15 minutes avant le repas  
  {{%class%}}Seul IPP ayant l'AMM pour le bismuth.{{%/class%}}
- Pylera® 3 gélules après les repas du matin, du midi, du soir et au coucher, avec un grand verre d'eau.

Si quadrithérapie déjà utilisée en 1^re^ ligne, voir 3^e^ ligne.

### Traitement de troisième ligne

La réalisation d'une nouvelle endoscopie est préférable pour antibiogramme.

- Souche Clari-S: idem ci-dessus
- Souche Clari-R et Quinolone-S: idem ci-dessus
- Souche Clari-R et quinolone-R: [avis du GEFH](http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/)

{{% /collapse %}}
{{%collapse "Traitement probabiliste d'infection à Helicobacter pylori" %}}

En cas de grossesse ou d'allaitement, il faut différer le traitement.
{.alert .alert-warning}

### Traitement probabiliste de première intention

Quadrithérapie probabiliste pendant 14 jours:

- Amoxicilline 50 mg/kg/j (en 3-4 prises/j) pendant le repas
- Métronidazole 500 mg matin et soir pendant le repas
- Clarithromycine 500 mg matin et soir pendant le repas
- Ésoméprazole 20 mg matin et soir 15 minutes avant le repas

La quadrithérapie avec bismuth (voir paragraphe suivant) est utilisée en première ligne seulement en cas de prise récente de macrolide ou d'allergie documentée à l'amoxicilline.

### Traitement probabiliste de deuxième intention

Quadrithérapie avec *bismuth* pendant 10 jours:

- Pylera® 3 gélules après les repas du matin, du midi, du soir et au coucher, avec un grand verre d'eau
- Oméprazole 20 mg matin et soir 15 minutes avant le repas  
  {{%class%}}Seul IPP avec l'AMM pour le bismuth.{{%/class%}}
- Ou quadrithérapie avec amoxicilline en cas de Pylera en 1re ligne
- Si allergie documentée à la pénicilline: endoscopie gastrique nécessaire

Arrêt immédiat du traitement et avis médical en cas de signes neurologiques.
{.alert .alert-warning}

### Traitement probabiliste de troisième ligne

Une endoscopie gastrique (EOGD) est nécessaire pour un traitement guidé par antibiogramme ou PCR (ignorer la résistance au métronidazole):

- Clari-S
  - Amoxicilline 50 mg/kg/j (en 3-4 prises/j) pendant le repas
  - Clarithromycine 500 mg matin et soir pendant le repas
  - Ésoméprazole 20 matin et soir 15 minutes avant le repas
- Clari-R et Quinolone-S
  - Amoxicilline 50 mg/kg/j (en 3-4 prises/j) pendant le repas
  - Lévofloxacine 500 mg matin et soir pendant le repas
  - Ésoméprazole 20 mg matin et soir 15 minutes avant le repas
- Clari-R et Quinolone-R (ou non testée)  
  [Avis du GEFH](http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/).

#### Traitement guidé en cas d'allergie à la pénicilline

- Clari-S et Quinolone-S
  - Clarithromycine 500 mg matin et soir pendant le repas
  - Lévofloxacine 500 mg matin et soir pendant le repas
  - Ésoméprazole 20 mg matin et soir 15 minutes avant le repas
- Clari-R: [avis du GEFH](http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/)

Demander un [avis au GEFH](http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/rcp-gefh/) en cas de situation difficile.

{{% /collapse %}}
{{%collapse "Traitements de l'éradication de HP" %}}

### Équivalences des IPP

- IPP: simple dose matin et soir 15 minutes avant le repas (RCP)
- Ésoméprazole, oméprazole ou rabéprazole 20 mg
- ou Lanssopraole 30 mg
- ou pantoprazole 20 mg
- Bismuth (Pylera): l'oméprazole 20 mg x 2/j est le seul IPP ayant l'AMM

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
{{%collapse "Contrôle de l'éradication d'Helicobacter pylori" %}}

### Test respiratoire à l'urée marquée

{{%info%}}
{{< traitements/helicobacter-test-uree >}}
{{%/info%}}

> **Le contrôle de l'éradication de *H. pylori* doit être systématique.**

Il est réalisé à jeun au laboratoire avec un test acheté sur ordonnance en pharmacie.

### Antigène fécal

La recherche de l'**antigène fécal** d'*H. pylori* est une alternative au test respiratoire pour le contrôle de la guérison mais n'est pas remboursé (~ 50€).

{{% /collapse %}}
{{%collapse "Conduite à tenir en présence de Helicobacter pylori" "show" %}}

### Traitement probabiliste en l'absence de l'antibiogramme de *H. pylori*

{{< mermaid title="Prise en charge probabiliste de l'infection à Helicobacter pylori sans antibiogramme. Dr JB Fron d'après HAS, SPILF 2024 et GEFH" >}}
graph TB
  probabiliste["<em>H. pylori</em> prouvé<br>ET antibiogramme manquant"] --> grossesse(Grossesse ou<br>allaitement ?)
    grossesse == Non ==> choix("Alternative 1 à privilégier<br>Au choix selon GEFH")
      choix == Alternative 1 ===> concomitant("<b>Concomitant 14j</b><br>IPP + amoxicilline<br>+ clarithromycine<br>+ métronidazole")
      concomitant --> controle("<b>Test respiratoire</b><br>4 semaines après la fin du ttt<br>et ≥ 2 semaines sans IPP")
      choix -- "Alternative 2:<br>allergie pénicilline<br>ou macrolide récent" --> bismuth("<b>Quadrithérapie<br>bismuthée 10j</b>")
        bismuth --> controle
          controle -- Négatif --> ok(Bactérie éradiquée)
          controle -- Positif ---> switch(Traitement alternatif<br>GEFH: privilégier une EOGD)
            switch == Traitement alternatif ==> surv("<b>Test respiratoire</b>")
              surv -- Négatif --> ok2(Bactérie éradiquée)
              surv -- Positif --> EOGD(EOGD)
            switch --> EOGD --> seClaLevo(Sensibilité clarithromycine<br>et lévofloxacine ?)
              seClaLevo --> ClariS(Clari-S: 14j<br>IPP + amoxicilline<br>+ clarithromycine)
                ClariS -. Échec .-> RCP
              seClaLevo --> ClariRLevoS(Clari-R et Lévo-S: 14j<br>IPP + amoxicilline<br>+ lévofloxacine)
                ClariRLevoS -. Échec .-> RCP
              seClaLevo --> ClariRLevoR(Double résistance)
              seClaLevo -- Allergie péni --> allergie(Clari-S et Lévo-S: 14j<br>IPP + clarithromycine<br>+ lévofloxacine)
                allergie -- Autres cas --> RCP
                ClariRLevoR --> RCP(RCP GEFH)
    grossesse -- Oui --> reporter("Reporter le<br>traitement")
  style probabiliste stroke:#4150f5, stroke-width:1px
{{< /mermaid >}}

> **EOGD =** gastroscopie avec biopsies et antibiogramme

### Traitement d'Helicobacter guidé par l'antibiogramme

{{< mermaid title="Prise en charge de l'infection à Helicobacter pylori guidée par antibiogramme. Dr JB Fron d'après HAS/SPILF 2024 et GEFH 2021" >}}
graph TB
  asymptomatique["<b>Asymptomatique</b><br>—<br>- &lt; 45 ans et ATCD K gastrique 1<sup>er</sup> degré<br>- ATCD ulcère sans preuve éradication<br>- Purpura thomboP immunologique"] --> serologie("Sérologie <em>H. pylori</em> ")
  style asymptomatique stroke:#4150f5, stroke-width:1px
    serologie -- Négative --> indemne(Pas d'infection active)
    serologie -- Positive/Douteuse --> gastro
  suspicion["<b>Symptomatique</b><br>—<br>- Suspicion d'ulcère<br>- Dyspepsie chez &gt; 40 ans<br>- Signe d'alarme"] --> gastro("<b>Gastro-entérologue</b><br>EOGD")
  style suspicion stroke:#4150f5, stroke-width:1px
  suspect["<b>Comorbidités</b><br>—<br>- ≥ 45 ans avec ATCD K gastrique 1er degré<br>- Anémie ferriprive ou B12 sans cause<br>- Lymphome gastrique du MALT<br>- Chirurgie bariatrique"] --> gastro
  style suspect stroke:#4150f5, stroke-width:1px
    gastro -- H. pylori + ---> grossesse("Grossesse ou<br>allaitement ?")
      grossesse == Non ===> antibiogramme("<b>Antibiogramme</b><br>Sensible clarithromycine?")
        antibiogramme == Sensible ==> triAmox("<b>Trithérapie 10j</b><br>IPP + amoxicilline<br>+ clarithromycine")
          triAmox ===> controle("<b>Test respiratoire</b><br>4 semaines après la fin du ttt<br>et ≥ 2 semaines sans IPP")
        antibiogramme -- Résistant --> levofloS("Sensible lévofloxacine ?")
          levofloS -- Sensible --> levoflo("<b>Trithérapie 10-14j</b><br>IPP + amoxicilline<br>+ lévofloxacine") --> controle
          levofloS -- Résistant --> levofloR("<b>Quadrithérapie 10j</b><br>Oméprazole + Bismuth<br>—<br>OU IPP + amoxicilline<br>+ métronidazole 14j<br>(GEFH uniquement)") --> controle
          controle -- Négatif --> ok(Bactérie éradiquée)
          controle -- Positif --> bismuth("Oméprazole + Bismuth 10j<br>&#40;si non utilisé&#41;")
            bismuth --> controle2(Test respiratoire) -- Négatif --> ok
              controle2 -- Positif --> final("- ClariS: amox + clari + IPP 14j<br>- Clari-R-Quinolone-S: amox + lévoflo + IPP 14j<br>- Double résistance: avis du GEFH")
        antibiogramme -- Allergie péni --> bismuth
      grossesse -- Oui --> reporter(Reporter le<br>traitement)
{{< /mermaid >}}

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
{{%sources%}}

- [HAS, SPILF. Choix et durées d'antibiothérapies : Traitement probabiliste de l'infection par Helicobacter pylori chez l'adulte. 2024.](https://www.has-sante.fr/jcms/p_3282793/fr/choix-et-durees-d-antibiotherapies-traitement-probabiliste-de-l-infection-par-helicobacter-pylori-chez-l-adulte)
- [HAS, SPILF. Choix et durées d'antibiothérapies : Traitement guidé de l'infection par Helicobacter pylori chez l'adulte. 2024.](https://www.has-sante.fr/jcms/p_3282789/fr/choix-et-durees-d-antibiotherapies-traitement-guide-de-l-infection-par-helicobacter-pylori-chez-l-adulte)
- [SNFGE. Cancer de l'estomac. Thésaurus National de Cancérologie Digestive. 2023.](https://www.snfge.org/tncd/cancer-lestomac)
- [HAS, SPILF, GPIP. Choix et durées d'antibiothérapie préconisées dans les infections bactériennes courantes. Recommander les bonnes pratiques. 2021.](https://www.has-sante.fr/jcms/p_3278764/fr/choix-et-durees-d-antibiotherapie-preconisees-dans-les-infections-bacteriennes-courantes)
- [Bénéjat L et al. Épidémiologie de l'infection à Helicobacter pylori en France en 2020 : données de surveillance du CNR Campylobacters et Hélicobacters. Bull Epidémiol Hebd. 2021.](http://beh.santepubliquefrance.fr/beh/2021/15/2021_15_2.html)
- [GEFH. Recommandations de prise en charge de l'infection à *Helicobacter pylori* en 2021 pour les hépato-gastro-entérologues. 04/03/2021. (PDF)](http://www.helicobacter.fr/wp-content/uploads/2021/03/Fiche-HP-specialistes-2021.pdf)
- [HAS. Helicobacter pylori : recherche et traitement. 26/03/2019.](https://www.has-sante.fr/jcms/c_2911396/fr/helicobacter-pylori-recherche-et-traitement)
- [HAS et CNPHGE. Diagnostic de l'infection par Helicobacter pylori chez l'adulte. 2017. (PDF)](https://www.has-sante.fr/upload/docs/application/pdf/2017-06/dir83/helicobacter_fiche_pertinence_diagnostic.pdf)
- [HAS et CNPHGE. Traitement de l'infection par Helicobacter pylori chez l'adulte. 2017. (PDF)](https://www.has-sante.fr/upload/docs/application/pdf/2017-06/dir83/helicobacter_fiche_pertinence_traitement.pdf)
- [Bonfils C. et Zuliani S. La prise de traitements chroniques au quotidien : évaluer les pratiques des patients et optimiser l'horaire de prise des médicaments. Sciences pharmaceutiques. 2015. dumas-01169981](https://dumas.ccsd.cnrs.fr/dumas-01169981/document)
- [Delchier JC, Courillon-Mallet A, Lamarque D. Infection à Helicobacter pylori de l'adulte. Conseil de pratique. SNFGE. 2015. (PDF)](https://www.snfge.org/sites/www.snfge.org/files/medias/documents/cp011-infection-a-helicobacter-pylori-de-ldulte_2015-06.pdf)
- [HAS. Dépistage de l'infection à Helicobacter pylori. Avril 2010. (PDF)](https://www.has-sante.fr/upload/docs/application/pdf/2010-08/synthese_-_depistage_de_linfection_a_helicobacter_pylori.pdf)
- [Groupe d'Études Français des Helicobacter (GEFH). Site officiel.](http://www.helicobacter.fr)

### Bibliographie en attente

- [Malfertheiner P, et al. Management of Helicobacter pylori infection: the Maastricht VI/Florence consensus report. Gut. 2022.](https://pubmed.ncbi.nlm.nih.gov/35944925/)
- [Kalach N, et al; GFHGNP. Diagnostic et traitement de l'infection à Helicobacter pylori chez l'enfant. 2022.](http://www.helicobacter.fr/wp-content/uploads/2022/01/Diagnostic-et-traitement-de-linfection-%C3%A0-Helicobacter-pylori-chez-l%E2%80%99enfant.pdf)
- [Kalach N, et al; Société Française de Pédiatrie (SFP). Helicobacter pylori chez l'enfant. Pas à Pas en Pédiatrie. 2022.](https://pap-pediatrie.fr/hepato-gastro/helicobacter-pylori-chez-lenfant)

{{%/sources%}}
{{% modele %}}

#### Antibiothérapie probabiliste (*HAS/SPILF 2024*)

Quadrithérapie pendant 14 jours:

- Amoxicilline 50 mg/kg/j (en 3-4 prises, max 6 g/j)
- Clarithromycine 500 mg matin et soir
- Métronidazole 500 mg matin et soir
- Ésoméprazole 20 mg matin et soir avant le repas

Si prise récente de macrolide ou allergie documentée à l'amoxicilline, voir *Pylera*.

---

{{< traitements/helicobacter-test-uree >}}

{{% /modele %}}
{{% modal title="Test respiratoire à l'urée marquée" id="modal-test-respi"%}}

{{< traitements/helicobacter-test-uree >}}

{{% /modal %}}

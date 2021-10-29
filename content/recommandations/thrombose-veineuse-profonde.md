+++
title = "Thrombose veineuse profonde"
prefix = "la "
shortname = "TVP"
synonyms = ["Phlébite profonde"]
auteurs = ["Jean-Baptiste FRON"]
date = 2021-03-19T18:21:00+02:00
publishdate = 2021-03-19
lastmod = 2021-03-19
specialites = ["cardiologie"]
annees = "2019"
sources = ["SFC", "SPLF"]
tags = ["anticoagulant", "HBPM", "MVTE"]
anglais = ["Deep venous thrombosis"]
sctid = "128053003"
draft = false
flowchart = true
image = false
imageSrc = ""
todo = "proba forte et doppler neg?, éducation AVK, reperfusion, risque récidive, differentiel, interrogatoire, http://www.thrombose-cancer.com/international-guidelines-2019/, IRC avec CKD-EPI ou cockroft ?"
+++

Chapitre en cours de rédaction. Beaucoup d'outils sont déjà utilisables en l'état.

{{%article-summary%}}

- En l'absence de dyspnée, malaise, tachycardie et douleur thoracique, sinon voir *[Embolie pulmonaire]({{< relref "embolie-pulmonaire.md" >}})*
- Score clinique systématique et D-dimères ou écho-doppler veineux selon le résultat
- Thrombose veineuse superficielle, voir la fiche dédiée (*en cours*).

{{%/article-summary%}}
{{%collapse "Définition" %}}

Thrombose veineuse profonde
: Occlusion d'une veine de gros calibre par un thrombus sanguin atteignant surtout les membres inférieurs.  
Le risque est augmenté par l'insuffisance veineuse et une maladie thrombogène.

### Abréviations

**AOD:** anticoagulant oral direct (anciennement NACO)  
**AVK:** anti-vitamine K  
**EP:** embolie pulmonaire  
**HBPM:** héparine de bas poids moléculaire  
**HNF:** héparine non fractionnée  
**LEFt:** Left Edema First trimester  
**MI:** membre inférieur  
**MVTE:** maladie veineuse thromboembolique  
**TIH:** thrombopénie induite à l'héparine  
**TVP:** thrombose veineuse profonde  
**UI:** unités internationales

{{% /collapse %}}
{{%collapse "Probabilité clinique et score de Wells" %}}

{{%warning%}}Rechercher des signes d'embolie pulmonaire: dyspnée, malaise, tachycardie et douleur thoracique.{{%/warning%}}

En l'absence de signes d'EP, il est recommandé d'utiliser l'un des scores ci-dessous plutôt qu'une appréciation clinique pour l'évaluation d'une suspicion de thrombose veineuse profonde.

{{< scores/wells-tvp >}}

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

Une suspicion de TVP (sans EP) devrait être explorée en ambulatoire (voir *Critères d'hospitalisation*).

- NFS
- Créatininémie

### D-dimères

Indications: **probabilité faible** ou **intermédiaire** de TVP (selon le score clinique initial).

Recours d'emblée à l'écho-doppler veineux si non accessible.

#### Interpréter les résultats de D-dimères

- D-dimères normaux
  - Ne pas réaliser d'écho-doppler
  - Ne pas poursuivre les investigations
- D-dimères anormaux  
Réaliser l'écho-doppler veineux.

{{%info%}}Après 50 ans, la borne des D-dimères est à 10x l'âge {{%class%}}(ex. 700 à 70 ans){{%/class%}}.{{%/info%}}

### Écho-doppler veineux

Indications: **probabilité forte** de TVP (selon le score clinique initial), D-dimères élevés ou non accessibles.

#### Interpréter les résultats de l'écho-doppler veineux

- Écho-doppler veineux complet normal ET probabilité non forte:  
Pas de TVP.
- Écho-doppler veineux douteux ou incomplet normal:  
Prévoir un écho-doppler veineux complet de contrôle à J7.
- Écho-doppler veineux anormal avec thrombus proximal/distal:  
TVP certaine.

{{% /collapse %}}
{{%collapse "Critères d'hospitalisation" %}}

{{%warning%}}

### Critères d'hospitalisation en cas de TVP

- Suspicion d'embolie pulmonaire
- TVP bilatérale
- Syndrome obstructif sévère ou signes d'ischémie
- Symptômes mal tolérés après 15j d'anticoagulation efficace
- Survenue sous anticoagulants ou suspicion de TIH
- Hémorragie active ou risque hémorragique élevé  
{{%class "text-black-secondary"%}}RIETE > 4, voir *Score hémorragique RIETE* plus bas.{{%/class%}}
- Insuffisance rénale sévère ({{< modal-btn modal-score-cockroft >}}< 30 mL/min{{< /modal-btn >}})
- Cancer ou comorbidités à risque de décompensation
- Contexte médico-social ou géographique défavorable
- Absence d'entourage
- Absence de téléphone
{{%/warning%}}

En l'absence de ces signes, la prise en charge préconisée de la TVP est ambulatoire.

{{% /collapse %}}
{{%collapse "Score hémorragique RIETE" %}}

Un score hémorragique élevé impose une hospitalisation.

{{< scores/riete >}}

{{% /collapse %}}
{{%collapse "TVP provoquée ou spontanée ?" %}}

{{%info%}}Pour toute survenue de MVTE, il faut rechercher la présence de {{< modal-btn modal-mvte-fdr >}}facteurs de risque clinique de MVTE{{< /modal-btn >}}{{%/info%}}

{{%info%}}La MVTE est *non provoquée* en l'absence de {{< modal-btn modal-mvte-fdr >}}facteur de risque clinique majeur{{< /modal-btn >}}.{{%/info%}}

### Bilan étiologique

- Pas de recherche systématique de cancer en {{< modal-btn modal-mvte-fdr >}}risque majeur transitoire{{< /modal-btn >}}
- EP avec *nécrose cutanée* ou antécédent de pathologie vasculaire placentaire: rechercher un *SAPL*
- EP avec *signes d'hémolyse* ou *cytopénie*: rechercher une *hémoglobinurie paroxystique nocturne* (HPN)

#### 1<sup>er</sup> épisode de MVTE non provoquée (= pas de facteur majeur)

- Antécédents personnels et familiaux, symptômes, examen physique complet
- Dépistages des cancers à jour, répéter si ancienneté > 1 an
- Radio de thorax (en l'absence d'angioscanner thoracique)
- NFS, calcémie
- < 50 ans avec TVP proximale, digestive, membre supérieur ou cérébrale:  
Rechercher un *SAPL*.
- < 50 ans et antécédent familial de thrombose:  
Rechercher une {{< modal-btn modal-thrombophilie >}}thrombophilie constitutionnelle{{< /modal-btn >}}.
- TVP non provoquée digestive, membre supérieur ou cérébrale:
Rechercher une {{< modal-btn modal-thrombophilie >}}thrombophilie constitutionnelle{{< /modal-btn >}}.
- NFS anormale, TVP digestive, membre supérieur ou cérébrale:
Rechercher un syndrome myéloprolifératif.
- TVP digestive ou cérébrale associée à hémolyse/cytopénie:  
Rechercher une hémoglobinurie paroxystique nocturne (HPN).
- Répéter à 6 mois ce bilan

#### Récidive de MVTE

- < 50 ans: rechercher un *SAPL* et une {{< modal-btn modal-thrombophilie >}}thrombophilie constitutionnelle{{< /modal-btn >}}

#### Récidive de MVTE sous anticoagulant bien conduit

- Idem ci-dessus avec...
- Dépistages des cancers à jour, répéter si ancienneté > 1 an
- Recherche mutation JAK-2
- Scanner thoraco-abdomino-pelvien ou PETscan

{{% /collapse %}}
{{%collapse "Traitement de la TVP" %}}

### Anticoagulation

#### Indications à l'anticoagulation immédiate dans la TVP

- TVP proximale
- Probabilité clinique forte de TVP
- Probabilité clinique intermédiaire de TVP et délai prévisible des résultats > 4h
- Probabilité clinique faible de TVP et délai prévisible des résultats > 24h

Avec surveillance NFS, ionogramme, créatininémie, bilan hépatique.

#### Durée de l'anticoagulation

Le traitement doit durer 3 à 6 mois voire une durée non limitée et prend en compte le risque hémorragique.

1<sup>re</sup> TVP proximale provoquée par {{< modal-btn modal-mvte-fdr >}}facteur majeur transitoire{{< /modal-btn >}}: 3 à 6 mois.

1<sup>re</sup> TVP proximale non provoquée par {{< modal-btn modal-mvte-fdr >}}facteur majeur transitoire{{< /modal-btn >}} et sans {{< modal-btn modal-mvte-recidive >}}facteur persistant majeur{{< /modal-btn >}}:

- Max 6 mois si:
  - Règle HERDOO2 ≤ 1
  - Femme < 50 ans
  - Risque hémorragique élevé
  - Présence de {{< modal-btn modal-mvte-recidive >}}facteur de risque mineur transitoire{{< /modal-btn >}}
- Traitement au long cours si:
  - Thrombophilie majeure  
  Déficit AT, SAPL, certains déficits prot. C ou S.

#### Anticoagulation par AOD

En 1<sup>re</sup> intention en TVP proximale pour les 3 premiers mois de traitement.  
Contre-indiqué pendant la grossesse.

{{%info%}}
Apixaban 5 mg 2 cp matin et soir pendant 7 jours  
puis 5 mg x 2/j au moins 3 mois
{{%/info%}}

2 AOD ont l'AMM pour la TVP:

- **[Apixaban 5 mg](https://ec.europa.eu/health/documents/community-register/2021/20210111150212/anx_150212_fr.pdf)** 2 cp x 2/j 7 jours puis 5 mg x 2/j (préféré par Prescrire®)  
CI quand {{< modal-btn modal-score-cockroft >}}Cockroft{{< /modal-btn >}} < 25 mL/min.
- Rivaroxaban 15 mg x 2/j 21 jours puis 20 mg x 1/j  
CI quand {{< modal-btn modal-score-cockroft >}}Cockroft{{< /modal-btn >}} < 30 mL/min.

Pas de traitement héparinique préalable, posologie fixe sans adaptation.  
Avec éducation thérapeutique.  
Contre-indiqués en instabilité hémodynamique.

#### Anticoagulation par héparine et apparentés

- HBPM
  - Daltéparine 100 UI/kg/12h (Fragmine)
  - Énoxaparine 100 UI/kg/12h (Enoxaparine, Inhixa, Lovenox)
  - Nadroparine 85 UI/kg/12h ou 170 UI/kg/24h (Fraxiparine)
  - Tinzaparine 175 UI/kg/24h (Innohep)
- Fondaparinux (Arixtra)
  - < 50 kg: 5 mg/24h
  - 50 à 100 kg: 7,5 mg/24h
  - \> 100 kg: 10 mg/24h
- Voire HNF  
Si allergie aux autres produits ou clairance < 30.

Pas d'adaptation des doses ni tests d'hémostase (sauf HNF avec l'anti-Xa).  
Poursuivre **au moins 5 jours**.  
Arrêt lorsque 2 INR consécutifs à 24h d'intervalle entre 2 et 3.

**Relais AVK** le + précoce possible, sans dose de charge (par warfarine uniquement) avec **INR cible de 2,5** (entre 2 et 3).  
Avec éducation thérapeutique et carnet de suivi.

### Autres soins

- **Chaussettes de contention classe III** ≥ 6 mois
- Si TVP stable: mobilisation précoce
- Expliquer la cause de survenue de la thrombose
- Consultation de suivi  
TODO:
- À distance: rechercher une dyspnée d'effort (({{< modal-btn score-nyha >}}score NYHA{{< /modal-btn >}} ou {{< modal-btn score-mmrc >}}mMRC{{< /modal-btn >}}) )

### Filtre cave

Indication: TVP proximale diagnostiquée dans les 30 jours (avec ou sans EP) avec contre-indication à l'anticoagulation curative.

{{% /collapse %}}
{{%collapse "Conduite à tenir devant une TVP" "show" %}}

{{< mermaid title="Conduite à tenir devant une suspicion de thrombose veineuse profonde. Dr JB FRON d'après Sanchez 2019" >}}
graph TB
  tvp[Suspicion de TVP<br>sans argument d'EP] --> score(<b>Score clinique</b><br>Wells, Constans ou LEFt)
  style tvp stroke:#4150f5, stroke-width:1px
    score --> probaFaible(Probabilité faible<br>ou intermédiaire)
      probaFaible --> ddimeres(D-dimères)
        ddimeres -- Négatifs --> arret(Diagnostic écarté)
        ddimeres -- Positifs --> doppler
    score --> probaForte(Probabilité forte)
      probaForte --> doppler(Écho-doppler des MI)
        doppler -- Négatif --> differentiel(Diagnostic autre)
        doppler -- Positif --> certitude[TVP certaine]
          style certitude stroke:#4150f5, stroke-width:1px
          certitude --> critereHospi("<b>Critères d'hospitalisation ?</b><hr>- TVP bilatérale<br>- Survenue sous anticoagulants/TIH<br>- Hémorragie active<br>- IRC sévère<br>- Cancer ou comorbidités<br>- Contexte social/isolement")
            critereHospi -- Non --> scoreHemorragique("Score hémorragique RIETE<br>à risque élevé ?")
              scoreHemorragique -- Non --> anticoag(Anticoagulation 3 mois)
              scoreHemorragique -- Oui --> hospit
            critereHospi -- Oui --> hospit(Hospitalisation)
{{< /mermaid >}}

{{% /collapse %}}
{{%collapse "Source" %}}

[Sanchez O. et al. Recommandations de bonne pratique pour la prise en charge de la maladie veineuse thromboembolique chez l'adulte. Version courte. Revue des Maladies Respiratoires (2019).](https://doi.org/10.1016/j.rmr.2019.01.003)

### À lire

- Prévention 2011: https://sfar.org/wp-content/uploads/2015/10/2_AFAR_Prevention-de-la-maladie-thromboembolique-veineuse-postoperatoire-copie.pdf
- GIHP 2018: https://www.portailvasculaire.fr/sites/default/files/docs/2019_gihp_commentaires_2018_esa_vte_guidelines_mtev_prevention_peri-op.pdf
- https://journals.lww.com/ejanaesthesiology/fulltext/2018/02000/european_guidelines_on_perioperative_venous.2.aspx

{{% /collapse %}}
{{% modal title="Clairance selon Cockroft" id="modal-score-cockroft"%}}

{{< scores/cockroft >}}

{{% /modal %}}
{{% modal title="Échelle NYHA" id="score-nyha"%}}

{{< scores/nyha >}}

{{% /modal %}}
{{% modal title="Échelle de dyspnée du Medical Research Council modifiée" id="score-mmrc"%}}

{{< scores/mmrc >}}

{{% /modal %}}
{{% modal title="FDR clinique de MVTE" id="modal-mvte-fdr"%}}

{{< clinique/mvte-facteur-clinique >}}

{{% /modal %}}
{{% modal title="FDR de récidive TE" id="modal-mvte-recidive"%}}

{{< clinique/mvte-facteur-recidive >}}

{{% /modal %}}
{{% modal title="Bilan de thrombophilie" id="modal-thrombophilie"%}}

{{< clinique/thrombophilie >}}

{{% /modal %}}

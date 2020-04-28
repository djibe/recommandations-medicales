+++
title = "{{ replace .Name '-' ' ' | title }}"
prefix = "la "
shortname = ""
synonyms = [""]
auteurs = ["Jean-Baptiste FRON"]
date = "{{ .Date }}"
publishdate = "{{ now.Format "2006-01-02" }}"
lastmod = "{{ now.Format "2006-01-02" }}"
draft = true
categories = ["endocrinologie"]
guidelineyears = "2000"
source-recommandations = ["Society1", "Society2"]
tags = ["tag 1"]
+++

{{%class "text-muted" %}}Texte à griser{{%/class%}}

{{%article-summary%}}

- À compléter.

{{%/article-summary%}}

{{%collapse "Définition" %}}

Definition ...

{{%/collapse%}}

{{%collapse "Clinique" %}}

Clinique ...

{{%/collapse%}}

CONTENT

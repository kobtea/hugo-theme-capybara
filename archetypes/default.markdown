+++
date = "{{ now.Format "2006-01-02T15:04:05-07:00" }}"
draft = true
slug = "{{ slicestr .Name 11 }}"
title = "{{ slicestr .Name 11 | humanize | title }}"

comments = true
tags = ["misc"]
+++

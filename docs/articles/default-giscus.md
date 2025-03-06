---
giscus: true
---

# Test Workflow

This page enables `giscus` in its default configuration out of the box.

`Giscus` uses the title of the document (the first H1 element here) to match with a discussion. If a discussion is not found,
it can make a new discussion, and embeds a SHA-1 hash to match with it in the future.

Clicking on the `reaction` or the `Sign in with GitHub` button requires giving the `giscus` app permissions to "take actions on behalf of the user" which is quite scary sounding and quite invasive. Unfortunately the problem isn't with `giscus` but with how GitHub asks for permissions on behalf of GitHub apps.

:::workflow
![HelloBonsai](../workflows/hello-bonsai.bonsai)
:::
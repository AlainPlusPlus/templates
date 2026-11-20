# Security Audit: AguaAzul2

Audit scope: the `AguaAzul2` static HTML/JavaScript project on `main`.

## Findings

### 1. High: outdated jQuery

`AguaAzul2/assets/js/jquery.min.js` contains jQuery 3.4.1.

Versions before 3.5.0 are affected by known HTML/XSS issues, including CVE-2020-11022 and CVE-2020-11023.

**Recommendation:** Upgrade to jQuery 3.7.1, then test Dropotron, breakpoints, utility, and main scripts.

Relevant file: <https://github.com/AlainPlusPlus/templates/blob/main/AguaAzul2/assets/js/jquery.min.js>

### 2. Medium: no Content Security Policy

The project pages do not define a Content Security Policy (CSP).

**Recommendation:** Add a CSP that restricts script sources, frame sources, styles, and other resource origins. This is especially important when embedding third-party services such as YouTube.

### 3. Medium: external links should consistently use safe target attributes

External links can expose the page to reverse tabnabbing when opened with `target="_blank"` without `rel="noopener noreferrer"`.

**Recommendation:** Add `target="_blank"` and `rel="noopener noreferrer"` consistently to external links, including social and Internet Archive links.

### 4. Low: external embedded content

YouTube and other third-party embeds introduce content and tracking outside the project domain.

**Recommendation:** Use HTTPS, a strict referrer policy, and, when appropriate, a restrictive `sandbox` attribute.

### 5. No obvious code-injection issue found

The hemeroteca implementation uses `textContent` for filenames and `encodeURIComponent` for Archive URLs rather than inserting API response content through `innerHTML`.

Relevant file: <https://github.com/AlainPlusPlus/templates/blob/main/AguaAzul2/acervo-hemeroteca.html>

## Scope limitation

No authentication, credentials, API keys, database integration, server-side processing, or submitted form handlers were found in the audited static project. A full security assessment would require testing the deployed site and third-party integrations.

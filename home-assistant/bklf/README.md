# BKLF Home Assistant Configuration Package Scaffold

This folder contains the repo-owned Home Assistant configuration package scaffold for the Brian K. Lewis Funeral Home Home Assistant Green deployment.

These files are source-controlled reference assets. They are not automatically deployed to Home Assistant.

Operator rules:

- Copy or apply these files manually during the bench/live Home Assistant build.
- Verify live Home Assistant entity IDs before final use.
- Update the YAML if Home Assistant creates different entity IDs than the expected names in this scaffold.
- Use Home Assistant-supported YAML, package, and dashboard import methods.
- Do not edit hidden `.storage` files directly.
- Create a Home Assistant backup before importing or changing YAML.
- Create another backup after a successful import and validation pass.

Expected import targets:

- Package YAML: copy to Home Assistant `/config/packages/` after packages are enabled.
- Dashboard YAML: keep as a safe import/reference file and build the Lovelace dashboard using Home Assistant-supported YAML or manual UI methods.

Related docs:

- `docs/home-assistant/bklf-ha-config-package-install.md`
- `docs/home-assistant/bklf-ha-config-package-entity-id-checklist.md`
- `docs/home-assistant/bklf-ha-live-build-checklist.md`
- `docs/home-assistant/bklf-ha-dashboard-and-entity-spec.md`

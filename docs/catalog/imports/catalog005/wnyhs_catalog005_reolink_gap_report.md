# WNYHS CATALOG005 Reolink Gap Report

Date: 2026-06-18

## Included records
17 verified Reolink records are included in this tranche.

## Major validation gaps
- WNYHS bench validation is still required for all included records before any promotion beyond `conditional`.
- Home Assistant Green must remain documented as orchestration/control/dashboard only, not primary 24/7 recording.
- Recording/storage must remain on the Reolink camera, Home Hub, NVR, microSD, HDD, NAS, or other supported storage architecture.
- Vendor app/client remains limited to setup, firmware updates, troubleshooting, and advanced feature configuration where applicable.

## Repeating missing-evidence themes
- WNYHS bench validation not yet completed.
- Confirm final field behavior after current production firmware on target camera mix.
- Confirm deployed hardware/firmware revision behavior for target camera mix.
- Confirm PTZ/tracking behavior and entity set under current production firmware.
- Confirm floodlight entity behavior and advanced panoramic presentation under current production firmware.
- Confirm preferred fisheye presentation and entity set under current production firmware.
- Confirm final entity set and Wi-Fi behavior under current production firmware.
- Confirm final entity set and advanced feature behavior under current production firmware.
- Confirm panoramic presentation and advanced feature behavior under current production firmware.
- Confirm PTZ/tracking presentation and advanced feature behavior under current production firmware.
- Confirm PTZ/tracking/floodlight presentation and advanced feature behavior under current production firmware.

## Special-feature validation focus
- Hubs/NVRs: discovery, entity stability, recording retention, and restart recovery.
- PTZ/tracking cameras: presets, patrol/tracking behavior, event latency, and restart recovery.
- Floodlight cameras: light controls, automation usefulness, and event-to-light response.
- Fisheye and dual-lens cameras: dashboard presentation, panoramic/dewarped views, and practical operator workflow.

## Record-level gaps

### Reolink Home Hub (reolink-home-hub)
- WNYHS bench validation not yet completed.
- Confirm final field behavior after current production firmware on target camera mix.
- Validation test: Validate hub discovery and stable Home Assistant onboarding.
- Validation test: Validate camera event/entity availability through the hub.
- Validation test: Validate recording retention, local playback path, and recovery after hub/router/Home Assistant restart.

### Reolink Home Hub Mini (reolink-home-hub-mini)
- WNYHS bench validation not yet completed.
- Confirm final field behavior after current production firmware on target camera mix.
- Validation test: Validate hub discovery and stable Home Assistant onboarding.
- Validation test: Validate camera event/entity availability through the hub.
- Validation test: Validate recording retention, local playback path, and recovery after hub/router/Home Assistant restart.

### Reolink Home Hub Pro (reolink-home-hub-pro)
- WNYHS bench validation not yet completed.
- Confirm final field behavior after current production firmware on target camera mix.
- Validation test: Validate hub discovery and stable Home Assistant onboarding.
- Validation test: Validate camera event/entity availability through the hub.
- Validation test: Validate recording retention, local playback path, and recovery after hub/router/Home Assistant restart.

### Reolink RLN8-410 (reolink-rln8-410)
- WNYHS bench validation not yet completed.
- Confirm deployed hardware/firmware revision behavior for target camera mix.
- Validation test: Validate NVR discovery and stable Home Assistant onboarding.
- Validation test: Validate event/entity exposure for connected cameras.
- Validation test: Validate recording retention, local playback path, and recovery after NVR/router/Home Assistant restart.

### Reolink RLN12W (reolink-rln12w)
- WNYHS bench validation not yet completed.
- Confirm deployed hardware/firmware revision behavior for target camera mix.
- Validation test: Validate NVR discovery and stable Home Assistant onboarding.
- Validation test: Validate event/entity exposure for connected cameras.
- Validation test: Validate recording retention, local playback path, and recovery after NVR/router/Home Assistant restart.

### Reolink RLN16-410 (reolink-rln16-410)
- WNYHS bench validation not yet completed.
- Confirm deployed hardware/firmware revision behavior for target camera mix.
- Validation test: Validate NVR discovery and stable Home Assistant onboarding.
- Validation test: Validate event/entity exposure for connected cameras.
- Validation test: Validate recording retention, local playback path, and recovery after NVR/router/Home Assistant restart.

### Reolink RLN36 (reolink-rln36)
- WNYHS bench validation not yet completed.
- Confirm deployed hardware/firmware revision behavior for target camera mix.
- Validation test: Validate NVR discovery and stable Home Assistant onboarding.
- Validation test: Validate event/entity exposure for connected cameras.
- Validation test: Validate recording retention, local playback path, and recovery after NVR/router/Home Assistant restart.

### Reolink E1 Outdoor Pro (reolink-e1-outdoor-pro)
- WNYHS bench validation not yet completed.
- Confirm PTZ/tracking behavior and entity set under current production firmware.
- Validation test: Validate Home Assistant onboarding and stable live stream.
- Validation test: Validate motion/person/vehicle entity exposure and latency.
- Validation test: Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path.

### Reolink Elite Floodlight WiFi (reolink-elite-floodlight-wifi)
- WNYHS bench validation not yet completed.
- Confirm floodlight entity behavior and advanced panoramic presentation under current production firmware.
- Validation test: Validate Home Assistant onboarding and stable live stream.
- Validation test: Validate motion/person/vehicle entity exposure and floodlight behavior.
- Validation test: Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path.

### Reolink FE-W (reolink-fe-w)
- WNYHS bench validation not yet completed.
- Confirm preferred fisheye presentation and entity set under current production firmware.
- Validation test: Validate Home Assistant onboarding and stable live stream.
- Validation test: Validate motion/person entity exposure and practical dashboard presentation.
- Validation test: Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path.

### Reolink RLC-810WA (reolink-rlc-810wa)
- WNYHS bench validation not yet completed.
- Confirm final entity set and Wi-Fi behavior under current production firmware.
- Validation test: Validate Home Assistant onboarding and stable live stream.
- Validation test: Validate motion/person/vehicle entity exposure and latency.
- Validation test: Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path.

### Reolink RLC-840WA (reolink-rlc-840wa)
- WNYHS bench validation not yet completed.
- Confirm final entity set and Wi-Fi behavior under current production firmware.
- Validation test: Validate Home Assistant onboarding and stable live stream.
- Validation test: Validate motion/person/vehicle entity exposure and latency.
- Validation test: Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path.

### Reolink RP-WCB8MZ (reolink-rp-wcb8mz)
- WNYHS bench validation not yet completed.
- Confirm final entity set and advanced feature behavior under current production firmware.
- Validation test: Validate Home Assistant onboarding and stable live stream.
- Validation test: Validate motion/person/vehicle entity exposure and latency.
- Validation test: Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path.

### Reolink Duo 3 WiFi (reolink-duo-3-wifi)
- WNYHS bench validation not yet completed.
- Confirm panoramic presentation and advanced feature behavior under current production firmware.
- Validation test: Validate Home Assistant onboarding and stable live stream.
- Validation test: Validate motion/person/vehicle entity exposure and practical panoramic dashboard presentation.
- Validation test: Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path.

### Reolink Elite WiFi (reolink-elite-wifi)
- WNYHS bench validation not yet completed.
- Confirm panoramic presentation and advanced feature behavior under current production firmware.
- Validation test: Validate Home Assistant onboarding and stable live stream.
- Validation test: Validate motion/person/vehicle entity exposure and practical panoramic dashboard presentation.
- Validation test: Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path.

### Reolink TrackMix WiFi (reolink-trackmix-wifi)
- WNYHS bench validation not yet completed.
- Confirm PTZ/tracking presentation and advanced feature behavior under current production firmware.
- Validation test: Validate Home Assistant onboarding and stable live stream.
- Validation test: Validate motion/person/vehicle entity exposure plus practical PTZ/tracking behavior.
- Validation test: Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path.

### Reolink TrackFlex Floodlight WiFi (reolink-trackflex-floodlight-wifi)
- WNYHS bench validation not yet completed.
- Confirm PTZ/tracking/floodlight presentation and advanced feature behavior under current production firmware.
- Validation test: Validate Home Assistant onboarding and stable live stream.
- Validation test: Validate motion/person/vehicle entity exposure plus practical PTZ/tracking/floodlight behavior.
- Validation test: Validate restart recovery for camera/router/Home Assistant and confirm chosen storage path.

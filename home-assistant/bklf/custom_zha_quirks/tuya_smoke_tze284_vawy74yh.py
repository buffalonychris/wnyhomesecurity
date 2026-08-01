"""Scoped ZHA quirk for the BKLF Moes ZM-SSD01 smoke detectors."""

from zhaquirks.tuya.builder import TuyaQuirkBuilder


(
    TuyaQuirkBuilder("_TZE284_vawy74yh", "TS0601")
    .tuya_smoke(dp_id=1)
    .skip_configuration()
    .add_to_registry()
)

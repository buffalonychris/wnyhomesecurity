#!/bin/sh

set -eu
umask 077

usage() {
  printf '%s\n' "Usage: $0 SITE_SLUG [CONFIG_ROOT]" >&2
  printf '%s\n' "Example: $0 PECKHAM /config" >&2
}

if [ "$#" -lt 1 ] || [ "$#" -gt 2 ]; then
  usage
  exit 64
fi

site_input=$1
config_root=${2:-/config}

case "$site_input" in
  ''|*[!A-Za-z0-9_-]*|-*|_*)
    printf '%s\n' "ERROR: SITE_SLUG must start with a letter or digit and contain only letters, digits, underscores, or hyphens." >&2
    exit 64
    ;;
esac

site_slug=$(printf '%s' "$site_input" | tr '[:lower:]' '[:upper:]')
storage_root=$config_root/.storage

entity_source=$storage_root/core.entity_registry
device_source=$storage_root/core.device_registry
area_source=$storage_root/core.area_registry
floor_source=$storage_root/core.floor_registry
label_source=$storage_root/core.label_registry

for required_source in "$entity_source" "$device_source" "$area_source"; do
  if [ ! -f "$required_source" ]; then
    printf '%s\n' "ERROR: required Home Assistant registry is missing: $required_source" >&2
    exit 66
  fi
done

timestamp=$(date -u '+%Y%m%dT%H%M%SZ')
export_parent=$config_root/wnyhs-export
export_dir=$export_parent/${site_slug}_${timestamp}

mkdir -p "$export_parent"
if [ -e "$export_dir" ]; then
  printf '%s\n' "ERROR: export directory already exists: $export_dir" >&2
  exit 73
fi
mkdir "$export_dir"

entity_output=${site_slug}_ENTITY_REGISTRY.json
device_output=${site_slug}_DEVICE_REGISTRY.json
area_output=${site_slug}_AREA_REGISTRY.json
floor_output=${site_slug}_FLOOR_REGISTRY.json
label_output=${site_slug}_LABEL_REGISTRY.json
manifest_output=${site_slug}_HA_EXPORT_MANIFEST.txt

cp "$entity_source" "$export_dir/$entity_output"
cp "$device_source" "$export_dir/$device_output"
cp "$area_source" "$export_dir/$area_output"

exported_files="$entity_output
$device_output
$area_output"
missing_optional=""

if [ -f "$floor_source" ]; then
  cp "$floor_source" "$export_dir/$floor_output"
  exported_files="$exported_files
$floor_output"
else
  missing_optional="core.floor_registry"
fi

if [ -f "$label_source" ]; then
  cp "$label_source" "$export_dir/$label_output"
  exported_files="$exported_files
$label_output"
else
  if [ -n "$missing_optional" ]; then
    missing_optional="$missing_optional, core.label_registry"
  else
    missing_optional="core.label_registry"
  fi
fi

if [ -z "$missing_optional" ]; then
  missing_optional="none"
fi

manifest_path=$export_dir/$manifest_output
{
  printf 'WNYHS HA Registry Export Manifest\n'
  printf 'Site slug: %s\n' "$site_slug"
  printf 'Extraction timestamp (UTC): %s\n' "$timestamp"
  printf 'Source config root: %s\n' "$config_root"
  printf 'Export directory: %s\n' "$export_dir"
  printf 'Exported files:\n%s\n' "$exported_files"
  printf 'Missing optional registries: %s\n' "$missing_optional"
  printf 'Warning: These files are registry snapshots, not live-state evidence.\n'
  printf 'Warning: Raw exports are transient evidence and are not automatically safe to commit.\n'
} > "$manifest_path"

printf '%s\n' "WNYHS registry export complete: $export_dir"
printf '%s\n' "Manifest: $manifest_path"

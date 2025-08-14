<template>
  <section
    :style="{ maxHeight, overflow }"
    :id="props.accordionId"
    role="region"
    :aria-hidden="expanded"
    :aria-label="props.label"
  >
    <slot></slot>
  </section>
</template>

<script lang="ts" setup>
import type { CSSProperties, WatchHandle } from "vue";

const props = defineProps<{
  /** for `aria-controls` attribute */
  accordionId: string;
  /** for `aria-label` attribute */
  label: string;
}>();

const expanded = defineModel<boolean>({ required: true });

const maxHeight = computed<CSSProperties["maxHeight"]>(() =>
  expanded.value ? "10000rem" : "0"
);
const overflow = computed<CSSProperties["overflow"]>(() =>
  expanded.value ? "visible" : "hidden"
);

let watchersToStop: WatchHandle["stop"][] = [];
/** used to bind outer button for current accordion element */
function bindBtn(el: HTMLElement) {
  const { stop: s1 } = watch(
    () => props.accordionId,
    (v) => el.setAttribute("aria-controls", v),
    { immediate: true }
  );
  const { stop: s2 } = watch(
    () => props.label,
    (v) => el.setAttribute("aria-label", v),
    { immediate: true }
  );
  const { stop: s3 } = watch(
    expanded,
    (v) => el.setAttribute("aria-expanded", `${v}`),
    { immediate: true }
  );

  watchersToStop.push(s1, s2, s3);
}
/** stop watchers for updating attributes to accordion btn */
function unbindBtn() {
  watchersToStop.forEach((s) => s());
  watchersToStop = [];
}
defineExpose({ bindBtn, unbindBtn });
</script>

<style scoped></style>

const metrikaId = import.meta.env.VITE_YANDEX_METRIKA_ID;

type YandexMetrika = {
  (...args: unknown[]): void;
  a?: unknown[];
  l?: number;
};

declare global {
  interface Window {
    ym?: YandexMetrika;
  }
}

export function initAnalytics() {
  if (!metrikaId || window.ym) {
    return;
  }

  const counterId = Number(metrikaId);

  if (!Number.isFinite(counterId)) {
    return;
  }

  window.ym = function ymStub(...args: unknown[]) {
    window.ym!.a = window.ym!.a || [];
    window.ym!.a.push(args);
  } as YandexMetrika;
  window.ym.l = Date.now();

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://mc.yandex.ru/metrika/tag.js";
  document.head.appendChild(script);

  window.ym(counterId, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  });
}

export function reachGoal(goal: string, params?: Record<string, unknown>) {
  const counterId = Number(metrikaId);

  if (!Number.isFinite(counterId) || !window.ym) {
    return;
  }

  window.ym(counterId, "reachGoal", goal, params);
}

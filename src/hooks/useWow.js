import { useEffect } from "react";

export function useWow() {
  useEffect(() => {
    import("wowjs").then((WOW) => {
      const wow = new WOW.default.WOW({
        live: false,
        mobile: false,
      });
      wow.init();

      return () => {
        wow.destroy();
      };
    });
  }, []);
}

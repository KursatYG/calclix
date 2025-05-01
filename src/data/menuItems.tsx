import { MenuItem } from "@/types/menuItems";

export const menuItems: MenuItem[] = [
  {
    id: "calculator",
    label: "Hesap\nMakinesi",
    path: "/",
    icon: "zondicons:calculator",
  },
  {
    id: "money",
    label: "Para\nBirimi",
    path: "/currency",
    icon: "fontisto:money-symbol",
  },
  {
    id: "length",
    label: "Uzunluk",
    path: "/length",
    icon:"bxs:ruler",
  },
  {
    id: "bmi",
    label: "Vücut Kütle\nİndeksi",
    path: "/bmi",
    icon:"arcticons:bmi-calculator",
  },
  {
    id: "weight",
    label: "Kütle",
    path: "/weight",
    icon:"material-symbols:weight",
  },
  {
    id: "area",
    label: "Alan",
    path: "/area",
    icon:"carbon:area",
  },
  {
    id: "time",
    label: "Zaman",
    path: "/time",
    icon:"mingcute:time-fill",
  },
  {
    id: "finance",
    label: "Finans",
    path: "/finance",
    icon:"solar:money-bag-bold",
  },
  {
    id: "data",
    label: "Veri",
    path: "/data",
    icon:"icon-park-solid:data-server",
  },
  {
    id: "date",
    label: "Tarih",
    path: "/date",
    icon:"clarity:date-solid",
  },
  {
    id: "discount",
    label: "İndirim",
    path: "/discount",
    icon:"ic:baseline-discount",
  },

  {
    id: "volume",
    label: "Hacim",
    path: "/volume",
    icon:"mdi:cube",
  },

  {
    id: "speed",
    label: "Hız",
    path: "/speed",
    icon:"famicons:speedometer-sharp",
  },
  {
    id: "temp",
    label: "Sıcaklık",
    path: "/temp",
    icon:"carbon:temperature-max",
  },
];

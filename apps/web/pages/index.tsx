import { Button } from "ui";
import { Header } from "components";
import * as comps from "components";

const navigation = [
  {
    label: "Venda",
    link: "",
    children: [
      { label: "Venda", link: "" },
      { label: "Locação", link: "" },
      { label: "Locação", link: "" },
    ],
  },
  { label: "Locação", link: "" },
  {
    label: "Temporada",
    link: "",
    children: [
      { label: "Venda", link: "" },
      { label: "Locação", link: "" },
    ],
  },
];

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <comps.Button />

      <Header
        theme={"light"}
        logo={{ src: "https://picsum.photos/500/400?" + "uid" }}
        navigation={navigation}
      />
    </div>
  );
}

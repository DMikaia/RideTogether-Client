import { Car, ScanFace, Signpost } from "lucide-react";
import { ReasonElt } from "@/type/reason";

export const reasons: ReasonElt[] = [
  {
    icon: Signpost,
    title: "Voyagez à petits prix",
    description:
      "Quelle que soit votre destination, il existe une option de covoiturage abordable pour vous y rendre.",
  },
  {
    icon: ScanFace,
    title: "Fiable et simple",
    description:
      "Nous vérifions les avis et les profils pour vous assurer une tranquillité d'esprit. Voyagez en toute sécurité avec des compagnons fiables.",
  },
  {
    icon: Car,
    title: "Côte à côte, c'est idéal.",
    description:
      "Grâce à notre nouveau filtre, trouvez facilement un trajet près de chez vous sur la plus grande plateforme de covoiturage au monde.",
  },
];

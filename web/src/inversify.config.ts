import { container } from "inversify-props";
import IHealthServiceArea from "@/services/interfaces/IHealthServiceArea";
import HealthServiceArea from "@/services/HealthServiceArea";

export const Types = {
  HealthServiceAreaLookup: Symbol.for("HealthServiceAreaLookup"),
};

export default function bindDependencyInjection(): void {
  container
    .bind<IHealthServiceArea>(Types.HealthServiceAreaLookup)
    .to(HealthServiceArea)
    .inSingletonScope();
}

import { container } from "inversify-props";
import IHealthServiceArea from "@/services/IHealthServiceArea";
import HealthServiceArea from "@/services/implementation/HealthServiceArea";

export const Types = {
  HealthServiceAreaLookup: Symbol.for("HealthServiceAreaLookup"),
};

export default function bindDependencyInjection(): void {
  container
    .bind<IHealthServiceArea>(Types.HealthServiceAreaLookup)
    .to(HealthServiceArea)
    .inSingletonScope();
}

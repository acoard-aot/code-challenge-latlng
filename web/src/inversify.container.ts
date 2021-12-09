import { container } from 'inversify-props'
import IHealthServiceArea from '@/services/IHealthServiceArea'
import HealthServiceArea from '@/services/implementation/HealthServiceArea'

export const Types = {
    HealthServiceArea:Symbol.for("HealthServiceArea"),
}

export default function buildDependencyContainer (): void {
  container.bind<IHealthServiceArea>(Types.HealthServiceArea)
    .to(HealthServiceArea)
    .inSingletonScope();
}
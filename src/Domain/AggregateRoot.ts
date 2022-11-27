import { DomainEvent } from './DomainEvent';

export abstract class AggregateRoot implements DomainEvent {
  private event: Array<DomainEvent>;
  abstract publish(e: DomainEvent): void;
  abstract clean(): void;
}
